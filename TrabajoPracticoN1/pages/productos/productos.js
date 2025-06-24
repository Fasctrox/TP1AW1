import { cardProductComponent } from '../../components/cardProduct.component.js'
import { addToCart } from '../../utils/localStorageController.js';

let cardProductContainer = document.getElementById('cardProductContainer');

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('../../assets/data/product.json');
        const productosData = await response.json();

        const cards = productosData
            .filter(producto => producto.categoria === 'producto') // solo productos comprables
            .map(producto => cardProductComponent(producto))
            .join('');

        cardProductContainer.innerHTML = cards;

        // NUEVO: listeners para botones de agregar
        productosData
            .filter(producto => producto.categoria === 'producto')
            .forEach(producto => {
                const btn = document.getElementById(`add-${producto.id}`);
                if (btn) {
                    btn.addEventListener('click', () => {
                        addToCart(producto.id);
                    });
                }
            });

    } catch (e) {
        console.error('Error al cargar los productos:', e);
    }
});