import { navbarComponent } from "./components/navbar.component.js"

window.addEventListener('DOMContentLoaded', ()=>{
    const navContainer = document.querySelector('header')
    if (navContainer){
        navContainer.innerHTML = navbarComponent

    }

    const pageName = document.getElementById('pageName')?.value
    const title = document.getElementById('title')

    if (pageName && title) {
        title.textContent = `Bienvenido a ${pageName}`
        document.title = pageName
    }
})