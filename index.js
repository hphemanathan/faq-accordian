
const showButton = document.querySelectorAll(".qAndA--question--icon__show");
const hideButton = document.querySelectorAll(".qAndA--question--icon__hide");

console.log(hideButton);

function handleShowAnswer () {
hideButton.classList.toggle('hide');
}

function handleButtonClick (button) {
    button.addEventListener('click', handleShowAnswer)
}

showButton.forEach(handleButtonClick);