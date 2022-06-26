//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)
document.querySelector('#randomForward').addEventListener('click', getDrink)
document.querySelector('#goBack').addEventListener('click', previousDrinks)

let pastDrinks = [];
let randomDrinkArr = [];

function getDrink() {
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        let randomDrink = Math.floor(Math.random() * (data.drinks.length - 1));
        if (randomDrinkArr.includes(randomDrink) == false){
            document.querySelector('h2').innerText = data.drinks[randomDrink].strDrink;
            document.querySelector('img').src = data.drinks[randomDrink].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[randomDrink].strInstructions;
            pastDrinks.push(data.drinks[randomDrink])
            randomDrinkArr.push(randomDrink);
        } else {
            getDrink()
        }           
    })
    .catch(err => {
        console.log(`error ${err}`)
    })


}


function previousDrinks() {
    let previousDrink = pastDrinks[pastDrinks.length - 2];
    document.querySelector('h2').innerText = previousDrink.strDrink;
    document.querySelector('img').src = previousDrink.strDrinkThumb;
    document.querySelector('h3').innerText = previousDrink.strInstructions;
    pastDrinks.pop(previousDrink);
}



//when arrow is clicked
//show a random drink
//when back arrow is clicked it shows previous drinks

