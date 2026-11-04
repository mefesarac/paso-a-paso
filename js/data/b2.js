window.COURSE = window.COURSE || [];
COURSE.push({
  id: 'b2', name: 'B2', title: 'Upper Intermediate', color: '#ff9600',
  desc: 'Hypotheses, reported speech, the passive, connectors and regrets.',
  units: [
    {
      id: 'b2-1', icon: '🎲', title: 'Hypotheses', es: 'Hipótesis',
      words: [
        ['imaginar', 'to imagine'], ['suponer', 'to suppose'], ['la posibilidad', 'possibility'], ['el riesgo', 'risk'],
        ['arriesgarse', 'to take a risk'], ['cambiar', 'to change'], ['la decisión', 'decision'], ['el mundo', 'world'],
        ['la riqueza', 'wealth'], ['la pobreza', 'poverty'], ['la oportunidad', 'opportunity'], ['el destino', 'destiny / destination']
      ],
      grammar: {
        title: 'Imperfect subjunctive and unreal conditions',
        html: `<p>Formation: take the 3rd person plural of the indefinido, drop <b>-ron</b>, add <b>-ra</b>.</p>
<table class="g"><tr><th>Infinitive</th><th>Indefinido (ellos)</th><th>Imperf. subj.</th></tr>
<tr><td>hablar</td><td>habla<b>ron</b></td><td>habla<b>ra</b></td></tr>
<tr><td>tener</td><td>tuvie<b>ron</b></td><td>tuvie<b>ra</b></td></tr>
<tr><td>ser / ir</td><td>fue<b>ron</b></td><td>fue<b>ra</b></td></tr>
<tr><td>hacer</td><td>hicie<b>ron</b></td><td>hicie<b>ra</b></td></tr>
<tr><td>poder</td><td>pudie<b>ron</b></td><td>pudie<b>ra</b></td></tr>
<tr><td>decir</td><td>dije<b>ron</b></td><td>dije<b>ra</b></td></tr></table>
<p>Endings: -ra, -ras, -ra, <b>-ramos</b> (with accent: habl<b>á</b>ramos), -rais, -ran.</p>
<p><b>Unreal present condition</b>: Si + imperfect subjunctive, conditional: <i>Si <b>tuviera</b> dinero, <b>viajaría</b>.</i> (If I had money, I would travel.)</p>
<p>After a main verb in the past: <i>Me pidió que <b>cerrara</b> la puerta.</i> (He asked me to close the door.)</p>`
      },
      fill: [
        ['Si ___ dinero, viajaría por el mundo. (tener, yo)', 'tuviera', ['tuviera', 'tengo', 'tendría'], 'If I had money, I would travel the world.'],
        ['Si yo ___ tú, aceptaría el trabajo. (ser)', 'fuera', ['fuera', 'sería', 'soy'], 'If I were you, I would accept the job.'],
        ['Me pidió que ___ la puerta. (cerrar, yo)', 'cerrara', ['cerrara', 'cierre', 'cerraba'], 'She asked me to close the door.'],
        ['Si pudiera, ___ más idiomas. (aprender)', 'aprendería', ['aprendería', 'aprendiera', 'aprendo'], 'If I could, I would learn more languages.'],
        ['Ojalá ___ más tiempo. (tener, nosotros)', 'tuviéramos', ['tuviéramos', 'tenemos', 'tendríamos'], 'If only we had more time.'],
        ['Quería que ellos ___ a la fiesta. (venir)', 'vinieran', ['vinieran', 'vengan', 'venían'], 'I wanted them to come to the party.']
      ],
      sents: [
        ['Si tuviera dinero, viajaría por el mundo.', 'If I had money, I would travel the world.'],
        ['Si yo fuera tú, aceptaría la oportunidad.', 'If I were you, I would take the opportunity.'],
        ['Me pidió que tomara una decisión.', 'He asked me to make a decision.'],
        ['Ojalá pudiera cambiar el mundo.', 'If only I could change the world.'],
        ['Sería mejor que te arriesgaras un poco.', 'It would be better if you took a bit of a risk.']
      ]
    },
    {
      id: 'b2-2', icon: '🔗', title: 'Conditions & Purpose', es: 'Condiciones',
      words: [
        ['aunque', 'although / even if'], ['para que', 'so that'], ['antes de que', 'before'], ['en cuanto', 'as soon as'],
        ['a menos que', 'unless'], ['con tal de que', 'provided that'], ['sin que', 'without'], ['hasta que', 'until'],
        ['la condición', 'condition'], ['el acuerdo', 'agreement'], ['el plazo', 'deadline / term'], ['cumplir', 'to fulfil / meet']
      ],
      grammar: {
        title: 'Conjunctions with the subjunctive',
        html: `<table class="g"><tr><th>Rule</th><th>Conjunctions</th></tr>
<tr><td>Always subjunctive</td><td>para que, antes de que, sin que, a menos que, con tal de que</td></tr>
<tr><td>Subjunctive for the future</td><td>cuando, en cuanto, hasta que, después de que, mientras</td></tr>
<tr><td>Fact vs hypothesis</td><td>aunque + indicative (fact) / + subjunctive (hypothesis)</td></tr></table>
<p class="ex">Cuando <b>llego</b> a casa, ceno. (habit) ↔ Cuando <b>llegue</b> a casa, cenaré. (future)</p>
<p class="ex">Aunque <b>llueve</b>, salgo. (It is raining, but I'm going out.) ↔ Aunque <b>llueva</b>, saldré. (Even if it rains, I'll go out.)</p>`
      },
      fill: [
        ['Te lo explico para que lo ___. (entender, tú)', 'entiendas', ['entiendas', 'entiendes', 'entender'], 'I\'m explaining it so that you understand.'],
        ['Cuando ___ a casa, te llamaré. (llegar, yo)', 'llegue', ['llegue', 'llego', 'llegaré'], 'When I get home, I\'ll call you.'],
        ['Salimos antes de que ___ a llover. (empezar)', 'empiece', ['empiece', 'empieza', 'empezará'], 'We leave before it starts to rain.'],
        ['Iré a la playa aunque ___. (llover)', 'llueva', ['llueva', 'llueve', 'lloverá'], 'I\'ll go to the beach even if it rains.'],
        ['No firmaré a menos que ___ las condiciones. (cambiar, ellos)', 'cambien', ['cambien', 'cambian', 'cambiarán'], 'I won\'t sign unless they change the conditions.'],
        ['Esperaré hasta que ___. (volver, tú)', 'vuelvas', ['vuelvas', 'vuelves', 'volverás'], 'I\'ll wait until you come back.']
      ],
      sents: [
        ['Te lo explico para que lo entiendas.', 'I\'m explaining it so that you understand.'],
        ['Cuando llegue a casa, te llamaré.', 'When I get home, I\'ll call you.'],
        ['Firmaremos el acuerdo en cuanto cumplan las condiciones.', 'We will sign the agreement as soon as they meet the conditions.'],
        ['Saldremos aunque llueva.', 'We will go out even if it rains.'],
        ['Lo hizo sin que nadie lo supiera.', 'He did it without anyone knowing.']
      ]
    },
    {
      id: 'b2-3', icon: '📰', title: 'News & Media', es: 'Los medios',
      words: [
        ['el periódico', 'newspaper'], ['el periodista', 'journalist'], ['el titular', 'headline'], ['publicar', 'to publish'],
        ['la prensa', 'the press'], ['el gobierno', 'government'], ['la ley', 'law'], ['la encuesta', 'survey'],
        ['el ciudadano', 'citizen'], ['las elecciones', 'elections'], ['investigar', 'to investigate'], ['la fuente', 'source']
      ],
      grammar: {
        title: 'The passive voice and "se"',
        html: `<p><b>Passive with ser</b>: ser + participle (+ por + agent). The participle agrees with the subject: <i>La ley <b>fue aprobada</b> por el gobierno.</i></p>
<p><b>Pasiva refleja</b>: se + 3rd person verb (agrees with the noun): <i><b>Se venden</b> pisos.</i> (Flats for sale.)</p>
<p><b>Impersonal se</b>: general statements: <i><b>Se dice</b> que…</i> (It is said that…) <i>Aquí <b>se come</b> bien.</i> (You eat well here.)</p>
<p class="tip">💡 The ser-passive is common in news writing; in conversation the <b>se</b> construction sounds more natural.</p>`
      },
      fill: [
        ['La ley fue ___ por el parlamento. (aprobar)', 'aprobada', ['aprobada', 'aprobado', 'aprobó'], 'The law was passed by parliament.'],
        ['El libro fue escrito ___ Cervantes.', 'por', ['por', 'para', 'de'], 'The book was written by Cervantes.'],
        ['___ venden pisos.', 'Se', ['Se', 'Le', 'Lo'], 'Flats for sale.'],
        ['Se ___ que habrá elecciones. (decir)', 'dice', ['dice', 'dicen', 'dicho'], 'It is said there will be elections.'],
        ['Los resultados ___ publicados ayer.', 'fueron', ['fueron', 'fue', 'son'], 'The results were published yesterday.'],
        ['En este restaurante se ___ muy bien. (comer)', 'come', ['come', 'comen', 'comido'], 'You eat very well in this restaurant.']
      ],
      sents: [
        ['La ley fue aprobada por el gobierno.', 'The law was approved by the government.'],
        ['Se dice que habrá elecciones en primavera.', 'It is said there will be elections in spring.'],
        ['Los datos de la encuesta se publicaron ayer.', 'The survey data were published yesterday.'],
        ['El periodista no reveló su fuente.', 'The journalist did not reveal his source.'],
        ['Se investigan las causas del accidente.', 'The causes of the accident are being investigated.']
      ]
    },
    {
      id: 'b2-4', icon: '🗣️', title: 'Reported Speech', es: 'Estilo indirecto',
      words: [
        ['decir', 'to say / tell'], ['preguntar', 'to ask'], ['responder', 'to answer'], ['explicar', 'to explain'],
        ['comentar', 'to comment'], ['afirmar', 'to state / claim'], ['negar', 'to deny'], ['prometer', 'to promise'],
        ['advertir', 'to warn'], ['el rumor', 'rumour'], ['quejarse', 'to complain'], ['admitir', 'to admit']
      ],
      grammar: {
        title: 'Reported speech (estilo indirecto)',
        html: `<table class="g"><tr><th>Direct</th><th>Reported (dijo que…)</th></tr>
<tr><td>Present: «Estoy cansado»</td><td>Imperfect: <b>estaba</b> cansado</td></tr>
<tr><td>Indefinido: «Lo compré»</td><td>Past perfect: lo <b>había comprado</b></td></tr>
<tr><td>Perfect: «He terminado»</td><td>Past perfect: <b>había terminado</b></td></tr>
<tr><td>Future: «Iré»</td><td>Conditional: <b>iría</b></td></tr>
<tr><td>Command: «Ven»</td><td>Imperf. subjunctive: que <b>viniera</b> / <b>fuera</b></td></tr></table>
<p>Yes/no questions use <b>si</b>: <i>Me preguntó <b>si</b> tenía hambre.</i> Other questions keep the question word: <i>Me preguntó <b>dónde</b> vivía.</i></p>
<p>Time and place words also shift: <i>hoy → aquel día, mañana → al día siguiente, aquí → allí</i>.</p>`
      },
      fill: [
        ['«Estoy cansada» → Dijo que ___ cansada.', 'estaba', ['estaba', 'está', 'esté'], 'She said she was tired.'],
        ['«Iré mañana» → Dijo que ___ al día siguiente.', 'iría', ['iría', 'irá', 'iba'], 'He said he would go the next day.'],
        ['«¿Tienes hambre?» → Me preguntó ___ tenía hambre.', 'si', ['si', 'que', 'sí'], 'She asked me if I was hungry.'],
        ['«He terminado» → Dijo que ___ terminado.', 'había', ['había', 'ha', 'habría'], 'He said he had finished.'],
        ['«Ven aquí» → Me dijo que ___ allí. (ir)', 'fuera', ['fuera', 'iba', 'vaya'], 'She told me to go there.'],
        ['«Trabajo aquí» → Dijo que ___ allí.', 'trabajaba', ['trabajaba', 'trabajo', 'trabaje'], 'He said he worked there.']
      ],
      sents: [
        ['Me dijo que estaba muy cansada.', 'She told me she was very tired.'],
        ['Nos prometió que vendría al día siguiente.', 'He promised us he would come the next day.'],
        ['Le pregunté si quería venir.', 'I asked him if he wanted to come.'],
        ['Admitió que se había equivocado.', 'She admitted she had made a mistake.'],
        ['El médico me advirtió que dejara de fumar.', 'The doctor warned me to stop smoking.']
      ]
    },
    {
      id: 'b2-5', icon: '🎭', title: 'Personality', es: 'El carácter',
      words: [
        ['orgulloso', 'proud'], ['celoso', 'jealous'], ['agradecido', 'grateful'], ['avergonzado', 'ashamed / embarrassed'],
        ['decepcionado', 'disappointed'], ['emocionado', 'excited / moved'], ['tímido', 'shy'], ['terco', 'stubborn'],
        ['sensible', 'sensitive'], ['egoísta', 'selfish'], ['generoso', 'generous'], ['el carácter', 'character / personality']
      ],
      grammar: {
        title: 'Ser / estar meaning changes and verbal periphrases',
        html: `<table class="g"><tr><th>Adjective</th><th>ser</th><th>estar</th></tr>
<tr><td>listo</td><td>clever</td><td>ready</td></tr>
<tr><td>aburrido</td><td>boring</td><td>bored</td></tr>
<tr><td>malo</td><td>bad</td><td>ill</td></tr>
<tr><td>rico</td><td>rich</td><td>tasty</td></tr>
<tr><td>orgulloso</td><td>arrogant / proud (character)</td><td>proud (of something)</td></tr></table>
<p><b>Verbal periphrases</b>:</p>
<table class="g"><tr><th>Structure</th><th>Meaning</th></tr>
<tr><td>acabar de + inf.</td><td>to have just done (<i>Acabo de llegar.</i>)</td></tr>
<tr><td>volver a + inf.</td><td>to do again</td></tr>
<tr><td>dejar de + inf.</td><td>to stop doing</td></tr>
<tr><td>seguir + gerund</td><td>to keep / still be doing</td></tr>
<tr><td>llevar + time + gerund</td><td>to have been doing for (<i>Llevo dos años estudiando.</i>)</td></tr>
<tr><td>ponerse a + inf.</td><td>to start doing</td></tr></table>`
      },
      fill: [
        ['Ya ___ listos para salir. (nosotros)', 'estamos', ['estamos', 'somos', 'estáis'], 'We are ready to go out.'],
        ['Ese chico ___ muy listo; siempre saca buenas notas.', 'es', ['es', 'está', 'son'], 'That boy is very clever; he always gets good marks.'],
        ['Acabo ___ llegar.', 'de', ['de', 'a', 'que'], 'I have just arrived.'],
        ['Llevo tres años ___ español. (estudiar)', 'estudiando', ['estudiando', 'estudiado', 'estudiar'], 'I have been studying Spanish for three years.'],
        ['He dejado ___ fumar.', 'de', ['de', 'a', 'por'], 'I have stopped smoking.'],
        ['Sigue ___ en el mismo sitio. (vivir)', 'viviendo', ['viviendo', 'vivir', 'vivido'], 'He still lives in the same place.']
      ],
      sents: [
        ['Estoy muy orgulloso de ti.', 'I am very proud of you.'],
        ['Es un chico tímido pero muy generoso.', 'He is a shy but very generous boy.'],
        ['Acabo de recibir una noticia emocionante.', 'I have just received some exciting news.'],
        ['Llevo tres años estudiando español.', 'I have been studying Spanish for three years.'],
        ['Mi hermano sigue siendo muy terco.', 'My brother is still very stubborn.']
      ]
    },
    {
      id: 'b2-6', icon: '🏛️', title: 'Society', es: 'La sociedad',
      words: [
        ['la sociedad', 'society'], ['la desigualdad', 'inequality'], ['el desempleo', 'unemployment'], ['la vivienda', 'housing'],
        ['la educación', 'education'], ['la salud pública', 'public health'], ['el derecho', 'right / law'], ['la igualdad', 'equality'],
        ['la inmigración', 'immigration'], ['la crisis', 'crisis'], ['el debate', 'debate'], ['la medida', 'measure']
      ],
      grammar: {
        title: 'Discourse connectors',
        html: `<table class="g"><tr><th>Function</th><th>Connectors</th></tr>
<tr><td>Contrast</td><td>sin embargo, no obstante, en cambio, aun así</td></tr>
<tr><td>Consequence</td><td>por lo tanto, por consiguiente, así que, de ahí que (+ subj.)</td></tr>
<tr><td>Addition</td><td>además, asimismo, incluso, es más</td></tr>
<tr><td>Cause</td><td>ya que, puesto que, dado que, debido a (+ noun)</td></tr>
<tr><td>Clarification</td><td>es decir, o sea, en otras palabras</td></tr>
<tr><td>Conclusion</td><td>en resumen, en conclusión, en definitiva</td></tr></table>
<p class="tip">💡 <b>Debido a</b> is followed by a noun, <b>ya que / puesto que</b> by a clause: <i>debido a la crisis</i> / <i>ya que hay crisis</i>.</p>`
      },
      fill: [
        ['El paro ha bajado; ___, la desigualdad sigue creciendo.', 'sin embargo', ['sin embargo', 'por lo tanto', 'además'], 'Unemployment has fallen; however, inequality keeps growing.'],
        ['No había presupuesto; ___, el proyecto se canceló.', 'por lo tanto', ['por lo tanto', 'sin embargo', 'en cambio'], 'There was no budget; therefore, the project was cancelled.'],
        ['___ la crisis, muchas empresas cerraron.', 'Debido a', ['Debido a', 'Ya que', 'Aunque'], 'Due to the crisis, many companies closed.'],
        ['No fui a la reunión ___ estaba enfermo.', 'ya que', ['ya que', 'debido a', 'sin embargo'], 'I didn\'t go to the meeting since I was ill.'],
        ['La vivienda es cara. ___, los sueldos son bajos.', 'Además', ['Además', 'En cambio', 'Por lo tanto'], 'Housing is expensive. Moreover, salaries are low.'],
        ['A él le encanta el campo; a ella, ___, le gusta la ciudad.', 'en cambio', ['en cambio', 'además', 'es decir'], 'He loves the countryside; she, on the other hand, likes the city.']
      ],
      sents: [
        ['El desempleo es uno de los mayores problemas.', 'Unemployment is one of the biggest problems.'],
        ['Sin embargo, el gobierno no ha tomado medidas.', 'However, the government has not taken measures.'],
        ['La vivienda es un derecho, no un lujo.', 'Housing is a right, not a luxury.'],
        ['Debido a la crisis, muchas familias emigraron.', 'Due to the crisis, many families emigrated.'],
        ['La educación es clave para lograr la igualdad.', 'Education is key to achieving equality.']
      ]
    },
    {
      id: 'b2-7', icon: '⏳', title: 'Regrets', es: 'Arrepentimientos',
      words: [
        ['arrepentirse', 'to regret'], ['lamentar', 'to regret / be sorry'], ['el error', 'mistake'], ['equivocarse', 'to be wrong'],
        ['la culpa', 'blame / fault'], ['perdonar', 'to forgive'], ['evitar', 'to avoid'], ['merecer', 'to deserve'],
        ['aprovechar', 'to make the most of'], ['la consecuencia', 'consequence'], ['el remordimiento', 'remorse'], ['a tiempo', 'on time']
      ],
      grammar: {
        title: 'Compound subjunctives and past conditions',
        html: `<p><b>Present perfect subjunctive</b>: <b>haya</b> + participle (haya, hayas, haya, hayamos, hayáis, hayan). <i>Me alegra que <b>hayas venido</b>.</i></p>
<p><b>Past perfect subjunctive</b>: <b>hubiera</b> + participle (hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran).</p>
<p><b>Unreal past condition</b>: Si + hubiera + participle, <b>habría</b> + participle.</p>
<p class="ex">Si <b>hubiera estudiado</b>, <b>habría aprobado</b>. — If I had studied, I would have passed.</p>
<p>Regret: <i>Ojalá no lo <b>hubiera dicho</b>.</i> — I wish I hadn't said it.</p>`
      },
      fill: [
        ['Si ___ estudiado, habría aprobado. (yo)', 'hubiera', ['hubiera', 'habría', 'había'], 'If I had studied, I would have passed.'],
        ['Si me lo hubieras dicho, te ___ ayudado.', 'habría', ['habría', 'hubiera sido', 'había'], 'If you had told me, I would have helped you.'],
        ['Me alegra que ___ venido. (tú)', 'hayas', ['hayas', 'has', 'hubieras'], 'I\'m glad you have come.'],
        ['Espero que ya ___ terminado. (ellos)', 'hayan', ['hayan', 'han', 'habían'], 'I hope they have already finished.'],
        ['Ojalá no me ___ equivocado. (yo)', 'hubiera', ['hubiera', 'habría', 'he'], 'I wish I hadn\'t been wrong.'],
        ['No creo que lo ___ hecho a propósito. (ella)', 'haya', ['haya', 'ha', 'habrá'], 'I don\'t think she did it on purpose.']
      ],
      sents: [
        ['Si hubiera estudiado más, habría aprobado.', 'If I had studied more, I would have passed.'],
        ['Me arrepiento de no haber aprovechado la oportunidad.', 'I regret not having taken the opportunity.'],
        ['Ojalá no me hubiera equivocado.', 'I wish I hadn\'t made a mistake.'],
        ['Espero que hayan llegado a tiempo.', 'I hope they have arrived on time.'],
        ['Si me lo hubieras dicho, te habría perdonado.', 'If you had told me, I would have forgiven you.']
      ]
    }
  ]
});
