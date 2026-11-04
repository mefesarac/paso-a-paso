// Listening dialogues. Each line: [speaker, Spanish, English]. Played with two different TTS pitches/voices.
window.DIALOGUES = [
  {
    id: 'dl-a1-1', level: 'a1', icon: '👋', title: 'Nice to meet you', es: 'Encantado',
    speakers: { A: 'Pablo', B: 'Sofía' },
    lines: [
      ['A', 'Hola, buenos días. Me llamo Pablo. ¿Y tú?', 'Hello, good morning. My name is Pablo. And you?'],
      ['B', 'Hola, Pablo. Yo me llamo Sofía. Encantada.', 'Hi, Pablo. My name is Sofía. Nice to meet you.'],
      ['A', 'Encantado. ¿De dónde eres, Sofía?', 'Nice to meet you. Where are you from, Sofía?'],
      ['B', 'Soy de Chile, de Santiago. ¿Y tú?', 'I\'m from Chile, from Santiago. And you?'],
      ['A', 'Yo soy de España, de Bilbao. ¿Qué haces aquí?', 'I\'m from Spain, from Bilbao. What are you doing here?'],
      ['B', 'Estudio inglés en esta escuela. ¿Y tú?', 'I study English at this school. And you?'],
      ['A', 'Yo también. ¡Somos compañeros!', 'Me too. We\'re classmates!']
    ],
    quiz: [
      ['¿De dónde es Sofía?', 'De Chile', ['De Chile', 'De España', 'De México']],
      ['¿De qué ciudad es Pablo?', 'De Bilbao', ['De Bilbao', 'De Santiago', 'De Madrid']],
      ['¿Qué estudian?', 'Inglés', ['Inglés', 'Español', 'Francés']]
    ]
  },
  {
    id: 'dl-a1-2', level: 'a1', icon: '☕', title: 'At the café', es: 'En la cafetería',
    speakers: { A: 'Camarero', B: 'Clienta' },
    lines: [
      ['A', 'Buenas tardes. ¿Qué desea?', 'Good afternoon. What would you like?'],
      ['B', 'Hola. Un café con leche, por favor.', 'Hello. A coffee with milk, please.'],
      ['A', '¿Grande o pequeño?', 'Large or small?'],
      ['B', 'Pequeño. Y una tostada con tomate.', 'Small. And a piece of toast with tomato.'],
      ['A', 'Muy bien. ¿Algo más?', 'Very good. Anything else?'],
      ['B', 'No, gracias. ¿Cuánto es?', 'No, thank you. How much is it?'],
      ['A', 'Son tres euros con cincuenta.', 'That\'s three euros fifty.'],
      ['B', 'Aquí tiene. Gracias.', 'Here you are. Thank you.']
    ],
    quiz: [
      ['¿Qué pide la clienta para beber?', 'Un café con leche', ['Un café con leche', 'Un té', 'Un zumo de naranja']],
      ['¿El café es grande o pequeño?', 'Pequeño', ['Pequeño', 'Grande', 'Mediano']],
      ['¿Cuánto paga?', '3,50 €', ['3,50 €', '5 €', '2,50 €']]
    ]
  },
  {
    id: 'dl-a1-3', level: 'a1', icon: '🗺️', title: 'Asking the way', es: 'Por favor, ¿dónde está…?',
    speakers: { A: 'Turista', B: 'Señora' },
    lines: [
      ['A', 'Perdone, ¿dónde está el museo?', 'Excuse me, where is the museum?'],
      ['B', 'El museo está en la plaza Mayor. Está un poco lejos.', 'The museum is in the main square. It\'s a bit far.'],
      ['A', '¿Puedo ir andando?', 'Can I walk there?'],
      ['B', 'Sí, son quince minutos. Siga todo recto y en el segundo semáforo gire a la derecha.', 'Yes, it\'s fifteen minutes. Go straight on and at the second traffic light turn right.'],
      ['A', 'Todo recto y a la derecha. ¿Y después?', 'Straight on and right. And then?'],
      ['B', 'Después, la plaza está a la izquierda, al lado de una iglesia.', 'Then the square is on the left, next to a church.'],
      ['A', 'Muchas gracias.', 'Thank you very much.'],
      ['B', 'De nada. ¡Buen día!', 'You\'re welcome. Have a nice day!']
    ],
    quiz: [
      ['¿Dónde está el museo?', 'En la plaza Mayor', ['En la plaza Mayor', 'Al lado de la estación', 'En el parque']],
      ['¿Cuánto tiempo se tarda andando?', 'Quince minutos', ['Quince minutos', 'Cinco minutos', 'Una hora']],
      ['¿Dónde hay que girar a la derecha?', 'En el segundo semáforo', ['En el segundo semáforo', 'En la iglesia', 'En el primer semáforo']]
    ]
  },
  {
    id: 'dl-a1-4', level: 'a1', icon: '📅', title: 'Making plans', es: '¿Quedamos?',
    speakers: { A: 'Lucas', B: 'Marta' },
    lines: [
      ['A', 'Marta, ¿quieres ir al cine el sábado?', 'Marta, do you want to go to the cinema on Saturday?'],
      ['B', 'El sábado no puedo, trabajo. ¿Y el domingo?', 'I can\'t on Saturday, I\'m working. What about Sunday?'],
      ['A', 'Vale, el domingo. ¿A qué hora?', 'OK, Sunday. What time?'],
      ['B', 'Por la tarde, a las seis. ¿Qué película quieres ver?', 'In the afternoon, at six. What film do you want to see?'],
      ['A', 'Una comedia. No me gustan las películas de miedo.', 'A comedy. I don\'t like horror films.'],
      ['B', 'A mí tampoco. Entonces, el domingo a las seis en la puerta del cine.', 'Me neither. So, Sunday at six at the cinema entrance.'],
      ['A', '¡Perfecto! Hasta el domingo.', 'Perfect! See you on Sunday.']
    ],
    quiz: [
      ['¿Por qué Marta no puede el sábado?', 'Porque trabaja', ['Porque trabaja', 'Porque está enferma', 'Porque estudia']],
      ['¿A qué hora quedan?', 'A las seis', ['A las seis', 'A las ocho', 'A las cuatro']],
      ['¿Qué tipo de película van a ver?', 'Una comedia', ['Una comedia', 'Una película de miedo', 'Un documental']]
    ]
  },
  {
    id: 'dl-a2-1', level: 'a2', icon: '🏨', title: 'Hotel check-in', es: 'En el hotel',
    speakers: { A: 'Recepcionista', B: 'Cliente' },
    lines: [
      ['A', 'Buenas noches, bienvenido al hotel Mirador. ¿En qué puedo ayudarle?', 'Good evening, welcome to the Hotel Mirador. How can I help you?'],
      ['B', 'Buenas noches. Tengo una reserva a nombre de Daniel Ruiz.', 'Good evening. I have a booking under the name Daniel Ruiz.'],
      ['A', 'Sí, aquí está: una habitación doble para tres noches. ¿Me deja su pasaporte, por favor?', 'Yes, here it is: a double room for three nights. Could I have your passport, please?'],
      ['B', 'Claro, aquí tiene. ¿El desayuno está incluido?', 'Of course, here you are. Is breakfast included?'],
      ['A', 'Sí, se sirve de siete a diez en el comedor de la primera planta.', 'Yes, it\'s served from seven to ten in the dining room on the first floor.'],
      ['B', 'Perfecto. ¿Y hay wifi en la habitación?', 'Perfect. And is there wifi in the room?'],
      ['A', 'Sí, es gratuito. La contraseña está en la tarjeta. Su habitación es la 305, en la tercera planta. El ascensor está a la izquierda.', 'Yes, it\'s free. The password is on the card. Your room is 305, on the third floor. The lift is on the left.'],
      ['B', 'Muchas gracias. ¡Buenas noches!', 'Thank you very much. Good night!']
    ],
    quiz: [
      ['¿Cuántas noches se queda el cliente?', 'Tres', ['Tres', 'Dos', 'Cinco']],
      ['¿Hasta qué hora se sirve el desayuno?', 'Hasta las diez', ['Hasta las diez', 'Hasta las nueve', 'Hasta las once']],
      ['¿En qué planta está su habitación?', 'En la tercera', ['En la tercera', 'En la primera', 'En la quinta']]
    ]
  },
  {
    id: 'dl-a2-2', level: 'a2', icon: '🤒', title: 'At the doctor\'s', es: 'En el médico',
    speakers: { A: 'Doctora', B: 'Paciente' },
    lines: [
      ['A', 'Buenos días. Siéntese, por favor. ¿Qué le pasa?', 'Good morning. Please sit down. What\'s the matter?'],
      ['B', 'Desde hace tres días me duele mucho la garganta y tengo tos.', 'For three days I\'ve had a very sore throat and a cough.'],
      ['A', '¿Tiene fiebre?', 'Do you have a temperature?'],
      ['B', 'Anoche tuve treinta y ocho, pero hoy estoy un poco mejor.', 'Last night I had thirty-eight, but today I\'m a little better.'],
      ['A', 'A ver, abra la boca... Sí, tiene la garganta muy roja. Es una infección.', 'Let\'s see, open your mouth... Yes, your throat is very red. It\'s an infection.'],
      ['B', '¿Tengo que tomar antibióticos?', 'Do I have to take antibiotics?'],
      ['A', 'Sí. Tome una pastilla cada ocho horas durante una semana. Y beba mucha agua.', 'Yes. Take one pill every eight hours for a week. And drink a lot of water.'],
      ['B', '¿Puedo ir a trabajar?', 'Can I go to work?'],
      ['A', 'Mejor descanse dos días en casa. Le doy un justificante.', 'Better rest at home for two days. I\'ll give you a sick note.']
    ],
    quiz: [
      ['¿Desde cuándo le duele la garganta?', 'Desde hace tres días', ['Desde hace tres días', 'Desde ayer', 'Desde hace una semana']],
      ['¿Cada cuántas horas debe tomar la pastilla?', 'Cada ocho horas', ['Cada ocho horas', 'Cada doce horas', 'Cada cuatro horas']],
      ['¿Qué le recomienda la doctora sobre el trabajo?', 'Descansar dos días en casa', ['Descansar dos días en casa', 'Ir a trabajar normalmente', 'Trabajar solo por la mañana']]
    ]
  },
  {
    id: 'dl-a2-3', level: 'a2', icon: '👗', title: 'In a clothes shop', es: 'En una tienda de ropa',
    speakers: { A: 'Dependiente', B: 'Clienta' },
    lines: [
      ['A', 'Hola, ¿puedo ayudarla?', 'Hello, can I help you?'],
      ['B', 'Sí, estoy buscando una chaqueta para el invierno.', 'Yes, I\'m looking for a jacket for winter.'],
      ['A', 'Tenemos estas de lana. ¿Qué talla usa?', 'We have these woollen ones. What size are you?'],
      ['B', 'La treinta y ocho. ¿La tiene en azul?', 'Thirty-eight. Do you have it in blue?'],
      ['A', 'En azul solo nos queda la cuarenta. En gris sí tenemos la treinta y ocho.', 'In blue we only have a forty left. In grey we do have a thirty-eight.'],
      ['B', 'Vale, me pruebo la gris. ¿Dónde están los probadores?', 'OK, I\'ll try on the grey one. Where are the changing rooms?'],
      ['A', 'Al fondo, a la derecha.', 'At the back, on the right.'],
      ['B', 'Me queda muy bien. ¿Cuánto cuesta?', 'It fits me very well. How much is it?'],
      ['A', 'Setenta euros, pero hoy tiene un veinte por ciento de descuento.', 'Seventy euros, but today it\'s twenty per cent off.'],
      ['B', '¡Qué bien! Me la llevo.', 'Great! I\'ll take it.']
    ],
    quiz: [
      ['¿Qué busca la clienta?', 'Una chaqueta', ['Una chaqueta', 'Un vestido', 'Unos zapatos']],
      ['¿De qué color se prueba la chaqueta?', 'Gris', ['Gris', 'Azul', 'Negra']],
      ['¿Qué descuento hay hoy?', 'Un veinte por ciento', ['Un veinte por ciento', 'Un diez por ciento', 'Un cincuenta por ciento']]
    ]
  },
  {
    id: 'dl-a2-4', level: 'a2', icon: '🏖️', title: 'How was your holiday?', es: '¿Qué tal las vacaciones?',
    speakers: { A: 'Irene', B: 'Jorge' },
    lines: [
      ['A', '¡Hola, Jorge! ¿Qué tal las vacaciones?', 'Hi, Jorge! How was your holiday?'],
      ['B', '¡Genial! Estuve diez días en Cuba con mi novia.', 'Great! I spent ten days in Cuba with my girlfriend.'],
      ['A', '¡Qué envidia! ¿Qué hicisteis?', 'I\'m so jealous! What did you do?'],
      ['B', 'Primero visitamos La Habana. Paseamos por el Malecón y escuchamos música en directo todas las noches.', 'First we visited Havana. We walked along the Malecón and listened to live music every night.'],
      ['A', '¿Y fuisteis a la playa?', 'And did you go to the beach?'],
      ['B', 'Sí, después fuimos a Varadero. El agua estaba buenísima. Lo único malo fue el último día: perdimos el autobús al aeropuerto.', 'Yes, then we went to Varadero. The water was lovely. The only bad thing was the last day: we missed the bus to the airport.'],
      ['A', '¡No me digas! ¿Y qué pasó?', 'No way! And what happened?'],
      ['B', 'Tuvimos que coger un taxi carísimo, pero llegamos a tiempo.', 'We had to take a really expensive taxi, but we made it on time.']
    ],
    quiz: [
      ['¿Cuántos días estuvo Jorge en Cuba?', 'Diez', ['Diez', 'Siete', 'Quince']],
      ['¿Qué hacían por las noches en La Habana?', 'Escuchaban música en directo', ['Escuchaban música en directo', 'Bailaban en la playa', 'Dormían temprano']],
      ['¿Qué problema tuvieron el último día?', 'Perdieron el autobús', ['Perdieron el autobús', 'Perdieron el vuelo', 'Perdieron las maletas']]
    ]
  },
  {
    id: 'dl-b1-1', level: 'b1', icon: '💼', title: 'A job interview', es: 'Una entrevista de trabajo',
    speakers: { A: 'Entrevistadora', B: 'Candidato' },
    lines: [
      ['A', 'Buenos días, señor Molina. Cuéntenos un poco sobre su experiencia.', 'Good morning, Mr Molina. Tell us a bit about your experience.'],
      ['B', 'Pues, terminé la carrera de Turismo hace cuatro años y desde entonces he trabajado en dos hoteles en la costa.', 'Well, I finished my Tourism degree four years ago and since then I\'ve worked in two hotels on the coast.'],
      ['A', '¿Por qué quiere dejar su trabajo actual?', 'Why do you want to leave your current job?'],
      ['B', 'Me gusta mucho, pero busco un puesto con más responsabilidad. Además, me gustaría vivir en una ciudad más grande.', 'I really like it, but I\'m looking for a position with more responsibility. Also, I\'d like to live in a bigger city.'],
      ['A', 'En este puesto tendría que hablar con clientes internacionales. ¿Qué idiomas habla?', 'In this position you would have to talk to international clients. What languages do you speak?'],
      ['B', 'Hablo inglés con fluidez y tengo un nivel intermedio de alemán. Ahora estoy estudiando francés.', 'I speak English fluently and I have an intermediate level of German. I\'m studying French now.'],
      ['A', 'Muy bien. ¿Cuándo podría empezar?', 'Very good. When could you start?'],
      ['B', 'Tendría que avisar a mi empresa con quince días de antelación, así que a principios del mes que viene.', 'I\'d have to give my company two weeks\' notice, so at the beginning of next month.']
    ],
    quiz: [
      ['¿Qué estudió el candidato?', 'Turismo', ['Turismo', 'Derecho', 'Idiomas']],
      ['¿Por qué quiere cambiar de trabajo?', 'Busca más responsabilidad', ['Busca más responsabilidad', 'No le gusta su jefe', 'Gana poco dinero']],
      ['¿Qué idioma está estudiando ahora?', 'Francés', ['Francés', 'Alemán', 'Inglés']]
    ]
  },
  {
    id: 'dl-b1-2', level: 'b1', icon: '🔧', title: 'A complaint', es: 'Una reclamación',
    speakers: { A: 'Cliente', B: 'Empleada' },
    lines: [
      ['A', 'Buenas tardes. Compré esta cafetera hace una semana y ya no funciona.', 'Good afternoon. I bought this coffee maker a week ago and it has already stopped working.'],
      ['B', 'Vaya, lo siento. ¿Tiene el ticket de compra?', 'Oh, I\'m sorry. Do you have the receipt?'],
      ['A', 'Sí, aquí lo tiene. La usé solo tres veces y de repente dejó de calentar el agua.', 'Yes, here it is. I only used it three times and suddenly it stopped heating the water.'],
      ['B', 'Entiendo. Podemos enviarla al servicio técnico o cambiársela por otra nueva.', 'I see. We can send it to the repair service or exchange it for a new one.'],
      ['A', 'Preferiría que me devolvieran el dinero. No quiero arriesgarme con el mismo modelo.', 'I\'d rather you refunded my money. I don\'t want to risk it with the same model.'],
      ['B', 'De acuerdo. Como está dentro del plazo de quince días, no hay problema. ¿Pagó con tarjeta?', 'All right. As it\'s within the fifteen-day period, there\'s no problem. Did you pay by card?'],
      ['A', 'Sí, con tarjeta.', 'Yes, by card.'],
      ['B', 'Entonces le devolveremos el importe en la misma tarjeta en unos tres días.', 'Then we\'ll refund the amount to the same card in about three days.']
    ],
    quiz: [
      ['¿Qué problema tiene la cafetera?', 'No calienta el agua', ['No calienta el agua', 'Está rota por fuera', 'Hace mucho ruido']],
      ['¿Qué prefiere el cliente?', 'Que le devuelvan el dinero', ['Que le devuelvan el dinero', 'Una cafetera nueva', 'Repararla']],
      ['¿Cuándo recibirá el dinero?', 'En unos tres días', ['En unos tres días', 'Ahora mismo', 'En quince días']]
    ]
  },
  {
    id: 'dl-b1-3', level: 'b1', icon: '🏠', title: 'Sharing a flat', es: 'Compartir piso',
    speakers: { A: 'Nuria', B: 'Álex' },
    lines: [
      ['A', 'Álex, tenemos que hablar de la limpieza. La cocina está siempre sucia.', 'Álex, we need to talk about the cleaning. The kitchen is always dirty.'],
      ['B', 'Tienes razón, perdona. Últimamente llego muy tarde del trabajo y estoy agotado.', 'You\'re right, sorry. Lately I get home very late from work and I\'m exhausted.'],
      ['A', 'Lo entiendo, pero no es justo que yo friegue los platos todos los días.', 'I understand, but it\'s not fair that I wash the dishes every day.'],
      ['B', '¿Y si hacemos un horario? Yo podría encargarme del baño y de sacar la basura.', 'What if we make a schedule? I could take care of the bathroom and taking out the rubbish.'],
      ['A', 'Me parece bien. Y la cocina, ¿la limpiamos por turnos, una semana cada uno?', 'Sounds good. And the kitchen, shall we take turns cleaning it, a week each?'],
      ['B', 'Vale. Empiezo yo esta semana para compensar.', 'OK. I\'ll start this week to make up for it.'],
      ['A', 'Genial. Así nos llevaremos mejor.', 'Great. That way we\'ll get on better.']
    ],
    quiz: [
      ['¿Cuál es el problema?', 'La cocina está siempre sucia', ['La cocina está siempre sucia', 'Hay mucho ruido', 'El alquiler es caro']],
      ['¿Por qué no limpia Álex?', 'Llega tarde y está agotado', ['Llega tarde y está agotado', 'No sabe limpiar', 'Está de vacaciones']],
      ['¿De qué se encargará Álex, además de la cocina?', 'El baño y la basura', ['El baño y la basura', 'La compra', 'Planchar']]
    ]
  },
  {
    id: 'dl-b1-4', level: 'b1', icon: '🎬', title: 'Talking about a film', es: 'Hablando de una película',
    speakers: { A: 'Clara', B: 'Diego' },
    lines: [
      ['A', '¿Viste la película que te recomendé?', 'Did you see the film I recommended?'],
      ['B', 'Sí, la vi el sábado. La verdad es que me esperaba más.', 'Yes, I saw it on Saturday. To be honest, I expected more.'],
      ['A', '¿En serio? A mí me encantó. ¿Qué no te gustó?', 'Really? I loved it. What didn\'t you like?'],
      ['B', 'Los actores son buenísimos, pero la historia me pareció demasiado lenta. Y el final era muy previsible.', 'The actors are excellent, but the story seemed too slow to me. And the ending was very predictable.'],
      ['A', 'Pues yo creo que el final es lo mejor. No me imaginaba que el padre fuera el culpable.', 'Well, I think the ending is the best part. I didn\'t imagine the father was the guilty one.'],
      ['B', 'Yo lo adiviné a los veinte minutos. Eso sí, la banda sonora es preciosa.', 'I guessed it after twenty minutes. Mind you, the soundtrack is beautiful.'],
      ['A', 'En eso estamos de acuerdo. La próxima la eliges tú.', 'We agree on that. Next time you choose.']
    ],
    quiz: [
      ['¿Qué opina Diego de la película?', 'Esperaba más', ['Esperaba más', 'Le encantó', 'No la vio']],
      ['¿Qué critica Diego?', 'Que la historia es lenta y previsible', ['Que la historia es lenta y previsible', 'Que los actores son malos', 'Que la música es fea']],
      ['¿En qué están de acuerdo?', 'La banda sonora es preciosa', ['La banda sonora es preciosa', 'El final es lo mejor', 'Es demasiado larga']]
    ]
  },
  {
    id: 'dl-b2-1', level: 'b2', icon: '🌱', title: 'Debate: eating less meat', es: 'Debate: comer menos carne',
    speakers: { A: 'Laura', B: 'Marcos' },
    lines: [
      ['A', 'Yo creo que deberíamos reducir el consumo de carne. La ganadería intensiva contamina muchísimo.', 'I think we should reduce meat consumption. Intensive livestock farming pollutes a huge amount.'],
      ['B', 'No digo que no tengas razón, pero no me parece justo culpar solo a los consumidores. Las grandes empresas son las que más contaminan.', 'I\'m not saying you\'re wrong, but I don\'t think it\'s fair to blame only consumers. Big companies are the ones that pollute the most.'],
      ['A', 'Por supuesto, pero si la demanda baja, las empresas tendrán que adaptarse. Cada pequeño gesto cuenta.', 'Of course, but if demand falls, companies will have to adapt. Every small gesture counts.'],
      ['B', 'Ya, pero hay mucha gente que no puede permitirse una dieta variada. La carne de pollo, por ejemplo, es de lo más barato.', 'Sure, but many people can\'t afford a varied diet. Chicken, for example, is one of the cheapest things.'],
      ['A', 'Por eso hace falta que los gobiernos apoyen la producción local y sostenible, para que comer bien no sea un lujo.', 'That\'s why governments need to support local, sustainable production, so that eating well isn\'t a luxury.'],
      ['B', 'En eso coincido contigo. Aunque dudo que se tomen medidas pronto.', 'I agree with you on that. Although I doubt measures will be taken soon.']
    ],
    quiz: [
      ['¿Cuál es la postura de Laura?', 'Hay que reducir el consumo de carne', ['Hay que reducir el consumo de carne', 'Hay que prohibir la carne', 'La carne no contamina']],
      ['¿Qué argumento usa Marcos?', 'Las grandes empresas contaminan más', ['Las grandes empresas contaminan más', 'La carne es sana', 'Los veganos exageran']],
      ['¿En qué están de acuerdo al final?', 'Los gobiernos deben apoyar la producción sostenible', ['Los gobiernos deben apoyar la producción sostenible', 'Hay que comer más pollo', 'No se puede hacer nada']]
    ]
  },
  {
    id: 'dl-b2-2', level: 'b2', icon: '📞', title: 'A delayed flight', es: 'Un vuelo cancelado',
    speakers: { A: 'Pasajera', B: 'Agente' },
    lines: [
      ['A', 'Disculpe, acaban de cancelar mi vuelo a Lima y nadie nos ha dado ninguna explicación.', 'Excuse me, they\'ve just cancelled my flight to Lima and nobody has given us any explanation.'],
      ['B', 'Lamento las molestias, señora. Se ha cancelado por una avería técnica en el avión.', 'I\'m sorry for the inconvenience, madam. It\'s been cancelled due to a technical fault with the plane.'],
      ['A', 'Tengo una reunión muy importante mañana por la tarde. Necesito llegar como sea.', 'I have a very important meeting tomorrow afternoon. I need to get there no matter what.'],
      ['B', 'Puedo reubicarla en el vuelo de mañana a las siete de la mañana. Llegaría a Lima a mediodía.', 'I can rebook you on tomorrow\'s flight at seven in the morning. You would arrive in Lima at midday.'],
      ['A', 'De acuerdo. ¿Y dónde voy a dormir esta noche?', 'All right. And where am I going to sleep tonight?'],
      ['B', 'La compañía se hace cargo del hotel y de la cena. Además, tiene derecho a una compensación económica.', 'The airline will cover the hotel and dinner. In addition, you are entitled to financial compensation.'],
      ['A', '¿Cómo la solicito?', 'How do I apply for it?'],
      ['B', 'Rellene este formulario en nuestra página web y adjunte la tarjeta de embarque. Le responderán en un plazo de treinta días.', 'Fill in this form on our website and attach your boarding pass. They will reply within thirty days.']
    ],
    quiz: [
      ['¿Por qué se canceló el vuelo?', 'Por una avería técnica', ['Por una avería técnica', 'Por el mal tiempo', 'Por una huelga']],
      ['¿A qué hora sale el nuevo vuelo?', 'A las siete de la mañana', ['A las siete de la mañana', 'A mediodía', 'Esta noche']],
      ['¿Qué tiene que adjuntar para la compensación?', 'La tarjeta de embarque', ['La tarjeta de embarque', 'El pasaporte', 'La factura del hotel']]
    ]
  },
  {
    id: 'dl-b2-3', level: 'b2', icon: '🎙️', title: 'Radio interview: a young chef', es: 'Entrevista: una joven chef',
    speakers: { A: 'Periodista', B: 'Chef' },
    lines: [
      ['A', 'Hoy nos acompaña Elena Prieto, que con solo veintiocho años acaba de conseguir su primera estrella Michelin. Enhorabuena, Elena.', 'Today we\'re joined by Elena Prieto, who at just twenty-eight has just won her first Michelin star. Congratulations, Elena.'],
      ['B', 'Muchas gracias. Todavía no me lo creo. Ha sido un trabajo de todo el equipo.', 'Thank you very much. I still can\'t believe it. It\'s been the whole team\'s work.'],
      ['A', '¿Cómo empezó su pasión por la cocina?', 'How did your passion for cooking begin?'],
      ['B', 'En casa de mi abuela, en un pueblo de León. Ella cocinaba con lo que tenía en el huerto y nunca tiraba nada. De ella aprendí a respetar el producto.', 'At my grandmother\'s house, in a village in León. She cooked with whatever she had in the vegetable garden and never threw anything away. From her I learnt to respect ingredients.'],
      ['A', 'Su cocina mezcla tradición y vanguardia. ¿No le da miedo que los clientes más clásicos no la entiendan?', 'Your cooking mixes tradition and innovation. Aren\'t you afraid that more traditional customers won\'t understand it?'],
      ['B', 'Al contrario. Si alguien prueba mi cocido y reconoce el sabor de su infancia, aunque la presentación sea moderna, para mí es el mayor éxito.', 'Quite the opposite. If someone tries my stew and recognises the taste of their childhood, even if the presentation is modern, that\'s the greatest success for me.'],
      ['A', '¿Y ahora qué? ¿Nuevos proyectos?', 'And now what? New projects?'],
      ['B', 'Me gustaría abrir una escuela de cocina en mi pueblo, para que los jóvenes no tengan que marcharse.', 'I\'d like to open a cookery school in my village, so that young people don\'t have to leave.']
    ],
    quiz: [
      ['¿Qué ha conseguido Elena?', 'Una estrella Michelin', ['Una estrella Michelin', 'Un premio de televisión', 'Un restaurante en Madrid']],
      ['¿Qué aprendió de su abuela?', 'A respetar el producto', ['A respetar el producto', 'A cocinar platos modernos', 'A dirigir un restaurante']],
      ['¿Qué proyecto tiene para el futuro?', 'Una escuela de cocina en su pueblo', ['Una escuela de cocina en su pueblo', 'Un restaurante en el extranjero', 'Un libro de recetas']]
    ]
  },
  {
    id: 'dl-b2-4', level: 'b2', icon: '🧑‍💻', title: 'Negotiating remote work', es: 'Negociar el teletrabajo',
    speakers: { A: 'Empleado', B: 'Jefa' },
    lines: [
      ['A', '¿Tienes cinco minutos? Quería comentarte una cosa.', 'Have you got five minutes? I wanted to talk to you about something.'],
      ['B', 'Claro, dime.', 'Sure, go ahead.'],
      ['A', 'Me gustaría trabajar desde casa dos días a la semana. Tardo casi una hora y media en llegar a la oficina.', 'I\'d like to work from home two days a week. It takes me almost an hour and a half to get to the office.'],
      ['B', 'Entiendo. El problema es que los martes y los jueves tenemos reuniones con clientes.', 'I understand. The problem is that on Tuesdays and Thursdays we have client meetings.'],
      ['A', 'Podría teletrabajar los lunes y los viernes. Y si surgiera algo urgente, vendría sin problema.', 'I could work remotely on Mondays and Fridays. And if something urgent came up, I\'d come in without any problem.'],
      ['B', 'Me parece razonable. Probemos durante tres meses y después lo evaluamos, siempre que se cumplan los plazos.', 'That seems reasonable. Let\'s try it for three months and then evaluate it, as long as deadlines are met.'],
      ['A', 'Perfecto. Muchas gracias por tu flexibilidad.', 'Perfect. Thank you very much for your flexibility.']
    ],
    quiz: [
      ['¿Por qué quiere teletrabajar el empleado?', 'Tarda mucho en llegar a la oficina', ['Tarda mucho en llegar a la oficina', 'Tiene hijos pequeños', 'No le gustan sus compañeros']],
      ['¿Qué días teletrabajará?', 'Lunes y viernes', ['Lunes y viernes', 'Martes y jueves', 'Todos los días']],
      ['¿Cuál es la condición de la jefa?', 'Que se cumplan los plazos', ['Que se cumplan los plazos', 'Que trabaje más horas', 'Que cobre menos']]
    ]
  },
  {
    id: 'dl-c1-1', level: 'c1', icon: '🏛️', title: 'Round table: tourism and cities', es: 'Mesa redonda: turismo y ciudades',
    speakers: { A: 'Moderadora', B: 'Urbanista' },
    lines: [
      ['A', 'Hay quien sostiene que el turismo masivo está expulsando a los vecinos de los centros históricos. ¿Comparte usted ese diagnóstico?', 'Some argue that mass tourism is driving residents out of historic centres. Do you share that diagnosis?'],
      ['B', 'En parte sí, aunque convendría matizarlo. El problema no es el turismo en sí, sino la falta de regulación de los pisos turísticos, que ha disparado los alquileres.', 'Partly, yes, although it should be qualified. The problem isn\'t tourism itself, but the lack of regulation of holiday flats, which has sent rents soaring.'],
      ['A', 'Sin embargo, el sector genera miles de empleos. ¿No sería contraproducente limitarlo?', 'However, the sector generates thousands of jobs. Wouldn\'t limiting it be counterproductive?'],
      ['B', 'No se trata de limitarlo, sino de gestionarlo. Una ciudad que pierde a sus habitantes acaba convirtiéndose en un decorado, y a la larga eso también ahuyenta al visitante.', 'It\'s not about limiting it, but managing it. A city that loses its inhabitants ends up becoming a stage set, and in the long run that also drives visitors away.'],
      ['A', '¿Qué medidas propondría, concretamente?', 'What measures would you propose, specifically?'],
      ['B', 'Por un lado, una moratoria de nuevas licencias en los barrios más saturados; por otro, que una parte de la tasa turística se destine a vivienda asequible. De lo contrario, el equilibrio será imposible.', 'On the one hand, a moratorium on new licences in the most saturated neighbourhoods; on the other, that part of the tourist tax goes to affordable housing. Otherwise, balance will be impossible.']
    ],
    quiz: [
      ['Según el urbanista, ¿cuál es el verdadero problema?', 'La falta de regulación de los pisos turísticos', ['La falta de regulación de los pisos turísticos', 'El número de hoteles', 'La llegada de cruceros']],
      ['¿Qué quiere decir «una ciudad convertida en decorado»?', 'Una ciudad sin vida real, solo para turistas', ['Una ciudad sin vida real, solo para turistas', 'Una ciudad muy bonita', 'Una ciudad en obras']],
      ['¿Qué propone hacer con la tasa turística?', 'Destinar una parte a vivienda asequible', ['Destinar una parte a vivienda asequible', 'Eliminarla', 'Duplicarla para los cruceros']]
    ]
  },
  {
    id: 'dl-c1-2', level: 'c1', icon: '😅', title: 'An awkward situation', es: 'Una situación incómoda',
    speakers: { A: 'Bea', B: 'Raúl' },
    lines: [
      ['A', 'Oye, ¿qué te pasa? Te noto rarísimo desde la cena del sábado.', 'Hey, what\'s up with you? You\'ve seemed really strange since Saturday\'s dinner.'],
      ['B', 'Es que metí la pata hasta el fondo. Le pregunté a Carmen que para cuándo esperaba el bebé…', 'The thing is, I really put my foot in it. I asked Carmen when the baby was due…'],
      ['A', '¡No me digas! Y no está embarazada, ¿verdad?', 'No way! And she isn\'t pregnant, is she?'],
      ['B', 'Ni de lejos. Me quedé de piedra, y ella se puso roja como un tomate. Fue horrible.', 'Not even close. I was stunned, and she went as red as a beetroot. It was awful.'],
      ['A', 'Bueno, hombre, no es para tanto. A cualquiera le puede pasar.', 'Come on, it\'s not that big a deal. It could happen to anyone.'],
      ['B', 'Ya, pero no sé cómo arreglarlo. Me da muchísima vergüenza volver a verla.', 'Sure, but I don\'t know how to fix it. I\'m so embarrassed to see her again.'],
      ['A', 'Pues lo mejor es que la llames, le pidas perdón con naturalidad y te rías un poco de ti mismo. Ya verás como en una semana nadie se acuerda.', 'Well, the best thing is to call her, apologise naturally and laugh at yourself a bit. You\'ll see, in a week nobody will remember.']
    ],
    quiz: [
      ['¿Qué error cometió Raúl?', 'Preguntó a Carmen por un embarazo que no existía', ['Preguntó a Carmen por un embarazo que no existía', 'Llegó tarde a la cena', 'Olvidó el cumpleaños de Carmen']],
      ['¿Cómo reaccionó Carmen?', 'Se puso muy roja', ['Se puso muy roja', 'Se rio mucho', 'Se fue enfadada']],
      ['¿Qué le aconseja Bea?', 'Llamarla y pedir perdón con naturalidad', ['Llamarla y pedir perdón con naturalidad', 'No volver a verla', 'Enviarle flores sin decir nada']]
    ]
  },
  {
    id: 'dl-c1-3', level: 'c1', icon: '🎓', title: 'Academic presentation', es: 'Una ponencia',
    speakers: { A: 'Ponente', B: 'Asistente' },
    lines: [
      ['A', 'Para concluir, cabe destacar que los datos de nuestro estudio apuntan a una correlación clara entre el uso intensivo de pantallas y la disminución de la capacidad de atención.', 'To conclude, it should be noted that our study\'s data point to a clear correlation between intensive screen use and reduced attention span.'],
      ['B', 'Gracias por su ponencia. Me surge una duda: ¿no se corre el riesgo de confundir correlación con causalidad?', 'Thank you for your presentation. I have a question: isn\'t there a risk of confusing correlation with causation?'],
      ['A', 'Es una objeción muy pertinente. De hecho, en ningún momento afirmamos que exista una relación causal. Lo que sí podemos constatar es que ambas variables evolucionan de forma paralela.', 'That\'s a very relevant objection. In fact, at no point do we claim there is a causal relationship. What we can confirm is that both variables evolve in parallel.'],
      ['B', '¿Y han tenido en cuenta factores como el nivel socioeconómico de los participantes?', 'And have you taken into account factors such as the participants\' socio-economic level?'],
      ['A', 'Sí, la muestra está estratificada por renta y nivel educativo. Aun así, reconozco que haría falta un estudio longitudinal para extraer conclusiones más sólidas.', 'Yes, the sample is stratified by income and education level. Even so, I acknowledge that a longitudinal study would be needed to draw firmer conclusions.']
    ],
    quiz: [
      ['¿Qué relación muestran los datos?', 'Una correlación entre pantallas y atención', ['Una correlación entre pantallas y atención', 'Una relación causal demostrada', 'Ninguna relación']],
      ['¿Qué objeción plantea el asistente?', 'Confundir correlación con causalidad', ['Confundir correlación con causalidad', 'Que la muestra es pequeña', 'Que los datos son falsos']],
      ['¿Qué reconoce el ponente al final?', 'Que haría falta un estudio longitudinal', ['Que haría falta un estudio longitudinal', 'Que se equivocó', 'Que no tuvo en cuenta la renta']]
    ]
  },
  {
    id: 'dl-c1-4', level: 'c1', icon: '🧉', title: 'Chatting in Buenos Aires', es: 'Charla porteña',
    speakers: { A: 'Facu', B: 'Vale' },
    lines: [
      ['A', '¡Che, Vale! ¿Cómo andás? Hace mil que no te veo.', 'Hey, Vale! How are you doing? I haven\'t seen you in ages.'],
      ['B', '¡Facu! Bien, bien, a full con el laburo. ¿Vos?', 'Facu! Good, good, flat out with work. You?'],
      ['A', 'Tranqui. Che, el sábado hacemos un asado en casa de mi hermano. ¿Te venís?', 'Chilling. Hey, on Saturday we\'re having a barbecue at my brother\'s place. Are you coming?'],
      ['B', '¡Dale! ¿Llevo algo? ¿Un vino, unas empanadas?', 'Sure! Shall I bring something? Some wine, some empanadas?'],
      ['A', 'Traé lo que quieras, pero no te olvidés del mate, que el tuyo es el mejor.', 'Bring whatever you want, but don\'t forget the mate, yours is the best.'],
      ['B', 'Jaja, bueno. ¿A qué hora arrancan?', 'Haha, OK. What time do you start?'],
      ['A', 'Tipo una. Vení cuando puedas.', 'Around one. Come whenever you can.']
    ],
    quiz: [
      ['¿Qué significa «laburo» en Argentina?', 'Trabajo', ['Trabajo', 'Fiesta', 'Comida']],
      ['¿Qué organiza Facu el sábado?', 'Un asado', ['Un asado', 'Un concierto', 'Una cena en un restaurante']],
      ['¿Qué forma verbal usa Facu en «traé» y «vení»?', 'El imperativo del voseo', ['El imperativo del voseo', 'El futuro', 'El pretérito']]
    ]
  }
];
