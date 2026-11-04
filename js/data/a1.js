window.COURSE = window.COURSE || [];
COURSE.push({
  id: 'a1', name: 'A1', title: 'Beginner', color: '#58cc02',
  desc: 'Greetings, numbers, family, home, food and everyday basics.',
  units: [
    {
      id: 'a1-1', icon: '👋', title: 'Greetings', es: 'Saludos',
      words: [
        ['hola', 'hello'], ['adiós', 'goodbye'], ['buenos días', 'good morning'],
        ['buenas tardes', 'good afternoon'], ['buenas noches', 'good evening / good night'],
        ['gracias', 'thank you'], ['por favor', 'please'], ['sí', 'yes'], ['bien', 'well / fine'],
        ['perdón', 'sorry / excuse me'], ['mucho gusto', 'nice to meet you'], ['hasta luego', 'see you later']
      ],
      grammar: {
        title: 'Subject pronouns and SER (to be)',
        html: `<p>Spanish verbs change their ending for each person. <b>Ser</b> is used for identity, profession, nationality and origin.</p>
<table class="g"><tr><th>Pronoun</th><th>English</th><th>ser</th></tr>
<tr><td>yo</td><td>I</td><td><b>soy</b></td></tr>
<tr><td>tú</td><td>you (informal)</td><td><b>eres</b></td></tr>
<tr><td>él / ella / usted</td><td>he / she / you (formal)</td><td><b>es</b></td></tr>
<tr><td>nosotros/as</td><td>we</td><td><b>somos</b></td></tr>
<tr><td>vosotros/as</td><td>you all (Spain)</td><td><b>sois</b></td></tr>
<tr><td>ellos / ellas / ustedes</td><td>they / you all</td><td><b>son</b></td></tr></table>
<p>To say your name: <b>Me llamo</b> Ana. (My name is Ana.) — <b>¿Cómo te llamas?</b> (What's your name?)</p>
<p class="tip">💡 Subject pronouns are often dropped: <i>Soy estudiante</i> = I am a student.</p>
<p class="tip">💡 Questions and exclamations open with an upside-down mark: <b>¿...?</b> <b>¡...!</b></p>`
      },
      fill: [
        ['Yo ___ Ana.', 'soy', ['soy', 'eres', 'es'], 'I am Ana.'],
        ['Tú ___ de Inglaterra.', 'eres', ['eres', 'soy', 'son'], 'You are from England.'],
        ['Él ___ profesor.', 'es', ['es', 'eres', 'somos'], 'He is a teacher.'],
        ['Nosotros ___ amigos.', 'somos', ['somos', 'son', 'sois'], 'We are friends.'],
        ['Ellos ___ estudiantes.', 'son', ['son', 'es', 'somos'], 'They are students.'],
        ['¿Cómo te ___?', 'llamas', ['llamas', 'llamo', 'llama'], 'What is your name?']
      ],
      sents: [
        ['Hola, me llamo Ana.', 'Hello, my name is Ana.'],
        ['¿Cómo estás?', 'How are you?'],
        ['Estoy muy bien, gracias.', 'I am very well, thank you.'],
        ['Soy de Inglaterra.', 'I am from England.'],
        ['Mucho gusto, Carlos.', 'Nice to meet you, Carlos.'],
        ['Buenas noches y hasta mañana.', 'Good night and see you tomorrow.']
      ]
    },
    {
      id: 'a1-2', icon: '🔢', title: 'Numbers & Age', es: 'Los números',
      words: [
        ['uno', 'one'], ['dos', 'two'], ['tres', 'three'], ['cuatro', 'four'], ['cinco', 'five'],
        ['seis', 'six'], ['siete', 'seven'], ['ocho', 'eight'], ['nueve', 'nine'], ['diez', 'ten'],
        ['veinte', 'twenty'], ['cien', 'one hundred']
      ],
      grammar: {
        title: 'TENER (to have) and HAY (there is / are)',
        html: `<table class="g"><tr><th>Person</th><th>tener</th></tr>
<tr><td>yo</td><td><b>tengo</b></td></tr><tr><td>tú</td><td><b>tienes</b></td></tr>
<tr><td>él / ella / usted</td><td><b>tiene</b></td></tr><tr><td>nosotros</td><td><b>tenemos</b></td></tr>
<tr><td>vosotros</td><td><b>tenéis</b></td></tr><tr><td>ellos / ustedes</td><td><b>tienen</b></td></tr></table>
<p>Spanish uses <b>tener</b> for age: <b>Tengo 25 años.</b> (I am 25 — literally "I have 25 years".)</p>
<p><b>Hay</b> means "there is / there are" and never changes: <i>Hay dos libros.</i> There are two books.</p>
<p>11–20: once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte.<br>
Tens: treinta (30), cuarenta (40), cincuenta (50) … 31 = <i>treinta y uno</i>.</p>`
      },
      fill: [
        ['Yo ___ veinte años.', 'tengo', ['tengo', 'tienes', 'tiene'], 'I am twenty years old.'],
        ['¿Cuántos años ___ tú?', 'tienes', ['tienes', 'tengo', 'tienen'], 'How old are you?'],
        ['Ella ___ diez años.', 'tiene', ['tiene', 'tengo', 'tenemos'], 'She is ten years old.'],
        ['___ tres libros en la mesa.', 'Hay', ['Hay', 'Es', 'Tiene'], 'There are three books on the table.'],
        ['Nosotros ___ dos gatos.', 'tenemos', ['tenemos', 'tienen', 'tenéis'], 'We have two cats.'],
        ['Cinco más cinco son ___.', 'diez', ['diez', 'nueve', 'doce'], 'Five plus five is ten.']
      ],
      sents: [
        ['Tengo treinta años.', 'I am thirty years old.'],
        ['¿Cuántos años tienes?', 'How old are you?'],
        ['Hay cinco sillas en la clase.', 'There are five chairs in the classroom.'],
        ['Mi número es el siete.', 'My number is seven.'],
        ['Tenemos dos hijos.', 'We have two children.']
      ]
    },
    {
      id: 'a1-3', icon: '👨‍👩‍👧', title: 'Family', es: 'La familia',
      words: [
        ['la madre', 'mother'], ['el padre', 'father'], ['el hermano', 'brother'], ['la hermana', 'sister'],
        ['el hijo', 'son'], ['la hija', 'daughter'], ['el abuelo', 'grandfather'], ['la abuela', 'grandmother'],
        ['el tío', 'uncle'], ['la tía', 'aunt'], ['el primo', 'cousin (male)'], ['la familia', 'family']
      ],
      grammar: {
        title: 'Possessive adjectives',
        html: `<table class="g"><tr><th>Singular</th><th>Plural</th><th>English</th></tr>
<tr><td>mi</td><td>mis</td><td>my</td></tr>
<tr><td>tu</td><td>tus</td><td>your (informal)</td></tr>
<tr><td>su</td><td>sus</td><td>his / her / your (formal)</td></tr>
<tr><td>nuestro/a</td><td>nuestros/as</td><td>our</td></tr>
<tr><td>vuestro/a</td><td>vuestros/as</td><td>your (all)</td></tr>
<tr><td>su</td><td>sus</td><td>their</td></tr></table>
<p>Possessives agree with the <b>thing owned</b>, not the owner: <i>mi hermano</i> → <i>mis hermanos</i>. <b>Nuestro</b> and <b>vuestro</b> also agree in gender: <i>nuestra casa</i>.</p>
<p class="tip">💡 <b>tú</b> (you, with accent) ≠ <b>tu</b> (your).</p>`
      },
      fill: [
        ['___ madre se llama Carmen. (my)', 'Mi', ['Mi', 'Mis', 'Tu'], 'My mother is called Carmen.'],
        ['¿Cómo se llama ___ padre? (your)', 'tu', ['tu', 'tú', 'tus'], 'What is your father called?'],
        ['___ hermanos son altos. (my)', 'Mis', ['Mis', 'Mi', 'Su'], 'My brothers are tall.'],
        ['Es ___ casa. (our)', 'nuestra', ['nuestra', 'nuestro', 'nuestras'], 'It is our house.'],
        ['Ellos visitan a ___ abuela. (their)', 'su', ['su', 'sus', 'mi'], 'They visit their grandmother.'],
        ['___ primos viven en Madrid. (your)', 'Tus', ['Tus', 'Tu', 'Mi'], 'Your cousins live in Madrid.']
      ],
      sents: [
        ['Mi madre se llama Carmen.', 'My mother is called Carmen.'],
        ['Tengo dos hermanos y una hermana.', 'I have two brothers and a sister.'],
        ['Nuestra familia es grande.', 'Our family is big.'],
        ['Mis abuelos viven en Sevilla.', 'My grandparents live in Seville.'],
        ['¿Cómo se llama tu padre?', 'What is your father called?']
      ]
    },
    {
      id: 'a1-4', icon: '🏠', title: 'At Home', es: 'La casa',
      words: [
        ['la casa', 'house'], ['la mesa', 'table'], ['la silla', 'chair'], ['la cama', 'bed'],
        ['la puerta', 'door'], ['la ventana', 'window'], ['el libro', 'book'], ['la cocina', 'kitchen'],
        ['el baño', 'bathroom'], ['el dormitorio', 'bedroom'], ['el coche', 'car'], ['la llave', 'key']
      ],
      grammar: {
        title: 'Gender, articles and plurals',
        html: `<p>Every Spanish noun is <b>masculine</b> or <b>feminine</b>. Nouns ending in <b>-o</b> are usually masculine, nouns ending in <b>-a</b> are usually feminine.</p>
<table class="g"><tr><th></th><th>Masculine</th><th>Feminine</th></tr>
<tr><td>the (sg.)</td><td><b>el</b> libro</td><td><b>la</b> mesa</td></tr>
<tr><td>the (pl.)</td><td><b>los</b> libros</td><td><b>las</b> mesas</td></tr>
<tr><td>a / an</td><td><b>un</b> libro</td><td><b>una</b> mesa</td></tr>
<tr><td>some</td><td><b>unos</b> libros</td><td><b>unas</b> mesas</td></tr></table>
<p>Plural: add <b>-s</b> after a vowel (casa → casas), <b>-es</b> after a consonant (ciudad → ciudades).</p>
<p class="tip">💡 Learn each noun with its article! Exceptions: <i>el día, el mapa, el problema, la mano, la foto</i>.</p>`
      },
      fill: [
        ['___ libro es rojo.', 'El', ['El', 'La', 'Los'], 'The book is red.'],
        ['___ mesa es grande.', 'La', ['La', 'El', 'Las'], 'The table is big.'],
        ['Tengo ___ coche nuevo.', 'un', ['un', 'una', 'unos'], 'I have a new car.'],
        ['Hay ___ ventana en la cocina.', 'una', ['una', 'un', 'unas'], 'There is a window in the kitchen.'],
        ['___ sillas son blancas.', 'Las', ['Las', 'Los', 'La'], 'The chairs are white.'],
        ['___ libros están aquí.', 'Los', ['Los', 'Las', 'El'], 'The books are here.']
      ],
      sents: [
        ['La casa tiene tres dormitorios.', 'The house has three bedrooms.'],
        ['El libro está en la mesa.', 'The book is on the table.'],
        ['Hay una cama en el dormitorio.', 'There is a bed in the bedroom.'],
        ['¿Dónde está la llave?', 'Where is the key?'],
        ['La cocina es pequeña.', 'The kitchen is small.']
      ]
    },
    {
      id: 'a1-5', icon: '🎨', title: 'Colours & Adjectives', es: 'Colores y adjetivos',
      words: [
        ['rojo', 'red'], ['azul', 'blue'], ['verde', 'green'], ['amarillo', 'yellow'], ['negro', 'black'],
        ['blanco', 'white'], ['grande', 'big'], ['pequeño', 'small'], ['alto', 'tall'], ['bajo', 'short'],
        ['bonito', 'pretty'], ['nuevo', 'new']
      ],
      grammar: {
        title: 'Adjective agreement, SER vs ESTAR',
        html: `<p>Adjectives usually come <b>after</b> the noun and agree with it in gender and number.</p>
<table class="g"><tr><th></th><th>Singular</th><th>Plural</th></tr>
<tr><td>Masc.</td><td>el coche roj<b>o</b></td><td>los coches roj<b>os</b></td></tr>
<tr><td>Fem.</td><td>la casa roj<b>a</b></td><td>las casas roj<b>as</b></td></tr></table>
<p>Adjectives ending in <b>-e</b> or a consonant don't change for gender: <i>grande, verde, azul</i>.</p>
<p><b>ESTAR</b> (to be): estoy, estás, está, estamos, estáis, están — for <b>temporary states</b> and <b>location</b>. <b>SER</b> is for permanent characteristics.</p>
<p class="ex">Ella <b>es</b> alta. (She is tall.) — Ella <b>está</b> cansada. (She is tired.) — Madrid <b>está</b> en España.</p>`
      },
      fill: [
        ['La casa es ___. (white)', 'blanca', ['blanca', 'blanco', 'blancas'], 'The house is white.'],
        ['Los coches son ___. (red)', 'rojos', ['rojos', 'rojo', 'rojas'], 'The cars are red.'],
        ['Mi hermana es ___. (tall)', 'alta', ['alta', 'alto', 'altas'], 'My sister is tall.'],
        ['Las flores son ___. (yellow)', 'amarillas', ['amarillas', 'amarillos', 'amarilla'], 'The flowers are yellow.'],
        ['Yo ___ cansado.', 'estoy', ['estoy', 'soy', 'es'], 'I am tired.'],
        ['Madrid ___ en España.', 'está', ['está', 'es', 'son'], 'Madrid is in Spain.']
      ],
      sents: [
        ['El cielo es azul.', 'The sky is blue.'],
        ['Tengo un coche nuevo.', 'I have a new car.'],
        ['Las manzanas son rojas y verdes.', 'The apples are red and green.'],
        ['Mi hermano es alto.', 'My brother is tall.'],
        ['Estoy muy cansado hoy.', 'I am very tired today.']
      ]
    },
    {
      id: 'a1-6', icon: '🍎', title: 'Food & Drink', es: 'Comida y bebida',
      words: [
        ['el agua', 'water'], ['el pan', 'bread'], ['la leche', 'milk'], ['el café', 'coffee'], ['el té', 'tea'],
        ['la manzana', 'apple'], ['el queso', 'cheese'], ['la carne', 'meat'], ['el pescado', 'fish (food)'],
        ['el huevo', 'egg'], ['la fruta', 'fruit'], ['el arroz', 'rice']
      ],
      grammar: {
        title: 'Regular -AR verbs (present tense)',
        html: `<table class="g"><tr><th>Person</th><th>hablar (to speak)</th></tr>
<tr><td>yo</td><td>habl<b>o</b></td></tr><tr><td>tú</td><td>habl<b>as</b></td></tr>
<tr><td>él / ella / usted</td><td>habl<b>a</b></td></tr><tr><td>nosotros</td><td>habl<b>amos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>áis</b></td></tr><tr><td>ellos / ustedes</td><td>habl<b>an</b></td></tr></table>
<p>Remove <b>-ar</b> and add the ending. Same pattern: tomar (to take / drink), cocinar (to cook), comprar (to buy), cenar (to have dinner).</p>
<p><b>Querer</b> (to want) is irregular: quiero, quieres, quiere, queremos, queréis, quieren.</p>
<p class="tip">💡 Ordering politely: <i>Quiero un café, por favor.</i> or the softer <i>Quisiera…</i></p>`
      },
      fill: [
        ['Yo ___ café por la mañana. (tomar)', 'tomo', ['tomo', 'toma', 'tomas'], 'I drink coffee in the morning.'],
        ['Tú ___ español muy bien. (hablar)', 'hablas', ['hablas', 'hablo', 'habla'], 'You speak Spanish very well.'],
        ['Ella ___ la cena. (cocinar)', 'cocina', ['cocina', 'cocino', 'cocinan'], 'She cooks dinner.'],
        ['Nosotros ___ agua. (tomar)', 'tomamos', ['tomamos', 'toman', 'tomáis'], 'We drink water.'],
        ['Ellos ___ pescado. (comprar)', 'compran', ['compran', 'compra', 'compramos'], 'They buy fish.'],
        ['Yo ___ un té, por favor. (querer)', 'quiero', ['quiero', 'quiere', 'quieres'], 'I want a tea, please.']
      ],
      sents: [
        ['Quiero un café con leche.', 'I want a coffee with milk.'],
        ['No como carne.', 'I don\'t eat meat.'],
        ['Compramos pan y queso.', 'We buy bread and cheese.'],
        ['¿Hablas español?', 'Do you speak Spanish?'],
        ['Mi madre cocina pescado.', 'My mother cooks fish.']
      ]
    },
    {
      id: 'a1-7', icon: '⏰', title: 'Daily Routine', es: 'La rutina diaria',
      words: [
        ['levantarse', 'to get up'], ['desayunar', 'to have breakfast'], ['comer', 'to eat'], ['beber', 'to drink'],
        ['vivir', 'to live'], ['escribir', 'to write'], ['leer', 'to read'], ['dormir', 'to sleep'],
        ['trabajar', 'to work'], ['estudiar', 'to study'], ['la mañana', 'morning'], ['la noche', 'night']
      ],
      grammar: {
        title: '-ER / -IR verbs and reflexive verbs',
        html: `<table class="g"><tr><th>Person</th><th>comer</th><th>vivir</th></tr>
<tr><td>yo</td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
<tr><td>tú</td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
<tr><td>él / ella</td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
<tr><td>nosotros</td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
<tr><td>vosotros</td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>
<tr><td>ellos</td><td>com<b>en</b></td><td>viv<b>en</b></td></tr></table>
<p><b>Reflexive verbs</b> (ending in <b>-se</b>) use a pronoun: levantarse → <b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>os</b> levantáis, <b>se</b> levantan.</p>
<p class="tip">💡 <b>Dormir</b> changes o → ue: duermo, duermes, duerme, dormimos, dormís, duermen.</p>`
      },
      fill: [
        ['Yo ___ en Londres. (vivir)', 'vivo', ['vivo', 'vive', 'vivimos'], 'I live in London.'],
        ['Tú ___ mucha agua. (beber)', 'bebes', ['bebes', 'bebe', 'bebo'], 'You drink a lot of water.'],
        ['Él ___ un libro. (leer)', 'lee', ['lee', 'leo', 'leen'], 'He reads a book.'],
        ['Nosotros ___ a las dos. (comer)', 'comemos', ['comemos', 'comen', 'como'], 'We eat at two.'],
        ['Ellas ___ cartas. (escribir)', 'escriben', ['escriben', 'escribe', 'escribimos'], 'They write letters.'],
        ['Yo ___ levanto a las siete.', 'me', ['me', 'te', 'se'], 'I get up at seven.']
      ],
      sents: [
        ['Me levanto a las siete.', 'I get up at seven.'],
        ['Desayuno café y pan.', 'I have coffee and bread for breakfast.'],
        ['Vivo en una ciudad grande.', 'I live in a big city.'],
        ['Por la noche leo un libro.', 'At night I read a book.'],
        ['Mi padre trabaja mucho.', 'My father works a lot.']
      ]
    },
    {
      id: 'a1-8', icon: '📅', title: 'Time & Days', es: 'La hora y los días',
      words: [
        ['lunes', 'Monday'], ['martes', 'Tuesday'], ['miércoles', 'Wednesday'], ['jueves', 'Thursday'],
        ['viernes', 'Friday'], ['sábado', 'Saturday'], ['domingo', 'Sunday'], ['hoy', 'today'],
        ['mañana', 'tomorrow'], ['ayer', 'yesterday'], ['la semana', 'week'], ['la hora', 'hour / time']
      ],
      grammar: {
        title: 'Telling the time',
        html: `<p><b>¿Qué hora es?</b> — What time is it?</p>
<p>For 1 o'clock use the singular: <b>Es la una.</b> For the others use the plural: <b>Son las dos / las tres…</b></p>
<table class="g"><tr><th>Spanish</th><th>English</th></tr>
<tr><td>y cuarto</td><td>quarter past</td></tr><tr><td>y media</td><td>half past</td></tr>
<tr><td>menos cuarto</td><td>quarter to</td></tr><tr><td>en punto</td><td>o'clock sharp</td></tr></table>
<p class="ex">Son las cuatro y media. (4:30) — Son las ocho menos cuarto. (7:45)</p>
<p>"At what time?": <b>¿A qué hora…?</b> → <b>a las</b> nueve (at nine).</p>
<p>Days are not capitalised. "On Monday": <b>el lunes</b>. "On Mondays": <b>los lunes</b>.</p>`
      },
      fill: [
        ['___ la una.', 'Es', ['Es', 'Son', 'Está'], 'It is one o\'clock.'],
        ['___ las tres y media.', 'Son', ['Son', 'Es', 'Hay'], 'It is half past three.'],
        ['La clase es ___ las nueve.', 'a', ['a', 'en', 'de'], 'The class is at nine.'],
        ['___ lunes trabajo.', 'El', ['El', 'En', 'La'], 'On Monday I work.'],
        ['Hoy ___ viernes.', 'es', ['es', 'está', 'son'], 'Today is Friday.'],
        ['Son las cinco ___ cuarto. (5:15)', 'y', ['y', 'menos', 'de'], 'It is quarter past five.']
      ],
      sents: [
        ['¿Qué hora es?', 'What time is it?'],
        ['Son las tres y cuarto.', 'It is quarter past three.'],
        ['El lunes tengo clase.', 'On Monday I have class.'],
        ['Hoy es sábado.', 'Today is Saturday.'],
        ['Mañana trabajo a las nueve.', 'Tomorrow I work at nine.']
      ]
    },
    {
      id: 'a1-9', icon: '🏙️', title: 'In the City', es: 'En la ciudad',
      words: [
        ['la calle', 'street'], ['el banco', 'bank'], ['el hospital', 'hospital'], ['la tienda', 'shop'],
        ['el restaurante', 'restaurant'], ['la escuela', 'school'], ['el parque', 'park'], ['la estación', 'station'],
        ['la farmacia', 'pharmacy'], ['cerca', 'near'], ['lejos', 'far'], ['a la derecha', 'on the right']
      ],
      grammar: {
        title: 'IR (to go) and giving directions',
        html: `<table class="g"><tr><th>Person</th><th>ir</th></tr>
<tr><td>yo</td><td><b>voy</b></td></tr><tr><td>tú</td><td><b>vas</b></td></tr>
<tr><td>él / ella / usted</td><td><b>va</b></td></tr><tr><td>nosotros</td><td><b>vamos</b></td></tr>
<tr><td>vosotros</td><td><b>vais</b></td></tr><tr><td>ellos / ustedes</td><td><b>van</b></td></tr></table>
<p>Destination: <b>ir a</b> + place. <b>a + el = al</b>: <i>Voy al banco.</i> — <b>de + el = del</b>: <i>cerca del parque</i>.</p>
<p>Location: <b>cerca de</b> (near), <b>lejos de</b> (far from), <b>al lado de</b> (next to), <b>enfrente de</b> (opposite), <b>a la derecha / a la izquierda</b> (on the right / left), <b>todo recto</b> (straight ahead).</p>`
      },
      fill: [
        ['Yo ___ al parque.', 'voy', ['voy', 'va', 'vas'], 'I am going to the park.'],
        ['¿Adónde ___ tú?', 'vas', ['vas', 'voy', 'van'], 'Where are you going?'],
        ['Vamos ___ banco.', 'al', ['al', 'a el', 'del'], 'We are going to the bank.'],
        ['El hospital está cerca ___ la estación.', 'de', ['de', 'a', 'en'], 'The hospital is near the station.'],
        ['Ellos ___ a la escuela.', 'van', ['van', 'vamos', 'va'], 'They go to school.'],
        ['La farmacia está a la ___. (right)', 'derecha', ['derecha', 'izquierda', 'cerca'], 'The pharmacy is on the right.']
      ],
      sents: [
        ['Voy al banco.', 'I am going to the bank.'],
        ['¿Dónde está la estación?', 'Where is the station?'],
        ['La farmacia está cerca del hospital.', 'The pharmacy is near the hospital.'],
        ['Siga todo recto y gire a la izquierda.', 'Go straight ahead and turn left.'],
        ['Los niños van a la escuela.', 'The children go to school.']
      ]
    },
    {
      id: 'a1-10', icon: '❤️', title: 'Likes & Hobbies', es: 'Los gustos',
      words: [
        ['gustar', 'to like (to please)'], ['la música', 'music'], ['el deporte', 'sport'], ['el fútbol', 'football'],
        ['el cine', 'cinema'], ['bailar', 'to dance'], ['cantar', 'to sing'], ['nadar', 'to swim'],
        ['viajar', 'to travel'], ['también', 'also / too'], ['tampoco', 'neither / not either'], ['mucho', 'a lot']
      ],
      grammar: {
        title: 'GUSTAR (to like)',
        html: `<p><b>Gustar</b> works like "to please": the thing you like is the subject. <i>Me gusta el café</i> = Coffee pleases me.</p>
<table class="g"><tr><th>Pronoun</th><th>Who likes</th></tr>
<tr><td>(a mí) <b>me</b></td><td>I</td></tr><tr><td>(a ti) <b>te</b></td><td>you</td></tr>
<tr><td>(a él / ella / usted) <b>le</b></td><td>he / she / you</td></tr>
<tr><td>(a nosotros) <b>nos</b></td><td>we</td></tr><tr><td>(a vosotros) <b>os</b></td><td>you all</td></tr>
<tr><td>(a ellos / ustedes) <b>les</b></td><td>they</td></tr></table>
<p>Singular noun or verb → <b>gusta</b>: <i>Me gusta el café. Me gusta bailar.</i> Plural noun → <b>gustan</b>: <i>Me gustan los perros.</i></p>
<p>Agreeing: <b>A mí también.</b> (Me too.) — after a negative: <b>A mí tampoco.</b> (Me neither.)</p>`
      },
      fill: [
        ['Me ___ el chocolate.', 'gusta', ['gusta', 'gustan', 'gusto'], 'I like chocolate.'],
        ['Me ___ los perros.', 'gustan', ['gustan', 'gusta', 'gustas'], 'I like dogs.'],
        ['¿Te ___ bailar?', 'gusta', ['gusta', 'gustan', 'gustas'], 'Do you like dancing?'],
        ['A ella ___ gusta el cine.', 'le', ['le', 'me', 'les'], 'She likes the cinema.'],
        ['A nosotros ___ gusta viajar.', 'nos', ['nos', 'os', 'les'], 'We like travelling.'],
        ['—No me gusta el café. —A mí ___.', 'tampoco', ['tampoco', 'también', 'sí'], '—I don\'t like coffee. —Me neither.']
      ],
      sents: [
        ['Me gusta mucho la música.', 'I like music a lot.'],
        ['¿Te gusta el fútbol?', 'Do you like football?'],
        ['A mi hermana le gusta bailar.', 'My sister likes dancing.'],
        ['No me gustan los lunes.', 'I don\'t like Mondays.'],
        ['Nos gusta viajar en verano.', 'We like travelling in summer.']
      ]
    }
  ]
});
