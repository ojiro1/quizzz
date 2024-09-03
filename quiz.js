const additionalWordsAndTranslations6 = [
    { word: "FCL Full Container Local", translation: "transport morski całokontenerowy" },
    { word: "3PL Third Party Logistics", translation: "Logistyka firm trzecich" },
    { word: "HGV Large goods vehicle", translation: "Duży pojazd ciężarowy" },
    { word: "DC Distribution Centre", translation: "Centrum dystrybucji" },
    { word: "LCL Less Container Load", translation: "Transport drobnicowy" },
    { word: "EDI Electronic Data Interchange", translation: "Elektroniczna wymiana danych" },
    { word: "VAS Value Added Services", translation: "Usługi i wartości dodanej" },
    { word: "RFID Radio-Frequency Identification", translation: "Technologia bezprzewodowej identyfikacji radiowej" },
    { word: "ISO International Organization for Standardization", translation: "Międzynarodowa organizacja normalizacyjna" },
    { word: "GPS Global Positioning System", translation: "System nawigacji satelitarnej" }
];

function createQuiz() {
    const quizDiv = document.getElementById('quiz');
    additionalWordsAndTranslations6.forEach((item, index) => {
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
    additionalWordsAndTranslations6.forEach((item, index) => {
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