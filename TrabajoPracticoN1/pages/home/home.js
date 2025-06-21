import { cardComponent } from "../../components/cardCategory.component.js"
import { loadCards } from '../../utils/loadCards.js'

window.addEventListener('DOMContentLoaded', () => {
    loadCards({
        categoria: 'categoria',
        containerSelector: '#cardContainer',
        cardComponent: cardComponent
    })
})

/*
Datos obtenidos de un array del tp3

const cardData = [
    {
        img: '../../assets/clase.webp',
        title: 'Clases',
        desc: 'Funcional, GAP, Salsa, Crossfit, Bachata y más.',
        href: 'clases/clases.html'
    },
    {
        img: '../../assets/suplementos.webp',
        title: 'Productos Alimenticios',
        desc: 'Proteínas, creatina, pre-entrenos y más suplementos.',
        href: 'productos/productos.html'
    },
    {
        img: '../../assets/ropa.webp',
        title: 'Ropa Deportiva',
        desc: 'Ropa cómoda, funcional y con estilo para entrenar.',
        href: 'ropa/ropa.html'
    }
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')
    cardConteiner.innerHTML = cards
})

*/