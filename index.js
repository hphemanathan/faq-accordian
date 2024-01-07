
const showButton = document.querySelectorAll(".qAndA--question--icon__show");
const hideButton = document.querySelectorAll(".qAndA--question--icon__hide");
const showQuestion = document.querySelectorAll(".qAndA--question");



function handleShowAnswer(event) {
   event.currentTarget.firstElementChild.nextElementSibling.classList.toggle("hide");
    event.currentTarget.lastElementChild.classList.toggle('hide');
    event.currentTarget.nextElementSibling.classList.toggle('show');
}

function showAnswer (button) {
    button.addEventListener('click', handleShowAnswer);
}


showQuestion.forEach(showAnswer);
