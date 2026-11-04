// Additional B1/B2 lessons and the final lesson order for each level.
window.COURSE_EXTRA = window.COURSE_EXTRA || [];
COURSE_EXTRA.push({
  level: 'b1',
  order: ['b1-1', 'b1-5', 'b1-9', 'b1-2', 'b1-3', 'b1-4', 'b1-13', 'b1-6', 'b1-10', 'b1-7', 'b1-14', 'b1-8', 'b1-11', 'b1-12', 'b1-16', 'b1-15'],
  units: [
    {
      id: 'b1-9', icon: '🕵️', title: 'Guesses & Mysteries', es: 'Misterios',
      words: [
        ['el misterio', 'mystery'], ['adivinar', 'to guess'], ['la pista', 'clue / track'], ['el detective', 'detective'],
        ['tal vez', 'maybe'], ['probablemente', 'probably'], ['sospechar', 'to suspect'], ['el sospechoso', 'suspect'],
        ['la huella', 'fingerprint / footprint'], ['el robo', 'robbery / theft'], ['el ladrón', 'thief'], ['resolver', 'to solve']
      ],
      grammar: {
        title: 'Future perfect and the future of probability',
        html: `<p><b>Futuro compuesto</b>: <b>habré, habrás, habrá, habremos, habréis, habrán</b> + participle — an action completed before a future moment: <i>A las ocho ya <b>habré terminado</b>.</i></p>
<p>Spanish also uses future forms to make <b>guesses</b>:</p>
<table class="g"><tr><th>Guess about…</th><th>Tense</th><th>Example</th><th>Meaning</th></tr>
<tr><td>the present</td><td>futuro simple</td><td>Estará en casa.</td><td>He's probably at home.</td></tr>
<tr><td>the recent past</td><td>futuro compuesto</td><td>Habrá perdido el tren.</td><td>He must have missed the train.</td></tr>
<tr><td>the past</td><td>condicional</td><td>Serían las diez.</td><td>It was probably about ten.</td></tr></table>
<p class="tip">💡 Questions with the future express wondering: <i>¿Quién <b>será</b>?</i> — I wonder who it is.</p>`
      },
      fill: [
        ['—¿Qué hora es? —No sé, ___ las tres. (ser)', 'serán', ['serán', 'son', 'eran'], '—What time is it? —I don\'t know, it must be about three.'],
        ['Juan no ha llegado. ___ el tren. (perder)', 'Habrá perdido', ['Habrá perdido', 'Perderá', 'Perdía'], 'Juan hasn\'t arrived. He must have missed the train.'],
        ['Para el lunes ya ___ el informe. (terminar, yo)', 'habré terminado', ['habré terminado', 'terminaré', 'había terminado'], 'By Monday I will have finished the report.'],
        ['—¿Dónde está María? —___ en la oficina. (estar)', 'Estará', ['Estará', 'Estaría', 'Estuvo'], '—Where is María? —She\'s probably at the office.'],
        ['Cuando llegó la policía, el ladrón ya se ___ ido.', 'había', ['había', 'habrá', 'ha'], 'When the police arrived, the thief had already gone.'],
        ['Ayer no vino a clase; ___ enfermo. (estar)', 'estaría', ['estaría', 'estará', 'está'], 'He didn\'t come to class yesterday; he was probably ill.']
      ],
      sents: [
        ['El ladrón habrá dejado alguna huella.', 'The thief will probably have left a fingerprint.'],
        ['¿Quién será el sospechoso?', 'I wonder who the suspect is.'],
        ['Tal vez el detective encuentre una pista.', 'Maybe the detective will find a clue.'],
        ['Serían las once cuando ocurrió el robo.', 'It must have been about eleven when the robbery happened.'],
        ['Para mañana habremos resuelto el misterio.', 'By tomorrow we will have solved the mystery.'],
        ['Probablemente lo sabrá su mujer.', 'His wife probably knows.']
      ]
    },
    {
      id: 'b1-10', icon: '🚫', title: 'Rules & Norms', es: 'Normas',
      words: [
        ['la norma', 'rule'], ['prohibido', 'forbidden'], ['permitido', 'allowed'], ['obligatorio', 'compulsory'],
        ['la multa', 'fine (penalty)'], ['fumar', 'to smoke'], ['aparcar', 'to park'], ['respetar', 'to respect'],
        ['el cinturón', 'seatbelt / belt'], ['el casco', 'helmet'], ['el ruido', 'noise'], ['la señal', 'sign / signal']
      ],
      grammar: {
        title: 'Obligation, prohibition and impersonal SE',
        html: `<table class="g"><tr><th>Structure</th><th>Use</th><th>Example</th></tr>
<tr><td><b>tener que</b> + inf.</td><td>personal obligation</td><td>Tengo que trabajar.</td></tr>
<tr><td><b>hay que</b> + inf.</td><td>general obligation (impersonal)</td><td>Hay que respetar las normas.</td></tr>
<tr><td><b>deber</b> + inf.</td><td>moral obligation / advice</td><td>Debes llevar casco.</td></tr>
<tr><td><b>(no) se puede</b> + inf.</td><td>(not) allowed</td><td>Aquí no se puede aparcar.</td></tr>
<tr><td><b>está prohibido / se prohíbe</b> + inf.</td><td>prohibition</td><td>Se prohíbe fumar.</td></tr>
<tr><td><b>es obligatorio</b> + inf.</td><td>compulsory</td><td>Es obligatorio llevar cinturón.</td></tr></table>
<p><b>Impersonal se</b> for general rules: <i>Aquí no <b>se fuma</b>.</i> (People don't smoke here.)</p>
<p class="tip">💡 <b>deber de</b> + infinitive expresses probability, not obligation: <i>Debe de estar en casa</i> = He must be (probably is) at home.</p>`
      },
      fill: [
        ['Para entrar ___ que llevar casco.', 'hay', ['hay', 'tiene', 'es'], 'To enter you have to wear a helmet.'],
        ['Aquí no ___ puede aparcar.', 'se', ['se', 'le', 'lo'], 'You can\'t park here.'],
        ['Está ___ fumar en los hospitales.', 'prohibido', ['prohibido', 'prohibida', 'prohíbe'], 'Smoking is forbidden in hospitals.'],
        ['Es ___ llevar el cinturón.', 'obligatorio', ['obligatorio', 'obligatoria', 'obliga'], 'Wearing a seatbelt is compulsory.'],
        ['Tú ___ respetar las normas. (deber)', 'debes', ['debes', 'debe', 'hay'], 'You must respect the rules.'],
        ['No contesta. ___ de estar durmiendo.', 'Debe', ['Debe', 'Tiene', 'Hay'], 'He\'s not answering. He must be sleeping.']
      ],
      sents: [
        ['Se prohíbe fumar en todo el edificio.', 'Smoking is forbidden in the whole building.'],
        ['Hay que respetar las señales de tráfico.', 'You have to respect traffic signs.'],
        ['Me pusieron una multa por aparcar mal.', 'I got a fine for parking badly.'],
        ['En la biblioteca no se puede hacer ruido.', 'You can\'t make noise in the library.'],
        ['Es obligatorio llevar casco en la moto.', 'It is compulsory to wear a helmet on a motorbike.'],
        ['¿Está permitido entrar con perros?', 'Are dogs allowed in?']
      ]
    },
    {
      id: 'b1-11', icon: '💑', title: 'Relationships', es: 'Las relaciones',
      words: [
        ['la pareja', 'partner / couple'], ['el novio', 'boyfriend / groom'], ['la novia', 'girlfriend / bride'], ['llevarse bien', 'to get on well'],
        ['enfadarse', 'to get angry'], ['romper con', 'to break up with'], ['salir con', 'to go out with'], ['el amor', 'love'],
        ['la amistad', 'friendship'], ['los celos', 'jealousy'], ['confiar en', 'to trust'], ['echar de menos', 'to miss (someone)']
      ],
      grammar: {
        title: 'Reciprocal verbs and verbs that change with SE',
        html: `<p><b>Reciprocal</b>: nos / os / se + verb = "each other": <i>Nos queremos.</i> (We love each other.) <i>Se conocieron en 2010.</i> (They met in 2010.)</p>
<table class="g"><tr><th>Without se</th><th>With se</th></tr>
<tr><td><b>ir</b> — to go</td><td><b>irse</b> — to leave</td></tr>
<tr><td><b>dormir</b> — to sleep</td><td><b>dormirse</b> — to fall asleep</td></tr>
<tr><td><b>llevar</b> — to carry / wear</td><td><b>llevarse</b> — to take away; <i>llevarse bien</i> — to get on</td></tr>
<tr><td><b>quedar</b> — to meet / be left</td><td><b>quedarse</b> — to stay</td></tr>
<tr><td><b>acordar</b> — to agree</td><td><b>acordarse de</b> — to remember</td></tr>
<tr><td><b>parecer</b> — to seem</td><td><b>parecerse a</b> — to look like</td></tr>
<tr><td><b>poner</b> — to put</td><td><b>ponerse</b> — to put on / become</td></tr></table>`
      },
      fill: [
        ['Mi hermano y yo ___ llevamos muy bien.', 'nos', ['nos', 'se', 'os'], 'My brother and I get on very well.'],
        ['Ana y Luis ___ conocieron en la universidad.', 'se', ['se', 'les', 'nos'], 'Ana and Luis met at university.'],
        ['Es tarde, me ___. (ir)', 'voy', ['voy', 'va', 'iré'], 'It\'s late, I\'m off.'],
        ['Anoche me ___ viendo una película. (dormir)', 'dormí', ['dormí', 'durmí', 'dormía'], 'Last night I fell asleep watching a film.'],
        ['¿Te ___ de mí? (acordar)', 'acuerdas', ['acuerdas', 'acordas', 'acuerda'], 'Do you remember me?'],
        ['Carmen se ___ mucho a su madre. (parecer)', 'parece', ['parece', 'parezca', 'parecen'], 'Carmen looks a lot like her mother.']
      ],
      sents: [
        ['Nos conocimos en una fiesta hace cinco años.', 'We met at a party five years ago.'],
        ['Mi novia y yo nos queremos mucho.', 'My girlfriend and I love each other very much.'],
        ['Rompió con su pareja por los celos.', 'She broke up with her partner because of jealousy.'],
        ['Te echo mucho de menos.', 'I miss you a lot.'],
        ['La amistad es muy importante para mí.', 'Friendship is very important to me.'],
        ['Me llevo bien con mis compañeros de piso.', 'I get on well with my flatmates.']
      ]
    },
    {
      id: 'b1-12', icon: '🎓', title: 'Education', es: 'La educación',
      words: [
        ['la asignatura', 'subject'], ['la nota', 'mark / grade'], ['la beca', 'scholarship / grant'], ['la carrera', 'degree course / race'],
        ['la universidad', 'university'], ['el instituto', 'secondary school'], ['la matrícula', 'enrolment / tuition fee'], ['el título', 'degree / title'],
        ['repasar', 'to revise / review'], ['suspender', 'to fail (an exam)'], ['la biblioteca', 'library'], ['los apuntes', 'notes']
      ],
      grammar: {
        title: 'Neuter LO',
        html: `<table class="g"><tr><th>Structure</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>lo</b> + adjective</td><td>the … thing / part</td><td><b>Lo bueno</b> es que hay becas. <b>Lo mejor</b> son los amigos.</td></tr>
<tr><td><b>lo que</b></td><td>what (the thing that)</td><td><b>Lo que</b> necesito es tiempo.</td></tr>
<tr><td><b>lo</b> + adj./adv. + <b>que</b></td><td>how (much)</td><td>No sabes <b>lo difícil que</b> es.</td></tr></table>
<p>In the <i>lo + adj. + que</i> structure the adjective agrees with the noun it describes: <i>¡No te imaginas <b>lo cansados</b> que están!</i></p>
<p class="tip">💡 <i>Lo</i> never goes with a noun: <i>lo importante</i> (the important thing) but <i>el tema importante</i>.</p>`
      },
      fill: [
        ['___ mejor de la universidad son los amigos.', 'Lo', ['Lo', 'El', 'La'], 'The best thing about university is the friends.'],
        ['___ que más me gusta es la historia.', 'Lo', ['Lo', 'El', 'Que'], 'What I like most is history.'],
        ['No sabes lo ___ que es esta asignatura. (difícil)', 'difícil', ['difícil', 'difíciles', 'difícilmente'], 'You have no idea how hard this subject is.'],
        ['¡No te imaginas lo ___ que están! (cansado, ellos)', 'cansados', ['cansados', 'cansado', 'cansadas'], 'You can\'t imagine how tired they are!'],
        ['Lo importante es ___ todos los días. (estudiar)', 'estudiar', ['estudiar', 'estudias', 'estudie'], 'The important thing is to study every day.'],
        ['Dime ___ que piensas.', 'lo', ['lo', 'el', 'que'], 'Tell me what you think.']
      ],
      sents: [
        ['Lo malo de los exámenes es el estrés.', 'The bad thing about exams is the stress.'],
        ['Saqué muy buena nota en matemáticas.', 'I got a very good mark in maths.'],
        ['Necesito tus apuntes para repasar.', 'I need your notes to revise.'],
        ['Estudio la carrera de Derecho en Salamanca.', 'I\'m doing a Law degree in Salamanca.'],
        ['Lo que más me preocupa es la matrícula.', 'What worries me most is the tuition fee.'],
        ['Le dieron una beca para estudiar en Chile.', 'She got a scholarship to study in Chile.']
      ]
    },
    {
      id: 'b1-13', icon: '🥗', title: 'Healthy Living', es: 'Vida sana',
      words: [
        ['la dieta', 'diet'], ['el ejercicio', 'exercise'], ['adelgazar', 'to lose weight'], ['engordar', 'to put on weight'],
        ['las verduras', 'vegetables'], ['el azúcar', 'sugar'], ['la grasa', 'fat'], ['sano', 'healthy'],
        ['el estrés', 'stress'], ['dormir bien', 'to sleep well'], ['la receta médica', 'prescription'], ['el gimnasio', 'gym']
      ],
      grammar: {
        title: 'Formal commands (usted / ustedes) with pronouns',
        html: `<p><b>Usted</b> and <b>ustedes</b> commands use the present subjunctive: tomar → <b>tome / tomen</b>, comer → <b>coma / coman</b>, hacer → <b>haga</b>, poner → <b>ponga</b>, ir → <b>vaya</b>, ser → <b>sea</b>, decir → <b>diga</b>.</p>
<table class="g"><tr><th>Affirmative (pronoun attached)</th><th>Negative (pronoun before)</th></tr>
<tr><td>Tóme<b>lo</b>.</td><td>No <b>lo</b> tome.</td></tr>
<tr><td>Siénte<b>se</b>.</td><td>No <b>se</b> siente.</td></tr>
<tr><td>Díga<b>me</b>.</td><td>No <b>me</b> diga.</td></tr>
<tr><td>Cómanse<b>las</b>. (ustedes)</td><td>No <b>se las</b> coman.</td></tr></table>
<p class="tip">💡 Attaching pronouns usually needs a written accent to keep the stress: <i>tome → tómelo</i>, <i>diga → dígame</i>.</p>`
      },
      fill: [
        ['___ usted más verduras. (comer)', 'Coma', ['Coma', 'Come', 'Comé'], 'Eat more vegetables.'],
        ['La pastilla, ___ después de comer. (tomar, usted + la)', 'tómela', ['tómela', 'tómala', 'tomela'], 'The pill — take it after eating.'],
        ['No ___ preocupe, señora.', 'se', ['se', 'le', 'te'], 'Don\'t worry, madam.'],
        ['___ ejercicio tres veces por semana. (hacer, usted)', 'Haga', ['Haga', 'Hace', 'Haz'], 'Do exercise three times a week.'],
        ['No ___ tanto azúcar. (tomar, ustedes)', 'tomen', ['tomen', 'toman', 'tomad'], 'Don\'t have so much sugar.'],
        ['___, ¿qué le pasa? (decir, usted + me)', 'Dígame', ['Dígame', 'Díme', 'Digame'], 'Tell me, what\'s wrong?']
      ],
      sents: [
        ['Coma menos grasa y más verduras.', 'Eat less fat and more vegetables.'],
        ['Vaya al gimnasio al menos dos veces por semana.', 'Go to the gym at least twice a week.'],
        ['No se preocupe, no es nada grave.', 'Don\'t worry, it\'s nothing serious.'],
        ['El estrés es malo para la salud.', 'Stress is bad for your health.'],
        ['Para adelgazar hay que comer sano.', 'To lose weight you have to eat healthily.'],
        ['Tómese esta pastilla antes de dormir.', 'Take this pill before going to sleep.']
      ]
    },
    {
      id: 'b1-14', icon: '🤲', title: 'Volunteering', es: 'El voluntariado',
      words: [
        ['el voluntario', 'volunteer'], ['la ONG', 'NGO'], ['la ayuda humanitaria', 'humanitarian aid'], ['donar', 'to donate'],
        ['la donación', 'donation'], ['colaborar', 'to collaborate / help'], ['la solidaridad', 'solidarity'], ['los derechos humanos', 'human rights'],
        ['el refugiado', 'refugee'], ['el hambre', 'hunger'], ['necesitado', 'needy'], ['la campaña', 'campaign']
      ],
      grammar: {
        title: 'Purpose and cause: PARA / PARA QUE, PORQUE / COMO / POR ESO',
        html: `<table class="g"><tr><th>Purpose</th><th>Example</th></tr>
<tr><td><b>para</b> + infinitive (same subject)</td><td>Trabajo <b>para</b> ganar dinero.</td></tr>
<tr><td><b>para que</b> + subjunctive (different subject)</td><td>Dono dinero <b>para que</b> los niños <b>puedan</b> estudiar.</td></tr></table>
<table class="g"><tr><th>Cause / result</th><th>Example</th></tr>
<tr><td><b>porque</b> (because) — after the main clause</td><td>No vino <b>porque</b> estaba enfermo.</td></tr>
<tr><td><b>como</b> (since) — at the start</td><td><b>Como</b> llovía, no salimos.</td></tr>
<tr><td><b>a causa de / por</b> + noun</td><td>Cancelaron el viaje <b>a causa de</b> la lluvia.</td></tr>
<tr><td><b>por eso / así que</b> (that's why / so)</td><td>Me gusta ayudar; <b>por eso</b> soy voluntario.</td></tr></table>`
      },
      fill: [
        ['Colaboro con una ONG ___ ayudar a los refugiados.', 'para', ['para', 'para que', 'porque'], 'I help an NGO to support refugees.'],
        ['Dono dinero para que los niños ___ ir a la escuela. (poder)', 'puedan', ['puedan', 'pueden', 'poder'], 'I donate money so that the children can go to school.'],
        ['___ no tenía tiempo, no fui a la reunión.', 'Como', ['Como', 'Porque', 'Por eso'], 'Since I didn\'t have time, I didn\'t go to the meeting.'],
        ['Me gusta ayudar; ___ soy voluntario.', 'por eso', ['por eso', 'porque', 'como'], 'I like helping; that\'s why I\'m a volunteer.'],
        ['Hacemos una campaña para que la gente ___ más. (donar)', 'done', ['done', 'dona', 'donar'], 'We are running a campaign so that people donate more.'],
        ['No vino ___ estaba enfermo.', 'porque', ['porque', 'como', 'por eso'], 'He didn\'t come because he was ill.']
      ],
      sents: [
        ['Trabajo como voluntario en un comedor social.', 'I work as a volunteer in a soup kitchen.'],
        ['La ONG envía ayuda humanitaria a la zona.', 'The NGO sends humanitarian aid to the area.'],
        ['Donamos ropa para que los refugiados no pasen frío.', 'We donate clothes so that the refugees aren\'t cold.'],
        ['Como había mucha gente, colaboramos todos.', 'Since there were a lot of people, we all helped.'],
        ['Millones de personas sufren hambre en el mundo.', 'Millions of people suffer from hunger in the world.'],
        ['Defendemos los derechos humanos.', 'We defend human rights.']
      ]
    },
    {
      id: 'b1-15', icon: '✉️', title: 'Emails & Letters', es: 'Correos y cartas',
      words: [
        ['estimado', 'dear (formal)'], ['querido', 'dear (informal)'], ['atentamente', 'yours faithfully / sincerely'], ['un abrazo', 'best wishes (lit. a hug)'],
        ['un saludo', 'regards'], ['el asunto', 'subject (of an email) / matter'], ['adjuntar', 'to attach'], ['el archivo adjunto', 'attachment'],
        ['la solicitud', 'application / request'], ['quedo a la espera', 'I look forward to (your reply)'], ['agradecer', 'to thank / be grateful for'], ['la respuesta', 'answer / reply']
      ],
      grammar: {
        title: 'Formal and informal writing',
        html: `<table class="g"><tr><th></th><th>Formal (usted)</th><th>Informal (tú)</th></tr>
<tr><td>Opening</td><td>Estimado/a señor/a López:</td><td>Querido/a Laura: / Hola, Laura:</td></tr>
<tr><td>Purpose</td><td>Le escribo para…</td><td>Te escribo para contarte…</td></tr>
<tr><td>Request</td><td>¿Podría usted…? / Le agradecería que + imperf. subj.</td><td>¿Puedes…? / ¿Me haces un favor?</td></tr>
<tr><td>Attachment</td><td>Adjunto le envío…</td><td>Te mando las fotos.</td></tr>
<tr><td>Closing</td><td>Quedo a la espera de su respuesta. Atentamente,</td><td>Un abrazo, / Besos, / Un saludo,</td></tr></table>
<p class="tip">💡 Spanish uses a <b>colon</b> after the greeting, not a comma: <i>Estimada señora García:</i></p>`
      },
      fill: [
        ['___ señora García: (formal)', 'Estimada', ['Estimada', 'Querida', 'Hola'], 'Dear Mrs García:'],
        ['Le ___ para solicitar información. (escribir, yo)', 'escribo', ['escribo', 'escribe', 'escribí'], 'I am writing to request information.'],
        ['Le agradecería que me ___ el horario. (enviar, usted)', 'enviara', ['enviara', 'envía', 'enviará'], 'I would be grateful if you could send me the timetable.'],
        ['Quedo a la ___ de su respuesta.', 'espera', ['espera', 'esperanza', 'esperar'], 'I look forward to your reply.'],
        ['Te ___ las fotos del viaje. (adjuntar, yo)', 'adjunto', ['adjunto', 'adjunta', 'adjuntas'], 'I\'m attaching the photos from the trip.'],
        ['¿___ usted confirmar la fecha? (poder, conditional)', 'Podría', ['Podría', 'Puedes', 'Podrías'], 'Could you confirm the date?']
      ],
      sents: [
        ['Estimado señor Pérez:', 'Dear Mr Pérez:'],
        ['Le escribo para solicitar una plaza en el curso.', 'I am writing to apply for a place on the course.'],
        ['Adjunto mi currículum en este correo.', 'I attach my CV to this email.'],
        ['Quedo a la espera de su respuesta.', 'I look forward to your reply.'],
        ['Querida Laura: ¿qué tal todo por ahí?', 'Dear Laura: how is everything there?'],
        ['Muchas gracias por tu mensaje. Un abrazo.', 'Thanks a lot for your message. Best wishes.']
      ]
    },
    {
      id: 'b1-16', icon: '🌟', title: 'Dreams & Ambitions', es: 'Sueños y metas',
      words: [
        ['el objetivo', 'goal / objective'], ['la meta', 'aim / finish line'], ['la ambición', 'ambition'], ['soñar con', 'to dream of'],
        ['pensar en', 'to think about'], ['depender de', 'to depend on'], ['tratar de', 'to try to'], ['dejar de', 'to stop (doing)'],
        ['empezar a', 'to start to'], ['aprender a', 'to learn to'], ['insistir en', 'to insist on'], ['contar con', 'to count on']
      ],
      grammar: {
        title: 'Personal A and verbs with prepositions',
        html: `<p><b>Personal a</b>: put <b>a</b> before a direct object that is a specific person (or pet): <i>Veo <b>a</b> María. Busco <b>a</b> mi perro.</i> Not with things (<i>Veo la casa</i>) and not after <i>tener</i> (<i>Tengo dos hermanos</i>).</p>
<table class="g"><tr><th>Preposition</th><th>Verbs</th></tr>
<tr><td><b>a</b></td><td>empezar a, aprender a, ayudar a, ir a, volver a, atreverse a</td></tr>
<tr><td><b>de</b></td><td>dejar de, tratar de, acordarse de, depender de, enamorarse de, olvidarse de</td></tr>
<tr><td><b>en</b></td><td>pensar en, confiar en, insistir en, quedar en, fijarse en</td></tr>
<tr><td><b>con</b></td><td>soñar con, contar con, casarse con, quedar con</td></tr></table>
<p class="tip">💡 These prepositions often differ from English: <i>soñar <b>con</b></i> (dream <b>of</b>), <i>casarse <b>con</b></i> (marry), <i>pensar <b>en</b></i> (think <b>about</b>).</p>`
      },
      fill: [
        ['Sueño ___ vivir en Buenos Aires.', 'con', ['con', 'de', 'en'], 'I dream of living in Buenos Aires.'],
        ['Siempre pienso ___ ti.', 'en', ['en', 'de', 'a'], 'I always think about you.'],
        ['Ayer vi ___ tu hermana en el centro.', 'a', ['a', 'de', 'con'], 'Yesterday I saw your sister in the centre.'],
        ['Todo depende ___ ti.', 'de', ['de', 'en', 'a'], 'It all depends on you.'],
        ['Quiero aprender ___ tocar la guitarra.', 'a', ['a', 'de', 'en'], 'I want to learn to play the guitar.'],
        ['Se casó ___ un chico argentino.', 'con', ['con', 'a', 'de'], 'She married an Argentinian guy.']
      ],
      sents: [
        ['Mi objetivo es aprender a hablar español con fluidez.', 'My goal is to learn to speak Spanish fluently.'],
        ['Sueño con viajar por toda Sudamérica.', 'I dream of travelling all over South America.'],
        ['Puedes contar conmigo para lo que necesites.', 'You can count on me for whatever you need.'],
        ['He dejado de comer carne.', 'I have stopped eating meat.'],
        ['Llamo a mis padres todos los domingos.', 'I call my parents every Sunday.'],
        ['Trato de hacer ejercicio cada día.', 'I try to exercise every day.']
      ]
    }
  ]
});

COURSE_EXTRA.push({
  level: 'b2',
  order: ['b2-1', 'b2-2', 'b2-13', 'b2-10', 'b2-9', 'b2-14', 'b2-8', 'b2-3', 'b2-4', 'b2-5', 'b2-12', 'b2-11', 'b2-6', 'b2-7'],
  units: [
    {
      id: 'b2-8', icon: '🙈', title: 'Mishaps', es: 'Contratiempos',
      words: [
        ['el contratiempo', 'setback / mishap'], ['romperse', 'to break (accidentally)'], ['caérsele (algo a alguien)', 'to drop (something)'],
        ['olvidársele (algo a alguien)', 'to forget (something)'], ['perdérsele (algo a alguien)', 'to lose (something)'], ['estropearse', 'to break down'],
        ['mancharse', 'to get stained'], ['quemarse', 'to get burnt'], ['el despiste', 'slip / moment of absent-mindedness'],
        ['despistado', 'absent-minded'], ['la avería', 'breakdown (machine)'], ['sin querer', 'by accident / unintentionally']
      ],
      grammar: {
        title: 'SE for unplanned events',
        html: `<p>To present something as an <b>accident</b> (not your fault), Spanish uses: <b>se</b> + indirect pronoun + verb. The verb agrees with the <b>thing</b>, not the person.</p>
<table class="g"><tr><th>se</th><th>to whom</th><th>verb</th><th>thing</th></tr>
<tr><td>Se</td><td>me</td><td>cayó</td><td>el vaso.</td></tr>
<tr><td>Se</td><td>nos</td><td>olvidaron</td><td>las llaves.</td></tr>
<tr><td>Se</td><td>le</td><td>rompieron</td><td>las gafas.</td></tr></table>
<p>Common verbs: <i>caer, olvidar, romper, perder, estropear, quemar, acabar</i> (<i>Se nos acabó la leche</i> — we ran out of milk), <i>ocurrir</i> (<i>Se me ocurrió una idea</i> — I had an idea).</p>
<p class="tip">💡 Compare: <i>Rompí el vaso</i> (I broke the glass — maybe on purpose) vs <i>Se me rompió el vaso</i> (the glass broke on me).</p>`
      },
      fill: [
        ['Se ___ cayó el móvil al agua. (to me)', 'me', ['me', 'se', 'le'], 'I dropped my phone in the water.'],
        ['Se nos ___ las llaves. (olvidar)', 'olvidaron', ['olvidaron', 'olvidó', 'olvidamos'], 'We forgot the keys.'],
        ['A Juan se ___ rompieron las gafas.', 'le', ['le', 'lo', 'se'], 'Juan\'s glasses broke.'],
        ['Se me ha ___ una idea genial. (ocurrir)', 'ocurrido', ['ocurrido', 'ocurrida', 'ocurrió'], 'I\'ve had a brilliant idea.'],
        ['Se ___ acabó la leche. (to us)', 'nos', ['nos', 'os', 'se'], 'We\'ve run out of milk.'],
        ['Lo siento, lo rompí sin ___.', 'querer', ['querer', 'quiero', 'querido'], 'Sorry, I broke it by accident.']
      ],
      sents: [
        ['Se me olvidó tu cumpleaños, lo siento.', 'I forgot your birthday, I\'m sorry.'],
        ['Se le cayeron los platos al camarero.', 'The waiter dropped the plates.'],
        ['Se nos estropeó el coche en la autopista.', 'Our car broke down on the motorway.'],
        ['¡Qué despistado eres! Se te han perdido las llaves otra vez.', 'How absent-minded you are! You\'ve lost your keys again.'],
        ['Se me ocurre una solución.', 'I can think of a solution.'],
        ['Se me manchó la camisa de vino.', 'I got wine on my shirt.']
      ]
    },
    {
      id: 'b2-9', icon: '🏢', title: 'Flat Hunting', es: 'Buscar piso',
      words: [
        ['el piso', 'flat / apartment / floor'], ['el alquiler', 'rent'], ['la fianza', 'deposit'], ['el casero', 'landlord'],
        ['el inquilino', 'tenant'], ['amueblado', 'furnished'], ['luminoso', 'bright'], ['el ascensor', 'lift / elevator'],
        ['la calefacción', 'heating'], ['compartir piso', 'to share a flat'], ['la hipoteca', 'mortgage'], ['el barrio', 'neighbourhood']
      ],
      grammar: {
        title: 'Relative clauses: prepositions, LO CUAL and the subjunctive',
        html: `<p>After a preposition use <b>el / la / los / las que</b> or <b>el / la cual, los / las cuales</b>: <i>la casa <b>en la que</b> vivo</i>, <i>los amigos <b>con los cuales</b> viajé</i>.</p>
<p><b>lo cual / lo que</b> refers to a whole idea: <i>Subieron el alquiler, <b>lo cual</b> me parece injusto.</i></p>
<table class="g"><tr><th>Known / existing antecedent → indicative</th><th>Unknown / hypothetical → subjunctive</th></tr>
<tr><td>Vivo en un piso que <b>tiene</b> ascensor.</td><td>Busco un piso que <b>tenga</b> ascensor.</td></tr>
<tr><td>Hay alguien que <b>sabe</b> hacerlo.</td><td>¿Hay alguien que <b>sepa</b> hacerlo?</td></tr></table>
<p><b>Quien</b> in generalisations: <i><b>Quien</b> quiera venir, que venga.</i> (Whoever wants to come…)</p>`
      },
      fill: [
        ['Esta es la casa en ___ que nací.', 'la', ['la', 'el', 'lo'], 'This is the house where I was born.'],
        ['Busco un piso que ___ calefacción. (tener)', 'tenga', ['tenga', 'tiene', 'tendrá'], 'I\'m looking for a flat that has heating.'],
        ['El casero subió el alquiler, ___ cual nos pareció injusto.', 'lo', ['lo', 'el', 'la'], 'The landlord raised the rent, which seemed unfair to us.'],
        ['Vivo en un barrio que ___ muy tranquilo. (ser)', 'es', ['es', 'sea', 'fuera'], 'I live in a neighbourhood that is very quiet.'],
        ['Los amigos con los ___ comparto piso son italianos.', 'que', ['que', 'quienes', 'cual'], 'The friends I share the flat with are Italian.'],
        ['___ quiera ver el piso, que llame al casero.', 'Quien', ['Quien', 'Que', 'El cual'], 'Whoever wants to see the flat should call the landlord.']
      ],
      sents: [
        ['Buscamos un piso que sea luminoso y tenga ascensor.', 'We are looking for a flat that is bright and has a lift.'],
        ['El alquiler incluye la calefacción.', 'The rent includes heating.'],
        ['Hay que pagar dos meses de fianza.', 'You have to pay two months\' deposit.'],
        ['El barrio en el que vivo es muy animado.', 'The neighbourhood I live in is very lively.'],
        ['Comparto piso con dos estudiantes, lo cual es bastante barato.', 'I share a flat with two students, which is quite cheap.'],
        ['Pedimos una hipoteca para comprar la casa.', 'We applied for a mortgage to buy the house.']
      ]
    },
    {
      id: 'b2-10', icon: '🔬', title: 'Science & Health', es: 'Ciencia y salud',
      words: [
        ['la investigación', 'research'], ['el investigador', 'researcher'], ['el descubrimiento', 'discovery'], ['la vacuna', 'vaccine'],
        ['el ensayo', 'trial / essay'], ['el laboratorio', 'laboratory'], ['la enfermedad', 'disease / illness'], ['el tratamiento', 'treatment'],
        ['los efectos secundarios', 'side effects'], ['el avance', 'advance / progress'], ['probable', 'likely'], ['a lo mejor', 'maybe']
      ],
      grammar: {
        title: 'Expressing probability',
        html: `<table class="g"><tr><th>Expression</th><th>Mood</th><th>Example</th></tr>
<tr><td><b>a lo mejor</b></td><td>indicative</td><td>A lo mejor viene mañana.</td></tr>
<tr><td><b>quizá(s) / tal vez</b></td><td>subjunctive (more doubt) or indicative</td><td>Quizás venga / viene.</td></tr>
<tr><td><b>puede (ser) que</b></td><td>subjunctive</td><td>Puede que llueva.</td></tr>
<tr><td><b>es probable / posible que</b></td><td>subjunctive</td><td>Es probable que tengan razón.</td></tr>
<tr><td><b>lo más probable es que</b></td><td>subjunctive</td><td>Lo más probable es que no venga.</td></tr>
<tr><td><b>seguramente / probablemente</b></td><td>usually indicative</td><td>Seguramente lo sabe.</td></tr>
<tr><td><b>deber de</b> + inf.</td><td>—</td><td>Debe de ser muy caro.</td></tr></table>
<p class="tip">💡 Remember the future of probability (B1): <i>Estará cansado</i> = He's probably tired.</p>`
      },
      fill: [
        ['A lo mejor ___ una vacuna pronto. (haber)', 'hay', ['hay', 'haya', 'hubiera'], 'Maybe there will be a vaccine soon.'],
        ['Puede que el tratamiento ___ efectos secundarios. (tener)', 'tenga', ['tenga', 'tiene', 'tendrá'], 'The treatment may have side effects.'],
        ['Es probable que los resultados ___ mañana. (publicarse)', 'se publiquen', ['se publiquen', 'se publican', 'se publicarán'], 'The results will probably be published tomorrow.'],
        ['Lo más probable es que no ___ tiempo. (tener, nosotros)', 'tengamos', ['tengamos', 'tenemos', 'tendremos'], 'Most likely we won\'t have time.'],
        ['Seguramente ___ un gran avance. (ser)', 'será', ['será', 'sea', 'fuera'], 'It will surely be a great advance.'],
        ['Quizás ___ razón, pero no estoy seguro. (tener, tú)', 'tengas', ['tengas', 'tener', 'tuvieras'], 'Maybe you\'re right, but I\'m not sure.']
      ],
      sents: [
        ['Los investigadores han hecho un descubrimiento importante.', 'The researchers have made an important discovery.'],
        ['Puede que la vacuna esté lista el año que viene.', 'The vaccine may be ready next year.'],
        ['A lo mejor el tratamiento funciona.', 'Maybe the treatment works.'],
        ['El ensayo clínico durará dos años.', 'The clinical trial will last two years.'],
        ['Es posible que esta enfermedad tenga cura.', 'It is possible that this disease has a cure.'],
        ['La ciencia avanza más rápido que nunca.', 'Science is advancing faster than ever.']
      ]
    },
    {
      id: 'b2-11', icon: '💶', title: 'Economy', es: 'La economía',
      words: [
        ['la economía', 'economy'], ['el consumo', 'consumption'], ['el consumidor', 'consumer'], ['la inflación', 'inflation'],
        ['los impuestos', 'taxes'], ['el ahorro', 'savings'], ['la deuda', 'debt'], ['el préstamo', 'loan'],
        ['el beneficio', 'profit / benefit'], ['las rebajas', 'the sales'], ['la oferta', 'offer / supply'], ['la demanda', 'demand']
      ],
      grammar: {
        title: 'CUANTO MÁS…, MÁS… and DE AHÍ QUE',
        html: `<p>Proportional comparison: <b>cuanto más / menos</b> …, <b>más / menos</b> …: <i>Cuanto más ganas, más gastas.</i> (The more you earn, the more you spend.)</p>
<p>With a noun, <i>cuanto</i> agrees: <b>cuanta</b> más gente, <b>cuantos</b> más impuestos, <b>cuantas</b> más horas.</p>
<p>About the future → subjunctive: <i>Cuanto antes lo <b>hagas</b>, mejor.</i> (The sooner you do it, the better.)</p>
<table class="g"><tr><th>Connector</th><th>Mood</th><th>Example</th></tr>
<tr><td><b>así que / por eso</b></td><td>indicative</td><td>No tenía ahorros, así que pidió un préstamo.</td></tr>
<tr><td><b>de ahí que</b> (hence)</td><td>subjunctive</td><td>Subió la inflación; de ahí que la gente consuma menos.</td></tr></table>`
      },
      fill: [
        ['Cuanto más ganas, ___ gastas.', 'más', ['más', 'mejor', 'tanto'], 'The more you earn, the more you spend.'],
        ['___ más gente compra, más sube el precio.', 'Cuanta', ['Cuanta', 'Cuanto', 'Cuantos'], 'The more people buy, the more the price goes up.'],
        ['Cuanto antes lo ___, mejor. (hacer, tú)', 'hagas', ['hagas', 'haces', 'harás'], 'The sooner you do it, the better.'],
        ['Subió la inflación; de ahí que la gente ___ menos. (consumir)', 'consuma', ['consuma', 'consume', 'consumirá'], 'Inflation went up; hence people consume less.'],
        ['___ menos impuestos pagamos, menos servicios hay.', 'Cuantos', ['Cuantos', 'Cuantas', 'Cuanto'], 'The fewer taxes we pay, the fewer services there are.'],
        ['No tenía ahorros, ___ pidió un préstamo.', 'así que', ['así que', 'de ahí que', 'cuanto más'], 'He had no savings, so he asked for a loan.']
      ],
      sents: [
        ['Cuanto más ahorres ahora, mejor vivirás después.', 'The more you save now, the better you will live later.'],
        ['La inflación ha reducido el poder adquisitivo.', 'Inflation has reduced purchasing power.'],
        ['Muchas familias tienen deudas con el banco.', 'Many families have debts with the bank.'],
        ['En las rebajas todo está más barato.', 'In the sales everything is cheaper.'],
        ['Si la demanda supera la oferta, suben los precios.', 'If demand exceeds supply, prices rise.'],
        ['El gobierno ha bajado los impuestos.', 'The government has lowered taxes.']
      ]
    },
    {
      id: 'b2-12', icon: '🧳', title: 'Tourism', es: 'El turismo',
      words: [
        ['el turismo', 'tourism'], ['el alojamiento', 'accommodation'], ['el folleto', 'brochure'], ['la temporada alta', 'high season'],
        ['el crucero', 'cruise'], ['el guía', 'guide (person)'], ['la excursión', 'excursion / day trip'], ['el monumento', 'monument'],
        ['las afueras', 'outskirts'], ['la frontera', 'border'], ['el equipaje', 'luggage'], ['masificado', 'overcrowded']
      ],
      grammar: {
        title: 'More prepositions',
        html: `<table class="g"><tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>ante</b></td><td>before, faced with</td><td>Ante tantos turistas, nos fuimos.</td></tr>
<tr><td><b>bajo</b></td><td>under</td><td>Dormimos bajo las estrellas.</td></tr>
<tr><td><b>tras</b></td><td>after, behind (formal)</td><td>Tras el accidente, cerraron la frontera.</td></tr>
<tr><td><b>según</b></td><td>according to</td><td>Según el guía, es del siglo XII.</td></tr>
<tr><td><b>mediante</b></td><td>by means of</td><td>Reservamos mediante una agencia.</td></tr>
<tr><td><b>durante</b></td><td>during, for</td><td>Viajamos durante el verano.</td></tr>
<tr><td><b>hacia</b></td><td>towards; around (time)</td><td>Caminamos hacia la playa. Llegaremos hacia las diez.</td></tr>
<tr><td><b>hasta</b></td><td>until, as far as; even</td><td>Fuimos hasta el faro.</td></tr>
<tr><td><b>sobre</b></td><td>on; about; around</td><td>Un libro sobre Perú.</td></tr>
<tr><td><b>salvo / excepto</b></td><td>except</td><td>Abre todos los días salvo el lunes.</td></tr></table>`
      },
      fill: [
        ['___ el guía, el monumento es del siglo XII.', 'Según', ['Según', 'Durante', 'Hacia'], 'According to the guide, the monument dates from the 12th century.'],
        ['Caminamos ___ la playa.', 'hacia', ['hacia', 'según', 'ante'], 'We walked towards the beach.'],
        ['Viajamos ___ la temporada alta.', 'durante', ['durante', 'mediante', 'tras'], 'We travelled during the high season.'],
        ['___ el accidente, cerraron la frontera.', 'Tras', ['Tras', 'Bajo', 'Según'], 'After the accident, they closed the border.'],
        ['Dormimos ___ las estrellas.', 'bajo', ['bajo', 'ante', 'hacia'], 'We slept under the stars.'],
        ['Reservamos el hotel ___ una agencia.', 'mediante', ['mediante', 'según', 'durante'], 'We booked the hotel through an agency.']
      ],
      sents: [
        ['Según el folleto, la excursión dura cuatro horas.', 'According to the brochure, the trip lasts four hours.'],
        ['El centro histórico está masificado en verano.', 'The historic centre is overcrowded in summer.'],
        ['Buscamos alojamiento en las afueras de la ciudad.', 'We looked for accommodation on the outskirts of the city.'],
        ['La aerolínea perdió nuestro equipaje.', 'The airline lost our luggage.'],
        ['El guía nos habló sobre la historia del monumento.', 'The guide told us about the history of the monument.'],
        ['Ante tantos turistas, decidimos irnos.', 'Faced with so many tourists, we decided to leave.']
      ]
    },
    {
      id: 'b2-13', icon: '📝', title: 'Contracts & Deals', es: 'Contratos',
      words: [
        ['el contrato', 'contract'], ['la cláusula', 'clause'], ['negociar', 'to negotiate'], ['la negociación', 'negotiation'],
        ['el cliente', 'client / customer'], ['el proveedor', 'supplier'], ['el presupuesto', 'budget / quote'], ['la factura', 'invoice / bill'],
        ['el descuento', 'discount'], ['la garantía', 'guarantee / warranty'], ['rescindir', 'to terminate (a contract)'], ['el socio', 'business partner / member']
      ],
      grammar: {
        title: 'Other conditional structures',
        html: `<table class="g"><tr><th>Structure</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>en caso de que</b> + subj.</td><td>in case</td><td>En caso de que haya problemas, llámenos.</td></tr>
<tr><td><b>siempre que / siempre y cuando</b> + subj.</td><td>provided that</td><td>Le haremos un descuento siempre que pague al contado.</td></tr>
<tr><td><b>como</b> + subj.</td><td>if (warning / threat)</td><td>Como no pagues, rescindimos el contrato.</td></tr>
<tr><td><b>salvo que / a no ser que</b> + subj.</td><td>unless</td><td>Firmaremos salvo que cambie el precio.</td></tr>
<tr><td><b>de</b> + infinitive</td><td>if (= si)</td><td>De haberlo sabido, no habría firmado.</td></tr></table>
<p class="tip">💡 <i>Siempre que</i> + indicative means "whenever": <i>Siempre que viene, trae flores.</i></p>`
      },
      fill: [
        ['En caso de que ___ problemas, llámenos. (haber)', 'haya', ['haya', 'hay', 'habrá'], 'In case there are problems, call us.'],
        ['Le haremos un descuento siempre que ___ al contado. (pagar, usted)', 'pague', ['pague', 'paga', 'pagará'], 'We\'ll give you a discount provided you pay cash.'],
        ['Como no ___ la factura, rescindiremos el contrato. (pagar, ustedes)', 'paguen', ['paguen', 'pagan', 'pagarán'], 'If you don\'t pay the invoice, we will terminate the contract.'],
        ['De ___ sabido, no habría firmado. (haber + lo)', 'haberlo', ['haberlo', 'haber', 'habiéndolo'], 'Had I known, I wouldn\'t have signed.'],
        ['Firmaremos salvo que el proveedor ___ el precio. (cambiar)', 'cambie', ['cambie', 'cambia', 'cambiará'], 'We will sign unless the supplier changes the price.'],
        ['Acepto la propuesta siempre y ___ incluya garantía.', 'cuando', ['cuando', 'que', 'como'], 'I accept the proposal as long as it includes a guarantee.']
      ],
      sents: [
        ['Hemos negociado un nuevo contrato con el proveedor.', 'We have negotiated a new contract with the supplier.'],
        ['El presupuesto incluye la instalación.', 'The quote includes installation.'],
        ['En caso de que no llegue el pedido, le devolvemos el dinero.', 'In case the order doesn\'t arrive, we\'ll refund your money.'],
        ['La garantía dura dos años.', 'The guarantee lasts two years.'],
        ['Como vuelvas a llegar tarde, hablaré con el jefe.', 'If you\'re late again, I\'ll talk to the boss.'],
        ['Mi socio y yo firmamos el acuerdo ayer.', 'My partner and I signed the agreement yesterday.']
      ]
    },
    {
      id: 'b2-14', icon: '😤', title: 'Emotional Reactions', es: 'Reacciones',
      words: [
        ['la vergüenza', 'embarrassment / shame'], ['la rabia', 'rage / annoyance'], ['la pena', 'sorrow / pity'], ['la ilusión', 'excitement / hope'],
        ['la angustia', 'anguish / anxiety'], ['el agobio', 'stress / feeling overwhelmed'], ['agobiado', 'overwhelmed'], ['harto', 'fed up'],
        ['soportar', 'to bear / stand'], ['dar igual', 'to not mind / not care'], ['hacer ilusión', 'to be excited about'], ['poner de los nervios', 'to drive (someone) crazy']
      ],
      grammar: {
        title: 'Verbs of feeling + infinitive / QUE + subjunctive',
        html: `<table class="g"><tr><th>Structure</th><th>Example</th></tr>
<tr><td>me da(n) + <b>pena / miedo / rabia / vergüenza / igual</b></td><td>Me da pena que te vayas.</td></tr>
<tr><td>me pone + <b>nervioso / triste / de mal humor / de los nervios</b></td><td>Me pone nervioso que lleguen tarde.</td></tr>
<tr><td>me hace <b>ilusión</b></td><td>Me hace ilusión que vengas.</td></tr>
<tr><td><b>no soporto / odio / me encanta</b></td><td>No soporto que me interrumpan.</td></tr>
<tr><td>estoy <b>harto de</b></td><td>Estoy harto de que no me escuches.</td></tr></table>
<p>Same subject → <b>infinitive</b>: <i>Me da vergüenza <b>hablar</b> en público.</i> Different subject → <b>que + subjunctive</b>: <i>Me da vergüenza que <b>hables</b> así.</i></p>
<p>In the past → imperfect subjunctive: <i>Me dio rabia que no me <b>llamaras</b>.</i></p>`
      },
      fill: [
        ['Me da pena que te ___. (ir)', 'vayas', ['vayas', 'vas', 'irás'], 'It makes me sad that you\'re leaving.'],
        ['Me pone nervioso que la gente ___ tarde. (llegar)', 'llegue', ['llegue', 'llega', 'llegar'], 'It makes me nervous when people arrive late.'],
        ['Me hace mucha ilusión ___ a Cuba. (viajar)', 'viajar', ['viajar', 'viaje', 'que viajo'], 'I\'m really excited about travelling to Cuba.'],
        ['Estoy harto ___ que no me escuches.', 'de', ['de', 'en', 'con'], 'I\'m fed up with you not listening to me.'],
        ['Me dio rabia que no me ___. (llamar, tú)', 'llamaras', ['llamaras', 'llames', 'llamabas'], 'It annoyed me that you didn\'t call me.'],
        ['A mí me da ___ dónde cenemos.', 'igual', ['igual', 'pena', 'mismo'], 'I don\'t mind where we have dinner.']
      ],
      sents: [
        ['Me da vergüenza hablar en público.', 'I\'m embarrassed to speak in public.'],
        ['No soporto que me interrumpan.', 'I can\'t stand being interrupted.'],
        ['Me hace ilusión que vengas a mi boda.', 'I\'m so happy you\'re coming to my wedding.'],
        ['Estoy agobiado con tanto trabajo.', 'I\'m overwhelmed with so much work.'],
        ['Me pone de los nervios que hables tan alto.', 'It drives me crazy that you talk so loudly.'],
        ['Me dio mucha pena que perdieran el partido.', 'I was really sorry they lost the match.']
      ]
    }
  ]
});
