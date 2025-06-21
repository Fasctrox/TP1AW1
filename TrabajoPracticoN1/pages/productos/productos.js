import { cardProductComponent } from '../../components/cardProduct.component.js'

let cardProductConteiner = document.getElementById('cardProductConteiner')

const cardData = [
    {
        img: '../../assets/proteina.webp',
        title: 'Proteina',
        desc: 'Sumplemento deportivo para ganar esa masa muscular que tanto deseas.',
        price: 'Precio: $10000',
        act: 'Comprar'
    },
    {
        img: '../../assets/creatina.webp',
        title: 'Creatina',
        desc: 'Sustancia natural que ayuda a los músculos a producir energía.',
        price: 'Precio: $20000',
        act: 'Comprar'
    },
    {
        img: '../../assets/gel.webp',
        title:'Gel energetico',
        desc: 'Para un aporte rápido de carbohidratos durante entrenamientos de larga duración.',
        time: 'Precio: $5000',
        act: 'Comprar'
    }
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardProductComponent(e)
    }).join('')
    cardProductConteiner.innerHTML = cards
})