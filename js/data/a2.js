window.COURSE = window.COURSE || [];
COURSE.push({
  id: 'a2', name: 'A2', title: 'Elementary', color: '#1cb0f6',
  desc: 'Past tenses, future plans, shopping, health and comparisons.',
  units: [
    {
      id: 'a2-1', icon: '✈️', title: 'Experiences', es: 'Experiencias',
      words: [
        ['ya', 'already'], ['todavía', 'still / yet'], ['nunca', 'never'], ['alguna vez', 'ever'],
        ['el viaje', 'trip'], ['el país', 'country'], ['la ciudad', 'city'], ['conocer', 'to know (a person / place)'],
        ['visitar', 'to visit'], ['probar', 'to try / taste'], ['el avión', 'plane'], ['el billete', 'ticket']
      ],
      grammar: {
        title: 'Pretérito perfecto (present perfect)',
        html: `<p>Form: <b>haber</b> (present) + <b>past participle</b>. Used for recent events, today, and life experiences: <i>hoy, esta semana, ya, todavía no, nunca, alguna vez</i>.</p>
<table class="g"><tr><th>Person</th><th>haber</th><th>+ participle</th></tr>
<tr><td>yo</td><td><b>he</b></td><td rowspan="6">hablado<br>comido<br>vivido</td></tr>
<tr><td>tú</td><td><b>has</b></td></tr><tr><td>él / ella</td><td><b>ha</b></td></tr>
<tr><td>nosotros</td><td><b>hemos</b></td></tr><tr><td>vosotros</td><td><b>habéis</b></td></tr>
<tr><td>ellos</td><td><b>han</b></td></tr></table>
<p>Participle: -ar → <b>-ado</b> (hablado), -er/-ir → <b>-ido</b> (comido, vivido).</p>
<p>Irregular: hacer → <b>hecho</b>, ver → <b>visto</b>, escribir → <b>escrito</b>, decir → <b>dicho</b>, poner → <b>puesto</b>, volver → <b>vuelto</b>, abrir → <b>abierto</b>, romper → <b>roto</b>.</p>`
      },
      fill: [
        ['Yo ___ visitado México.', 'he', ['he', 'ha', 'has'], 'I have visited Mexico.'],
        ['¿___ comido paella alguna vez?', 'Has', ['Has', 'He', 'Han'], 'Have you ever eaten paella?'],
        ['Ella ha ___ una carta. (escribir)', 'escrito', ['escrito', 'escribido', 'escribe'], 'She has written a letter.'],
        ['Nosotros ___ viajado mucho.', 'hemos', ['hemos', 'han', 'habéis'], 'We have travelled a lot.'],
        ['Todavía no he ___ esa película. (ver)', 'visto', ['visto', 'veído', 'vido'], 'I haven\'t seen that film yet.'],
        ['¿Qué has ___ hoy? (hacer)', 'hecho', ['hecho', 'hacido', 'hizo'], 'What have you done today?']
      ],
      sents: [
        ['He visitado México dos veces.', 'I have visited Mexico twice.'],
        ['¿Has probado la paella alguna vez?', 'Have you ever tried paella?'],
        ['Todavía no he comprado los billetes.', 'I haven\'t bought the tickets yet.'],
        ['Nunca hemos viajado en avión.', 'We have never travelled by plane.'],
        ['Ya han llegado a la ciudad.', 'They have already arrived in the city.']
      ]
    },
    {
      id: 'a2-2', icon: '🗓️', title: 'Last Weekend', es: 'El fin de semana pasado',
      words: [
        ['anteayer', 'the day before yesterday'], ['anoche', 'last night'], ['el año pasado', 'last year'],
        ['la semana pasada', 'last week'], ['el fin de semana', 'weekend'], ['llegar', 'to arrive'],
        ['salir', 'to go out / leave'], ['volver', 'to return'], ['comprar', 'to buy'], ['ganar', 'to win / earn'],
        ['perder', 'to lose'], ['empezar', 'to begin']
      ],
      grammar: {
        title: 'Pretérito indefinido (simple past) — regular',
        html: `<p>For completed actions at a specific time in the past: <i>ayer, anoche, el año pasado, en 2010</i>.</p>
<table class="g"><tr><th>Person</th><th>hablar</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>habl<b>é</b></td><td>com<b>í</b></td><td>viv<b>í</b></td></tr>
<tr><td>tú</td><td>habl<b>aste</b></td><td>com<b>iste</b></td><td>viv<b>iste</b></td></tr>
<tr><td>él / ella</td><td>habl<b>ó</b></td><td>com<b>ió</b></td><td>viv<b>ió</b></td></tr>
<tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>imos</b></td><td>viv<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>asteis</b></td><td>com<b>isteis</b></td><td>viv<b>isteis</b></td></tr>
<tr><td>ellos</td><td>habl<b>aron</b></td><td>com<b>ieron</b></td><td>viv<b>ieron</b></td></tr></table>
<p class="tip">💡 Spelling changes in the <b>yo</b> form: llegar → <b>llegué</b>, empezar → <b>empecé</b>, buscar → <b>busqué</b>.</p>`
      },
      fill: [
        ['Ayer yo ___ con mi madre. (hablar)', 'hablé', ['hablé', 'habló', 'hablo'], 'Yesterday I spoke with my mother.'],
        ['¿A qué hora ___ tú anoche? (llegar)', 'llegaste', ['llegaste', 'llegué', 'llegó'], 'What time did you arrive last night?'],
        ['Ella ___ una pizza. (comer)', 'comió', ['comió', 'comí', 'come'], 'She ate a pizza.'],
        ['Nosotros ___ a casa tarde. (volver)', 'volvimos', ['volvimos', 'volvieron', 'volví'], 'We came back home late.'],
        ['Ellos ___ el partido. (ganar)', 'ganaron', ['ganaron', 'ganó', 'ganamos'], 'They won the match.'],
        ['Yo ___ a trabajar a las nueve. (empezar)', 'empecé', ['empecé', 'empezé', 'empezó'], 'I started working at nine.']
      ],
      sents: [
        ['Ayer hablé con mi madre.', 'Yesterday I spoke with my mother.'],
        ['Anoche salimos a cenar.', 'Last night we went out for dinner.'],
        ['El año pasado compré un coche.', 'Last year I bought a car.'],
        ['¿A qué hora volviste a casa?', 'What time did you come back home?'],
        ['Nuestro equipo perdió el partido.', 'Our team lost the match.']
      ]
    },
    {
      id: 'a2-3', icon: '🏖️', title: 'Holidays', es: 'Las vacaciones',
      words: [
        ['las vacaciones', 'holidays / vacation'], ['la playa', 'beach'], ['la montaña', 'mountain'], ['el hotel', 'hotel'],
        ['la maleta', 'suitcase'], ['el pasaporte', 'passport'], ['el mar', 'sea'], ['el sol', 'sun'],
        ['la foto', 'photo'], ['el recuerdo', 'souvenir / memory'], ['alquilar', 'to rent'], ['reservar', 'to book']
      ],
      grammar: {
        title: 'Irregular indefinido',
        html: `<table class="g"><tr><th>Verb</th><th>Forms (yo, tú, él, nos., vos., ellos)</th></tr>
<tr><td>ser / ir</td><td>fui, fuiste, fue, fuimos, fuisteis, fueron</td></tr>
<tr><td>tener</td><td>tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron</td></tr>
<tr><td>estar</td><td>estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron</td></tr>
<tr><td>hacer</td><td>hice, hiciste, hizo, hicimos, hicisteis, hicieron</td></tr>
<tr><td>poder</td><td>pude, pudiste, pudo, pudimos, pudisteis, pudieron</td></tr>
<tr><td>venir</td><td>vine, viniste, vino, vinimos, vinisteis, vinieron</td></tr>
<tr><td>decir</td><td>dije, dijiste, dijo, dijimos, dijisteis, dijeron</td></tr></table>
<p class="tip">💡 <b>Ser</b> and <b>ir</b> share the same past forms; context tells them apart: <i>Fue a Madrid</i> (he went) / <i>Fue fantástico</i> (it was great).</p>
<p>These irregular forms have <b>no written accent</b>: <i>tuve, hice, pude</i>.</p>`
      },
      fill: [
        ['El verano pasado ___ a la playa. (ir, yo)', 'fui', ['fui', 'fue', 'iba'], 'Last summer I went to the beach.'],
        ['¿Qué ___ el fin de semana? (hacer, tú)', 'hiciste', ['hiciste', 'haciste', 'hizo'], 'What did you do at the weekend?'],
        ['Ella ___ en un hotel. (estar)', 'estuvo', ['estuvo', 'estó', 'estuve'], 'She stayed in a hotel.'],
        ['Nosotros ___ que volver pronto. (tener)', 'tuvimos', ['tuvimos', 'tenimos', 'tuvieron'], 'We had to come back early.'],
        ['La fiesta ___ fantástica. (ser)', 'fue', ['fue', 'fui', 'era'], 'The party was fantastic.'],
        ['Ellos no ___ venir. (poder)', 'pudieron', ['pudieron', 'podieron', 'pudo'], 'They couldn\'t come.']
      ],
      sents: [
        ['El verano pasado fuimos a la playa.', 'Last summer we went to the beach.'],
        ['Estuve una semana en un hotel.', 'I stayed in a hotel for a week.'],
        ['Hice muchas fotos del mar.', 'I took a lot of photos of the sea.'],
        ['Tuvimos que alquilar un coche.', 'We had to rent a car.'],
        ['Las vacaciones fueron fantásticas.', 'The holidays were fantastic.']
      ]
    },
    {
      id: 'a2-4', icon: '🧸', title: 'Childhood', es: 'La infancia',
      words: [
        ['la infancia', 'childhood'], ['de niño', 'as a child'], ['siempre', 'always'], ['a menudo', 'often'],
        ['a veces', 'sometimes'], ['jugar', 'to play'], ['el juguete', 'toy'], ['el pueblo', 'village / town'],
        ['el vecino', 'neighbour'], ['antes', 'before / in the past'], ['soler', 'to usually do'], ['el colegio', 'school']
      ],
      grammar: {
        title: 'Pretérito imperfecto (used to / was -ing)',
        html: `<p>The <b>imperfecto</b> describes habits, repeated actions and descriptions in the past ("used to", "was doing").</p>
<table class="g"><tr><th>Person</th><th>hablar</th><th>comer / vivir</th></tr>
<tr><td>yo</td><td>habl<b>aba</b></td><td>com<b>ía</b></td></tr>
<tr><td>tú</td><td>habl<b>abas</b></td><td>com<b>ías</b></td></tr>
<tr><td>él / ella</td><td>habl<b>aba</b></td><td>com<b>ía</b></td></tr>
<tr><td>nosotros</td><td>habl<b>ábamos</b></td><td>com<b>íamos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>abais</b></td><td>com<b>íais</b></td></tr>
<tr><td>ellos</td><td>habl<b>aban</b></td><td>com<b>ían</b></td></tr></table>
<p>Only three irregular verbs: <b>ser</b> (era, eras, era, éramos, erais, eran), <b>ir</b> (iba, ibas, iba, íbamos, ibais, iban), <b>ver</b> (veía, veías…).</p>
<p class="ex">De niño, siempre <b>jugaba</b> en la calle. — As a child, I always used to play in the street.</p>`
      },
      fill: [
        ['De niño, yo ___ en el parque. (jugar)', 'jugaba', ['jugaba', 'jugué', 'juego'], 'As a child I used to play in the park.'],
        ['Mi abuela ___ muy simpática. (ser)', 'era', ['era', 'fue', 'estaba'], 'My grandmother was very nice.'],
        ['Nosotros ___ en un pueblo. (vivir)', 'vivíamos', ['vivíamos', 'vivimos', 'vivían'], 'We used to live in a village.'],
        ['Siempre ___ al colegio a pie. (ir, yo)', 'iba', ['iba', 'fui', 'voy'], 'I always used to walk to school.'],
        ['¿Qué ___ tú de pequeño? (comer)', 'comías', ['comías', 'comiste', 'comía'], 'What did you use to eat as a child?'],
        ['Antes ellos ___ mucha televisión. (ver)', 'veían', ['veían', 'vieron', 'veía'], 'They used to watch a lot of TV.']
      ],
      sents: [
        ['De niño vivía en un pueblo.', 'As a child I lived in a village.'],
        ['Siempre jugábamos en el parque.', 'We always used to play in the park.'],
        ['Mi abuelo era muy simpático.', 'My grandfather was very nice.'],
        ['A veces íbamos a la playa.', 'Sometimes we used to go to the beach.'],
        ['Antes no había ordenadores.', 'In the past there were no computers.']
      ]
    },
    {
      id: 'a2-5', icon: '🎉', title: 'Future Plans', es: 'Planes de futuro',
      words: [
        ['el futuro', 'future'], ['el plan', 'plan'], ['próximo', 'next'], ['pronto', 'soon'],
        ['la boda', 'wedding'], ['el cumpleaños', 'birthday'], ['la fiesta', 'party'], ['invitar', 'to invite'],
        ['celebrar', 'to celebrate'], ['mudarse', 'to move (house)'], ['quizás', 'perhaps'], ['seguro', 'sure / certain']
      ],
      grammar: {
        title: 'IR A + infinitive and the future tense',
        html: `<p><b>ir a + infinitive</b>: planned, near future. <i>Voy a estudiar.</i> (I'm going to study.)</p>
<p><b>Futuro simple</b>: infinitive + ending. Used for predictions and the more distant future.</p>
<table class="g"><tr><th>Person</th><th>hablar</th></tr>
<tr><td>yo</td><td>hablar<b>é</b></td></tr><tr><td>tú</td><td>hablar<b>ás</b></td></tr>
<tr><td>él / ella</td><td>hablar<b>á</b></td></tr><tr><td>nosotros</td><td>hablar<b>emos</b></td></tr>
<tr><td>vosotros</td><td>hablar<b>éis</b></td></tr><tr><td>ellos</td><td>hablar<b>án</b></td></tr></table>
<p>Irregular stems: tener → <b>tendr-</b>, hacer → <b>har-</b>, poder → <b>podr-</b>, salir → <b>saldr-</b>, venir → <b>vendr-</b>, decir → <b>dir-</b>, saber → <b>sabr-</b>, querer → <b>querr-</b>.</p>`
      },
      fill: [
        ['Mañana ___ a estudiar. (yo)', 'voy', ['voy', 'vas', 'iré'], 'Tomorrow I\'m going to study.'],
        ['El año que viene ___ a Madrid. (viajar, yo)', 'viajaré', ['viajaré', 'viajará', 'viajo'], 'Next year I will travel to Madrid.'],
        ['¿Qué ___ el sábado? (hacer, tú)', 'harás', ['harás', 'hacerás', 'hará'], 'What will you do on Saturday?'],
        ['Ellos ___ una fiesta. (tener)', 'tendrán', ['tendrán', 'tenerán', 'tendrá'], 'They will have a party.'],
        ['Nosotros ___ a celebrar su cumpleaños.', 'vamos', ['vamos', 'van', 'iremos'], 'We are going to celebrate his birthday.'],
        ['Creo que ___ mañana. (llover)', 'lloverá', ['lloverá', 'llueve', 'llovió'], 'I think it will rain tomorrow.']
      ],
      sents: [
        ['Voy a celebrar mi cumpleaños.', 'I\'m going to celebrate my birthday.'],
        ['El próximo año me mudaré a Madrid.', 'Next year I will move to Madrid.'],
        ['Quizás vendrán a la boda.', 'Perhaps they will come to the wedding.'],
        ['¿Qué vas a hacer este fin de semana?', 'What are you going to do this weekend?'],
        ['Pronto tendremos una casa nueva.', 'Soon we will have a new house.']
      ]
    },
    {
      id: 'a2-6', icon: '🛍️', title: 'Shopping & Clothes', es: 'De compras',
      words: [
        ['la camisa', 'shirt'], ['los pantalones', 'trousers'], ['el vestido', 'dress'], ['los zapatos', 'shoes'],
        ['la chaqueta', 'jacket'], ['la falda', 'skirt'], ['la talla', 'size'], ['barato', 'cheap'],
        ['caro', 'expensive'], ['el precio', 'price'], ['probarse', 'to try on'], ['pagar', 'to pay']
      ],
      grammar: {
        title: 'Direct object pronouns and demonstratives',
        html: `<p>Object pronouns go <b>before</b> the conjugated verb: <i>¿El libro? <b>Lo</b> tengo.</i> (The book? I have it.)</p>
<table class="g"><tr><th>Pronoun</th><th>English</th></tr>
<tr><td><b>lo</b></td><td>it / him (masc.)</td></tr><tr><td><b>la</b></td><td>it / her (fem.)</td></tr>
<tr><td><b>los</b></td><td>them (masc.)</td></tr><tr><td><b>las</b></td><td>them (fem.)</td></tr>
<tr><td>me / te / nos / os</td><td>me / you / us / you all</td></tr></table>
<p>Demonstratives:</p>
<table class="g"><tr><th>this (here)</th><th>that (there)</th><th>that (over there)</th></tr>
<tr><td>este / esta</td><td>ese / esa</td><td>aquel / aquella</td></tr>
<tr><td>estos / estas</td><td>esos / esas</td><td>aquellos / aquellas</td></tr></table>`
      },
      fill: [
        ['¿La camisa? ___ compro.', 'La', ['La', 'Lo', 'Le'], 'The shirt? I\'ll buy it.'],
        ['Los zapatos, ¿___ tienes en negro?', 'los', ['los', 'las', 'lo'], 'The shoes — do you have them in black?'],
        ['___ vestido es muy bonito. (this)', 'Este', ['Este', 'Esta', 'Esto'], 'This dress is very pretty.'],
        ['¿Cuánto cuestan ___ pantalones? (those)', 'esos', ['esos', 'esas', 'ese'], 'How much are those trousers?'],
        ['Quiero probarme ___ chaqueta. (this)', 'esta', ['esta', 'este', 'estos'], 'I want to try on this jacket.'],
        ['El libro, ___ leí ayer.', 'lo', ['lo', 'la', 'los'], 'The book — I read it yesterday.']
      ],
      sents: [
        ['¿Cuánto cuesta esta camisa?', 'How much is this shirt?'],
        ['Estos zapatos son muy caros.', 'These shoes are very expensive.'],
        ['¿Puedo probarme la chaqueta?', 'Can I try on the jacket?'],
        ['Me gusta ese vestido, lo compro.', 'I like that dress, I\'ll buy it.'],
        ['¿Puedo pagar con tarjeta?', 'Can I pay by card?']
      ]
    },
    {
      id: 'a2-7', icon: '🩺', title: 'Health & Body', es: 'La salud',
      words: [
        ['la cabeza', 'head'], ['el estómago', 'stomach'], ['la espalda', 'back'], ['la mano', 'hand'],
        ['el pie', 'foot'], ['el brazo', 'arm'], ['la pierna', 'leg'], ['el médico', 'doctor'],
        ['la fiebre', 'fever'], ['la pastilla', 'pill'], ['el dolor', 'pain'], ['enfermo', 'ill / sick']
      ],
      grammar: {
        title: 'DOLER, TENER QUE and DEBER',
        html: `<p><b>Doler</b> (to hurt) works like <b>gustar</b>: <i>Me <b>duele</b> la cabeza.</i> (My head hurts.) — <i>Me <b>duelen</b> los pies.</i> (My feet hurt.)</p>
<p>With body parts Spanish uses the article, not a possessive: <i>la cabeza</i> (not <i>mi cabeza</i>).</p>
<p><b>Tener que</b> + infinitive = to have to: <i>Tengo que ir al médico.</i></p>
<p><b>Deber</b> + infinitive = should / must: <i>Debes descansar.</i></p>
<p>Useful: <b>tener fiebre</b> (to have a fever), <b>tener tos</b> (to have a cough), <b>estar resfriado</b> (to have a cold).</p>`
      },
      fill: [
        ['Me ___ la cabeza.', 'duele', ['duele', 'duelen', 'dolor'], 'My head hurts.'],
        ['Me ___ los pies.', 'duelen', ['duelen', 'duele', 'duelo'], 'My feet hurt.'],
        ['Tienes ___ descansar.', 'que', ['que', 'de', 'a'], 'You have to rest.'],
        ['¿Te ___ el estómago?', 'duele', ['duele', 'duelen', 'dueles'], 'Does your stomach hurt?'],
        ['Usted ___ tomar estas pastillas.', 'debe', ['debe', 'debes', 'debo'], 'You should take these pills.'],
        ['A ella le ___ la espalda.', 'duele', ['duele', 'duelen', 'duela'], 'Her back hurts.']
      ],
      sents: [
        ['Me duele mucho la cabeza.', 'My head hurts a lot.'],
        ['Tengo fiebre desde ayer.', 'I have had a fever since yesterday.'],
        ['Tienes que ir al médico.', 'You have to go to the doctor.'],
        ['Debe tomar una pastilla cada ocho horas.', 'You must take a pill every eight hours.'],
        ['Mi hijo está enfermo hoy.', 'My son is ill today.']
      ]
    },
    {
      id: 'a2-8', icon: '⚖️', title: 'Comparisons', es: 'Comparaciones',
      words: [
        ['mejor', 'better'], ['peor', 'worse'], ['mayor', 'older / bigger'], ['menor', 'younger / smaller'],
        ['rápido', 'fast'], ['lento', 'slow'], ['fácil', 'easy'], ['difícil', 'difficult'],
        ['caliente', 'hot'], ['frío', 'cold'], ['interesante', 'interesting'], ['aburrido', 'boring']
      ],
      grammar: {
        title: 'Comparatives and superlatives',
        html: `<table class="g"><tr><th>Structure</th><th>Meaning</th></tr>
<tr><td><b>más</b> + adj. + <b>que</b></td><td>more … than</td></tr>
<tr><td><b>menos</b> + adj. + <b>que</b></td><td>less … than</td></tr>
<tr><td><b>tan</b> + adj. + <b>como</b></td><td>as … as</td></tr>
<tr><td><b>tanto/a/os/as</b> + noun + <b>como</b></td><td>as much / many … as</td></tr></table>
<p>Irregular: bueno → <b>mejor</b>, malo → <b>peor</b>, grande (age) → <b>mayor</b>, pequeño (age) → <b>menor</b>.</p>
<p>Superlative: <b>el / la más</b> + adj.: <i>el más alto de la clase</i> (the tallest in the class). Absolute: <b>-ísimo</b>: <i>fácil → facilísimo</i>, <i>caro → carísimo</i>.</p>`
      },
      fill: [
        ['Madrid es ___ grande que Sevilla.', 'más', ['más', 'tan', 'muy'], 'Madrid is bigger than Seville.'],
        ['Mi hermano es tan alto ___ yo.', 'como', ['como', 'que', 'de'], 'My brother is as tall as me.'],
        ['Este libro es ___ que el otro. (better)', 'mejor', ['mejor', 'más bueno', 'bien'], 'This book is better than the other one.'],
        ['Es el chico ___ alto de la clase.', 'más', ['más', 'mejor', 'tan'], 'He is the tallest boy in the class.'],
        ['Ana tiene ___ libros como yo.', 'tantos', ['tantos', 'tan', 'tantas'], 'Ana has as many books as me.'],
        ['El examen fue ___. (very easy)', 'facilísimo', ['facilísimo', 'más fácil', 'fácilmente'], 'The exam was really easy.']
      ],
      sents: [
        ['Madrid es más grande que Sevilla.', 'Madrid is bigger than Seville.'],
        ['Mi hermana es mayor que yo.', 'My sister is older than me.'],
        ['Este examen es tan difícil como el otro.', 'This exam is as difficult as the other one.'],
        ['Es la ciudad más bonita del país.', 'It is the most beautiful city in the country.'],
        ['El tren es más rápido que el autobús.', 'The train is faster than the bus.']
      ]
    }
  ]
});
