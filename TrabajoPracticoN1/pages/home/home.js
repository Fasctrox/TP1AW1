import { cardComponent } from "../../components/cardCategory.component.js"

let cardConteiner = document.getElementById('cardConteiner')

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
        href: 'ropa/ropa/html'
    }
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')
    cardConteiner.innerHTML = cards
})