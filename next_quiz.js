const additionalWordsAndTranslations5 = [
    { word: "Provide", translation: "Dostarczać" },
    { word: "storage", translation: "Składowanie" },
    { word: "support", translation: "Wsparcie" },
    { word: "distribution", translation: "Dystrybucja" },
    { word: "delivery", translation: "Dostawa" },
    { word: "maintenance", translation: "konserwacja" },
    { word: "carrier", translation: "przewoźnik" },
    { word: "freight forwarder", translation: "spedytor" },
    { word: "supplier", translation: "dostawa" },
    { word: "haulage contractor", translation: "wykonawca transportu" },
    { word: "courier", translation: "kurier" },
    { word: "consignee", translation: "odbiorca" },
    { word: "organised", translation: "zorganizowany" },
    { word: "negotiating", translation: "negocjowanie" },
    { word: "range", translation: "zakres/zasięg" },
    { word: "liaise", translation: "nawiązać łączność" },
    { word: "ensure", translation: "zapewnić" },
    { word: "transhipment", translation: "przeładunek" },
    { word: "break bulk", translation: "przerwy zbiorcze" },
    { word: "order picking", translation: "kompletacja zamówień" },
    { word: "reverse logistics", translation: "logistyka zwrotów" },
    { word: "tracking and tracing", translation: "śledzenie przesyłek" },
    { word: "warehousing", translation: "magazynowanie" },
    { word: "collection", translation: "kolekcja" },
    { word: "provider", translation: "dostawca" },
    { word: "shipping lines", translation: "linie żeglarskie" },
    { word: "fleet of vehicles", translation: "flota pojazdów" },
    { word: "air carriers", translation: "przewoźnicy lotniczy" },
    { word: "transport companies", translation: "firmy transportowe" },
    { word: "customized", translation: "dostosowane" },
    { word: "major", translation: "główny" },
    { word: "tough", translation: "bezwzględny, twardy, surowy" },
    { word: "growing pressure", translation: "narastające naciski na coś/na kogoś" },
    { word: "demand", translation: "popyt" },
    { word: "impact on", translation: "wpływ na" },
    { word: "end to end solutions", translation: "kompleksowe rozwiązania" }
  ];

  function createQuiz() {
    const quizDiv = document.getElementById('quiz');
    additionalWordsAndTranslations5.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <label>${item.translation}</label>
            <input type="text" id="answer${index}" />
            <span id="result${index}" class="result"></span>
        `;
        quizDiv.appendChild(questionDiv);
    });
}

function checkAnswers() {
    additionalWordsAndTranslations5.forEach((item, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase().replace(/\s+/g, ' ');
        const correctAnswer = item.word.toLowerCase().replace(/\s+/g, ' ');
        const resultSpan = document.getElementById(`result${index}`);
        const isCorrect = userAnswer === correctAnswer;
        resultSpan.className = isCorrect ? 'correct' : 'incorrect';
        resultSpan.textContent = isCorrect ? 'Prawidłowo' : `Błędnie (poprawna odpowiedź: ${item.word})`;
    });
    document.getElementById('nextQuiz').style.display = 'block';
}

createQuiz();