import { cardClassComponent } from '../../components/cardClass.component.js';
import { inscribirClase } from '../../utils/localStorageController.js';  // NUEVO: importar inscribirClase

let cardClassContainer = document.getElementById('cardClassContainer');

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('../../assets/data/product.json');
        const productosData = await response.json();

        const cards = productosData
            .filter(producto => producto.categoria === 'clases') // solo clases
            .map(producto => cardClassComponent(producto))
            .join('');

        cardClassContainer.innerHTML = cards;
        
        productosData
            .filter(producto => producto.categoria === 'clases')
            .forEach(producto => {
                const btn = document.getElementById(`insc-${producto.id}`);
                if (btn) {
                    btn.addEventListener('click', () => {
                        inscribirClase(producto.id);
                    });
                }
            });

    } catch (e) {
        console.error('Error al cargar las clases:', e);
    }
});
