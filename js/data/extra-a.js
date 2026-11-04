// Additional A1/A2 lessons and the final lesson order for each level.
window.COURSE_EXTRA = window.COURSE_EXTRA || [];
COURSE_EXTRA.push({
  level: 'a1',
  order: ['a1-1', 'a1-2', 'a1-11', 'a1-12', 'a1-3', 'a1-13', 'a1-4', 'a1-5', 'a1-14', 'a1-6', 'a1-7', 'a1-15', 'a1-16', 'a1-8', 'a1-17', 'a1-9', 'a1-10'],
  units: [
    {
      id: 'a1-11', icon: '🌎', title: 'Countries & Nationalities', es: 'Países y nacionalidades',
      words: [
        ['España', 'Spain'], ['México', 'Mexico'], ['Alemania', 'Germany'], ['Francia', 'France'], ['Italia', 'Italy'],
        ['Estados Unidos', 'United States'], ['español', 'Spanish (m.)'], ['inglés', 'English (m.)'], ['francés', 'French (m.)'],
        ['alemán', 'German (m.)'], ['el idioma', 'language'], ['la nacionalidad', 'nationality']
      ],
      grammar: {
        title: 'Nationality adjectives and SER DE',
        html: `<p>Nationalities are adjectives: they agree in gender and number and are written in <b>lower case</b>.</p>
<table class="g"><tr><th>Ending</th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
<tr><td>-o</td><td>italian<b>o</b></td><td>italian<b>a</b></td><td>italianos / italianas</td></tr>
<tr><td>consonant</td><td>español</td><td>español<b>a</b></td><td>españoles / españolas</td></tr>
<tr><td>-és / -án</td><td>inglés, alemán</td><td>ingl<b>esa</b>, alem<b>ana</b></td><td>ingleses, alemanes</td></tr>
<tr><td>-e / -í</td><td colspan="2">estadounidense, canadiense, marroquí (same form)</td><td>estadounidenses</td></tr></table>
<p class="tip">💡 The accent disappears in the feminine and plural: ingl<b>é</b>s → ingl<b>e</b>sa, ingl<b>e</b>ses.</p>
<p>Languages use the masculine form: <i>Hablo <b>inglés</b> y un poco de <b>español</b>.</i></p>
<p>Origin: <b>ser de</b> + country: <i>Soy de Irlanda. ¿De dónde eres?</i></p>`
      },
      fill: [
        ['Ella es ___. (Spanish)', 'española', ['española', 'español', 'españolas'], 'She is Spanish.'],
        ['Ellos son ___. (English)', 'ingleses', ['ingleses', 'inglés', 'inglesas'], 'They are English.'],
        ['Hablo ___ y alemán.', 'francés', ['francés', 'Francia', 'francesa'], 'I speak French and German.'],
        ['Marie es ___. (French)', 'francesa', ['francesa', 'francés', 'franceses'], 'Marie is French.'],
        ['¿De dónde ___ vosotros?', 'sois', ['sois', 'son', 'eres'], 'Where are you all from?'],
        ['Mis amigos son ___. (Mexican)', 'mexicanos', ['mexicanos', 'mexicanas', 'mexicano'], 'My friends are Mexican.']
      ],
      sents: [
        ['Soy inglés, pero vivo en España.', 'I am English, but I live in Spain.'],
        ['¿Qué idiomas hablas?', 'What languages do you speak?'],
        ['Mi madre es alemana.', 'My mother is German.'],
        ['Hablamos español y un poco de italiano.', 'We speak Spanish and a little Italian.'],
        ['¿De dónde son tus amigos?', 'Where are your friends from?'],
        ['Ella es de México.', 'She is from Mexico.']
      ]
    },
    {
      id: 'a1-12', icon: '🪪', title: 'Personal Information', es: 'Datos personales',
      words: [
        ['el nombre', 'first name'], ['el apellido', 'surname'], ['la dirección', 'address'], ['el número de teléfono', 'phone number'],
        ['el correo electrónico', 'email'], ['la edad', 'age'], ['casado', 'married'], ['soltero', 'single'],
        ['qué', 'what'], ['quién', 'who'], ['dónde', 'where'], ['cuándo', 'when']
      ],
      grammar: {
        title: 'Question words',
        html: `<table class="g"><tr><th>Spanish</th><th>English</th><th>Example</th></tr>
<tr><td><b>qué</b></td><td>what</td><td>¿Qué estudias?</td></tr>
<tr><td><b>quién / quiénes</b></td><td>who</td><td>¿Quién es?</td></tr>
<tr><td><b>cuál / cuáles</b></td><td>which / what</td><td>¿Cuál es tu dirección?</td></tr>
<tr><td><b>dónde</b> / adónde / de dónde</td><td>where / where to / where from</td><td>¿De dónde eres?</td></tr>
<tr><td><b>cuándo</b></td><td>when</td><td>¿Cuándo es la fiesta?</td></tr>
<tr><td><b>cómo</b></td><td>how</td><td>¿Cómo te llamas?</td></tr>
<tr><td><b>cuánto/a/os/as</b></td><td>how much / how many</td><td>¿Cuántos años tienes?</td></tr>
<tr><td><b>por qué</b></td><td>why</td><td>¿Por qué? — <b>Porque</b>… (because)</td></tr></table>
<p class="tip">💡 Question words always carry an accent: <i>qué, cómo, dónde</i>. Without the accent they are connectors: <i>que, como, donde</i>.</p>
<p><b>¿Qué es…?</b> asks for a definition; <b>¿Cuál es…?</b> picks one item from a set: <i>¿Cuál es tu número de teléfono?</i></p>`
      },
      fill: [
        ['¿___ te llamas?', 'Cómo', ['Cómo', 'Qué', 'Cuál'], 'What is your name?'],
        ['¿___ vives? —En Madrid.', 'Dónde', ['Dónde', 'Cuándo', 'Quién'], 'Where do you live? —In Madrid.'],
        ['¿___ es tu número de teléfono?', 'Cuál', ['Cuál', 'Qué', 'Cómo'], 'What is your phone number?'],
        ['¿___ hermanos tienes?', 'Cuántos', ['Cuántos', 'Cuántas', 'Cuánto'], 'How many brothers and sisters do you have?'],
        ['¿___ estudias español? —Porque me gusta.', 'Por qué', ['Por qué', 'Porque', 'Qué'], 'Why do you study Spanish? —Because I like it.'],
        ['¿___ es ese chico? —Es mi primo.', 'Quién', ['Quién', 'Qué', 'Cuál'], 'Who is that boy? —He is my cousin.']
      ],
      sents: [
        ['¿Cuál es tu apellido?', 'What is your surname?'],
        ['¿Dónde vives?', 'Where do you live?'],
        ['¿Cuál es tu correo electrónico?', 'What is your email address?'],
        ['¿Estás casado o soltero?', 'Are you married or single?'],
        ['¿Cuándo es tu cumpleaños?', 'When is your birthday?'],
        ['¿Por qué estudias español?', 'Why do you study Spanish?']
      ]
    },
    {
      id: 'a1-13', icon: '👩‍⚕️', title: 'Jobs', es: 'Las profesiones',
      words: [
        ['la enfermera', 'nurse (f.)'], ['el camarero', 'waiter'], ['el abogado', 'lawyer'], ['el ingeniero', 'engineer'],
        ['el policía', 'police officer'], ['el cocinero', 'cook / chef'], ['el estudiante', 'student'], ['el dependiente', 'shop assistant'],
        ['el conductor', 'driver'], ['el profesor', 'teacher'], ['la oficina', 'office'], ['el trabajo', 'work / job']
      ],
      grammar: {
        title: 'Talking about jobs',
        html: `<p>Asking: <b>¿A qué te dedicas?</b> / <b>¿En qué trabajas?</b> (What do you do?)</p>
<p>After <b>ser</b>, professions take <b>no article</b>: <i>Soy camarero.</i> (not <i>un camarero</i>). With an adjective the article returns: <i>Es <b>un</b> cocinero excelente.</i></p>
<table class="g"><tr><th>Pattern</th><th>Masculine</th><th>Feminine</th></tr>
<tr><td>-o → -a</td><td>camarero, abogado</td><td>camarera, abogada</td></tr>
<tr><td>consonant → +a</td><td>profesor, conductor</td><td>profesora, conductora</td></tr>
<tr><td>-ista / -e / -a (same)</td><td>el periodista, el estudiante, el policía</td><td>la periodista, la estudiante, la policía</td></tr></table>
<p><b>trabajar en</b> + place: <i>Trabajo en un hospital.</i> — <b>trabajar de / como</b> + role: <i>Trabaja de camarera.</i></p>`
      },
      fill: [
        ['Mi madre es ___. (lawyer)', 'abogada', ['abogada', 'abogado', 'una abogada'], 'My mother is a lawyer.'],
        ['¿A qué te ___?', 'dedicas', ['dedicas', 'dedica', 'trabajas'], 'What do you do for a living?'],
        ['Trabajo ___ un hospital.', 'en', ['en', 'de', 'a'], 'I work in a hospital.'],
        ['Ella trabaja ___ camarera.', 'de', ['de', 'en', 'por'], 'She works as a waitress.'],
        ['Luis es ___. (teacher)', 'profesor', ['profesor', 'un profesor', 'profesora'], 'Luis is a teacher.'],
        ['Ana y Eva son ___. (students)', 'estudiantes', ['estudiantes', 'estudiante', 'estudiantas'], 'Ana and Eva are students.']
      ],
      sents: [
        ['¿A qué te dedicas?', 'What do you do for a living?'],
        ['Soy ingeniero y trabajo en una oficina.', 'I am an engineer and I work in an office.'],
        ['Mi hermana es enfermera.', 'My sister is a nurse.'],
        ['El camarero trabaja por la noche.', 'The waiter works at night.'],
        ['Mi padre trabaja de conductor.', 'My father works as a driver.'],
        ['Es un cocinero excelente.', 'He is an excellent cook.']
      ]
    },
    {
      id: 'a1-14', icon: '🧑‍🦰', title: 'Describing People', es: 'Describir a personas',
      words: [
        ['el pelo', 'hair'], ['los ojos', 'eyes'], ['rubio', 'blond'], ['moreno', 'dark-haired / tanned'],
        ['delgado', 'slim'], ['gordo', 'fat'], ['joven', 'young'], ['viejo', 'old'],
        ['simpático', 'nice / friendly'], ['guapo', 'good-looking'], ['las gafas', 'glasses'], ['la barba', 'beard']
      ],
      grammar: {
        title: 'SER, TENER and LLEVAR for descriptions',
        html: `<table class="g"><tr><th>Verb</th><th>Use</th><th>Example</th></tr>
<tr><td><b>ser</b> + adjective</td><td>build, character</td><td>Es alto y simpático.</td></tr>
<tr><td><b>tener</b> + noun</td><td>features</td><td>Tiene el pelo largo / los ojos azules / barba.</td></tr>
<tr><td><b>llevar</b> + noun</td><td>things you wear</td><td>Lleva gafas / un vestido rojo.</td></tr></table>
<p><b>¿Cómo es?</b> = What is he/she like? (appearance, character) — <b>¿Cómo está?</b> = How is he/she? (state, health).</p>
<p>Softening: <b>un poco</b> + negative adjective: <i>Es un poco tímido.</i> Intensifying: <b>muy</b>: <i>Es muy guapa.</i></p>`
      },
      fill: [
        ['Mi hermano ___ alto y delgado.', 'es', ['es', 'tiene', 'lleva'], 'My brother is tall and slim.'],
        ['Ana ___ los ojos verdes.', 'tiene', ['tiene', 'es', 'lleva'], 'Ana has green eyes.'],
        ['Mi abuelo ___ gafas.', 'lleva', ['lleva', 'es', 'está'], 'My grandfather wears glasses.'],
        ['¿Cómo ___ tu profesora? —Es muy simpática.', 'es', ['es', 'está', 'tiene'], 'What is your teacher like? —She is very nice.'],
        ['Tiene el pelo ___. (long)', 'largo', ['largo', 'larga', 'largos'], 'He has long hair.'],
        ['Mis primas son ___. (blonde)', 'rubias', ['rubias', 'rubios', 'rubia'], 'My cousins are blonde.']
      ],
      sents: [
        ['Mi madre es morena y tiene los ojos azules.', 'My mother is dark-haired and has blue eyes.'],
        ['¿Cómo es tu novio?', 'What is your boyfriend like?'],
        ['Lleva gafas y tiene barba.', 'He wears glasses and has a beard.'],
        ['Mi perro es viejo pero muy simpático.', 'My dog is old but very friendly.'],
        ['Es un chico joven y guapo.', 'He is a young, good-looking guy.'],
        ['Mi hermana tiene el pelo largo y rubio.', 'My sister has long blonde hair.']
      ]
    },
    {
      id: 'a1-15', icon: '🎾', title: 'Free Time', es: 'El tiempo libre',
      words: [
        ['querer', 'to want / love'], ['poder', 'can / to be able to'], ['preferir', 'to prefer'], ['pedir', 'to order / ask for'],
        ['jugar', 'to play'], ['pensar', 'to think'], ['entender', 'to understand'], ['cerrar', 'to close'],
        ['encontrar', 'to find'], ['recordar', 'to remember'], ['el tiempo libre', 'free time'], ['el partido', 'match / game']
      ],
      grammar: {
        title: 'Stem-changing verbs (e→ie, o→ue, e→i, u→ue)',
        html: `<p>In many verbs the stressed stem vowel changes. The change does <b>not</b> happen in <b>nosotros</b> and <b>vosotros</b>.</p>
<table class="g"><tr><th></th><th>e → ie<br>querer</th><th>o → ue<br>poder</th><th>e → i<br>pedir</th><th>u → ue<br>jugar</th></tr>
<tr><td>yo</td><td>qu<b>ie</b>ro</td><td>p<b>ue</b>do</td><td>p<b>i</b>do</td><td>j<b>ue</b>go</td></tr>
<tr><td>tú</td><td>qu<b>ie</b>res</td><td>p<b>ue</b>des</td><td>p<b>i</b>des</td><td>j<b>ue</b>gas</td></tr>
<tr><td>él / ella</td><td>qu<b>ie</b>re</td><td>p<b>ue</b>de</td><td>p<b>i</b>de</td><td>j<b>ue</b>ga</td></tr>
<tr><td>nosotros</td><td>queremos</td><td>podemos</td><td>pedimos</td><td>jugamos</td></tr>
<tr><td>vosotros</td><td>queréis</td><td>podéis</td><td>pedís</td><td>jugáis</td></tr>
<tr><td>ellos</td><td>qu<b>ie</b>ren</td><td>p<b>ue</b>den</td><td>p<b>i</b>den</td><td>j<b>ue</b>gan</td></tr></table>
<p>More: e→ie: pensar, cerrar, empezar, entender, preferir. o→ue: dormir, volver, encontrar, recordar, costar. e→i: repetir, servir, seguir.</p>
<p class="tip">💡 Use the <b>Verbs</b> section to see the full table of any verb.</p>`
      },
      fill: [
        ['Yo ___ ir al cine. (querer)', 'quiero', ['quiero', 'quero', 'queremos'], 'I want to go to the cinema.'],
        ['¿___ ayudarme? (poder, tú)', 'Puedes', ['Puedes', 'Podes', 'Pueden'], 'Can you help me?'],
        ['Nosotros ___ el té. (preferir)', 'preferimos', ['preferimos', 'prefierimos', 'prefieren'], 'We prefer tea.'],
        ['Ella ___ una pizza. (pedir)', 'pide', ['pide', 'pede', 'piden'], 'She orders a pizza.'],
        ['Mis hijos ___ al fútbol. (jugar)', 'juegan', ['juegan', 'jugan', 'juega'], 'My children play football.'],
        ['La tienda ___ a las ocho. (cerrar)', 'cierra', ['cierra', 'cerra', 'cierran'], 'The shop closes at eight.']
      ],
      sents: [
        ['¿Quieres venir conmigo?', 'Do you want to come with me?'],
        ['No puedo salir esta noche.', 'I can\'t go out tonight.'],
        ['En mi tiempo libre juego al tenis.', 'In my free time I play tennis.'],
        ['Prefiero el café sin azúcar.', 'I prefer coffee without sugar.'],
        ['¿Qué piensas de esta película?', 'What do you think of this film?'],
        ['No encuentro mis llaves.', 'I can\'t find my keys.']
      ]
    },
    {
      id: 'a1-16', icon: '🛋️', title: 'At the Weekend', es: 'El fin de semana',
      words: [
        ['hacer', 'to do / make'], ['salir', 'to go out'], ['poner', 'to put / switch on'], ['traer', 'to bring'],
        ['oír', 'to hear'], ['saber', 'to know (facts)'], ['ver', 'to see / watch'], ['dar', 'to give'],
        ['decir', 'to say / tell'], ['la tele', 'TV'], ['los deberes', 'homework'], ['la verdad', 'truth']
      ],
      grammar: {
        title: 'Verbs irregular in the YO form',
        html: `<table class="g"><tr><th>Infinitive</th><th>yo</th><th>tú, él…</th></tr>
<tr><td>hacer</td><td><b>hago</b></td><td>haces, hace…</td></tr>
<tr><td>poner</td><td><b>pongo</b></td><td>pones, pone…</td></tr>
<tr><td>salir</td><td><b>salgo</b></td><td>sales, sale…</td></tr>
<tr><td>traer</td><td><b>traigo</b></td><td>traes, trae…</td></tr>
<tr><td>conocer</td><td><b>conozco</b></td><td>conoces, conoce…</td></tr>
<tr><td>saber</td><td><b>sé</b></td><td>sabes, sabe…</td></tr>
<tr><td>ver</td><td><b>veo</b></td><td>ves, ve…</td></tr>
<tr><td>dar</td><td><b>doy</b></td><td>das, da…</td></tr></table>
<p>Irregular <b>yo</b> + stem change: <b>tener</b> (tengo, tienes), <b>venir</b> (vengo, vienes), <b>decir</b> (digo, dices), <b>oír</b> (oigo, oyes).</p>
<p><b>Saber</b> = to know facts / how to do something (<i>Sé nadar</i>). <b>Conocer</b> = to know people or places (<i>Conozco Madrid</i>).</p>`
      },
      fill: [
        ['Los sábados ___ deporte. (hacer, yo)', 'hago', ['hago', 'hace', 'haco'], 'On Saturdays I do sport.'],
        ['Yo ___ con mis amigos. (salir)', 'salgo', ['salgo', 'salo', 'sale'], 'I go out with my friends.'],
        ['No ___ la respuesta. (saber, yo)', 'sé', ['sé', 'sabo', 'se'], 'I don\'t know the answer.'],
        ['___ a tu hermano. (conocer, yo)', 'Conozco', ['Conozco', 'Conoco', 'Conozo'], 'I know your brother.'],
        ['Yo siempre ___ la verdad. (decir)', 'digo', ['digo', 'dico', 'dice'], 'I always tell the truth.'],
        ['¿Qué ___ en la tele? (ver, tú)', 'ves', ['ves', 'veas', 'veo'], 'What are you watching on TV?']
      ],
      sents: [
        ['Los domingos no hago nada.', 'On Sundays I don\'t do anything.'],
        ['Salgo de casa a las ocho.', 'I leave home at eight.'],
        ['No sé dónde está la estación.', 'I don\'t know where the station is.'],
        ['Conozco un restaurante muy bueno.', 'I know a very good restaurant.'],
        ['Siempre pongo la tele por la noche.', 'I always put the TV on at night.'],
        ['Traigo el postre para la cena.', 'I\'m bringing dessert for dinner.']
      ]
    },
    {
      id: 'a1-17', icon: '⛅', title: 'Weather & Seasons', es: 'El tiempo',
      words: [
        ['hace calor', 'it\'s hot'], ['hace frío', 'it\'s cold'], ['hace sol', 'it\'s sunny'], ['llueve', 'it\'s raining'],
        ['nieva', 'it\'s snowing'], ['el viento', 'wind'], ['la primavera', 'spring'], ['el verano', 'summer'],
        ['el otoño', 'autumn'], ['el invierno', 'winter'], ['nublado', 'cloudy'], ['el mes', 'month']
      ],
      grammar: {
        title: 'Talking about the weather',
        html: `<table class="g"><tr><th>Structure</th><th>Examples</th></tr>
<tr><td><b>hace</b> + noun</td><td>hace calor / frío / sol / viento / buen tiempo / mal tiempo</td></tr>
<tr><td>weather verbs</td><td>llover → <b>llueve</b>, nevar → <b>nieva</b></td></tr>
<tr><td><b>está</b> + adjective</td><td>está nublado / despejado</td></tr>
<tr><td><b>hay</b> + noun</td><td>hay niebla (fog), hay tormenta (storm)</td></tr></table>
<p><b>muy</b> goes with adjectives, <b>mucho</b> with nouns: <i>Está <b>muy</b> nublado</i> but <i>Hace <b>mucho</b> calor</i>.</p>
<p>Months are lower case: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. "In July" = <b>en</b> julio; "in winter" = <b>en</b> invierno.</p>`
      },
      fill: [
        ['Hoy ___ mucho calor.', 'hace', ['hace', 'está', 'es'], 'It\'s very hot today.'],
        ['En invierno ___ mucho en la montaña. (nevar)', 'nieva', ['nieva', 'neva', 'nevan'], 'In winter it snows a lot in the mountains.'],
        ['El cielo ___ nublado.', 'está', ['está', 'hace', 'es'], 'The sky is cloudy.'],
        ['Hace ___ frío. (very)', 'mucho', ['mucho', 'muy', 'mucha'], 'It\'s very cold.'],
        ['Está ___ nublado. (very)', 'muy', ['muy', 'mucho', 'mucha'], 'It\'s very cloudy.'],
        ['Mi cumpleaños es ___ agosto.', 'en', ['en', 'a', 'de'], 'My birthday is in August.']
      ],
      sents: [
        ['¿Qué tiempo hace hoy?', 'What is the weather like today?'],
        ['En verano hace mucho calor en Sevilla.', 'In summer it\'s very hot in Seville.'],
        ['Llueve mucho en otoño.', 'It rains a lot in autumn.'],
        ['Hoy hace sol pero hace viento.', 'Today it\'s sunny but windy.'],
        ['Mi estación favorita es la primavera.', 'My favourite season is spring.'],
        ['En enero nieva en las montañas.', 'In January it snows in the mountains.']
      ]
    }
  ]
});

COURSE_EXTRA.push({
  level: 'a2',
  order: ['a2-9', 'a2-1', 'a2-2', 'a2-3', 'a2-16', 'a2-13', 'a2-4', 'a2-5', 'a2-11', 'a2-6', 'a2-10', 'a2-15', 'a2-7', 'a2-12', 'a2-14', 'a2-8'],
  units: [
    {
      id: 'a2-9', icon: '📞', title: 'Right Now', es: 'Ahora mismo',
      words: [
        ['ahora mismo', 'right now'], ['en este momento', 'at the moment'], ['la llamada', 'phone call'], ['llamar por teléfono', 'to phone'],
        ['ocupado', 'busy'], ['charlar', 'to chat'], ['ducharse', 'to have a shower'], ['ver la tele', 'to watch TV'],
        ['hacer los deberes', 'to do homework'], ['pasear', 'to go for a walk'], ['esperar el autobús', 'to wait for the bus'], ['durante', 'during / for']
      ],
      grammar: {
        title: 'ESTAR + gerund (present continuous)',
        html: `<p>For actions <b>in progress right now</b>: <b>estar</b> + gerund. <i>Estoy comiendo.</i> (I'm eating.)</p>
<table class="g"><tr><th>Verb type</th><th>Gerund</th></tr>
<tr><td>-ar</td><td>habl<b>ando</b></td></tr><tr><td>-er / -ir</td><td>com<b>iendo</b>, viv<b>iendo</b></td></tr>
<tr><td>vowel + -er/-ir</td><td>leer → le<b>yendo</b>, oír → o<b>yendo</b>, traer → tra<b>yendo</b></td></tr>
<tr><td>-ir stem changers</td><td>dormir → d<b>u</b>rmiendo, pedir → p<b>i</b>diendo, decir → d<b>i</b>ciendo</td></tr>
<tr><td>irregular</td><td>ir → <b>yendo</b>, poder → <b>pudiendo</b></td></tr></table>
<p>Pronouns go before <i>estar</i> or attached to the gerund (with an accent): <i><b>Me</b> estoy duchando</i> = <i>Estoy duch<b>á</b>ndo<b>me</b></i>.</p>
<p class="tip">💡 Spanish uses the simple present for habits: <i>Trabajo en un banco</i> (I work in a bank) vs <i>Estoy trabajando</i> (I'm working right now).</p>`
      },
      fill: [
        ['Ahora mismo ___ comiendo. (yo)', 'estoy', ['estoy', 'soy', 'estamos'], 'Right now I am eating.'],
        ['¿Qué estás ___? (hacer)', 'haciendo', ['haciendo', 'hacendo', 'hecho'], 'What are you doing?'],
        ['Los niños están ___. (dormir)', 'durmiendo', ['durmiendo', 'dormiendo', 'dormido'], 'The children are sleeping.'],
        ['Ella está ___ un libro. (leer)', 'leyendo', ['leyendo', 'leiendo', 'leído'], 'She is reading a book.'],
        ['No puedo hablar, me estoy ___. (duchar)', 'duchando', ['duchando', 'duchiendo', 'duchado'], 'I can\'t talk, I\'m having a shower.'],
        ['Mi madre está ___ con la vecina. (charlar)', 'charlando', ['charlando', 'charlado', 'charla'], 'My mother is chatting with the neighbour.']
      ],
      sents: [
        ['¿Qué estás haciendo ahora mismo?', 'What are you doing right now?'],
        ['Estoy viendo la tele con mi hermano.', 'I\'m watching TV with my brother.'],
        ['No puede hablar porque está ocupado.', 'He can\'t talk because he\'s busy.'],
        ['Estamos esperando el autobús.', 'We are waiting for the bus.'],
        ['Los niños están haciendo los deberes.', 'The children are doing their homework.'],
        ['Te llamo luego, estoy conduciendo.', 'I\'ll call you later, I\'m driving.']
      ]
    },
    {
      id: 'a2-10', icon: '🎁', title: 'Gifts & Celebrations', es: 'Regalos',
      words: [
        ['el regalo', 'present / gift'], ['regalar', 'to give (as a present)'], ['la Navidad', 'Christmas'], ['la tarta', 'cake'],
        ['las flores', 'flowers'], ['el anillo', 'ring'], ['el perfume', 'perfume'], ['envolver', 'to wrap'],
        ['la sorpresa', 'surprise'], ['el santo', 'name day'], ['felicitar', 'to congratulate'], ['¡Felicidades!', 'Congratulations! / Happy birthday!']
      ],
      grammar: {
        title: 'Indirect object pronouns and double pronouns',
        html: `<p>Indirect object = <b>to / for</b> whom: <b>me, te, le, nos, os, les</b>.</p>
<p class="ex"><b>Le</b> doy un regalo a mi madre. — I give my mother a present. (Spanish often repeats: <i>le … a mi madre</i>.)</p>
<p><b>Two pronouns</b>: indirect goes <b>before</b> direct: <i>Me <b>lo</b> da.</i> (He gives it to me.)</p>
<p><b>le / les + lo, la, los, las → se</b>: <i>Le doy el libro → <b>Se lo</b> doy.</i> (never <i>le lo</i>)</p>
<table class="g"><tr><th>Position</th><th>Example</th></tr>
<tr><td>before a conjugated verb</td><td>Te lo voy a dar.</td></tr>
<tr><td>attached to infinitive / gerund</td><td>Voy a dár<b>telo</b>. Estoy envolviéndo<b>selo</b>.</td></tr>
<tr><td>attached to affirmative command</td><td>Dá<b>melo</b>. (but: No me lo des.)</td></tr></table>`
      },
      fill: [
        ['___ doy un regalo a mi madre.', 'Le', ['Le', 'La', 'Lo'], 'I give my mother a present.'],
        ['¿Me prestas el libro? —Sí, te ___ presto.', 'lo', ['lo', 'le', 'la'], 'Will you lend me the book? —Yes, I\'ll lend it to you.'],
        ['¿Las flores a Ana? Sí, ___ las regalé.', 'se', ['se', 'le', 'les'], 'The flowers for Ana? Yes, I gave them to her.'],
        ['A mis padres ___ envío una postal.', 'les', ['les', 'los', 'le'], 'I send my parents a postcard.'],
        ['¿Nos traes la tarta? —Sí, ___ la traigo.', 'os', ['os', 'nos', 'les'], 'Will you bring us the cake? —Yes, I\'ll bring it to you.'],
        ['El regalo, voy a ___ mañana. (dar + to him + it)', 'dárselo', ['dárselo', 'darlelo', 'dárlelo'], 'The present — I\'m going to give it to him tomorrow.']
      ],
      sents: [
        ['Le compré un perfume a mi novia.', 'I bought my girlfriend a perfume.'],
        ['¿Quién te regaló ese anillo?', 'Who gave you that ring?'],
        ['Se lo voy a decir mañana.', 'I\'m going to tell him tomorrow.'],
        ['Mis abuelos nos mandan flores por Navidad.', 'My grandparents send us flowers at Christmas.'],
        ['¡Felicidades! Esta tarta es para ti.', 'Happy birthday! This cake is for you.'],
        ['No se lo digas, es una sorpresa.', 'Don\'t tell him, it\'s a surprise.']
      ]
    },
    {
      id: 'a2-11', icon: '🍽️', title: 'At the Restaurant', es: 'En el restaurante',
      words: [
        ['la carta', 'menu'], ['el primer plato', 'starter / first course'], ['el segundo plato', 'main course'], ['el postre', 'dessert'],
        ['la cuenta', 'bill / check'], ['la propina', 'tip'], ['el vaso', 'glass'], ['la botella', 'bottle'],
        ['el tenedor', 'fork'], ['el cuchillo', 'knife'], ['la cuchara', 'spoon'], ['la servilleta', 'napkin']
      ],
      grammar: {
        title: 'Polite requests and quantities',
        html: `<table class="g"><tr><th>Request</th><th>Meaning</th></tr>
<tr><td>¿Me trae…? / ¿Nos trae…?</td><td>Could you bring me / us…?</td></tr>
<tr><td>¿Me pone…? (Spain)</td><td>Could I have…?</td></tr>
<tr><td>Quisiera… / Querría…</td><td>I would like…</td></tr>
<tr><td>Para mí, … / De primero, … de segundo, …</td><td>For me… / For starter… for main…</td></tr></table>
<p>Quantifiers agree with the noun: <b>mucho/a/os/as</b>, <b>poco/a/os/as</b>, <b>demasiado/a/os/as</b> (too much / many), <b>bastante(s)</b> (quite a lot / enough).</p>
<p><b>otro / otra</b> = another — never <i>un otro</i>: <i>¿Me trae <b>otra</b> cerveza?</i></p>
<p><b>un poco de</b> + uncountable: <i>un poco de pan</i>. <b>mí</b> (with accent) after prepositions: <i>para mí</i>.</p>`
      },
      fill: [
        ['¿Me ___ la cuenta, por favor? (traer, usted)', 'trae', ['trae', 'traes', 'traigo'], 'Could you bring me the bill, please?'],
        ['Para ___, una ensalada.', 'mí', ['mí', 'mi', 'yo'], 'For me, a salad.'],
        ['¿Me trae ___ cerveza, por favor?', 'otra', ['otra', 'una otra', 'otro'], 'Could you bring me another beer, please?'],
        ['Hay ___ sal en la sopa. (too much)', 'demasiada', ['demasiada', 'demasiado', 'demasiadas'], 'There is too much salt in the soup.'],
        ['Quiero un ___ de agua.', 'vaso', ['vaso', 'vidrio', 'taza'], 'I\'d like a glass of water.'],
        ['Tenemos ___ tiempo. (little)', 'poco', ['poco', 'poca', 'pocos'], 'We have little time.']
      ],
      sents: [
        ['¿Nos trae la carta, por favor?', 'Could you bring us the menu, please?'],
        ['De primero quiero sopa y de segundo pescado.', 'For starter I\'d like soup and for main course fish.'],
        ['¿Qué hay de postre?', 'What is there for dessert?'],
        ['La cuenta, por favor.', 'The bill, please.'],
        ['¿Me trae otro tenedor? Este está sucio.', 'Could you bring me another fork? This one is dirty.'],
        ['Dejamos una propina para el camarero.', 'We leave a tip for the waiter.']
      ]
    },
    {
      id: 'a2-12', icon: '🚆', title: 'Transport', es: 'Los transportes',
      words: [
        ['el tren', 'train'], ['el autobús', 'bus'], ['el metro', 'underground / subway'], ['la bicicleta', 'bicycle'],
        ['el barco', 'boat / ship'], ['el aeropuerto', 'airport'], ['el andén', 'platform'], ['la parada', 'stop'],
        ['el horario', 'timetable'], ['ida y vuelta', 'return (ticket)'], ['el asiento', 'seat'], ['perder el tren', 'to miss the train']
      ],
      grammar: {
        title: 'Indefinite words and negation',
        html: `<table class="g"><tr><th>Positive</th><th>Negative</th></tr>
<tr><td><b>algo</b> (something)</td><td><b>nada</b> (nothing)</td></tr>
<tr><td><b>alguien</b> (someone)</td><td><b>nadie</b> (nobody)</td></tr>
<tr><td><b>algún / alguno/a/os/as</b> (some, any)</td><td><b>ningún / ninguno/a</b> (no, none)</td></tr>
<tr><td><b>siempre</b> (always)</td><td><b>nunca / jamás</b> (never)</td></tr>
<tr><td><b>también</b> (also)</td><td><b>tampoco</b> (neither)</td></tr></table>
<p>Spanish uses <b>double negation</b>: <i><b>No</b> hay <b>nadie</b>. <b>No</b> quiero <b>nada</b>.</i></p>
<p>If the negative word comes <b>before</b> the verb, drop <i>no</i>: <i><b>Nadie</b> viene. <b>Nunca</b> viajo en barco.</i></p>
<p><b>algún / ningún</b> before a masculine singular noun: <i>algún asiento, ningún billete</i>. <i>Ninguno</i> is rarely plural.</p>`
      },
      fill: [
        ['¿Hay ___ en la estación? —No, no hay nadie.', 'alguien', ['alguien', 'algo', 'alguno'], 'Is there anyone at the station? —No, there\'s nobody.'],
        ['No tengo ___ billete.', 'ningún', ['ningún', 'ninguno', 'algún'], 'I don\'t have any ticket.'],
        ['No quiero ___, gracias.', 'nada', ['nada', 'algo', 'nadie'], 'I don\'t want anything, thanks.'],
        ['___ viajo en barco porque me mareo.', 'Nunca', ['Nunca', 'No nunca', 'Siempre no'], 'I never travel by boat because I get seasick.'],
        ['¿Tienes ___ pregunta?', 'alguna', ['alguna', 'algún', 'ninguna'], 'Do you have any questions?'],
        ['—No me gusta el metro. —A mí ___.', 'tampoco', ['tampoco', 'también', 'nunca'], '—I don\'t like the underground. —Me neither.']
      ],
      sents: [
        ['El tren sale del andén tres.', 'The train leaves from platform three.'],
        ['Quiero un billete de ida y vuelta a Toledo.', 'I want a return ticket to Toledo.'],
        ['No hay nadie en la parada del autobús.', 'There is nobody at the bus stop.'],
        ['¿Hay algún asiento libre?', 'Is there a free seat?'],
        ['Perdí el tren y llegué tarde.', 'I missed the train and arrived late.'],
        ['Nunca voy al trabajo en bicicleta.', 'I never go to work by bike.']
      ]
    },
    {
      id: 'a2-13', icon: '🎂', title: 'Dates & Life Events', es: 'Fechas y biografías',
      words: [
        ['enero', 'January'], ['febrero', 'February'], ['marzo', 'March'], ['abril', 'April'], ['mayo', 'May'], ['junio', 'June'],
        ['julio', 'July'], ['agosto', 'August'], ['septiembre', 'September'], ['octubre', 'October'], ['noviembre', 'November'], ['diciembre', 'December']
      ],
      grammar: {
        title: 'Dates, ordinals and HACE (ago / for)',
        html: `<p>Dates: <b>el</b> 5 <b>de</b> mayo <b>de</b> 1990. Years are read as numbers: 1990 = <i>mil novecientos noventa</i>, 2024 = <i>dos mil veinticuatro</i>.</p>
<p>Ordinals: primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo. Before a masculine noun: <b>primer</b>, <b>tercer</b> (<i>el tercer piso</i>).</p>
<table class="g"><tr><th>Structure</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>hace</b> + time (+ past)</td><td>ago</td><td>Me casé hace diez años.</td></tr>
<tr><td>present + <b>desde hace</b> + time</td><td>for (still true)</td><td>Vivo aquí desde hace dos años.</td></tr>
<tr><td><b>Hace</b> + time + <b>que</b> + present</td><td>for (still true)</td><td>Hace dos años que vivo aquí.</td></tr>
<tr><td><b>desde</b> + point in time</td><td>since</td><td>Vivo aquí desde 2020.</td></tr></table>`
      },
      fill: [
        ['Nací ___ 1995.', 'en', ['en', 'el', 'a'], 'I was born in 1995.'],
        ['Mi cumpleaños es el 3 ___ marzo.', 'de', ['de', 'en', 'a'], 'My birthday is on 3rd March.'],
        ['Me casé ___ diez años.', 'hace', ['hace', 'desde', 'por'], 'I got married ten years ago.'],
        ['Vivo aquí desde ___ dos años.', 'hace', ['hace', 'hay', 'por'], 'I have lived here for two years.'],
        ['Vivo en el ___ piso. (3rd)', 'tercer', ['tercer', 'tercero', 'tres'], 'I live on the third floor.'],
        ['Es la ___ vez que vengo. (1st)', 'primera', ['primera', 'primer', 'primero'], 'It\'s the first time I\'ve come.']
      ],
      sents: [
        ['Nací el doce de octubre de mil novecientos noventa.', 'I was born on the twelfth of October 1990.'],
        ['Picasso nació en Málaga en 1881.', 'Picasso was born in Málaga in 1881.'],
        ['Mis padres se casaron hace treinta años.', 'My parents got married thirty years ago.'],
        ['Trabajo en esta empresa desde hace cinco años.', 'I have been working at this company for five years.'],
        ['En agosto vamos de vacaciones.', 'In August we go on holiday.'],
        ['El primer día de clase fue en septiembre.', 'The first day of class was in September.']
      ]
    },
    {
      id: 'a2-14', icon: '🧹', title: 'Housework', es: 'Las tareas de casa',
      words: [
        ['las tareas de casa', 'housework'], ['barrer', 'to sweep'], ['fregar los platos', 'to wash the dishes'], ['planchar', 'to iron'],
        ['hacer la cama', 'to make the bed'], ['poner la lavadora', 'to put the washing machine on'], ['pasar la aspiradora', 'to vacuum'],
        ['sacar la basura', 'to take out the rubbish'], ['el suelo', 'floor'], ['sucio', 'dirty'], ['limpio', 'clean'], ['normalmente', 'normally']
      ],
      grammar: {
        title: 'Adverbs in -MENTE and frequency',
        html: `<p>Adverbs: <b>feminine</b> adjective + <b>-mente</b>: rápido → rápid<b>a</b>mente, tranquilo → tranquil<b>a</b>mente, fácil → fácilmente, normal → normalmente. The written accent stays: <i>rápidamente</i>.</p>
<p>Two adverbs together: only the last takes -mente: <i>clara y rápida<b>mente</b></i>.</p>
<table class="g"><tr><th>Frequency (most → least)</th></tr>
<tr><td>siempre · casi siempre · normalmente · a menudo · a veces · de vez en cuando · casi nunca · nunca</td></tr></table>
<p><b>una vez / dos veces + al día / a la semana / al mes / al año</b> · <b>todos los días</b> · <b>cada día</b></p>`
      },
      fill: [
        ['Hablas muy ___. (rápido)', 'rápidamente', ['rápidamente', 'rápidomente', 'rápidemente'], 'You speak very quickly.'],
        ['___ hago la cama por la mañana. (normal)', 'Normalmente', ['Normalmente', 'Normalamente', 'Normal'], 'I normally make the bed in the morning.'],
        ['Plancho dos veces ___ mes.', 'al', ['al', 'en el', 'del'], 'I iron twice a month.'],
        ['Friego los platos ___ los días.', 'todos', ['todos', 'cada', 'todas'], 'I wash the dishes every day.'],
        ['El examen fue ___ fácil. (sorprendente)', 'sorprendentemente', ['sorprendentemente', 'sorprendentamente', 'sorprendente'], 'The exam was surprisingly easy.'],
        ['Mi hermano ___ saca la basura. (almost never)', 'casi nunca', ['casi nunca', 'nunca casi', 'no casi'], 'My brother almost never takes out the rubbish.']
      ],
      sents: [
        ['Paso la aspiradora una vez a la semana.', 'I vacuum once a week.'],
        ['¿Quién friega los platos en tu casa?', 'Who washes the dishes in your house?'],
        ['El suelo de la cocina está sucio.', 'The kitchen floor is dirty.'],
        ['Normalmente pongo la lavadora los sábados.', 'I normally put the washing machine on on Saturdays.'],
        ['Odio planchar la ropa.', 'I hate ironing clothes.'],
        ['Mi hijo hace la cama todos los días.', 'My son makes the bed every day.']
      ]
    },
    {
      id: 'a2-15', icon: '🎒', title: 'Whose Is It?', es: '¿De quién es?',
      words: [
        ['la cartera', 'wallet'], ['el bolso', 'handbag'], ['el paraguas', 'umbrella'], ['el reloj', 'watch / clock'],
        ['la mochila', 'backpack'], ['el cargador', 'charger'], ['los auriculares', 'headphones'], ['el monedero', 'purse'],
        ['las gafas de sol', 'sunglasses'], ['el abrigo', 'coat'], ['la bufanda', 'scarf'], ['la oficina de objetos perdidos', 'lost property office']
      ],
      grammar: {
        title: 'Possessive pronouns and SER DE',
        html: `<table class="g"><tr><th>Owner</th><th>Masc.</th><th>Fem.</th></tr>
<tr><td>yo</td><td>mío / míos</td><td>mía / mías</td></tr>
<tr><td>tú</td><td>tuyo / tuyos</td><td>tuya / tuyas</td></tr>
<tr><td>él, ella, usted</td><td>suyo / suyos</td><td>suya / suyas</td></tr>
<tr><td>nosotros</td><td>nuestro / nuestros</td><td>nuestra / nuestras</td></tr>
<tr><td>vosotros</td><td>vuestro / vuestros</td><td>vuestra / vuestras</td></tr>
<tr><td>ellos, ustedes</td><td>suyo / suyos</td><td>suya / suyas</td></tr></table>
<p>Uses: <i>Es <b>mío</b>.</i> (It's mine.) — <i>Tu coche es rojo y <b>el mío</b> es azul.</i> — <i>un amigo <b>mío</b></i> (a friend of mine).</p>
<p><b>¿De quién es?</b> — <i>Es <b>de</b> Juan.</i> Because <i>suyo</i> is ambiguous, Spanish often says <i>es de él / de ella / de usted</i>.</p>`
      },
      fill: [
        ['¿De ___ es este paraguas?', 'quién', ['quién', 'qué', 'cuál'], 'Whose umbrella is this?'],
        ['Este bolso es ___. (mine)', 'mío', ['mío', 'mi', 'mía'], 'This bag is mine.'],
        ['—¿Es tuya la mochila? —Sí, es ___.', 'mía', ['mía', 'mío', 'mi'], '—Is the backpack yours? —Yes, it\'s mine.'],
        ['Mis gafas son negras; las ___ son rojas. (yours)', 'tuyas', ['tuyas', 'tuyos', 'tus'], 'My glasses are black; yours are red.'],
        ['Es un amigo ___. (of ours)', 'nuestro', ['nuestro', 'nuestros', 'nos'], 'He is a friend of ours.'],
        ['El reloj es ___ Pedro.', 'de', ['de', 'a', 'para'], 'The watch is Pedro\'s.']
      ],
      sents: [
        ['¿De quién es esta cartera?', 'Whose wallet is this?'],
        ['No es mía, es de mi hermana.', 'It\'s not mine, it\'s my sister\'s.'],
        ['He perdido mi paraguas otra vez.', 'I have lost my umbrella again.'],
        ['¿Estos auriculares son tuyos?', 'Are these headphones yours?'],
        ['Mi abrigo es azul y el tuyo es gris.', 'My coat is blue and yours is grey.'],
        ['Fui a la oficina de objetos perdidos.', 'I went to the lost property office.']
      ]
    },
    {
      id: 'a2-16', icon: '📔', title: 'Today vs Yesterday', es: 'Hoy y ayer',
      words: [
        ['esta mañana', 'this morning'], ['esta semana', 'this week'], ['este año', 'this year'], ['últimamente', 'lately'],
        ['hace un rato', 'a while ago'], ['el diario', 'diary / daily paper'], ['ocurrir', 'to happen'], ['por fin', 'finally'],
        ['de momento', 'for now'], ['acabar', 'to finish'], ['quedar con', 'to meet up with'], ['el examen', 'exam']
      ],
      grammar: {
        title: 'Pretérito perfecto or indefinido?',
        html: `<table class="g"><tr><th>Pretérito perfecto (he hablado)</th><th>Pretérito indefinido (hablé)</th></tr>
<tr><td>Time period that includes <b>now</b></td><td>Finished time period</td></tr>
<tr><td>hoy, esta mañana, esta semana, este año</td><td>ayer, anoche, el lunes, la semana pasada, en 2010</td></tr>
<tr><td>Experiences: alguna vez, nunca, ya, todavía no</td><td>hace dos días, el otro día</td></tr></table>
<p class="ex">Hoy <b>he trabajado</b> mucho. — Ayer <b>trabajé</b> mucho.</p>
<p class="tip">💡 This is the rule in <b>Spain</b>. In most of Latin America (and the Canary Islands) the indefinido is used for both: <i>Hoy trabajé mucho.</i> Both are correct.</p>`
      },
      fill: [
        ['Esta mañana ___ al médico. (ir, yo — Spain)', 'he ido', ['he ido', 'iba', 'iré'], 'This morning I\'ve been to the doctor.'],
        ['Ayer ___ con Laura. (quedar, yo)', 'quedé', ['quedé', 'he quedado', 'quedaba'], 'Yesterday I met up with Laura.'],
        ['Este año ___ mucho. (viajar, nosotros — Spain)', 'hemos viajado', ['hemos viajado', 'viajábamos', 'viajaremos'], 'This year we have travelled a lot.'],
        ['En 2015 ___ a Perú. (ir, ellos)', 'fueron', ['fueron', 'han ido', 'iban'], 'In 2015 they went to Peru.'],
        ['¿Ya ___ el examen? (terminar, tú — Spain)', 'has terminado', ['has terminado', 'terminabas', 'terminarás'], 'Have you finished the exam yet?'],
        ['La semana pasada ___ un examen. (tener, yo)', 'tuve', ['tuve', 'he tenido', 'tenía'], 'Last week I had an exam.']
      ],
      sents: [
        ['Hoy he trabajado mucho y estoy cansado.', 'Today I\'ve worked a lot and I\'m tired.'],
        ['Ayer fui al cine con mi hermana.', 'Yesterday I went to the cinema with my sister.'],
        ['¿Qué ha ocurrido? —Nada, de momento.', 'What has happened? —Nothing, for now.'],
        ['Por fin he acabado el proyecto.', 'I\'ve finally finished the project.'],
        ['El año pasado viajamos a Perú.', 'Last year we travelled to Peru.'],
        ['Últimamente no he dormido bien.', 'Lately I haven\'t slept well.']
      ]
    }
  ]
});
