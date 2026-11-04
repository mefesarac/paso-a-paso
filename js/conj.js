// Spanish verb conjugation engine. Exposes window.Conj.
(function () {
  'use strict';

  const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros/as', 'vosotros/as', 'ellos / ellas / ustedes'];
  const IMP_PERSONS = [null, 'tú', 'usted', 'nosotros/as', 'vosotros/as', 'ustedes'];
  const REFL = ['me', 'te', 'se', 'nos', 'os', 'se'];

  const TENSES = [
    { k: 'pres', en: 'Present', es: 'Presente', lv: 'a1' },
    { k: 'pret', en: 'Preterite', es: 'Pretérito indefinido', lv: 'a2' },
    { k: 'impf', en: 'Imperfect', es: 'Pretérito imperfecto', lv: 'a2' },
    { k: 'perf', en: 'Present perfect', es: 'Pretérito perfecto', lv: 'a2' },
    { k: 'fut', en: 'Future', es: 'Futuro simple', lv: 'a2' },
    { k: 'cond', en: 'Conditional', es: 'Condicional simple', lv: 'b1' },
    { k: 'plus', en: 'Past perfect', es: 'Pluscuamperfecto', lv: 'b1' },
    { k: 'futPerf', en: 'Future perfect', es: 'Futuro compuesto', lv: 'b1' },
    { k: 'subj', en: 'Present subjunctive', es: 'Presente de subjuntivo', lv: 'b1' },
    { k: 'impAff', en: 'Imperative (affirmative)', es: 'Imperativo afirmativo', lv: 'b1', imp: true },
    { k: 'impNeg', en: 'Imperative (negative)', es: 'Imperativo negativo', lv: 'b1', imp: true },
    { k: 'condPerf', en: 'Conditional perfect', es: 'Condicional compuesto', lv: 'b2' },
    { k: 'subjImpf', en: 'Imperfect subjunctive (-ra)', es: 'Imperfecto de subjuntivo (-ra)', lv: 'b2' },
    { k: 'subjImpfSe', en: 'Imperfect subjunctive (-se)', es: 'Imperfecto de subjuntivo (-se)', lv: 'c1' },
    { k: 'subjPerf', en: 'Perfect subjunctive', es: 'Pretérito perfecto de subjuntivo', lv: 'b2' },
    { k: 'subjPlus', en: 'Pluperfect subjunctive', es: 'Pluscuamperfecto de subjuntivo', lv: 'b2' }
  ];

  const END = {
    pres: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    subj: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] },
    impf: { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    pret: { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    fut: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
    cond: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
  };

  // Irregular verbs (base forms). Compounds are listed in COMP.
  const IRR = {
    ser: { full: { pres: ['soy', 'eres', 'es', 'somos', 'sois', 'son'], impf: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'], pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'], subj: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'] }, impTu: 'sé' },
    ir: { full: { pres: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'], impf: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'], pret: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'], subj: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'] }, impTu: 've', impNos: 'vamos', ger: 'yendo' },
    estar: { full: { pres: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'], subj: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'] }, pret: 'estuv' },
    haber: { full: { pres: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'], subj: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'] }, pret: 'hub', fut: 'habr', noImp: true },
    dar: { full: { pres: ['doy', 'das', 'da', 'damos', 'dais', 'dan'], pret: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'], subj: ['dé', 'des', 'dé', 'demos', 'deis', 'den'] } },
    ver: { full: { pres: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'], impf: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'], pret: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'] }, yo: 'veo', part: 'visto' },
    saber: { yo: 'sé', subjStem: 'sep', pret: 'sup', fut: 'sabr' },
    caber: { yo: 'quepo', pret: 'cup', fut: 'cabr' },
    poder: { st: 'ue', pret: 'pud', fut: 'podr', ger: 'pudiendo' },
    querer: { st: 'ie', pret: 'quis', fut: 'querr' },
    tener: { yo: 'tengo', st: 'ie', pret: 'tuv', fut: 'tendr', impTu: 'ten' },
    venir: { yo: 'vengo', st: 'ie', pret: 'vin', fut: 'vendr', impTu: 'ven' },
    poner: { yo: 'pongo', pret: 'pus', fut: 'pondr', impTu: 'pon', part: 'puesto' },
    salir: { yo: 'salgo', fut: 'saldr', impTu: 'sal' },
    valer: { yo: 'valgo', fut: 'valdr' },
    hacer: { yo: 'hago', pret: 'hic', pret3: 'hizo', fut: 'har', impTu: 'haz', part: 'hecho' },
    decir: { yo: 'digo', st: 'i', pret: 'dij', fut: 'dir', impTu: 'di', part: 'dicho' },
    traer: { yo: 'traigo', pret: 'traj' },
    caer: { yo: 'caigo' },
    oír: { full: { pres: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'] }, yo: 'oigo' },
    andar: { pret: 'anduv' },
    huir: { fix: { pres: { 4: 'huis' }, pret: { 0: 'hui' } } },
    reír: {
      full: {
        pres: ['río', 'ríes', 'ríe', 'reímos', 'reís', 'ríen'], pret: ['reí', 'reíste', 'rio', 'reímos', 'reísteis', 'rieron'],
        subj: ['ría', 'rías', 'ría', 'riamos', 'riais', 'rían']
      }, ger: 'riendo', part: 'reído', impTu: 'ríe'
    },
    freír: {
      full: {
        pres: ['frío', 'fríes', 'fríe', 'freímos', 'freís', 'fríen'], pret: ['freí', 'freíste', 'frio', 'freímos', 'freísteis', 'frieron'],
        subj: ['fría', 'frías', 'fría', 'friamos', 'friais', 'frían']
      }, ger: 'friendo', part: 'frito', impTu: 'fríe'
    }
  };
  // compound -> [base, prefix transform]
  const COMP = {
    componer: 'poner', proponer: 'poner', suponer: 'poner', disponer: 'poner', imponer: 'poner', exponer: 'poner', oponer: 'poner', reponer: 'poner', posponer: 'poner',
    obtener: 'tener', mantener: 'tener', contener: 'tener', detener: 'tener', sostener: 'tener', retener: 'tener', entretener: 'tener', abstener: 'tener', atener: 'tener',
    convenir: 'venir', prevenir: 'venir', intervenir: 'venir', provenir: 'venir',
    deshacer: 'hacer', rehacer: 'hacer', satisfacer: 'hacer',
    predecir: 'decir', contradecir: 'decir',
    atraer: 'traer', distraer: 'traer', contraer: 'traer', extraer: 'traer', sustraer: 'traer',
    decaer: 'caer', recaer: 'caer', equivaler: 'valer', sobresalir: 'salir', sonreír: 'reír'
  };
  const PART = [[/scribir$/, 'scrito'], [/cubrir$/, 'cubierto'], [/abrir$/, 'abierto'], [/volver$/, 'vuelto'], [/solver$/, 'suelto'], [/morir$/, 'muerto'], [/romper$/, 'roto'], [/^imprimir$/, 'impreso']];

  const ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  const UNACC = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' };
  const accentLast = s => { const m = s.match(/[aeiou](?=[^aeiou]*$)/); return m ? s.slice(0, m.index) + ACC[m[0]] + s.slice(m.index + 1) : s; };

  function replaceLast(s, from, to) { const i = s.lastIndexOf(from); return i < 0 ? s : s.slice(0, i) + to + s.slice(i + from.length); }
  function strongChange(stem, st) {
    if (st === 'ie' || st === 'ie-') return replaceLast(stem, 'e', 'ie');
    if (st === 'ue') { const r = replaceLast(stem, 'o', 'ue'); return r.startsWith('ue') ? 'h' + r : r; }
    if (st === 'i') return replaceLast(stem, 'e', 'i');
    if (st === 'u') return replaceLast(stem, 'u', 'ue');
    if (st === 'ii') return replaceLast(stem, 'i', 'ie');
    return stem;
  }
  function weakChange(stem, st) {
    if (st === 'ie' || st === 'i') return replaceLast(stem, 'e', 'i');
    if (st === 'ue') return replaceLast(stem, 'o', 'u');
    return stem;
  }
  // put written accent on the last i/u of the stem (enviar -> envío, reunir -> reúno)
  const accentStem = s => s.replace(/[iu](?=[^iu]*$)/, c => ACC[c]);

  function ortho(stem, end, inf) {
    const front = /^[eé]/.test(end), back = /^[aáoó]/.test(end);
    if (/car$/.test(inf) && front) return stem.replace(/c$/, 'qu') + end;
    if (/guar$/.test(inf) && front) return stem.replace(/gu$/, 'gü') + end;
    if (/gar$/.test(inf) && front) return stem.replace(/g$/, 'gu') + end;
    if (/zar$/.test(inf) && front) return stem.replace(/z$/, 'c') + end;
    if (/g(er|ir)$/.test(inf) && back) return stem.replace(/g$/, 'j') + end;
    if (/guir$/.test(inf) && back) return stem.replace(/gu$/, 'g') + end;
    if (/[aeiou]c(er|ir)$/.test(inf) && back) return stem.replace(/c$/, 'zc') + end;
    if (/[^aeiou]c(er|ir)$/.test(inf) && back) return stem.replace(/c$/, 'z') + end;
    if (/[^g]uir$/.test(inf) && /^[aeo]/.test(end)) return stem + 'y' + end;
    return stem + end;
  }

  /* --- syllables & stress (for attaching pronouns) --- */
  const isVowelAt = (w, i) => {
    const c = w[i];
    if (c === 'u' && i > 0 && (w[i - 1] === 'q' || w[i - 1] === 'g') && /[eiéí]/.test(w[i + 1] || '')) return false;
    if (c === 'y') return i === w.length - 1 && i > 0 && /[aeiou]/.test(w[i - 1]);
    return /[aeiouáéíóúü]/.test(c);
  };
  function nuclei(w) {
    const out = []; let i = 0;
    while (i < w.length) {
      if (!isVowelAt(w, i)) { i++; continue; }
      let cur = [i], j = i + 1;
      while (j < w.length && isVowelAt(w, j)) {
        const strong = c => /[aeoáéóíú]/.test(c);
        if (strong(w[j - 1]) && strong(w[j])) { out.push(cur); cur = []; }
        cur.push(j); j++;
      }
      out.push(cur); i = j;
    }
    return out;
  }
  function stressIdx(w) {
    const ns = nuclei(w);
    const k = ns.findIndex(n => n.some(i => /[áéíóú]/.test(w[i])));
    if (k >= 0) return k;
    return /[aeiouns]$/.test(w) && ns.length > 1 ? ns.length - 2 : ns.length - 1;
  }
  function attach(base, clitic, drop = 0) {
    const idx = stressIdx(base);
    let w = (base.slice(0, base.length - drop) + clitic).replace(/[áéó]/g, c => UNACC[c]);
    const ns = nuclei(w), k = ns.length - idx;
    const need = k >= 3 || (k === 2 && !/[aeiouns]$/.test(w)) || (k === 1 && ns.length > 1 && /[aeiouns]$/.test(w));
    const nuc = ns[idx];
    if (!need || nuc.some(i => /[íú]/.test(w[i]))) return w;
    const pos = nuc.find(i => /[aeo]/.test(w[i])) ?? nuc[nuc.length - 1];
    return w.slice(0, pos) + (ACC[w[pos]] || w[pos]) + w.slice(pos + 1);
  }

  /* --- core conjugation --- */
  function core(inf, irr, flags) {
    const cls = /ar$/.test(inf) ? 'ar' : /er$/.test(inf) ? 'er' : 'ir';
    const stem = inf.slice(0, -2);
    const st = irr.st || flags.st;
    const acc = flags.acc;
    const vowelStem = cls !== 'ar' && /[aeo]$/.test(stem);
    const uir = /[^g]uir$/.test(inf);
    const full = irr.full || {};
    const T = {};
    const stressed = p => p === 0 || p === 1 || p === 2 || p === 5;

    T.pres = full.pres ? full.pres.slice() : END.pres[cls].map((e, p) => {
      if (p === 0 && irr.yo) return irr.yo;
      let s = stem;
      if (stressed(p)) { if (st) s = strongChange(s, st); if (acc) s = accentStem(s); }
      return ortho(s, e, inf);
    });

    if (full.subj) T.subj = full.subj.slice();
    else if (irr.subjStem || irr.yo) {
      const b = irr.subjStem || irr.yo.slice(0, -1);
      T.subj = END.subj[cls].map(e => b + e);
    } else {
      T.subj = END.subj[cls].map((e, p) => {
        let s = stem;
        if (stressed(p)) { if (st) s = strongChange(s, st); if (acc) s = accentStem(s); }
        else if (cls === 'ir' && st) s = weakChange(s, st);
        return ortho(s, e, inf);
      });
    }

    T.impf = full.impf ? full.impf.slice() : END.impf[cls].map(e => stem + e);

    if (full.pret) T.pret = full.pret.slice();
    else if (irr.pret) {
      const s = irr.pret, j = /j$/.test(s);
      T.pret = [s + 'e', s + 'iste', irr.pret3 || s + 'o', s + 'imos', s + 'isteis', s + (j ? 'eron' : 'ieron')];
    } else {
      T.pret = END.pret[cls].map((e, p) => {
        let s = stem;
        if (cls === 'ir' && st && (p === 2 || p === 5)) s = weakChange(s, st);
        if (vowelStem || uir) { if (p === 2) e = 'yó'; if (p === 5) e = 'yeron'; }
        if (vowelStem && !uir) e = e.replace(/^i(?=ste|mos|steis)/, 'í');
        return p === 0 && cls === 'ar' ? ortho(s, e, inf) : s + e;
      });
    }

    const fs = irr.fut || inf.replace('í', 'i');
    T.fut = EN(fs, END.fut);
    T.cond = EN(fs, END.cond);

    const rb = T.pret[5].replace(/ron$/, '');
    T.subjImpf = ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'].map((e, p) => (p === 3 ? accentLast(rb) : rb) + e);
    T.subjImpfSe = ['se', 'ses', 'se', 'semos', 'seis', 'sen'].map((e, p) => (p === 3 ? accentLast(rb) : rb) + e);

    if (irr.ger) T.ger = irr.ger;
    else if (cls === 'ar') T.ger = stem + 'ando';
    else {
      const s = cls === 'ir' && st ? weakChange(stem, st) : stem;
      T.ger = s + (vowelStem || uir ? 'yendo' : 'iendo');
    }

    if (irr.part) T.part = irr.part;
    else {
      const pr = PART.find(([re]) => re.test(inf));
      T.part = pr ? inf.replace(pr[0], pr[1]) : cls === 'ar' ? stem + 'ado' : stem + (vowelStem && !uir ? 'ído' : 'ido');
    }

    if (irr.fix) for (const t in irr.fix) for (const p in irr.fix[t]) T[t][p] = irr.fix[t][p];

    if (irr.noImp) { T.impAff = [null, null, null, null, null, null]; }
    else {
      T.impAff = [null, irr.impTu || T.pres[2], T.subj[2], irr.impNos || T.subj[3], inf.replace(/r$/, 'd'), T.subj[5]];
    }
    T.impNeg = irr.noImp ? [null, null, null, null, null, null] : [null, T.subj[1], T.subj[2], T.subj[3], T.subj[4], T.subj[5]];
    return T;
  }
  const EN = (s, ends) => ends.map(e => s + e);

  function lookupIrr(inf) {
    if (IRR[inf]) return { irr: IRR[inf], pre: '', base: inf };
    if (COMP[inf]) { const b = COMP[inf]; return { irr: IRR[b], pre: inf.slice(0, inf.length - b.length), base: b }; }
    if (/ducir$/.test(inf)) return { irr: { pret: inf.slice(0, -3) + 'j' }, pre: '', base: inf };
    return { irr: {}, pre: '', base: inf };
  }

  const cache = {};
  function conjugate(input, flags = {}) {
    const key = input + JSON.stringify(flags);
    if (cache[key]) return cache[key];
    let inf = input.trim().toLowerCase(), refl = false;
    if (/(ar|er|ir|ír)se$/.test(inf)) { refl = true; inf = inf.slice(0, -2); }
    const { irr, pre, base } = lookupIrr(inf);
    let T = core(base, irr, flags);
    if (pre) {
      const fx = base === 'hacer' && pre === 'satis' ? (f => f.replace(/^h/, 'f')) : (f => f);
      const map = a => a.map(f => f == null ? f : pre + fx(f));
      for (const t in T) T[t] = Array.isArray(T[t]) ? map(T[t]) : pre + fx(T[t]);
      const tu = { pon: 'pón', ten: 'tén', ven: 'vén', di: 'dice' }[irr.impTu];
      if (tu) T.impAff[1] = pre + tu;
    }
    // compound tenses
    if (inf !== 'haber') {
      const H = conjugate('haber');
      const comp = (t) => H[t].map(h => h + ' ' + T.part);
      T.perf = comp('pres'); T.plus = comp('impf'); T.futPerf = comp('fut'); T.condPerf = comp('cond');
      T.subjPerf = comp('subj'); T.subjPlus = comp('subjImpf');
    } else {
      const comp = t => T[t].map(h => h + ' habido');
      T.perf = comp('pres'); T.plus = comp('impf'); T.futPerf = comp('fut'); T.condPerf = comp('cond');
      T.subjPerf = comp('subj'); T.subjPlus = comp('subjImpf');
    }
    T.inf = input; T.refl = refl;
    if (refl) {
      for (const t of TENSES) {
        if (t.imp) continue;
        T[t.k] = T[t.k].map((f, p) => REFL[p] + ' ' + f);
      }
      T.impNeg = T.impNeg.map((f, p) => f == null ? f : REFL[p] + ' ' + f);
      T.impAff = T.impAff.map((f, p) => {
        if (f == null) return f;
        if (p === 3) return attach(f, 'nos', 1);
        if (p === 4) return inf === 'ir' ? 'idos' : /id$/.test(f) ? f.replace(/id$/, 'íos') : attach(f, 'os', 1);
        return attach(f, p === 1 ? 'te' : 'se');
      });
      T.ger = attach(T.ger, 'se');
    }
    T.impNeg = T.impNeg.map(f => f == null ? f : 'no ' + f);
    cache[key] = T;
    return T;
  }

  window.Conj = { conjugate, TENSES, PERSONS, IMP_PERSONS, attach, nuclei };
})();
