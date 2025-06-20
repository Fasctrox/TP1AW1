import { cardComponent } from "../../components/card.component.js"

let cardConteiner = document.getElementById('cardContainer')

let carData = [
    {title: 'Calculo 1', a: 6, b:4, footer: 'Soy un footer'},
    {title: 'Calculo 2', a: 2, b:0, footer: 'Soy un footer'},
    {title: 'Calculo 3', a: 7, b:8, footer: 'Soy un footer'},
    {title: 'Calculo 4', a: 10, b:9, footer: 'Soy un footer'}
]

window.addEventListener('load', ()=>{

    const cards = carData.map(e=>{
        return cardComponent(e)
    }).join('')
    cardConteiner.innerHTML = cards
})