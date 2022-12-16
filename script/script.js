// je définie un tableau avec les jours de la semaine de manière à l'utilisé quand je remplie mes repas 
let tab = new Array;
tab[0] = "Monday"
tab[1] = "Tuesday"
tab[2] = "Wednesday"
tab[3] = "Thursday"
tab[4] = "Friday"
tab[5] = "Saturday"
tab[6] = "Sunday"



// je fais une boucle de 7 tours pour remplir mes 7 repas de la semaine 



for ( let i = 0 ; i < 7 ; i++){
    // je fetch à l'adresse de l'api qui renvoie des repas aléatoires 
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(function(response){

    let mainMeal = document.querySelector(`#main-meal`);
    // j'ajoute à chaque boucle du contenue html 
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
                            <img src="${response.meals[0].strMealThumb}" alt="${response.meals[0].strMeal}">
                            </figure>
                            <h2>Ingredients</h2>
                            <div id="ingredient">
                            <div class="ingredient-f10-${i}">
                            
                            </div>
                            <div class="ingredient-l10-${i}">
                                
                            </div>
                            </div>
                            <h2>Recipe</h2>
                            <div class="scroll">
                            <p id="recipe">${response.meals[0].strInstructions}</p>
                            </div>
                            <div id="button-video">
                            <a  class="button" href="${response.meals[0].strYoutube}">Recipe Video</a>
                            </div>
                            </section>`

    

    //    je remplie ici les ingrédients, je fais un if pour les cas ou il n'y a pas 20 ingredients
    // je compare l'ingredient avec null et "" , si la condition est validé alors on remplie avec l'ingredient en question  
    let ingredient = document.querySelector(`.ingredient-f10-${i}`)
    

    if ( response.meals[0].strIngredient1 !== "" && response.meals[0].strIngredient1 !== null ){
        ingredient.innerHTML += `<li> ${response.meals[0].strIngredient1} <span> (${response.meals[0].strMeasure1})</span> </li>`
    }
    if ( response.meals[0].strIngredient2 !== "" && response.meals[0].strIngredient2 !== null){
        ingredient.innerHTML += `<li>${response.meals[0].strIngredient2} <span>(${response.meals[0].strMeasure2})</span> </li>`
    }
    if ( response.meals[0].strIngredient3 !== "" && response.meals[0].strIngredient3 !== null){
        ingredient.innerHTML += `<li>  ${response.meals[0].strIngredient3} <span>(${response.meals[0].strMeasure3})</span></li>`
    }
    if ( response.meals[0].strIngredient4 !== "" && response.meals[0].strIngredient4 !== null){
        ingredient.innerHTML += `<li>${response.meals[0].strIngredient4} <span> (${response.meals[0].strMeasure4})</span> </li>`
    }
    if ( response.meals[0].strIngredient5 !== "" && response.meals[0].strIngredient5 !== null){
        ingredient.innerHTML += `<li> ${response.meals[0].strIngredient5} <span> (${response.meals[0].strMeasure5})</span> </li>`
    }
    if ( response.meals[0].strIngredient6 !== "" && response.meals[0].strIngredient6 !== null){
        ingredient.innerHTML += `<li>${response.meals[0].strIngredient6} <span>(${response.meals[0].strMeasure6})</span> </li>`
    }
    if ( response.meals[0].strIngredient7 !== "" && response.meals[0].strIngredient7 !== null){
        ingredient.innerHTML += `<li>${response.meals[0].strIngredient7}<span> (${response.meals[0].strMeasure7})</span> </li>`
    }
    if ( response.meals[0].strIngredient8 !== "" && response.meals[0].strIngredient8 !== null){
        ingredient.innerHTML += `<li>  ${response.meals[0].strIngredient8} <span> (${response.meals[0].strMeasure8})</span> </li>`
    }
    if ( response.meals[0].strIngredient9 !== "" && response.meals[0].strIngredient9 !== null){
        ingredient.innerHTML += `<li>${response.meals[0].strIngredient9} <span>(${response.meals[0].strMeasure9})</span> </li>`
    }
    if ( response.meals[0].strIngredient10 !== "" && response.meals[0].strIngredient10 !== null){
        ingredient.innerHTML += `<li>${response.meals[0].strIngredient10} <span> (${response.meals[0].strMeasure10})</span> </li>`
    }

    let ingredient1 = document.querySelector(`.ingredient-l10-${i}`)

    if ( response.meals[0].strIngredient11 !== "" && response.meals[0].strIngredient11 !== null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strIngredient11} <span> (${response.meals[0].strMeasure11})</span> </li>`
    }
    if ( response.meals[0].strIngredient12 !== "" && response.meals[0].strIngredient12 !== null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strIngredient12} <span> (${response.meals[0].strMeasure12})</span> </li>`
    }
    if ( response.meals[0].strIngredient13 !== "" && response.meals[0].strIngredient13 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient13} <span>(${response.meals[0].strMeasure13})</span> </li>`
    }
    if ( response.meals[0].strIngredient14 !== "" && response.meals[0].strIngredient14 !== null){
        ingredient1.innerHTML += `<li> ${response.meals[0].strIngredient14}<span> (${response.meals[0].strMeasure14})</span></li>`
    }
    if ( response.meals[0].strIngredient15 !== "" && response.meals[0].strIngredient15 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient15} <span> (${response.meals[0].strMeasure15})</span> </li>`
    }
    if ( response.meals[0].strIngredient16 !== "" && response.meals[0].strIngredient16 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient16} <span> ${response.meals[0].strMeasure16} </span> </li>`
    }
    if ( response.meals[0].strIngredient17 !== "" && response.meals[0].strIngredient17 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient17} <span> (${response.meals[0].strMeasure17})</span> </li>`
    }
    if ( response.meals[0].strIngredient18 !== "" && response.meals[0].strIngredient18 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient18} <span> (${response.meals[0].strMeasure18})</span> </li>`
    }
    if ( response.meals[0].strIngredient19 !== "" && response.meals[0].strIngredient19 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient19} <span>(${response.meals[0].strMeasure19})</span> </li>`
    }
    if ( response.meals[0].strIngredient20 !== "" && response.meals[0].strIngredient20 !== null){
        ingredient1.innerHTML += `<li>${response.meals[0].strIngredient20} <span> (${response.meals[0].strMeasure20})</span> </li>`
    }
})
}







