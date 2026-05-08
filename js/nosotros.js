// ============================================
// PARCHE IBARNA - About Us Page JavaScript
// Con carrusel de cocteles Swiper
// ============================================

(function() {
    'use strict';

    // ============================================
    // 1. INICIALIZAR CARRUSEL SWIPER
    // ============================================
    const swiper = new Swiper('.cocteles-swiper', {
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

    // ============================================
    // 2. REVEAL ANIMATION ON SCROLL
    // ============================================
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ============================================
    // 3. ANIMATE STATS COUNTERS (si existen)
    // ============================================
    const statNumbers = document.querySelectorAll('.nosotros-stats .stat strong');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const match = text.match(/\d+/);
            if (match) {
                const target = parseInt(match[0]);
                let current = 0;
                const increment = Math.ceil(target / 40);
                const suffix = text.replace(/\d+/, '');
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = current + suffix;
                    }
                }, 30);
            }
        });
    }

    const statsSection = document.querySelector('.nosotros-stats');
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

    // ============================================
    // 4. CARGAR AÑO ACTUAL EN EL FOOTER
    // ============================================
    const yearElement = document.querySelector('.footer-bottom p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `© ${currentYear} PARCHE IBARNA — Todos los derechos reservados`;
    }

    console.log('✨ PARCHE IBARNA | About Us page initialized with carousel');
})();