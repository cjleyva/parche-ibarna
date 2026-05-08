// ============================================
// PARCHE IBARNA - Gallery Page JavaScript
// Con todas las imágenes del menú (36 productos)
// ============================================

(function() {
    'use strict';

    // Datos de la galería - TODAS las imágenes del menú
    const galleryData = [
        // ========== CLÁSICOS (6) ==========
        { id: 1, image: 'imagenes/barcelona.jpeg', title: 'Kalimotxo', description: 'Vino tinto con Coca-Cola, refrescante y auténtico. La fusión perfecta entre España y el Valle.', category: 'clasicos', price: '$22.000' },
        { id: 2, image: 'imagenes/tinto_verano.jpeg', title: 'Tinto de Verano', description: 'Vino tinto con Sprite, servido con abundante hielo. Refrescante y tradicional.', category: 'clasicos', price: '$19.000' },
        { id: 3, image: 'imagenes/cubata.jpeg', title: 'Cubata', description: 'Ron Viejo de Caldas con Coca-Cola y un toque esencial de limón.', category: 'clasicos', price: '$24.000' },
        { id: 4, image: 'imagenes/havana_sunrise.jpeg', title: 'Havana Sunrise', description: 'Ron Havana Club 3 Años, jugo de naranja, toronja y granadina.', category: 'clasicos', price: '$20.000' },
        { id: 5, image: 'imagenes/margarita_clasica.jpeg', title: 'Margarita Clásica', description: 'Tequila Jose Cuervo con limón fresco, servida en copa escarchada con sal.', category: 'clasicos', price: '$25.000' },
        { id: 6, image: 'imagenes/blue_lagoon.jpeg', title: 'Blue Lagoon', description: 'Absolut Vodka con Curacao Azul, color vibrante y sabor refrescante.', category: 'clasicos', price: '$28.000' },

        // ========== SIGNATURE (9) ==========
        { id: 7, image: 'imagenes/golde_tea.jpeg', title: 'Gold Tea Fresh', description: 'Licor de té con sirope de maracuyá y toque cítrico de limón.', category: 'signature', price: '$32.000' },
        { id: 8, image: 'imagenes/pina_cream.jpeg', title: 'Piña Cream Barna', description: 'Granizado ultra cremoso de piña natural con ron añejo premium.', category: 'signature', price: '$30.000' },
        { id: 9, image: 'imagenes/blue_zombie.jpeg', title: 'Blue Zombie', description: 'Granizado de ron con chicle, limón, perlas explosivas y gomitas ácidas.', category: 'signature', price: '$31.000' },
        { id: 10, image: 'imagenes/terciopelo_hersheys.jpeg', title: 'Terciopelo Hershey\'s', description: 'Crema de Baileys Premium con chocolate Hershey\'s fundido.', category: 'signature', price: '$35.000' },
        { id: 11, image: 'imagenes/mexicana.jpeg', title: 'La Mexicana', description: 'Tequila con chamoy, limón, granadina y escarchado de Tajín.', category: 'signature', price: '$29.000' },
        { id: 12, image: 'imagenes/toxic.jpeg', title: 'Tóxic', description: 'Aguardiente Antioqueño Sin Azúcar con toque cítrico secreto.', category: 'signature', price: '$27.000' },
        { id: 13, image: 'imagenes/charry_templatation.jpeg', title: 'Cherry Temptation', description: 'Absolut Vodka con cerezas, sirope de fresa y burbujas de Sprite.', category: 'signature', price: '$30.000' },
        { id: 14, image: 'imagenes/tropical_premiu.jpeg', title: 'Tropical & Premium', description: 'Aguardiente granizado de maracuyá con perlas explosivas y gomas ácidas.', category: 'signature', price: '$31.000' },
        { id: 15, image: 'imagenes/havana_spirit.jpeg', title: 'Havana Spirit', description: 'Hierbabuena macerada, limón fresco y Havana Club 3 Años con soda.', category: 'signature', price: '$26.000' },

        // ========== CERVEZAS (5) ==========
        { id: 16, image: 'imagenes/corona.jpeg', title: 'Corona Extra', description: 'Cerveza mexicana clara, ligera y refrescante. Servida con limón.', category: 'cervezas', price: '$12.000' },
        { id: 17, image: 'imagenes/mango_biche.jpeg', title: 'Mango Viche Supreme', description: 'Michelada de mango biche con sal y limón. Refrescante y audaz.', category: 'cervezas', price: '$28.000' },
        { id: 18, image: 'imagenes/club_colombia.jpeg', title: 'Club Colombia Dorada', description: 'Cerveza dorada con balance perfecto entre malta y lúpulo.', category: 'cervezas', price: '$11.000' },
        { id: 19, image: 'imagenes/heineken.jpeg', title: 'Heineken', description: 'Cerveza premium de origen holandés, sabor suave y distintivo.', category: 'cervezas', price: '$12.000' },
        { id: 20, image: 'imagenes/michelada.jpeg', title: 'Michelada', description: 'Cerveza preparada con limón, sales, salsas y especias.', category: 'cervezas', price: '$15.000' },

        // ========== TRAGOS (5) ==========
        { id: 21, image: 'imagenes/ron_viejo.jpeg', title: 'Ron Viejo de Caldas', description: 'Ron añejo colombiano, suave y con carácter.', category: 'tragos', price: '$18.000' },
        { id: 22, image: 'imagenes/havana_club.jpeg', title: 'Havana Club 3 Años', description: 'Ron cubano suave, ideal para cócteles.', category: 'tragos', price: '$20.000' },
        { id: 23, image: 'imagenes/aguardiente.jpeg', title: 'Aguardiente Antioqueño', description: 'El trago tradicional colombiano con sabor a anís.', category: 'tragos', price: '$15.000' },
        { id: 24, image: 'imagenes/tequila.jpeg', title: 'Tequila Jose Cuervo', description: 'Tequila reposado mexicano, perfecto para chupitos o margaritas.', category: 'tragos', price: '$22.000' },
        { id: 25, image: 'imagenes/beefeater.jpeg', title: 'Ginebra Beefeater', description: 'Ginebra inglesa seca, ideal para Gin Tonics premium.', category: 'tragos', price: '$25.000' },

        // ========== SODAS (4) ==========
        { id: 26, image: 'imagenes/soda_italiana_fresa.jpeg', title: 'Soda Italiana de Fresa - Berry Barna', description: 'Trozos de fruta natural con sirope premium de fresa y soda cristalina.', category: 'sodas', price: '$12.000' },
        { id: 27, image: 'imagenes/soda_italiana_maracuya.jpeg', title: 'Soda Italiana de Maracuyá - Passion Barna', description: 'Sirope artesanal con pulpa de maracuyá natural y soda premium.', category: 'sodas', price: '$12.000' },
        { id: 28, image: 'imagenes/cocacola.jpeg', title: 'Coca-Cola', description: 'La clásica bebida de burbujas, servida con hielo y limón.', category: 'sodas', price: '$6.000' },
        { id: 29, image: 'imagenes/sprite.jpeg', title: 'Sprite', description: 'Refrescante bebida de limón, libre de cafeína.', category: 'sodas', price: '$6.000' },

        // ========== SIN ALCOHOL (7) ==========
        { id: 30, image: 'imagenes/virgin_mojito.jpeg', title: 'Virgin Mojito', description: 'Menta fresca, lima, azúcar de caña y soda. Refrescante y tradicional.', category: 'sin-alcohol', price: '$14.000' },
        { id: 31, image: 'imagenes/oreo_dream.jpeg', title: 'Oreo Dream', description: 'Granizado cremoso de galleta Oreo con crema chantilly y trozos de galleta.', category: 'sin-alcohol', price: '$18.000' },
        { id: 32, image: 'imagenes/ibarna_sour.jpeg', title: 'Ibarna Zero', description: 'Maracuyá, albahaca, jengibre y soda. Refrescante y lleno de personalidad.', category: 'sin-alcohol', price: '$15.000' },
        { id: 33, image: 'imagenes/berry_smash.jpeg', title: 'Berry Smash', description: 'Frutos rojos, limón, tónica y lavanda. Elegancia en cada sorbo.', category: 'sin-alcohol', price: '$15.000' },
        { id: 34, image: 'imagenes/coco_loco.jpeg', title: 'Coconut Dream', description: 'Leche de coco, piña, canela y espuma. Cremoso y tropical.', category: 'sin-alcohol', price: '$16.000' },
        { id: 35, image: 'imagenes/passion_cooler.jpeg', title: 'Passion Cooler', description: 'Maracuyá, limón, miel y soda. El equilibrio perfecto entre dulce y ácido.', category: 'sin-alcohol', price: '$14.000' },
        { id: 36, image: 'imagenes/ginger_fizz.jpeg', title: 'Ginger Fizz', description: 'Jengibre, limón, miel y agua con gas. Refrescante y digestivo.', category: 'sin-alcohol', price: '$13.000' }
    ];

    // Top 10 imágenes para el carrusel (las más destacadas)
    const carouselImages = galleryData.slice(0, 12);

    const galleryGrid = document.getElementById('galeria-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Renderizar carrusel
    function renderCarousel() {
        const carouselWrapper = document.getElementById('carousel-wrapper');
        if (!carouselWrapper) return;

        carouselWrapper.innerHTML = carouselImages.map(item => `
            <div class="swiper-slide">
                <div class="carousel-card">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400/1a1a2e/00ffff?text=${encodeURIComponent(item.title)}'">
                    <div class="carousel-info">
                        <h4>${item.title}</h4>
                        <p>${item.description.substring(0, 60)}...</p>
                        <span class="carousel-price">${item.price}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Reinicializar Swiper si ya existe
        if (window.gallerySwiper) {
            window.gallerySwiper.destroy(true, true);
        }
        
        window.gallerySwiper = new Swiper('.galeria-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    // Renderizar galería completa con filtros
    function renderGallery(filter = 'all') {
        if (!galleryGrid) return;
        
        const filtered = filter === 'all' 
            ? galleryData 
            : galleryData.filter(item => item.category === filter);
        
        galleryGrid.innerHTML = filtered.map(item => `
            <div class="galeria-item" data-category="${item.category}" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a1a2e/00ffff?text=${encodeURIComponent(item.title)}'">
                <div class="galeria-overlay">
                    <div class="overlay-content">
                        <i class="fas fa-search-plus"></i>
                        <h4>${item.title}</h4>
                        <p>${item.description.substring(0, 80)}${item.description.length > 80 ? '...' : ''}</p>
                        <span class="overlay-price">${item.price}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click event for lightbox
        document.querySelectorAll('.galeria-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('.overlay-content h4')?.textContent || '';
                const description = item.querySelector('.overlay-content p')?.textContent || '';
                const price = item.querySelector('.overlay-price')?.textContent || '';
                if (img) openLightbox(img.src, title, description, price);
            });
        });
    }

    // Lightbox mejorado
    function openLightbox(src, title, description, price) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${title}">
                <div class="lightbox-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="lightbox-footer">
                        <span class="lightbox-price">${price}</span>
                        <a href="menu.html" class="lightbox-btn">Ver en Carta</a>
                    </div>
                </div>
            </div>
            <button class="lightbox-close"><i class="fas fa-times"></i></button>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => lightbox.classList.add('active'), 10);
        
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = '';
            }, 300);
        };
        
        lightbox.querySelector('.lightbox-close')?.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Actualizar badge del carrito
    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('parcheCart') || '[]');
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

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });

    // Inicializar
    renderCarousel();
    renderGallery('all');
    updateCartBadge();

    console.log('✨ PARCHE IBARNA | Gallery page initialized with 36 images');
})();