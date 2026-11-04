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
  const Conj = window.Conj;

  /* ================= course data ================= */
  const ORDER = ['a1', 'a2', 'b1', 'b2', 'c1'];
  const LEVELS = (window.COURSE || []).slice().sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
  const LV = {}, UNITS = {}, WORDS = {};
  LEVELS.forEach(L => { LV[L.id] = L; });
  (window.COURSE_EXTRA || []).forEach(x => {
    const L = LV[x.level]; if (!L) return;
    L.units.push(...x.units);
    if (x.order) { const by = Object.fromEntries(L.units.map(u => [u.id, u])); L.units = x.order.map(id => by[id]).filter(Boolean).concat(L.units.filter(u => !x.order.includes(u.id))); }
  });
  LEVELS.forEach((L, li) => {
    L.idx = li;
    L.units.forEach((u, i) => {
      u.idx = i; u.L = L; UNITS[u.id] = u;
      u.words.forEach(([es, en]) => { if (!WORDS[es]) WORDS[es] = { es, en, unit: u.id, level: L.id }; });
    });
  });
  const DECKS = window.DECKS || [];
  const DECK = {};
  DECKS.forEach(d => { DECK[d.id] = d; d.words.forEach(([es, en]) => { if (!WORDS[es]) WORDS[es] = { es, en, deck: d.id, level: d.level }; }); });
  const ALLWORDS = Object.values(WORDS);
  const READS = window.READINGS || [];
  const DIALOGS = window.DIALOGUES || [];
  const WRITING = window.WRITING || [];
  const PRON = window.PRON || { sections: [], pairs: [], twisters: [] };
  const VERBS = (window.VERBS || []).map(([v, en, f, lv]) => ({ v, en, lv, flags: f === 'acc' ? { acc: true } : f ? { st: f } : {} }));
  const VERB = Object.fromEntries(VERBS.map(x => [x.v, x]));
  const conjOf = x => Conj.conjugate(x.v, x.flags);
  const TENSE = Object.fromEntries(Conj.TENSES.map(t => [t.k, t]));
  const lvUpTo = lv => ORDER.slice(0, ORDER.indexOf(lv) + 1);
  const sentsOf = lv => LV[lv].units.flatMap(u => u.sents);

  /* ================= state ================= */
  const KEY = 'pasoapaso_v1';
  const DEF = {
    xp: 0, streak: 0, best: 0, lastDay: null, goal: 30, days: {}, done: {}, srs: {}, reads: {}, dialogs: {}, exams: {}, writing: {},
    placement: null, name: '', stats: { conj: 0, dict: 0, speak: 0, trans: 0 },
    drill: { tenses: ['pres'], level: 'a2', irregular: false },
    settings: { rate: 0.9, voice: '', voice2: '', sound: true, autoplay: true, speak: true, unlock: false, theme: 'auto' }
  };
  const fresh = () => JSON.parse(JSON.stringify(DEF));
  const merge = s => {
    const f = fresh();
    return Object.assign(f, s, { settings: Object.assign(f.settings, s.settings || {}), stats: Object.assign(f.stats, s.stats || {}), drill: Object.assign(f.drill, s.drill || {}) });
  };
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
  const curLevel = () => nextUnit().L.id;

  /* ================= numbers in Spanish ================= */
  const N_U = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
  const N_T = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const N_H = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  const n2 = n => n < 30 ? N_U[n] : N_T[Math.floor(n / 10)] + (n % 10 ? ' y ' + N_U[n % 10] : '');
  const n3 = n => { if (n === 100) return 'cien'; const h = Math.floor(n / 100), r = n % 100; return [h ? N_H[h] : '', r ? n2(r) : ''].filter(Boolean).join(' '); };
  const apoc = s => s.replace(/veintiuno$/, 'veintiún').replace(/uno$/, 'un');
  function numToEs(n) {
    if (n === 0) return 'cero';
    const m = Math.floor(n / 1e6), t = Math.floor(n % 1e6 / 1000), r = n % 1000, out = [];
    if (m) out.push(m === 1 ? 'un millón' : apoc(n3(m)) + ' millones');
    if (t) out.push(t === 1 ? 'mil' : apoc(n3(t)) + ' mil');
    if (r) out.push(n3(r));
    return out.join(' ');
  }
  function timeToEs(h, m) {
    const hw = x => x === 1 ? 'Es la una' : 'Son las ' + numToEs(x);
    if (m === 0) return hw(h) + ' en punto';
    if (m <= 30) return hw(h) + (m === 15 ? ' y cuarto' : m === 30 ? ' y media' : ' y ' + numToEs(m));
    const nh = h % 12 + 1;
    return hw(nh) + (m === 45 ? ' menos cuarto' : ' menos ' + numToEs(60 - m));
  }

  /* ================= audio ================= */
  const TTS = {
    ok: 'speechSynthesis' in window, voices: [], voice: null, voice2: null, tok: 0,
    init() {
      if (!this.ok) return;
      const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); this.pick(); };
      load(); speechSynthesis.onvoiceschanged = load;
    },
    pick() {
      const p = S.settings.voice;
      this.voice = this.voices.find(v => v.name === p) || this.voices.find(v => /es[-_]ES/i.test(v.lang)) || this.voices[0] || null;
      this.voice2 = this.voices.find(v => v.name === S.settings.voice2) || this.voices.find(v => v !== this.voice) || this.voice;
    },
    utter(text, o = {}) {
      const u = new SpeechSynthesisUtterance(String(text).replace(/[«»→—]/g, ' ').replace(/___/g, '…'));
      const v = o.voice || this.voice;
      u.lang = v ? v.lang : 'es-ES';
      if (v) u.voice = v;
      u.rate = (S.settings.rate || 0.9) * (o.slow ? 0.6 : 1);
      if (o.pitch) u.pitch = o.pitch;
      return u;
    },
    say(u) {
      if (speechSynthesis.speaking || speechSynthesis.pending) { speechSynthesis.cancel(); setTimeout(() => speechSynthesis.speak(u), 60); }
      else speechSynthesis.speak(u);
    },
    speak(text, slow) { if (!this.ok || !text) return; this.tok++; this.say(this.utter(text, { slow })); },
    queue(items, onItem, onDone) {
      if (!this.ok) return;
      const tok = ++this.tok; let i = 0;
      const go = () => {
        if (tok !== this.tok) return;
        if (i >= items.length) { onDone && onDone(); return; }
        onItem && onItem(items[i], i);
        const u = this.utter(items[i].text, items[i]);
        u.onend = u.onerror = () => { i++; setTimeout(go, items[i - 1] && items[i - 1].gap || 0); };
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

  /* microphone helper: listen once, return best transcript match against target */
  function listenOnce(target, onStart, onResult, onError) {
    if (!SR) { onError && onError('unsupported'); return null; }
    let rec;
    try { rec = new SR(); } catch (e) { onError && onError('unsupported'); return null; }
    rec.lang = 'es-ES'; rec.interimResults = false; rec.maxAlternatives = 3;
    rec.onresult = e => {
      const want = deacc(clean(target)).split(' ');
      let best = { score: 0, text: '' };
      for (const alt of e.results[0]) {
        const said = new Set(deacc(clean(alt.transcript)).split(' '));
        const score = want.filter(w => said.has(w)).length / want.length;
        if (score > best.score || !best.text) best = { score, text: alt.transcript };
      }
      onResult(best);
    };
    rec.onerror = e => onError && onError(e.error);
    TTS.stop(); rec.start(); onStart && onStart();
    return rec;
  }

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
  const head = (title, sub = '', back = '') => `<div class="page-head">${back ? backBtn(back) : ''}<div class="grow"><h1>${title}</h1>${sub ? `<div class="muted small">${sub}</div>` : ''}</div></div>`;
  const tabsBar = (items, cur) => `<div class="tabs">${items.map(([h, l]) => `<a class="${h === cur ? 'on' : ''}" href="${h}">${l}</a>`).join('')}</div>`;
  const tile = (href, icon, title, sub, right = '›') => `<a class="card row" href="${href}"><div style="font-size:2rem">${icon}</div><div class="grow"><b>${title}</b><div class="muted small">${sub}</div></div><span>${right}</span></a>`;
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
  function chipsHtml(items, cur, attr = 'l') {
    return `<div class="chips">${items.map(([v, l]) => `<button class="chip ${cur === v || (Array.isArray(cur) && cur.includes(v)) ? 'on' : ''}" data-${attr}="${v}">${l}</button>`).join('')}</div>`;
  }
  const levelChips = (cur, all = true) => chipsHtml([...(all ? [['all', 'All']] : []), ...ORDER.map(l => [l, LV[l].name])], cur);
  function compare(input, answer, strict) {
    const a = clean(input), b = clean(answer), bare = b.replace(ART, '');
    if (!a) return { ok: false };
    if (a === b) return { ok: true };
    if (!strict && a === bare) return { ok: true, note: `Remember the article: <b>${esc(answer)}</b>` };
    if (deacc(a) === deacc(b) || (!strict && deacc(a) === deacc(bare))) {
      return strict ? { ok: false, note: 'Almost! Check the <b>accents</b>.' } : { ok: true, note: `Watch the accents: <b>${esc(answer)}</b>` };
    }
    return { ok: false };
  }
  const tokens = s => s.replace(/[¿¡?!.,;:«»"—]/g, ' ').split(/\s+/).filter(Boolean);
  // word-level diff (LCS) between typed text and target
  function wordDiff(typed, target) {
    const a = deacc(clean(typed)).split(' ').filter(Boolean), b = deacc(clean(target)).split(' ').filter(Boolean), bt = clean(target).split(' ').filter(Boolean);
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    let i = 0, j = 0; const out = [];
    while (j < b.length) {
      if (i < a.length && a[i] === b[j]) { out.push(`<span style="color:var(--ok-dark)">${esc(bt[j])}</span>`); i++; j++; }
      else if (i < a.length && dp[i + 1][j] >= dp[i][j + 1]) i++;
      else { out.push(`<u style="color:var(--bad-dark);font-weight:800">${esc(bt[j])}</u>`); j++; }
    }
    return { score: b.length ? dp[0][0] / b.length : 1, html: out.join(' ') };
  }

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
  const qListenSent = (s, all) => ({ type: 'mc', label: 'Listen: what does it mean?', listen: true, say: s[0], answer: s[1], options: [s[1], ...sample(all.filter(x => x[1] !== s[1]).map(x => x[1]), 2)], extra: s[0] });
  const qSpeak = s => ({ type: 'speak', es: s[0], en: s[1] });
  const qDict = s => ({ type: 'dict', es: s[0], en: s[1] });
  const qTrans = s => ({ type: 'trans', es: s[0], en: s[1] });
  const DRILL_EXCL = new Set(['gustar', 'doler', 'encantar', 'interesar', 'molestar', 'llover', 'nevar', 'soler', 'amanecer', 'acontecer', 'concernir']);
  function qConj(x, tk) {
    const c = conjOf(x), imp = TENSE[tk].imp;
    let p = imp ? 1 + Math.floor(Math.random() * 5) : Math.floor(Math.random() * 6);
    if (x.v === 'haber' && imp) tk = 'pres';
    const ans = c[tk][p];
    const person = (TENSE[tk].imp ? Conj.IMP_PERSONS : Conj.PERSONS)[p];
    return { type: 'conj', verb: x.v, en: x.en, tense: tk, person, answer: ans };
  }

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
    b.classList.remove('fade-in', 'shake'); void b.offsetWidth; b.classList.add('fade-in');
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
  function skipQ() { sess.cur.scored = false; sess.done++; nextQ(); }
  function feedback(res) {
    const s = sess; if (!s || s.answered) return;
    const q = s.cur;
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
  const again = { label: 'Again', cls: 'ghost', go: () => route() };

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
  const listenBtns = say => `<div class="listen-center"><button class="big-speak" data-say="${esc(say)}" aria-label="Listen">🔊</button><button class="big-speak slow" data-say="${esc(say)}" data-slow aria-label="Listen slowly">🐢</button></div>`;
  R.mc = (q, b, f) => {
    const opts = shuffle(q.options);
    const passage = q.passage ? `<div class="card reader" style="margin-bottom:14px;max-height:40vh;overflow:auto"><p class="small" style="font-size:1rem;white-space:pre-line">${esc(q.passage)}</p></div>` : '';
    const top = q.listen ? listenBtns(q.say)
      : `<div class="prompt">${q.say ? `<button class="big-speak" data-say="${esc(q.say)}" aria-label="Listen">🔊</button>` : ''}<div class="big" ${q.prompt.length > 40 ? 'style="font-size:1.25rem"' : ''}>${esc(q.prompt)}</div></div>`;
    b.innerHTML = `<div class="q-label">${q.label}</div>${passage}${top}${optionsHtml(opts)}`;
    let get;
    const btn = footCheck(f, () => {
      const sel = get(), ok = sel === q.answer;
      markOptions(b, q.answer, sel);
      feedback({ ok, answer: esc(q.answer), extra: q.extra ? esc(q.listen && q.extra !== q.say ? `${q.answer} = ${q.extra}` : q.extra) : '', say: q.optSay ? q.answer : '' });
    });
    get = bindOptions(b, btn, sel => { if (q.optSay) TTS.speak(sel); });
    if (q.say && S.settings.autoplay) setTimeout(() => TTS.speak(q.say), 300);
  };
  const textInput = (ph, mode = 'text') => `<input class="text-in" id="tin" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" lang="es" inputmode="${mode}" placeholder="${ph}">`;
  R.type = (q, b, f) => {
    b.innerHTML = `<div class="q-label">Write this in Spanish</div><div class="prompt"><div class="big">${esc(q.prompt)}</div></div>${textInput('Type in Spanish…')}${accentBar()}`;
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
      ${q.typed ? textInput('Type the missing word…') + accentBar() : optionsHtml(shuffle(q.o))}`;
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
      ${q.listen ? listenBtns(q.es) : `<div class="prompt"><div class="big" style="font-size:1.3rem">${esc(q.en)}</div></div>`}
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
    f.innerHTML = `<div class="foot-row"><button class="btn ghost" id="skip">Can't speak now</button></div>`;
    $('#skip').onclick = skipQ;
    const mic = $('#mic'); let rec = null;
    mic.onclick = () => {
      if (rec) { rec.stop(); return; }
      rec = listenOnce(q.es, () => { mic.classList.add('rec'); $('#heard').textContent = 'Listening…'; }, best => {
        $('#heard').innerHTML = `You said: “${esc(best.text)}”`;
        if (best.score >= 0.7) S.stats.speak++;
        feedback({ ok: best.score >= 0.7, answer: `<b>${esc(q.es)}</b>`, extra: `You said: “${esc(best.text)}” (${Math.round(best.score * 100)}% match)`, show: `${Math.round(best.score * 100)}% match` });
      }, err => { $('#heard').textContent = err === 'not-allowed' ? 'Microphone permission denied.' : err === 'unsupported' ? 'Speech recognition is not available in this browser.' : 'Could not hear you — try again.'; });
      if (rec) rec.onend = () => { mic.classList.remove('rec'); rec = null; };
    };
  };
  R.conj = (q, b, f) => {
    const t = TENSE[q.tense];
    b.innerHTML = `<div class="q-label">Conjugate</div>
      <div class="card" style="margin-bottom:16px"><div class="row between"><div><div class="big" style="font-size:1.6rem;font-weight:800">${esc(q.verb)}</div><div class="muted small">${esc(q.en)}</div></div>
      <span class="pill">${esc(t.en)}</span></div>
      <div style="margin-top:10px"><span class="muted small">${esc(t.es)}</span><div style="font-size:1.2rem;font-weight:700;margin-top:4px">👤 ${esc(q.person)}</div></div></div>
      ${textInput(t.imp ? (q.tense === 'impNeg' ? 'no …' : 'Type the command…') : 'Type the verb form…')}${accentBar()}
      <p class="muted small" style="margin-top:10px">${/se$/.test(q.verb) && !t.imp ? 'Include the reflexive pronoun (e.g. <i>me levanto</i>).' : q.tense === 'impNeg' ? 'Include <i>no</i>.' : ''}</p>`;
    const inp = $('#tin');
    const btn = footCheck(f, () => {
      const r = compare(inp.value, q.answer, true); inp.disabled = true;
      if (r.ok) S.stats.conj++;
      feedback({ ok: r.ok, answer: `<b>${esc(q.answer)}</b>`, note: r.note, say: q.answer, extra: `<a href="#/verb/${encodeURIComponent(q.verb)}" style="text-decoration:underline">See the full table of ${esc(q.verb)}</a>` });
    });
    inp.oninput = () => btn.disabled = !inp.value.trim();
    bindAccents(b, inp);
    setTimeout(() => inp.focus(), 250);
  };
  R.input = (q, b, f) => {
    b.innerHTML = `<div class="q-label">${q.label}</div>${q.say ? listenBtns(q.say) : ''}${q.prompt ? `<div class="prompt"><div class="big">${esc(q.prompt)}</div></div>` : ''}
      ${textInput(q.placeholder || 'Type your answer…', q.mode || 'text')}${q.mode === 'numeric' ? '' : accentBar()}`;
    const inp = $('#tin');
    const btn = footCheck(f, () => { const r = q.check(inp.value); inp.disabled = true; feedback({ ok: r.ok, answer: `<b>${esc(q.answer)}</b>`, note: r.note, extra: q.extra || '', say: q.sayAfter }); });
    inp.oninput = () => btn.disabled = !inp.value.trim();
    if (q.mode !== 'numeric') bindAccents(b, inp);
    if (q.say && S.settings.autoplay) setTimeout(() => TTS.speak(q.say), 300);
    setTimeout(() => inp.focus(), 250);
  };
  R.dict = (q, b, f) => {
    b.innerHTML = `<div class="q-label">Dictation: write what you hear</div>${listenBtns(q.es)}
      <textarea class="text-in" id="tin" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false" lang="es" placeholder="Type the sentence in Spanish…"></textarea>${accentBar()}`;
    const inp = $('#tin');
    const btn = footCheck(f, () => {
      const d = wordDiff(inp.value, q.es), ok = d.score >= 0.9;
      const exact = clean(inp.value) === clean(q.es);
      inp.disabled = true; if (ok) S.stats.dict++;
      feedback({ ok, answer: `<b>${esc(q.es)}</b>`, show: exact ? 'Perfect dictation!' : `${Math.round(d.score * 100)}% of words correct`, extra: `${d.html}<br><span>${esc(q.en)}</span>`, note: !exact && ok ? 'Check the accents and the underlined words.' : '' });
    }, { label: 'Skip', fn: skipQ });
    inp.oninput = () => btn.disabled = !inp.value.trim();
    bindAccents(b, inp);
    if (S.settings.autoplay) setTimeout(() => TTS.speak(q.es), 300);
  };
  R.trans = (q, b, f) => {
    b.innerHTML = `<div class="q-label">Translate into Spanish</div><div class="prompt"><div class="big" style="font-size:1.35rem">${esc(q.en)}</div></div>
      <textarea class="text-in" id="tin" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false" lang="es" placeholder="Write it in Spanish…"></textarea>${accentBar()}`;
    const inp = $('#tin');
    const btn = footCheck(f, () => {
      inp.disabled = true;
      if (clean(inp.value) === clean(q.es)) { S.stats.trans++; return feedback({ ok: true, show: esc(q.es), say: q.es }); }
      const d = wordDiff(inp.value, q.es);
      TTS.speak(q.es);
      f.className = 'lesson-foot';
      f.innerHTML = `<div class="feedback"><h3>🤔 Compare with the model</h3><div class="ans"><b>${esc(q.es)}</b></div>
        <div class="small muted" style="margin-top:4px">Words from the model you used: ${Math.round(d.score * 100)}% · Other translations can also be correct.</div></div>
        <div class="foot-row"><button class="btn bad" id="no">✗ I was wrong</button><button class="btn ok" id="yes">✓ Mine is correct too</button></div>`;
      $('#yes').onclick = () => { S.stats.trans++; feedback({ ok: true, show: 'Great — well done!' }); };
      $('#no').onclick = () => feedback({ ok: false, answer: `<b>${esc(q.es)}</b>` });
    }, { label: 'Skip', fn: skipQ });
    inp.oninput = () => btn.disabled = !inp.value.trim();
    bindAccents(b, inp);
    setTimeout(() => inp.focus(), 250);
  };

  document.addEventListener('keydown', e => {
    if (!sess) return;
    const tag = e.target.tagName;
    if (e.key === 'Enter' && !(tag === 'TEXTAREA' && e.shiftKey)) {
      const c = $('#cont') || $('#check');
      if (c && !c.disabled) { e.preventDefault(); c.click(); }
    } else if (tag !== 'INPUT' && tag !== 'TEXTAREA' && /^[1-9]$/.test(e.key)) {
      const o = $(`.opt[data-k="${e.key}"]`); o && o.click();
    }
  });

  /* ================= views ================= */
  function go(h) { if (location.hash === h) route(); else location.hash = h; }
  let installEvt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (!location.hash || location.hash === '#/') route(); });
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const wordOfDay = () => { const d = new Date(); const n = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(); return ALLWORDS[(n * 7919) % ALLWORDS.length]; };

  function home() {
    const u = nextUnit(), due = dueWords().length, tx = todayXP(), pct = Math.min(100, Math.round(tx / S.goal * 100));
    const curL = u.L, wod = wordOfDay();
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
          ${tile('#/review', '🧠', 'Review', due ? `${due} word${due > 1 ? 's' : ''} ready to review` : learned().length ? 'All caught up — practise anyway' : 'Words you learn appear here', due ? `<span class="badge" style="background:var(--primary)">${due}</span>` : '›')}
        </div>
      </div>
      ${!S.placement && S.xp === 0 ? `<div style="margin-top:14px">${tile('#/placement', '🎯', 'Already know some Spanish?', 'Take the 15-question placement test')}</div>` : ''}
      ${installEvt ? `<div class="card row" style="margin-top:14px"><div style="font-size:2rem">📲</div><div class="grow"><b>Install the app</b><div class="muted small">Add Paso a Paso to your home screen and use it offline.</div></div><button class="btn sm" id="install">Install</button></div>` : ''}
      ${isIOS && !standalone && !installEvt ? `<div class="card row" style="margin-top:14px"><div style="font-size:2rem">📲</div><div class="grow"><b>Install on iPhone / iPad</b><div class="muted small">Tap <b>Share</b> → <b>Add to Home Screen</b> in Safari.</div></div></div>` : ''}
      <div class="grid two" style="margin-top:14px">
        <div class="card row"><button class="speak" data-say="${esc(wod.es)}">🔊</button><div class="grow"><div class="muted small" style="font-weight:700">WORD OF THE DAY</div><b style="font-size:1.2rem">${esc(wod.es)}</b><div class="muted small">${esc(wod.en)}</div></div>${lvBadge(LV[wod.level])}</div>
        ${unread ? tile('#/reading/' + unread.id, unread.icon, esc(unread.title), `${LV[unread.level].name} · ${unread.author ? esc(unread.author) : 'Graded reading'}`) : ''}
      </div>
      <div class="section-title">Levels</div>
      <div class="grid two">${LEVELS.map(L => {
        const d = levelDone(L), n = L.units.length, ex = S.exams[L.id];
        return `<a class="card level-card" href="#/level/${L.id}"><div class="level-badge" style="background:${L.color}">${L.name}</div>
          <div class="grow"><div class="row between"><b>${esc(L.title)} ${ex && ex.passed ? '🎓' : ''}</b><span class="muted small">${d}/${n}</span></div>
          <div class="muted small" style="margin:2px 0 8px">${esc(L.desc)}</div><div class="bar"><i style="width:${d / n * 100}%;background:${L.color}"></i></div></div></a>`;
      }).join('')}</div>`;
    const ib = $('#install');
    if (ib) ib.onclick = async () => { installEvt.prompt(); await installEvt.userChoice; installEvt = null; route(); };
  }

  function levelView(id) {
    const L = LV[id]; if (!L) return go('#/');
    const d = levelDone(L), ex = S.exams[id];
    view().innerHTML = head(`${L.name} · ${esc(L.title)}`, `${d} of ${L.units.length} lessons complete`, '#/') + `
      <div class="bar" style="margin-bottom:16px"><i style="width:${d / L.units.length * 100}%;background:${L.color}"></i></div>
      <div class="grid two">${L.units.map(u => {
        const open = unlocked(u), dn = S.done[u.id];
        return `<a class="card unit ${open ? '' : 'locked'}" href="#/unit/${u.id}" style="--lvl:${L.color}">
          <div class="uic">${open ? u.icon : '🔒'}</div><div class="grow"><div class="muted small">Lesson ${u.idx + 1}</div><b>${esc(u.title)}</b>
          <div class="muted small">${esc(u.es)}</div></div>${dn ? starsHtml(dn.s) : ''}</a>`;
      }).join('')}</div>
      <div class="section-title">Practice & exam</div>
      <div class="grid two">
        ${tile('#/mix/' + L.id, '🏋️', `Mixed ${L.name} practice`, d ? 'Words, grammar and sentences from your completed lessons' : 'Complete a lesson first')}
        ${tile('#/exam/' + L.id, '🎓', `${L.name} level exam`, ex ? `Best score ${Math.round(ex.best * 100)}% ${ex.passed ? '· Passed ✓' : ''}` : '30 questions · pass with 70%')}
      </div>`;
  }

  function unitView(id) {
    const u = UNITS[id]; if (!u) return go('#/');
    const open = unlocked(u), dn = S.done[u.id];
    view().innerHTML = `<div class="page-head">${backBtn('#/level/' + u.L.id)}<div class="grow"><div class="muted small">${lvBadge(u.L)} Lesson ${u.idx + 1}</div><h1>${u.icon} ${esc(u.title)}</h1><div class="muted">${esc(u.es)}</div></div></div>
      <div class="card stack" style="margin-bottom:16px">
        ${open ? `<div><b>${dn ? 'Completed' : 'Ready to start'}</b><div class="muted small">${dn ? `Best: ${starsHtml(dn.s)} · played ${dn.n}×` : `~5 minutes · ${u.words.length} words · grammar`}</div></div>
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
        const nxt = u.L.units[u.idx + 1], nextL = LEVELS[u.L.idx + 1];
        const levelComplete = !nxt && levelDone(u.L) === u.L.units.length;
        showResult({
          emoji: levelComplete ? '🎓' : stars === 3 ? '🏆' : '🎉',
          title: levelComplete ? `All ${u.L.name} lessons done!` : 'Lesson complete!',
          sub: levelComplete ? '¡Enhorabuena! Take the level exam to earn your certificate.' : `${esc(u.title)} · ${u.words.length} words added to your review`,
          xp, acc: st.acc, stars,
          actions: [again, levelComplete ? { label: 'Take the exam', go: '#/exam/' + u.L.id } : nxt ? { label: 'Next lesson', go: '#/unit/' + nxt.id } : nextL ? { label: `Go to ${nextL.name}`, go: '#/level/' + nextL.id } : { label: 'Done', go: '#/' }]
        });
      }
    });
  }

  function mixStart(id) {
    const L = LV[id]; if (!L) return go('#/');
    const units = L.units.filter(u => S.done[u.id]);
    if (!units.length) { toast('Complete a lesson in this level first'); return go('#/level/' + id); }
    startSession({
      exit: '#/level/' + id, questions: buildPractice(units),
      onFinish: st => { const xp = 5 + st.right; addXP(xp); showResult({ emoji: '💪', title: 'Practice complete!', sub: `${L.name} mixed practice`, xp, acc: st.acc, actions: [again, { label: 'Done', go: '#/level/' + id }] }); }
    });
  }

  /* ---------- practice hub ---------- */
  function practiceHub() {
    const due = dueWords().length;
    view().innerHTML = head('Practice', 'Train every skill: vocabulary, grammar, listening, speaking and writing.') + `
      <div class="grid two">
        ${tile('#/review', '🧠', 'Spaced review', due ? `${due} words due now` : 'Keep your vocabulary fresh', due ? `<span class="badge" style="background:var(--primary)">${due}</span>` : '›')}
        ${tile('#/drill', '🔁', 'Verb drills', `${VERBS.length} verbs · all tenses`)}
        ${tile('#/dictation', '✍️', 'Dictation', 'Listen and write full sentences')}
        ${tile('#/translate', '🔄', 'Translation', 'Write sentences in Spanish')}
        ${tile('#/numbers', '🔢', 'Numbers & time', 'Understand numbers, prices, years and the time')}
        ${tile('#/listen', '🎧', 'Listening', `${DIALOGS.length} dialogues with two voices`)}
        ${SR ? tile('#/speak', '🎤', 'Speaking', 'Repeat sentences and get feedback') : ''}
        ${tile('#/pron', '👄', 'Pronunciation', 'Sounds, stress, minimal pairs, tongue twisters')}
        ${tile('#/write', '📝', 'Writing tasks', `${WRITING.length} tasks with model answers`)}
        ${tile('#/exams', '🎓', 'Level exams', 'Earn a certificate for each level')}
        ${tile('#/placement', '🎯', 'Placement test', S.placement ? `Current recommendation: ${LV[S.placement].name}` : 'Find your starting level')}
      </div>`;
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
        onFinish: st => { const xp = 5 + st.right; addXP(xp); save(); showResult({ emoji: '🧠', title: 'Review complete!', sub: `${keys.length} words reviewed`, xp, acc: st.acc, actions: [{ label: 'Done', go: '#/review' }] }); }
      });
    }
    const due = dueWords(), L = learned();
    const boxes = [0, 0, 0];
    L.forEach(k => { const b = S.srs[k].b; boxes[b <= 2 ? 0 : b <= 4 ? 1 : 2]++; });
    view().innerHTML = head('Review', 'Spaced repetition keeps words in your long-term memory.', '#/practice') + `
      <div class="card stack" style="text-align:center">
        <div style="font-size:3rem">${due.length ? '🧠' : '✅'}</div>
        <h2>${due.length ? `${due.length} word${due.length > 1 ? 's' : ''} to review` : L.length ? 'All caught up!' : 'Nothing to review yet'}</h2>
        <p class="muted">${due.length ? 'Reviewing now strengthens your memory.' : L.length ? 'Come back later, or practise some random words now.' : 'Finish a lesson or study a word deck and its words will show up here.'}</p>
        ${due.length ? `<a class="btn block" href="#/review/go">Start review</a>` : L.length ? `<a class="btn ghost block" href="#/review/free">Practise anyway</a>` : `<a class="btn block" href="#/decks">Browse word decks</a>`}
      </div>
      ${L.length ? `<div class="section-title">Your memory</div>
      <div class="kpis"><div class="card kpi"><b>${L.length}</b><span class="muted small">words learned</span></div>
        <div class="card kpi"><b style="color:var(--bad)">${boxes[0]}</b><span class="muted small">new / weak</span></div>
        <div class="card kpi"><b style="color:var(--accent-dark)">${boxes[1]}</b><span class="muted small">getting there</span></div>
        <div class="card kpi"><b style="color:var(--ok)">${boxes[2]}</b><span class="muted small">strong</span></div></div>` : ''}
      ${LEVELS.some(l => levelDone(l)) ? `<div class="section-title">Level practice</div><div class="grid two">${LEVELS.filter(l => levelDone(l)).map(l =>
        tile('#/mix/' + l.id, `<span class="level-badge" style="background:${l.color};width:44px;height:44px;font-size:1rem">${l.name}</span>`, `${esc(l.title)} practice`, `${levelDone(l)} lessons`)).join('')}</div>` : ''}`;
  }

  /* ---------- verbs ---------- */
  let verbLevel = 'all';
  function verbsView() {
    view().innerHTML = head('Words') + tabsBar([['#/words', 'Dictionary'], ['#/decks', 'Decks'], ['#/verbs', 'Verbs']], '#/verbs') + `
      <a class="btn block" href="#/drill" style="margin-bottom:14px">🔁 Verb drills</a>
      <input class="search" id="q" type="search" placeholder="Search a verb (Spanish or English)…" autocomplete="off">
      <div style="margin:12px 0">${levelChips(verbLevel)}</div>
      <div class="wordlist" id="list"></div>`;
    const draw = () => {
      const q = deacc(clean($('#q').value));
      const rows = VERBS.filter(x => (verbLevel === 'all' || x.lv === verbLevel) && (!q || deacc(x.v).includes(q) || x.en.toLowerCase().includes(q)));
      $('#list').innerHTML = rows.map(x => `<a class="word" href="#/verb/${encodeURIComponent(x.v)}"><span class="speak" data-say="${esc(x.v)}">🔊</span><div class="grow"><b>${esc(x.v)}</b><span class="muted small">${esc(x.en)}</span></div><span class="badge" style="background:${LV[x.lv].color}">${LV[x.lv].name}</span></a>`).join('') || '<p class="muted">No verbs found. Try the conjugator: type any infinitive above and press Enter.</p>';
    };
    $('#q').oninput = draw;
    $('#q').onkeydown = e => { if (e.key === 'Enter' && /(ar|er|ir|ír)(se)?$/.test(clean($('#q').value))) go('#/verb/' + encodeURIComponent(clean($('#q').value))); };
    $$('.chip').forEach(c => c.onclick = () => { verbLevel = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }
  function verbView(inf) {
    const x = VERB[inf] || { v: inf, en: '', lv: 'c1', flags: {} };
    if (!/(ar|er|ir|ír)(se)?$/.test(inf)) return go('#/verbs');
    const c = conjOf(x);
    const cell = f => f ? `<td><button class="formbtn" data-say="${esc(f)}">${esc(f)}</button></td>` : '<td class="muted">—</td>';
    const table = (keys, imp) => keys.map(k => `<div class="card" style="margin-bottom:12px;overflow-x:auto"><div class="row between"><b>${esc(TENSE[k].en)}</b><span class="muted small">${esc(TENSE[k].es)}</span></div>
      <table class="g conj"><tbody>${(imp ? [1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5]).map(p => `<tr><td class="muted small">${(imp ? Conj.IMP_PERSONS : Conj.PERSONS)[p]}</td>${cell(c[k][p])}</tr>`).join('')}</tbody></table></div>`).join('');
    view().innerHTML = `<div class="page-head">${backBtn('#/verbs')}<div class="grow"><h1>${esc(inf)} <button class="speak" data-say="${esc(inf)}">🔊</button></h1><div class="muted">${esc(x.en || 'Conjugation generated by rule')}</div></div>${VERB[inf] ? lvBadge(LV[x.lv]) : ''}</div>
      <div class="card row" style="margin-bottom:14px;flex-wrap:wrap;gap:20px"><div><span class="muted small">Gerund</span><div><b>${esc(c.ger)}</b></div></div><div><span class="muted small">Past participle</span><div><b>${esc(c.part)}</b></div></div>
        ${VERB[inf] ? `<a class="btn sm" href="#/drillverb/${encodeURIComponent(inf)}">🔁 Drill this verb</a>` : ''}</div>
      ${!VERB[inf] ? '<p class="small muted">⚠️ This verb is not in the course list, so the table is generated by the regular rules and may miss irregularities.</p>' : ''}
      <div class="tabs" id="tabs"><button class="on" data-t="ind">Indicative</button><button data-t="sub">Subjunctive</button><button data-t="imp">Imperative</button></div>
      <div id="tabc"></div>`;
    const panes = {
      ind: `<div class="grid two">${table(['pres', 'pret', 'impf', 'fut', 'cond', 'perf', 'plus', 'futPerf', 'condPerf'])}</div>`,
      sub: `<div class="grid two">${table(['subj', 'subjImpf', 'subjImpfSe', 'subjPerf', 'subjPlus'])}</div>`,
      imp: `<div class="grid two">${table(['impAff', 'impNeg'], true)}</div>`
    };
    const show = t => { $$('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.t === t)); $('#tabc').innerHTML = panes[t]; };
    $$('#tabs button').forEach(b => b.onclick = () => show(b.dataset.t));
    show('ind');
  }
  function drillSetup() {
    const d = S.drill;
    view().innerHTML = head('Verb drills', 'Type the correct form. Accents count!', '#/practice') + `
      <div class="card stack">
        <b>Tenses</b>
        <div class="chips" style="flex-wrap:wrap">${Conj.TENSES.map(t => `<button class="chip ${d.tenses.includes(t.k) ? 'on' : ''}" data-t="${t.k}">${esc(t.en)} <span class="muted small">${LV[t.lv].name}</span></button>`).join('')}</div>
        <b>Verbs up to level</b>
        ${chipsHtml(ORDER.map(l => [l, LV[l].name]), d.level)}
        <label class="row small" style="gap:8px"><span class="switch"><input type="checkbox" id="irr" ${d.irregular ? 'checked' : ''}><span></span></span>Only irregular & stem-changing verbs</label>
        <button class="btn block" id="start">Start (15 questions)</button>
      </div>
      <div class="section-title">Tip</div><p class="muted small">Not sure? Every answer links to the full conjugation table. You can also open any verb from <a href="#/verbs" style="text-decoration:underline">Words → Verbs</a>.</p>`;
    $$('[data-t]').forEach(b => b.onclick = () => {
      const k = b.dataset.t, i = d.tenses.indexOf(k);
      if (i >= 0) { if (d.tenses.length > 1) d.tenses.splice(i, 1); } else d.tenses.push(k);
      b.classList.toggle('on', d.tenses.includes(k)); save();
    });
    $$('[data-l]').forEach(b => b.onclick = () => { d.level = b.dataset.l; $$('[data-l]').forEach(x => x.classList.toggle('on', x === b)); save(); });
    $('#irr').onchange = e => { d.irregular = e.target.checked; save(); };
    $('#start').onclick = () => go('#/drillgo');
  }
  const isIrregular = x => {
    if (Object.keys(x.flags).length) return true;
    const c = conjOf(x), reg = Conj.conjugate(x.v.replace(/se$/, ''), {});
    return /^(ser|estar|ir|haber|tener|hacer|poder|decir|poner|venir|saber|querer|dar|ver|salir|traer|caer|oír|conducir|traducir|producir|reducir|construir)$/.test(x.v.replace(/se$/, '')) || c.pret[0] !== reg.pret[0] || c.pres[0] !== reg.pres[0];
  };
  function drillStart(verbOnly) {
    const d = S.drill, lvs = lvUpTo(d.level);
    let pool = verbOnly ? [VERB[verbOnly]].filter(Boolean) : VERBS.filter(x => lvs.includes(x.lv) && !DRILL_EXCL.has(x.v));
    if (!verbOnly && d.irregular) pool = pool.filter(isIrregular);
    if (!pool.length) return go('#/drill');
    const tenses = verbOnly ? Conj.TENSES.filter(t => ORDER.indexOf(t.lv) <= ORDER.indexOf('b2')).map(t => t.k) : d.tenses;
    const qs = Array.from({ length: 15 }, () => qConj(rnd(pool), rnd(tenses)));
    startSession({
      exit: verbOnly ? '#/verb/' + encodeURIComponent(verbOnly) : '#/drill', questions: qs,
      onFinish: st => { const xp = 5 + st.right; addXP(xp); showResult({ emoji: '🔁', title: 'Drill complete!', sub: verbOnly ? esc(verbOnly) : tenses.map(t => TENSE[t].en).join(', '), xp, acc: st.acc, actions: [again, { label: 'Done', go: verbOnly ? '#/verb/' + encodeURIComponent(verbOnly) : '#/drill' }] }); }
    });
  }

  /* ---------- level picker sessions: dictation, translation, speaking ---------- */
  function levelPicker(title, sub, base, icon) {
    const cl = curLevel();
    view().innerHTML = head(title, sub, '#/practice') + `<div class="grid two">${LEVELS.map(L => tile(`#/${base}/${L.id}`, `<span class="level-badge" style="background:${L.color};width:48px;height:48px;font-size:1.05rem">${L.name}</span>`, `${icon} ${esc(L.title)}`, `${sentsOf(L.id).length} sentences${L.id === cl ? ' · your level' : ''}`)).join('')}</div>`;
  }
  function sentenceSession(kind, lv) {
    const L = LV[lv]; if (!L) return go('#/practice');
    const sents = sample(sentsOf(lv), 10);
    const make = { dictation: qDict, translate: qTrans, speak: qSpeak }[kind];
    startSession({
      exit: '#/' + kind, questions: sents.map(make), retry: kind !== 'translate',
      onFinish: st => { const xp = 5 + st.right * 2; addXP(xp); showResult({ emoji: { dictation: '✍️', translate: '🔄', speak: '🎤' }[kind], title: 'Well done!', sub: `${L.name} ${kind}`, xp, acc: st.acc, actions: [again, { label: 'Done', go: '#/' + kind }] }); }
    });
  }

  /* ---------- numbers & time ---------- */
  const NUM_MODES = [
    ['n100', '0 – 100', 'Listen and type the number', () => Math.floor(Math.random() * 101)],
    ['n1000', '100 – 1,000', 'Hundreds', () => 100 + Math.floor(Math.random() * 900)],
    ['nbig', 'Thousands & millions', 'Big numbers', () => rnd([1e3, 1e4, 1e5, 1e6]) * (1 + Math.floor(Math.random() * 9)) + Math.floor(Math.random() * 1000)],
    ['years', 'Years', '1492 – 2030', () => 1492 + Math.floor(Math.random() * 539)],
    ['prices', 'Prices', 'Euros and cents', () => +(Math.random() * 200).toFixed(2)],
    ['time', 'Telling the time', '¿Qué hora es?', null],
    ['write', 'Write the number', 'Digits → Spanish words', () => Math.floor(Math.random() * 2000)]
  ];
  function numbersView() {
    view().innerHTML = head('Numbers & time', 'Numbers are one of the hardest things to understand at speed. Train your ear!', '#/practice') +
      `<div class="grid two">${NUM_MODES.map(([k, t, s]) => tile('#/num/' + k, k === 'time' ? '🕐' : k === 'write' ? '✏️' : '🔢', t, s)).join('')}</div>`;
  }
  function numStart(mode) {
    const m = NUM_MODES.find(x => x[0] === mode); if (!m) return go('#/numbers');
    const qs = Array.from({ length: 10 }, () => {
      if (mode === 'time') {
        const h = 1 + Math.floor(Math.random() * 12), mi = 5 * Math.floor(Math.random() * 12), text = timeToEs(h, mi), ans = `${h}:${String(mi).padStart(2, '0')}`;
        return { type: 'input', label: 'What time is it? (e.g. 5:15)', say: text, answer: ans, mode: 'decimal', placeholder: 'h:mm', extra: esc(text),
          check: v => { const g = v.replace(/[.,h ]/g, ':').match(/^(\d{1,2}):?(\d{2})$/); return { ok: !!g && (+g[1] % 12 || 12) === h && +g[2] === mi }; } };
      }
      const n = m[3]();
      if (mode === 'write') {
        const words = numToEs(n);
        return { type: 'input', label: 'Write this number in Spanish words', prompt: n.toLocaleString('es-ES'), answer: words, sayAfter: words, check: v => compare(v.replace(/\s+y\s+/g, ' y '), words) };
      }
      if (mode === 'prices') {
        const eu = Math.floor(n), ce = Math.round((n - eu) * 100), text = `${numToEs(eu)} ${eu === 1 ? 'euro' : 'euros'}${ce ? ' con ' + numToEs(ce) : ''}`;
        return { type: 'input', label: 'Listen: how much is it? (e.g. 12.50)', say: text, answer: `${eu}.${String(ce).padStart(2, '0')} €`, mode: 'decimal', placeholder: '0.00', extra: esc(text),
          check: v => { const x = parseFloat(v.replace(',', '.').replace(/[^\d.]/g, '')); return { ok: Math.abs(x - (eu + ce / 100)) < 0.001 }; } };
      }
      const text = numToEs(n);
      return { type: 'input', label: 'Listen and type the number in digits', say: text, answer: String(n), mode: 'numeric', placeholder: '0', extra: esc(text),
        check: v => ({ ok: parseInt(v.replace(/[^\d]/g, ''), 10) === n }) };
    });
    startSession({ exit: '#/numbers', questions: qs, onFinish: st => { const xp = 5 + st.right; addXP(xp); showResult({ emoji: '🔢', title: 'Numbers complete!', sub: esc(m[1]), xp, acc: st.acc, actions: [again, { label: 'Done', go: '#/numbers' }] }); } });
  }

  /* ---------- pronunciation ---------- */
  function pronView() {
    view().innerHTML = head('Pronunciation', 'Tap any example to hear it. Use 🐢 for slow audio.', '#/practice') + `
      <div class="grid two" style="margin-bottom:14px">
        ${tile('#/pairs', '👂', 'Minimal pairs quiz', 'Hear the difference: pero / perro, año / ano…')}
        ${tile('#/twisters', '🌀', 'Tongue twisters', 'Trabalenguas to train your mouth')}
      </div>
      ${PRON.sections.map(s => `<details class="card" style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:800;font-size:1.05rem">${s.icon} ${esc(s.title)}</summary>
        <div class="grammar" style="margin-top:10px">${s.html}</div>
        <div class="chips" style="flex-wrap:wrap;margin-top:10px">${s.examples.map(e => `<button class="chip" data-say="${esc(e)}">🔊 ${esc(e)}</button>`).join('')}</div></details>`).join('')}`;
  }
  function pairsStart() {
    const qs = sample(PRON.pairs, 10).map(([a, b, ma, mb]) => {
      const pick = Math.random() < 0.5;
      const o = [`${a} (${ma})`, `${b} (${mb})`];
      return { type: 'mc', label: 'Which word do you hear?', listen: true, say: pick ? a : b, answer: pick ? o[0] : o[1], options: o };
    });
    startSession({ exit: '#/pron', questions: qs, onFinish: st => { const xp = 5 + st.right; addXP(xp); showResult({ emoji: '👂', title: 'Great ears!', sub: 'Minimal pairs', xp, acc: st.acc, actions: [again, { label: 'Done', go: '#/pron' }] }); } });
  }
  function twistersView() {
    view().innerHTML = head('Tongue twisters', 'Listen, then try to say them faster and faster.', '#/pron') + `<div class="stack">${PRON.twisters.map(([es, en], i) => `
      <div class="card"><p style="font-size:1.15rem;font-weight:700;margin:0 0 4px">${esc(es)}</p><p class="muted small" style="margin:0 0 10px">${esc(en)}</p>
      <div class="row"><button class="btn sm" data-say="${esc(es)}">🔊 Listen</button><button class="btn sm ghost" data-say="${esc(es)}" data-slow>🐢 Slow</button>
      ${SR ? `<button class="btn sm accent" data-tw="${i}">🎤 Try it</button>` : ''}<span class="small muted" id="tw${i}"></span></div></div>`).join('')}</div>`;
    $$('[data-tw]').forEach(b => b.onclick = () => {
      const i = +b.dataset.tw, out = $('#tw' + i);
      listenOnce(PRON.twisters[i][0], () => { out.textContent = 'Listening…'; }, best => {
        const pct = Math.round(best.score * 100); out.innerHTML = `${pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'} ${pct}% — “${esc(best.text)}”`;
        if (pct >= 80) { S.stats.speak++; addXP(3); }
      }, err => { out.textContent = err === 'not-allowed' ? 'Microphone permission denied.' : 'Could not hear you.'; });
    });
  }

  /* ---------- writing ---------- */
  function writeList() {
    view().innerHTML = head('Writing tasks', 'Write, check yourself with the checklist, then compare with a model answer.', '#/practice') + LEVELS.map(L => {
      const items = WRITING.filter(w => w.level === L.id); if (!items.length) return '';
      return `<div class="section-title">${lvBadge(L)} ${esc(L.title)}</div><div class="grid two">${items.map(w => tile('#/write/' + w.id, w.icon, esc(w.title), `${w.words[0]}–${w.words[1]} words`, S.writing[w.id] && S.writing[w.id].done ? '<span style="color:var(--ok);font-weight:800">✓</span>' : '›')).join('')}</div>`;
    }).join('');
  }
  function writeView(id) {
    const w = WRITING.find(x => x.id === id); if (!w) return go('#/write');
    const st = S.writing[id] || (S.writing[id] = { text: '', checks: [], done: false });
    view().innerHTML = `<div class="page-head">${backBtn('#/write')}<div class="grow"><div class="muted small">${lvBadge(LV[w.level])} Writing · ${w.words[0]}–${w.words[1]} words</div><h1>${w.icon} ${esc(w.title)}</h1></div></div>
      <div class="card" style="margin-bottom:12px"><b>Task</b><p style="margin:.4em 0 0">${esc(w.prompt)}</p></div>
      <div class="card" style="margin-bottom:12px"><b>Useful phrases</b><div class="chips" style="flex-wrap:wrap;margin-top:8px">${w.phrases.map(p => `<button class="chip" data-ins="${esc(p)}">${esc(p)}</button>`).join('')}</div><p class="muted small" style="margin:6px 0 0">Tap a phrase to insert it.</p></div>
      <textarea class="text-in" id="txt" rows="9" lang="es" spellcheck="true" placeholder="Escribe aquí…">${esc(st.text)}</textarea>${accentBar()}
      <div class="row between small" style="margin:8px 0 14px"><span class="muted" id="wc"></span><span class="muted">Saved automatically</span></div>
      <div class="card" style="margin-bottom:12px"><b>Self-check</b>${w.checklist.map((c, i) => `<label class="row small" style="gap:10px;margin-top:10px;align-items:flex-start"><input type="checkbox" data-ck="${i}" ${st.checks[i] ? 'checked' : ''} style="width:20px;height:20px;flex:none"> ${esc(c)}</label>`).join('')}</div>
      <details class="card" style="margin-bottom:12px"><summary style="cursor:pointer;font-weight:800">📄 Show model answer</summary>
        <p style="white-space:pre-line;margin-top:10px">${esc(w.model)}</p><button class="btn sm" data-say="${esc(w.model)}">🔊 Listen</button>
        <p class="muted small" style="white-space:pre-line;margin-top:10px">${esc(w.modelTr)}</p></details>
      <button class="btn block ${st.done ? 'ghost' : 'ok'}" id="fin">${st.done ? '✓ Completed — update' : 'Mark as completed (+15 XP)'}</button>`;
    const txt = $('#txt'), wc = $('#wc');
    const count = () => { const n = (txt.value.match(/\S+/g) || []).length; wc.textContent = `${n} words`; wc.style.color = n >= w.words[0] ? 'var(--ok)' : ''; };
    let t; txt.oninput = () => { count(); clearTimeout(t); t = setTimeout(() => { st.text = txt.value; save(); }, 400); };
    count(); bindAccents(view(), txt);
    $$('[data-ins]').forEach(b => b.onclick = () => { const s = txt.selectionStart ?? txt.value.length; txt.value = txt.value.slice(0, s) + b.dataset.ins + ' ' + txt.value.slice(s); txt.focus(); txt.dispatchEvent(new Event('input')); });
    $$('[data-ck]').forEach(c => c.onchange = () => { st.checks[+c.dataset.ck] = c.checked; save(); });
    $('#fin').onclick = () => {
      st.text = txt.value;
      const n = (txt.value.match(/\S+/g) || []).length;
      if (n < Math.floor(w.words[0] * 0.6)) return toast(`Write at least ${Math.floor(w.words[0] * 0.6)} words first`);
      if (!st.done) { st.done = true; addXP(15); sfx.win(); toast('Task completed! +15 XP'); }
      save(); route();
    };
  }

  /* ---------- exams & certificates ---------- */
  function examsView() {
    view().innerHTML = head('Level exams', '30 questions per level: vocabulary, grammar, sentences, listening and reading. Pass with 70% to earn a certificate.', '#/practice') +
      `<div class="grid two">${LEVELS.map(L => { const ex = S.exams[L.id]; return tile('#/exam/' + L.id, `<span class="level-badge" style="background:${L.color};width:48px;height:48px;font-size:1.05rem">${L.name}</span>`, `${esc(L.title)} ${ex && ex.passed ? '🎓' : ''}`, ex ? `Best ${Math.round(ex.best * 100)}%${ex.passed ? ' · certificate earned' : ''}` : 'Not taken yet'); }).join('')}</div>`;
  }
  function examView(lv) {
    const L = LV[lv]; if (!L) return go('#/exams');
    const ex = S.exams[lv], d = levelDone(L);
    view().innerHTML = head(`${L.name} level exam`, esc(L.title), '#/exams') + `
      <div class="card stack" style="text-align:center"><div style="font-size:3rem">🎓</div>
        <p>30 questions covering the whole ${L.name} level. No second chances on wrong answers — just like a real exam.</p>
        <p class="muted small">You have completed ${d} of ${L.units.length} lessons in this level.${d < L.units.length ? ' You can take the exam anyway.' : ''}</p>
        ${ex ? `<p><b>Best score: ${Math.round(ex.best * 100)}%</b> ${ex.passed ? '· Passed ✓' : ''}</p>` : ''}
        <a class="btn block" href="#/examgo/${lv}">${ex ? 'Retake exam' : 'Start exam'}</a>
        ${ex && ex.passed ? `<a class="btn ghost block" href="#/cert/${lv}">View certificate</a>` : ''}
      </div>`;
  }
  function examStart(lv) {
    const L = LV[lv]; if (!L) return go('#/exams');
    const units = L.units, words = ALLWORDS.filter(w => w.level === lv), sents = sentsOf(lv);
    const qs = [];
    sample(words, 8).forEach((w, i) => qs.push(i % 2 ? qMCrev(w, words) : qMC(w, words)));
    sample(units.flatMap(u => u.fill), 8).forEach(f => qs.push({ ...qFill(f, L), typed: false }));
    sample(sents, 4).forEach(s => qs.push(qOrder(s, sents, false)));
    sample(sents, 4).forEach(s => qs.push(qListenSent(s, sents)));
    const r = rnd(READS.filter(x => x.level === lv));
    if (r) r.quiz.forEach(([q, a, o]) => qs.push({ type: 'mc', label: 'Reading · ' + r.title, passage: r.text.join('\n\n'), prompt: q, answer: a, options: o }));
    const verbs = VERBS.filter(x => x.lv === lv && !DRILL_EXCL.has(x.v)), tenses = Conj.TENSES.filter(t => t.lv === lv || (lv === 'a1' && t.k === 'pres')).map(t => t.k);
    while (qs.length < 30 && verbs.length && tenses.length) qs.push(qConj(rnd(verbs), rnd(tenses)));
    startSession({
      exit: '#/exam/' + lv, retry: false, questions: shuffle(qs.slice(0, 30)),
      onFinish: st => {
        const prev = S.exams[lv], passed = st.acc >= 0.7;
        S.exams[lv] = { best: Math.max(st.acc, prev ? prev.best : 0), passed: passed || !!(prev && prev.passed), t: passed && !(prev && prev.passed) ? Date.now() : (prev ? prev.t : Date.now()) };
        const xp = 20 + st.right; addXP(xp);
        showResult({
          emoji: passed ? '🎓' : '📚', title: passed ? `You passed ${L.name}!` : 'Not quite yet',
          sub: passed ? 'Your certificate is ready.' : 'You need 70% to pass. Review the lessons and try again.', xp, acc: st.acc,
          actions: passed ? [{ label: 'Certificate', go: '#/cert/' + lv }, { label: 'Done', cls: 'ghost', go: '#/exams' }] : [again, { label: 'Done', go: '#/exam/' + lv }]
        });
      }
    });
  }
  function certView(lv) {
    const L = LV[lv], ex = S.exams[lv]; if (!L || !ex || !ex.passed) return go('#/exam/' + lv);
    const date = new Date(ex.t).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    view().innerHTML = `<div class="noprint">${head('Certificate', '', '#/exam/' + lv)}</div>
      <div class="cert"><div style="font-size:3rem">🎓</div><div class="muted" style="letter-spacing:.2em;font-weight:800">PASO A PASO</div>
        <h1 style="font-size:2rem;margin:10px 0">Certificado de nivel</h1>
        <p>Se certifica que</p><h2 style="font-size:1.7rem;margin:6px 0 10px">${esc(S.name || 'Estudiante')}</h2>
        <p>ha superado el examen de nivel</p>
        <div class="level-badge" style="background:${L.color};margin:12px auto;width:90px;height:90px;font-size:2rem">${L.name}</div>
        <p><b>${esc(L.title)}</b> · ${Math.round(ex.best * 100)}%</p><p class="muted">${date}</p></div>
      <div class="noprint grid two" style="margin-top:14px"><button class="btn ghost" id="nm">✏️ ${S.name ? 'Change name' : 'Add your name'}</button><button class="btn" onclick="window.print()">🖨️ Print / save PDF</button></div>`;
    $('#nm').onclick = () => { const n = prompt('Your name for the certificate:', S.name || ''); if (n != null) { S.name = n.trim().slice(0, 60); save(); route(); } };
  }

  /* ---------- library: reading, listening, grammar ---------- */
  const libTabs = cur => tabsBar([['#/read', 'Reading'], ['#/listen', 'Listening'], ['#/grammar', 'Grammar']], cur);
  let readLevel = 'all';
  function readList() {
    view().innerHTML = head('Library') + libTabs('#/read') + `<p class="muted small">${READS.length} graded texts and classic literature with audio, translations and quizzes.</p>
      <div style="margin-bottom:12px">${levelChips(readLevel)}</div><div class="grid two" id="rl"></div>`;
    const draw = () => {
      $('#rl').innerHTML = READS.filter(r => readLevel === 'all' || r.level === readLevel).map(r => {
        const d = S.reads[r.id];
        return tile('#/reading/' + r.id, r.icon, esc(r.title), `${lvBadge(LV[r.level])} ${r.author ? '📜 ' + esc(r.author) : 'Graded reading'}`, d ? `<span style="color:var(--ok);font-weight:800">✓ ${Math.round(d.best * 100)}%</span>` : '›');
      }).join('');
    };
    $$('.chip').forEach(c => c.onclick = () => { readLevel = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }
  function lookup(word, gloss) {
    const w = clean(word);
    for (const [es, en] of gloss) { const e = clean(es).split(' '); if (e.includes(w) && e.length <= 3) return [es, en]; }
    for (const k of [w, 'el ' + w, 'la ' + w, 'los ' + w, 'las ' + w]) if (WORDS[k]) return [k, WORDS[k].en];
    const vb = VERBS.find(x => x.v === w); if (vb) return [vb.v, vb.en];
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
      <div class="card reader">${r.text.map((p, i) => `<div class="para" data-p="${i}"><p class="${r.poem ? 'poem' : ''}" style="white-space:pre-line">${wrap(p)}</p>
        <div class="trans hidden" style="white-space:pre-line">${esc(r.tr[i] || '')}</div>
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
  let dlgLevel = 'all';
  function listenList() {
    view().innerHTML = head('Library') + libTabs('#/listen') + `<p class="muted small">Real-life conversations read by two voices. Try listening first without the text!</p>
      <div style="margin-bottom:12px">${levelChips(dlgLevel)}</div><div class="grid two" id="dl"></div>`;
    const draw = () => {
      $('#dl').innerHTML = DIALOGS.filter(x => dlgLevel === 'all' || x.level === dlgLevel).map(x => {
        const d = S.dialogs[x.id];
        return tile('#/dialogue/' + x.id, x.icon, esc(x.title), `${lvBadge(LV[x.level])} ${esc(x.es)}`, d ? `<span style="color:var(--ok);font-weight:800">✓ ${Math.round(d.best * 100)}%</span>` : '›');
      }).join('');
    };
    $$('.chip').forEach(c => c.onclick = () => { dlgLevel = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }
  function dialogueView(id) {
    const dl = DIALOGS.find(x => x.id === id); if (!dl) return go('#/listen');
    const d = S.dialogs[id];
    const voiceFor = sp => sp === 'A' ? { voice: TTS.voice, pitch: 0.92 } : { voice: TTS.voice2, pitch: TTS.voice2 === TTS.voice ? 1.3 : 1.05 };
    view().innerHTML = `<div class="page-head">${backBtn('#/listen')}<div class="grow"><div class="muted small">${lvBadge(LV[dl.level])} Listening</div><h1>${dl.icon} ${esc(dl.title)}</h1><div class="muted">${esc(dl.es)}</div></div></div>
      <div class="row" style="margin-bottom:12px;flex-wrap:wrap;gap:14px">
        <button class="btn sm" id="play">▶ Play dialogue</button>
        <label class="row small" style="gap:8px"><span class="switch"><input type="checkbox" id="showtxt" ${d ? 'checked' : ''}><span></span></span>Show text</label>
        <label class="row small" style="gap:8px"><span class="switch"><input type="checkbox" id="trans"><span></span></span>Translation</label>
      </div>
      <div class="chat ${d ? '' : 'blur'}" id="chat">${dl.lines.map(([sp, es, en], i) => `<div class="bubble ${sp === 'A' ? 'left' : 'right'}" data-i="${i}">
        <div class="who">${esc(dl.speakers[sp])}</div><div class="es">${esc(es)}</div><div class="en trans hidden">${esc(en)}</div>
        <button class="speak" data-line="${i}" aria-label="Play line">🔊</button></div>`).join('')}</div>
      <div class="card stack" style="margin-top:18px;text-align:center"><b>Comprehension questions</b>
        <div class="muted small">${dl.quiz.length} questions${d ? ` · best ${Math.round(d.best * 100)}%` : ''}</div>
        <a class="btn block" href="#/dquiz/${id}">Start quiz</a></div>`;
    $('#showtxt').onchange = e => $('#chat').classList.toggle('blur', !e.target.checked);
    $('#trans').onchange = e => $$('.trans').forEach(t => t.classList.toggle('hidden', !e.target.checked));
    const items = dl.lines.map(([sp, es], i) => ({ text: es, i, gap: 250, ...voiceFor(sp) }));
    let playing = false; const play = $('#play');
    const stop = () => { playing = false; TTS.stop(); play.textContent = '▶ Play dialogue'; $$('.bubble').forEach(b => b.classList.remove('playing')); };
    play.onclick = () => {
      if (playing) return stop();
      playing = true; play.textContent = '⏸ Stop';
      TTS.queue(items, it => $$('.bubble').forEach(b => b.classList.toggle('playing', +b.dataset.i === it.i)), stop);
    };
    $$('[data-line]').forEach(b => b.onclick = () => { stop(); TTS.queue([items[+b.dataset.line]]); });
  }
  function dquizStart(id) {
    const dl = DIALOGS.find(x => x.id === id); if (!dl) return go('#/listen');
    startSession({
      exit: '#/dialogue/' + id,
      questions: dl.quiz.map(([q, a, o]) => ({ type: 'mc', label: 'Listening · ' + dl.title, prompt: q, answer: a, options: o })),
      onFinish: st => {
        const prev = S.dialogs[id];
        S.dialogs[id] = { best: Math.max(st.acc, prev ? prev.best : 0), t: Date.now() };
        const xp = 5 + st.right * 2; addXP(xp);
        showResult({ emoji: '🎧', title: 'Well listened!', sub: esc(dl.title), xp, acc: st.acc, actions: [{ label: 'Listen again', cls: 'ghost', go: '#/dialogue/' + id }, { label: 'More dialogues', go: '#/listen' }] });
      }
    });
  }
  function grammarView() {
    view().innerHTML = head('Library') + libTabs('#/grammar') + `
      <input class="search" id="q" type="search" placeholder="Search grammar (e.g. subjunctive, por, ser)…" autocomplete="off">
      <div style="margin:12px 0">${levelChips('all')}</div><div id="gl"></div>`;
    let lvf = 'all';
    const txt = u => (u.grammar.title + ' ' + u.grammar.html.replace(/<[^>]+>/g, ' ') + ' ' + u.title).toLowerCase();
    const draw = () => {
      const q = deacc($('#q').value.trim().toLowerCase());
      $('#gl').innerHTML = LEVELS.filter(L => lvf === 'all' || L.id === lvf).map(L => {
        const us = L.units.filter(u => !q || deacc(txt(u)).includes(q));
        if (!us.length) return '';
        return `<div class="section-title">${lvBadge(L)} ${esc(L.title)}</div><div class="grid two">${us.map(u => tile('#/unit/' + u.id, u.icon, esc(u.grammar.title), esc(u.title))).join('')}</div>`;
      }).join('') || '<p class="muted">No grammar topics found.</p>';
    };
    $('#q').oninput = draw;
    $$('.chip').forEach(c => c.onclick = () => { lvf = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }

  /* ---------- words: dictionary & decks ---------- */
  let dictLevel = 'all';
  const wordsTabs = cur => tabsBar([['#/words', 'Dictionary'], ['#/decks', 'Decks'], ['#/verbs', 'Verbs']], cur);
  function dictView() {
    view().innerHTML = head('Words', `${ALLWORDS.length} words and expressions · ${VERBS.length} verbs`) + wordsTabs('#/words') + `
      <input class="search" id="q" type="search" placeholder="Search Spanish or English…" autocomplete="off">
      <div style="margin:12px 0">${levelChips(dictLevel)}</div><div class="wordlist" id="list"></div><p class="muted small" id="more"></p>`;
    const draw = () => {
      const q = deacc(clean($('#q').value));
      const rows = ALLWORDS.filter(w => (dictLevel === 'all' || w.level === dictLevel) && (!q || deacc(w.es.toLowerCase()).includes(q) || w.en.toLowerCase().includes(q)));
      const shown = rows.slice(0, 300);
      $('#list').innerHTML = shown.length ? shown.map(w => {
        const s = S.srs[w.es];
        return wordRow({ ...w, right: `${s ? `<span title="Learned" style="color:var(--ok)">✓</span>` : ''}<span class="badge" style="background:${LV[w.level].color}">${LV[w.level].name}</span>` });
      }).join('') : `<p class="muted">No words found.</p>`;
      $('#more').textContent = rows.length > 300 ? `Showing 300 of ${rows.length} — refine your search.` : '';
    };
    $('#q').oninput = draw;
    $$('.chip').forEach(c => c.onclick = () => { dictLevel = c.dataset.l; $$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw();
  }
  function decksView() {
    view().innerHTML = head('Words', 'Themed vocabulary decks — study them and they join your spaced review.') + wordsTabs('#/decks') + LEVELS.map(L => {
      const ds = DECKS.filter(d => d.level === L.id); if (!ds.length) return '';
      return `<div class="section-title">${lvBadge(L)} ${esc(L.title)}</div><div class="grid two">${ds.map(d => {
        const n = d.words.filter(([es]) => S.srs[es]).length;
        return `<a class="card row" href="#/deck/${d.id}"><div style="font-size:2rem">${d.icon}</div><div class="grow"><b>${esc(d.title)}</b>
          <div class="muted small">${n}/${d.words.length} learned</div><div class="bar" style="margin-top:6px;height:6px"><i style="width:${n / d.words.length * 100}%"></i></div></div></a>`;
      }).join('')}</div>`;
    }).join('');
  }
  function deckView(id) {
    const d = DECK[id]; if (!d) return go('#/decks');
    const n = d.words.filter(([es]) => S.srs[es]).length;
    view().innerHTML = `<div class="page-head">${backBtn('#/decks')}<div class="grow"><div class="muted small">${lvBadge(LV[d.level])} Deck</div><h1>${d.icon} ${esc(d.title)}</h1><div class="muted small">${n} of ${d.words.length} learned</div></div></div>
      <div class="grid two" style="margin-bottom:14px">
        <a class="btn" href="#/study/${id}">${n < d.words.length ? `📖 Learn ${Math.min(8, d.words.length - n)} new words` : '📖 Study again'}</a>
        <a class="btn ghost" href="#/deckq/${id}">🎯 Practise the deck</a></div>
      <div class="wordlist">${d.words.map(([es, en]) => wordRow({ es, en, right: S.srs[es] ? '<span style="color:var(--ok)">✓</span>' : '' })).join('')}</div>`;
  }
  function deckSession(id, mode) {
    const d = DECK[id]; if (!d) return go('#/decks');
    const all = d.words.map(([es, en]) => ({ es, en }));
    const fresh = all.filter(w => !S.srs[w.es]);
    const set = mode === 'study' ? (fresh.length ? fresh.slice(0, 8) : sample(all, 8)) : sample(all, Math.min(12, all.length));
    const qs = shuffle([...set.map(w => rnd([qMC, qListen])(w, all)), ...set.slice(0, 5).map(w => qMCrev(w, all)), ...(set.length >= 5 ? [qMatch(sample(set, 5))] : []), ...set.slice(0, 3).map(w => qType(w))]);
    startSession({
      exit: '#/deck/' + id, pre: mode === 'study' ? [{ type: 'words', title: d.title, words: set, scored: false }] : [], questions: qs,
      onFinish: st => { set.forEach(w => srsAdd(w.es)); const xp = 5 + st.right; addXP(xp); showResult({ emoji: d.icon, title: 'Deck session complete!', sub: `${set.length} words added to your review`, xp, acc: st.acc, actions: [again, { label: 'Back to deck', go: '#/deck/' + id }] }); }
    });
  }

  function placementStart() {
    const qs = LEVELS.flatMap(L => sample(L.units.flatMap(u => u.fill), 3).map(f => ({ ...qFill(f, L, L.id), typed: false })));
    startSession({
      exit: '#/practice', retry: false, questions: qs,
      onFinish: () => {
        let passed = -1;
        for (const L of LEVELS) { if (qs.filter(q => q.level === L.id && q.first).length >= 2) passed = L.idx; else break; }
        const rec = LEVELS[Math.min(passed + 1, LEVELS.length - 1)];
        S.placement = rec.id; save();
        const right = qs.filter(q => q.first).length;
        showResult({ emoji: '🎯', title: `Start at ${rec.name}`, sub: `${right}/${qs.length} correct. We recommend the <b>${rec.name} · ${esc(rec.title)}</b> level. You can still open any level.`, xp: 0, acc: right / qs.length, actions: [{ label: 'Home', cls: 'ghost', go: '#/' }, { label: `Open ${rec.name}`, go: '#/level/' + rec.id }] });
      }
    });
  }

  /* ---------- profile ---------- */
  function badges() {
    const L = learned().length, lessons = Object.keys(S.done).filter(k => UNITS[k]).length;
    const reads = Object.keys(S.reads).length, dls = Object.keys(S.dialogs).length, wr = Object.values(S.writing).filter(w => w.done).length;
    return [
      ['🌱', 'First steps', 'Complete your first lesson', lessons >= 1],
      ['📗', 'Committed', 'Complete 20 lessons', lessons >= 20],
      ['🏅', 'Course hero', 'Complete every lesson', lessons >= Object.keys(UNITS).length],
      ['🔥', 'On fire', 'Reach a 7-day streak', S.best >= 7],
      ['☄️', 'Unstoppable', 'Reach a 30-day streak', S.best >= 30],
      ['🧠', 'Word collector', 'Learn 100 words', L >= 100],
      ['📚', 'Walking dictionary', 'Learn 1,000 words', L >= 1000],
      ['📖', 'Bookworm', 'Finish 10 reading quizzes', reads >= 10],
      ['🎧', 'All ears', 'Finish 10 listening dialogues', dls >= 10],
      ['🔁', 'Conjugator', '200 correct verb forms', S.stats.conj >= 200],
      ['✍️', 'Scribe', '50 correct dictations', S.stats.dict >= 50],
      ['🎤', 'Chatterbox', '50 successful speaking attempts', S.stats.speak >= 50],
      ['📝', 'Author', 'Complete 5 writing tasks', wr >= 5],
      ...LEVELS.map(Lv => ['🎓', `${Lv.name} certified`, `Pass the ${Lv.name} exam`, !!(S.exams[Lv.id] && S.exams[Lv.id].passed)])
    ];
  }
  function profileView() {
    const L = learned().length, lessons = Object.keys(S.done).filter(k => UNITS[k]).length;
    const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return { k: dkey(d), l: d.toLocaleDateString('en', { weekday: 'short' })[0] }; });
    const max = Math.max(S.goal, ...days.map(d => S.days[d.k] || 0));
    const st = S.settings, bd = badges();
    const sw = (k, label, sub = '') => `<div class="setting"><div><b>${label}</b>${sub ? `<div class="muted small">${sub}</div>` : ''}</div><label class="switch"><input type="checkbox" data-s="${k}" ${st[k] ? 'checked' : ''}><span></span></label></div>`;
    const vopts = sel => `<option value="">Default</option>${TTS.voices.map(v => `<option value="${esc(v.name)}" ${sel === v.name ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}`;
    view().innerHTML = head('Profile', 'Your progress is stored on this device.') + `
      <div class="kpis"><div class="card kpi"><b>⭐ ${S.xp}</b><span class="muted small">total XP</span></div>
        <div class="card kpi"><b>🔥 ${streak()}</b><span class="muted small">day streak (best ${S.best})</span></div>
        <div class="card kpi"><b>📖 ${lessons}</b><span class="muted small">lessons done</span></div>
        <div class="card kpi"><b>🧠 ${L}</b><span class="muted small">words learned</span></div></div>
      <div class="section-title">This week</div>
      <div class="card"><div class="week">${days.map((d, i) => `<div class="col ${i === 6 ? 'today' : ''}"><i style="height:${Math.round((S.days[d.k] || 0) / max * 100)}%"></i><span>${d.l}</span></div>`).join('')}</div></div>
      <div class="section-title">Levels</div>
      <div class="card stack">${LEVELS.map(l => `<div><div class="row between small"><b>${l.name} · ${esc(l.title)} ${S.exams[l.id] && S.exams[l.id].passed ? '🎓' : ''}</b><span class="muted">${levelDone(l)}/${l.units.length}</span></div><div class="bar"><i style="width:${levelDone(l) / l.units.length * 100}%;background:${l.color}"></i></div></div>`).join('')}
        <a class="btn ghost block" href="#/placement">🎯 ${S.placement ? `Retake placement test (current: ${LV[S.placement].name})` : 'Take placement test'}</a></div>
      <div class="section-title">Badges · ${bd.filter(b => b[3]).length}/${bd.length}</div>
      <div class="badges">${bd.map(([i, t, s, on]) => `<div class="card badge-card ${on ? '' : 'off'}" title="${esc(s)}"><div style="font-size:1.8rem">${i}</div><b class="small">${esc(t)}</b><div class="muted" style="font-size:.7rem">${esc(s)}</div></div>`).join('')}</div>
      <div class="section-title">Settings</div>
      <div class="card">
        <div class="setting"><div><b>Your name</b><div class="muted small">Shown on certificates</div></div><input id="name" class="search" style="max-width:55%;padding:8px 12px" value="${esc(S.name)}" placeholder="Name"></div>
        <div class="setting"><div><b>Daily goal</b></div><select id="goal">${[10, 20, 30, 50, 80].map(g => `<option value="${g}" ${S.goal === g ? 'selected' : ''}>${g} XP</option>`).join('')}</select></div>
        <div class="setting"><div><b>Theme</b></div><select id="theme">${[['auto', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(([v, l]) => `<option value="${v}" ${st.theme === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
        <div class="setting"><div><b>Speech speed</b><div class="muted small" id="ratev">${st.rate.toFixed(2)}×</div></div><input type="range" id="rate" min="0.5" max="1.3" step="0.05" value="${st.rate}"></div>
        <div class="setting"><div><b>Spanish voice</b>${TTS.voices.length ? '' : '<div class="muted small">No Spanish voice found — install one in your device\'s text-to-speech settings.</div>'}</div><select id="voice">${vopts(st.voice)}</select></div>
        <div class="setting"><div><b>Second voice</b><div class="muted small">Used in dialogues</div></div><select id="voice2">${vopts(st.voice2)}</select></div>
        <div class="setting"><div></div><button class="btn sm ghost" data-say="¡Hola! Bienvenido a Paso a Paso. ¿Cómo estás?">🔊 Test voice</button></div>
        ${sw('autoplay', 'Auto-play audio', 'Play words automatically in exercises')}
        ${sw('sound', 'Sound effects')}
        ${SR ? sw('speak', 'Speaking exercises in lessons', 'Uses your microphone') : ''}
        ${sw('unlock', 'Unlock all lessons', 'Skip the lesson order inside each level')}
      </div>
      <div class="section-title">Your data</div>
      <div class="card stack">
        <div class="grid two"><button class="btn ghost" id="exp">⬇ Export progress</button><button class="btn ghost" id="imp">⬆ Import progress</button></div>
        <input type="file" id="impf" accept="application/json,.json" class="hidden">
        <button class="btn bad block" id="reset">Reset all progress</button>
      </div>
      <p class="muted small" style="text-align:center;margin-top:24px">Paso a Paso · ${LEVELS.reduce((n, l) => n + l.units.length, 0)} lessons · ${ALLWORDS.length} words · ${VERBS.length} verbs · ${READS.length} readings · ${DIALOGS.length} dialogues<br>Literary texts by Cervantes, Bécquer, Machado, Martí, Darío, Storni, Lorca, Quiroga and Clarín are in the public domain.</p>`;
    let nt; $('#name').oninput = e => { clearTimeout(nt); nt = setTimeout(() => { S.name = e.target.value.trim().slice(0, 60); save(); }, 300); };
    $('#goal').onchange = e => { S.goal = +e.target.value; save(); };
    $('#theme').onchange = e => { st.theme = e.target.value; save(); applyTheme(); };
    $('#rate').oninput = e => { st.rate = +e.target.value; $('#ratev').textContent = st.rate.toFixed(2) + '×'; save(); };
    $('#voice').onchange = e => { st.voice = e.target.value; save(); TTS.pick(); TTS.speak('Hola, ¿qué tal?'); };
    $('#voice2').onchange = e => { st.voice2 = e.target.value; save(); TTS.pick(); TTS.queue([{ text: 'Hola, soy la segunda voz.', voice: TTS.voice2 }]); };
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
    $('#reset').onclick = () => confirmBox('Reset all progress?', 'XP, streak, lessons, exams and review history will be deleted. This cannot be undone.', 'Reset', () => {
      const keep = S.settings; S = fresh(); S.settings = keep; save(); toast('Progress reset'); route();
    });
  }

  /* ================= router ================= */
  const routes = {
    '': home, level: levelView, unit: unitView, lesson: lessonStart, mix: mixStart,
    practice: practiceHub, review: reviewView, drill: drillSetup, drillgo: () => drillStart(), drillverb: v => drillStart(v),
    dictation: () => levelPicker('Dictation', 'Listen to a sentence and write it down. Great for listening and spelling.', 'dict', '✍️'), dict: lv => sentenceSession('dictation', lv),
    translate: () => levelPicker('Translation', 'Translate English sentences into Spanish, then compare with a model.', 'trans', '🔄'), trans: lv => sentenceSession('translate', lv),
    speak: () => SR ? levelPicker('Speaking', 'Read sentences aloud — the app listens and checks your pronunciation.', 'spk', '🎤') : go('#/practice'), spk: lv => sentenceSession('speak', lv),
    numbers: numbersView, num: numStart, pron: pronView, pairs: pairsStart, twisters: twistersView,
    write: id => id ? writeView(id) : writeList(), exams: examsView, exam: examView, examgo: examStart, cert: certView, placement: placementStart,
    read: readList, reading: readingView, quiz: quizStart, listen: listenList, dialogue: dialogueView, dquiz: dquizStart, grammar: grammarView,
    words: dictView, decks: decksView, deck: deckView, study: id => deckSession(id, 'study'), deckq: id => deckSession(id, 'practice'), verbs: verbsView, verb: verbView,
    me: profileView
  };
  const NAV = { learn: ['', 'level', 'unit', 'lesson', 'mix'], library: ['read', 'reading', 'quiz', 'listen', 'dialogue', 'dquiz', 'grammar'], words: ['words', 'decks', 'deck', 'study', 'deckq', 'verbs', 'verb'], me: ['me'] };
  const navOf = p => Object.keys(NAV).find(k => NAV[k].includes(p)) || 'practice';
  function route() {
    TTS.stop(); closeModal(); sess = null;
    document.body.classList.remove('immersive');
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const p = parts[0] || '', a = parts.slice(1).join('/');
    const fn = routes[p] || home;
    $$('#nav a').forEach(x => x.classList.toggle('active', x.dataset.nav === navOf(p)));
    window.scrollTo(0, 0);
    fn(a ? decodeURIComponent(a) : undefined);
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
  window.PAP = { numToEs, timeToEs, wordDiff };
})();
