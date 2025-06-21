import { cardProductComponent } from '../../components/cardProduct.component.js'

let cardProductConteiner = document.getElementById('cardProductConteiner')

const cardData = [
    {
        img: '../../assets/zapas.webp',
        title: 'Zapatillas',
        desc: 'Zapatillas deportivas para hacer tus actividades favoritas.',
        price: 'Precio: $15000',
        act: 'Comprar'
    },
    {
        img: '../../assets/musculosa.webp',
        title: 'Musculosa',
        desc: 'Musculosa para entrenamiento de alto impacto.',
        price: 'Precio: $25000',
        act: 'Comprar'
    }
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardProductComponent(e)
    }).join('')
    cardProductConteiner.innerHTML = cards
})