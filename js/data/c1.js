window.COURSE = window.COURSE || [];
COURSE.push({
  id: 'c1', name: 'C1', title: 'Advanced', color: '#ff4b4b',
  desc: 'Subtle subjunctive, idioms, formal register, discourse and argument.',
  units: [
    {
      id: 'c1-1', icon: '🔍', title: 'Subjunctive Nuances', es: 'Matices del subjuntivo',
      words: [
        ['el matiz', 'nuance'], ['sutil', 'subtle'], ['imprescindible', 'essential'], ['el requisito', 'requirement'],
        ['plantear', 'to raise / pose'], ['abordar', 'to tackle / address'], ['el enfoque', 'approach / focus'],
        ['la hipótesis', 'hypothesis'], ['cuestionar', 'to question'], ['desempeñar', 'to perform (a role)'],
        ['contundente', 'forceful / conclusive'], ['el planteamiento', 'approach / proposal']
      ],
      grammar: {
        title: 'Fine points of the subjunctive',
        html: `<p><b>Unknown antecedent</b>: when we don't know whether something exists → subjunctive. <i>Busco un piso que <b>tenga</b> terraza.</i> ↔ <i>Vivo en un piso que <b>tiene</b> terraza.</i></p>
<p>Negative antecedent: <i>No hay nadie que lo <b>sepa</b>.</i></p>
<p><b>Por mucho que / por más que</b> + subj. = however much: <i>Por mucho que insistas, no iré.</i></p>
<p><b>El hecho de que</b> + subj. (usually): <i>El hecho de que no llame no significa nada.</i></p>
<p>Reduplicated fixed expressions: <b>pase lo que pase</b> (whatever happens), <b>sea como sea</b> (be that as it may), <b>digan lo que digan</b> (whatever they say), <b>quieras o no</b> (like it or not).</p>`
      },
      fill: [
        ['Busco un piso que ___ terraza. (tener)', 'tenga', ['tenga', 'tiene', 'tendrá'], 'I\'m looking for a flat that has a terrace.'],
        ['Conozco a alguien que ___ ruso. (hablar)', 'habla', ['habla', 'hable', 'hablara'], 'I know someone who speaks Russian.'],
        ['Por mucho que ___, no lo conseguirás. (insistir, tú)', 'insistas', ['insistas', 'insistes', 'insistirás'], 'However much you insist, you won\'t get it.'],
        ['Pase lo que ___, estaré contigo.', 'pase', ['pase', 'pasa', 'pasará'], 'Whatever happens, I\'ll be with you.'],
        ['El hecho de que no ___ no significa nada. (llamar, él)', 'llame', ['llame', 'llamará', 'llamaría'], 'The fact that he doesn\'t call doesn\'t mean anything.'],
        ['No hay nadie que ___ la respuesta. (saber)', 'sepa', ['sepa', 'sabe', 'sabrá'], 'There is nobody who knows the answer.']
      ],
      sents: [
        ['Busco un piso que tenga mucha luz.', 'I\'m looking for a flat that gets a lot of light.'],
        ['Pase lo que pase, estaré a tu lado.', 'Whatever happens, I will be by your side.'],
        ['Por mucho que insistas, no cambiaré de opinión.', 'However much you insist, I won\'t change my mind.'],
        ['No hay nadie que pueda abordar este problema solo.', 'There is nobody who can tackle this problem alone.'],
        ['Es imprescindible que cuestionemos nuestras hipótesis.', 'It is essential that we question our hypotheses.']
      ]
    },
    {
      id: 'c1-2', icon: '🦜', title: 'Idioms', es: 'Expresiones idiomáticas',
      words: [
        ['estar en las nubes', 'to have one\'s head in the clouds'], ['tomar el pelo', 'to pull someone\'s leg'],
        ['costar un ojo de la cara', 'to cost an arm and a leg'], ['meter la pata', 'to put one\'s foot in it'],
        ['ser pan comido', 'to be a piece of cake'], ['no tener pelos en la lengua', 'to not mince one\'s words'],
        ['estar hasta las narices', 'to be fed up'], ['echar una mano', 'to lend a hand'],
        ['dar en el clavo', 'to hit the nail on the head'], ['ponerse las pilas', 'to get one\'s act together'],
        ['tirar la toalla', 'to throw in the towel'], ['quedarse de piedra', 'to be stunned']
      ],
      grammar: {
        title: 'Idioms and proverbs',
        html: `<p>Idioms can't be translated word for word — learn them as whole units. The verb is conjugated normally: <i>Siempre <b>meto</b> la pata. — <b>Metió</b> la pata.</i></p>
<table class="g"><tr><th>Refrán (proverb)</th><th>English equivalent</th></tr>
<tr><td>Más vale tarde que nunca.</td><td>Better late than never.</td></tr>
<tr><td>En boca cerrada no entran moscas.</td><td>Silence is golden.</td></tr>
<tr><td>Dime con quién andas y te diré quién eres.</td><td>A man is known by the company he keeps.</td></tr>
<tr><td>A quien madruga, Dios le ayuda.</td><td>The early bird catches the worm.</td></tr>
<tr><td>No hay mal que por bien no venga.</td><td>Every cloud has a silver lining.</td></tr>
<tr><td>Ojos que no ven, corazón que no siente.</td><td>What the eye doesn't see, the heart doesn't grieve over.</td></tr></table>`
      },
      fill: [
        ['Ese examen fue pan ___.', 'comido', ['comido', 'duro', 'caliente'], 'That exam was a piece of cake.'],
        ['Este coche me costó un ojo de la ___.', 'cara', ['cara', 'mano', 'cabeza'], 'This car cost me an arm and a leg.'],
        ['No me tomes el ___.', 'pelo', ['pelo', 'brazo', 'pie'], 'Don\'t pull my leg.'],
        ['Has dado en el ___.', 'clavo', ['clavo', 'blanco', 'punto'], 'You\'ve hit the nail on the head.'],
        ['No tires la ___; casi lo tienes.', 'toalla', ['toalla', 'piedra', 'pata'], 'Don\'t throw in the towel; you almost have it.'],
        ['Me quedé de ___ al oír la noticia.', 'piedra', ['piedra', 'hielo', 'madera'], 'I was stunned when I heard the news.']
      ],
      sents: [
        ['Este examen es pan comido.', 'This exam is a piece of cake.'],
        ['Siempre está en las nubes.', 'He always has his head in the clouds.'],
        ['Creo que metí la pata en la reunión.', 'I think I put my foot in it at the meeting.'],
        ['¿Me echas una mano con la mudanza?', 'Can you give me a hand with the move?'],
        ['Estoy hasta las narices de este ruido.', 'I\'m fed up with this noise.']
      ]
    },
    {
      id: 'c1-3', icon: '🎓', title: 'Formal Register', es: 'Registro formal',
      words: [
        ['no obstante', 'nevertheless'], ['cabe destacar', 'it should be noted'], ['en lo que respecta a', 'with regard to'],
        ['a raíz de', 'as a result of'], ['en aras de', 'for the sake of'], ['conllevar', 'to entail'],
        ['subrayar', 'to underline / stress'], ['ostentar', 'to hold (a post) / flaunt'], ['paliar', 'to alleviate'],
        ['fomentar', 'to promote / encourage'], ['la índole', 'nature / kind'], ['el ámbito', 'field / sphere']
      ],
      grammar: {
        title: 'Formal and academic Spanish',
        html: `<p>Academic texts prefer impersonal structures: <b>Cabe destacar que</b>…, <b>Conviene</b> + infinitive, <b>Es preciso</b> + infinitive, <b>Se considera que</b>…</p>
<p><b>Nominalisation</b> (using nouns instead of verbs) makes the style more formal: <i>Cuando aumentaron los precios…</i> → <i><b>El aumento</b> de los precios…</i></p>
<table class="g"><tr><th>Everyday</th><th>Formal</th></tr>
<tr><td>pero</td><td>no obstante, sin embargo</td></tr>
<tr><td>por eso</td><td>por consiguiente</td></tr>
<tr><td>sobre</td><td>en lo que respecta a, en cuanto a</td></tr>
<tr><td>por culpa de</td><td>a raíz de, a causa de</td></tr>
<tr><td>para</td><td>en aras de, con el fin de</td></tr>
<tr><td>tener (un cargo)</td><td>ostentar, poseer</td></tr></table>
<p class="tip">💡 Formal letters use <b>usted</b> and close with <i>Atentamente</i> (Yours faithfully).</p>`
      },
      fill: [
        ['Cabe ___ que los datos son provisionales.', 'destacar', ['destacar', 'destacando', 'destacado'], 'It should be noted that the data are provisional.'],
        ['___ aras de la transparencia, publicamos el informe.', 'En', ['En', 'A', 'Por'], 'For the sake of transparency, we are publishing the report.'],
        ['La medida ___ ciertos riesgos.', 'conlleva', ['conlleva', 'conlleve', 'conllevar'], 'The measure entails certain risks.'],
        ['Es preciso ___ el impacto de la crisis.', 'paliar', ['paliar', 'palie', 'paliado'], 'It is necessary to alleviate the impact of the crisis.'],
        ['___ raíz de la pandemia, cambió el mercado laboral.', 'A', ['A', 'En', 'De'], 'As a result of the pandemic, the labour market changed.'],
        ['En lo que ___ a la educación, hay avances.', 'respecta', ['respecta', 'respeta', 'refiere'], 'With regard to education, there is progress.']
      ],
      sents: [
        ['Cabe destacar que los datos son provisionales.', 'It should be noted that the data are provisional.'],
        ['La medida conlleva ciertos riesgos.', 'The measure entails certain risks.'],
        ['Es preciso fomentar la investigación científica.', 'It is necessary to promote scientific research.'],
        ['A raíz de la crisis, se adoptaron nuevas políticas.', 'As a result of the crisis, new policies were adopted.'],
        ['En lo que respecta a la educación, hay avances notables.', 'With regard to education, there is notable progress.']
      ]
    },
    {
      id: 'c1-4', icon: '🦋', title: 'Verbs of Change', es: 'Verbos de cambio',
      words: [
        ['ponerse nervioso', 'to get nervous'], ['volverse loco', 'to go crazy'], ['hacerse rico', 'to become rich'],
        ['quedarse sordo', 'to go deaf'], ['convertirse en', 'to turn into'], ['llegar a ser', 'to come to be / become'],
        ['la transformación', 'transformation'], ['el cambio', 'change'], ['madurar', 'to mature'],
        ['envejecer', 'to grow old'], ['empeorar', 'to get worse'], ['mejorar', 'to improve']
      ],
      grammar: {
        title: 'Verbs meaning "to become"',
        html: `<table class="g"><tr><th>Verb</th><th>Use</th><th>Example</th></tr>
<tr><td><b>ponerse</b></td><td>sudden, temporary change (mood, colour, health)</td><td>Se puso nervioso.</td></tr>
<tr><td><b>volverse</b></td><td>deep, usually involuntary change of character</td><td>Se volvió desconfiado.</td></tr>
<tr><td><b>hacerse</b></td><td>change through effort / choice (profession, religion, wealth)</td><td>Se hizo abogado.</td></tr>
<tr><td><b>quedarse</b></td><td>result of an event (often a loss)</td><td>Se quedó ciego.</td></tr>
<tr><td><b>convertirse en</b></td><td>+ noun, complete transformation</td><td>Se convirtió en un mito.</td></tr>
<tr><td><b>llegar a ser</b></td><td>position reached after a long process</td><td>Llegó a ser presidenta.</td></tr></table>`
      },
      fill: [
        ['Cuando la vi, me ___ rojo.', 'puse', ['puse', 'volví', 'hice'], 'When I saw her, I went red.'],
        ['Con los años, se ha ___ muy desconfiado.', 'vuelto', ['vuelto', 'puesto', 'quedado'], 'Over the years he has become very distrustful.'],
        ['Mi tío se ___ rico con su empresa.', 'hizo', ['hizo', 'puso', 'quedó'], 'My uncle became rich with his company.'],
        ['Tras el accidente, se ___ ciego.', 'quedó', ['quedó', 'hizo', 'puso'], 'After the accident, he went blind.'],
        ['La oruga se ___ en mariposa.', 'convirtió', ['convirtió', 'volvió', 'hizo'], 'The caterpillar turned into a butterfly.'],
        ['Después de mucho esfuerzo, llegó a ___ directora.', 'ser', ['ser', 'hacer', 'estar'], 'After much effort, she became director.']
      ],
      sents: [
        ['Se puso muy nervioso antes del examen.', 'He got very nervous before the exam.'],
        ['Con la fama se volvió arrogante.', 'With fame she became arrogant.'],
        ['Mi prima se hizo médica.', 'My cousin became a doctor.'],
        ['Nos quedamos sin palabras.', 'We were left speechless.'],
        ['El pueblo se convirtió en una gran ciudad.', 'The village turned into a big city.']
      ]
    },
    {
      id: 'c1-5', icon: '💬', title: 'Spoken Spanish', es: 'Marcadores del discurso',
      words: [
        ['o sea', 'I mean / that is'], ['por cierto', 'by the way'], ['en fin', 'anyway / in short'],
        ['vamos', 'come on / I mean'], ['es que', 'the thing is'], ['pues', 'well / so'], ['a ver', 'let\'s see'],
        ['¿sabes?', 'you know?'], ['menos mal', 'thank goodness'], ['venga', 'come on / OK'],
        ['ni hablar', 'no way'], ['vale', 'OK']
      ],
      grammar: {
        title: 'Discourse markers in conversation',
        html: `<table class="g"><tr><th>Marker</th><th>Function</th></tr>
<tr><td><b>o sea</b></td><td>rephrasing: "I mean"</td></tr>
<tr><td><b>es que</b></td><td>giving an excuse / explanation</td></tr>
<tr><td><b>por cierto</b></td><td>changing topic: "by the way"</td></tr>
<tr><td><b>en fin</b></td><td>wrapping up: "anyway"</td></tr>
<tr><td><b>a ver</b></td><td>getting attention: "let's see"</td></tr>
<tr><td><b>menos mal (que)</b></td><td>relief: "thank goodness"</td></tr>
<tr><td><b>vale / venga</b></td><td>agreement: "OK"</td></tr>
<tr><td><b>ni hablar</b></td><td>strong refusal: "no way"</td></tr>
<tr><td><b>vamos</b></td><td>emphasis: "I mean, come on"</td></tr>
<tr><td><b>pues</b></td><td>starting an answer: "well"</td></tr></table>
<p class="tip">💡 These words add <b>attitude</b> rather than meaning — they are the key to sounding natural.</p>`
      },
      fill: [
        ['No puedo ir, ___ tengo mucho trabajo.', 'es que', ['es que', 'o sea', 'en fin'], 'I can\'t go, the thing is I have a lot of work.'],
        ['___ que llegaste, estaba preocupado.', 'Menos mal', ['Menos mal', 'Por cierto', 'A ver'], 'Thank goodness you arrived, I was worried.'],
        ['___, ¿has visto a Juan?', 'Por cierto', ['Por cierto', 'Menos mal', 'Ni hablar'], 'By the way, have you seen Juan?'],
        ['Es caro, ___, no vale la pena.', 'o sea', ['o sea', 'es que', 'menos mal'], 'It\'s expensive, I mean, it\'s not worth it.'],
        ['¿Prestarte dinero? ¡Ni ___!', 'hablar', ['hablar', 'sea', 'ver'], 'Lend you money? No way!'],
        ['___, ¿qué tenemos aquí?', 'A ver', ['A ver', 'Ni hablar', 'Menos mal'], 'Let\'s see, what do we have here?']
      ],
      sents: [
        ['Es que no tengo tiempo, de verdad.', 'The thing is I really don\'t have time.'],
        ['Por cierto, ¿has visto a Juan?', 'By the way, have you seen Juan?'],
        ['Menos mal que llegaste a tiempo.', 'Thank goodness you arrived on time.'],
        ['Es muy caro, o sea, no vale la pena.', 'It\'s very expensive, I mean, it\'s not worth it.'],
        ['En fin, ya hablaremos mañana.', 'Anyway, we\'ll talk tomorrow.']
      ]
    },
    {
      id: 'c1-6', icon: '🖼️', title: 'Art & Literature', es: 'Arte y literatura',
      words: [
        ['la obra', 'work (of art)'], ['el lienzo', 'canvas'], ['el escultor', 'sculptor'], ['la novela', 'novel'],
        ['el poema', 'poem'], ['el personaje', 'character'], ['la trama', 'plot'], ['el estreno', 'premiere'],
        ['la crítica', 'criticism / critics'], ['el autor', 'author'], ['inspirar', 'to inspire'], ['la exposición', 'exhibition']
      ],
      grammar: {
        title: 'Absolute constructions and the gerund',
        html: `<p><b>Absolute participle</b>: participle + noun = "once … had been done". It agrees with the noun. <i><b>Terminada</b> la cena, salimos.</i> — Dinner over, we went out.</p>
<p><b>Al + infinitive</b> = "on / when doing": <i><b>Al llegar</b>, compramos las entradas.</i> — On arriving, we bought the tickets.</p>
<p><b>Gerund</b> of cause or manner: <i><b>Siendo</b> tan tarde, nos fuimos.</i> — It being so late, we left.</p>
<p><b>Habiendo</b> + participle = "having done": <i><b>Habiendo leído</b> la novela, entendí la película.</i></p>
<p class="tip">💡 Don't use the gerund for an action that happens <b>after</b> the main verb — a very common mistake.</p>`
      },
      fill: [
        ['___ la cena, salimos a pasear. (terminar)', 'Terminada', ['Terminada', 'Terminado', 'Terminando'], 'Dinner over, we went out for a walk.'],
        ['___ llegar al museo, compramos las entradas.', 'Al', ['Al', 'En', 'Para'], 'On arriving at the museum, we bought the tickets.'],
        ['___ tan tarde, decidimos volver. (ser)', 'Siendo', ['Siendo', 'Sido', 'Ser'], 'It being so late, we decided to go back.'],
        ['Una vez ___ la exposición, el público aplaudió. (inaugurar)', 'inaugurada', ['inaugurada', 'inaugurado', 'inaugurando'], 'Once the exhibition had opened, the public applauded.'],
        ['___ leído la novela, entendí la película.', 'Habiendo', ['Habiendo', 'Haber', 'Habido'], 'Having read the novel, I understood the film.'],
        ['___ los resultados, se tomó la decisión. (analizar)', 'Analizados', ['Analizados', 'Analizadas', 'Analizando'], 'Once the results had been analysed, the decision was taken.']
      ],
      sents: [
        ['Terminada la obra, el autor descansó.', 'The work finished, the author rested.'],
        ['Al entrar en la exposición, vimos el lienzo.', 'On entering the exhibition, we saw the canvas.'],
        ['La trama de la novela es muy compleja.', 'The plot of the novel is very complex.'],
        ['El poema inspiró a toda una generación.', 'The poem inspired a whole generation.'],
        ['La crítica recibió el estreno con entusiasmo.', 'The critics received the premiere with enthusiasm.']
      ]
    },
    {
      id: 'c1-7', icon: '⚔️', title: 'Debate & Argument', es: 'Argumentar',
      words: [
        ['a mi juicio', 'in my judgement'], ['desde mi punto de vista', 'from my point of view'], ['discrepar', 'to disagree'],
        ['coincidir', 'to agree / coincide'], ['rebatir', 'to refute'], ['el argumento', 'argument'], ['sostener', 'to maintain / hold'],
        ['la postura', 'stance / position'], ['matizar', 'to qualify / clarify'], ['convencer', 'to convince'],
        ['la premisa', 'premise'], ['ceder', 'to give way / yield']
      ],
      grammar: {
        title: 'Expressing and defending opinions',
        html: `<p><b>Creo / pienso / opino que</b> + indicative; the negative <b>no creo que</b> + subjunctive.</p>
<p><b>No es que</b> + subj., <b>sino que</b> + ind.: <i>No es que no quiera, sino que no puedo.</i> (It's not that I don't want to, it's that I can't.)</p>
<p><b>Si bien</b> = "although, while": <i>Si bien es cierto, hay que matizarlo.</i></p>
<table class="g"><tr><th>Function</th><th>Expressions</th></tr>
<tr><td>Agreeing</td><td>coincidir con, estar de acuerdo con, compartir la opinión</td></tr>
<tr><td>Disagreeing</td><td>discrepar de, no estar de acuerdo con, rebatir</td></tr>
<tr><td>Partially</td><td>hasta cierto punto, en parte, matizar</td></tr>
<tr><td>Opinion</td><td>a mi juicio, desde mi punto de vista, a mi entender</td></tr></table>
<p class="tip">💡 <b>Estoy de acuerdo en que</b> + indicative, but <b>no estoy de acuerdo con que</b> + subjunctive.</p>`
      },
      fill: [
        ['No es que no ___, es que no puedo. (querer, yo)', 'quiera', ['quiera', 'quiero', 'querría'], 'It\'s not that I don\'t want to, it\'s that I can\'t.'],
        ['___ bien es cierto, hay que matizarlo.', 'Si', ['Si', 'Aunque', 'Ya'], 'While it is true, it needs qualifying.'],
        ['Discrepo ___ tu opinión.', 'de', ['de', 'con', 'en'], 'I disagree with your opinion.'],
        ['Coincido ___ usted en este punto.', 'con', ['con', 'de', 'a'], 'I agree with you on this point.'],
        ['No estoy de acuerdo con que ___ los impuestos. (subir, ellos)', 'suban', ['suban', 'suben', 'subirán'], 'I don\'t agree with them raising taxes.'],
        ['A mi ___, la propuesta es insuficiente.', 'juicio', ['juicio', 'punto', 'vista'], 'In my judgement, the proposal is insufficient.']
      ],
      sents: [
        ['A mi juicio, la propuesta es insuficiente.', 'In my judgement, the proposal is insufficient.'],
        ['Discrepo de tu postura sobre este tema.', 'I disagree with your stance on this issue.'],
        ['No es que no quiera, sino que no puedo.', 'It\'s not that I don\'t want to, it\'s that I can\'t.'],
        ['Su argumento no me convence del todo.', 'His argument doesn\'t fully convince me.'],
        ['Coincido con usted en este punto.', 'I agree with you on this point.']
      ]
    }
  ]
});
