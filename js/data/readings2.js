// More readings. Originals written for this app; literary texts are public domain
// (sources: es.wikisource.org scans; spelling lightly modernised, e.g. "fué" → "fue").
window.READINGS = window.READINGS || [];
READINGS.push(
  {
    id: 'r-a1-3', level: 'a1', icon: '🍅', title: 'En el mercado',
    text: [
      'Es sábado por la mañana. Marta va al mercado con su hijo, Leo. El mercado está cerca de su casa, en la plaza.',
      '—Buenos días. Quiero un kilo de tomates y dos kilos de naranjas, por favor.\n—Aquí tiene. ¿Algo más?\n—Sí, también quiero queso. ¿Cuánto cuesta?\n—Doce euros el kilo.',
      'Leo quiere fresas, pero son muy caras. Marta compra una caja pequeña. Leo está muy contento.',
      'Después, van a la panadería y compran pan. A las doce vuelven a casa. ¡Hoy hay ensalada de tomate para comer!'
    ],
    tr: [
      'It\'s Saturday morning. Marta goes to the market with her son, Leo. The market is near her house, in the square.',
      '—Good morning. I\'d like a kilo of tomatoes and two kilos of oranges, please.\n—Here you are. Anything else?\n—Yes, I\'d also like some cheese. How much is it?\n—Twelve euros a kilo.',
      'Leo wants strawberries, but they are very expensive. Marta buys a small box. Leo is very happy.',
      'Then they go to the bakery and buy bread. At twelve they go back home. Today there\'s tomato salad for lunch!'
    ],
    gloss: [['el kilo', 'kilo'], ['Aquí tiene.', 'Here you are.'], ['¿Algo más?', 'Anything else?'], ['la caja', 'box'], ['vuelven', 'they return']],
    quiz: [
      ['¿Dónde está el mercado?', 'En la plaza', ['En la plaza', 'Lejos de la casa', 'En la estación']],
      ['¿Cuántos kilos de naranjas compra Marta?', 'Dos', ['Dos', 'Uno', 'Doce']],
      ['¿Por qué Marta compra una caja pequeña de fresas?', 'Porque son caras', ['Porque son caras', 'Porque no le gustan', 'Porque Leo no quiere']],
      ['¿Qué comen hoy?', 'Ensalada de tomate', ['Ensalada de tomate', 'Queso con pan', 'Fresas con leche']]
    ]
  },
  {
    id: 'r-a1-4', level: 'a1', icon: '🏠', title: 'Mi piso nuevo',
    text: [
      'Me llamo Tomás y tengo un piso nuevo en Valencia. No es muy grande, pero es muy bonito.',
      'Tiene un salón con un sofá azul y una mesa pequeña. La cocina es moderna y tiene una ventana grande. También hay un baño y dos dormitorios.',
      'Mi dormitorio tiene una cama, un armario y una estantería con muchos libros. El otro dormitorio es para mis amigos cuando vienen de visita.',
      'Lo mejor del piso es la terraza: desde allí veo el mar. Por las tardes leo un libro en la terraza y tomo un café.'
    ],
    tr: [
      'My name is Tomás and I have a new flat in Valencia. It isn\'t very big, but it is very pretty.',
      'It has a living room with a blue sofa and a small table. The kitchen is modern and has a big window. There\'s also a bathroom and two bedrooms.',
      'My bedroom has a bed, a wardrobe and a bookshelf with lots of books. The other bedroom is for my friends when they come to visit.',
      'The best thing about the flat is the terrace: from there I can see the sea. In the afternoons I read a book on the terrace and have a coffee.'
    ],
    gloss: [['el piso', 'flat / apartment'], ['el salón', 'living room'], ['la estantería', 'bookshelf'], ['de visita', 'to visit'], ['desde allí', 'from there']],
    quiz: [
      ['¿Dónde está el piso de Tomás?', 'En Valencia', ['En Valencia', 'En Madrid', 'En Sevilla']],
      ['¿De qué color es el sofá?', 'Azul', ['Azul', 'Rojo', 'Verde']],
      ['¿Cuántos dormitorios hay?', 'Dos', ['Dos', 'Uno', 'Tres']],
      ['¿Qué ve Tomás desde la terraza?', 'El mar', ['El mar', 'La montaña', 'El parque']]
    ]
  },
  {
    id: 'r-a1-5', level: 'a1', icon: '🎶', title: 'Los gustos de Ana',
    text: [
      'Ana tiene dieciocho años y es estudiante. Le gusta mucho la música: toca la guitarra y canta en un grupo con sus amigos.',
      'También le gusta el deporte. Los lunes y los miércoles nada en la piscina. Los fines de semana juega al baloncesto.',
      'No le gustan las matemáticas, pero le encantan los idiomas. Habla inglés y francés, y ahora estudia alemán.',
      'Su hermano Pablo es muy diferente: no le gusta el deporte y prefiere los videojuegos. Pero a los dos les gusta mucho viajar.'
    ],
    tr: [
      'Ana is eighteen and a student. She really likes music: she plays the guitar and sings in a band with her friends.',
      'She also likes sport. On Mondays and Wednesdays she swims at the pool. At weekends she plays basketball.',
      'She doesn\'t like maths, but she loves languages. She speaks English and French, and now she\'s studying German.',
      'Her brother Pablo is very different: he doesn\'t like sport and prefers video games. But they both love travelling.'
    ],
    gloss: [['el grupo', 'band / group'], ['la piscina', 'swimming pool'], ['le encantan', 'she loves'], ['a los dos', 'both of them']],
    quiz: [
      ['¿Qué instrumento toca Ana?', 'La guitarra', ['La guitarra', 'El piano', 'La batería']],
      ['¿Cuándo nada Ana?', 'Los lunes y los miércoles', ['Los lunes y los miércoles', 'Los fines de semana', 'Todos los días']],
      ['¿Qué idioma estudia ahora?', 'Alemán', ['Alemán', 'Francés', 'Inglés']],
      ['¿Qué les gusta a Ana y a Pablo?', 'Viajar', ['Viajar', 'Los videojuegos', 'El baloncesto']]
    ]
  },
  {
    id: 'r-a1-6', level: 'a1', icon: '🌤️', title: 'Una postal desde Málaga',
    text: [
      'Querida abuela:\n¿Qué tal estás? Estoy en Málaga con mis padres. Hace sol y mucho calor. ¡Hace veintiocho grados en marzo!',
      'El hotel es pequeño y está cerca de la playa. Por las mañanas vamos a la playa y por las tardes visitamos la ciudad.',
      'Hoy comemos pescado en un restaurante del puerto. Mañana vamos al Museo Picasso. Picasso es de Málaga, ¿lo sabes?',
      'Volvemos a casa el domingo. Muchos besos,\nLucía'
    ],
    tr: [
      'Dear Grandma:\nHow are you? I\'m in Málaga with my parents. It\'s sunny and very hot. It\'s twenty-eight degrees in March!',
      'The hotel is small and near the beach. In the mornings we go to the beach and in the afternoons we visit the city.',
      'Today we\'re having fish in a restaurant at the port. Tomorrow we\'re going to the Picasso Museum. Picasso is from Málaga, did you know?',
      'We go back home on Sunday. Lots of kisses,\nLucía'
    ],
    gloss: [['la postal', 'postcard'], ['el grado', 'degree'], ['el puerto', 'port / harbour'], ['muchos besos', 'lots of kisses (letter closing)']],
    quiz: [
      ['¿Con quién está Lucía en Málaga?', 'Con sus padres', ['Con sus padres', 'Con su abuela', 'Con sus amigos']],
      ['¿Qué tiempo hace?', 'Hace sol y calor', ['Hace sol y calor', 'Llueve mucho', 'Hace frío']],
      ['¿Qué hacen por las tardes?', 'Visitan la ciudad', ['Visitan la ciudad', 'Van a la playa', 'Duermen la siesta']],
      ['¿Cuándo vuelven a casa?', 'El domingo', ['El domingo', 'Mañana', 'En marzo']]
    ]
  },
  {
    id: 'r-a2-3', level: 'a2', icon: '🙃', title: 'Un día de mala suerte',
    text: [
      'El martes pasado fue un día horrible. Me desperté tarde porque no sonó el despertador. Me duché en dos minutos y salí de casa sin desayunar.',
      'Cuando llegué a la parada, el autobús ya se había ido, así que tuve que ir andando. Empezó a llover y, claro, no llevaba paraguas.',
      'Llegué a la oficina mojado y con media hora de retraso. Mi jefe no dijo nada, pero me miró muy serio. Por la tarde, se me rompió el ordenador y perdí un informe importante.',
      'Por la noche, mi novia me llamó para invitarme a cenar. Fuimos a un restaurante italiano y comimos una pizza buenísima. Al final, el día no terminó tan mal.'
    ],
    tr: [
      'Last Tuesday was a horrible day. I woke up late because the alarm clock didn\'t go off. I showered in two minutes and left home without having breakfast.',
      'When I got to the stop, the bus had already gone, so I had to walk. It started to rain and, of course, I didn\'t have an umbrella.',
      'I arrived at the office wet and half an hour late. My boss didn\'t say anything, but he gave me a very serious look. In the afternoon my computer broke and I lost an important report.',
      'In the evening, my girlfriend called to invite me to dinner. We went to an Italian restaurant and ate a delicious pizza. In the end, the day didn\'t finish so badly.'
    ],
    gloss: [['el despertador', 'alarm clock'], ['ir andando', 'to walk / go on foot'], ['mojado', 'wet'], ['el retraso', 'delay'], ['buenísima', 'really good']],
    quiz: [
      ['¿Por qué se despertó tarde?', 'No sonó el despertador', ['No sonó el despertador', 'Se acostó tarde', 'Estaba enfermo']],
      ['¿Cómo llegó a la oficina?', 'Andando', ['Andando', 'En autobús', 'En taxi']],
      ['¿Qué pasó por la tarde?', 'Se le rompió el ordenador', ['Se le rompió el ordenador', 'Su jefe se enfadó', 'Perdió el paraguas']],
      ['¿Cómo terminó el día?', 'Con una cena agradable', ['Con una cena agradable', 'En el hospital', 'Trabajando en la oficina']]
    ]
  },
  {
    id: 'r-a2-4', level: 'a2', icon: '🎂', title: 'Los noventa años de la abuela',
    text: [
      'El domingo pasado celebramos el cumpleaños de mi abuela Carmen. Cumplió noventa años y organizamos una fiesta sorpresa en su pueblo.',
      'Vinieron más de cuarenta personas: hijos, nietos, bisnietos y muchos vecinos. Mi tío preparó una paella enorme y mi madre hizo una tarta de chocolate.',
      'Cuando la abuela entró en el salón, todos gritamos «¡Felicidades!». Ella se quedó sin palabras y empezó a llorar de alegría.',
      'Después de comer, nos contó historias de cuando era joven: trabajaba en el campo, iba a bailar los sábados y conoció a mi abuelo en una fiesta del pueblo. Fue un día muy especial para toda la familia.'
    ],
    tr: [
      'Last Sunday we celebrated my grandmother Carmen\'s birthday. She turned ninety and we organised a surprise party in her village.',
      'More than forty people came: children, grandchildren, great-grandchildren and lots of neighbours. My uncle made a huge paella and my mother made a chocolate cake.',
      'When Grandma came into the living room, we all shouted "Happy birthday!". She was speechless and started to cry with joy.',
      'After lunch, she told us stories from when she was young: she worked in the fields, went dancing on Saturdays and met my grandfather at a village fiesta. It was a very special day for the whole family.'
    ],
    gloss: [['cumplir años', 'to turn (an age)'], ['los bisnietos', 'great-grandchildren'], ['quedarse sin palabras', 'to be speechless'], ['de alegría', 'with joy']],
    quiz: [
      ['¿Cuántos años cumplió la abuela?', 'Noventa', ['Noventa', 'Ochenta', 'Cuarenta']],
      ['¿Quién preparó la paella?', 'El tío', ['El tío', 'La madre', 'La abuela']],
      ['¿Cómo reaccionó la abuela?', 'Lloró de alegría', ['Lloró de alegría', 'Se enfadó', 'Se fue a dormir']],
      ['¿Dónde conoció a su marido?', 'En una fiesta del pueblo', ['En una fiesta del pueblo', 'En el campo', 'En la ciudad']]
    ]
  },
  {
    id: 'r-a2-5', level: 'a2', icon: '📧', title: 'Un correo a una amiga',
    text: [
      'Hola, Sara:\n¿Cómo estás? Te escribo desde Bogotá. ¡Ya llevo dos meses aquí! Estoy estudiando español en una academia y vivo con una familia colombiana muy simpática.',
      'Bogotá es una ciudad enorme y muy interesante. Hace fresco casi todo el año porque está a más de dos mil quinientos metros de altura. Me encanta el centro histórico, La Candelaria, con sus casas de colores.',
      'Este fin de semana voy a ir a Villa de Leyva con unos compañeros de clase. Dicen que es un pueblo precioso. En diciembre pienso viajar a la costa, a Cartagena.',
      '¿Y tú? ¿Qué tal el nuevo trabajo? Escríbeme pronto.\nUn abrazo muy fuerte,\nEmma'
    ],
    tr: [
      'Hi Sara:\nHow are you? I\'m writing to you from Bogotá. I\'ve already been here for two months! I\'m studying Spanish at a language school and I live with a very nice Colombian family.',
      'Bogotá is a huge and very interesting city. It\'s cool almost all year because it\'s more than two thousand five hundred metres high. I love the historic centre, La Candelaria, with its colourful houses.',
      'This weekend I\'m going to go to Villa de Leyva with some classmates. They say it\'s a beautiful town. In December I\'m planning to travel to the coast, to Cartagena.',
      'And you? How\'s the new job going? Write to me soon.\nA big hug,\nEmma'
    ],
    gloss: [['llevar + tiempo', 'to have been (somewhere) for'], ['la academia', 'language school'], ['hace fresco', 'it\'s cool / chilly'], ['la altura', 'altitude / height'], ['pensar + inf.', 'to plan to']],
    quiz: [
      ['¿Cuánto tiempo lleva Emma en Bogotá?', 'Dos meses', ['Dos meses', 'Dos años', 'Una semana']],
      ['¿Con quién vive?', 'Con una familia colombiana', ['Con una familia colombiana', 'Sola', 'Con Sara']],
      ['¿Por qué hace fresco en Bogotá?', 'Por la altura', ['Por la altura', 'Por el mar', 'Porque es invierno']],
      ['¿Adónde va a viajar en diciembre?', 'A Cartagena', ['A Cartagena', 'A Villa de Leyva', 'A España']]
    ]
  },
  {
    id: 'r-a2-6', level: 'a2', icon: '🏕️', title: 'Planes para el verano',
    text: [
      'Este verano no voy a ir a la playa como siempre. Mis amigos y yo hemos decidido hacer el Camino de Santiago.',
      'Vamos a empezar en Sarria, a unos cien kilómetros de Santiago de Compostela. Caminaremos unos veinte kilómetros al día y dormiremos en albergues para peregrinos.',
      'Ya hemos comprado unas botas buenas y una mochila ligera. Mi madre dice que voy a terminar muy cansado, pero yo creo que será una experiencia increíble.',
      'Cuando lleguemos a Santiago, visitaremos la catedral y comeremos pulpo a la gallega. Después, quizás vayamos unos días a la costa para descansar.'
    ],
    tr: [
      'This summer I\'m not going to go to the beach as usual. My friends and I have decided to walk the Camino de Santiago.',
      'We\'re going to start in Sarria, about a hundred kilometres from Santiago de Compostela. We\'ll walk about twenty kilometres a day and sleep in pilgrims\' hostels.',
      'We\'ve already bought some good boots and a light backpack. My mother says I\'m going to end up very tired, but I think it will be an incredible experience.',
      'When we reach Santiago, we\'ll visit the cathedral and eat Galician-style octopus. Afterwards, maybe we\'ll spend a few days on the coast to rest.'
    ],
    gloss: [['el peregrino', 'pilgrim'], ['el albergue', 'hostel'], ['ligero', 'light'], ['el pulpo', 'octopus'], ['cuando lleguemos', 'when we arrive']],
    quiz: [
      ['¿Qué van a hacer este verano?', 'El Camino de Santiago', ['El Camino de Santiago', 'Ir a la playa', 'Trabajar en un albergue']],
      ['¿Dónde van a empezar?', 'En Sarria', ['En Sarria', 'En Santiago', 'En la costa']],
      ['¿Cuántos kilómetros caminarán al día?', 'Unos veinte', ['Unos veinte', 'Unos cien', 'Unos cinco']],
      ['¿Qué piensa la madre?', 'Que terminará muy cansado', ['Que terminará muy cansado', 'Que es una mala idea', 'Que debe ir a la playa']]
    ]
  },
  {
    id: 'r-b1-3', level: 'b1', icon: '📲', title: 'Desconectar para conectar',
    text: [
      'Según un estudio reciente, los jóvenes españoles pasan una media de cinco horas al día mirando el móvil. Muchos reconocen que lo primero que hacen al despertarse es revisar sus redes sociales.',
      'Los expertos advierten que este uso excesivo puede provocar ansiedad, problemas de sueño y dificultades para concentrarse. Además, comparar nuestra vida con las fotos perfectas que vemos en internet a menudo nos hace sentir peor.',
      'Por eso, cada vez más personas se apuntan a los llamados «retiros digitales»: fines de semana en el campo sin teléfono ni ordenador, en los que se hacen excursiones, se cocina en grupo y, sobre todo, se habla cara a cara.',
      'No hace falta irse tan lejos. Basta con algunos hábitos sencillos: no usar el móvil durante las comidas, apagar las notificaciones y dejar el teléfono fuera del dormitorio por la noche.'
    ],
    tr: [
      'According to a recent study, young Spaniards spend an average of five hours a day looking at their phones. Many admit that the first thing they do when they wake up is check their social media.',
      'Experts warn that this excessive use can cause anxiety, sleep problems and difficulty concentrating. What\'s more, comparing our life with the perfect photos we see online often makes us feel worse.',
      'That\'s why more and more people are signing up for so-called "digital retreats": weekends in the countryside without a phone or computer, where people go hiking, cook together and, above all, talk face to face.',
      'You don\'t need to go that far. A few simple habits are enough: not using your phone during meals, turning off notifications and leaving your phone outside the bedroom at night.'
    ],
    gloss: [['una media de', 'an average of'], ['revisar', 'to check'], ['advertir', 'to warn'], ['apuntarse a', 'to sign up for'], ['cara a cara', 'face to face'], ['no hace falta', 'there\'s no need']],
    quiz: [
      ['¿Cuántas horas al día miran el móvil los jóvenes, según el estudio?', 'Unas cinco', ['Unas cinco', 'Unas dos', 'Unas diez']],
      ['¿Qué problema NO se menciona?', 'Problemas de vista', ['Problemas de vista', 'Ansiedad', 'Problemas de sueño']],
      ['¿Qué es un «retiro digital»?', 'Un fin de semana sin aparatos electrónicos', ['Un fin de semana sin aparatos electrónicos', 'Una aplicación para relajarse', 'Un curso de informática']],
      ['¿Qué hábito recomienda el texto?', 'Dejar el móvil fuera del dormitorio', ['Dejar el móvil fuera del dormitorio', 'Comprar un móvil nuevo', 'Usar el móvil solo en la cama']]
    ]
  },
  {
    id: 'r-b1-4', level: 'b1', icon: '😴', title: 'Consejos para dormir mejor',
    text: [
      '¿Te cuesta dormirte por las noches? No eres el único: casi la mitad de la población adulta tiene problemas de sueño en algún momento. Aquí tienes algunos consejos de los especialistas.',
      'Primero, intenta acostarte y levantarte siempre a la misma hora, incluso los fines de semana. Así tu cuerpo se acostumbrará a un horario regular.',
      'Evita el café y las bebidas con cafeína después de las cinco de la tarde, y no cenes demasiado tarde ni demasiado fuerte. Una cena ligera te ayudará a descansar.',
      'Por último, no mires pantallas una hora antes de acostarte: la luz azul engaña al cerebro y le hace creer que todavía es de día. Mejor lee un libro o escucha música tranquila. Y si después de veinte minutos sigues despierto, levántate y haz algo relajante hasta que tengas sueño.'
    ],
    tr: [
      'Do you find it hard to fall asleep at night? You\'re not the only one: almost half of the adult population has sleep problems at some point. Here are some tips from specialists.',
      'First, try to go to bed and get up at the same time, even at weekends. That way your body will get used to a regular schedule.',
      'Avoid coffee and drinks with caffeine after five in the afternoon, and don\'t have dinner too late or too heavy. A light dinner will help you rest.',
      'Finally, don\'t look at screens an hour before going to bed: blue light tricks the brain and makes it think it\'s still daytime. Better to read a book or listen to calm music. And if after twenty minutes you\'re still awake, get up and do something relaxing until you feel sleepy.'
    ],
    gloss: [['costar + inf.', 'to find it hard to'], ['la mitad', 'half'], ['acostumbrarse', 'to get used to'], ['engañar', 'to deceive / trick'], ['tener sueño', 'to be sleepy']],
    quiz: [
      ['¿Qué porcentaje de adultos tiene problemas de sueño?', 'Casi la mitad', ['Casi la mitad', 'Muy pocos', 'Todos']],
      ['¿Qué dice el texto sobre los fines de semana?', 'Hay que mantener el mismo horario', ['Hay que mantener el mismo horario', 'Se puede dormir hasta tarde', 'Hay que dormir la siesta']],
      ['¿Por qué no se deben mirar pantallas antes de dormir?', 'La luz azul engaña al cerebro', ['La luz azul engaña al cerebro', 'Gastan mucha energía', 'Provocan hambre']],
      ['¿Qué hacer si sigues despierto después de veinte minutos?', 'Levantarte y hacer algo relajante', ['Levantarte y hacer algo relajante', 'Tomar un café', 'Mirar el móvil']]
    ]
  },
  {
    id: 'r-b1-5', level: 'b1', icon: '🪙', title: 'La leyenda de El Dorado',
    text: [
      'Cuando los conquistadores españoles llegaron a América en el siglo XVI, oyeron hablar de un lugar extraordinario: una ciudad, o quizás un reino entero, hecho de oro. Lo llamaron El Dorado.',
      'La leyenda tenía un origen real. En la laguna de Guatavita, cerca de la actual Bogotá, el pueblo muisca celebraba una ceremonia: cuando elegían a un nuevo jefe, lo cubrían de polvo de oro y lo llevaban en una balsa hasta el centro del lago, donde ofrecía joyas y objetos de oro a los dioses.',
      'Con el tiempo, la historia fue creciendo de boca en boca. Durante más de doscientos años, cientos de expediciones atravesaron selvas, montañas y ríos buscando la ciudad dorada. Muchos exploradores murieron de hambre o de enfermedades y nunca encontraron nada.',
      'Hoy, El Dorado es sinónimo de un sueño imposible. Sin embargo, en el Museo del Oro de Bogotá se puede ver la famosa «balsa muisca», una pequeña figura de oro que representa aquella ceremonia y que demuestra que, detrás de toda leyenda, suele haber algo de verdad.'
    ],
    tr: [
      'When the Spanish conquistadors arrived in America in the 16th century, they heard about an extraordinary place: a city, or perhaps a whole kingdom, made of gold. They called it El Dorado.',
      'The legend had a real origin. At Lake Guatavita, near present-day Bogotá, the Muisca people held a ceremony: when they chose a new chief, they covered him in gold dust and took him on a raft to the middle of the lake, where he offered jewels and gold objects to the gods.',
      'Over time, the story grew by word of mouth. For more than two hundred years, hundreds of expeditions crossed jungles, mountains and rivers looking for the golden city. Many explorers died of hunger or disease and never found anything.',
      'Today, El Dorado is a synonym for an impossible dream. However, at the Gold Museum in Bogotá you can see the famous "Muisca raft", a small gold figure that represents that ceremony and shows that behind every legend there is usually some truth.'
    ],
    gloss: [['el conquistador', 'conqueror'], ['el reino', 'kingdom'], ['la balsa', 'raft'], ['de boca en boca', 'by word of mouth'], ['atravesar', 'to cross'], ['soler', 'to usually (be)']],
    quiz: [
      ['¿Qué era El Dorado según la leyenda?', 'Un lugar hecho de oro', ['Un lugar hecho de oro', 'Un río muy largo', 'Un conquistador famoso']],
      ['¿Dónde se celebraba la ceremonia muisca?', 'En la laguna de Guatavita', ['En la laguna de Guatavita', 'En Lima', 'En el mar Caribe']],
      ['¿Qué les pasó a muchos exploradores?', 'Murieron sin encontrar nada', ['Murieron sin encontrar nada', 'Se hicieron ricos', 'Fundaron una ciudad']],
      ['¿Qué se puede ver en el Museo del Oro?', 'La balsa muisca', ['La balsa muisca', 'La ciudad de El Dorado', 'Un barco español']]
    ]
  },
  {
    id: 'r-b1-6', level: 'b1', icon: '🐢', title: 'La tortuga gigante (fragmento)',
    author: 'Horacio Quiroga', source: '«La tortuga gigante», Cuentos de la selva (1918). Public domain; spelling lightly modernised.',
    text: [
      'Había una vez un hombre que vivía en Buenos Aires, y estaba muy contento porque era un hombre sano y trabajador. Pero un día se enfermó, y los médicos le dijeron que solamente yéndose al campo podría curarse. Él no quería ir, porque tenía hermanos chicos a quienes daba de comer; y se enfermaba cada día más.',
      'Hasta que un amigo suyo, que era director del Zoológico, le dijo un día:\n—Usted es amigo mío, y es un hombre bueno y trabajador. Por eso quiero que se vaya a vivir al monte, a hacer mucho ejercicio al aire libre para curarse. Y como usted tiene mucha puntería con la escopeta, cace bichos del monte para traerme los cueros, y yo le daré plata adelantada para que sus hermanitos puedan comer bien.',
      'El hombre enfermo aceptó, y se fue a vivir al monte, lejos, más lejos que Misiones todavía. Hacía allá mucho calor, y eso le hacía bien.',
      'Vivía solo en el bosque, y él mismo se cocinaba. Comía pájaros y bichos del monte, que cazaba con la escopeta, y después comía frutas. Dormía bajo los árboles, y cuando hacía mal tiempo construía en cinco minutos una ramada con hojas de palmera, y allí pasaba sentado y fumando, muy contento en medio del bosque que bramaba con el viento y la lluvia.'
    ],
    tr: [
      'Once upon a time there was a man who lived in Buenos Aires, and he was very happy because he was a healthy, hard-working man. But one day he fell ill, and the doctors told him that only by going to the countryside could he get better. He didn\'t want to go, because he had little brothers and sisters whom he fed; and he got sicker every day.',
      'Until one day a friend of his, who was the director of the Zoo, said to him:\n"You are my friend, and you are a good and hard-working man. That\'s why I want you to go and live in the wild, to do lots of exercise in the open air so you get better. And since you are a very good shot with a rifle, hunt animals in the forest and bring me their skins, and I will pay you in advance so your little brothers and sisters can eat well."',
      'The sick man accepted, and went to live in the wild, far away, even farther than Misiones. It was very hot there, and that did him good.',
      'He lived alone in the forest, and cooked for himself. He ate birds and forest animals that he hunted with his rifle, and then he ate fruit. He slept under the trees, and when the weather was bad he built a shelter of palm leaves in five minutes, and there he sat smoking, very happy in the middle of the forest that roared with the wind and the rain.'
    ],
    gloss: [['había una vez', 'once upon a time there was'], ['chico', 'small, little (Río de la Plata)'], ['el monte', 'wild forest / scrubland'], ['la puntería', 'aim (marksmanship)'], ['el bicho', 'creature / bug'], ['el cuero', 'hide / leather'], ['la plata', 'money (Latin America)'], ['la ramada', 'shelter made of branches'], ['bramar', 'to roar']],
    quiz: [
      ['¿Por qué no quería ir al campo el hombre?', 'Tenía que mantener a sus hermanos', ['Tenía que mantener a sus hermanos', 'No le gustaba el calor', 'Tenía miedo de los animales']],
      ['¿Quién le ayudó?', 'Un amigo, director del Zoológico', ['Un amigo, director del Zoológico', 'Un médico', 'Su hermano mayor']],
      ['¿Qué tenía que enviar al amigo?', 'Cueros de animales', ['Cueros de animales', 'Frutas del monte', 'Cartas']],
      ['¿Cómo se sentía el hombre en el bosque?', 'Muy contento', ['Muy contento', 'Triste y solo', 'Enfermo']]
    ]
  },
  {
    id: 'r-b2-4', level: 'b2', icon: '🛌', title: 'La siesta: ¿mito o realidad?',
    text: [
      'Pocas palabras españolas son tan conocidas en el extranjero como «siesta». Sin embargo, la imagen de un país entero que se echa a dormir después de comer tiene más de tópico que de realidad.',
      'Según diversas encuestas, menos de una quinta parte de los españoles duerme la siesta a diario. El ritmo de vida en las grandes ciudades, las largas jornadas laborales y los desplazamientos hacen que sea difícil permitirse ese lujo entre semana.',
      'Paradójicamente, mientras la siesta pierde terreno en España, la ciencia no deja de elogiarla. Numerosos estudios han demostrado que una cabezada de veinte minutos mejora la concentración, la memoria y el estado de ánimo. Eso sí: si se prolonga más de media hora, puede producir el efecto contrario y dejarnos aturdidos.',
      'Algunas empresas tecnológicas de Estados Unidos o de Japón ya han instalado salas de descanso para sus empleados. Quién sabe si, dentro de unos años, la siesta será considerada no como una costumbre perezosa, sino como una herramienta de productividad.'
    ],
    tr: [
      'Few Spanish words are as well known abroad as "siesta". However, the image of an entire country lying down to sleep after lunch is more cliché than reality.',
      'According to various surveys, fewer than one in five Spaniards takes a nap every day. The pace of life in big cities, long working days and commuting make it difficult to allow oneself that luxury during the week.',
      'Paradoxically, while the siesta is losing ground in Spain, science keeps on praising it. Numerous studies have shown that a twenty-minute nap improves concentration, memory and mood. Mind you, if it lasts more than half an hour, it can have the opposite effect and leave us groggy.',
      'Some tech companies in the United States and Japan have already installed rest rooms for their employees. Who knows whether, in a few years, the siesta will be seen not as a lazy habit, but as a productivity tool.'
    ],
    gloss: [['el tópico', 'cliché / stereotype'], ['a diario', 'daily'], ['permitirse', 'to afford / allow oneself'], ['perder terreno', 'to lose ground'], ['elogiar', 'to praise'], ['la cabezada', 'nap / nod off'], ['aturdido', 'dazed / groggy'], ['la herramienta', 'tool']],
    quiz: [
      ['¿Qué afirma el texto sobre la imagen de España y la siesta?', 'Es más un tópico que una realidad', ['Es más un tópico que una realidad', 'Es totalmente cierta', 'Es una invención reciente']],
      ['¿Qué porcentaje de españoles duerme la siesta a diario?', 'Menos de una quinta parte', ['Menos de una quinta parte', 'La mitad', 'Casi todos']],
      ['¿Qué ocurre si la siesta dura más de media hora?', 'Puede dejarnos aturdidos', ['Puede dejarnos aturdidos', 'Mejora aún más la memoria', 'Es obligatoria en algunas empresas']],
      ['¿Qué han hecho algunas empresas extranjeras?', 'Instalar salas de descanso', ['Instalar salas de descanso', 'Prohibir la siesta', 'Reducir la jornada a la mitad']]
    ]
  },
  {
    id: 'r-b2-5', level: 'b2', icon: '🏚️', title: 'La España vaciada',
    text: [
      'Mientras Madrid y Barcelona no paran de crecer, miles de pueblos del interior de España se están quedando vacíos. En provincias como Soria o Teruel hay zonas con menos de diez habitantes por kilómetro cuadrado, una densidad comparable a la de Laponia.',
      'El fenómeno empezó en los años sesenta, cuando millones de personas emigraron del campo a las ciudades en busca de trabajo. Desde entonces, el cierre de escuelas, centros de salud y comercios ha provocado un círculo vicioso: cuantos menos servicios hay, más gente se marcha.',
      'No obstante, en los últimos años han surgido iniciativas para revertir la situación. Algunos ayuntamientos ofrecen viviendas a bajo precio a familias con niños, y el teletrabajo ha permitido que ciertos profesionales se instalen en pueblos con buena conexión a internet.',
      'Los expertos advierten, sin embargo, que no basta con atraer a nuevos vecinos: hace falta garantizar que puedan quedarse. Para ello, es imprescindible que las administraciones inviertan en transporte, sanidad y educación, de modo que vivir en un pueblo deje de ser un sacrificio.'
    ],
    tr: [
      'While Madrid and Barcelona keep on growing, thousands of villages in inland Spain are becoming empty. In provinces such as Soria or Teruel there are areas with fewer than ten inhabitants per square kilometre, a density comparable to Lapland\'s.',
      'The phenomenon began in the sixties, when millions of people emigrated from the countryside to the cities in search of work. Since then, the closure of schools, health centres and shops has created a vicious circle: the fewer services there are, the more people leave.',
      'Nevertheless, in recent years initiatives have emerged to reverse the situation. Some town councils offer cheap housing to families with children, and remote working has allowed certain professionals to settle in villages with a good internet connection.',
      'Experts warn, however, that attracting new residents is not enough: they need to be able to stay. To achieve this, it is essential that the authorities invest in transport, health and education, so that living in a village stops being a sacrifice.'
    ],
    gloss: [['vaciado', 'emptied'], ['la densidad', 'density'], ['en busca de', 'in search of'], ['el círculo vicioso', 'vicious circle'], ['surgir', 'to emerge'], ['revertir', 'to reverse'], ['instalarse', 'to settle'], ['la sanidad', 'health care']],
    quiz: [
      ['¿Con qué compara el texto la densidad de algunas zonas de Soria y Teruel?', 'Con Laponia', ['Con Laponia', 'Con Madrid', 'Con Barcelona']],
      ['¿Cuándo empezó la despoblación?', 'En los años sesenta', ['En los años sesenta', 'Hace diez años', 'En el siglo XIX']],
      ['¿Qué iniciativa se menciona?', 'Viviendas baratas para familias con niños', ['Viviendas baratas para familias con niños', 'Cerrar escuelas', 'Construir aeropuertos']],
      ['Según los expertos, ¿qué es imprescindible?', 'Invertir en servicios públicos', ['Invertir en servicios públicos', 'Prohibir la emigración', 'Atraer turistas']]
    ]
  },
  {
    id: 'r-b2-6', level: 'b2', icon: '🌴', title: 'Yo soy un hombre sincero',
    author: 'José Martí', source: 'Versos sencillos, I (1891). Public domain.', poem: true,
    text: [
      'Yo soy un hombre sincero\nde donde crece la palma,\ny antes de morirme quiero\nechar mis versos del alma.',
      'Yo vengo de todas partes,\ny hacia todas partes voy:\narte soy entre las artes,\nen los montes, monte soy.',
      'Yo sé los nombres extraños\nde las yerbas y las flores,\ny de mortales engaños,\ny de sublimes dolores.'
    ],
    tr: [
      'I am a sincere man\nfrom where the palm tree grows,\nand before I die I want\nto pour out the verses of my soul.',
      'I come from everywhere,\nand to everywhere I go:\namong the arts I am art,\namong the mountains, a mountain.',
      'I know the strange names\nof the herbs and the flowers,\nand of deadly deceptions,\nand of sublime sorrows.'
    ],
    gloss: [['la palma', 'palm tree'], ['echar', 'to throw / pour out'], ['el monte', 'mountain / hill'], ['la yerba', 'herb, grass (= hierba)'], ['el engaño', 'deception'], ['sublime', 'sublime']],
    quiz: [
      ['¿De dónde dice ser el poeta?', 'De donde crece la palma', ['De donde crece la palma', 'De la montaña', 'De una gran ciudad']],
      ['¿Qué quiere hacer antes de morir?', 'Echar sus versos del alma', ['Echar sus versos del alma', 'Viajar por el mundo', 'Plantar una palmera']],
      ['¿Qué conoce el poeta?', 'Los nombres de las yerbas y las flores', ['Los nombres de las yerbas y las flores', 'Todos los países', 'Los secretos del mar']],
      ['Estos versos son conocidos por la canción…', 'Guantanamera', ['Guantanamera', 'La bamba', 'Bésame mucho']]
    ]
  },
  {
    id: 'r-b2-7', level: 'b2', icon: '🍂', title: 'Canción de otoño en primavera',
    author: 'Rubén Darío', source: 'Cantos de vida y esperanza (1905). Public domain; spelling modernised.', poem: true,
    text: [
      '¡Juventud, divino tesoro,\nya te vas para no volver!\nCuando quiero llorar, no lloro...\ny a veces lloro sin querer...',
      'Plural ha sido la celeste\nhistoria de mi corazón.\nEra una dulce niña, en este\nmundo de duelo y aflicción.',
      'Miraba como el alba pura;\nsonreía como una flor.\nEra su cabellera oscura\nhecha de noche y de dolor.'
    ],
    tr: [
      'Youth, divine treasure,\nyou\'re leaving, never to return!\nWhen I want to cry, I don\'t cry...\nand sometimes I cry without meaning to...',
      'Plural has been the heavenly\nstory of my heart.\nShe was a sweet girl, in this\nworld of grief and affliction.',
      'She gazed like the pure dawn;\nshe smiled like a flower.\nHer dark hair was\nmade of night and of sorrow.'
    ],
    gloss: [['el tesoro', 'treasure'], ['sin querer', 'without meaning to'], ['celeste', 'heavenly / sky-blue'], ['el duelo', 'grief / mourning'], ['el alba', 'dawn'], ['la cabellera', 'head of hair']],
    quiz: [
      ['¿Qué es el «divino tesoro»?', 'La juventud', ['La juventud', 'El amor', 'La primavera']],
      ['¿Qué le pasa al poeta cuando quiere llorar?', 'No llora', ['No llora', 'Llora mucho', 'Se ríe']],
      ['¿Cómo era la cabellera de la niña?', 'Oscura', ['Oscura', 'Rubia', 'Blanca']],
      ['¿Qué tono tiene el poema?', 'Nostálgico', ['Nostálgico', 'Humorístico', 'Optimista']]
    ]
  },
  {
    id: 'r-c1-4', level: 'c1', icon: '🗣️', title: 'El arte perdido de la conversación',
    text: [
      'Nunca antes habíamos tenido tantos medios para comunicarnos y, paradójicamente, nunca había sido tan escasa la conversación genuina. Intercambiamos mensajes a todas horas, pero rara vez nos detenemos a escuchar al otro sin la tentación de mirar de reojo la pantalla.',
      'Conversar no es lo mismo que hablar. Supone aceptar que el interlocutor pueda llevarnos a un terreno inesperado, tolerar el silencio, matizar nuestras opiniones y, en ocasiones, reconocer que estábamos equivocados. Es, en definitiva, un ejercicio de humildad.',
      'Algunos psicólogos sostienen que la mensajería instantánea, al permitirnos editar cada frase antes de enviarla, nos ha vuelto menos tolerantes con la espontaneidad y la imperfección propias del diálogo cara a cara. De ahí que a muchos jóvenes les resulte incómodo, e incluso angustioso, hacer una simple llamada telefónica.',
      'Recuperar el arte de la conversación no exige grandes sacrificios: basta con dejar el móvil boca abajo, formular preguntas abiertas y, sobre todo, escuchar con la intención de comprender y no solo de responder. Por mucho que avance la tecnología, no hay algoritmo capaz de sustituir el placer de una buena sobremesa.'
    ],
    tr: [
      'Never before have we had so many means of communicating and, paradoxically, genuine conversation has never been so scarce. We exchange messages at all hours, but we rarely stop to listen to the other person without the temptation to glance sideways at the screen.',
      'Conversing is not the same as talking. It means accepting that the other person may take us somewhere unexpected, tolerating silence, nuancing our opinions and, at times, admitting that we were wrong. It is, in short, an exercise in humility.',
      'Some psychologists maintain that instant messaging, by letting us edit every sentence before sending it, has made us less tolerant of the spontaneity and imperfection inherent in face-to-face dialogue. Hence many young people find it uncomfortable, even distressing, to make a simple phone call.',
      'Recovering the art of conversation does not require great sacrifices: it is enough to put your phone face down, ask open questions and, above all, listen with the intention of understanding and not just of replying. However far technology advances, there is no algorithm capable of replacing the pleasure of a good after-dinner conversation.'
    ],
    gloss: [['escaso', 'scarce'], ['de reojo', 'out of the corner of one\'s eye'], ['el interlocutor', 'the person one is talking to'], ['matizar', 'to nuance / qualify'], ['en definitiva', 'in short'], ['angustioso', 'distressing'], ['boca abajo', 'face down'], ['la sobremesa', 'after-meal conversation']],
    quiz: [
      ['¿Cuál es la paradoja que plantea el texto?', 'Tenemos más medios pero conversamos menos', ['Tenemos más medios pero conversamos menos', 'Hablamos más pero escribimos peor', 'Los jóvenes conversan más que nunca']],
      ['Según el autor, conversar implica…', 'Tolerar el silencio y reconocer errores', ['Tolerar el silencio y reconocer errores', 'Imponer nuestras opiniones', 'Hablar siempre de temas serios']],
      ['¿Por qué a algunos jóvenes les cuesta llamar por teléfono?', 'Están acostumbrados a editar sus mensajes', ['Están acostumbrados a editar sus mensajes', 'Las llamadas son caras', 'No tienen tiempo']],
      ['¿Qué recomienda el autor?', 'Escuchar para comprender', ['Escuchar para comprender', 'Usar menos palabras', 'Enviar mensajes más largos']]
    ]
  },
  {
    id: 'r-c1-5', level: 'c1', icon: '🌙', title: 'Romance sonámbulo (fragmento)',
    author: 'Federico García Lorca', source: 'Romancero gitano (1928). Public domain.', poem: true,
    text: [
      'Verde que te quiero verde.\nVerde viento. Verdes ramas.\nEl barco sobre la mar\ny el caballo en la montaña.',
      'Con la sombra en la cintura,\nella sueña en su baranda,\nverde carne, pelo verde,\ncon los ojos de fría plata.',
      'Verde que te quiero verde.\nBajo la luna gitana,\nlas cosas la están mirando\ny ella no puede mirarlas.'
    ],
    tr: [
      'Green, how I want you, green.\nGreen wind. Green branches.\nThe ship upon the sea\nand the horse on the mountain.',
      'With shadow at her waist,\nshe dreams on her balcony,\ngreen flesh, green hair,\nwith eyes of cold silver.',
      'Green, how I want you, green.\nBeneath the gypsy moon,\nthings are looking at her\nand she cannot look at them.'
    ],
    gloss: [['el romance', 'ballad (in poetry)'], ['sonámbulo', 'sleepwalking'], ['la rama', 'branch'], ['la cintura', 'waist'], ['la baranda', 'railing / balcony'], ['la plata', 'silver'], ['gitano', 'gypsy (Roma)']],
    quiz: [
      ['¿Qué color domina el poema?', 'El verde', ['El verde', 'El rojo', 'El azul']],
      ['¿Dónde está la mujer?', 'En su baranda', ['En su baranda', 'En el barco', 'En la montaña']],
      ['¿Cómo son sus ojos?', 'De fría plata', ['De fría plata', 'Verdes', 'Negros como la noche']],
      ['¿Qué sugiere el último verso?', 'Que ella no puede ver (quizás está muerta)', ['Que ella no puede ver (quizás está muerta)', 'Que está durmiendo tranquila', 'Que está enfadada']]
    ]
  },
  {
    id: 'r-c1-6', level: 'c1', icon: '🤍', title: 'Tú me quieres blanca (fragmento)',
    author: 'Alfonsina Storni', source: 'El dulce daño (1918). Public domain.', poem: true,
    text: [
      'Tú me quieres alba,\nme quieres de espumas,\nme quieres de nácar.\nQue sea azucena\nsobre todas, casta.\nDe perfume tenue.\nCorola cerrada.',
      'Ni un rayo de luna\nfiltrado me haya.\nNi una margarita\nse diga mi hermana.\nTú me quieres nívea,\ntú me quieres blanca,\ntú me quieres alba.'
    ],
    tr: [
      'You want me white as dawn,\nyou want me made of foam,\nyou want me of mother-of-pearl.\nThat I be a lily,\nchaste above all others.\nOf faint perfume.\nA closed corolla.',
      'Not even a moonbeam\nmay have filtered into me.\nNot even a daisy\nmay call itself my sister.\nYou want me snow-white,\nyou want me white,\nyou want me white as dawn.'
    ],
    gloss: [['el alba', 'dawn (here: pure white)'], ['la espuma', 'foam'], ['el nácar', 'mother-of-pearl'], ['la azucena', 'white lily'], ['casto', 'chaste'], ['tenue', 'faint / subtle'], ['la corola', 'corolla (petals of a flower)'], ['níveo', 'snow-white']],
    quiz: [
      ['¿Qué exige el «tú» a la voz poética?', 'Pureza absoluta', ['Pureza absoluta', 'Riqueza', 'Alegría']],
      ['¿Con qué flor se compara la mujer?', 'Con la azucena', ['Con la azucena', 'Con la rosa', 'Con el clavel']],
      ['¿Qué tiene que tener cerrado?', 'La corola', ['La corola', 'La ventana', 'Los ojos']],
      ['¿Qué tema trata el poema?', 'La doble moral hacia las mujeres', ['La doble moral hacia las mujeres', 'La belleza de la naturaleza', 'La amistad entre hermanas']]
    ]
  },
  {
    id: 'r-c1-7', level: 'c1', icon: '🍋', title: 'Retrato (fragmento)',
    author: 'Antonio Machado', source: '«Retrato», Campos de Castilla (1912). Public domain.', poem: true,
    text: [
      'Mi infancia son recuerdos de un patio de Sevilla\ny un huerto claro donde madura el limonero;\nmi juventud, veinte años en tierra de Castilla;\nmi historia, algunos casos que recordar no quiero.',
      'Ni un seductor Mañara ni un Bradomín he sido\n—ya conocéis mi torpe aliño indumentario—;\nmas recibí la flecha que me asignó Cupido\ny amé cuanto ellas pueden tener de hospitalario.'
    ],
    tr: [
      'My childhood is memories of a courtyard in Seville\nand a bright orchard where the lemon tree ripens;\nmy youth, twenty years in the land of Castile;\nmy story, a few events I would rather not recall.',
      'I have been neither a seducer like Mañara nor a Bradomín\n—you know already my clumsy way of dressing—;\nbut I received the arrow Cupid assigned me\nand I loved whatever in them could be welcoming.'
    ],
    gloss: [['el huerto', 'orchard / vegetable garden'], ['madurar', 'to ripen'], ['el limonero', 'lemon tree'], ['el seductor', 'seducer'], ['torpe', 'clumsy'], ['el aliño indumentario', 'way of dressing'], ['mas', '(literary) but'], ['la flecha', 'arrow']],
    quiz: [
      ['¿Dónde transcurrió la infancia del poeta?', 'En Sevilla', ['En Sevilla', 'En Castilla', 'En Madrid']],
      ['¿Cuántos años pasó en Castilla durante su juventud?', 'Veinte', ['Veinte', 'Diez', 'Cuarenta']],
      ['¿Qué dice de su manera de vestir?', 'Que es torpe', ['Que es torpe', 'Que es elegante', 'Que es moderna']],
      ['¿Qué tipo de personaje NO ha sido el poeta?', 'Un seductor', ['Un seductor', 'Un enamorado', 'Un sevillano']]
    ]
  },
  {
    id: 'r-c1-8', level: 'c1', icon: '🚂', title: '¡Adiós, Cordera! (fragmento)',
    author: 'Leopoldo Alas «Clarín»', source: '«¡Adiós, Cordera!» (1892), in El Señor y lo demás son cuentos. Public domain; spelling lightly modernised.',
    text: [
      '¡Eran tres: siempre los tres! Rosa, Pinín y la Cordera.',
      'El prao Somonte era un recorte triangular de terciopelo verde tendido, como una colgadura, cuesta abajo por la loma. Uno de sus ángulos, el inferior, lo despuntaba el camino de hierro de Oviedo a Gijón. Un palo del telégrafo, plantado allí como pendón de conquista, con sus jícaras blancas y sus alambres paralelos, a derecha e izquierda, representaba para Rosa y Pinín el ancho mundo desconocido, misterioso, temible, eternamente ignorado.',
      'Rosa, menos audaz, pero más enamorada de lo desconocido, se contentaba con arrimar el oído al palo del telégrafo, y minutos, y hasta cuartos de hora, pasaba escuchando los formidables rumores metálicos que el viento arrancaba a las fibras del pino seco en contacto con el alambre.'
    ],
    tr: [
      'There were three of them: always the three! Rosa, Pinín and the Cordera (the cow).',
      'The Somonte meadow was a triangular cut of green velvet hung, like a drape, down the slope of the hill. One of its corners, the lowest, was clipped by the Oviedo–Gijón railway. A telegraph pole, planted there like a banner of conquest, with its white insulators and its parallel wires to right and left, represented for Rosa and Pinín the wide world: unknown, mysterious, fearsome, eternally ignored.',
      'Rosa, less daring but more in love with the unknown, was content to put her ear to the telegraph pole, and she would spend minutes, even quarter-hours, listening to the tremendous metallic murmurs that the wind drew from the fibres of the dry pine in contact with the wire.'
    ],
    gloss: [['el prao', '(Asturian) meadow = prado'], ['el terciopelo', 'velvet'], ['la colgadura', 'drape / hanging'], ['la loma', 'hillock'], ['el camino de hierro', '(old) railway'], ['el pendón', 'banner'], ['la jícara', '(here) porcelain insulator'], ['audaz', 'daring'], ['arrimar', 'to bring close'], ['el rumor', 'murmur / sound']],
    quiz: [
      ['¿Quiénes son «los tres»?', 'Dos niños y una vaca', ['Dos niños y una vaca', 'Tres hermanos', 'Tres vacas']],
      ['¿Qué atraviesa una esquina del prado?', 'El ferrocarril de Oviedo a Gijón', ['El ferrocarril de Oviedo a Gijón', 'Un río', 'Una carretera']],
      ['¿Qué representaba el palo del telégrafo para los niños?', 'El mundo desconocido', ['El mundo desconocido', 'Su casa', 'Un juguete']],
      ['¿Qué hacía Rosa junto al palo?', 'Escuchaba los sonidos del alambre', ['Escuchaba los sonidos del alambre', 'Trepaba hasta arriba', 'Dibujaba en la madera']]
    ]
  },
  {
    id: 'r-c1-9', level: 'c1', icon: '🏞️', title: 'Lazarillo de Tormes (fragmento)',
    author: 'Anónimo', source: 'La vida de Lazarillo de Tormes, Tratado primero (1554). Public domain; spelling lightly modernised.',
    text: [
      'Pues sepa vuestra merced, ante todas cosas, que a mí me llaman Lázaro de Tormes, hijo de Tomé González y de Antona Pérez, naturales de Tejares, aldea de Salamanca.',
      'Mi nacimiento fue dentro del río Tormes, por la cual causa tomé el sobrenombre, y fue desta manera. Mi padre, que Dios perdone, tenía cargo de proveer una molienda de una aceña que está ribera de aquel río, en la cual fue molinero más de quince años.',
      'Y estando mi madre una noche en la aceña, preñada de mí, tomóle el parto y parióme allí. De manera que con verdad me puedo decir nascido en el río.'
    ],
    tr: [
      'Your Grace must know, first of all, that I am called Lázaro de Tormes, son of Tomé González and Antona Pérez, natives of Tejares, a village near Salamanca.',
      'I was born inside the river Tormes, which is why I took that surname, and it happened like this. My father, may God forgive him, was in charge of supplying the grinding of a water mill on the bank of that river, where he was a miller for more than fifteen years.',
      'And one night, when my mother was at the mill, pregnant with me, she went into labour and gave birth to me there. So I can truly say I was born in the river.'
    ],
    gloss: [['vuestra merced', 'Your Grace (old form of usted)'], ['natural de', 'native of'], ['el sobrenombre', 'surname / nickname'], ['desta', '(archaic) de esta'], ['la aceña', 'water mill'], ['la molienda', 'grinding (of grain)'], ['ribera de', 'on the bank of'], ['preñada', 'pregnant'], ['tomóle el parto', 'she went into labour'], ['nascido', '(archaic) nacido']],
    quiz: [
      ['¿Por qué se llama Lázaro «de Tormes»?', 'Porque nació en el río Tormes', ['Porque nació en el río Tormes', 'Porque su padre se llamaba Tormes', 'Porque vivía en Salamanca']],
      ['¿Cuál era el oficio de su padre?', 'Molinero', ['Molinero', 'Pescador', 'Soldado']],
      ['¿A quién se dirige el narrador?', 'A «vuestra merced»', ['A «vuestra merced»', 'A su madre', 'A Dios']],
      ['¿A qué género pertenece el Lazarillo?', 'La novela picaresca', ['La novela picaresca', 'La novela de caballerías', 'La poesía mística']]
    ]
  }
);
