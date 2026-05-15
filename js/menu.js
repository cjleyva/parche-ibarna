// ============================================
// PARCHE IBARNA - Menu Page JavaScript
// Con identificación de mesa y redirección a órdenes
// ============================================

(function() {
    'use strict';

    const menuContainer = document.getElementById('menu-container');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Variable para almacenar el número de mesa
    let numeroMesa = null;

    // ============================================
    // OBTENER MESA DESDE LA URL
    // ============================================
    function obtenerMesaDesdeURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const mesa = urlParams.get('mesa');
        if (mesa && !isNaN(mesa) && mesa >= 1 && mesa <= 20) {
            numeroMesa = parseInt(mesa);
            console.log(`📱 Cliente en MESA ${numeroMesa}`);
            mostrarBannerMesa();
            return true;
        }
        console.log('📱 Cliente sin mesa asignada');
        return false;
    }

    // ============================================
    // MOSTRAR BANNER DE MESA
    // ============================================
    function mostrarBannerMesa() {
        const banner = document.getElementById('mesaBannerTop');
        const mesaTexto = document.getElementById('mesaNumeroTexto');
        
        if (banner && mesaTexto && numeroMesa) {
            mesaTexto.innerHTML = `<i class="fas fa-chair"></i> Estás en la MESA ${numeroMesa} - Tus pedidos llegarán directamente a esta mesa`;
            banner.style.display = 'block';
            
            // Actualizar los enlaces de "Mi Pedido" con el parámetro de mesa
            actualizarEnlacesPedido();
        }
    }

    // ============================================
    // ACTUALIZAR ENLACES DE "MI PEDIDO" CON LA MESA
    // ============================================
    function actualizarEnlacesPedido() {
        if (!numeroMesa) return;
        
        const ordenesLinkDesktop = document.getElementById('ordenesLinkDesktop');
        const ordenesLinkMobile = document.getElementById('ordenesLinkMobile');
        
        const nuevaURL = `ordenes.html?mesa=${numeroMesa}`;
        
        if (ordenesLinkDesktop) {
            ordenesLinkDesktop.href = nuevaURL;
        }
        if (ordenesLinkMobile) {
            ordenesLinkMobile.href = nuevaURL;
        }
        
        console.log(`✅ Enlaces de pedido actualizados a: ${nuevaURL}`);
    }

    // ============================================
    // GUARDAR MESA EN LOCALSTORAGE PARA USO FUTURO
    // ============================================
    function guardarMesaEnStorage() {
        if (numeroMesa) {
            localStorage.setItem('parcheMesaActual', numeroMesa);
        }
    }

    function formatPrice(price) {
        return `$${price.toLocaleString('es-CO')}`;
    }

    function updateCartBadge() {
        let cart = [];
        
        if (numeroMesa) {
            // Si hay mesa, usar carrito específico de la mesa
            const cartKey = `parcheCart_mesa_${numeroMesa}`;
            cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
        } else {
            // Si no hay mesa, usar carrito general
            cart = JSON.parse(localStorage.getItem('parcheCart') || '[]');
        }
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('#cartBadge, #cartBadgeMobile').forEach(badge => {
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
        let cart = [];
        let cartKey = 'parcheCart';
        
        if (numeroMesa) {
            cartKey = `parcheCart_mesa_${numeroMesa}`;
        }
        
        cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
        
        const existingIndex = cart.findIndex(item => item.name === product.name);
        
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += product.quantity;
        } else {
            cart.push({ ...product, id: Date.now() });
        }
        
        localStorage.setItem(cartKey, JSON.stringify(cart));
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
            const qtyId = `qty_${item.name.replace(/\s/g, '_').replace(/'/g, '')}`;
            const imagePath = item.image || `https://placehold.co/400x300/1a1a2e/00ffff?text=${encodeURIComponent(item.name)}`;
            
            return `
                <div class="menu-card reveal">
                    <div class="menu-image" style="background: linear-gradient(135deg, rgba(10,21,37,0.7), rgba(16,32,53,0.9)), url('${imagePath}'); background-size: cover; background-position: center;">
                        <img src="${imagePath}" alt="${item.name}" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg, #0a1525, #102035)'; this.style.display='none'; this.parentElement.innerHTML='<div class=\'menu-placeholder\'>${item.emoji || '🍸'}</div>'">
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
                                <button class="qty-btn qty-minus" data-name="${item.name.replace(/'/g, '\\\'')}">−</button>
                                <span class="qty-value" id="${qtyId}">1</span>
                                <button class="qty-btn qty-plus" data-name="${item.name.replace(/'/g, '\\\'')}">+</button>
                                <button class="btn-add-to-cart" data-name="${item.name.replace(/'/g, '\\\'')}" data-price="${item.price}" data-desc="${item.description.replace(/'/g, '\\\'')}" data-img="${imagePath}" data-alcohol="${item.alcohol}">
                                    <i class="fas fa-cart-plus"></i> Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        initQuantityControls();
        
        // Reveal animation
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
        const qtySpan = document.querySelector(`#qty_${name.replace(/\s/g, '_').replace(/'/g, '')}`);
        if (qtySpan) {
            let val = parseInt(qtySpan.textContent);
            if (val > 1) qtySpan.textContent = val - 1;
        }
    }

    function handlePlus(e) {
        e.stopPropagation();
        const name = e.currentTarget.dataset.name;
        const qtySpan = document.querySelector(`#qty_${name.replace(/\s/g, '_').replace(/'/g, '')}`);
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
        const qtySpan = document.querySelector(`#qty_${name.replace(/\s/g, '_').replace(/'/g, '')}`);
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

    // ============================================
    // INICIALIZAR
    // ============================================
    function init() {
        obtenerMesaDesdeURL();
        guardarMesaEnStorage();
        renderMenu('clasicos');
        updateCartBadge();
        
        // Escuchar cambios en localStorage
        window.addEventListener('storage', updateCartBadge);
    }

    init();
})();