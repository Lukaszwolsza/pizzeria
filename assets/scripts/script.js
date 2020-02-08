const creatingPizzaDiv = document.getElementById('add-modal');
const darkModeActive = document.getElementById('add-dark-mode');
const hiddingWelcomeText = document.getElementById('hide-welcome-text');
const addNewIngredient = document.getElementById('newIngredient');
const table = document.querySelector('tbody');
const ingredientsDiv = document.querySelector('.ingredients-box');
const removeIngredient = document.getElementById('removeIngredient');
const inputedIngredientsDynamic = document.querySelector('.inputed-dynamic-ingredients');
const pizzaMenu = document.getElementById('pizzasMenu');
const orderInfoBox = document.getElementById('orderStatus');



//Buttons
const btnToContact = document.getElementById('contactBox');
const btnAddNewPizza = document.getElementById('btnToAddPizza');
const btnToCreatePizza = document.getElementById('create-pizza');
const btnToMakeNewOrder = document.getElementById('btnToAddPizza');


// RESULT DATA DISPLAYING
const streetResult = document.getElementById('streetResult');
const flatResult = document.getElementById('flatResult');
const postcodeResult = document.getElementById('postcodeResult');
const cityResult = document.getElementById('cityResult');
const pizzaNameResult = document.getElementById('pizzaNameResult');
const pizzaSizeResult = document.getElementById('pizzaSizeResult');
const pizzaIngredients = document.getElementById('ingredientsResult');

// const addressInfos = {
//     street  : streetAddress,
//     number  : numberAddress,
//     post    : postCode,
//     city    : cityAddress
// };


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
        alert ('Cannot remove last element !');
    }
};

let arrayWithIngredients = [];

const showFinalInfoAboutOrder = () => {
    orderInfoBox.classList.toggle('visible');
    creatingPizzaDiv.classList.toggle('visible');

    const allIngredients = document.querySelectorAll('.inputedIngr');
    const streetAddress = document.getElementById('streetInfo').value;
    const numberAddress = document.getElementById('flatNumberInfo').value;
    const postCode = document.getElementById('postCodeInfo').value;
    const cityAddress = document.getElementById('cityInfo').value;
    const pizzaSize = document.getElementById('inputedSize').value;
    const pizzaName = document.getElementById('pizzaName').value;

    
   
    for(let i = 0; i < allIngredients.length; i++){
        console.log(allIngredients.value)
    
    }
    pizzaNameResult.textContent = pizzaName;
    // if(pizzaSize === 30 || pizzaSize === 40 || pizzaSize === 50){
    //     pizzaSizeResult.textContent = pizzaSize;
    // } else {
    //     alert('You inputed incorrect pizza size');

    // }
    streetResult.textContent = streetAddress;
    flatResult.textContent = numberAddress;
    postcodeResult.textContent = postCode;
    cityResult.textContent = cityAddress;

};

btnToCreatePizza.addEventListener('click', showPizza);
addNewIngredient.addEventListener('click', addNewIngr);
removeIngredient.addEventListener('click', rmvNewIngr);
btnAddNewPizza.addEventListener('click', addNewPizza);
btnToMakeNewOrder.addEventListener('click', showFinalInfoAboutOrder);

