// ============================================
// PARCHE IBARNA - Menu Page JavaScript
// Cocktail Data with Compact Cards
// ============================================

(function() {
    'use strict';

    // Complete Cocktail Data with images for each drink
    const cocktailData = {
        clasicos: [
            { 
                name: 'Negroni', 
                description: 'Gin, Campari y Vermut Rosso. Garnish de naranja.', 
                price: '$22.000', 
                image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🍊'
            },
            { 
                name: 'Mojito', 
                description: 'Ron blanco, menta fresca, lima, azúcar y soda.', 
                price: '$19.000', 
                image: 'https://images.pexels.com/photos/1282423/pexels-photo-1282423.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🌿'
            },
            { 
                name: 'Margarita', 
                description: 'Tequila reposado, triple sec y jugo de limón. Sal rosa.', 
                price: '$20.000', 
                image: 'https://images.pexels.com/photos/3679150/pexels-photo-3679150.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🍋'
            },
            { 
                name: 'Old Fashioned', 
                description: 'Whisky, azúcar, angostura y cáscara de naranja.', 
                price: '$24.000', 
                image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🥃'
            },
            { 
                name: 'Daiquiri', 
                description: 'Ron blanco, lima, azúcar de caña.', 
                price: '$18.000', 
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🍹'
            },
            { 
                name: 'Gin Tonic', 
                description: 'Ginebra artesanal, agua tónica premium, enebro.', 
                price: '$21.000', 
                image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🍸'
            }
        ],
        signature: [
            { 
                name: 'Ibarna Sour', 
                description: 'Ron añejo, maracuyá, albahaca, espuma de clara y bitter.', 
                price: '$28.000', 
                image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600', 
                badge: '🔥 #1', 
                alcohol: true,
                emoji: '🍹'
            },
            { 
                name: 'Neon Wave', 
                description: 'Vodka, licor de melocotón, lima y butterfly pea flower. Cambia de color.', 
                price: '$32.000', 
                image: 'https://images.pexels.com/photos/1282423/pexels-photo-1282423.jpeg?auto=compress&cs=tinysrgb&w=600', 
                badge: null, 
                alcohol: true,
                emoji: '🌊'
            },
            { 
                name: 'Brutal Purple', 
                description: 'Gin violeta, crème de cassis, uva negra y espuma de lavanda.', 
                price: '$30.000', 
                image: 'https://images.pexels.com/photos/3679150/pexels-photo-3679150.jpeg?auto=compress&cs=tinysrgb&w=600', 
                badge: null, 
                alcohol: true,
                emoji: '⚡'
            },
            { 
                name: 'Smoky Old', 
                description: 'Mezcal, whisky, vermut ahumado, cereza.', 
                price: '$34.000', 
                image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600', 
                badge: null, 
                alcohol: true,
                emoji: '🔥'
            },
            { 
                name: 'Electric Rose', 
                description: 'Gin rosado, pomelo, agua de rosas, espuma.', 
                price: '$29.000', 
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', 
                badge: null, 
                alcohol: true,
                emoji: '🌹'
            }
        ],
        tropicales: [
            { 
                name: 'Mango Fuego', 
                description: 'Mezcal, mango, chile habanero, jengibre.', 
                price: '$26.000', 
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🥭'
            },
            { 
                name: 'Coco Loco', 
                description: 'Ron de coco, piña colada artesanal, lima.', 
                price: '$24.000', 
                image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🌴'
            },
            { 
                name: 'Lulo Storm', 
                description: 'Aguardiente, lulo colombiano, naranja, panela.', 
                price: '$23.000', 
                image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🌪️'
            },
            { 
                name: 'Maracuyá Spritz', 
                description: 'Vodka, maracuyá, prosecco, hierbabuena.', 
                price: '$27.000', 
                image: 'https://images.pexels.com/photos/3679150/pexels-photo-3679150.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🍊'
            },
            { 
                name: 'Piña Colada', 
                description: 'Ron, crema de coco, piña, hielo.', 
                price: '$22.000', 
                image: 'https://images.pexels.com/photos/1282423/pexels-photo-1282423.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: true, 
                badge: null,
                emoji: '🍍'
            }
        ],
        'sin-alcohol': [
            { 
                name: 'Virgin Mojito', 
                description: 'Menta fresca, lima, azúcar de caña, soda.', 
                price: '$14.000', 
                image: 'https://images.pexels.com/photos/3679459/pexels-photo-3679459.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🌿'
            },
            { 
                name: 'Ibarna Zero', 
                description: 'Maracuyá, albahaca, jengibre, soda.', 
                price: '$15.000', 
                image: 'https://images.pexels.com/photos/3679461/pexels-photo-3679461.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🍹'
            },
            { 
                name: 'Berry Smash', 
                description: 'Frutos rojos, limón, tónica, lavanda.', 
                price: '$15.000', 
                image: 'https://images.pexels.com/photos/3679460/pexels-photo-3679460.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🫐'
            },
            { 
                name: 'Floral Mist', 
                description: 'Agua de rosas, menta, pepino, soda.', 
                price: '$14.000', 
                image: 'https://images.pexels.com/photos/3679458/pexels-photo-3679458.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🌸'
            },
            { 
                name: 'Coconut Dream', 
                description: 'Leche de coco, piña, canela, espuma.', 
                price: '$16.000', 
                image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🥥'
            },
            { 
                name: 'Passion Cooler', 
                description: 'Maracuyá, limón, miel, soda.', 
                price: '$14.000', 
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🍊'
            },
            { 
                name: 'Ginger Fizz', 
                description: 'Jengibre, limón, miel, agua con gas.', 
                price: '$13.000', 
                image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600', 
                alcohol: false, 
                badge: null,
                emoji: '🫚'
            }
        ]
    };

    const menuContainer = document.getElementById('menu-container');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function getCategoryName(category) {
        const names = {
            'clasicos': 'Clásico',
            'signature': 'Signature',
            'tropicales': 'Tropical',
            'sin-alcohol': 'Sin Alcohol'
        };
        return names[category] || 'Coctel';
    }

    function renderMenu(category) {
        if (!menuContainer) return;
        
        const items = cocktailData[category] || cocktailData.clasicos;
        
        if (!items || items.length === 0) {
            menuContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-cocktail"></i>
                    <p>Próximamente más cocteles</p>
                </div>
            `;
            return;
        }
        
        menuContainer.innerHTML = items.map(item => `
            <div class="menu-card reveal">
                <div class="menu-image">
                    ${item.image 
                        ? `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(item.emoji)}'">`
                        : `<div class="menu-placeholder">${item.emoji || '🍸'}</div>`
                    }
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
                        <span class="menu-price">${item.price}</span>
                        <a href="contacto.html" class="menu-order">Pedir</a>
                    </div>
                </div>
            </div>
        `).join('');
        
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

    // Tab click handlers
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
            
            // Smooth scroll to menu on mobile
            const menuSection = document.querySelector('.menu-section');
            if (menuSection && window.innerWidth < 768) {
                setTimeout(() => {
                    menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });

    // Initial render
    renderMenu('clasicos');

    console.log('✨ PARCHE IBARNA | Menu page with compact cards initialized');
})();