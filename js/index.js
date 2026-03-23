// ============================================
// PARCHE IBARNA - Index Page JavaScript
// ============================================

(function() {
    'use strict';

    // ========== ANIMATE STATS COUNTERS ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            const suffix = stat.dataset.suffix || '';
            let current = 0;
            const increment = Math.ceil(target / 40);
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = current + suffix;
                }
            }, 30);
        });
    }

    // Observer for stats section with responsive threshold
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(statsSection);
    }

    // ========== HERO CAROUSEL ==========
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    if (slides.length > 0) {
        // Start with first slide active
        showSlide(0);
        
        // Auto-rotate slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // ========== FEATURED COCKTAILS RESPONSIVE ==========
    const cocktailCards = document.querySelectorAll('.cocktail-card');
    cocktailCards.forEach(card => {
        card.addEventListener('click', () => {
            const link = card.querySelector('.btn-small');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });

    console.log('✨ PARCHE IBARNA | Home page initialized');
})(); 

// ============================================
// CARRUSEL - Versión corregida (funciona en móviles)
// ============================================

(function() {
    'use strict';
    
    // Elementos del carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;
    const intervalTime = 5000; // 5 segundos
    
    // Función para mostrar un slide específico
    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Validar índice
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Remover clase active de todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remover clase active de todos los indicadores
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Agregar clase active al slide actual
        slides[index].classList.add('active');
        
        // Agregar clase active al indicador actual
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
        
        // Pequeño delay para evitar múltiples transiciones
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    // Siguiente slide
    function nextSlide() {
        if (isTransitioning) return;
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    }
    
    // Anterior slide
    function prevSlide() {
        if (isTransitioning) return;
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        showSlide(newIndex);
    }
    
    // Auto-reproducción
    function startAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    // Eventos para botones
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    // Eventos para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentSlide === index) return;
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });
    
    // Pausar al hacer hover en desktop
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Soporte para swipe en móviles
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        }, { passive: true });
        
        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            
            if (touchEndX < touchStartX - swipeThreshold) {
                nextSlide();
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                prevSlide();
            }
            
            startAutoSlide();
        });
    }
    
    // Iniciar carrusel
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
    
    // Manejar cambio de orientación en móviles
    window.addEventListener('resize', () => {
        // Reajustar altura si es necesario
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel && window.innerWidth <= 768) {
            heroCarousel.style.height = 'auto';
        }
    });
    
    console.log('✨ Carrusel inicializado correctamente');
})();