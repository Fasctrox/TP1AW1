import { cardProductComponent } from '../../components/cardProduct.component.js'

let cardProductConteiner = document.getElementById('cardProductConteiner')

const cardData = [
    {
        img: '../../assets/gap.webp',
        title: 'GAP',
        desc: 'Entrenamiento de glúteos, abdominales y piernas.',
        time: 'Duración: 45 min',
        act: 'Inscribirse'
    },
    {
        img: '../../assets/crossfit.webp',
        title: 'Crossfit',
        desc: 'Ejercicio de alta intensidad que combina levantamiento de pesas y gimnasia',
        time: 'Duración: 60 min',
        act: 'Inscribirse'
    },
    {
        img: '../../assets/funcional.webp',
        title:'Funcional',
        desc: 'Cardio intensivo que busca mejorar tu fuerza y resistencia',
        time: 'Duración: 60 min',
        act: 'Inscribirse'
    },
        {
        img: '../../assets/zumba.webp',
        title:'Zumba',
        desc: 'Una forma de ejercicio que se enfoca en la diversión y la energía.',
        time: 'Duración: 45 min',
        act: 'Inscribirse'
    },
        {
        img: '../../assets/bachata.webp',
        title:'Bachata',
        desc: 'Una introducción al apasionante mundo de la danza latina.',
        time: 'Duración: 50 min',
        act: 'Inscribirse'
    },
        {
        img: '../../assets/salsa.webp',
        title:'Salsa',
        desc: 'Una experiencia dinámica y divertida que te sumerge en el ritmo de la música latina.',
        time: 'Duración: 50 min',
        act: 'Inscribirse'
    }
]

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardProductComponent(e)
    }).join('')
    cardProductConteiner.innerHTML = cards
})