const btnToCreatePizza = document.getElementById('create-pizza');
const creatingPizzaDiv = document.getElementById('add-modal');
const darkModeActive = document.getElementById('add-dark-mode');
const hiddingWelcomeText = document.getElementById('hide-welcome-text');

const showPizza = () => {
    creatingPizzaDiv.classList.toggle('visible');
    darkModeActive.classList.toggle('visible');
    hiddingWelcomeText.classList.toggle('invisible');
};

btnToCreatePizza.addEventListener('click', showPizza);