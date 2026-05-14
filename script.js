const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
function renderProducts(container, products) {
    container.innerHTML = '';
    if (!Array.isArray(products) || products.length === 0) {
        container.innerHTML = '<p style="padding:1rem">No products available.</p>';
        return;
    }
    products.forEach((p) => {
        const prod = document.createElement('div');
        prod.className = 'pro';
        prod.onclick = () => (window.location.href = `sproduct.html?id=${p.id}`);
        const img = p.image || 'img/products/placeholder.jpg';
        const brand = p.brand || '';
        const name = p.name || 'Product';
        const price = (typeof p.price === 'number') ? p.price.toFixed(2) : (p.price || '0.00');
        prod.innerHTML = `
            <img src="${img}" alt="${name}">
            <div class="des">
                <span>${brand}</span>
                <h5>${name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${price}</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        `;
        container.appendChild(prod);
    });
}
async function loadProducts() {
    const container = document.querySelector('.pro-container');
    if (!container) return;

    try {
        const res = await fetch('http://localhost:3000/products');
        if (res.ok) {
            const products = await res.json();
            renderProducts(container, products);
            return;
        }
    } catch (err) {
        console.warn('API fetch failed, falling back to local db.json —', err.message);
    }
    try {
        const local = await fetch('./db.json');
        if (local.ok) {
            const data = await local.json();
            const products = Array.isArray(data) ? data : data.products || [];
            renderProducts(container, products);
            return;
        }
    } catch (err) {
        console.error('Failed to load local db.json:', err);
    }
    container.innerHTML = '<p style="padding:1rem;color:#c00">Unable to load products.</p>';
}
document.addEventListener('DOMContentLoaded', loadProducts);