const btnToCreatePizza = document.getElementById('create-pizza');
const creatingPizzaDiv = document.getElementById('add-modal');
const darkModeActive = document.getElementById('add-dark-mode');
const hiddingWelcomeText = document.getElementById('hide-welcome-text');
const pizzaSize = document.getElementById('inputedSize');
const pizzaName = document.getElementById('pizzaName').value;
const addNewIngredient = document.getElementById('newIngredient');
const table = document.querySelector('tbody');
const ingredientsDiv = document.querySelector('.ingredients-box');
const removeIngredient = document.getElementById('removeIngredient');
const btnAddNewPizza = document.getElementById('btnToAddPizza');
const inputedIngredientsDynamic = document.querySelector('.inputed-dynamic-ingredients');
const pizzaMenu = document.getElementById('pizzasMenu');
const btnToContact = document.getElementById('contactBox');

const showPizza = () => {
    creatingPizzaDiv.classList.toggle('visible');
    darkModeActive.classList.toggle('visible');
    hiddingWelcomeText.classList.toggle('invisible');
    pizzaMenu.classList.toggle('visible');
};

const addNewPizza = () => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = pizzaName;
    td.append(tr);
    table.append(td);
};

const addNewIngr = () => {
    input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','inputedIngredients');
    input.setAttribute('placeholder','mushrooms');
    inputedIngredientsDynamic.insertAdjacentElement('beforeend', input);
};

const rmvNewIngr = () => {
    if(inputedIngredientsDynamic.children.length > 1){
        inputedIngredientsDynamic.lastChild.remove();
    } else {
        alert ('cannot remove last element !');
    }
};

btnToCreatePizza.addEventListener('click', showPizza);
addNewIngredient.addEventListener('click', addNewIngr);
removeIngredient.addEventListener('click', rmvNewIngr);
btnAddNewPizza.addEventListener('click', addNewPizza);
