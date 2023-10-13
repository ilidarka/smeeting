let questionItem;
let questionItemDelete;
let questionCheck = document.getElementById('questions-check');
let questionCloseButton = document.querySelector('.add-question svg');
let addQuestion = document.querySelector('.add-question');
let addQuestionButton = document.querySelector('.addQuestion-button');
let addQuestionButtonForm = document.querySelector('.add-Question-button');
let questionsList = document.querySelector('.questions-list');
let questionInput = document.getElementById('question-input');

questionInput.addEventListener('input', () => {
    document.getElementById('input-label').innerHTML = `(${questionInput.value.length}/200)`;
});

let handleEvent = (item) => {
    if (item.classList.contains('question-checked')) {
        item.classList.remove('question-checked');
    } else {
        item.classList.add('question-checked');
    }
};

function setEventListeners() {
    questionItem = document.querySelectorAll('.question-item');
    questionItemDelete = document.querySelectorAll('.question-item img');
    questionItem.forEach((item) => {
        item.addEventListener('click', () => handleEvent(item));
    });
    questionItemDelete.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
        });
    });
    questionCheck.addEventListener('click', () => {
        questionItem = document.querySelectorAll('.question-item');
        if (questionCheck.checked) {
            questionItem.forEach((item) => {
                item.classList.add('question-checked');
            });
        } else {
            questionItem.forEach((item) => {
                item.classList.remove('question-checked');
            });
        }
    });
}

setEventListeners();

addQuestionButtonForm.addEventListener('click', () => {
    let newQuestion = document.createElement('div');
    newQuestion.classList.add('question-item');
    let questionClose = document.createElement('img');
    questionClose.setAttribute('src', './img/questionImage.svg');
    questionClose.setAttribute('alt', 'questionImage');
    questionClose.addEventListener('click', () => {
        questionClose.parentElement.remove();
    });
    newQuestion.textContent = questionInput.value;
    newQuestion.addEventListener('click', (event) => handleEvent(event.currentTarget));
    newQuestion.appendChild(questionClose);
    questionsList.insertBefore(newQuestion, addQuestionButton);
    console.log(questionsList);
});

questionCloseButton.addEventListener('click', () => {
    addQuestion.classList.toggle('add-question-opened');
});

addQuestionButton.addEventListener('click', () => {
    addQuestion.classList.toggle('add-question-opened');
});
