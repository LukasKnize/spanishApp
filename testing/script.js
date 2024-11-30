// Sample JSON data
const flashcards = [
    {wordToGuess:'abecedario, el', hint: 'abeceda'},{wordToGuess:'abogado/a, el/la', hint: 'právník'},{wordToGuess:'actuar', hint: 'hrát, vystupovat'},{wordToGuess:'adecuado/a', hint: 'adekvátní'},{wordToGuess:'adivinar', hint: 'hádat'},{wordToGuess:'afirmación, la', hint: 'potvrzení'},{wordToGuess:'ahora', hint: 'teď'},{wordToGuess:'aire, el', hint: 'vzduch'},{wordToGuess:'alto/a', hint: 'vysoký'},{wordToGuess:'amigo/a, el/la', hint: 'kamarád'},{wordToGuess:'animal, el', hint: 'zvíře'},{wordToGuess:'antes', hint: '(de)  před'},{wordToGuess:'añadir', hint: 'přidat'},{wordToGuess:'aparecer', hint: 'zdát se, objevit se'},{wordToGuess:'apellido, el', hint: 'příjmení'},{wordToGuess:'aquí', hint: 'tady'},{wordToGuess:'Argentina', hint: 'Argentina'},{wordToGuess:'argentino/a', hint: 'Argentinec'},{wordToGuess:'arquitecto/a, el/la', hint: 'architekt'},{wordToGuess:'artista, el/la', hint: 'umělec'},{wordToGuess:'así', hint: 'tak'},{wordToGuess:'aunque', hint: 'ačkoliv, přestože'},{wordToGuess:'ayudar', hint: 'pomoct'},{wordToGuess:'bandeja, la', hint: 'tác, podnos'},{wordToGuess:'bandera, la', hint: 'vlajka'},{wordToGuess:'bar, el', hint: 'bar'},{wordToGuess:'bien', hint: 'dobře'},{wordToGuess:'billete, el', hint: 'lístek, jízdenka'},{wordToGuess:'blanco/a', hint: 'bílý'},{wordToGuess:'botella, la', hint: 'láhev'},{wordToGuess:'Brasil', hint: 'Brazílie'},{wordToGuess:'Brasileño/a', hint: 'Brazilec'},{wordToGuess:'bueno/a', hint: 'dobrý'},{wordToGuess:'cada', hint: 'každý'},{wordToGuess:'cadena, la', hint: 'řetěz'},{wordToGuess:'caja, la', hint: 'krabice'},{wordToGuess:'calle, la', hint: 'ulice'},{wordToGuess:'cámara, la', hint: 'fotoaparát'},{wordToGuess:'camarero/a, el/la', hint: 'číšník'},{wordToGuess:'capital, la', hint: 'hlavní město'},{wordToGuess:'casco, el', hint: 'historické centrum, helma'},{wordToGuess:'casilla, la', hint: 'rámeček, mezera'},{wordToGuess:'castaño/a', hint: 'hnědý'},{wordToGuess:'Chile', hint: 'Chile'},{wordToGuess:'chileno/a', hint: 'Chilan'},{wordToGuess:'ciudad, la', hint: 'město'},{wordToGuess:'claro/a', hint: 'jasný, světlý'},{wordToGuess:'clase, la', hint: 'třída'},{wordToGuess:'clínica, la', hint: 'klinika'},{wordToGuess:'coche, el', hint: 'auto'},{wordToGuess:'cocinero/a, el/la', hint: 'kuchař'},{wordToGuess:'Colombia', hint: 'Kolumbie'},{wordToGuess:'colombiano/a', hint: 'Kolumbijec'},{wordToGuess:'cómo', hint: 'jak'},{wordToGuess:'compañero/a, el/la', hint: 'kamarád, spolužák (de clase)'},{wordToGuess:'completo/a', hint: 'kompletní'},{wordToGuess:'confirmar', hint: 'potvrdit'},{wordToGuess:'congreso, el', hint: 'kongres'},{wordToGuess:'conocer', hint: 'vědět, znát'},{wordToGuess:'contestar', hint: 'odpovědět'},{wordToGuess:'correcto/a', hint: 'správný'},{wordToGuess:'corregir', hint: 'opravit'},{wordToGuess:'corresponder', hint: 'odpovědět'},{wordToGuess:'correspondiente', hint: 'odpovídající'},{wordToGuess:'cuadro, el', hint: 'obrázek'},{wordToGuess:'cuál', hint: 'jaký, který'},{wordToGuess:'cuanto', hint: 'kolik'},{wordToGuess:'cuatro', hint: '4'},{wordToGuess:'cultural', hint: 'kulturní'},{wordToGuess:'dar', hint: 'dát'},{wordToGuess:'dato, el', hint: 'datum'},{wordToGuess:'dedicar', hint: 'věnovat, dedikovat'},{wordToGuess:'delante', hint: '(de)     před'},{wordToGuess:'deletrear', hint: 'vyhláskovat'},{wordToGuess:'derecha, la', hint: 'pravý'},{wordToGuess:'después', hint: '(de)  po'},{wordToGuess:'diálogo, el', hint: 'dialog'},{wordToGuess:'día, el', hint: 'den'},{wordToGuess:'dibujo, el', hint: 'obrázek'},{wordToGuess:'distinguir', hint: 'odlišit'},{wordToGuess:'distinto/a', hint: 'odlišný'},{wordToGuess:'domicilio, el', hint: 'bydliště'},{wordToGuess:'dónde', hint: 'kde'},{wordToGuess:'Ecuador', hint: 'Ekvádor'},{wordToGuess:'ejemplo, el', hint: 'příklad'},{wordToGuess:'ejercicio, el', hint: 'cvičení'},{wordToGuess:'empleado/a, el/la', hint: 'zaměstnanec'},{wordToGuess:'empresa, la', hint: 'firma'},{wordToGuess:'entre', hint: 'mezi'},{wordToGuess:'entrevista, la', hint: 'rozhovor'},{wordToGuess:'entrevistador/a, el/la', hint: 'dotazovatel'},{wordToGuess:'escuela, la', hint: 'škola'},{wordToGuess:'España', hint: 'Španělsko'},{wordToGuess:'español/-a', hint: 'Španěl'},{wordToGuess:'estadounidense', hint: 'z USA'},{wordToGuess:'estudiante, el/la', hint: 'student'},{wordToGuess:'estudiar', hint: 'studovat'},{wordToGuess:'famoso/a', hint: 'známý'},{wordToGuess:'femenino/a', hint: 'ženský'},{wordToGuess:'ficha, la', hint: 'formulář'},{wordToGuess:'fontanero/a, el/la', hint: 'instalatér'},{wordToGuess:'forma, la', hint: 'forma'},{wordToGuess:'foto, la', hint: 'fotka'},{wordToGuess:'frase, la', hint: 'věta'},{wordToGuess:'gente, la', hint: 'lidé'},{wordToGuess:'gorra, la', hint: 'čepice'},{wordToGuess:'gracias', hint: 'děkuji'},{wordToGuess:'Grecia', hint: 'Řecko'},{wordToGuess:'griego/a', hint: 'Řek'},{wordToGuess:'grupo, el', hint: 'skupina'},{wordToGuess:'gustar', hint: 'mít rád'},{wordToGuess:'habitante, el', hint: 'obyvatel'},{wordToGuess:'hablar', hint: 'mluvit'},{wordToGuess:'hasta', hint: 'až do'},{wordToGuess:'hay', hint: 'je, existuje'},{wordToGuess:'herramienta, la', hint: 'nástroj'},{wordToGuess:'hispanoamérica', hint: 'Latinská Amerika'},{wordToGuess:'hola', hint: 'ahoj'},{wordToGuess:'hospital, el', hint: 'nemocnice'},{wordToGuess:'hotel, el', hint: 'hotel'},{wordToGuess:'identificación, la', hint: 'identifikace'},{wordToGuess:'idioma, el', hint: 'jazyk'},{wordToGuess:'igual', hint: 'stejný'},{wordToGuess:'importante', hint: 'důležitý'},{wordToGuess:'información, la', hint: 'informace'},{wordToGuess:'informador/-a, el/la', hint: 'informátor, zpravodaj'},{wordToGuess:'inglés/a', hint: 'Angličan'},{wordToGuess:'integrado/a', hint: 'začleněný'},{wordToGuess:'intentar', hint: 'zkusit'},{wordToGuess:'internacional', hint: 'mezinárodní'},{wordToGuess:'interrogación, la', hint: 'otázka'},{wordToGuess:'inventar', hint: 'vymyslet, vytvořit'},{wordToGuess:'iraní', hint: 'Íránec'},{wordToGuess:'Italia', hint: 'Itálie'},{wordToGuess:'italiano/a', hint: 'Ital'},{wordToGuess:'izquierda, la', hint: 'levý'},{wordToGuess:'japonés/-a', hint: 'Japonec'},{wordToGuess:'lengua, la', hint: 'jazyk'},{wordToGuess:'letra, la', hint: 'písmeno'},{wordToGuess:'mano, la', hint: 'ruka'},{wordToGuess:'mapa, el', hint: 'mapa'},{wordToGuess:'marca, la', hint: 'značka, stopa'},{wordToGuess:'mal', hint: 'špantně'},{wordToGuess:'más', hint: 'více'},{wordToGuess:'masculino/a', hint: 'mužský'},{wordToGuess:'médico/a', hint: 'lékař'},{wordToGuess:'mencionar', hint: 'zmínit'},{wordToGuess:'mexicano/a', hint: 'Mexičan'},{wordToGuess:'México', hint: 'Mexiko'},{wordToGuess:'micrófono, el', hint: 'mikrofon'},{wordToGuess:'muy', hint: 'velmi'},{wordToGuess:'nacionalidad, la', hint: 'národnost'},{wordToGuess:'Nicaragua', hint: 'Nicaragua'},{wordToGuess:'Nicaragüense', hint: 'Nikaragujec'},{wordToGuess:'nombre, el', hint: 'jméno'},{wordToGuess:'norteamericano/a', hint: 'Severoameričan'},{wordToGuess:'nuevo/a', hint: 'nový'},{wordToGuess:'objeto, el', hint: 'objekt'},{wordToGuess:'ocupación, la', hint: 'činnost, aktivita'},{wordToGuess:'ocupar', hint: 'zabývat se, zaměstnat'},{wordToGuess:'oficial', hint: 'oficiální'},{wordToGuess:'oficina, la', hint: 'kancelář'},{wordToGuess:'oído, el', hint: 'sluch'},{wordToGuess:'opción, la', hint: 'možnost'},{wordToGuess:'ordenar', hint: 'srovnat, seřadit'},{wordToGuess:'otro/a', hint: 'jiný, další'},{wordToGuess:'paciente, el', hint: 'pacient'},{wordToGuess:'país, el', hint: 'stát'},{wordToGuess:'palabra, la', hint: 'slovo'},{wordToGuess:'para', hint: 'aby, pro'},{wordToGuess:'pareja, la', hint: 'partner'},{wordToGuess:'paréntesis, el', hint: 'závorky'},{wordToGuess:'participante, el', hint: 'účastník'},{wordToGuess:'pedir', hint: 'prosit, žádat'},{wordToGuess:'peluquería, la', hint: 'kadeřnictví'},{wordToGuess:'peluquero/a, el/la', hint: 'kadeřník'},{wordToGuess:'pequeño/a', hint: 'malý'},{wordToGuess:'perfecto/a', hint: 'perfektní'},{wordToGuess:'periódico, el', hint: 'noviny'},{wordToGuess:'periodismo, el', hint: 'novinařina'},{wordToGuess:'periodista, el/la', hint: 'novinář'},{wordToGuess:'pero', hint: 'ale'},{wordToGuess:'perro, el', hint: 'pes'},{wordToGuess:'persona, la', hint: 'osoba'},{wordToGuess:'personal', hint: 'personál'},{wordToGuess:'personalidad, la', hint: 'osobnost'},{wordToGuess:'Perú', hint: 'Peru'},{wordToGuess:'peruano/a', hint: 'Peruánec'},{wordToGuess:'pintor/-a, el/la', hint: 'malíř'},{wordToGuess:'piso, el', hint: 'byt'},{wordToGuess:'pizarra, la', hint: 'tabule'},{wordToGuess:'pizzería, la', hint: 'pizzerie'},{wordToGuess:'plano, el', hint: 'plán'},{wordToGuess:'población, la', hint: 'osídlení, populace'},{wordToGuess:'policía, la', hint: 'policie'},{wordToGuess:'practicar', hint: 'cvičit, praktikovat'},{wordToGuess:'pregunta, la', hint: 'otázka'},{wordToGuess:'preguntar', hint: 'ptát se'},{wordToGuess:'presentar', hint: 'představit'},{wordToGuess:'principio, el', hint: 'začátek'},{wordToGuess:'profesión, la', hint: 'profese'},{wordToGuess:'profesor/-a, el/la', hint: 'professor, učitel'},{wordToGuess:'pues', hint: 'nuže, tak tedy'},{wordToGuess:'punto, el', hint: 'bod, tečka'},{wordToGuess:'puntuación, la', hint: 'interpunkce'},{wordToGuess:'puntuar', hint: 'obodovat'},{wordToGuess:'que', hint: 'co'},{wordToGuess:'reconocer', hint: 'poznat'},{wordToGuess:'región, la', hint: 'region'},{wordToGuess:'relacionar', hint: 'spojit'},{wordToGuess:'rellenar', hint: 'vyplnit'},{wordToGuess:'responder', hint: 'odpovědět'},{wordToGuess:'respuesta, la', hint: 'odpověď'},{wordToGuess:'restaurante, el', hint: 'restaurace'},{wordToGuess:'saludar', hint: 'pozdravit'},{wordToGuess:'significado, el', hint: 'význam'},{wordToGuess:'signo, el', hint: 'znamení'},{wordToGuess:'sin', hint: 'bez'},{wordToGuess:'sobre', hint: 'o, na'},{wordToGuess:'también', hint: 'taky'},{wordToGuess:'tarjeta, la', hint: 'karta'},{wordToGuess:'taxista, el/la', hint: 'taxikář'},{wordToGuess:'tenista, el/la', hint: 'tenista'},{wordToGuess:'termómetro, el', hint: 'teploměr'},{wordToGuess:'texto, el', hint: 'text'},{wordToGuess:'tiqué, el', hint: 'lístek'},{wordToGuess:'tienda, la', hint: 'obchod'},{wordToGuess:'tijeras, las', hint: 'nůžky'},{wordToGuess:'todavía', hint: 'ještě'},{wordToGuess:'todo', hint: 'vše'},{wordToGuess:'trabajar', hint: 'pracovat'},{wordToGuess:'trabajo, el', hint: 'práce'},{wordToGuess:'tratar', hint: 'pokusit se, snažit se'},{wordToGuess:'universidad, la', hint: 'univerzita'},{wordToGuess:'usar', hint: 'použít'},{wordToGuess:'vaso, el', hint: 'sklenice'},{wordToGuess:'vendedor/-a, el/la', hint: 'prodavač'},{wordToGuess:'venezolano/a', hint: 'Venezolan'},{wordToGuess:'Venezuela', hint: 'Venezuela'},{wordToGuess:'verbo, el', hint: 'sloveso'},{wordToGuess:'veterinario/a', hint: 'veterinář'},{wordToGuess:'vivir', hint: 'žít'},{wordToGuess:'voz, la', hint: 'hlas'},{wordToGuess:'zoo(lógico), el', hint: 'zoo'},
];

function shuffleCards(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

shuffleCards(flashcards)

let currentIndex = 0;

const hintElement = document.getElementById('hint');
const optionsElement = document.getElementById('options');

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to set up the quiz question
function setupQuestion() {
  const currentCard = flashcards[currentIndex];
  hintElement.textContent = currentCard.hint;

  // Prepare the options
  let options = [currentCard.wordToGuess];
  while (options.length < 3) {
    const randomWord = flashcards[Math.floor(Math.random() * flashcards.length)].wordToGuess;
    if (!options.includes(randomWord)) {
      options.push(randomWord);
    }
  }

  // Shuffle the options
  shuffle(options);

  // Clear and generate buttons
  optionsElement.innerHTML = '';
  options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(button, currentCard.wordToGuess));
    optionsElement.appendChild(button);
  });
}

// Function to check the answer
function checkAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    button.classList.add('correct');
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  } else {
    button.classList.add('incorrect');
  }
}

// Function to move to the next question
function nextQuestion() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  setupQuestion();
}

// Initialize the quiz
setupQuestion();
