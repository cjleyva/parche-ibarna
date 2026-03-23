// ============================================
// PARCHE IBARNA - Gallery Page JavaScript
// ============================================

(function() {
    'use strict';

    // Gallery Data - All cocktail and atmosphere images
    const galleryData = [
        { image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg', title: 'Ibarna Sour', category: 'cocktail' },
        { image: 'https://images.pexels.com/photos/3679150/pexels-photo-3679150.jpeg', title: 'Margarita Artesanal', category: 'cocktail' },
        { image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg', title: 'Lulo Storm', category: 'cocktail' },
        { image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg', title: 'Negroni Clásico', category: 'cocktail' },
        { image: 'https://images.pexels.com/photos/1282423/pexels-photo-1282423.jpeg', title: 'Preparación Artesanal', category: 'mixologia' },
        { image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg', title: 'Bartender en Acción', category: 'mixologia' },
        { image: 'https://images.pexels.com/photos/2608515/pexels-photo-2608515.jpeg', title: 'Ambiente Nocturno', category: 'ambiente' },
        { image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', title: 'Barra Principal', category: 'ambiente' },
        { image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg', title: 'Zona VIP', category: 'ambiente' },
        { image: 'https://images.pexels.com/photos/3679461/pexels-photo-3679461.jpeg', title: 'Coctel Sin Alcohol', category: 'sin-alcohol' },
        { image: 'https://images.pexels.com/photos/3679460/pexels-photo-3679460.jpeg', title: 'Mocktail Especial', category: 'sin-alcohol' },
        { image: 'https://images.pexels.com/photos/3679459/pexels-photo-3679459.jpeg', title: 'Virgin Mojito', category: 'sin-alcohol' }
    ];

    const galleryGrid = document.getElementById('galeria-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderGallery(filter = 'all') {
        if (!galleryGrid) return;
        
        const filtered = filter === 'all' 
            ? galleryData 
            : galleryData.filter(item => item.category === filter);
        
        galleryGrid.innerHTML = filtered.map(item => `
            <div class="galeria-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="galeria-overlay">
                    <span><i class="fas fa-expand me-1"></i> ${item.title}</span>
                </div>
            </div>
        `).join('');
        
        // Add click event for lightbox
        document.querySelectorAll('.galeria-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) openLightbox(img.src, img.alt);
            });
        });
    }

    // Lightbox functionality
    function openLightbox(src, title) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <img src="${src}" alt="${title}">
            <div class="lightbox-close"><i class="fas fa-times"></i></div>
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
        
        lightbox.addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-close')?.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
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

    // Initial render
    renderGallery('all');

    console.log('✨ PARCHE IBARNA | Gallery page initialized');
})();