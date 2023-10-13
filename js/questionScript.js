let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let question = document.querySelector('.question');

let questionsList = [];

prevButton.addEventListener('click', () => {});
nextButton.addEventListener('click', () => {});

function createQuestion(questionText, questionAnswer) {
    return {
        questionText,
        questionAnswer: questionAnswer || null,
    };
}

let question1 = createQuestion('Вопрос 1');
let question2 = createQuestion('Вопрос 2');

questionsList.push(question1);
questionsList.push(question2);

document.querySelector('.question-count').innerHTML = questionsList.length;

let clonedElement = question.cloneNode(true);
