(() => {
  'use strict';

  /* ================= helpers ================= */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, n) => shuffle(a).slice(0, n);
  const rnd = a => a[Math.floor(Math.random() * a.length)];
  const uniq = a => [...new Set(a)];
  const DAY = 864e5;
  const clean = s => String(s).toLowerCase().replace(/[¿¡?!.,;:"«»()…→—]/g, ' ').replace(/\s+/g, ' ').trim();
  const deacc = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const ART = /^(el|la|los|las|un|una|unos|unas)\s+/;
  const PRAISE = ['¡Muy bien!', '¡Perfecto!', '¡Genial!', 'Great!', 'Excellent!', 'Nice one!', '¡Fantástico!'];

  /* ================= course data ================= */
  const ORDER = ['a1', 'a2', 'b1', 'b2', 'c1'];
  const LEVELS = (window.COURSE || []).slice().sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
  const LV = {}, UNITS = {}, WORDS = {};
  LEVELS.forEach((L, li) => {
    L.idx = li; LV[L.id] = L;
    L.units.forEach((u, i) => {
      u.idx = i; u.L = L; UNITS[u.id] = u;
      u.words.forEach(([es, en]) => { if (!WORDS[es]) WORDS[es] = { es, en, unit: u.id, level: L.id }; });
    });
  });
  const ALLWORDS = Object.values(WORDS);
  const READS = window.READINGS || [];

  /* ================= state ================= */
  const KEY = 'pasoapaso_v1';
  const DEF = {
    xp: 0, streak: 0, best: 0, lastDay: null, goal: 30, days: {}, done: {}, srs: {}, reads: {}, placement: null,
    settings: { rate: 0.9, voice: '', sound: true, autoplay: true, speak: true, unlock: false, theme: 'auto' }
  };
  const fresh = () => JSON.parse(JSON.stringify(DEF));
  const merge = s => Object.assign(fresh(), s, { settings: Object.assign(fresh().settings, s.settings || {}) });
  let S = (() => { try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') return merge(s); } catch (e) { } return fresh(); })();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };

  const dkey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dkey(d); };
  const streak = () => (S.lastDay === dkey() || S.lastDay === yesterday()) ? S.streak : 0;
  const todayXP = () => S.days[dkey()] || 0;
  function addXP(n) {
    const t = dkey();
    if (S.lastDay !== t) { S.streak = S.lastDay === yesterday() ? S.streak + 1 : 1; S.lastDay = t; S.best = Math.max(S.best, S.streak); }
    S.xp += n; S.days[t] = (S.days[t] || 0) + n; save();
  }

  /* spaced repetition (Leitner boxes) */
  const INT = [0, 1, 2, 4, 7, 15, 30, 60];
  const srsAdd = es => { if (!S.srs[es]) S.srs[es] = { b: 1, d: Date.now() + DAY }; };
  function srsGrade(es, ok) {
    const c = S.srs[es] || { b: 0, d: 0 };
    c.b = ok ? Math.min(c.b + 1, INT.length - 1) : 1;
    c.d = Date.now() + (ok ? INT[c.b] * DAY : 10 * 60 * 1000);
    S.srs[es] = c;
  }
  const learned = () => Object.keys(S.srs).filter(k => WORDS[k]);
  const dueWords = () => Object.entries(S.srs).filter(([k, v]) => WORDS[k] && v.d <= Date.now()).sort((a, b) => a[1].d - b[1].d).map(([k]) => k);

  const unlocked = u => S.settings.unlock || u.idx === 0 || !!S.done[u.L.units[u.idx - 1].id];
  const levelDone = L => L.units.filter(u => S.done[u.id]).length;
  function nextUnit() {
    const start = Math.max(0, ORDER.indexOf(S.placement));
    const order = [...LEVELS.slice(start), ...LEVELS.slice(0, start)];
    for (const L of order) for (const u of L.units) if (!S.done[u.id]) return u;
    return LEVELS[LEVELS.length - 1].units.slice(-1)[0];
  }

  /* ================= audio ================= */
  const TTS = {
    ok: 'speechSynthesis' in window, voices: [], voice: null, tok: 0,
    init() {
      if (!this.ok) return;
      const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); this.pick(); };
      load(); speechSynthesis.onvoiceschanged = load;
    },
    pick() {
      const p = S.settings.voice;
      this.voice = this.voices.find(v => v.name === p) || this.voices.find(v => /es[-_]ES/i.test(v.lang)) || this.voices[0] || null;
    },
    utter(text, slow) {
      const u = new SpeechSynthesisUtterance(String(text).replace(/[«»→—]/g, ' ').replace(/___/g, '…'));
      u.lang = this.voice ? this.voice.lang : 'es-ES';
      if (this.voice) u.voice = this.voice;
      u.rate = (S.settings.rate || 0.9) * (slow ? 0.6 : 1);
      return u;
    },
    say(u) {
      if (speechSynthesis.speaking || speechSynthesis.pending) { speechSynthesis.cancel(); setTimeout(() => speechSynthesis.speak(u), 60); }
      else speechSynthesis.speak(u);
    },
    speak(text, slow) { if (!this.ok || !text) return; this.tok++; this.say(this.utter(text, slow)); },
    queue(items, onItem, onDone) {
      if (!this.ok) return;
      const tok = ++this.tok; let i = 0;
      const go = () => {
        if (tok !== this.tok) return;
        if (i >= items.length) { onDone && onDone(); return; }
        onItem && onItem(items[i], i);
        const u = this.utter(items[i].text);
        u.onend = u.onerror = () => { i++; go(); };
        this.say(u);
      };
      go();
    },
    stop() { if (!this.ok) return; this.tok++; speechSynthesis.cancel(); }
  };
  TTS.init();

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let actx;
  function tone(seq, type = 'sine') {
    if (!S.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = actx.currentTime;
      seq.forEach(([f, t, d = 0.16]) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0 + t);
        g.gain.exponentialRampToValueAtTime(0.18, t0 + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + t + d);
        o.connect(g).connect(actx.destination); o.start(t0 + t); o.stop(t0 + t + d + 0.02);
      });
    } catch (e) { }
  }
  const sfx = {
    ok: () => tone([[660, 0], [990, 0.09]]),
    bad: () => { tone([[240, 0, .22], [190, 0.12, .25]], 'triangle'); navigator.vibrate && navigator.vibrate(120); },
    win: () => tone([[523, 0], [659, .12], [784, .24], [1047, .36, .35]])
  };

  /* global tap-to-speak */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-say]');
    if (t) { e.stopPropagation(); e.preventDefault(); TTS.speak(t.dataset.say, t.hasAttribute('data-slow')); }
  }, true);

  /* ================= UI helpers ================= */
  const view = () => $('#view');
  let toastT;
  function toast(msg, ms = 2200) {
    const t = $('#toast'); t.innerHTML = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), ms);
  }
  function modal(html, mount) {
    const s = $('#sheet');
    s.innerHTML = `<div class="backdrop"></div><div class="panel" role="dialog">${html}</div>`;
    s.classList.add('open');
    s.querySelector('.backdrop').onclick = closeModal;
    mount && mount(s);
  }
  function closeModal() { const s = $('#sheet'); s.classList.remove('open'); s.innerHTML = ''; }
  function confirmBox(title, text, okLabel, fn) {
    modal(`<h3>${title}</h3><p class="muted">${text}</p><div class="foot-row" style="margin-top:18px"><button class="btn ghost" data-x>Cancel</button><button class="btn bad" data-ok>${okLabel}</button></div>`, s => {
      s.querySelector('[data-x]').onclick = closeModal;
      s.querySelector('[data-ok]').onclick = () => { closeModal(); fn(); };
    });
  }
  const starsHtml = n => `<span class="stars">${[1, 2, 3].map(i => i <= n ? '★' : '<span class="off">★</span>').join('')}</span>`;
  const lvBadge = L => `<span class="badge" style="background:${L.color}">${L.name}</span>`;
  const wordRow = w => `<div class="word"><button class="speak" data-say="${esc(w.es)}" aria-label="Listen">🔊</button><div class="grow"><b>${esc(w.es)}</b><span class="muted small">${esc(w.en)}</span></div>${w.right || ''}</div>`;
  const backBtn = href => `<a class="icon-btn" href="${href}" aria-label="Back">←</a>`;
  const accentBar = () => `<div class="accents">${'á é í ó ú ñ ü ¿ ¡'.split(' ').map(c => `<button type="button" data-acc="${c}">${c}</button>`).join('')}</div>`;
  function bindAccents(root, inp) {
    $$('[data-acc]', root).forEach(b => {
      b.onpointerdown = e => e.preventDefault();
      b.onclick = () => {
        const s = inp.selectionStart ?? inp.value.length, e = inp.selectionEnd ?? s;
        inp.value = inp.value.slice(0, s) + b.dataset.acc + inp.value.slice(e);
        inp.selectionStart = inp.selectionEnd = s + 1; inp.focus();
        inp.dispatchEvent(new Event('input'));
      };
    });
  }
  function compare(input, answer) {
    const a = clean(input), b = clean(answer), bare = b.replace(ART, '');
    if (!a) return { ok: false };
    if (a === b) return { ok: true };
    if (a === bare) return { ok: true, note: `Remember the article: <b>${esc(answer)}</b>` };
    if (deacc(a) === deacc(b) || deacc(a) === deacc(bare)) return { ok: true, note: `Watch the accents: <b>${esc(answer)}</b>` };
    return { ok: false };
  }
  const tokens = s => s.replace(/[¿¡?!.,;:«»"—]/g, ' ').split(/\s+/).filter(Boolean);

  /* ================= question builders ================= */
  function others(w, pool, key, n) {
    return sample(uniq(pool.filter(x => x[key] !== w[key] && x.en !== w.en && x.es !== w.es).map(x => x[key])), n);
  }
  const qMC = (w, pool, srs) => ({ type: 'mc', label: 'Choose the correct meaning', prompt: w.es, say: w.es, answer: w.en, options: [w.en, ...others(w, pool, 'en', 3)], srs });
  const qMCrev = (w, pool, srs) => ({ type: 'mc', label: 'How do you say this in Spanish?', prompt: w.en, answer: w.es, options: [w.es, ...others(w, pool, 'es', 3)], optSay: true, srs });
  const qListen = (w, pool, srs) => ({ type: 'mc', label: 'What do you hear?', listen: true, say: w.es, answer: w.es, options: [w.es, ...others(w, pool, 'es', 3)], extra: w.en, srs });
  const qType = (w, srs) => ({ type: 'type', prompt: w.en, answer: w.es, srs });
  const qMatch = ws => ({ type: 'match', pairs: ws });
  function qFill(f, L, level) {
    const [q, a, o, tr] = f;
    return { type: 'fill', q, a, o, tr, typed: L.idx >= 2 && Math.random() < 0.4, level };
  }
  function qOrder(s, all, listen) {
    const [es, en] = s, target = tokens(es);
    const low = new Set(target.map(t => t.toLowerCase()));
    const extra = sample(uniq(all.filter(x => x[0] !== es).flatMap(x => tokens(x[0])).filter(t => !low.has(t.toLowerCase()))), target.length > 8 ? 2 : 3);
    return { type: 'order', es, en, listen, target, tiles: shuffle([...target, ...extra]) };
  }
  const qSentMC = (s, all) => ({ type: 'mc', label: 'What does this sentence mean?', prompt: s[0], say: s[0], answer: s[1], options: [s[1], ...sample(all.filter(x => x[1] !== s[1]).map(x => x[1]), 2)] });
  const qSpeak = s => ({ type: 'speak', es: s[0], en: s[1] });

  function wordsOf(units) { return units.flatMap(u => u.words.map(([es, en]) => ({ es, en }))); }

  function buildLesson(u) {
    const words = wordsOf([u]), W = shuffle(words), ss = shuffle(u.sents);
    const easy = [], mid = [], hard = [];
    W.slice(0, 3).forEach(w => easy.push(qMC(w, words)));
    W.slice(3, 5).forEach(w => easy.push(qListen(w, words)));
    W.slice(5, 7).forEach(w => easy.push(qMCrev(w, words)));
    mid.push(qMatch(sample(words, 5)));
    sample(u.fill, 3).forEach(f => mid.push(qFill(f, u.L)));
    mid.push(qSentMC(ss[4] || ss[0], u.sents));
    hard.push(qOrder(ss[0], u.sents, false), qOrder(ss[1], u.sents, false), qOrder(ss[2], u.sents, true));
    W.slice(7, 9).forEach(w => hard.push(qType(w)));
    if (SR && S.settings.speak) hard.push(qSpeak(ss[3] || ss[0]));
    return [...shuffle(easy), ...shuffle(mid), ...shuffle(hard)];
  }

  function buildPractice(units) {
    const words = wordsOf(units), sents = units.flatMap(u => u.sents);
    const q = [];
    sample(words, 4).forEach(w => q.push(qMC(w, words)));
    sample(words, 2).forEach(w => q.push(qListen(w, words)));
    q.push(qMatch(sample(words, 5)));
    sample(units.flatMap(u => u.fill.map(f => [f, u.L])), 3).forEach(([f, L]) => q.push(qFill(f, L)));
    sample(sents, 2).forEach((s, i) => q.push(qOrder(s, sents, i === 1)));
    sample(words, 1).forEach(w => q.push(qType(w)));
    return shuffle(q);
  }

  /* ================= session engine ================= */
  let sess = null;
  const R = {};

  function startSession(opts) {
    TTS.stop();
    const items = [...(opts.pre || []), ...opts.questions];
    sess = { opts, queue: items.slice(), total: items.length, done: 0, right: 0, wrong: 0, cur: null, answered: false };
    document.body.classList.add('immersive');
    view().innerHTML = `<div class="lesson">
      <div class="lesson-top"><button class="icon-btn" id="quit" aria-label="Quit">✕</button><div class="bar"><i id="prog" style="width:0"></i></div></div>
      <div class="lesson-body" id="qbody"></div><div class="lesson-foot" id="qfoot"></div></div>`;
    $('#quit').onclick = () => confirmBox('Quit this session?', 'Your progress in this session will be lost.', 'Quit', () => { sess = null; go(opts.exit || '#/'); });
    nextQ();
  }

  function nextQ() {
    const s = sess; if (!s) return;
    $('#prog').style.width = (s.done / s.total * 100) + '%';
    if (!s.queue.length) return finishSession();
    s.cur = s.queue.shift(); s.answered = false;
    const b = $('#qbody'), f = $('#qfoot');
    f.className = 'lesson-foot'; b.innerHTML = '';
    b.classList.remove('fade-in'); void b.offsetWidth; b.classList.add('fade-in');
    window.scrollTo(0, 0);
    R[s.cur.type](s.cur, b, f);
  }

  function footCheck(f, onCheck, skip) {
    f.innerHTML = `<div class="foot-row">${skip ? `<button class="btn ghost" id="skip">${skip.label}</button>` : ''}<button class="btn ok" id="check" disabled>Check</button></div>`;
    $('#check').onclick = onCheck;
    if (skip) $('#skip').onclick = skip.fn;
    return $('#check');
  }
  function footContinue(f, label = 'Continue') {
    f.innerHTML = `<div class="foot-row"><button class="btn" id="cont">${label}</button></div>`;
    $('#cont').onclick = () => { sess.done++; nextQ(); };
  }

  function feedback(res) {
    const s = sess, q = s.cur;
    if (!s || s.answered) return;
    s.answered = true;
    const scoreOk = res.scoreOk ?? res.ok;
    if (q.first === undefined && q.scored !== false) {
      q.first = scoreOk; scoreOk ? s.right++ : s.wrong++;
      if (q.srs) srsGrade(q.srs, scoreOk);
      s.opts.onAnswer && s.opts.onAnswer(q, scoreOk);
    }
    q.tries = (q.tries || 0) + 1;
    if (!res.ok && s.opts.retry !== false && q.tries < 3) s.queue.push(q); else s.done++;
    $('#prog').style.width = (s.done / s.total * 100) + '%';
    res.ok ? sfx.ok() : sfx.bad();
    if (res.say) setTimeout(() => TTS.speak(res.say), res.ok ? 250 : 400);
    const f = $('#qfoot');
    f.className = 'lesson-foot ' + (res.ok ? 'ok' : 'bad');
    f.innerHTML = `<div class="feedback"><h3>${res.ok ? '✅ ' + rnd(PRAISE) : '❌ Not quite'}</h3>
      ${!res.ok && res.answer ? `<div class="ans">Correct answer: ${res.answer}</div>` : ''}
      ${res.ok && res.show ? `<div class="ans">${res.show}</div>` : ''}
      ${res.extra ? `<div class="ans muted small">${res.extra}</div>` : ''}
      ${res.note ? `<div class="small" style="margin-top:4px">${res.note}</div>` : ''}</div>
      <div class="foot-row"><button class="btn ${res.ok ? 'ok' : 'bad'}" id="cont">Continue</button></div>`;
    $('#cont').onclick = nextQ;
    if (!res.ok) $('#qbody').classList.add('shake');
  }

  function finishSession() {
    const s = sess; sess = null;
    const n = s.right + s.wrong;
    s.opts.onFinish({ right: s.right, wrong: s.wrong, acc: n ? s.right / n : 1 });
  }

  function showResult({ emoji = '🏆', title, sub = '', xp = 0, acc = 1, stars = 0, actions = [] }) {
    sfx.win();
    document.body.classList.add('immersive');
    view().innerHTML = `<div class="lesson"><div class="lesson-body"><div class="result">
      <div class="trophy">${emoji}</div><h1>${title}</h1><p class="muted">${sub}</p>
      ${stars ? `<div style="font-size:2rem">${starsHtml(stars)}</div>` : ''}
      <div class="result-stats">
        <div class="card"><span class="muted small">XP</span><b>+${xp}</b></div>
        <div class="card"><span class="muted small">Accuracy</span><b>${Math.round(acc * 100)}%</b></div>
        <div class="card"><span class="muted small">Streak</span><b>🔥 ${streak()}</b></div>
      </div></div></div>
      <div class="lesson-foot"><div class="foot-row">${actions.map((a, i) => `<button class="btn ${a.cls || ''}" data-a="${i}">${a.label}</button>`).join('')}</div></div></div>`;
    $$('[data-a]').forEach(b => b.onclick = () => { const a = actions[+b.dataset.a]; typeof a.go === 'function' ? a.go() : go(a.go); });
  }

  /* ---------- renderers ---------- */
  R.words = (q, b, f) => {
    b.innerHTML = `<div class="q-label">New words</div><h2 class="q-title">${esc(q.title)}</h2>
      <p class="muted small">Tap 🔊 to hear each word.</p><div class="wordlist">${q.words.map(wordRow).join('')}</div>`;
    footContinue(f, "I'm ready");
  };
  R.grammar = (q, b, f) => {
    b.innerHTML = `<div class="q-label">Grammar</div><h2 class="q-title">${esc(q.g.title)}</h2><div class="card grammar">${q.g.html}</div>`;
    footContinue(f, 'Got it');
  };

  function optionsHtml(opts) {
    const long = opts.some(o => o.length > 26);
    return `<div class="options ${long ? '' : 'two'}">${opts.map((o, i) => `<button class="opt" data-k="${i + 1}" data-v="${esc(o)}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
  }
  function bindOptions(b, btn, onPick) {
    let sel = null;
    $$('.opt', b).forEach(el => el.onclick = () => {
      if (sess.answered) return;
      $$('.opt', b).forEach(x => x.classList.remove('sel'));
      el.classList.add('sel'); sel = el.dataset.v; btn.disabled = false;
      onPick && onPick(sel);
    });
    return () => sel;
  }
  function markOptions(b, answer, sel) {
    $$('.opt', b).forEach(el => {
      if (el.dataset.v === answer) el.classList.add('right');
      else if (el.dataset.v === sel) el.classList.add('wrong');
    });
  }

  R.mc = (q, b, f) => {
    const opts = shuffle(q.options);
    const head = q.listen
      ? `<div class="listen-center"><button class="big-speak" data-say="${esc(q.say)}" aria-label="Listen">🔊</button><button class="big-speak slow" data-say="${esc(q.say)}" data-slow aria-label="Listen slowly">🐢</button></div>`
      : `<div class="prompt">${q.say ? `<button class="big-speak" data-say="${esc(q.say)}" aria-label="Listen">🔊</button>` : ''}<div class="big">${esc(q.prompt)}</div></div>`;
    b.innerHTML = `<div class="q-label">${q.label}</div>${head}${optionsHtml(opts)}`;
    let get;
    const btn = footCheck(f, () => {
      const sel = get(), ok = sel === q.answer;
      markOptions(b, q.answer, sel);
      feedback({ ok, answer: esc(q.answer), extra: q.extra ? esc(q.listen ? `${q.answer} = ${q.extra}` : q.extra) : '', say: q.optSay ? q.answer : '' });
    });
    get = bindOptions(b, btn, sel => { if (q.optSay) TTS.speak(sel); });
    if (q.say && S.settings.autoplay) setTimeout(() => TTS.speak(q.say), 300);
  };

  R.type = (q, b, f) => {
    b.innerHTML = `<div class="q-label">Write this in Spanish</div><div class="prompt"><div class="big">${esc(q.prompt)}</div></div>
      <input class="text-in" id="tin" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" lang="es" placeholder="Type in Spanish…">${accentBar()}`;
    const inp = $('#tin');
    const btn = footCheck(f, () => {
      const r = compare(inp.value, q.answer); inp.disabled = true;
      feedback({ ok: r.ok, answer: `<b>${esc(q.answer)}</b>`, note: r.note, say: q.answer });
    });
    inp.oninput = () => btn.disabled = !inp.value.trim();
    bindAccents(b, inp);
    setTimeout(() => inp.focus(), 250);
  };

  R.fill = (q, b, f) => {
    const m = q.q.match(/^(.*?)(\s*\(([^)]*)\))?$/);
    const sent = m[1], hint = m[3];
    const parts = sent.split('___');
    const full = parts.join(q.a);
    b.innerHTML = `<div class="q-label">Fill in the blank</div>
      <div class="sentence">${esc(parts[0])}<span class="blank" id="blank">${q.typed ? '?' : '&nbsp;'}</span>${esc(parts[1] || '')}</div>
      ${hint ? `<div class="pill" style="margin-bottom:8px">💡 ${esc(hint)}</div>` : ''}
      <p class="muted">${esc(q.tr)}</p>
      ${q.typed ? `<input class="text-in" id="tin" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" lang="es" placeholder="Type the missing word…">${accentBar()}` : optionsHtml(shuffle(q.o))}`;
    const fullHtml = esc(parts[0]) + `<b>${esc(q.a)}</b>` + esc(parts[1] || '');
    if (q.typed) {
      const inp = $('#tin');
      const btn = footCheck(f, () => {
        const r = compare(inp.value, q.a); inp.disabled = true;
        $('#blank').textContent = q.a;
        feedback({ ok: r.ok, answer: fullHtml, note: r.note, say: full });
      });
      inp.oninput = () => { btn.disabled = !inp.value.trim(); $('#blank').textContent = inp.value || '?'; };
      bindAccents(b, inp);
      setTimeout(() => inp.focus(), 250);
    } else {
      let get;
      const btn = footCheck(f, () => {
        const sel = get(), ok = sel === q.a;
        markOptions(b, q.a, sel); $('#blank').textContent = q.a;
        feedback({ ok, answer: fullHtml, say: full });
      });
      get = bindOptions(b, btn, sel => { $('#blank').textContent = sel; });
    }
  };

  R.order = (q, b, f) => {
    const picked = [];
    b.innerHTML = `<div class="q-label">${q.listen ? 'Tap what you hear' : 'Translate this sentence'}</div>
      ${q.listen
        ? `<div class="listen-center"><button class="big-speak" data-say="${esc(q.es)}">🔊</button><button class="big-speak slow" data-say="${esc(q.es)}" data-slow>🐢</button></div>`
        : `<div class="prompt"><div class="big" style="font-size:1.3rem">${esc(q.en)}</div></div>`}
      <div class="answer-zone" id="zone"></div><div class="bank" id="bank"></div>`;
    const zone = $('#zone'), bank = $('#bank');
    let btn;
    const draw = () => {
      bank.innerHTML = q.tiles.map((t, i) => `<button class="tile ${picked.includes(i) ? 'ghost' : ''}" data-i="${i}">${esc(t)}</button>`).join('');
      zone.innerHTML = picked.map(i => `<button class="tile" data-i="${i}">${esc(q.tiles[i])}</button>`).join('');
      $$('.tile', bank).forEach(el => el.onclick = () => { if (sess.answered) return; picked.push(+el.dataset.i); draw(); });
      $$('.tile', zone).forEach(el => el.onclick = () => { if (sess.answered) return; picked.splice(picked.indexOf(+el.dataset.i), 1); draw(); });
      if (btn) btn.disabled = !picked.length;
    };
    btn = footCheck(f, () => {
      const ok = clean(picked.map(i => q.tiles[i]).join(' ')) === clean(q.target.join(' '));
      feedback({ ok, answer: `<b>${esc(q.es)}</b>`, extra: esc(q.en), say: q.es, show: ok && q.listen ? esc(q.en) : '' });
    });
    draw();
    if (q.listen && S.settings.autoplay) setTimeout(() => TTS.speak(q.es), 300);
  };

  R.match = (q, b, f) => {
    const L = shuffle(q.pairs.map((p, i) => ({ t: p.es, i }))), Rr = shuffle(q.pairs.map((p, i) => ({ t: p.en, i })));
    let selL = null, selR = null, matched = 0, mistakes = 0;
    b.innerHTML = `<div class="q-label">Match the pairs</div><h2 class="q-title">Tap the matching words</h2>
      <div class="match"><div class="options">${L.map(x => `<button class="opt" data-side="l" data-i="${x.i}" data-t="${esc(x.t)}">${esc(x.t)}</button>`).join('')}</div>
      <div class="options">${Rr.map(x => `<button class="opt" data-side="r" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div></div>`;
    f.innerHTML = `<p class="muted small" style="text-align:center;margin:6px 0">Find all ${q.pairs.length} pairs</p>`;
    const check = () => {
      if (!selL || !selR) return;
      const a = selL, c = selR; selL = selR = null;
      if (a.dataset.i === c.dataset.i) {
        a.classList.remove('sel'); c.classList.remove('sel');
        a.classList.add('right', 'done'); c.classList.add('right', 'done');
        matched++; tone([[700 + matched * 60, 0, .1]]);
        if (matched === q.pairs.length) feedback({ ok: true, scoreOk: mistakes <= 1, show: mistakes ? `${mistakes} mistake${mistakes > 1 ? 's' : ''}` : 'Perfect match!' });
      } else {
        mistakes++; sfx.bad();
        [a, c].forEach(x => { x.classList.remove('sel'); x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 450); });
      }
    };
    $$('.opt', b).forEach(el => el.onclick = () => {
      if (el.classList.contains('done')) return;
      if (el.dataset.side === 'l') { if (selL) selL.classList.remove('sel'); selL = el; TTS.speak(el.dataset.t); }
      else { if (selR) selR.classList.remove('sel'); selR = el; }
      el.classList.add('sel'); check();
    });
  };

  R.speak = (q, b, f) => {
    b.innerHTML = `<div class="q-label">Say this sentence</div>
      <div class="prompt"><button class="big-speak" data-say="${esc(q.es)}">🔊</button><div><div class="big" style="font-size:1.35rem">${esc(q.es)}</div><div class="muted">${esc(q.en)}</div></div></div>
      <button class="mic" id="mic" aria-label="Start speaking">🎤</button><p class="muted" id="heard" style="text-align:center">Tap the microphone and speak</p>`;
    const skipFn = () => { q.scored = false; sess.done++; nextQ(); };
    f.innerHTML = `<div class="foot-row"><button class="btn ghost" id="skip">Can't speak now</button></div>`;
    $('#skip').onclick = skipFn;
    const mic = $('#mic'); let rec = null;
    mic.onclick = () => {
      if (rec) { rec.stop(); return; }
      TTS.stop();
      try { rec = new SR(); } catch (e) { toast('Speech recognition is not available'); return; }
      rec.lang = 'es-ES'; rec.interimResults = false; rec.maxAlternatives = 3;
      mic.classList.add('rec'); $('#heard').textContent = 'Listening…';
      rec.onresult = e => {
        const target = deacc(clean(q.es)).split(' ');
        let best = { score: 0, text: '' };
        for (const alt of e.results[0]) {
          const said = new Set(deacc(clean(alt.transcript)).split(' '));
          const score = target.filter(w => said.has(w)).length / target.length;
          if (score > best.score || !best.text) best = { score, text: alt.transcript };
        }
        $('#heard').innerHTML = `You said: “${esc(best.text)}”`;
        feedback({ ok: best.score >= 0.7, answer: `<b>${esc(q.es)}</b>`, extra: `You said: “${esc(best.text)}” (${Math.round(best.score * 100)}% match)`, show: `${Math.round(best.score * 100)}% match` });
      };
      rec.onerror = e => { $('#heard').textContent = e.error === 'not-allowed' ? 'Microphone permission denied.' : 'Could not hear you — try again.'; };
      rec.onend = () => { mic.classList.remove('rec'); rec = null; };
      rec.start();
    };
  };

  /* keyboard support (tablets with keyboards, desktop) */
  document.addEventListener('keydown', e => {
    if (!sess) return;
    const inInput = e.target.tagName === 'INPUT';
    if (e.key === 'Enter') {
      const c = $('#cont') || $('#check');
      if (c && !c.disabled) { e.preventDefault(); c.click(); }
    } else if (!inInput && /^[1-9]$/.test(e.key)) {
      const o = $(`.opt[data-k="${e.key}"]`); o && o.click();
    }
  });

  /* ================= views ================= */
  function go(h) { if (location.hash === h) route(); else location.hash = h; }

  let installEvt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (!location.hash || location.hash === '#/') route(); });
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

  function home() {
    const u = nextUnit(), due = dueWords().length, tx = todayXP(), pct = Math.min(100, Math.round(tx / S.goal * 100));
    const curL = u.L;
    const unread = READS.find(r => r.level === curL.id && !S.reads[r.id]) || READS.find(r => !S.reads[r.id]);
    view().innerHTML = `
      <div class="topbar"><div class="brand">Paso <span>a</span> Paso</div>
        <div class="stats"><span class="pill" title="Day streak">🔥 ${streak()}</span><span class="pill" title="Total XP">⭐ ${S.xp}</span></div></div>
      <div class="grid two">
        <div class="card hero stack">
          <div class="muted small" style="font-weight:700">CONTINUE · ${curL.name} ${esc(curL.title)}</div>
          <h2>${u.icon} ${esc(u.title)}</h2><div class="muted">${esc(u.es)} · ${esc(u.grammar.title)}</div>
          <div><a class="btn" href="#/unit/${u.id}">${S.done[u.id] ? 'Review lesson' : 'Start lesson'}</a></div>
        </div>
        <div class="stack">
          <div class="card goal"><div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
            <div class="grow"><b>Daily goal</b><div class="muted small">${tx} / ${S.goal} XP today</div>
            ${tx >= S.goal ? '<div class="small" style="color:var(--ok);font-weight:700">Goal reached! 🎉</div>' : ''}</div></div>
          <a class="card row" href="#/review"><div style="font-size:2rem">🧠</div><div class="grow"><b>Review</b>
            <div class="muted small">${due ? `${due} word${due > 1 ? 's' : ''} ready to review` : learned().length ? 'All caught up — practise anyway' : 'Words you learn appear here'}</div></div>
            ${due ? `<span class="badge" style="background:var(--primary)">${due}</span>` : ''}</a>
        </div>
      </div>
      ${!S.placement && S.xp === 0 ? `<a class="card row" href="#/placement" style="margin-top:14px"><div style="font-size:2rem">🎯</div><div class="grow"><b>Already know some Spanish?</b><div class="muted small">Take the 15-question placement test</div></div><span>›</span></a>` : ''}
      ${installEvt ? `<div class="card row" style="margin-top:14px"><div style="font-size:2rem">📲</div><div class="grow"><b>Install the app</b><div class="muted small">Add Paso a Paso to your home screen and use it offline.</div></div><button class="btn sm" id="install">Install</button></div>` : ''}
      ${isIOS && !standalone && !installEvt ? `<div class="card row" style="margin-top:14px"><div style="font-size:2rem">📲</div><div class="grow"><b>Install on iPhone / iPad</b><div class="muted small">Tap <b>Share</b> → <b>Add to Home Screen</b> in Safari.</div></div></div>` : ''}
      <div class="section-title">Levels</div>
      <div class="grid two">${LEVELS.map(L => {
        const d = levelDone(L), n = L.units.length;
        return `<a class="card level-card" href="#/level/${L.id}"><div class="level-badge" style="background:${L.color}">${L.name}</div>
          <div class="grow"><div class="row between"><b>${esc(L.title)}</b><span class="muted small">${d}/${n}</span></div>
          <div class="muted small" style="margin:2px 0 8px">${esc(L.desc)}</div><div class="bar"><i style="width:${d / n * 100}%;background:${L.color}"></i></div></div></a>`;
      }).join('')}</div>
      ${unread ? `<div class="section-title">Reading</div><a class="card row" href="#/reading/${unread.id}"><div style="font-size:2rem">${unread.icon}</div>
        <div class="grow"><b>${esc(unread.title)}</b><div class="muted small">${lvBadge(LV[unread.level])} ${unread.author ? esc(unread.author) : 'Graded reading'}</div></div><span>›</span></a>` : ''}`;
    const ib = $('#install');
    if (ib) ib.onclick = async () => { installEvt.prompt(); await installEvt.userChoice; installEvt = null; route(); };
  }

  function levelView(id) {
    const L = LV[id]; if (!L) return go('#/');
    const d = levelDone(L);
    view().innerHTML = `<div class="page-head">${backBtn('#/')}<div class="grow"><h1>${L.name} · ${esc(L.title)}</h1><div class="muted small">${d} of ${L.units.length} lessons complete</div></div></div>
      <div class="bar" style="margin-bottom:16px"><i style="width:${d / L.units.length * 100}%;background:${L.color}"></i></div>
      <div class="grid two">${L.units.map(u => {
        const open = unlocked(u), dn = S.done[u.id];
        return `<a class="card unit ${open ? '' : 'locked'}" href="#/unit/${u.id}" style="--lvl:${L.color}">
          <div class="uic">${open ? u.icon : '🔒'}</div><div class="grow"><div class="muted small">Lesson ${u.idx + 1}</div><b>${esc(u.title)}</b>
          <div class="muted small">${esc(u.es)}</div></div>${dn ? starsHtml(dn.s) : ''}</a>`;
      }).join('')}</div>
      <div class="section-title">Practice</div>
      <a class="card row" href="#/practice/${L.id}"><div style="font-size:2rem">🏋️</div><div class="grow"><b>Mixed ${L.name} practice</b>
        <div class="muted small">${d ? 'Words, grammar and sentences from your completed lessons' : 'Complete a lesson first'}</div></div><span>›</span></a>`;
  }

  function unitView(id) {
    const u = UNITS[id]; if (!u) return go('#/');
    const open = unlocked(u), dn = S.done[u.id];
    view().innerHTML = `<div class="page-head">${backBtn('#/level/' + u.L.id)}<div class="grow"><div class="muted small">${lvBadge(u.L)} Lesson ${u.idx + 1}</div><h1>${u.icon} ${esc(u.title)}</h1><div class="muted">${esc(u.es)}</div></div></div>
      <div class="card stack" style="margin-bottom:16px">
        ${open ? `<div class="row between"><div><b>${dn ? 'Completed' : 'Ready to start'}</b><div class="muted small">${dn ? `Best: ${starsHtml(dn.s)} · played ${dn.n}×` : '~5 minutes · 12 words · grammar'}</div></div></div>
          <a class="btn block" href="#/lesson/${u.id}">${dn ? 'Practise again' : 'Start lesson'}</a>`
        : `<div class="row"><div style="font-size:2rem">🔒</div><div class="grow"><b>Locked</b><div class="muted small">Finish “${esc(u.L.units[u.idx - 1].title)}” to unlock this lesson. You can still read the notes below.</div></div></div>`}
      </div>
      <div class="tabs" id="tabs"><button class="on" data-t="g">Grammar</button><button data-t="w">Words</button><button data-t="s">Phrases</button></div>
      <div id="tabc"></div>`;
    const panes = {
      g: `<div class="card grammar"><h3>${esc(u.grammar.title)}</h3>${u.grammar.html}</div>`,
      w: `<div class="wordlist">${u.words.map(([es, en]) => wordRow({ es, en })).join('')}</div>`,
      s: `<div class="wordlist">${u.sents.map(([es, en]) => wordRow({ es, en })).join('')}</div>`
    };
    const show = t => { $$('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.t === t)); $('#tabc').innerHTML = panes[t]; };
    $$('#tabs button').forEach(b => b.onclick = () => show(b.dataset.t));
    show('g');
  }

  function lessonStart(id) {
    const u = UNITS[id]; if (!u) return go('#/');
    if (!unlocked(u)) { toast('🔒 Finish the previous lesson first'); return go('#/unit/' + id); }
    const first = !S.done[u.id];
    startSession({
      exit: '#/unit/' + u.id,
      pre: first ? [{ type: 'words', title: u.title, words: u.words.map(([es, en]) => ({ es, en })), scored: false }, { type: 'grammar', g: u.grammar, scored: false }] : [],
      questions: buildLesson(u),
      onFinish: st => {
        const stars = st.acc >= 0.9 ? 3 : st.acc >= 0.7 ? 2 : 1;
        const prev = S.done[u.id];
        S.done[u.id] = { s: Math.max(stars, prev ? prev.s : 0), n: (prev ? prev.n : 0) + 1, t: Date.now() };
        u.words.forEach(([es]) => srsAdd(es));
        const xp = 10 + st.right; addXP(xp);
        const nxt = u.L.units[u.idx + 1];
        const nextL = LEVELS[u.L.idx + 1];
        const levelComplete = !nxt && levelDone(u.L) === u.L.units.length;
        showResult({
          emoji: levelComplete ? '🎓' : stars === 3 ? '🏆' : '🎉',
          title: levelComplete ? `Level ${u.L.name} complete!` : 'Lesson complete!',
          sub: levelComplete ? '¡Enhorabuena! You finished every lesson in this level.' : `${esc(u.title)} · ${u.words.length} words added to your review`,
          xp, acc: st.acc, stars,
          actions: [
            { label: 'Again', cls: 'ghost', go: () => route() },
            nxt ? { label: 'Next lesson', go: '#/unit/' + nxt.id } : nextL ? { label: `Go to ${nextL.name}`, go: '#/level/' + nextL.id } : { label: 'Done', go: '#/' }
          ]
        });
      }
    });
  }

  function practiceStart(id) {
    const L = LV[id]; if (!L) return go('#/');
    const units = L.units.filter(u => S.done[u.id]);
    if (!units.length) { toast('Complete a lesson in this level first'); return go('#/level/' + id); }
    startSession({
      exit: '#/level/' + id, questions: buildPractice(units),
      onFinish: st => {
        const xp = 5 + st.right; addXP(xp);
        showResult({ emoji: '💪', title: 'Practice complete!', sub: `${L.name} mixed practice`, xp, acc: st.acc, actions: [{ label: 'Again', cls: 'ghost', go: () => route() }, { label: 'Done', go: '#/level/' + id }] });
      }
    });
  }

  function reviewQuestions(keys) {
    return keys.map(k => {
      const w = WORDS[k], pool = ALLWORDS.filter(x => x.level === w.level);
      const r = Math.random();
      return r < 0.3 ? qMC(w, pool, k) : r < 0.55 ? qMCrev(w, pool, k) : r < 0.8 ? qListen(w, pool, k) : qType(w, k);
    });
  }
  function reviewView(mode) {
    if (mode === 'go' || mode === 'free') {
      const keys = mode === 'go' ? dueWords().slice(0, 15) : sample(learned(), 12);
      if (!keys.length) return go('#/review');
      return startSession({
        exit: '#/review', questions: reviewQuestions(keys),
        onFinish: st => {
          const xp = 5 + st.right; addXP(xp); save();
          showResult({ emoji: '🧠', title: 'Review complete!', sub: `${keys.length} words reviewed`, xp, acc: st.acc, actions: [{ label: 'Done', go: '#/review' }] });
        }
      });
    }
    const due = dueWords(), L = learned();
    const boxes = [0, 0, 0];
    L.forEach(k => { const b = S.srs[k].b; boxes[b <= 2 ? 0 : b <= 4 ? 1 : 2]++; });
    view().innerHTML = `<div class="page-head"><div class="grow"><h1>Review</h1><div class="muted small">Spaced repetition keeps words in your long-term memory.</div></div></div>
      <div class="card stack" style="text-align:center">
        <div style="font-size:3rem">${due.length ? '🧠' : '✅'}</div>
        <h2>${due.length ? `${due.length} word${due.length > 1 ? 's' : ''} to review` : L.length ? 'All caught up!' : 'Nothing to review yet'}</h2>
        <p class="muted">${due.length ? 'Reviewing now strengthens your memory.' : L.length ? 'Come back later, or practise some random words now.' : 'Finish a lesson and its words will show up here.'}</p>
        ${due.length ? `<a class="btn block" href="#/review/go">Start review</a>` : L.length ? `<a class="btn ghost block" href="#/review/free">Practise anyway</a>` : `<a class="btn block" href="#/">Go to lessons</a>`}
      </div>
      ${L.length ? `<div class="section-title">Your memory</div>
      <div class="kpis"><div class="card kpi"><b>${L.length}</b><span class="muted small">words learned</span></div>
        <div class="card kpi"><b style="color:var(--bad)">${boxes[0]}</b><span class="muted small">new / weak</span></div>
        <div class="card kpi"><b style="color:var(--accent-dark)">${boxes[1]}</b><span class="muted small">getting there</span></div>
        <div class="card kpi"><b style="color:var(--ok)">${boxes[2]}</b><span class="muted small">strong</span></div></div>` : ''}
      ${LEVELS.some(l => levelDone(l)) ? `<div class="section-title">Level practice</div><div class="grid two">${LEVELS.filter(l => levelDone(l)).map(l =>
        `<a class="card row" href="#/practice/${l.id}"><div class="level-badge" style="background:${l.color};width:44px;height:44px;font-size:1rem">${l.name}</div><div class="grow"><b>${esc(l.title)} practice</b><div class="muted small">${levelDone(l)} lessons</div></div><span>›</span></a>`).join('')}</div>` : ''}`;
  }

  let dictLevel = 'all';
  function dictView() {
    view().innerHTML = `<div class="page-head"><div class="grow"><h1>Words</h1><div class="muted small">${ALLWORDS.length} words and expressions · tap 🔊 to listen</div></div></div>
      <input class="search" id="q" type="search" placeholder="Search Spanish or English…" autocomplete="off">
      <div class="chips" style="margin:12px 0">${['all', ...ORDER].map(l => `<button class="chip ${dictLevel === l ? 'on' : ''}" data-l="${l}">${l === 'all' ? 'All' : LV[l].name}</button>`).join('')}</div>
      <div class="wordlist" id="list"></div>`;
    const draw = () => {
      const q = deacc(clean($('#q').value));
      const rows = ALLWORDS.filter(w => (dictLevel === 'all' || w.level === dictLevel) && (!q || deacc(w.es.toLowerCase()).includes(q) || w.en.toLowerCase().includes(q)));
      $('#list').innerHTML = rows.length ? rows.map(w => {
        const s = S.srs[w.es];
        return wordRow({ ...w, right: `${s ? `<span title="Learned" style="color:var(--ok)">✓</span>` : ''}<span class="badge" style="background:${LV[w.level].color}">${LV[w.level].name}</span>` });
      }).join('') : `<p class="muted">No words found.</p>`;
    };
    $('#q').oninput = draw;
    $$('.chip').forEach(c => c.onclick = () => { dictLevel = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }

  let readLevel = 'all';
  function readList() {
    view().innerHTML = `<div class="page-head"><div class="grow"><h1>Reading</h1><div class="muted small">Graded texts and classic literature with audio, translations and quizzes.</div></div></div>
      <div class="chips" style="margin-bottom:12px">${['all', ...ORDER].map(l => `<button class="chip ${readLevel === l ? 'on' : ''}" data-l="${l}">${l === 'all' ? 'All' : LV[l].name}</button>`).join('')}</div>
      <div class="grid two" id="rl"></div>`;
    const draw = () => {
      $('#rl').innerHTML = READS.filter(r => readLevel === 'all' || r.level === readLevel).map(r => {
        const d = S.reads[r.id];
        return `<a class="card row" href="#/reading/${r.id}"><div style="font-size:2.2rem">${r.icon}</div><div class="grow"><b>${esc(r.title)}</b>
          <div class="muted small">${lvBadge(LV[r.level])} ${r.author ? '📜 ' + esc(r.author) : 'Graded reading'}</div></div>${d ? `<span style="color:var(--ok);font-weight:800">✓ ${Math.round(d.best * 100)}%</span>` : '<span>›</span>'}</a>`;
      }).join('');
    };
    $$('.chip').forEach(c => c.onclick = () => { readLevel = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }

  function lookup(word, gloss) {
    const w = clean(word);
    for (const [es, en] of gloss) { const e = clean(es).split(' '); if (e.includes(w) && e.length <= 3) return [es, en]; }
    for (const k of [w, 'el ' + w, 'la ' + w, 'los ' + w, 'las ' + w]) if (WORDS[k]) return [k, WORDS[k].en];
    return null;
  }

  function readingView(id) {
    const r = READS.find(x => x.id === id); if (!r) return go('#/read');
    const wrap = t => esc(t).replace(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/g, '<span class="w">$1</span>');
    const d = S.reads[r.id];
    view().innerHTML = `<div class="page-head">${backBtn('#/read')}<div class="grow"><div class="muted small">${lvBadge(LV[r.level])} ${r.author ? esc(r.author) : 'Graded reading'}</div><h1>${r.icon} ${esc(r.title)}</h1></div></div>
      <div class="row" style="margin-bottom:12px;flex-wrap:wrap">
        <button class="btn sm" id="play">▶ Listen</button>
        <label class="row small" style="gap:8px"><span class="switch"><input type="checkbox" id="trans"><span></span></span>English translation</label>
      </div>
      <p class="muted small">Tap any word to hear it (and see its meaning when available).</p>
      <div class="card reader">${r.text.map((p, i) => `<div class="para" data-p="${i}"><p class="${r.poem ? 'poem' : ''}">${wrap(p)}</p>
        <div class="trans hidden ${r.poem ? 'poem' : ''}" style="${r.poem ? 'white-space:pre-line' : ''}">${esc(r.tr[i] || '')}</div>
        <button class="speak" data-say="${esc(p)}" aria-label="Listen to paragraph" style="margin-top:6px">🔊</button></div>`).join('')}</div>
      ${r.source ? `<p class="muted small">Source: ${esc(r.source)}</p>` : ''}
      <div class="section-title">Key vocabulary</div><div class="wordlist">${r.gloss.map(([es, en]) => wordRow({ es, en })).join('')}</div>
      <div class="card stack" style="margin-top:18px;text-align:center"><b>Check your understanding</b>
        <div class="muted small">${r.quiz.length} questions${d ? ` · best score ${Math.round(d.best * 100)}%` : ''}</div>
        <a class="btn block" href="#/quiz/${r.id}">Start quiz</a></div>`;
    $('#trans').onchange = e => $$('.trans').forEach(t => t.classList.toggle('hidden', !e.target.checked));
    $$('.reader .w').forEach(el => el.onclick = () => {
      TTS.speak(el.textContent);
      $$('.w.hl').forEach(x => x.classList.remove('hl')); el.classList.add('hl');
      const m = lookup(el.textContent, r.gloss);
      if (m) toast(`<b>${esc(m[0])}</b> — ${esc(m[1])}`);
    });
    let playing = false;
    const play = $('#play');
    const stop = () => { playing = false; TTS.stop(); play.textContent = '▶ Listen'; $$('.para').forEach(p => p.classList.remove('playing')); };
    play.onclick = () => {
      if (playing) return stop();
      const items = r.text.flatMap((p, i) => (p.match(/[^.!?…\n]+[.!?…]*[»”]?/g) || [p]).map(t => ({ text: t.trim(), p: i }))).filter(x => x.text);
      playing = true; play.textContent = '⏸ Stop';
      TTS.queue(items, it => { $$('.para').forEach(p => p.classList.toggle('playing', +p.dataset.p === it.p)); }, stop);
    };
  }

  function quizStart(id) {
    const r = READS.find(x => x.id === id); if (!r) return go('#/read');
    startSession({
      exit: '#/reading/' + id,
      questions: r.quiz.map(([q, a, o]) => ({ type: 'mc', label: 'Comprehension · ' + r.title, prompt: q, answer: a, options: o })),
      onFinish: st => {
        const prev = S.reads[r.id];
        S.reads[r.id] = { best: Math.max(st.acc, prev ? prev.best : 0), t: Date.now() };
        const xp = 5 + st.right * 2; addXP(xp);
        showResult({ emoji: '📚', title: 'Quiz complete!', sub: esc(r.title), xp, acc: st.acc, actions: [{ label: 'Re-read', cls: 'ghost', go: '#/reading/' + id }, { label: 'More texts', go: '#/read' }] });
      }
    });
  }

  function placementStart() {
    const qs = LEVELS.flatMap(L => sample(L.units.flatMap(u => u.fill), 3).map(f => ({ ...qFill(f, L, L.id), typed: false })));
    startSession({
      exit: '#/me', retry: false, questions: qs,
      onFinish: () => {
        let passed = -1;
        for (const L of LEVELS) {
          const ok = qs.filter(q => q.level === L.id && q.first).length;
          if (ok >= 2) passed = L.idx; else break;
        }
        const rec = LEVELS[Math.min(passed + 1, LEVELS.length - 1)];
        S.placement = rec.id; save();
        const right = qs.filter(q => q.first).length;
        showResult({
          emoji: '🎯', title: `Start at ${rec.name}`, sub: `${right}/${qs.length} correct. We recommend the <b>${rec.name} · ${esc(rec.title)}</b> level. You can still open any level.`,
          xp: 0, acc: right / qs.length, actions: [{ label: 'Home', cls: 'ghost', go: '#/' }, { label: `Open ${rec.name}`, go: '#/level/' + rec.id }]
        });
      }
    });
  }

  function profileView() {
    const L = learned().length, lessons = Object.keys(S.done).filter(k => UNITS[k]).length;
    const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return { k: dkey(d), l: d.toLocaleDateString('en', { weekday: 'short' })[0] }; });
    const max = Math.max(S.goal, ...days.map(d => S.days[d.k] || 0));
    const st = S.settings;
    const sw = (k, label, sub = '') => `<div class="setting"><div><b>${label}</b>${sub ? `<div class="muted small">${sub}</div>` : ''}</div><label class="switch"><input type="checkbox" data-s="${k}" ${st[k] ? 'checked' : ''}><span></span></label></div>`;
    view().innerHTML = `<div class="page-head"><div class="grow"><h1>Profile</h1><div class="muted small">Your progress is stored on this device.</div></div></div>
      <div class="kpis"><div class="card kpi"><b>⭐ ${S.xp}</b><span class="muted small">total XP</span></div>
        <div class="card kpi"><b>🔥 ${streak()}</b><span class="muted small">day streak (best ${S.best})</span></div>
        <div class="card kpi"><b>📖 ${lessons}</b><span class="muted small">lessons done</span></div>
        <div class="card kpi"><b>🧠 ${L}</b><span class="muted small">words learned</span></div></div>
      <div class="section-title">This week</div>
      <div class="card"><div class="week">${days.map((d, i) => `<div class="col ${i === 6 ? 'today' : ''}"><i style="height:${Math.round((S.days[d.k] || 0) / max * 100)}%"></i><span>${d.l}</span></div>`).join('')}</div></div>
      <div class="section-title">Levels</div>
      <div class="card stack">${LEVELS.map(l => `<div><div class="row between small"><b>${l.name} · ${esc(l.title)}</b><span class="muted">${levelDone(l)}/${l.units.length}</span></div><div class="bar"><i style="width:${levelDone(l) / l.units.length * 100}%;background:${l.color}"></i></div></div>`).join('')}
        <a class="btn ghost block" href="#/placement">🎯 ${S.placement ? `Retake placement test (current: ${LV[S.placement].name})` : 'Take placement test'}</a></div>
      <div class="section-title">Settings</div>
      <div class="card">
        <div class="setting"><div><b>Daily goal</b></div><select id="goal">${[10, 20, 30, 50, 80].map(g => `<option value="${g}" ${S.goal === g ? 'selected' : ''}>${g} XP</option>`).join('')}</select></div>
        <div class="setting"><div><b>Theme</b></div><select id="theme">${[['auto', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(([v, l]) => `<option value="${v}" ${st.theme === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
        <div class="setting"><div><b>Speech speed</b><div class="muted small" id="ratev">${st.rate.toFixed(2)}×</div></div><input type="range" id="rate" min="0.5" max="1.3" step="0.05" value="${st.rate}"></div>
        <div class="setting"><div><b>Spanish voice</b>${TTS.voices.length ? '' : '<div class="muted small">No Spanish voice found — install one in your device\'s text-to-speech settings.</div>'}</div>
          <select id="voice"><option value="">Default</option>${TTS.voices.map(v => `<option value="${esc(v.name)}" ${st.voice === v.name ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}</select></div>
        <div class="setting"><div></div><button class="btn sm ghost" data-say="¡Hola! Bienvenido a Paso a Paso. ¿Cómo estás?">🔊 Test voice</button></div>
        ${sw('autoplay', 'Auto-play audio', 'Play words automatically in exercises')}
        ${sw('sound', 'Sound effects')}
        ${SR ? sw('speak', 'Speaking exercises', 'Uses your microphone') : ''}
        ${sw('unlock', 'Unlock all lessons', 'Skip the lesson order inside each level')}
      </div>
      <div class="section-title">Your data</div>
      <div class="card stack">
        <div class="grid two"><button class="btn ghost" id="exp">⬇ Export progress</button><button class="btn ghost" id="imp">⬆ Import progress</button></div>
        <input type="file" id="impf" accept="application/json,.json" class="hidden">
        <button class="btn bad block" id="reset">Reset all progress</button>
      </div>
      <p class="muted small" style="text-align:center;margin-top:24px">Paso a Paso · ${LEVELS.reduce((n, l) => n + l.units.length, 0)} lessons · ${ALLWORDS.length} words · ${READS.length} readings<br>Literary texts by Machado, Bécquer and Cervantes are in the public domain.</p>`;
    $('#goal').onchange = e => { S.goal = +e.target.value; save(); };
    $('#theme').onchange = e => { st.theme = e.target.value; save(); applyTheme(); };
    $('#rate').oninput = e => { st.rate = +e.target.value; $('#ratev').textContent = st.rate.toFixed(2) + '×'; save(); };
    $('#voice').onchange = e => { st.voice = e.target.value; save(); TTS.pick(); TTS.speak('Hola, ¿qué tal?'); };
    $$('[data-s]').forEach(i => i.onchange = () => { st[i.dataset.s] = i.checked; save(); });
    $('#exp').onclick = () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' }));
      a.download = `paso-a-paso-${dkey()}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    $('#imp').onclick = () => $('#impf').click();
    $('#impf').onchange = async e => {
      try {
        const data = JSON.parse(await e.target.files[0].text());
        if (typeof data.xp !== 'number') throw 0;
        S = merge(data); save(); applyTheme(); toast('Progress imported ✓'); route();
      } catch (err) { toast('That file is not a valid progress export'); }
    };
    $('#reset').onclick = () => confirmBox('Reset all progress?', 'XP, streak, lessons and review history will be deleted. This cannot be undone.', 'Reset', () => {
      const keep = S.settings; S = fresh(); S.settings = keep; save(); toast('Progress reset'); route();
    });
  }

  /* ================= router ================= */
  const routes = { '': home, level: levelView, unit: unitView, lesson: lessonStart, practice: practiceStart, review: reviewView, words: dictView, read: readList, reading: readingView, quiz: quizStart, me: profileView, placement: placementStart };
  const navOf = { '': 'learn', level: 'learn', unit: 'learn', lesson: 'learn', practice: 'learn', review: 'review', words: 'words', read: 'read', reading: 'read', quiz: 'read', me: 'me', placement: 'me' };
  function route() {
    TTS.stop(); closeModal(); sess = null;
    document.body.classList.remove('immersive');
    const [p = '', a] = location.hash.replace(/^#\/?/, '').split('/');
    const fn = routes[p] || home;
    $$('#nav a').forEach(x => x.classList.toggle('active', x.dataset.nav === (navOf[p] || 'learn')));
    window.scrollTo(0, 0);
    fn(a ? decodeURIComponent(a) : a);
  }
  function applyTheme() {
    const t = S.settings.theme;
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.dataset.theme = t;
  }

  applyTheme();
  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { }));
  }
})();
