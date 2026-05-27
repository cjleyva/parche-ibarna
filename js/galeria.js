// ============================================
// PARCHE IBARNA - Gallery Page JavaScript
// Genera galleryData automáticamente desde cocktailData
// ============================================

(function() {
    'use strict';

    // Función para formatear precios
    function formatPrice(price) {
        if (price === null || price === undefined) return '';
        if (typeof price === 'number') return `$${price.toLocaleString('es-CO')}`;
        if (typeof price === 'object' && price !== null) {
            if (price.vaso && price.jarra) {
                return `Vaso $${price.vaso.toLocaleString('es-CO')} / Jarra $${price.jarra.toLocaleString('es-CO')}`;
            }
            return '';
        }
        if (price === '') return 'Consultar en tienda';
        return price;
    }

    // Mapeo de categorías
    const categoryMapping = {
        'clasicos': 'clasicos',
        'exclusivos': 'signature',
        'cervezas': 'cervezas',
        'micheladas': 'cervezas',
        'sodas': 'sodas',
        'sin-alcohol': 'sin-alcohol'
    };

    let galleryData = [];

    // Convertir cocktailData a galleryData automáticamente
    function buildGalleryFromCocktailData(data) {
        const result = [];
        let idCounter = 1;

        // Procesar Clásicos
        if (data.clasicos) {
            data.clasicos.forEach(item => {
                result.push({
                    id: idCounter++,
                    image: item.image,
                    title: item.name,
                    description: item.description,
                    category: 'clasicos',
                    price: formatPrice(item.price)
                });
            });
        }

        // Procesar Exclusivos
        if (data.exclusivos) {
            data.exclusivos.forEach(item => {
                result.push({
                    id: idCounter++,
                    image: item.image,
                    title: item.name,
                    description: item.description,
                    category: 'signature',
                    price: formatPrice(item.price)
                });
            });
        }

        // Procesar Cervezas
        if (data.cervezas) {
            data.cervezas.forEach(item => {
                result.push({
                    id: idCounter++,
                    image: item.image,
                    title: item.name,
                    description: item.description,
                    category: 'cervezas',
                    price: formatPrice(item.price)
                });
            });
        }

        // Procesar Micheladas
        if (data.micheladas) {
            data.micheladas.forEach(item => {
                result.push({
                    id: idCounter++,
                    image: item.image,
                    title: item.name,
                    description: item.description,
                    category: 'cervezas',
                    price: formatPrice(item.price)
                });
            });
        }

        // Procesar Sodas
        if (data.sodas) {
            data.sodas.forEach(item => {
                result.push({
                    id: idCounter++,
                    image: item.image,
                    title: item.name,
                    description: item.description,
                    category: 'sodas',
                    price: formatPrice(item.price)
                });
            });
        }

        // Procesar Sin Alcohol
        if (data['sin-alcohol']) {
            data['sin-alcohol'].forEach(item => {
                result.push({
                    id: idCounter++,
                    image: item.image,
                    title: item.name,
                    description: item.description,
                    category: 'sin-alcohol',
                    price: formatPrice(item.price)
                });
            });
        }

        return result;
    }

    // Construir datos del carrusel (primeras 12 imágenes destacadas)
    function buildCarouselData(data) {
        // Priorizar items con badge primero
        const withBadge = data.filter(item => {
            // Buscar en cocktailData si tiene badge
            for (const category in cocktailData) {
                const found = cocktailData[category]?.find(c => c.name === item.title);
                if (found && found.badge) return true;
            }
            return false;
        });
        
        const withoutBadge = data.filter(item => {
            for (const category in cocktailData) {
                const found = cocktailData[category]?.find(c => c.name === item.title);
                if (found && !found.badge) return true;
            }
            return false;
        });
        
        const destacados = [...withBadge, ...withoutBadge];
        return destacados.slice(0, 12);
    }

    // Esperar a que cargue cocktailData
    function esperarDatos() {
        if (typeof cocktailData !== 'undefined' && cocktailData !== null) {
            // Construir galleryData desde cocktailData
            galleryData = buildGalleryFromCocktailData(cocktailData);
            const carouselData = buildCarouselData(galleryData);
            
            // Renderizar todo
            renderCarousel(carouselData);
            renderGallery('all');
            updateCartBadge();
            
            console.log(`✨ Galería cargada con ${galleryData.length} productos`);
        } else {
            setTimeout(esperarDatos, 100);
        }
    }

    const galleryGrid = document.getElementById('galeria-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Renderizar carrusel
    function renderCarousel(carouselData) {
        const carouselWrapper = document.getElementById('carousel-wrapper');
        if (!carouselWrapper) return;

        if (!carouselData || carouselData.length === 0) {
            carouselWrapper.innerHTML = '<div class="swiper-slide">Cargando imágenes...</div>';
            return;
        }

        carouselWrapper.innerHTML = carouselData.map(item => `
            <div class="swiper-slide">
                <div class="carousel-card">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400/1a1a2e/00ffff?text=${encodeURIComponent(item.title)}'">
                    <div class="carousel-info">
                        <h4>${item.title}</h4>
                        <p>${item.description ? item.description.substring(0, 60) + '...' : 'Descubre este increíble cóctel'}</p>
                        <span class="carousel-price">${item.price}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Reinicializar Swiper
        if (window.gallerySwiper) {
            window.gallerySwiper.destroy(true, true);
        }
        
        window.gallerySwiper = new Swiper('.galeria-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: carouselData.length > 3,
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
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }
        });
    }

    // Renderizar galería completa
    function renderGallery(filter = 'all') {
        if (!galleryGrid) return;
        
        let filtered = galleryData;
        if (filter !== 'all') {
            filtered = galleryData.filter(item => item.category === filter);
        }
        
        if (filtered.length === 0) {
            galleryGrid.innerHTML = '<div class="no-results">No hay productos en esta categoría</div>';
            return;
        }
        
        galleryGrid.innerHTML = filtered.map(item => `
            <div class="galeria-item" data-category="${item.category}" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a1a2e/00ffff?text=${encodeURIComponent(item.title)}'">
                <div class="galeria-overlay">
                    <div class="overlay-content">
                        <i class="fas fa-search-plus"></i>
                        <h4>${item.title}</h4>
                        <p>${item.description ? (item.description.substring(0, 80) + (item.description.length > 80 ? '...' : '')) : 'Descubre esta deliciosa bebida'}</p>
                        <span class="overlay-price">${item.price}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Evento click para lightbox
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

    // Lightbox
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
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
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

    // Configurar filtros
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderGallery(btn.dataset.filter);
            });
        });
    }

    // Inicializar
    esperarDatos();
})();