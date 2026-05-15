// ============================================
// PARCHE IBARNA - Órdenes JavaScript
// Envío de pedido al WhatsApp de la coctelería
// CON IDENTIFICACIÓN DE MESA Y LIMPIEZA AUTOMÁTICA
// SIN IVA
// ============================================

(function() {
    'use strict';

    let currentCart = [];
    let numeroMesa = null;

    // NÚMERO DE WHATSAPP DE LA COCTELERÍA
    const WHATSAPP_NUMBER = "573204901827";

    // Imágenes para el carrusel del hero
    const heroImages = [
        'imagenes/barcelona.jpeg',
        'imagenes/golde_tea.jpeg',
        'imagenes/blue_zombie.jpeg',
        'imagenes/margarita_clasica.jpeg',
        'imagenes/coronita.jpeg',
        'imagenes/pina_cream.jpeg'
    ];

    document.addEventListener('DOMContentLoaded', function() {
        obtenerMesaDesdeURL();
        loadCart();
        initEventListeners();
        initHeroCarousel();
        mostrarInfoMesa();
    });

    // ============================================
    // OBTENER NÚMERO DE MESA DESDE LA URL
    // ============================================
    function obtenerMesaDesdeURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const mesa = urlParams.get('mesa');
        if (mesa && !isNaN(mesa) && mesa >= 1 && mesa <= 20) {
            numeroMesa = parseInt(mesa);
            console.log(`📱 Cliente en MESA ${numeroMesa}`);
        } else {
            console.log('📱 Cliente sin mesa asignada (visita directa)');
        }
    }

    // ============================================
    // MOSTRAR BANNER DE MESA
    // ============================================
    function mostrarInfoMesa() {
        const mesaInfo = document.getElementById('mesaInfo');
        const mesaNumeroDisplay = document.getElementById('mesaNumeroDisplay');
        
        if (numeroMesa && mesaInfo && mesaNumeroDisplay) {
            mesaNumeroDisplay.innerHTML = `<i class="fas fa-chair"></i> Mesa ${numeroMesa} - Escanea el código QR de tu mesa`;
            mesaInfo.style.display = 'block';
        }
    }

    // ============================================
    // INICIALIZAR CARRUSEL DEL HERO
    // ============================================
    function initHeroCarousel() {
        const heroWrapper = document.getElementById('heroCarouselWrapper');
        if (!heroWrapper) return;

        heroWrapper.innerHTML = heroImages.map(img => `
            <div class="swiper-slide">
                <div class="hero-slide-bg" style="background-image: url('${img}');"></div>
            </div>
        `).join('');

        new Swiper('.hero-swiper', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 2000
        });
    }

    // ============================================
    // CARGAR CARRITO (por mesa o general)
    // ============================================
    function loadCart() {
        const cartKey = numeroMesa ? `parcheCart_mesa_${numeroMesa}` : 'parcheCart';
        const savedCart = localStorage.getItem(cartKey);
        currentCart = savedCart ? JSON.parse(savedCart) : [];
        renderCart();
        updateSummary();
        updateCounters();
        checkEmptyState();
        updateCartBadge();
    }

    // ============================================
    // GUARDAR CARRITO (por mesa o general)
    // ============================================
    function saveCart() {
        const cartKey = numeroMesa ? `parcheCart_mesa_${numeroMesa}` : 'parcheCart';
        localStorage.setItem(cartKey, JSON.stringify(currentCart));
        updateCartBadge();
    }

    // ============================================
    // LIMPIAR CARRITO DESPUÉS DEL PEDIDO
    // ============================================
    function limpiarCarritoDespuesDePedido() {
        const cartKey = numeroMesa ? `parcheCart_mesa_${numeroMesa}` : 'parcheCart';
        currentCart = [];
        localStorage.setItem(cartKey, JSON.stringify(currentCart));
        renderCart();
        updateSummary();
        updateCounters();
        checkEmptyState();
        updateCartBadge();
    }

    // ============================================
    // ACTUALIZAR BADGE DEL CARRITO
    // ============================================
    function updateCartBadge() {
        const totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
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

    // ============================================
    // FORMATO DE PRECIO
    // ============================================
    function formatPrice(price) {
        return `$${price.toLocaleString('es-CO')}`;
    }

    // ============================================
    // RENDERIZAR CARRITO
    // ============================================
    function renderCart() {
        const container = document.getElementById('cartItemsContainer');
        if (!container) return;

        if (currentCart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-cart"></i>
                    <p>No hay productos en tu pedido</p>
                    <a href="menu.html" class="btn-browse">Ver Carta</a>
                </div>
            `;
            return;
        }

        container.innerHTML = currentCart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image || 'https://placehold.co/200/1a1a2e/00ffff?text=' + encodeURIComponent(item.name)}" alt="${escapeHtml(item.name)}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">
                        ${escapeHtml(item.name)}
                        <span class="alcohol-tag ${item.alcohol ? '' : 'no-alcohol'}">
                            ${item.alcohol ? '🍸 Con Alcohol' : '🥤 Sin Alcohol'}
                        </span>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price)} c/u</div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="qty-decrease" data-id="${item.id}">−</button>
                            <span>${item.quantity}</span>
                            <button class="qty-increase" data-id="${item.id}">+</button>
                        </div>
                        <div class="cart-item-subtotal">${formatPrice(item.price * item.quantity)}</div>
                        <button class="btn-remove-item" data-id="${item.id}">
                            <i class="fas fa-trash-alt"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        bindCartItemEvents();
    }

    // ============================================
    // EVENTOS DEL CARRITO
    // ============================================
    function bindCartItemEvents() {
        document.querySelectorAll('.qty-decrease').forEach(btn => {
            btn.removeEventListener('click', handleDecrease);
            btn.addEventListener('click', handleDecrease);
        });

        document.querySelectorAll('.qty-increase').forEach(btn => {
            btn.removeEventListener('click', handleIncrease);
            btn.addEventListener('click', handleIncrease);
        });

        document.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.removeEventListener('click', handleRemove);
            btn.addEventListener('click', handleRemove);
        });
    }

    function handleDecrease(e) {
        const id = parseInt(e.currentTarget.dataset.id);
        const item = currentCart.find(i => i.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
            saveCart();
            renderCart();
            updateSummary();
            updateCounters();
        } else if (item && item.quantity === 1) {
            removeItem(id);
        }
    }

    function handleIncrease(e) {
        const id = parseInt(e.currentTarget.dataset.id);
        const item = currentCart.find(i => i.id === id);
        if (item) {
            item.quantity++;
            saveCart();
            renderCart();
            updateSummary();
            updateCounters();
        }
    }

    function handleRemove(e) {
        const id = parseInt(e.currentTarget.dataset.id);
        removeItem(id);
    }

    function removeItem(id) {
        currentCart = currentCart.filter(item => item.id !== id);
        saveCart();
        renderCart();
        updateSummary();
        updateCounters();
        checkEmptyState();
        showNotification('Producto eliminado');
    }

    function clearAllItems() {
        if (confirm('¿Estás seguro de vaciar todo tu pedido?')) {
            currentCart = [];
            saveCart();
            renderCart();
            updateSummary();
            updateCounters();
            checkEmptyState();
            showNotification('Pedido vaciado');
        }
    }

    // ============================================
    // ACTUALIZAR RESUMEN
    // ============================================
    function updateSummary() {
        const total = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('summarySubtotal').textContent = formatPrice(total);
        document.getElementById('summaryTotal').textContent = formatPrice(total);
    }

    function updateCounters() {
        const productCount = currentCart.length;
        const itemCount = currentCart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('productCount').textContent = productCount;
        document.getElementById('itemCount').textContent = itemCount;
    }

    function checkEmptyState() {
        const emptyState = document.getElementById('emptyCartState');
        const ordersGrid = document.querySelector('.orders-grid');
        
        if (currentCart.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            if (ordersGrid) ordersGrid.style.display = 'none';
        } else {
            if (emptyState) emptyState.style.display = 'none';
            if (ordersGrid) ordersGrid.style.display = 'grid';
        }
    }

    // ============================================
    // CONFIRMAR Y ENVIAR PEDIDO POR WHATSAPP
    // ============================================
    function confirmOrder() {
        if (currentCart.length === 0) {
            showNotification('No hay productos en tu pedido');
            return;
        }

        const total = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Obtener fecha y hora actual
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString('es-CO');
        const hora = ahora.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
        
        // Mensaje para el personal de la coctelería
        let mensaje = "🍸 *¡NUEVO PEDIDO - PARCHE IBARNA!* 🍸\n\n";
        mensaje += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        
        // Mostrar número de mesa si está disponible
        if (numeroMesa) {
            mensaje += `🪑 *MESA:* ${numeroMesa}\n`;
        } else {
            mensaje += `🪑 *MESA:* No especificada (pedido desde web)\n`;
        }
        mensaje += `📅 *Fecha:* ${fecha}\n`;
        mensaje += `⏰ *Hora:* ${hora}\n`;
        mensaje += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
        
        mensaje += "📋 *DETALLE DEL PEDIDO:*\n";
        mensaje += "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n";
        
        currentCart.forEach((item, index) => {
            mensaje += `*${index + 1}. ${item.name}*\n`;
            mensaje += `   ├ 🥤 Cantidad: ${item.quantity}\n`;
            mensaje += `   ├ 💰 Precio unitario: ${formatPrice(item.price)}\n`;
            mensaje += `   └ 📦 Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
        });
        
        mensaje += "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n";
        mensaje += `💵 *TOTAL A PAGAR: ${formatPrice(total)}*\n\n`;
        
        mensaje += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
        mensaje += "👨‍🍳 *INSTRUCCIONES PARA EL PERSONAL:*\n";
        mensaje += "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n";
        if (numeroMesa) {
            mensaje += `✅ Servir en MESA ${numeroMesa}\n`;
        }
        mensaje += "✅ Preparar con los ingredientes premium\n";
        mensaje += "✅ Entregar al cliente en la mesa\n\n";
        
        mensaje += "✨ *¡Gracias por tu preferencia!* ✨\n";
        mensaje += "📍 PARCHE IBARNA - Poblado Campestre";
        
        // Enviar al número de la coctelería
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
        
        window.open(url, '_blank');
        
        // LIMPIAR EL CARRITO DESPUÉS DE ENVIAR EL PEDIDO
        limpiarCarritoDespuesDePedido();
        
        showNotification('✅ Pedido enviado. ¡Gracias por tu compra!');
    }

    // ============================================
    // NOTIFICACIONES
    // ============================================
    function showNotification(message) {
        let toast = document.querySelector('.toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast-notification';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    function initEventListeners() {
        const clearAllBtn = document.getElementById('clearAllBtn');
        const confirmOrderBtn = document.getElementById('confirmOrderBtn');
        const continueShoppingBtn = document.getElementById('continueShoppingBtn');
        
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', clearAllItems);
        }
        
        if (confirmOrderBtn) {
            confirmOrderBtn.addEventListener('click', confirmOrder);
        }
        
        if (continueShoppingBtn) {
            continueShoppingBtn.addEventListener('click', () => {
                window.location.href = 'menu.html';
            });
        }
    }

    // Escuchar cambios en localStorage para sincronizar
    window.addEventListener('storage', function(e) {
        if (e.key === 'parcheCart' || (numeroMesa && e.key === `parcheCart_mesa_${numeroMesa}`)) {
            loadCart();
        }
    });

})();