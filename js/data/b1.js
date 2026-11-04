window.COURSE = window.COURSE || [];
COURSE.push({
  id: 'b1', name: 'B1', title: 'Intermediate', color: '#ce82ff',
  desc: 'Storytelling, the subjunctive, commands, work and the environment.',
  units: [
    {
      id: 'b1-1', icon: '📖', title: 'Telling Stories', es: 'Narrar',
      words: [
        ['de repente', 'suddenly'], ['mientras', 'while'], ['entonces', 'then'], ['suceder', 'to happen'],
        ['el accidente', 'accident'], ['la noticia', 'piece of news'], ['darse cuenta', 'to realise'],
        ['al final', 'in the end'], ['contar', 'to tell'], ['la historia', 'story / history'],
        ['sorprender', 'to surprise'], ['el testigo', 'witness']
      ],
      grammar: {
        title: 'Indefinido or imperfecto?',
        html: `<table class="g"><tr><th>Imperfecto</th><th>Indefinido</th></tr>
<tr><td>Background, description</td><td>Main event, completed action</td></tr>
<tr><td>Habit (<i>siempre, cada día</i>)</td><td>One-off action (<i>ayer, una vez</i>)</td></tr>
<tr><td>Action in progress (<i>mientras</i>)</td><td>Action that interrupts (<i>de repente</i>)</td></tr>
<tr><td>Time, age, weather: <i>Eran las diez.</i></td><td>Defined period: <i>Viví allí dos años.</i></td></tr></table>
<p class="ex"><b>Llovía</b> cuando <b>llegué</b> al aeropuerto. — It was raining when I arrived at the airport.</p>
<p class="tip">💡 Think of a film: the imperfecto is the scenery, the indefinido is the action.</p>`
      },
      fill: [
        ['Mientras yo ___, sonó el teléfono. (dormir)', 'dormía', ['dormía', 'dormí', 'duermo'], 'While I was sleeping, the phone rang.'],
        ['Ayer ___ un accidente en mi calle. (haber)', 'hubo', ['hubo', 'había', 'ha'], 'Yesterday there was an accident in my street.'],
        ['Hacía sol cuando ___ de casa. (salir, yo)', 'salí', ['salí', 'salía', 'salgo'], 'It was sunny when I left home.'],
        ['De niño ___ al fútbol todos los días. (jugar)', 'jugaba', ['jugaba', 'jugué', 'juego'], 'As a child I played football every day.'],
        ['Eran las diez cuando ella me ___. (llamar)', 'llamó', ['llamó', 'llamaba', 'llama'], 'It was ten o\'clock when she called me.'],
        ['De repente, ___ la luz. (irse)', 'se fue', ['se fue', 'se iba', 'se va'], 'Suddenly the power went out.']
      ],
      sents: [
        ['Mientras leía, sonó el teléfono.', 'While I was reading, the phone rang.'],
        ['Hacía frío cuando salimos de casa.', 'It was cold when we left home.'],
        ['De repente, se fue la luz.', 'Suddenly, the power went out.'],
        ['El testigo contó toda la historia.', 'The witness told the whole story.'],
        ['Al final, todo salió bien.', 'In the end, everything turned out well.']
      ]
    },
    {
      id: 'b1-2', icon: '🌠', title: 'Wishes & Hopes', es: 'Deseos',
      words: [
        ['ojalá', 'I hope / if only'], ['esperar', 'to hope / wait'], ['desear', 'to wish'], ['la suerte', 'luck'],
        ['el deseo', 'wish'], ['el éxito', 'success'], ['aprobar', 'to pass (an exam)'], ['conseguir', 'to achieve / get'],
        ['el sueño', 'dream / sleep'], ['la esperanza', 'hope'], ['feliz', 'happy'], ['tranquilo', 'calm']
      ],
      grammar: {
        title: 'Present subjunctive I — wishes',
        html: `<p>The subjunctive expresses things that are <b>not facts</b>: wishes, desires, emotions, possibilities. It usually follows <b>que</b>.</p>
<p>Formation: take the <b>yo</b> form, drop the -o and add the "opposite" vowel: -ar → <b>-e</b>, -er/-ir → <b>-a</b>.</p>
<table class="g"><tr><th>Person</th><th>hablar</th><th>comer</th><th>tener (tengo)</th></tr>
<tr><td>yo</td><td>habl<b>e</b></td><td>com<b>a</b></td><td>teng<b>a</b></td></tr>
<tr><td>tú</td><td>habl<b>es</b></td><td>com<b>as</b></td><td>teng<b>as</b></td></tr>
<tr><td>él / ella</td><td>habl<b>e</b></td><td>com<b>a</b></td><td>teng<b>a</b></td></tr>
<tr><td>nosotros</td><td>habl<b>emos</b></td><td>com<b>amos</b></td><td>teng<b>amos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>éis</b></td><td>com<b>áis</b></td><td>teng<b>áis</b></td></tr>
<tr><td>ellos</td><td>habl<b>en</b></td><td>com<b>an</b></td><td>teng<b>an</b></td></tr></table>
<p>Irregular: ser → <b>sea</b>, ir → <b>vaya</b>, estar → <b>esté</b>, haber → <b>haya</b>, saber → <b>sepa</b>, dar → <b>dé</b>.</p>
<p class="ex">Quiero <b>que</b> vengas. (I want you to come.) — <b>Ojalá</b> haga sol. (I hope it's sunny.)</p>
<p class="tip">💡 Same subject → infinitive: <i>Quiero ir.</i> Different subject → que + subjunctive: <i>Quiero que vayas.</i></p>`
      },
      fill: [
        ['Quiero que tú ___ conmigo. (venir)', 'vengas', ['vengas', 'vienes', 'venir'], 'I want you to come with me.'],
        ['Ojalá ___ buen tiempo mañana. (hacer)', 'haga', ['haga', 'hace', 'hará'], 'I hope the weather is good tomorrow.'],
        ['Espero que ___ el examen. (aprobar, tú)', 'apruebes', ['apruebes', 'apruebas', 'aprobar'], 'I hope you pass the exam.'],
        ['Mis padres quieren que yo ___ medicina. (estudiar)', 'estudie', ['estudie', 'estudio', 'estudiar'], 'My parents want me to study medicine.'],
        ['Ojalá ___ feliz. (ser, tú)', 'seas', ['seas', 'eres', 'estés'], 'I hope you are happy.'],
        ['Deseo que todo te ___ bien. (ir)', 'vaya', ['vaya', 'va', 'vas'], 'I wish everything goes well for you.']
      ],
      sents: [
        ['Ojalá tengas mucha suerte.', 'I hope you have lots of luck.'],
        ['Quiero que vengas a mi fiesta.', 'I want you to come to my party.'],
        ['Espero que apruebes el examen.', 'I hope you pass the exam.'],
        ['Mis padres desean que sea feliz.', 'My parents wish me to be happy.'],
        ['Ojalá consigamos el trabajo.', 'Hopefully we\'ll get the job.']
      ]
    },
    {
      id: 'b1-3', icon: '💭', title: 'Feelings & Opinions', es: 'Sentimientos y opiniones',
      words: [
        ['alegrarse', 'to be glad'], ['molestar', 'to bother'], ['preocupar', 'to worry'], ['la opinión', 'opinion'],
        ['creer', 'to believe / think'], ['pensar', 'to think'], ['dudar', 'to doubt'], ['posible', 'possible'],
        ['necesario', 'necessary'], ['importante', 'important'], ['el miedo', 'fear'], ['triste', 'sad']
      ],
      grammar: {
        title: 'Subjunctive II — emotion, doubt and evaluation',
        html: `<p>After expressions of <b>emotion</b>: <b>me alegra que, me molesta que, me preocupa que, siento que, tengo miedo de que</b> + subjunctive.</p>
<p><b>Doubt and denial</b>: <b>no creo que, no pienso que, dudo que</b> + subjunctive. But positive <b>creo que / pienso que</b> take the indicative!</p>
<p class="ex">Creo que <b>tiene</b> razón. ↔ No creo que <b>tenga</b> razón.</p>
<p><b>Evaluation</b>: <b>es importante / necesario / posible / mejor que</b> + subjunctive.</p>
<p class="tip">💡 For a general statement use the infinitive: <i>Es importante dormir bien.</i></p>`
      },
      fill: [
        ['Me alegra que ___ aquí. (estar, tú)', 'estés', ['estés', 'estás', 'estar'], 'I\'m glad you are here.'],
        ['No creo que ella ___ razón. (tener)', 'tenga', ['tenga', 'tiene', 'tendrá'], 'I don\'t think she is right.'],
        ['Creo que él ___ en casa. (estar)', 'está', ['está', 'esté', 'estar'], 'I think he is at home.'],
        ['Es importante que ___ agua. (beber, nosotros)', 'bebamos', ['bebamos', 'bebemos', 'beber'], 'It\'s important that we drink water.'],
        ['Me molesta que la gente ___ tanto ruido. (hacer)', 'haga', ['haga', 'hace', 'hacer'], 'It bothers me that people make so much noise.'],
        ['Dudo que ellos ___ a tiempo. (llegar)', 'lleguen', ['lleguen', 'llegan', 'llegarán'], 'I doubt they will arrive on time.']
      ],
      sents: [
        ['Me alegra que estés aquí.', 'I\'m glad you are here.'],
        ['No creo que llueva mañana.', 'I don\'t think it will rain tomorrow.'],
        ['Es necesario que hablemos.', 'We need to talk.'],
        ['Me preocupa que no duermas bien.', 'It worries me that you don\'t sleep well.'],
        ['Dudo que lleguen a tiempo.', 'I doubt they will arrive on time.']
      ]
    },
    {
      id: 'b1-4', icon: '🍳', title: 'Recipes & Instructions', es: 'Recetas',
      words: [
        ['la receta', 'recipe'], ['cortar', 'to cut'], ['mezclar', 'to mix'], ['añadir', 'to add'],
        ['hervir', 'to boil'], ['freír', 'to fry'], ['el horno', 'oven'], ['la sal', 'salt'],
        ['el aceite', 'oil'], ['la cebolla', 'onion'], ['el ajo', 'garlic'], ['la cucharada', 'spoonful']
      ],
      grammar: {
        title: 'The imperative (commands)',
        html: `<p>Affirmative <b>tú</b> command = 3rd person singular present: habla, come, escribe.</p>
<table class="g"><tr><th>Infinitive</th><th>tú command</th></tr>
<tr><td>tener</td><td><b>ten</b></td></tr><tr><td>venir</td><td><b>ven</b></td></tr>
<tr><td>poner</td><td><b>pon</b></td></tr><tr><td>hacer</td><td><b>haz</b></td></tr>
<tr><td>decir</td><td><b>di</b></td></tr><tr><td>salir</td><td><b>sal</b></td></tr>
<tr><td>ser</td><td><b>sé</b></td></tr><tr><td>ir</td><td><b>ve</b></td></tr></table>
<p><b>Negative</b> commands and <b>usted</b> commands use the subjunctive: <i>No hables. — Hable usted.</i></p>
<p>Pronouns attach to the end of affirmative commands but go before negative ones: <i>Dí<b>melo</b>. — No <b>me lo</b> digas.</i></p>`
      },
      fill: [
        ['___ la cebolla en trozos pequeños. (cortar, tú)', 'Corta', ['Corta', 'Corte', 'Cortas'], 'Cut the onion into small pieces.'],
        ['No ___ demasiada sal. (añadir, tú)', 'añadas', ['añadas', 'añade', 'añadir'], 'Don\'t add too much salt.'],
        ['___ aquí, por favor. (venir, tú)', 'Ven', ['Ven', 'Viene', 'Vengas'], 'Come here, please.'],
        ['___ la mesa. (poner, tú)', 'Pon', ['Pon', 'Pone', 'Ponga'], 'Set the table.'],
        ['Señor, ___ asiento. (tomar, usted)', 'tome', ['tome', 'toma', 'tomes'], 'Sir, take a seat.'],
        ['___ los deberes ahora. (hacer, tú)', 'Haz', ['Haz', 'Hace', 'Haga'], 'Do your homework now.']
      ],
      sents: [
        ['Corta la cebolla y el ajo.', 'Cut the onion and the garlic.'],
        ['Añade una cucharada de aceite.', 'Add a spoonful of oil.'],
        ['No pongas demasiada sal.', 'Don\'t put in too much salt.'],
        ['Mezcla todo y mételo en el horno.', 'Mix everything and put it in the oven.'],
        ['Hierve el agua durante diez minutos.', 'Boil the water for ten minutes.']
      ]
    },
    {
      id: 'b1-5', icon: '💼', title: 'The World of Work', es: 'El trabajo',
      words: [
        ['la empresa', 'company'], ['el jefe', 'boss'], ['el sueldo', 'salary'], ['la entrevista', 'interview'],
        ['el currículum', 'CV / résumé'], ['contratar', 'to hire'], ['despedir', 'to fire / dismiss'],
        ['la reunión', 'meeting'], ['el compañero', 'colleague'], ['la experiencia', 'experience'],
        ['jubilarse', 'to retire'], ['el puesto', 'position / job']
      ],
      grammar: {
        title: 'Pluscuamperfecto (past perfect)',
        html: `<p>For actions that happened <b>before</b> another past event: <b>había</b> + participle ("had done").</p>
<table class="g"><tr><th>Person</th><th>haber</th><th>+ participle</th></tr>
<tr><td>yo</td><td><b>había</b></td><td rowspan="6">trabajado<br>comido<br>hecho</td></tr>
<tr><td>tú</td><td><b>habías</b></td></tr><tr><td>él / ella</td><td><b>había</b></td></tr>
<tr><td>nosotros</td><td><b>habíamos</b></td></tr><tr><td>vosotros</td><td><b>habíais</b></td></tr>
<tr><td>ellos</td><td><b>habían</b></td></tr></table>
<p class="ex">Cuando llegué, la reunión ya <b>había empezado</b>. — When I arrived, the meeting had already started.</p>
<p class="tip">💡 Common companions: <i>ya</i> (already), <i>todavía no</i> (not yet), <i>nunca antes</i> (never before).</p>`
      },
      fill: [
        ['Cuando llegué, la reunión ya ___ empezado.', 'había', ['había', 'ha', 'habían'], 'When I arrived, the meeting had already started.'],
        ['Nunca ___ trabajado en una empresa tan grande. (yo)', 'había', ['había', 'habías', 'he'], 'I had never worked in such a big company.'],
        ['Ellos ya ___ contratado a otra persona.', 'habían', ['habían', 'había', 'han'], 'They had already hired someone else.'],
        ['¿___ hecho una entrevista antes? (tú)', 'Habías', ['Habías', 'Había', 'Habíamos'], 'Had you done an interview before?'],
        ['Nosotros ya ___ terminado el proyecto.', 'habíamos', ['habíamos', 'habían', 'hemos'], 'We had already finished the project.'],
        ['Me dijo que había ___ su trabajo. (perder)', 'perdido', ['perdido', 'perdió', 'perder'], 'He told me he had lost his job.']
      ],
      sents: [
        ['Cuando llegué, la reunión ya había empezado.', 'When I arrived, the meeting had already started.'],
        ['Nunca había tenido un jefe tan amable.', 'I had never had such a kind boss.'],
        ['La empresa ya había contratado a otra persona.', 'The company had already hired someone else.'],
        ['Envié mi currículum a tres empresas.', 'I sent my CV to three companies.'],
        ['Mi compañero se jubiló el año pasado.', 'My colleague retired last year.']
      ]
    },
    {
      id: 'b1-6', icon: '🤝', title: 'Advice & Requests', es: 'Consejos',
      words: [
        ['aconsejar', 'to advise'], ['el consejo', 'piece of advice'], ['en tu lugar', 'in your place'],
        ['me gustaría', 'I would like'], ['la ayuda', 'help'], ['ayudar', 'to help'], ['el problema', 'problem'],
        ['la solución', 'solution'], ['deber', 'should / must'], ['sugerir', 'to suggest'], ['amable', 'kind'],
        ['la propuesta', 'proposal']
      ],
      grammar: {
        title: 'The conditional (would)',
        html: `<p>Infinitive + <b>-ía</b> endings: hablar<b>ía</b>, hablar<b>ías</b>, hablar<b>ía</b>, hablar<b>íamos</b>, hablar<b>íais</b>, hablar<b>ían</b>.</p>
<p>Irregular stems are the same as the future: <b>tendr</b>ía, <b>har</b>ía, <b>podr</b>ía, <b>dir</b>ía, <b>saldr</b>ía, <b>vendr</b>ía, <b>querr</b>ía, <b>sabr</b>ía.</p>
<table class="g"><tr><th>Use</th><th>Example</th></tr>
<tr><td>Polite request</td><td>¿Podría ayudarme?</td></tr>
<tr><td>Advice</td><td>Yo en tu lugar, hablaría con él.</td></tr>
<tr><td>Hypothesis</td><td>Viviría en la playa.</td></tr>
<tr><td>Future in the past</td><td>Dijo que vendría.</td></tr></table>`
      },
      fill: [
        ['Me ___ un café, por favor. (gustar)', 'gustaría', ['gustaría', 'gusta', 'gustará'], 'I would like a coffee, please.'],
        ['¿___ ayudarme? (poder, usted)', 'Podría', ['Podría', 'Podrías', 'Puede'], 'Could you help me?'],
        ['Yo en tu lugar, ___ con ella. (hablar)', 'hablaría', ['hablaría', 'hablaré', 'hablo'], 'If I were you, I would talk to her.'],
        ['Tú ___ ir al médico. (deber)', 'deberías', ['deberías', 'deberíamos', 'debería'], 'You should go to the doctor.'],
        ['¿Qué ___ tú? (hacer)', 'harías', ['harías', 'hacerías', 'haría'], 'What would you do?'],
        ['Nosotros ___ más tiempo, pero trabajamos mucho. (tener)', 'tendríamos', ['tendríamos', 'teneríamos', 'tendremos'], 'We would have more time, but we work a lot.']
      ],
      sents: [
        ['Me gustaría hablar con el director.', 'I would like to speak to the director.'],
        ['¿Podría ayudarme, por favor?', 'Could you help me, please?'],
        ['Yo en tu lugar, buscaría otra solución.', 'If I were you, I would look for another solution.'],
        ['Deberías descansar más.', 'You should rest more.'],
        ['¿Qué harías con un millón de euros?', 'What would you do with a million euros?']
      ]
    },
    {
      id: 'b1-7', icon: '🌍', title: 'The Environment', es: 'El medio ambiente',
      words: [
        ['el medio ambiente', 'environment'], ['la contaminación', 'pollution'], ['reciclar', 'to recycle'],
        ['la basura', 'rubbish'], ['el bosque', 'forest'], ['el río', 'river'], ['el clima', 'climate'],
        ['la energía', 'energy'], ['proteger', 'to protect'], ['el planeta', 'planet'], ['la naturaleza', 'nature'],
        ['ahorrar', 'to save']
      ],
      grammar: {
        title: 'POR vs PARA',
        html: `<table class="g"><tr><th>PARA</th><th>POR</th></tr>
<tr><td>Purpose: <i>Estudio para aprender.</i></td><td>Cause: <i>Gracias por tu ayuda.</i></td></tr>
<tr><td>Destination: <i>Salgo para Madrid.</i></td><td>Through / around: <i>Paseo por el parque.</i></td></tr>
<tr><td>Deadline: <i>para el lunes</i></td><td>Time of day / duration: <i>por la mañana</i></td></tr>
<tr><td>Recipient: <i>Es para ti.</i></td><td>Means: <i>por teléfono</i></td></tr>
<tr><td>Opinion: <i>Para mí, es fácil.</i></td><td>Exchange / price: <i>Lo compré por diez euros.</i></td></tr></table>
<p class="tip">💡 <b>Para</b> looks ahead (goal); <b>por</b> looks back (reason) or through (path, means).</p>`
      },
      fill: [
        ['Reciclamos ___ proteger el planeta.', 'para', ['para', 'por', 'de'], 'We recycle to protect the planet.'],
        ['Gracias ___ tu ayuda.', 'por', ['por', 'para', 'de'], 'Thanks for your help.'],
        ['Este regalo es ___ ti.', 'para', ['para', 'por', 'a'], 'This present is for you.'],
        ['Paseamos ___ el bosque.', 'por', ['por', 'para', 'a'], 'We walk through the forest.'],
        ['Necesito el informe ___ el lunes.', 'para', ['para', 'por', 'en'], 'I need the report by Monday.'],
        ['Te llamo ___ teléfono.', 'por', ['por', 'para', 'con'], 'I\'ll call you by phone.']
      ],
      sents: [
        ['Reciclamos para proteger el planeta.', 'We recycle to protect the planet.'],
        ['La contaminación del río es un problema grave.', 'The pollution of the river is a serious problem.'],
        ['Paseamos por el bosque cada domingo.', 'We walk through the forest every Sunday.'],
        ['Tenemos que ahorrar energía.', 'We have to save energy.'],
        ['Gracias por cuidar la naturaleza.', 'Thank you for looking after nature.']
      ]
    },
    {
      id: 'b1-8', icon: '📱', title: 'Technology', es: 'La tecnología',
      words: [
        ['el ordenador', 'computer'], ['el móvil', 'mobile phone'], ['la pantalla', 'screen'], ['descargar', 'to download'],
        ['la contraseña', 'password'], ['la red social', 'social network'], ['el mensaje', 'message'],
        ['enviar', 'to send'], ['buscar', 'to search / look for'], ['la aplicación', 'app'],
        ['conectarse', 'to connect'], ['guardar', 'to save / keep']
      ],
      grammar: {
        title: 'Relative pronouns',
        html: `<table class="g"><tr><th>Pronoun</th><th>Use</th><th>Example</th></tr>
<tr><td><b>que</b></td><td>most common (people & things)</td><td>El móvil que compré…</td></tr>
<tr><td><b>quien / quienes</b></td><td>people, usually after a preposition</td><td>la chica con quien hablé</td></tr>
<tr><td><b>donde</b></td><td>places</td><td>la ciudad donde nací</td></tr>
<tr><td><b>lo que</b></td><td>"what" (the thing that)</td><td>No entiendo lo que dices.</td></tr>
<tr><td><b>el / la / los / las que</b></td><td>after prepositions</td><td>el ordenador con el que trabajo</td></tr>
<tr><td><b>cuyo / cuya / cuyos / cuyas</b></td><td>"whose"</td><td>el hombre cuyo coche…</td></tr></table>
<p class="tip">💡 <b>Cuyo</b> agrees with the thing possessed: <i>la mujer cuyos hijos…</i></p>`
      },
      fill: [
        ['El móvil ___ compré es muy rápido.', 'que', ['que', 'quien', 'donde'], 'The phone (that) I bought is very fast.'],
        ['La chica con ___ hablé es mi prima.', 'quien', ['quien', 'que', 'cuya'], 'The girl I spoke to is my cousin.'],
        ['Esta es la ciudad ___ nací.', 'donde', ['donde', 'que', 'cuyo'], 'This is the city where I was born.'],
        ['No entiendo ___ dices.', 'lo que', ['lo que', 'que', 'cual'], 'I don\'t understand what you\'re saying.'],
        ['El hombre ___ coche es rojo vive aquí.', 'cuyo', ['cuyo', 'cuya', 'que'], 'The man whose car is red lives here.'],
        ['Los amigos con ___ viajé son de Chile.', 'quienes', ['quienes', 'quien', 'cuyos'], 'The friends I travelled with are from Chile.']
      ],
      sents: [
        ['El móvil que compré es muy rápido.', 'The phone I bought is very fast.'],
        ['No recuerdo mi contraseña.', 'I don\'t remember my password.'],
        ['Esta es la aplicación que uso cada día.', 'This is the app I use every day.'],
        ['Te envío el mensaje ahora mismo.', 'I\'ll send you the message right now.'],
        ['No entiendo lo que dices.', 'I don\'t understand what you\'re saying.']
      ]
    }
  ]
});
