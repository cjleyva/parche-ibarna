// ============================================
// PARCHE IBARNA - Menu Page JavaScript
// Categorías: Clásicos, Signature, Tropicales, 
// Cervezas, Tragos, Sodas, Sin Alcohol
// CON CONTADORES Y CARRITO
// ============================================

(function() {
    'use strict';

    const cocktailData = {
        'clasicos': [
            { name: 'Kalimotxo', description: 'Vino tinto con Coca-Cola, refrescante y auténtico. La fusión perfecta entre España y el Valle.', price: 22000, image: 'imagenes/barcelona.jpeg', alcohol: true, badge: null, emoji: '🍷' },
            { name: 'Tinto de Verano', description: 'Vino tinto con Sprite, servido con abundante hielo. Refrescante y tradicional.', price: 19000, image: 'imagenes/tinto_verano.jpeg', alcohol: true, badge: null, emoji: '🍷' },
            { name: 'Havana Sunrise', description: 'Ron Havana Club 3 Años, jugo de naranja, toronja y granadina.', price: 20000, image: 'imagenes/alma_caribe.jpeg', alcohol: true, badge: null, emoji: '🍹' },
            { name: 'Cubata', description: 'Ron Viejo de Caldas, Coca-Cola y un toque esencial de limón.', price: 24000, image: 'imagenes/clasico_sello.jpeg', alcohol: true, badge: null, emoji: '🥃' },
            { name: 'Margarita Frozen', description: 'Tequila Jose Cuervo, granizado de fresa y gomitas enchiladas.', price: 18000, image: 'imagenes/margarita_froze.jpeg', alcohol: true, badge: null, emoji: '🍹' },
            { name: 'Coronarita de Fresa', description: 'Margarita Frozen de fresa con una Coronita al revés.', price: 21000, image: 'imagenes/coronarita.jpeg', alcohol: true, badge: null, emoji: '🍺' }
        ],
        'signature': [
            { name: 'Ibarna Sour', description: 'Ron añejo, maracuyá, albahaca, espuma de clara y bitter.', price: 28000, image: 'imagenes/ibarna_sour.jpeg', badge: '🔥 #1', alcohol: true, emoji: '🍹' },
            { name: 'Neon Wave', description: 'Vodka, licor de melocotón, lima y butterfly pea flower. Cambia de color.', price: 32000, image: 'imagenes/neon_wave.jpeg', badge: null, alcohol: true, emoji: '🌊' },
            { name: 'Brutal Purple', description: 'Gin violeta, crème de cassis, uva negra y espuma de lavanda.', price: 30000, image: 'imagenes/brutal_purple.jpeg', badge: null, alcohol: true, emoji: '⚡' },
            { name: 'Smoky Old', description: 'Mezcal, whisky, vermut ahumado, cereza.', price: 34000, image: 'imagenes/smoky_old.jpeg', badge: null, alcohol: true, emoji: '🔥' },
            { name: 'Electric Rose', description: 'Gin rosado, pomelo, agua de rosas, espuma.', price: 29000, image: 'imagenes/electric_rose.jpeg', badge: null, alcohol: true, emoji: '🌹' }
        ],
        'tropicales': [
            { name: 'Mango Fuego', description: 'Mezcal, mango, chile habanero, jengibre.', price: 26000, image: 'imagenes/mango_fuego.jpeg', alcohol: true, badge: null, emoji: '🥭' },
            { name: 'Coco Loco', description: 'Ron de coco, piña colada artesanal, lima.', price: 24000, image: 'imagenes/coco_loco.jpeg', alcohol: true, badge: null, emoji: '🌴' },
            { name: 'Lulo Storm', description: 'Aguardiente, lulo colombiano, naranja, panela.', price: 23000, image: 'imagenes/lulo_storm.jpeg', alcohol: true, badge: null, emoji: '🌪️' },
            { name: 'Maracuyá Spritz', description: 'Vodka, maracuyá, prosecco, hierbabuena.', price: 27000, image: 'imagenes/maracuya_spritz.jpeg', alcohol: true, badge: null, emoji: '🍊' },
            { name: 'Piña Colada', description: 'Ron, crema de coco, piña, hielo.', price: 22000, image: 'imagenes/piña_colada.jpeg', alcohol: true, badge: null, emoji: '🍍' }
        ],
        'cervezas': [
            { name: 'Corona Extra', description: 'Cerveza mexicana clara, ligera y refrescante. Servida con limón.', price: 12000, image: 'imagenes/corona.jpeg', alcohol: true, badge: null, emoji: '🍺' },
            { name: 'Club Colombia Dorada', description: 'Cerveza dorada, balance perfecto entre malta y lúpulo.', price: 11000, image: 'imagenes/club_colombia.jpeg', alcohol: true, badge: null, emoji: '🍺' },
            { name: 'Heineken', description: 'Cerveza premium de origen holandés, sabor suave y distintivo.', price: 12000, image: 'imagenes/heineken.jpeg', alcohol: true, badge: null, emoji: '🍺' },
            { name: 'Michelada', description: 'Cerveza preparada con limón, salsas y especias. Perfecta para cualquier hora.', price: 15000, image: 'imagenes/michelada.jpeg', alcohol: true, badge: null, emoji: '🍺🌶️' }
        ],
        'tragos': [
            { name: 'Ron Viejo de Caldas', description: 'Ron añejo colombiano. Perfecto solo o en las mejores mezclas.', price: 18000, image: 'imagenes/ron_viejo.jpeg', alcohol: true, badge: null, emoji: '🥃' },
            { name: 'Havana Club 3 Años', description: 'Ron cubano suave, ideal para cócteles.', price: 20000, image: 'imagenes/havana_club.jpeg', alcohol: true, badge: null, emoji: '🥃' },
            { name: 'Aguardiente Antioqueño', description: 'El trago tradicional colombiano, con anís y carácter.', price: 15000, image: 'imagenes/aguardiente.jpeg', alcohol: true, badge: null, emoji: '🍾' },
            { name: 'Tequila Jose Cuervo', description: 'Tequila reposado mexicano, perfecto para chupitos o margaritas.', price: 22000, image: 'imagenes/tequila.jpeg', alcohol: true, badge: null, emoji: '🥃' },
            { name: 'Ginebra Beefeater', description: 'Ginebra inglesa seca, ideal para Gin Tonics premium.', price: 25000, image: 'imagenes/beefeater.jpeg', alcohol: true, badge: null, emoji: '🍸' }
        ],
        'sodas': [
            { name: 'Coca-Cola', description: 'La clásica bebida de burbujas, servida con hielo y limón.', price: 6000, image: 'imagenes/cocacola.jpeg', alcohol: false, badge: null, emoji: '🥤' },
            { name: 'Sprite', description: 'Refrescante bebida de limón, libre de cafeína.', price: 6000, image: 'imagenes/sprite.jpeg', alcohol: false, badge: null, emoji: '🥤' },
            { name: 'Jugo de Naranja', description: 'Jugo natural de naranja recién exprimido.', price: 8000, image: 'imagenes/jugo_naranja.jpeg', alcohol: false, badge: null, emoji: '🍊' },
            { name: 'Agua con Gas', description: 'Agua mineral con gas, servida con limón.', price: 5000, image: 'imagenes/agua_gas.jpeg', alcohol: false, badge: null, emoji: '💧' },
            { name: 'Limonada Natural', description: 'Limonada fresca hecha con limones naturales y azúcar.', price: 7000, image: 'imagenes/limonada.jpeg', alcohol: false, badge: null, emoji: '🍋' }
        ],
        'sin-alcohol': [
            { name: 'Virgin Mojito', description: 'Menta fresca, lima, azúcar de caña, soda.', price: 14000, image: 'imagenes/virgin_mojito.jpeg', alcohol: false, badge: null, emoji: '🌿' },
            { name: 'Ibarna Zero', description: 'Maracuyá, albahaca, jengibre, soda.', price: 15000, image: 'imagenes/ibarna_sour.jpeg', alcohol: false, badge: null, emoji: '🍹' },
            { name: 'Berry Smash', description: 'Frutos rojos, limón, tónica, lavanda.', price: 15000, image: 'imagenes/berry_smash.jpeg', alcohol: false, badge: null, emoji: '🫐' },
            { name: 'Floral Mist', description: 'Agua de rosas, menta, pepino, soda.', price: 14000, image: 'imagenes/floral_mist.jpeg', alcohol: false, badge: null, emoji: '🌸' },
            { name: 'Coconut Dream', description: 'Leche de coco, piña, canela, espuma.', price: 16000, image: 'imagenes/coco_loco.jpeg', alcohol: false, badge: null, emoji: '🥥' },
            { name: 'Oreo Dream', description: 'Granizado cremoso de galleta Oreo, decorado con crema chantilly y crujientes trozos de galleta.', price: 18000, image: 'imagenes/oreo_dream.jpeg', alcohol: false, badge: '✨ Nuevo', emoji: '🍪' },
            { name: 'Passion Cooler', description: 'Maracuyá, limón, miel, soda.', price: 14000, image: 'imagenes/passion_cooler.jpeg', alcohol: false, badge: null, emoji: '🍊' },
            { name: 'Ginger Fizz', description: 'Jengibre, limón, miel, agua con gas.', price: 13000, image: 'imagenes/ginger_fizz.jpeg', alcohol: false, badge: null, emoji: '🫚' }
        ]
    };

    const menuContainer = document.getElementById('menu-container');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function getCategoryName(category) {
        const names = {
            'clasicos': '🍸 Clásicos',
            'signature': '✨ Signature',
            'tropicales': '🌴 Tropicales',
            'cervezas': '🍺 Cervezas',
            'tragos': '🥃 Tragos',
            'sodas': '🥤 Sodas',
            'sin-alcohol': '🌿 Sin Alcohol'
        };
        return names[category] || '🍸 Coctel';
    }

    function formatPrice(price) {
        return `$${price.toLocaleString('es-CO')}`;
    }

    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('parcheCart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('#cartBadge').forEach(badge => {
            if (badge) {
                if (totalItems > 0) {
                    badge.textContent = totalItems;
                    badge.style.display = 'inline-flex';
                } else {
                    badge.style.display = 'none';
                }
            }
        });
    }

    function showNotification(message) {
        let toast = document.getElementById('toastNotification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toastNotification';
            toast.className = 'toast-notification';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('parcheCart') || '[]');
        const existingIndex = cart.findIndex(item => item.name === product.name);
        
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += product.quantity;
        } else {
            cart.push({ ...product, id: Date.now() });
        }
        
        localStorage.setItem('parcheCart', JSON.stringify(cart));
        updateCartBadge();
        showNotification(`✓ ${product.name} agregado (${product.quantity})`);
    }

    function renderMenu(category) {
        if (!menuContainer) return;
        
        const items = cocktailData[category] || cocktailData.clasicos;
        
        if (!items || items.length === 0) {
            menuContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-cocktail"></i>
                    <p>Próximamente más productos</p>
                </div>
            `;
            return;
        }
        
        menuContainer.innerHTML = items.map(item => {
            const qtyId = `qty_${item.name.replace(/\s/g, '_')}`;
            
            return `
                <div class="menu-card reveal">
                    <div class="menu-image" style="background: linear-gradient(135deg, rgba(10,21,37,0.7), rgba(16,32,53,0.9)), url('${item.image}'); background-size: cover; background-position: center;">
                        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg, #0a1525, #102035)'; this.style.display='none'; this.parentElement.innerHTML='<div class=\'menu-placeholder\'>${item.emoji || '🍸'}</div>'">
                        ${item.badge ? `<div class="menu-badge">${item.badge}</div>` : ''}
                        <div class="menu-overlay"></div>
                        <div class="alcohol-badge ${item.alcohol ? 'with-alcohol' : 'no-alcohol'}">
                            ${item.alcohol ? '🍸 Con Alcohol' : '🥤 Sin Alcohol'}
                        </div>
                    </div>
                    <div class="menu-body">
                        <span class="menu-category">✦ ${getCategoryName(category)}</span>
                        <h3 class="menu-title">${item.name}</h3>
                        <p class="menu-description">${item.description}</p>
                        <div class="menu-footer">
                            <span class="menu-price">${formatPrice(item.price)}</span>
                        </div>
                        <div class="quantity-controls-wrapper">
                            <div class="quantity-selector">
                                <button class="qty-btn qty-minus" data-name="${item.name}">−</button>
                                <span class="qty-value" id="${qtyId}">1</span>
                                <button class="qty-btn qty-plus" data-name="${item.name}">+</button>
                                <button class="btn-add-to-cart" data-name="${item.name}" data-price="${item.price}" data-desc="${item.description}" data-img="${item.image}" data-alcohol="${item.alcohol}">
                                    <i class="fas fa-cart-plus"></i> Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Inicializar controles de cantidad
        initQuantityControls();
        
        // Reinitialize reveal animation
        const revealElements = document.querySelectorAll('.menu-card.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(el => revealObserver.observe(el));
    }

    function initQuantityControls() {
        document.querySelectorAll('.qty-minus').forEach(btn => {
            btn.removeEventListener('click', handleMinus);
            btn.addEventListener('click', handleMinus);
        });

        document.querySelectorAll('.qty-plus').forEach(btn => {
            btn.removeEventListener('click', handlePlus);
            btn.addEventListener('click', handlePlus);
        });

        document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
            btn.removeEventListener('click', handleAddToCart);
            btn.addEventListener('click', handleAddToCart);
        });
    }

    function handleMinus(e) {
        e.stopPropagation();
        const name = e.currentTarget.dataset.name;
        const qtySpan = document.querySelector(`#qty_${name.replace(/\s/g, '_')}`);
        if (qtySpan) {
            let val = parseInt(qtySpan.textContent);
            if (val > 1) qtySpan.textContent = val - 1;
        }
    }

    function handlePlus(e) {
        e.stopPropagation();
        const name = e.currentTarget.dataset.name;
        const qtySpan = document.querySelector(`#qty_${name.replace(/\s/g, '_')}`);
        if (qtySpan) {
            let val = parseInt(qtySpan.textContent);
            qtySpan.textContent = val + 1;
        }
    }

    function handleAddToCart(e) {
        const btn = e.currentTarget;
        const name = btn.dataset.name;
        const price = parseInt(btn.dataset.price);
        const description = btn.dataset.desc;
        const image = btn.dataset.img;
        const alcohol = btn.dataset.alcohol === 'true';
        const qtySpan = document.querySelector(`#qty_${name.replace(/\s/g, '_')}`);
        const quantity = qtySpan ? parseInt(qtySpan.textContent) : 1;
        
        addToCart({ name, price, description, image, alcohol, quantity });
        if (qtySpan) qtySpan.textContent = '1';
    }

    // Tab click handlers
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });

    // Initial render
    renderMenu('clasicos');
    updateCartBadge();
    
    window.addEventListener('storage', updateCartBadge);
})();