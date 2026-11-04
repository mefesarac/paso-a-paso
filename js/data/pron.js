// Pronunciation guide: sections with examples, minimal pairs and tongue twisters.
window.PRON = {
  sections: [
    {
      title: 'The five vowels', icon: '🅰️',
      html: `<p>Spanish has only <b>five pure vowel sounds</b>, always short and clear — never "lazy" like the English <i>uh</i>. Each vowel always sounds the same.</p>
<table class="g"><tr><th>Vowel</th><th>Sounds like</th><th>Example</th></tr>
<tr><td><b>a</b></td><td>"a" in <i>father</i> (shorter)</td><td>casa, mapa</td></tr>
<tr><td><b>e</b></td><td>"e" in <i>bed</i></td><td>mesa, leche</td></tr>
<tr><td><b>i</b></td><td>"ee" in <i>see</i> (shorter)</td><td>sí, vino</td></tr>
<tr><td><b>o</b></td><td>"o" in <i>not</i> (rounded)</td><td>todo, como</td></tr>
<tr><td><b>u</b></td><td>"oo" in <i>food</i></td><td>uno, luna</td></tr></table>`,
      examples: ['casa', 'mesa', 'vino', 'todo', 'luna', 'murciélago', 'Uruguay']
    },
    {
      title: 'C, Z and S', icon: '🐝',
      html: `<p><b>c</b> before <b>a, o, u</b> = "k": <i>casa, cosa, cubo</i>. <b>qu</b> before <b>e, i</b> = "k": <i>queso, quince</i> (the u is silent).</p>
<p><b>c</b> before <b>e, i</b> and <b>z</b>: "th" in central and northern Spain (<i>distinción</i>), "s" in Latin America, the Canaries and much of Andalusia (<i>seseo</i>). Both are correct.</p>
<p class="ex">cena, cine, zapato, cerveza, corazón</p>`,
      examples: ['casa', 'queso', 'cena', 'cine', 'zapato', 'cerveza', 'corazón']
    },
    {
      title: 'G, J and H', icon: '🌬️',
      html: `<p><b>j</b> and <b>g</b> before <b>e, i</b> = a raspy sound from the throat, like Scottish <i>loch</i> (softer in the Caribbean): <i>jamón, gente, jirafa</i>.</p>
<p><b>g</b> before <b>a, o, u</b> = hard "g": <i>gato, gota</i>. To get a hard g before e/i, Spanish writes <b>gu</b>: <i>guerra, guitarra</i> (u silent). <b>gü</b> means the u is pronounced: <i>pingüino, bilingüe</i>.</p>
<p><b>h</b> is always <b>silent</b>: <i>hola, hotel, ahora</i>.</p>`,
      examples: ['jamón', 'gente', 'jirafa', 'gato', 'guitarra', 'pingüino', 'hola', 'ahora']
    },
    {
      title: 'R and RR', icon: '🐯',
      html: `<p>A single <b>r</b> between vowels is a quick <b>tap</b>, like the "tt" in American <i>butter</i>: <i>pero, caro, para</i>.</p>
<p><b>rr</b>, and <b>r</b> at the start of a word or after <i>n, l, s</i>, is a <b>trill</b> (rolled r): <i>perro, carro, rojo, Enrique, alrededor</i>.</p>
<p class="tip">💡 Practise the trill by saying "butter" fast and repeating the tap several times: <i>t-d-d-d</i>.</p>`,
      examples: ['pero', 'perro', 'caro', 'carro', 'rojo', 'Enrique', 'ferrocarril']
    },
    {
      title: 'LL, Y and Ñ', icon: '🦙',
      html: `<p><b>ll</b> and <b>y</b> sound the same in most places (<i>yeísmo</i>): like "y" in <i>yes</i>, sometimes closer to "j" in <i>jam</i>: <i>llamar, calle, yo, playa</i>. In Argentina and Uruguay they sound like "sh": <i>«sho me shamo»</i>.</p>
<p><b>ñ</b> = "ny" in <i>canyon</i>: <i>España, niño, año</i>.</p>
<p class="tip">💡 <i>año</i> (year) ≠ <i>ano</i> (anus) — the tilde matters!</p>`,
      examples: ['llamar', 'calle', 'yo', 'playa', 'España', 'niño', 'año', 'mañana']
    },
    {
      title: 'B and V, D', icon: '🅱️',
      html: `<p><b>b</b> and <b>v</b> are pronounced <b>exactly the same</b>: a hard "b" at the start or after m/n (<i>vino, bien, ambos</i>), and a soft "b" with lips barely touching between vowels (<i>uva, sabe</i>).</p>
<p><b>d</b> between vowels and at the end of a word is soft, like "th" in <i>this</i>: <i>todo, cansado, Madrid, usted</i>.</p>`,
      examples: ['vino', 'bien', 'uva', 'sabe', 'todo', 'cansado', 'Madrid', 'usted']
    },
    {
      title: 'Stress and written accents', icon: '🎯',
      html: `<p>Every Spanish word has one stressed syllable. The rules:</p>
<table class="g"><tr><th>Word ends in…</th><th>Stress falls on…</th><th>Examples</th></tr>
<tr><td>a vowel, <b>n</b> or <b>s</b></td><td>the second-to-last syllable</td><td>ca-sa, ha-blan, li-bros</td></tr>
<tr><td>any other consonant</td><td>the last syllable</td><td>ha-blar, ciu-dad, re-loj</td></tr></table>
<p>If a word <b>breaks</b> these rules, it carries a written accent on the stressed vowel: <i>ca-fé, can-ción, ár-bol, mú-si-ca</i>.</p>
<p>Accents also distinguish words: <i>tú</i> (you) / <i>tu</i> (your), <i>sí</i> (yes) / <i>si</i> (if), <i>él</i> (he) / <i>el</i> (the), <i>más</i> (more) / <i>mas</i> (but).</p>`,
      examples: ['casa', 'hablar', 'café', 'canción', 'árbol', 'música', 'teléfono']
    },
    {
      title: 'Linking words', icon: '🔗',
      html: `<p>Spanish speakers link words together: a final vowel joins the first vowel of the next word, and consonants link to following vowels. This is why fast Spanish sounds like one long word.</p>
<p class="ex"><i>¿Cómo estás?</i> → «có-moes-tás» · <i>los otros</i> → «lo-sotros» · <i>Va a ir a Alicante</i> → «vai-ra-li-can-te»</p>`,
      examples: ['¿Cómo estás?', 'Los otros amigos', 'Va a ir a Alicante', 'Mi hermana está en casa']
    }
  ],
  // [word A, word B, meaning A, meaning B]
  pairs: [
    ['pero', 'perro', 'but', 'dog'], ['caro', 'carro', 'expensive', 'car / cart'], ['coro', 'corro', 'choir', 'I run'],
    ['para', 'parra', 'for', 'grapevine'], ['moro', 'morro', 'Moor', 'snout'], ['año', 'ano', 'year', 'anus'],
    ['cana', 'caña', 'grey hair', 'cane / small beer'], ['pena', 'peña', 'sorrow', 'rock / group of friends'],
    ['casa', 'caza', 'house', 'hunt (Spain: distinct sound)'], ['papa', 'papá', 'potato / Pope', 'dad'],
    ['hablo', 'habló', 'I speak', 'he/she spoke'], ['termino', 'terminó', 'I finish', 'he/she finished'],
    ['pase', 'pasé', '(that) he passes', 'I passed'], ['cara', 'cada', 'face', 'each'], ['gato', 'gajo', 'cat', 'segment (of fruit)'],
    ['mesa', 'misa', 'table', 'mass (church)'], ['peso', 'piso', 'weight', 'flat / floor'], ['vaso', 'beso', 'glass', 'kiss'],
    ['pollo', 'polo', 'chicken', 'pole / polo']
  ],
  twisters: [
    ['Tres tristes tigres tragaban trigo en un trigal.', 'Three sad tigers swallowed wheat in a wheat field.'],
    ['El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha cortado.', 'Saint Roque\'s dog has no tail because Ramón Ramírez has cut it off.'],
    ['Erre con erre cigarro, erre con erre barril, rápido ruedan los carros cargados de azúcar del ferrocarril.', 'R with R cigar, R with R barrel, quickly roll the carts loaded with sugar from the railway.'],
    ['Pablito clavó un clavito. ¿Qué clavito clavó Pablito?', 'Little Pablo nailed a little nail. What little nail did little Pablo nail?'],
    ['Como poco coco como, poco coco compro.', 'Since I eat little coconut, I buy little coconut.'],
    ['Pepe Pecas pica papas con un pico.', 'Pepe Freckles chops potatoes with a pick.'],
    ['Me han dicho que has dicho un dicho que han dicho que he dicho yo.', 'I\'ve been told you said a saying they say I said.'],
    ['El cielo está enladrillado, ¿quién lo desenladrillará? El desenladrillador que lo desenladrille buen desenladrillador será.', 'The sky is bricked up; who will unbrick it? The unbricker who unbricks it will be a good unbricker.']
  ]
};
