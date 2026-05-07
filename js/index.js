// ============================================
// PARCHE IBARNA - Index Page JavaScript
// CARRUSEL CON 6 SLIDES E IMÁGENES LOCALES
// ============================================

(function() {
    'use strict';

    // ========== HERO CAROUSEL ==========
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
    if (prevBtn && slides.length > 0) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    if (nextBtn && slides.length > 0) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    // Eventos para indicadores
    if (indicators.length > 0) {
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentSlide === index) return;
                stopAutoSlide();
                showSlide(index);
                startAutoSlide();
            });
        });
    }
    
    // Pausar al hacer hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer && slides.length > 0) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Soporte para SWIPE en móviles
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselContainer && slides.length > 0) {
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
    
    // ========== REVEAL ANIMATION ==========
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
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
    
    // ========== CARDS CLICK ==========
    const cocktailCards = document.querySelectorAll('.cocktail-card');
    cocktailCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-small') || e.target.closest('.btn-small')) {
                return;
            }
            const link = card.querySelector('.btn-small');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });
    
    // ========== HEADER SCROLL ==========
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    console.log('✨ PARCHE IBARNA | Carrusel con 6 slides inicializado');
})();