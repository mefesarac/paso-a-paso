// Additional C1 lessons and the final lesson order.
window.COURSE_EXTRA = window.COURSE_EXTRA || [];
COURSE_EXTRA.push({
  level: 'c1',
  order: ['c1-1', 'c1-4', 'c1-12', 'c1-11', 'c1-14', 'c1-13', 'c1-6', 'c1-8', 'c1-10', 'c1-2', 'c1-5', 'c1-9', 'c1-3', 'c1-7'],
  units: [
    {
      id: 'c1-8', icon: '🧩', title: 'Word Formation', es: 'Formación de palabras',
      words: [
        ['la felicidad', 'happiness'], ['la libertad', 'freedom'], ['el crecimiento', 'growth'], ['desconocido', 'unknown / stranger'],
        ['imposible', 'impossible'], ['incómodo', 'uncomfortable'], ['reutilizar', 'to reuse'], ['el panadero', 'baker'],
        ['la panadería', 'bakery'], ['un ratito', 'a little while'], ['el portazo', 'slam of a door'], ['el cochazo', 'big, flashy car']
      ],
      grammar: {
        title: 'Prefixes, suffixes, diminutives and augmentatives',
        html: `<table class="g"><tr><th>Prefix</th><th>Meaning</th><th>Examples</th></tr>
<tr><td>des- / dis-</td><td>opposite, undo</td><td>deshacer, desconocido, disgusto</td></tr>
<tr><td>in- / im- / i-</td><td>not</td><td>inútil, imposible, ilegal, irreal</td></tr>
<tr><td>re-</td><td>again; intensity</td><td>reutilizar, releer; rebueno (colloq.)</td></tr>
<tr><td>pre- / pos(t)-</td><td>before / after</td><td>prever, posguerra</td></tr>
<tr><td>anti- / sobre- / sub-</td><td>against / over / under</td><td>antivirus, sobrepeso, subdesarrollo</td></tr></table>
<table class="g"><tr><th>Suffix</th><th>Forms</th><th>Examples</th></tr>
<tr><td>-dad / -tad, -eza, -ura</td><td>abstract nouns</td><td>felicidad, libertad, belleza, altura</td></tr>
<tr><td>-ción / -sión, -miento</td><td>action nouns</td><td>contaminación, decisión, crecimiento</td></tr>
<tr><td>-ble, -oso, -al</td><td>adjectives</td><td>amable, peligroso, mundial</td></tr>
<tr><td>-ero/a, -ería</td><td>job; shop</td><td>panadero, panadería, zapatería</td></tr>
<tr><td>-izar, -ear, -ecer</td><td>verbs</td><td>modernizar, golpear, enriquecer</td></tr></table>
<p><b>Diminutives</b> (small, affectionate, softening): <b>-ito/a</b> (casita, ahorita), <b>-cito</b> after -e, -n, -r (cafecito, camioncito), <b>-illo</b> (pasillo), <b>-ico</b> (regional: momentico).</p>
<p><b>Augmentatives</b>: <b>-ón/-ona</b> (cabezón), <b>-azo/a</b> (cochazo; also "a blow": portazo, codazo, <i>flechazo</i> = love at first sight), <b>-ote</b> (grandote).</p>`
      },
      fill: [
        ['Esta silla es muy ___. (not comfortable)', 'incómoda', ['incómoda', 'descómoda', 'imcómoda'], 'This chair is very uncomfortable.'],
        ['Es ___ terminar hoy. (not possible)', 'imposible', ['imposible', 'inposible', 'desposible'], 'It\'s impossible to finish today.'],
        ['Hay que ___ las bolsas de plástico. (use again)', 'reutilizar', ['reutilizar', 'desutilizar', 'inutilizar'], 'We must reuse plastic bags.'],
        ['Voy a la ___ a comprar pan.', 'panadería', ['panadería', 'panadero', 'panera'], 'I\'m going to the bakery to buy bread.'],
        ['Espera un ___, ahora vuelvo. (diminutive of rato)', 'ratito', ['ratito', 'ratón', 'ratazo'], 'Wait a moment, I\'ll be right back.'],
        ['Se fue dando un ___. (slamming the door)', 'portazo', ['portazo', 'portón', 'portita'], 'He left slamming the door.']
      ],
      sents: [
        ['La felicidad no se compra con dinero.', 'Happiness can\'t be bought with money.'],
        ['El crecimiento económico ha sido lento.', 'Economic growth has been slow.'],
        ['Me tomo un cafecito y salimos.', 'I\'ll have a quick coffee and we\'ll go.'],
        ['Un desconocido llamó a la puerta.', 'A stranger knocked at the door.'],
        ['¡Qué cochazo se ha comprado tu vecino!', 'What a flashy car your neighbour has bought!'],
        ['Fue un flechazo: nos enamoramos al instante.', 'It was love at first sight: we fell in love instantly.']
      ]
    },
    {
      id: 'c1-9', icon: '🗺️', title: 'Varieties of Spanish', es: 'Variedades del español',
      words: [
        ['el carro', 'car (Latin America)'], ['la computadora', 'computer (Latin America)'], ['el celular', 'mobile phone (Latin America)'],
        ['el jugo', 'juice (Latin America)'], ['el zumo', 'juice (Spain)'], ['manejar', 'to drive (Latin America)'], ['la papa', 'potato (Latin America)'],
        ['la patata', 'potato (Spain)'], ['el departamento', 'flat (Latin America)'], ['los lentes', 'glasses (Latin America)'],
        ['la guagua', 'bus (Caribbean, Canaries)'], ['la plata', 'money (Latin America) / silver']
      ],
      grammar: {
        title: 'Spain and Latin America: key differences',
        html: `<table class="g"><tr><th>Feature</th><th>Spain (centre / north)</th><th>Most of Latin America</th></tr>
<tr><td>c / z before e, i</td><td>"th" sound (<i>distinción</i>)</td><td>"s" sound (<i>seseo</i>, also Andalusia, Canaries)</td></tr>
<tr><td>plural "you"</td><td>vosotros (informal) / ustedes (formal)</td><td>ustedes for all</td></tr>
<tr><td>recent past</td><td>Hoy <b>he comido</b> paella.</td><td>Hoy <b>comí</b> paella.</td></tr>
<tr><td>vocabulary</td><td>coche, ordenador, móvil, zumo, conducir, patata, piso, gafas</td><td>carro/auto, computadora, celular, jugo, manejar, papa, departamento, lentes/anteojos</td></tr></table>
<p><b>Voseo</b> (Argentina, Uruguay, Paraguay, much of Central America): <b>vos</b> replaces <i>tú</i> with its own forms.</p>
<table class="g"><tr><th>Verb</th><th>tú</th><th>vos (present)</th><th>vos (command)</th></tr>
<tr><td>hablar</td><td>hablas</td><td>hablás</td><td>hablá</td></tr>
<tr><td>comer</td><td>comes</td><td>comés</td><td>comé</td></tr>
<tr><td>vivir</td><td>vives</td><td>vivís</td><td>viví</td></tr>
<tr><td>ser / tener / venir</td><td>eres / tienes / vienes</td><td>sos / tenés / venís</td><td>sé / tené / vení</td></tr></table>
<p class="tip">💡 Careful with <i>coger</i>: neutral in Spain ("take"), vulgar in parts of Latin America — use <i>tomar / agarrar</i> there.</p>`
      },
      fill: [
        ['En Argentina se dice "vos ___" en vez de "tú eres".', 'sos', ['sos', 'sois', 'eres'], 'In Argentina they say "vos sos" instead of "tú eres".'],
        ['Vos ___ razón. (tener, voseo)', 'tenés', ['tenés', 'tienes', 'tenéis'], 'You are right. (voseo)'],
        ['___ acá, por favor. (venir, voseo command)', 'Vení', ['Vení', 'Ven', 'Venid'], 'Come here, please. (voseo)'],
        ['En México se dice "___" para el coche.', 'carro', ['carro', 'guagua', 'patata'], 'In Mexico they say "carro" for car.'],
        ['En América, en lugar de "vosotros" se usa "___".', 'ustedes', ['ustedes', 'vos', 'usted'], 'In Latin America "ustedes" is used instead of "vosotros".'],
        ['En España se dice "zumo"; en América, "___".', 'jugo', ['jugo', 'sumo', 'batido'], 'In Spain they say "zumo"; in Latin America, "jugo".']
      ],
      sents: [
        ['¿Vos sabés dónde está la estación?', 'Do you know where the station is? (voseo)'],
        ['Voy a manejar el carro hasta la oficina.', 'I\'m going to drive the car to the office. (Latin America)'],
        ['Se me olvidó el celular en el departamento.', 'I left my mobile in the flat. (Latin America)'],
        ['Un jugo de naranja y unas papas fritas, por favor.', 'An orange juice and some chips, please. (Latin America)'],
        ['No tengo plata para el cine.', 'I don\'t have money for the cinema. (Latin America)'],
        ['Ustedes son muy amables.', 'You (all) are very kind.']
      ]
    },
    {
      id: 'c1-10', icon: '⚠️', title: 'False Friends & Collocations', es: 'Falsos amigos',
      words: [
        ['embarazada', 'pregnant (not "embarrassed")'], ['constipado', 'having a cold (not "constipated")'], ['la carpeta', 'folder (not "carpet")'],
        ['la librería', 'bookshop (not "library")'], ['actual', 'current (not "actual")'], ['realizar', 'to carry out (not "to realise")'],
        ['asistir', 'to attend (not "to assist")'], ['la discusión', 'argument / discussion'], ['la decepción', 'disappointment (not "deception")'],
        ['el compromiso', 'commitment / engagement'], ['el pariente', 'relative (not "parent")'], ['la salida', 'exit (éxito = success)']
      ],
      grammar: {
        title: 'Collocations: verb + noun combinations',
        html: `<table class="g"><tr><th>Verb</th><th>Collocations</th></tr>
<tr><td><b>tomar</b></td><td>una decisión, el sol, nota (take notes), algo en serio</td></tr>
<tr><td><b>hacer</b></td><td>caso (pay attention / obey), falta (be necessary), cola (queue), una pregunta</td></tr>
<tr><td><b>dar</b></td><td>un paseo, las gracias, la razón (agree), pena, a luz (give birth)</td></tr>
<tr><td><b>echar</b></td><td>de menos (miss), una mano (help), la culpa (blame), un vistazo (glance)</td></tr>
<tr><td><b>prestar</b></td><td>atención, ayuda</td></tr>
<tr><td><b>sacar</b></td><td>una foto, buena nota, el tema (bring up), entradas (buy tickets)</td></tr>
<tr><td><b>llevar</b></td><td>a cabo (carry out), razón (be right), la contraria (contradict)</td></tr></table>
<p>More false friends: <i>éxito</i> = success, <i>sensible</i> = sensitive, <i>molestar</i> = to bother, <i>recordar</i> = to remember / remind, <i>soportar</i> = to put up with, <i>introducir</i> = to insert, <i>contestar</i> = to answer.</p>`
      },
      fill: [
        ['Tengo que ___ una decisión importante.', 'tomar', ['tomar', 'hacer', 'dar'], 'I have to make an important decision.'],
        ['No me hace ___; nunca me escucha.', 'caso', ['caso', 'atención', 'falta'], 'He ignores me; he never listens to me.'],
        ['Vamos a ___ un paseo por el parque.', 'dar', ['dar', 'hacer', 'tomar'], 'Let\'s go for a walk in the park.'],
        ['¿Puedes ___ un vistazo a mi informe?', 'echar', ['echar', 'hacer', 'poner'], 'Can you take a look at my report?'],
        ['Hay que ___ atención en clase.', 'prestar', ['prestar', 'hacer', 'dar'], 'You have to pay attention in class.'],
        ['Mi hermana está ___; el bebé nacerá en mayo.', 'embarazada', ['embarazada', 'avergonzada', 'constipada'], 'My sister is pregnant; the baby is due in May.']
      ],
      sents: [
        ['Estoy constipado, así que me quedo en casa.', 'I have a cold, so I\'m staying at home.'],
        ['La librería de mi barrio vende libros usados.', 'The bookshop in my neighbourhood sells second-hand books.'],
        ['Realizaron un estudio sobre la situación actual.', 'They carried out a study on the current situation.'],
        ['Asistí a una conferencia muy interesante.', 'I attended a very interesting conference.'],
        ['Echo de menos a mis parientes de México.', 'I miss my relatives in Mexico.'],
        ['Tuvimos una discusión, pero ya hemos hecho las paces.', 'We had an argument, but we have made up now.']
      ]
    },
    {
      id: 'c1-11', icon: '🏰', title: 'History', es: 'La historia',
      words: [
        ['el imperio', 'empire'], ['la conquista', 'conquest'], ['la colonia', 'colony'], ['la independencia', 'independence'],
        ['la guerra civil', 'civil war'], ['la dictadura', 'dictatorship'], ['la transición', 'transition'], ['la democracia', 'democracy'],
        ['el rey', 'king'], ['la reina', 'queen'], ['el siglo', 'century'], ['la constitución', 'constitution']
      ],
      grammar: {
        title: 'Concessive and consecutive clauses',
        html: `<table class="g"><tr><th>Concessive</th><th>Mood</th><th>Example</th></tr>
<tr><td>aunque / a pesar de que / pese a que</td><td>ind. (fact) / subj. (hypothesis or shared knowledge)</td><td>Aunque hubo una guerra, la ciudad creció.</td></tr>
<tr><td>por mucho / más que</td><td>subjunctive</td><td>Por mucho que estudies la historia…</td></tr>
<tr><td>por muy + adj. + que</td><td>subjunctive</td><td>Por muy difícil que sea, lo conseguiremos.</td></tr>
<tr><td>aun cuando</td><td>subjunctive</td><td>Aun cuando llueva, saldremos.</td></tr>
<tr><td>si bien</td><td>indicative</td><td>Si bien es de 1978, sigue vigente.</td></tr></table>
<table class="g"><tr><th>Consecutive</th><th>Example</th></tr>
<tr><td>tan + adj. + que / tanto/a + noun + que</td><td>Era tan poderoso que nadie se le oponía.</td></tr>
<tr><td>de modo / manera que + <b>ind.</b> (result)</td><td>No vino, de modo que empezamos sin él.</td></tr>
<tr><td>de modo / manera que + <b>subj.</b> (purpose)</td><td>Habla despacio, de modo que todos te entiendan.</td></tr>
<tr><td>de ahí que + subj.</td><td>Duró cuarenta años, de ahí que la transición fuera compleja.</td></tr></table>`
      },
      fill: [
        ['Por muy difícil que ___, lo conseguiremos. (ser)', 'sea', ['sea', 'es', 'será'], 'However hard it may be, we will succeed.'],
        ['A pesar de que ___ una guerra, la ciudad creció. (haber, past fact)', 'hubo', ['hubo', 'haya', 'habrá'], 'Even though there was a war, the city grew.'],
        ['Era tan poderoso ___ nadie se le oponía.', 'que', ['que', 'como', 'de'], 'He was so powerful that nobody opposed him.'],
        ['Habla despacio, de modo que todos te ___. (entender)', 'entiendan', ['entiendan', 'entienden', 'entendieron'], 'Speak slowly, so that everyone understands you.'],
        ['La dictadura duró cuarenta años, de ___ que la transición fuera tan compleja.', 'ahí', ['ahí', 'modo', 'así'], 'The dictatorship lasted forty years, hence the transition was so complex.'],
        ['___ bien la constitución es de 1978, sigue vigente.', 'Si', ['Si', 'Aunque', 'Aun'], 'Although the constitution dates from 1978, it is still in force.']
      ],
      sents: [
        ['El Imperio español fue uno de los más extensos de la historia.', 'The Spanish Empire was one of the largest in history.'],
        ['Muchas colonias lograron la independencia en el siglo diecinueve.', 'Many colonies achieved independence in the nineteenth century.'],
        ['La guerra civil española terminó en 1939.', 'The Spanish Civil War ended in 1939.'],
        ['Tras la dictadura llegó la democracia.', 'After the dictatorship came democracy.'],
        ['La Constitución de 1978 se votó en referéndum.', 'The 1978 Constitution was voted on in a referendum.'],
        ['Por mucho que se estudie la historia, siempre quedan preguntas.', 'However much history is studied, questions always remain.']
      ]
    },
    {
      id: 'c1-12', icon: '🥘', title: 'Food Culture', es: 'La gastronomía',
      words: [
        ['la gastronomía', 'gastronomy / cuisine'], ['el plato típico', 'typical dish'], ['las tapas', 'tapas'], ['el aperitivo', 'appetiser / pre-lunch drink'],
        ['la sobremesa', 'after-meal conversation at the table'], ['el sabor', 'flavour / taste'], ['picante', 'spicy'], ['sabroso', 'tasty'],
        ['probar bocado', 'to have a bite'], ['comerse', 'to eat up'], ['beberse', 'to drink up'], ['zamparse', 'to wolf down']
      ],
      grammar: {
        title: 'Aspectual SE',
        html: `<p>With some verbs, <b>se</b> does not mean "oneself": it stresses that an action is <b>complete</b> or done with intensity or personal involvement.</p>
<table class="g"><tr><th>Neutral</th><th>With se</th></tr>
<tr><td>Comí paella.</td><td>Me comí <b>toda la</b> paella. (ate it all up)</td></tr>
<tr><td>Leí el libro.</td><td>Me leí el libro en dos días. (read the whole thing)</td></tr>
<tr><td>Sé la lección.</td><td>Me sé la lección <b>de memoria</b>. (know it inside out)</td></tr>
<tr><td>Toma un café.</td><td>Tómate un café. (warmer, more personal)</td></tr>
<tr><td>Murió en 1990.</td><td>Se murió su abuelo. (more emotive, natural death)</td></tr></table>
<p class="tip">💡 Aspectual <i>se</i> needs a <b>specific, bounded</b> object: <i>Me comí <b>una</b> pizza</i> ✓ but <i>Me comí pizza</i> ✗.</p>`
      },
      fill: [
        ['Mi hijo se ___ toda la tarta. (comer, past)', 'comió', ['comió', 'comía', 'come'], 'My son ate up the whole cake.'],
        ['¿Ya te ___ la lección de memoria? (saber)', 'sabes', ['sabes', 'sepas', 'sabías'], 'Do you know the lesson by heart yet?'],
        ['Me ___ el libro en un fin de semana. (leer, past)', 'leí', ['leí', 'leía', 'leo'], 'I read the whole book in a weekend.'],
        ['Siéntate y ___ un café. (tomar, tú command + te)', 'tómate', ['tómate', 'tomate', 'tómete'], 'Sit down and have a coffee.'],
        ['Se ___ las tapas en cinco minutos. (zampar, ellos, past)', 'zamparon', ['zamparon', 'zampan', 'zampaban'], 'They wolfed down the tapas in five minutes.'],
        ['En España es típica la ___ después de comer.', 'sobremesa', ['sobremesa', 'sobrecomida', 'postmesa'], 'In Spain lingering at the table after lunch is typical.']
      ],
      sents: [
        ['Nos comimos una paella buenísima en Valencia.', 'We ate a delicious paella in Valencia.'],
        ['La sobremesa puede durar horas.', 'The after-meal chat can go on for hours.'],
        ['¿Quedamos para tomar el aperitivo?', 'Shall we meet for a pre-lunch drink?'],
        ['Este plato típico tiene un sabor muy intenso.', 'This typical dish has a very intense flavour.'],
        ['No pude probar bocado de lo nervioso que estaba.', 'I couldn\'t eat a thing, I was so nervous.'],
        ['Se bebió el vaso de agua de un trago.', 'He drank the glass of water in one gulp.']
      ]
    },
    {
      id: 'c1-13', icon: '🧪', title: 'Science & Research', es: 'La investigación',
      words: [
        ['el estudio', 'study'], ['la muestra', 'sample'], ['el experimento', 'experiment'], ['los datos', 'data'],
        ['la teoría', 'theory'], ['el científico', 'scientist'], ['la evidencia', 'evidence'], ['el porcentaje', 'percentage'],
        ['la conclusión', 'conclusion'], ['el hallazgo', 'finding'], ['la revista científica', 'scientific journal'], ['el método', 'method']
      ],
      grammar: {
        title: 'Using articles correctly',
        html: `<table class="g"><tr><th>Rule</th><th>Example</th></tr>
<tr><td>Generic statements use the <b>definite</b> article</td><td><b>Los</b> científicos dicen que <b>el</b> agua es esencial.</td></tr>
<tr><td>Abstract nouns take the article</td><td><b>La</b> ciencia avanza. Me interesa <b>la</b> historia.</td></tr>
<tr><td>No article for profession after <i>ser</i>…</td><td>Es científica.</td></tr>
<tr><td>…unless the noun is qualified</td><td>Es <b>una</b> científica muy reconocida.</td></tr>
<tr><td>No article with general countable objects after <i>tener, buscar, llevar</i></td><td>¿Tienes coche? Busco piso.</td></tr>
<tr><td>Percentages</td><td><b>El</b> 40 % (or <b>un</b> 40 %) de los participantes…</td></tr>
<tr><td>Body parts & clothes (not possessives)</td><td>Lávate <b>las</b> manos. Me puse <b>el</b> abrigo.</td></tr>
<tr><td><b>el</b> before feminine nouns with stressed a- / ha-</td><td><b>el</b> agua, <b>el</b> aula, <b>el</b> hambre — but <b>las</b> aguas, <b>la</b> amplia aula</td></tr></table>`
      },
      fill: [
        ['___ agua del experimento estaba contaminada.', 'El', ['El', 'La', 'Lo'], 'The water in the experiment was contaminated.'],
        ['___ 40 % de los participantes eran mujeres.', 'El', ['El', 'Lo', 'La'], '40% of the participants were women.'],
        ['___ ciencia necesita financiación.', 'La', ['La', 'Una', 'Lo'], 'Science needs funding.'],
        ['___ datos confirman la teoría.', 'Los', ['Los', 'Las', 'Lo'], 'The data confirm the theory.'],
        ['Es ___ científica muy reconocida.', 'una', ['una', 'la', 'lo'], 'She is a highly recognised scientist.'],
        ['Hay que lavarse ___ manos antes del experimento.', 'las', ['las', 'les', 'unas'], 'You have to wash your hands before the experiment.']
      ],
      sents: [
        ['Los científicos analizaron una muestra de mil personas.', 'The scientists analysed a sample of a thousand people.'],
        ['El estudio se publicó en una revista científica.', 'The study was published in a scientific journal.'],
        ['El sesenta por ciento de los encuestados está de acuerdo.', 'Sixty per cent of those surveyed agree.'],
        ['Los datos no confirman la hipótesis inicial.', 'The data do not confirm the initial hypothesis.'],
        ['El hallazgo podría cambiar la teoría actual.', 'The finding could change current theory.'],
        ['El método científico se basa en la evidencia.', 'The scientific method is based on evidence.']
      ]
    },
    {
      id: 'c1-14', icon: '⚖️', title: 'Law & Justice', es: 'La justicia',
      words: [
        ['la justicia', 'justice / the courts'], ['el juicio', 'trial / judgement'], ['el juez', 'judge'], ['el fiscal', 'prosecutor'],
        ['el acusado', 'defendant / accused'], ['la sentencia', 'ruling / sentence'], ['condenar', 'to convict / sentence'], ['absolver', 'to acquit'],
        ['el delito', 'crime / offence'], ['la prueba', 'proof / evidence / test'], ['declarar', 'to testify / declare'], ['la cárcel', 'prison']
      ],
      grammar: {
        title: 'Verbs whose meaning changes with the mood',
        html: `<table class="g"><tr><th>Verb</th><th>+ indicative</th><th>+ subjunctive</th></tr>
<tr><td><b>decir que</b></td><td>to report: <i>Dice que <b>viene</b>.</i> (says he's coming)</td><td>to order: <i>Dice que <b>vengas</b>.</i> (tells you to come)</td></tr>
<tr><td><b>insistir en que</b></td><td>to maintain: <i>Insiste en que lo <b>vio</b>.</i></td><td>to urge: <i>Insiste en que lo <b>veamos</b>.</i></td></tr>
<tr><td><b>sentir que</b></td><td>to feel / sense: <i>Siento que algo <b>va</b> mal.</i></td><td>to regret: <i>Siento que no <b>puedas</b> venir.</i></td></tr>
<tr><td><b>comprender / entender que</b></td><td>to grasp a fact: <i>Entiendo que <b>es</b> tarde.</i></td><td>to accept / sympathise: <i>Entiendo que <b>estés</b> enfadado.</i></td></tr>
<tr><td><b>suponer que</b></td><td>to assume: <i>Supongo que <b>tienes</b> razón.</i></td><td>to entail: <i>Esto supone que <b>tengamos</b> que pagar.</i></td></tr></table>
<p class="tip">💡 <b>Me temo que</b> + indicative = "I'm afraid that" (polite bad news): <i>Me temo que no <b>hay</b> pruebas.</i></p>`
      },
      fill: [
        ['El juez dice que el acusado ___ inocente. (ser — statement)', 'es', ['es', 'sea', 'fuera'], 'The judge says that the defendant is innocent.'],
        ['El juez dice que el acusado ___ en pie. (ponerse — order)', 'se ponga', ['se ponga', 'se pone', 'se puso'], 'The judge tells the defendant to stand up.'],
        ['Siento que no ___ venir al juicio. (poder, tú)', 'puedas', ['puedas', 'puedes', 'podrás'], 'I\'m sorry you can\'t come to the trial.'],
        ['El testigo insiste en que ___ al acusado. (ver, él — past fact)', 'vio', ['vio', 'viera', 'vea'], 'The witness insists that he saw the defendant.'],
        ['Entiendo que ___ enfadado con la sentencia. (estar, tú)', 'estés', ['estés', 'estarás', 'estuviste'], 'I understand that you are angry about the ruling.'],
        ['Me temo que no ___ pruebas suficientes. (haber)', 'hay', ['hay', 'haya', 'hubiera'], 'I\'m afraid there isn\'t enough evidence.']
      ],
      sents: [
        ['El juicio empezará la semana que viene.', 'The trial will begin next week.'],
        ['El fiscal pidió diez años de cárcel.', 'The prosecutor asked for ten years in prison.'],
        ['El jurado lo declaró inocente y lo absolvieron.', 'The jury found him innocent and he was acquitted.'],
        ['No hay pruebas suficientes para condenarlo.', 'There isn\'t enough evidence to convict him.'],
        ['El testigo declaró ante el juez.', 'The witness testified before the judge.'],
        ['La sentencia se conocerá mañana.', 'The ruling will be announced tomorrow.']
      ]
    }
  ]
});
