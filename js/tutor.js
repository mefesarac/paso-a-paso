// Optional AI tutor (writing correction + conversation practice) using the official
// Anthropic JS SDK, loaded on demand. The learner supplies their own API key, which is
// kept only in this browser's localStorage and sent only to api.anthropic.com.
(function () {
  'use strict';
  const SDK_URL = 'https://esm.sh/@anthropic-ai/sdk@1.4.0';
  const STORE = 'pasoapaso_ai';
  const MODELS = [
    { id: 'claude-opus-5-5', label: 'Claude Opus 5.5 (best quality)', fallback: true },
    { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5 (faster, cheaper)', fallback: true },
    { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5 (fastest, cheapest)', fallback: false }
  ];
  const LEVEL_NAMES = { a1: 'A1 (beginner)', a2: 'A2 (elementary)', b1: 'B1 (intermediate)', b2: 'B2 (upper intermediate)', c1: 'C1 (advanced)' };

  const cfg = (() => { try { return Object.assign({ key: '', model: MODELS[0].id }, JSON.parse(localStorage.getItem(STORE) || '{}')); } catch (e) { return { key: '', model: MODELS[0].id }; } })();
  const saveCfg = () => { try { localStorage.setItem(STORE, JSON.stringify(cfg)); } catch (e) { } };

  let sdkPromise = null, client = null, clientKey = '';
  async function getClient() {
    if (!cfg.key) throw new TutorError('no-key', 'Add your Anthropic API key first.');
    if (!sdkPromise) sdkPromise = import(SDK_URL);
    const mod = await sdkPromise.catch(e => { sdkPromise = null; throw new TutorError('offline', 'Could not load the AI library. Check your internet connection.'); });
    if (!client || clientKey !== cfg.key) {
      const Anthropic = mod.default;
      client = new Anthropic({ apiKey: cfg.key, dangerouslyAllowBrowser: true });
      clientKey = cfg.key;
    }
    return { client, mod };
  }
  class TutorError extends Error { constructor(code, msg) { super(msg); this.code = code; } }
  function friendly(err, mod) {
    if (err instanceof TutorError) return err;
    const A = mod && mod.default;
    if (A && err instanceof A.AuthenticationError) return new TutorError('auth', 'Your API key was rejected. Check it in the tutor settings.');
    if (A && err instanceof A.PermissionDeniedError) return new TutorError('perm', 'This API key does not have access to the selected model.');
    if (A && err instanceof A.RateLimitError) return new TutorError('rate', 'Too many requests right now — wait a moment and try again.');
    if (A && err instanceof A.BadRequestError) return new TutorError('bad', 'The request was rejected: ' + (err.message || 'bad request'));
    if (A && err instanceof A.APIConnectionError) return new TutorError('offline', 'Could not reach the AI service. Check your internet connection.');
    if (A && err instanceof A.APIError) return new TutorError('api', 'The AI service returned an error (' + (err.status || '?') + '). Try again later.');
    return new TutorError('unknown', err && err.message ? err.message : String(err));
  }
  // Request options shared by every call: model, optional server-side refusal fallback.
  function baseParams(extra) {
    const m = MODELS.find(x => x.id === cfg.model) || MODELS[0];
    const p = Object.assign({ model: m.id }, extra);
    if (m.fallback) { p.betas = ['server-side-fallback-2026-07-01']; p.fallbacks = 'default'; }
    return p;
  }
  const textOf = msg => msg.content.filter(b => b.type === 'text').map(b => b.text).join('');

  /* ---------- 1. writing correction (structured JSON output) ---------- */
  const CORRECTION_SCHEMA = {
    type: 'object', additionalProperties: false,
    required: ['corrected_text', 'score', 'estimated_level', 'summary', 'errors', 'strengths', 'next_steps'],
    properties: {
      corrected_text: { type: 'string', description: 'The full text rewritten with every error fixed, keeping the learner\'s meaning and style.' },
      score: { type: 'integer', description: 'Overall score from 0 to 10 for the target level.' },
      estimated_level: { type: 'string', enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
      summary: { type: 'string', description: 'Two or three sentences of overall feedback, in English.' },
      errors: {
        type: 'array',
        items: {
          type: 'object', additionalProperties: false,
          required: ['original', 'correction', 'type', 'explanation'],
          properties: {
            original: { type: 'string', description: 'The exact wrong fragment as the learner wrote it.' },
            correction: { type: 'string' },
            type: { type: 'string', enum: ['grammar', 'verb', 'agreement', 'spelling', 'accent', 'vocabulary', 'preposition', 'word order', 'punctuation', 'style'] },
            explanation: { type: 'string', description: 'Short explanation in English, with the rule.' }
          }
        }
      },
      strengths: { type: 'array', items: { type: 'string' } },
      next_steps: { type: 'array', items: { type: 'string' }, description: 'Two or three concrete things to practise next, in English.' }
    }
  };
  async function correct(text, { level = 'b1', task = '' } = {}) {
    let mod;
    try {
      const c = await getClient(); mod = c.mod;
      const msg = await c.client.beta.messages.create(baseParams({
        max_tokens: 16000,
        output_config: { effort: 'medium', format: { type: 'json_schema', schema: CORRECTION_SCHEMA } },
        system: 'You are an experienced, encouraging teacher of Spanish as a foreign language. You correct texts written by learners whose first language is not Spanish. Accept both Peninsular and Latin American usage as correct. Point out every real error (grammar, verb forms, agreement, accents, spelling, prepositions, vocabulary, word order), but do not "correct" choices that are merely different from what you would write. Explanations, summary and advice are in English and short; examples in Spanish. Judge the text against the learner\'s target level.',
        messages: [{ role: 'user', content: `Target level: ${LEVEL_NAMES[level] || level}.\n${task ? `Writing task: ${task}\n` : ''}\nLearner's text:\n"""\n${text}\n"""` }]
      }));
      if (msg.stop_reason === 'refusal') throw new TutorError('refusal', 'The AI declined to review this text.');
      if (msg.stop_reason === 'max_tokens') throw new TutorError('long', 'The text is too long to review in one go — try a shorter part.');
      return JSON.parse(textOf(msg));
    } catch (e) { throw friendly(e, mod); }
  }

  /* ---------- 2. conversation partner (streaming) ---------- */
  const SCENARIOS = [
    { id: 'cafe', level: 'a1', icon: '☕', title: 'Ordering at a café', role: 'a friendly waiter in a café in Madrid', goal: 'The learner orders something to eat and drink and pays.', opener: '¡Hola, buenos días! ¿Qué le pongo?' },
    { id: 'meet', level: 'a1', icon: '👋', title: 'Meeting someone new', role: 'a Spanish student at a language exchange', goal: 'Get to know each other: names, origin, studies or work, hobbies.', opener: '¡Hola! Me llamo Lucía. ¿Y tú, cómo te llamas?' },
    { id: 'shop', level: 'a2', icon: '👗', title: 'Shopping for clothes', role: 'a shop assistant in a clothes shop', goal: 'Find an item, ask about size, colour and price, try it on and buy it.', opener: 'Hola, buenas tardes. ¿Le puedo ayudar en algo?' },
    { id: 'weekend', level: 'a2', icon: '🗓️', title: 'What did you do at the weekend?', role: 'a colleague chatting on Monday morning', goal: 'Talk about the past weekend using past tenses.', opener: '¡Buenos días! ¿Qué tal el fin de semana? ¿Hiciste algo interesante?' },
    { id: 'doctor', level: 'a2', icon: '🩺', title: 'At the doctor\'s', role: 'a doctor in a health centre', goal: 'Describe symptoms and understand the doctor\'s advice.', opener: 'Buenos días, siéntese, por favor. Dígame, ¿qué le pasa?' },
    { id: 'hotel', level: 'b1', icon: '🏨', title: 'A problem at the hotel', role: 'a hotel receptionist', goal: 'Complain politely about a problem with the room and agree on a solution.', opener: 'Buenas noches, recepción. ¿En qué puedo ayudarle?' },
    { id: 'job', level: 'b1', icon: '💼', title: 'Job interview', role: 'an HR manager interviewing a candidate for a job in a tourism company', goal: 'Answer interview questions about experience, strengths and plans.', opener: 'Buenos días, gracias por venir. Para empezar, ¿podría hablarme un poco de usted?' },
    { id: 'flat', level: 'b1', icon: '🏢', title: 'Looking for a flat', role: 'an estate agent', goal: 'Explain what kind of flat you need, ask questions and arrange a viewing.', opener: 'Inmobiliaria Sol, buenos días. ¿Qué tipo de piso está buscando?' },
    { id: 'debate', level: 'b2', icon: '⚖️', title: 'Debate: remote work', role: 'a colleague who thinks everyone should return to the office', goal: 'Argue for or against remote work, using connectors and the subjunctive.', opener: 'Pues yo lo tengo clarísimo: el teletrabajo está acabando con el espíritu de equipo. ¿Tú qué opinas?' },
    { id: 'news', level: 'b2', icon: '📰', title: 'Discussing the news', role: 'a friend who reads the newspaper every day', goal: 'Discuss a current social issue (housing, climate, technology), giving opinions and reacting.', opener: '¿Has leído lo de los alquileres? Dicen que este año han subido otro diez por ciento. Es una locura, ¿no?' },
    { id: 'hypo', level: 'b2', icon: '🎲', title: 'What would you do if…?', role: 'a curious friend who loves hypothetical questions', goal: 'Talk about hypothetical situations with si + imperfect subjunctive and conditional.', opener: 'Te propongo un juego: si mañana te tocara la lotería, ¿qué sería lo primero que harías?' },
    { id: 'cult', level: 'c1', icon: '🎭', title: 'Culture & society', role: 'a sharp, well-read journalist', goal: 'Discuss a cultural or social topic in depth with nuance, formal register and idioms.', opener: 'Últimamente se habla mucho de si las redes sociales han empobrecido el debate público. ¿Tú crees que es para tanto o que es un tópico más?' },
    { id: 'negot', level: 'c1', icon: '🤝', title: 'Business negotiation', role: 'a demanding supplier negotiating a contract', goal: 'Negotiate price, deadlines and conditions using formal language and conditionals.', opener: 'Hemos revisado su propuesta y, siendo sinceros, el plazo de entrega que plantean nos parece inasumible. ¿Hay margen para negociar?' },
    { id: 'free', level: 'any', icon: '💬', title: 'Free conversation', role: 'a friendly Spanish-speaking conversation partner', goal: 'Have a natural conversation about whatever the learner wants.', opener: '¡Hola! ¿De qué te apetece hablar hoy?' }
  ];
  function chatSystem(sc, level) {
    return `You are ${sc.role}, in a spoken role-play with a learner of Spanish whose level is ${LEVEL_NAMES[level] || level}.
Scenario goal: ${sc.goal}
You have already opened the conversation by saying: «${sc.opener}». Continue from there.
Rules:
- Stay in character and reply only in Spanish, using vocabulary and grammar suitable for the learner's level (simpler for A1–A2, richer and more idiomatic for B2–C1).
- Keep each reply short (one to three sentences) so it works when read aloud, and usually end with a question or prompt that keeps the conversation going.
- Mix Peninsular and Latin American norms only as the character would; never comment on it unless asked.
- If the learner's last message contains mistakes, after your in-character reply add one new line that starts with "💡" and gives, in English, at most two brief corrections ("you wrote X → say Y, because…"). If there are no mistakes, don't add that line.
- If the learner writes in English or seems lost, help them briefly in English inside the 💡 line and suggest a Spanish phrase they could use.`;
  }
  // history: turns after the opener, starting with the learner: [{role:'user'|'assistant', content:string}]
  async function chat(sc, level, history, onText) {
    let mod;
    try {
      const c = await getClient(); mod = c.mod;
      const stream = c.client.beta.messages.stream(baseParams({
        max_tokens: 16000,
        output_config: { effort: 'low' },
        system: chatSystem(sc, level),
        messages: history
      }));
      let acc = '';
      for await (const ev of stream) {
        if (ev.type === 'content_block_delta' && ev.delta.type === 'text_delta') { acc += ev.delta.text; onText && onText(acc); }
      }
      const msg = await stream.finalMessage();
      if (msg.stop_reason === 'refusal') throw new TutorError('refusal', 'The AI declined to continue this conversation.');
      return textOf(msg) || acc;
    } catch (e) { throw friendly(e, mod); }
  }

  window.Tutor = {
    MODELS, SCENARIOS,
    get key() { return cfg.key; }, get model() { return cfg.model; },
    setKey(k) { cfg.key = (k || '').trim(); client = null; saveCfg(); },
    setModel(m) { if (MODELS.some(x => x.id === m)) { cfg.model = m; saveCfg(); } },
    forget() { cfg.key = ''; client = null; saveCfg(); },
    correct, chat, firstMessage: sc => sc.opener
  };
})();
