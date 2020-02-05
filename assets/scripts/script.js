const btnToCreatePizza = document.getElementById('create-pizza');
const creatingPizzaDiv = document.getElementById('add-modal');


const showPizza = () => {
    creatingPizzaDiv.classList.toggle('visible');
};

btnToCreatePizza.addEventListener('click', showPizza);