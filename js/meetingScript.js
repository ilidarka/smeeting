let questionItem;
let questionItemDelete;
let questionCheck = document.getElementById('questions-check');
let questionCloseButton = document.querySelector('.add-question svg');
let memberCloseButton = document.querySelector('.add-member svg');
let addQuestion = document.querySelector('.add-question');
let addQuestionButton = document.querySelector('.addQuestion-button');
let addQuestionButtonForm = document.querySelector('.add-question-button');
let questionsList = document.querySelector('.questions-list');
let questionInput = document.getElementById('question-input');
let memberItemEmpty = document.querySelector('.member-item-empty');
let addMember = document.querySelector('.add-member');
let memberItem = document.querySelectorAll('.member-item');
let membersList = document.querySelector('.members-list');
let memberDeleteButton = document.querySelectorAll('.member-delete-button');
let addMemberButton = document.querySelector('.add-member-button');

questionInput.addEventListener('input', () => {
    document.getElementById('input-label').innerHTML = `(${questionInput.value.length}/200)`;
});

function createNewMember() {
    let newMember = document.createElement('div');
    newMember.classList.add('member-item');
    let newMemberHeader = document.createElement('div');
    newMemberHeader.classList.add('member-item-header');
    let newMemberName = document.createElement('span');
    newMemberName.classList.add('member-name');
    newMemberName.textContent = 'Новый участник';
    let newMemberDeleteButton = document.createElement('img');
    newMemberDeleteButton.classList.add('member-delete-button');
    newMemberHeader.appendChild(newMemberName);
    newMemberHeader.appendChild(newMemberDeleteButton);
    let newMemberGender = document.createElement('span');
    newMemberGender.classList.add('member-gender');
    newMemberGender.textContent = 'Пол: мж';
    let newMemberLink = document.createElement('div');
    newMemberLink.classList.add('member-link');
    let newMemberInput = document.createElement('input');
    newMemberInput.classList.add('member-link-input');
    newMemberInput.setAttribute('type', 'text');
    newMemberInput.setAttribute('placeholder', 'link');
    let newMemberButton = document.createElement('button');
    newMemberButton.classList.add('link-button');
    newMemberButton.innerText = 'Копировать ссылку';
    newMemberLink.appendChild(newMemberInput);
    newMemberLink.appendChild(newMemberButton);
    newMember.appendChild(newMemberHeader);
    newMember.appendChild(newMemberGender);
    newMember.appendChild(newMemberLink);
    membersList.appendChild(newMember);
}

addMemberButton.addEventListener('click', () => {
    createNewMember();
});

memberDeleteButton.forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.parentNode.remove();
    });
});

let handleEvent = (item) => {
    if (item.classList.contains('question-checked')) {
        item.classList.remove('question-checked');
        item.classList.remove('question-hover');
    } else {
        item.classList.add('question-checked');
    }
};

function setEventListeners() {
    questionItem = document.querySelectorAll('.question-item');
    questionItemDelete = document.querySelectorAll('.question-item img');
    questionItem.forEach((item) => {
        item.addEventListener('click', () => handleEvent(item));
        item.addEventListener('mouseover', () => item.classList.add('question-hover'));
        item.addEventListener('mouseout', () => item.classList.remove('question-hover'));
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
});

questionCloseButton.addEventListener('click', () => {
    addQuestion.classList.toggle('add-question-opened');
});

addQuestionButton.addEventListener('click', () => {
    addQuestion.classList.toggle('add-question-opened');
});

addQuestion.addEventListener('click', (event) => {
    if (event.target.closest('.form-container')) {
        event.stopImmediatePropagation();
    } else {
        addQuestion.classList.toggle('add-question-opened');
    }
});

memberItemEmpty.addEventListener('click', () => {
    addMember.classList.toggle('add-member-opened');
});

memberCloseButton.addEventListener('click', () => {
    addMember.classList.toggle('add-member-opened');
});

addMember.addEventListener('click', (event) => {
    if (event.target.closest('.form-container')) {
        event.stopImmediatePropagation();
    } else {
        addMember.classList.toggle('add-member-opened');
    }
});
