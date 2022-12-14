
let tab = new Array;
tab[0] = "Monday"
tab[1] = "Tuesday"
tab[2] = "Wednesday"
tab[3] = "Thursday"
tab[4] = "Friday"
tab[5] = "Saturday"
tab[6] = "Sunday"


for ( let i = 0 ; i < 7 ; i++){
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(function(response){

    console.log(response)
    let mainMeal = document.querySelector(`#main-meal`);

    mainMeal.innerHTML += ` <section id="content-ingredient">
    <div id="circle-2">
    <div></div>
    <p>${tab[i]}</p>
    <div></div>
    </div>
    <hr size="5">
    <p id="name-meal">${response.meals[0].strMeal}</p>
    <p id="category">${response.meals[0].strCategory}</p>
    <figure id="image-meal">
    <img src="${response.meals[0].strMealThumb}" alt="">
    </figure>
    <h2>Ingredients</h2>
    <div id="ingredient">
    <div class="ingredient-f10-${i}">
      
    </div>
    <div class="ingredient-l10-${i}">
        
    </div>
    </div>
    <h2>Recipe</h2>
    <p id="recipe">${response.meals[0].strInstructions.substr(0,500)} <button class="button-${i}"> >> </button> <span>${response.meals[0].strInstructions.substr(500,2000)}</span></p>
    <div id="button-video">
    <input  type="button" value="Video recipe">
    </div>
    </section>`

   
   
    

            //    je remplie ici les ingrédients, je fais un if pour les cas ou il n'y a pas 20 ingredients
    let ingredient = document.querySelector(`.ingredient-f10-${i}`)
    console.log(ingredient)

    if ( response.meals[0].strIngredient1 !== "" || response.meals[0].strIngredient1 == !null ){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure1} / ${response.meals[0].strIngredient1} </li>`
    }
    if ( response.meals[0].strIngredient2 !== "" || response.meals[0].strIngredient2 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure2} / ${response.meals[0].strIngredient2} </li>`
    }
    if ( response.meals[0].strIngredient3 !== "" || response.meals[0].strIngredient3 == !null){
        ingredient.innerHTML += `<li>${response.meals[0].strMeasure3} /  ${response.meals[0].strIngredient3} </li>`
    }
    if ( response.meals[0].strIngredient4 !== "" || response.meals[0].strIngredient4 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure4} / ${response.meals[0].strIngredient4} </li>`
    }
    if ( response.meals[0].strIngredient5 !== "" || response.meals[0].strIngredient5 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure5} / ${response.meals[0].strIngredient5} </li>`
    }
    if ( response.meals[0].strIngredient6 !== "" || response.meals[0].strIngredient6 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure6} / ${response.meals[0].strIngredient6} </li>`
    }
    if ( response.meals[0].strIngredient7 !== "" || response.meals[0].strIngredient7 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure7} /  ${response.meals[0].strIngredient7} </li>`
    }
    if ( response.meals[0].strIngredient8 !== "" || response.meals[0].strIngredient8 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure8} / ${response.meals[0].strIngredient8} </li>`
    }
    if ( response.meals[0].strIngredient9 !== "" || response.meals[0].strIngredient9 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure9} / ${response.meals[0].strIngredient9} </li>`
    }
    if ( response.meals[0].strIngredient10 !== "" || response.meals[0].strIngredient10 == !null){
        ingredient.innerHTML += `<li> ${response.meals[0].strMeasure10} / ${response.meals[0].strIngredient10} </li>`
    }

    let ingredient1 = document.querySelector(`.ingredient-l10-${i}`)

    if ( response.meals[0].strIngredient11 !== "" || response.meals[0].strIngredient11 == !null){
        ingredient1.innerHTML += `<li>${response.meals[0].strMeasure11} /  ${response.meals[0].strIngredient11} </li>`
    }
    if ( response.meals[0].strIngredient12 !== "" || response.meals[0].strIngredient12 == !null){
        ingredient1.innerHTML += `<li>${response.meals[0].strMeasure12} /  ${response.meals[0].strIngredient12} </li>`
    }
    if ( response.meals[0].strIngredient13 !== "" || response.meals[0].strIngredient13 == !null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strMeasure13} / ${response.meals[0].strIngredient13} </li>`
    }
    if ( response.meals[0].strIngredient14 !== "" || response.meals[0].strIngredient14 == !null){
        ingredient1.innerHTML += `<li>${response.meals[0].strMeasure14} /  ${response.meals[0].strIngredient14} </li>`
    }
    if ( response.meals[0].strIngredient15 !== "" || response.meals[0].strIngredient15 == !null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strMeasure15} / ${response.meals[0].strIngredient15} </li>`
    }
    if ( response.meals[0].strIngredient16 !== "" || response.meals[0].strIngredient16 == !null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strMeasure16} / ${response.meals[0].strIngredient16} </li>`
    }
    if ( response.meals[0].strIngredient17 !== "" || response.meals[0].strIngredient17 == !null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strMeasure17} / ${response.meals[0].strIngredient17} </li>`
    }
    if ( response.meals[0].strIngredient18 !== "" || response.meals[0].strIngredient18 == !null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strMeasure18} /  ${response.meals[0].strIngredient18} </li>`
    }
    if ( response.meals[0].strIngredient19 !== "" || response.meals[0].strIngredient19 == !null){
        ingredient1.innerHTML += `<li>${response.meals[0].strMeasure19} /  ${response.meals[0].strIngredient19} </li>`
    }
    if ( response.meals[0].strIngredient20 !== "" || response.meals[0].strIngredient20 == !null){
        ingredient1.innerHTML += `<li>${response.meals[0].strMeasure20} /  ${response.meals[0].strIngredient20} </li>`
    }
})
}




//  <section id="content-ingredient">
// <div id="circle-2">
// <div></div>
// <p>Monday</p>
// <div></div>
// </div>
// <p id="name-meal">leo</p>
// <p id="category">heh</p>
// <figure id="image-meal">
// <img src="./images/drapeau-fr.png" alt="">
// </figure>
// <h2>Ingredient</h2>
// <div id="ingredient">
// <div class="ingredient f10">
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
// </div>
// <div class="ingredient l10">
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
// </div>
// </div>
// <h2>Recipe</h2>
// <p id="recipe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique voluptates dolores perferendis eos deserunt ea, facilis, vero voluptas fugit veniam ut cupiditate quam commodi! Sunt hic tempora ratione voluptatibus.</p>
// <div id="button-video">
// <input type="button" value="Video recipe">
// </div>
// </section>