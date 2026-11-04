// Graded reading texts. A1–B2 originals are written for this app;
// literary texts are public-domain works (spelling modernised where noted).
window.READINGS = [
  {
    id: 'r-a1-1', level: 'a1', icon: '👨‍👩‍👧‍👦', title: 'Mi familia',
    text: [
      'Hola, me llamo Lucía. Tengo veinticinco años y soy de Sevilla. Soy profesora de inglés.',
      'Mi familia no es muy grande. Mi padre se llama Antonio y mi madre se llama Rosa. Tengo un hermano, Pablo. Él tiene veinte años y es estudiante.',
      'También tenemos un perro. Se llama Tico y es pequeño y negro. ¡Es muy bonito!',
      'Los domingos comemos en casa de mis abuelos. Mi abuela cocina muy bien.'
    ],
    tr: [
      'Hello, my name is Lucía. I am twenty-five years old and I am from Seville. I am an English teacher.',
      'My family is not very big. My father is called Antonio and my mother is called Rosa. I have a brother, Pablo. He is twenty and he is a student.',
      'We also have a dog. His name is Tico and he is small and black. He is very pretty!',
      'On Sundays we eat at my grandparents\' house. My grandmother cooks very well.'
    ],
    gloss: [['profesora', 'teacher (f.)'], ['el perro', 'dog'], ['los domingos', 'on Sundays'], ['cocina', 'cooks']],
    quiz: [
      ['¿De dónde es Lucía?', 'De Sevilla', ['De Sevilla', 'De Madrid', 'De Valencia']],
      ['¿Cuántos años tiene Pablo?', 'Veinte', ['Veinte', 'Veinticinco', 'Diez']],
      ['¿Cómo es el perro?', 'Pequeño y negro', ['Pequeño y negro', 'Grande y blanco', 'Pequeño y blanco']],
      ['¿Quién cocina muy bien?', 'La abuela', ['La abuela', 'La madre', 'Lucía']]
    ]
  },
  {
    id: 'r-a1-2', level: 'a1', icon: '☕', title: 'Un día normal',
    text: [
      'Me llamo Javier y vivo en Madrid. Trabajo en un banco.',
      'Me levanto a las siete. Desayuno café con leche y pan con tomate. A las ocho voy al trabajo en metro.',
      'Como a las dos con mis compañeros en un restaurante cerca del banco. Por la tarde trabajo hasta las seis.',
      'Por la noche ceno en casa, leo un libro y a las once me acuesto. Los sábados no trabajo: voy al parque y juego al fútbol.'
    ],
    tr: [
      'My name is Javier and I live in Madrid. I work in a bank.',
      'I get up at seven. I have coffee with milk and bread with tomato for breakfast. At eight I go to work by underground.',
      'I have lunch at two with my colleagues in a restaurant near the bank. In the afternoon I work until six.',
      'In the evening I have dinner at home, read a book and at eleven I go to bed. On Saturdays I don\'t work: I go to the park and play football.'
    ],
    gloss: [['el metro', 'underground / subway'], ['los compañeros', 'colleagues'], ['ceno', 'I have dinner'], ['me acuesto', 'I go to bed']],
    quiz: [
      ['¿Dónde trabaja Javier?', 'En un banco', ['En un banco', 'En un restaurante', 'En una escuela']],
      ['¿Cómo va al trabajo?', 'En metro', ['En metro', 'En coche', 'A pie']],
      ['¿A qué hora come?', 'A las dos', ['A las dos', 'A las ocho', 'A las seis']],
      ['¿Qué hace los sábados?', 'Juega al fútbol', ['Juega al fútbol', 'Trabaja en el banco', 'Cocina para sus abuelos']]
    ]
  },
  {
    id: 'r-a2-1', level: 'a2', icon: '🌊', title: 'Mis vacaciones en Valencia',
    text: [
      'El verano pasado fui a Valencia con mi amiga Marta. Viajamos en tren desde Madrid y el viaje duró menos de dos horas.',
      'Estuvimos en un hotel pequeño cerca de la playa. Todas las mañanas nadábamos en el mar y por la tarde paseábamos por el centro histórico.',
      'Un día alquilamos unas bicicletas y fuimos al parque del Turia, un antiguo río convertido en jardín. ¡Fue precioso!',
      'Por supuesto, probamos la paella valenciana auténtica. Marta dice que es la mejor comida del mundo. Yo creo que tiene razón. Ha sido el mejor viaje de mi vida.'
    ],
    tr: [
      'Last summer I went to Valencia with my friend Marta. We travelled by train from Madrid and the journey took less than two hours.',
      'We stayed in a small hotel near the beach. Every morning we swam in the sea and in the afternoon we walked around the historic centre.',
      'One day we rented some bikes and went to the Turia park, an old river turned into a garden. It was beautiful!',
      'Of course, we tried authentic Valencian paella. Marta says it is the best food in the world. I think she is right. It has been the best trip of my life.'
    ],
    gloss: [['duró', 'lasted'], ['paseábamos', 'we used to walk'], ['antiguo', 'old / former'], ['por supuesto', 'of course']],
    quiz: [
      ['¿Cómo viajaron a Valencia?', 'En tren', ['En tren', 'En avión', 'En coche']],
      ['¿Dónde estaba el hotel?', 'Cerca de la playa', ['Cerca de la playa', 'En el centro', 'Cerca del río']],
      ['¿Qué es el parque del Turia?', 'Un antiguo río', ['Un antiguo río', 'Una playa', 'Un museo']],
      ['¿Qué piensa Marta de la paella?', 'Que es la mejor comida del mundo', ['Que es la mejor comida del mundo', 'Que es muy cara', 'Que no le gusta']]
    ]
  },
  {
    id: 'r-a2-2', level: 'a2', icon: '🏡', title: 'Cuando era niña',
    text: [
      'Cuando era niña, vivía con mis padres en un pueblo pequeño de Asturias. Nuestra casa tenía un jardín enorme con árboles de manzanas.',
      'No había muchos niños en el pueblo, pero yo tenía una vecina, Carmen, que era mi mejor amiga. Siempre jugábamos juntas después del colegio.',
      'En invierno hacía mucho frío y a menudo llovía. Entonces nos quedábamos en casa, leíamos cuentos y mi abuela nos preparaba chocolate caliente.',
      'Ahora vivo en Barcelona y trabajo en una oficina. Me gusta la ciudad, pero a veces echo de menos la tranquilidad de mi pueblo.'
    ],
    tr: [
      'When I was a girl, I lived with my parents in a small village in Asturias. Our house had a huge garden with apple trees.',
      'There weren\'t many children in the village, but I had a neighbour, Carmen, who was my best friend. We always played together after school.',
      'In winter it was very cold and it often rained. Then we stayed at home, read stories and my grandmother made us hot chocolate.',
      'Now I live in Barcelona and work in an office. I like the city, but sometimes I miss the peace and quiet of my village.'
    ],
    gloss: [['enorme', 'huge'], ['los cuentos', 'stories / tales'], ['echar de menos', 'to miss'], ['la tranquilidad', 'calm / peace']],
    quiz: [
      ['¿Dónde vivía de niña?', 'En un pueblo de Asturias', ['En un pueblo de Asturias', 'En Barcelona', 'En Madrid']],
      ['¿Quién era Carmen?', 'Su vecina y mejor amiga', ['Su vecina y mejor amiga', 'Su hermana', 'Su profesora']],
      ['¿Qué hacían cuando llovía?', 'Leían cuentos en casa', ['Leían cuentos en casa', 'Jugaban en el jardín', 'Iban al colegio']],
      ['¿Qué echa de menos ahora?', 'La tranquilidad del pueblo', ['La tranquilidad del pueblo', 'Su oficina', 'El frío']]
    ]
  },
  {
    id: 'r-b1-1', level: 'b1', icon: '💼', title: 'La entrevista',
    text: [
      'El lunes pasado tuve una entrevista de trabajo en una empresa de diseño. Estaba muy nerviosa porque era la primera vez que hacía una entrevista en español.',
      'Cuando llegué, la recepcionista me dijo que esperara unos minutos. Mientras esperaba, repasaba mentalmente las respuestas que había preparado la noche anterior.',
      'La directora fue muy amable. Me preguntó por mi experiencia y por qué quería trabajar con ellos. Le expliqué que había trabajado tres años en Londres y que me encantaba su forma de trabajar.',
      'Al final me dijo: «Nos gustaría que empezaras el mes que viene». ¡No me lo podía creer! Espero que todo salga bien en mi nuevo puesto.'
    ],
    tr: [
      'Last Monday I had a job interview at a design company. I was very nervous because it was the first time I was doing an interview in Spanish.',
      'When I arrived, the receptionist told me to wait a few minutes. While I was waiting, I went over in my head the answers I had prepared the night before.',
      'The director was very kind. She asked me about my experience and why I wanted to work with them. I explained that I had worked for three years in London and that I loved the way they worked.',
      'At the end she said to me: "We would like you to start next month." I couldn\'t believe it! I hope everything goes well in my new job.'
    ],
    gloss: [['repasar', 'to review / go over'], ['mentalmente', 'in one\'s head'], ['la forma de trabajar', 'way of working'], ['el puesto', 'post / job']],
    quiz: [
      ['¿Por qué estaba nerviosa?', 'Era su primera entrevista en español', ['Era su primera entrevista en español', 'Llegó tarde', 'No había preparado nada']],
      ['¿Qué hizo mientras esperaba?', 'Repasaba sus respuestas', ['Repasaba sus respuestas', 'Hablaba por teléfono', 'Leía el periódico']],
      ['¿Dónde había trabajado antes?', 'En Londres', ['En Londres', 'En Madrid', 'En París']],
      ['¿Cuándo va a empezar?', 'El mes que viene', ['El mes que viene', 'El lunes', 'El año que viene']]
    ]
  },
  {
    id: 'r-b1-2', level: 'b1', icon: '🥔', title: 'La tortilla de patatas',
    text: [
      'La tortilla de patatas es uno de los platos más populares de España. Se come en casa, en los bares y hasta en las excursiones al campo.',
      'Para hacerla necesitas cuatro patatas, una cebolla, seis huevos, aceite de oliva y sal. Pela las patatas y córtalas en trozos finos. Corta también la cebolla.',
      'Fríe las patatas y la cebolla a fuego lento durante unos veinte minutos. Mientras tanto, bate los huevos en un bol grande con un poco de sal. Después, mezcla todo y deja que repose unos minutos.',
      'Pon la mezcla en la sartén caliente. Cuando esté hecha por un lado, dale la vuelta con ayuda de un plato. ¡Ten cuidado de no quemarte! Hay un gran debate en España: ¿con cebolla o sin cebolla? Prueba las dos y decide tú.'
    ],
    tr: [
      'The Spanish omelette is one of the most popular dishes in Spain. It is eaten at home, in bars and even on trips to the countryside.',
      'To make it you need four potatoes, an onion, six eggs, olive oil and salt. Peel the potatoes and cut them into thin pieces. Cut the onion too.',
      'Fry the potatoes and the onion over a low heat for about twenty minutes. Meanwhile, beat the eggs in a big bowl with a little salt. Then mix everything and let it rest for a few minutes.',
      'Put the mixture in the hot frying pan. When it is cooked on one side, turn it over with the help of a plate. Be careful not to burn yourself! There is a big debate in Spain: with onion or without onion? Try both and decide for yourself.'
    ],
    gloss: [['pelar', 'to peel'], ['a fuego lento', 'over a low heat'], ['batir', 'to beat (eggs)'], ['la sartén', 'frying pan'], ['dar la vuelta', 'to turn over']],
    quiz: [
      ['¿Cuántos huevos necesitas?', 'Seis', ['Seis', 'Cuatro', 'Dos']],
      ['¿Cuánto tiempo se fríen las patatas?', 'Unos veinte minutos', ['Unos veinte minutos', 'Cinco minutos', 'Una hora']],
      ['¿Cómo se le da la vuelta a la tortilla?', 'Con un plato', ['Con un plato', 'Con un cuchillo', 'Con las manos']],
      ['¿Cuál es el gran debate?', 'Si lleva cebolla o no', ['Si lleva cebolla o no', 'Si lleva patatas o no', 'Si se come fría o caliente']]
    ]
  },
  {
    id: 'r-b2-1', level: 'b2', icon: '💻', title: 'El teletrabajo: ¿libertad o aislamiento?',
    text: [
      'En los últimos años, el teletrabajo ha pasado de ser una excepción a convertirse en una opción habitual para millones de personas. Muchas empresas descubrieron que sus empleados podían ser igual de productivos desde casa.',
      'Sus defensores destacan las ventajas: se ahorra el tiempo de los desplazamientos, se reduce la contaminación y es más fácil conciliar la vida laboral y familiar. Además, permite vivir lejos de las grandes ciudades, donde la vivienda es cada vez más cara.',
      'Sin embargo, no todo son ventajas. Algunos trabajadores afirman sentirse aislados y echan de menos el contacto con sus compañeros. Otros reconocen que les cuesta desconectar, ya que la frontera entre la oficina y el hogar se ha vuelto difusa.',
      'Quizá la solución esté en un modelo híbrido, que combine días en casa con días en la oficina. Lo importante es que cada empresa encuentre el equilibrio que mejor se adapte a sus necesidades y a las de su plantilla.'
    ],
    tr: [
      'In recent years, remote working has gone from being an exception to becoming a common option for millions of people. Many companies discovered that their employees could be just as productive from home.',
      'Its supporters highlight the advantages: time spent commuting is saved, pollution is reduced and it is easier to balance work and family life. Furthermore, it allows people to live far from big cities, where housing is increasingly expensive.',
      'However, it is not all advantages. Some workers say they feel isolated and miss contact with their colleagues. Others admit they find it hard to switch off, since the boundary between office and home has become blurred.',
      'Perhaps the solution lies in a hybrid model, combining days at home with days in the office. The important thing is that each company finds the balance that best suits its needs and those of its staff.'
    ],
    gloss: [['los desplazamientos', 'commuting / journeys'], ['conciliar', 'to reconcile / balance'], ['desconectar', 'to switch off'], ['difuso', 'blurred'], ['la plantilla', 'staff / workforce']],
    quiz: [
      ['¿Qué descubrieron muchas empresas?', 'Que los empleados eran igual de productivos en casa', ['Que los empleados eran igual de productivos en casa', 'Que el teletrabajo era más caro', 'Que nadie quería trabajar en casa']],
      ['¿Cuál de estas NO es una ventaja mencionada?', 'Un sueldo más alto', ['Un sueldo más alto', 'Menos contaminación', 'Ahorro de tiempo']],
      ['¿Qué problema mencionan algunos trabajadores?', 'Les cuesta desconectar', ['Les cuesta desconectar', 'No tienen ordenador', 'Trabajan menos horas']],
      ['¿Qué solución propone el texto?', 'Un modelo híbrido', ['Un modelo híbrido', 'Volver siempre a la oficina', 'Teletrabajar todos los días']]
    ]
  },
  {
    id: 'r-b2-2', level: 'b2', icon: '🚶', title: 'Caminante, no hay camino',
    author: 'Antonio Machado', source: 'Proverbios y cantares XXIX, «Campos de Castilla» (1912). Public domain.',
    poem: true,
    text: [
      'Caminante, son tus huellas\nel camino, y nada más;\ncaminante, no hay camino:\nse hace camino al andar.',
      'Al andar se hace camino,\ny al volver la vista atrás\nse ve la senda que nunca\nse ha de volver a pisar.',
      'Caminante, no hay camino,\nsino estelas en la mar.'
    ],
    tr: [
      'Traveller, your footprints\nare the road, and nothing more;\ntraveller, there is no road:\nthe road is made by walking.',
      'By walking the road is made,\nand when you look back\nyou see the path that\nyou will never tread again.',
      'Traveller, there is no road,\nonly wakes upon the sea.'
    ],
    gloss: [['el caminante', 'traveller / walker'], ['la huella', 'footprint'], ['al andar', 'by walking'], ['la senda', 'path'], ['pisar', 'to tread / step on'], ['la estela', 'wake (of a ship) / trail']],
    quiz: [
      ['Según el poema, ¿qué es el camino?', 'Las huellas del caminante', ['Las huellas del caminante', 'Una carretera antigua', 'El mar']],
      ['¿Cómo se hace el camino?', 'Al andar', ['Al andar', 'Al dormir', 'Al leer']],
      ['¿Qué se ve al volver la vista atrás?', 'Una senda que no se volverá a pisar', ['Una senda que no se volverá a pisar', 'Un camino nuevo', 'La casa del caminante']],
      ['¿Cuál es la idea principal?', 'La vida se construye mientras se vive', ['La vida se construye mientras se vive', 'Es mejor viajar en barco', 'Hay que seguir siempre el mismo camino']]
    ]
  },
  {
    id: 'r-b2-3', level: 'b2', icon: '🌹', title: 'Dos rimas de Bécquer',
    author: 'Gustavo Adolfo Bécquer', source: 'Rimas XXI y XXIII (1871). Public domain; spelling modernised.',
    poem: true,
    text: [
      '¿Qué es poesía?, dices mientras clavas\nen mi pupila tu pupila azul.\n¿Qué es poesía? ¿Y tú me lo preguntas?\nPoesía... eres tú.',
      'Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡yo no sé\nqué te diera por un beso!'
    ],
    tr: [
      'What is poetry?, you say as you fix\nyour blue pupil on mine.\nWhat is poetry? And you are asking me?\nPoetry... is you.',
      'For a glance, a world;\nfor a smile, a heaven;\nfor a kiss... I don\'t know\nwhat I would give you for a kiss!'
    ],
    gloss: [['clavar', 'to fix / nail'], ['la pupila', 'pupil (of the eye)'], ['la mirada', 'look / glance'], ['la sonrisa', 'smile'], ['diera', 'would give (old use of imperf. subj.)']],
    quiz: [
      ['En la Rima XXI, ¿de qué color son los ojos de la persona amada?', 'Azules', ['Azules', 'Verdes', 'Negros']],
      ['Según el poeta, ¿qué es la poesía?', 'La persona amada', ['La persona amada', 'Un libro', 'El cielo']],
      ['En la Rima XXIII, ¿qué daría el poeta por una sonrisa?', 'Un cielo', ['Un cielo', 'Un mundo', 'Un beso']],
      ['¿Qué tema tienen en común las dos rimas?', 'El amor', ['El amor', 'La guerra', 'La naturaleza']]
    ]
  },
  {
    id: 'r-c1-1', level: 'c1', icon: '🌐', title: 'Un idioma, muchas voces',
    text: [
      'Con más de quinientos millones de hablantes nativos, el español es la segunda lengua materna más hablada del planeta. Sin embargo, sería un error concebirlo como un bloque monolítico: lo que se habla en Buenos Aires, en Ciudad de México o en Madrid presenta diferencias notables de pronunciación, léxico e incluso gramática.',
      'Basta pensar en el voseo rioplatense, en el seseo característico de América y de buena parte de Andalucía, o en el uso de «ustedes» en lugar de «vosotros» que predomina fuera de España. Un mismo objeto puede recibir nombres distintos según el país: lo que en un lugar es un «ordenador», en otro es una «computadora».',
      'No obstante, lejos de constituir un obstáculo, esta diversidad es precisamente una de las mayores riquezas del idioma. La comunicación entre hispanohablantes de distintas regiones rara vez se ve comprometida, ya que comparten una norma culta común que garantiza la unidad.',
      'Para el estudiante, la conclusión es clara: no existe un español «correcto» frente a otros «incorrectos». Conviene familiarizarse con varias variedades y, sobre todo, mantener la curiosidad ante cada nueva voz que se descubra.'
    ],
    tr: [
      'With over five hundred million native speakers, Spanish is the second most widely spoken mother tongue on the planet. However, it would be a mistake to think of it as a monolithic block: what is spoken in Buenos Aires, Mexico City or Madrid shows notable differences in pronunciation, vocabulary and even grammar.',
      'Just think of River Plate "voseo", the "seseo" typical of the Americas and much of Andalusia, or the use of "ustedes" instead of "vosotros" that predominates outside Spain. The same object may have different names depending on the country: what is an "ordenador" in one place is a "computadora" in another.',
      'Nevertheless, far from being an obstacle, this diversity is precisely one of the language\'s greatest treasures. Communication between Spanish speakers from different regions is rarely compromised, since they share a common educated standard that ensures unity.',
      'For the learner, the conclusion is clear: there is no "correct" Spanish as opposed to other "incorrect" ones. It is worth becoming familiar with several varieties and, above all, staying curious about each new voice one discovers.'
    ],
    gloss: [['concebir', 'to conceive / think of'], ['monolítico', 'monolithic'], ['el voseo', 'use of "vos" instead of "tú"'], ['el seseo', 'pronouncing "c/z" as "s"'], ['comprometer', 'to compromise / jeopardise'], ['la norma culta', 'educated standard']],
    quiz: [
      ['¿Qué idea rechaza el autor en el primer párrafo?', 'Que el español sea un bloque uniforme', ['Que el español sea un bloque uniforme', 'Que el español tenga muchos hablantes', 'Que el español se hable en América']],
      ['¿Qué ejemplo léxico se menciona?', 'Ordenador / computadora', ['Ordenador / computadora', 'Coche / carro', 'Zumo / jugo']],
      ['¿Por qué la diversidad no impide la comunicación?', 'Existe una norma culta común', ['Existe una norma culta común', 'Todos usan «vosotros»', 'Nadie usa el voseo']],
      ['¿Qué recomienda el autor al estudiante?', 'Familiarizarse con varias variedades', ['Familiarizarse con varias variedades', 'Aprender solo el español de Madrid', 'Evitar el español de América']]
    ]
  },
  {
    id: 'r-c1-2', level: 'c1', icon: '🐦', title: 'Volverán las oscuras golondrinas',
    author: 'Gustavo Adolfo Bécquer', source: 'Rima LIII (1871). Public domain; spelling modernised.',
    poem: true,
    text: [
      'Volverán las oscuras golondrinas\nen tu balcón sus nidos a colgar,\ny otra vez con el ala a sus cristales\njugando llamarán.',
      'Pero aquellas que el vuelo refrenaban\ntu hermosura y mi dicha a contemplar,\naquellas que aprendieron nuestros nombres...\nesas... ¡no volverán!',
      'Volverán las tupidas madreselvas\nde tu jardín las tapias a escalar,\ny otra vez a la tarde aún más hermosas\nsus flores se abrirán.',
      'Pero aquellas cuajadas de rocío\ncuyas gotas mirábamos temblar\ny caer como lágrimas del día...\nesas... ¡no volverán!',
      'Volverán del amor en tus oídos\nlas palabras ardientes a sonar,\ntu corazón de su profundo sueño\ntal vez despertará.',
      'Pero mudo y absorto y de rodillas,\ncomo se adora a Dios ante su altar,\ncomo yo te he querido..., desengáñate,\n¡así no te querrán!'
    ],
    tr: [
      'The dark swallows will return\nto hang their nests on your balcony,\nand once again, playing, they will tap\nyour windowpanes with their wings.',
      'But those that slowed their flight\nto gaze upon your beauty and my happiness,\nthose that learned our names...\nthose... will not return!',
      'The dense honeysuckle will return\nto climb the walls of your garden,\nand once again in the evening, even lovelier,\nits flowers will open.',
      'But those covered in dew,\nwhose drops we watched tremble\nand fall like the tears of the day...\nthose... will not return!',
      'Burning words of love will return\nto sound in your ears;\nyour heart may perhaps awaken\nfrom its deep sleep.',
      'But silent, absorbed and on my knees,\nas God is worshipped before His altar,\nas I have loved you... do not deceive yourself,\nno one will love you like that!'
    ],
    gloss: [['la golondrina', 'swallow (bird)'], ['el nido', 'nest'], ['refrenar', 'to hold back / slow'], ['la dicha', 'happiness'], ['la madreselva', 'honeysuckle'], ['la tapia', 'garden wall'], ['cuajado de', 'covered / filled with'], ['el rocío', 'dew'], ['desengañarse', 'to stop deceiving oneself']],
    quiz: [
      ['¿Qué volverá a colgar sus nidos en el balcón?', 'Las golondrinas', ['Las golondrinas', 'Las madreselvas', 'Las palabras']],
      ['¿Qué rasgo tienen las golondrinas que «no volverán»?', 'Aprendieron los nombres de los amantes', ['Aprendieron los nombres de los amantes', 'Eran más grandes', 'Vivían en el jardín']],
      ['¿Con qué se comparan las gotas de rocío?', 'Con lágrimas del día', ['Con lágrimas del día', 'Con estrellas', 'Con palabras ardientes']],
      ['¿Qué afirma el poeta en la última estrofa?', 'Nadie la amará como él la ha amado', ['Nadie la amará como él la ha amado', 'Él volverá pronto', 'Ella nunca lo amó']]
    ]
  },
  {
    id: 'r-c1-3', level: 'c1', icon: '🛡️', title: 'En un lugar de la Mancha',
    author: 'Miguel de Cervantes', source: 'Don Quijote de la Mancha, Primera parte, capítulo I (1605). Public domain; text from Project Gutenberg.',
    text: [
      'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
      'Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.',
      'Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.',
      'Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.'
    ],
    tr: [
      'In a village of La Mancha, the name of which I have no desire to recall, there lived not long ago one of those gentlemen who keep a lance in the lance-rack, an old shield, a lean nag and a greyhound for coursing.',
      'A stew of rather more beef than mutton, a salad of leftovers most nights, eggs and bacon on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, consumed three-quarters of his income.',
      'He had in his house a housekeeper past forty, a niece under twenty, and a lad for the field and market-place, who saddled the nag as well as handled the pruning knife.',
      'The age of this gentleman of ours was bordering on fifty; he was of a hardy constitution, spare of flesh, gaunt of face, a very early riser and fond of hunting.'
    ],
    gloss: [['el hidalgo', 'minor nobleman, gentleman'], ['no ha mucho tiempo', '(archaic) not long ago'], ['la adarga', 'leather shield'], ['el rocín', 'nag (poor horse)'], ['el galgo', 'greyhound'], ['lantejas', '(archaic) lentejas, lentils'], ['la hacienda', 'wealth / estate'], ['frisar con', 'to be close to (an age)'], ['enjuto', 'lean, gaunt']],
    quiz: [
      ['¿Dónde vivía el hidalgo?', 'En un lugar de la Mancha', ['En un lugar de la Mancha', 'En Madrid', 'En un castillo']],
      ['¿Qué animales tenía?', 'Un rocín flaco y un galgo', ['Un rocín flaco y un galgo', 'Un caballo fuerte y un gato', 'Dos perros']],
      ['¿En qué gastaba la mayor parte de su dinero?', 'En la comida', ['En la comida', 'En libros', 'En ropa']],
      ['¿Cuántos años tenía aproximadamente?', 'Unos cincuenta', ['Unos cincuenta', 'Unos veinte', 'Unos cuarenta']]
    ]
  }
];
