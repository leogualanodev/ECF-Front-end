let input = document.querySelector(`#main input`)

input.addEventListener("click",openMeal)

function openMeal(){
    window.open("meal.html")
}

let buttonApple = document.querySelector(`#button-container button`)
let buttonGoogle = document.querySelector(`#button-google`)


buttonApple.addEventListener("click",openApple)
buttonGoogle.addEventListener("click",openGoogle)

function openApple(){
    window.open("https://www.apple.com/fr/app-store/")
}

function openGoogle(){
    window.open("https://play.google.com/store/games?gl=FR&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-fr-1001280-Med-hasem-py-Evergreen-Oct2020-Text_Search_BKWS%7CONSEM_kwid_43700008792247580&gclid=CjwKCAiAheacBhB8EiwAItVO23hAZscU7lAAJQXwuP6-fFYNr-dCLj0S7K0kYn0nQhMHeqgcjPbLEhoCfr0QAvD_BwE&gclsrc=aw.ds&pli=1")
}