// ============================================
// PARCHE IBARNA - Menu Page JavaScript
// Categorías: Clásicos, Signature, Tropicales, 
// Cervezas, Tragos, Sodas, Sin Alcohol
// ============================================

(function() {
    'use strict';

    const cocktailData = {
        'clasicos': [
            { 
                name: 'Kalimotxo', 
                description: 'Vino tinto con Coca-Cola, refrescante y auténtico. La fusión perfecta entre España y el Valle.', 
                price: '$22.000', 
                image: 'imagenes/barcelona.jpeg',
                alcohol: true, 
                badge: null,
                emoji: '🍷'
            },
            { 
                name: 'Tinto de Verano', 
                description: 'Vino tinto con Sprite, servido con abundante hielo. Refrescante y tradicional.', 
                price: '$19.000', 
                image: 'imagenes/tinto_verano.jpeg',
                alcohol: true, 
                badge: null,
                emoji: '🍷'
            },
            { 
                name: 'Havana Sunrise', 
                description: 'Ron Havana Club 3 Años, jugo de naranja, toronja y granadina.', 
                price: '$20.000', 
                image: 'imagenes/alma_caribe.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍹'
            },
            { 
                name: 'Cubata', 
                description: 'Ron Viejo de Caldas, Coca-Cola y un toque esencial de limón.', 
                price: '$24.000', 
                image: 'imagenes/clasico_sello.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🥃'
            },
            { 
                name: 'Margarita Frozen', 
                description: 'Tequila Jose Cuervo, granizado de fresa y gomitas enchiladas.', 
                price: '$18.000', 
                image: 'imagenes/margarita_froze.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍹'
            },
            { 
                name: 'Coronarita de Fresa', 
                description: 'Margarita Frozen de fresa con una Coronita al revés.', 
                price: '$21.000', 
                image: 'imagenes/coronarita.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍺'
            }
        ],
        'signature': [
            { 
                name: 'Ibarna Sour', 
                description: 'Ron añejo, maracuyá, albahaca, espuma de clara y bitter.', 
                price: '$28.000', 
                image: 'imagenes/ibarna_sour.jpeg', 
                badge: '🔥 #1', 
                alcohol: true,
                emoji: '🍹'
            },
            { 
                name: 'Neon Wave', 
                description: 'Vodka, licor de melocotón, lima y butterfly pea flower. Cambia de color.', 
                price: '$32.000', 
                image: 'imagenes/neon_wave.jpeg', 
                badge: null, 
                alcohol: true,
                emoji: '🌊'
            },
            { 
                name: 'Brutal Purple', 
                description: 'Gin violeta, crème de cassis, uva negra y espuma de lavanda.', 
                price: '$30.000', 
                image: 'imagenes/brutal_purple.jpeg', 
                badge: null, 
                alcohol: true,
                emoji: '⚡'
            },
            { 
                name: 'Smoky Old', 
                description: 'Mezcal, whisky, vermut ahumado, cereza.', 
                price: '$34.000', 
                image: 'imagenes/smoky_old.jpeg', 
                badge: null, 
                alcohol: true,
                emoji: '🔥'
            },
            { 
                name: 'Electric Rose', 
                description: 'Gin rosado, pomelo, agua de rosas, espuma.', 
                price: '$29.000', 
                image: 'imagenes/electric_rose.jpeg', 
                badge: null, 
                alcohol: true,
                emoji: '🌹'
            }
        ],
        'tropicales': [
            { 
                name: 'Mango Fuego', 
                description: 'Mezcal, mango, chile habanero, jengibre.', 
                price: '$26.000', 
                image: 'imagenes/mango_fuego.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🥭'
            },
            { 
                name: 'Coco Loco', 
                description: 'Ron de coco, piña colada artesanal, lima.', 
                price: '$24.000', 
                image: 'imagenes/coco_loco.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🌴'
            },
            { 
                name: 'Lulo Storm', 
                description: 'Aguardiente, lulo colombiano, naranja, panela.', 
                price: '$23.000', 
                image: 'imagenes/lulo_storm.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🌪️'
            },
            { 
                name: 'Maracuyá Spritz', 
                description: 'Vodka, maracuyá, prosecco, hierbabuena.', 
                price: '$27.000', 
                image: 'imagenes/maracuya_spritz.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍊'
            },
            { 
                name: 'Piña Colada', 
                description: 'Ron, crema de coco, piña, hielo.', 
                price: '$22.000', 
                image: 'imagenes/piña_colada.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍍'
            }
        ],
        'cervezas': [
            { 
                name: 'Corona Extra', 
                description: 'Cerveza mexicana clara, ligera y refrescante. Servida con limón.', 
                price: '$12.000', 
                image: 'imagenes/corona.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍺'
            },
            { 
                name: 'Club Colombia Dorada', 
                description: 'Cerveza dorada, balance perfecto entre malta y lúpulo.', 
                price: '$11.000', 
                image: 'imagenes/club_colombia.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍺'
            },
            { 
                name: 'Heineken', 
                description: 'Cerveza premium de origen holandés, sabor suave y distintivo.', 
                price: '$12.000', 
                image: 'imagenes/heineken.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍺'
            },
            { 
                name: 'Michelada', 
                description: 'Cerveza preparada con limón, salsas y especias. Perfecta para cualquier hora.', 
                price: '$15.000', 
                image: 'imagenes/michelada.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍺🌶️'
            }
        ],
        'tragos': [
            { 
                name: 'Ron Viejo de Caldas', 
                description: 'Ron añejo colombiano. Perfecto solo o en las mejores mezclas.', 
                price: '$18.000', 
                image: 'imagenes/ron_viejo.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🥃'
            },
            { 
                name: 'Havana Club 3 Años', 
                description: 'Ron cubano suave, ideal para cócteles.', 
                price: '$20.000', 
                image: 'imagenes/havana_club.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🥃'
            },
            { 
                name: 'Aguardiente Antioqueño', 
                description: 'El trago tradicional colombiano, con anís y carácter.', 
                price: '$15.000', 
                image: 'imagenes/aguardiente.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍾'
            },
            { 
                name: 'Tequila Jose Cuervo', 
                description: 'Tequila reposado mexicano, perfecto para chupitos o margaritas.', 
                price: '$22.000', 
                image: 'imagenes/tequila.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🥃'
            },
            { 
                name: 'Ginebra Beefeater', 
                description: 'Ginebra inglesa seca, ideal para Gin Tonics premium.', 
                price: '$25.000', 
                image: 'imagenes/beefeater.jpeg', 
                alcohol: true, 
                badge: null,
                emoji: '🍸'
            }
        ],
        'sodas': [
            { 
                name: 'Coca-Cola', 
                description: 'La clásica bebida de burbujas, servida con hielo y limón.', 
                price: '$6.000', 
                image: 'imagenes/cocacola.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🥤'
            },
            { 
                name: 'Sprite', 
                description: 'Refrescante bebida de limón, libre de cafeína.', 
                price: '$6.000', 
                image: 'imagenes/sprite.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🥤'
            },
            { 
                name: 'Jugo de Naranja', 
                description: 'Jugo natural de naranja recién exprimido.', 
                price: '$8.000', 
                image: 'imagenes/jugo_naranja.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🍊'
            },
            { 
                name: 'Agua con Gas', 
                description: 'Agua mineral con gas, servida con limón.', 
                price: '$5.000', 
                image: 'imagenes/agua_gas.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '💧'
            },
            { 
                name: 'Limonada Natural', 
                description: 'Limonada fresca hecha con limones naturales y azúcar.', 
                price: '$7.000', 
                image: 'imagenes/limonada.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🍋'
            }
        ],
        'sin-alcohol': [
            { 
                name: 'Virgin Mojito', 
                description: 'Menta fresca, lima, azúcar de caña, soda.', 
                price: '$14.000', 
                image: 'imagenes/virgin_mojito.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🌿'
            },
            { 
                name: 'Ibarna Zero', 
                description: 'Maracuyá, albahaca, jengibre, soda.', 
                price: '$15.000', 
                image: 'imagenes/ibarna_sour.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🍹'
            },
            { 
                name: 'Berry Smash', 
                description: 'Frutos rojos, limón, tónica, lavanda.', 
                price: '$15.000', 
                image: 'imagenes/berry_smash.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🫐'
            },
            { 
                name: 'Floral Mist', 
                description: 'Agua de rosas, menta, pepino, soda.', 
                price: '$14.000', 
                image: 'imagenes/floral_mist.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🌸'
            },
            { 
                name: 'Coconut Dream', 
                description: 'Leche de coco, piña, canela, espuma.', 
                price: '$16.000', 
                image: 'imagenes/coco_loco.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🥥'
            },
            { 
                name: 'Oreo Dream', 
                description: 'Granizado cremoso de galleta Oreo, decorado con crema chantilly y crujientes trozos de galleta.', 
                price: '$18.000', 
                image: 'imagenes/oreo_dream.jpeg', 
                alcohol: false, 
                badge: '✨ Nuevo',
                emoji: '🍪'
            },
            { 
                name: 'Passion Cooler', 
                description: 'Maracuyá, limón, miel, soda.', 
                price: '$14.000', 
                image: 'imagenes/passion_cooler.jpeg', 
                alcohol: false, 
                badge: null,
                emoji: '🍊'
            },
            { 
                name: 'Ginger Fizz', 
                description: 'Jengibre, limón, miel, agua con gas.', 
                price: '$13.000', 
                image: 'imagenes/ginger_fizz.jpeg', 
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
            'clasicos': '🍸 Clásicos',
            'signature': '✨ Signature',
            'tropicales': '🌴 Tropicales',
            'cervezas': '🍺 Cervezas',
            'tragos': '🥃 Tragos',
            'sodas': '🥤 Sodas',
            'sin-alcohol': '🌿 Sin Alcohol'
        };
        return names[category] || '🍸 Coctel';
    }

    // Función para obtener estilos de fondo para la imagen
    function getImageBackgroundStyle(imageUrl) {
        if (!imageUrl) return '';
        return `style="background-image: linear-gradient(135deg, rgba(10,21,37,0.8), rgba(16,32,53,0.9)), url('${imageUrl}'); background-size: cover; background-position: center; background-blend-mode: overlay;"`;
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
            // Determinar clase adicional para el tipo de bebida
            let drinkTypeClass = '';
            if (category === 'cervezas') drinkTypeClass = 'beer-card';
            if (category === 'tragos') drinkTypeClass = 'spirit-card';
            if (category === 'sodas') drinkTypeClass = 'soda-card';
            
            return `
                <div class="menu-card reveal ${drinkTypeClass}">
                    <div class="menu-image" ${item.image ? `style="background: linear-gradient(135deg, rgba(10,21,37,0.7), rgba(16,32,53,0.9)), url('${item.image}'); background-size: cover; background-position: center;"` : ''}>
                        ${item.image 
                            ? `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg, #0a1525, #102035)'; this.style.display='none'; this.parentElement.innerHTML='<div class=\'menu-placeholder\'>${item.emoji || '🍸'}</div>'">`
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
            `;
        }).join('');
        
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

    console.log('✨ PARCHE IBARNA | Menu page with all categories initialized');
})();