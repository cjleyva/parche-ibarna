// ============================================
// PARCHE IBARNA - Global JavaScript
// Con soporte para badge móvil y desktop
// ============================================

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        
        // ============================================
        // 1. MOBILE MENU TOGGLE
        // ============================================
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        if (mobileMenuBtn && navMenu) {
            function toggleMenu() {
                navMenu.classList.toggle('active');
                
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    if (navMenu.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                        document.body.style.overflow = 'hidden';
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                        document.body.style.overflow = '';
                    }
                }
            }
            
            mobileMenuBtn.addEventListener('click', toggleMenu);
        }
        
        // ============================================
        // 2. CERRAR MENÚ AL HACER CLICK EN UN ENLACE
        // ============================================
        const navLinks = document.querySelectorAll('.nav-menu a');
        const menuBtn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('navMenu');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (menu && menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    document.body.style.overflow = '';
                    const icon = menuBtn?.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
        
        // ============================================
        // 3. CERRAR MENÚ AL HACER CLICK FUERA
        // ============================================
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (menu && menu.classList.contains('active')) {
                    if (!menu.contains(event.target) && !menuBtn?.contains(event.target)) {
                        menu.classList.remove('active');
                        document.body.style.overflow = '';
                        const icon = menuBtn?.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
        
        // ============================================
        // 4. HEADER SCROLL EFFECT
        // ============================================
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
        
        // ============================================
        // 5. DETECTAR PÁGINA ACTUAL
        // ============================================
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-menu a:not(.btn-order-mobile)');
        
        navItems.forEach(item => {
            const itemPage = item.getAttribute('href');
            if (itemPage === currentPage) {
                item.classList.add('active');
            } else if (currentPage === '' && itemPage === 'index.html') {
                item.classList.add('active');
            }
        });
        
        // ============================================
        // 6. ACTUALIZAR BADGE DEL CARRITO (Desktop y Móvil)
        // ============================================
        function updateCartBadge() {
            const cart = JSON.parse(localStorage.getItem('parcheCart') || '[]');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            // Actualizar badge desktop
            const desktopBadge = document.getElementById('cartBadge');
            if (desktopBadge) {
                if (totalItems > 0) {
                    desktopBadge.textContent = totalItems;
                    desktopBadge.style.display = 'inline-flex';
                } else {
                    desktopBadge.style.display = 'none';
                }
            }
            
            // Actualizar badge móvil
            const mobileBadge = document.getElementById('cartBadgeMobile');
            if (mobileBadge) {
                if (totalItems > 0) {
                    mobileBadge.textContent = totalItems;
                    mobileBadge.style.display = 'inline-flex';
                } else {
                    mobileBadge.style.display = 'none';
                }
            }
        }
        
        updateCartBadge();
        window.addEventListener('storage', updateCartBadge);
        window.addEventListener('pageshow', updateCartBadge);
        
        // ============================================
        // 7. PREVENIR CLICK EN ENLACES VACÍOS
        // ============================================
        document.querySelectorAll('a[href="#"], a[href=""]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
            });
        });
        
        console.log('🌐 PARCHE IBARNA | Global scripts initialized');
    });
    
})();