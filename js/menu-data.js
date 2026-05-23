// ============================================
// PARCHE IBARNA - Datos del Menú
// Catálogo completo de bebidas únicas
// Organizado por categorías correctas
// ============================================

const cocktailData = {
    'clasicos': [
        { 
            name: 'Kalimotxo', 
            description: 'El encuentro perfecto entre tradición y frescura. Vino tinto con Coca-Cola, refrescante y auténtico. La fusión perfecta entre España y el Valle, servido con abundante hielo para garantizar una frescura total.', 
            price: 12000, 
            image: 'imagenes/barcelona.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍷'
        },
        { 
            name: 'Tinto de Verano', 
            description: 'La bebida ideal para los días soleados. Vino tinto con Sprite, servido con abundante hielo. Refrescante, tradicional y perfecto para compartir en el Poblado Campestre.', 
            price: 12000, 
            image: 'imagenes/tinto_verano.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍷'
        },
        { 
            name: 'Cubata', 
            description: 'Un clásico con sello propio llega al Poblado Campestre. Nuestra Cubata rinde homenaje a la tradición: la madurez y el sabor inigualable del Ron Viejo de Caldas se encuentra con la chispa de la Coca-Cola y un toque esencial de limón.', 
            price: 15000, 
            image: 'imagenes/cubata.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🥃'
        },
        { 
            name: 'Havana Sunrise', 
            description: 'El alma del Caribe se encuentra con el Poblado Campestre. Disfruta de nuestro Havana Sunrise, una mezcla vibrante donde la fuerza del Ron Havana Club 3 Años se funde con la frescura natural del jugo de naranja y el toque cítrico de la toronja.', 
            price: 16000, 
            image: 'imagenes/havana_sunrise.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍹'
        },
        { 
            name: 'Margarita Clásica', 
            description: 'La elegancia del tequila en su máxima expresión. Mezcla maestra que equilibra la fuerza del Tequila Jose Cuervo Especial con la acidez exacta del limón fresco. Servida en copa elegantemente escarchada con sal.', 
            price: 16000, 
            image: 'imagenes/margarita_clasica.jpeg', 
            alcohol: true, 
            badge: '🔥 Clásico',
            emoji: '🍸'
        },
        { 
            name: 'Blue Lagoon', 
            description: 'Un viaje sensorial al azul profundo. Disfruta de un ícono de la coctelería mundial en Parche i Barna. Preparado con Absolut Vodka y Curacao Azul, este cóctel destaca por su color vibrante y sabor equilibrado.', 
            price: 18000, 
            image: 'imagenes/blue_lagoon.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '💙'
        },
        { 
            name: 'Sangría', 
            description: 'La clásica sangría española. Vino tinto con trozos de frutas frescas, un toque de brandy y soda. Refrescante y perfecta para compartir.', 
            price: {
                vaso: 20000,
                jarra: 50000
            },
            image: 'imagenes/sangria.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍷🍊',
            hasSizes: true
        }
    ],
    'exclusivos': [
        { 
            name: 'Gold Tea Fresh', 
            description: 'El encuentro perfecto entre té y maracuyá. Nuestro Gold Tea Fresh combina la elegancia de un licor de té con el dulzor vibrante del sirope de maracuyá y un toque cítrico de limón. Servido con bastante hielo y aromatizado con hierbabuena.', 
            price: 32000, 
            image: 'imagenes/golde_tea.jpeg', 
            badge: '✨ Exclusivos',
            alcohol: true,
            emoji: '🍵'
        },
        { 
            name: 'Piña Cream Barna', 
            description: 'La textura de la frescura. Más que un granizado, es una experiencia ultra cremosa que combina la frescura de la piña natural con la suavidad de la leche en polvo y ron añejo premium. Decorado con trozos de piña real.', 
            price: 15000, 
            image: 'imagenes/pina_cream.jpeg', 
            badge: '✨ Exclusivos',
            alcohol: true,
            emoji: '🍍'
        },
        { 
            name: 'Blue Zombie', 
            description: 'Una explosión de color y sabor. Un granizado electrizante que combina la fuerza del ron con el toque del chicle y la frescura del limón. Viene con perlas explosivas sabor chicle y gomitas ácidas.', 
            price: 14000, 
            image: 'imagenes/blue_zombie.jpeg', 
            badge: '💀 Especial',
            alcohol: true,
            emoji: '💙'
        },
        { 
            name: 'Terciopelo Hershey\'s', 
            description: 'El postre perfecto convertido en cóctel. Crema de Baileys Premium con chocolate Hershey\'s fundido y esencia de vainilla. Cremoso, dulce y sofisticado.', 
            price: 20000, 
            image: 'imagenes/terciopelo_hersheys.jpeg', 
            badge: '🍫 Postre',
            alcohol: true,
            emoji: '🍫'
        },
        { 
            name: 'La Mexicana', 
            description: 'Una explosión de carácter y frescura. Tequila con chamoy, limón y granadina. Coronada con escarchado de Tajín y chicle picante, es la mezcla perfecta entre elegancia y tradición picante.', 
            price: 22000, 
            image: 'imagenes/mexicana.jpeg', 
            badge: '🌶️ Picante',
            alcohol: true,
            emoji: '🌶️'
        },
        { 
            name: 'Tóxic', 
            description: 'Atrévete a probar nuestro Tóxic. Aguardiente Antioqueño Sin Azúcar con toque cítrico secreto, servido en copa escarchada con sal de limón. Refrescante, ligero y equilibrado.', 
            price: 12000, 
            image: 'imagenes/toxic.jpeg', 
            badge: '☣️ Atrevido',
            alcohol: true,
            emoji: '🧪'
        },
        { 
            name: 'Cherry Temptation', 
            description: 'Una tentación dulce y vibrante. Absolut Vodka con cerezas seleccionadas y sirope de fresa. Coronado con burbujas de Sprite. Fresco y visualmente encantador.', 
            price: 16000, 
            image: 'imagenes/charry_templatation.jpeg', 
            badge: null,
            alcohol: true,
            emoji: '🍒'
        },
        { 
            name: 'Tropical & Premium', 
            description: 'El clásico Aguardiente Amarillo como nunca lo habías imaginado. Granizado artesanal de maracuyá con perlas explosivas, gomas ácidas y pulpa fresca. Refrescante, atrevido, único.', 
            price: 14000, 
            image: 'imagenes/tropical_premiu.jpeg', 
            badge: '✨ Premium',
            alcohol: true,
            emoji: '🥭'
        },
        { 
            name: 'Havana Spirit', 
            description: 'El equilibrio perfecto entre lo cítrico y lo burbujeante. Hierbabuena macerada al instante, limón fresco y Havana Club 3 Años con soda cristalina.', 
            price: 26000, 
            image: 'imagenes/havana_spirit.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍃'
        },
        { 
            name: 'Margarita de Fresa', 
            description: 'Fresas naturales, tequila, limón y un toque de naranja. La clásica margarita frozen con un sabor frutal y refrescante. Perfecta para los amantes de lo dulce.', 
            price: 14000, 
            image: 'imagenes/margarita_froze.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍓🍸'
        },
        { 
            name: 'Alma Caribe', 
            description: 'Ron Havana Club, piña, coco y lima. Un cóctel tropical que captura la esencia del Caribe. Cremoso, refrescante y lleno de sabor.', 
            price: 16000, 
            image: 'imagenes/alma_caribe.jpeg', 
            alcohol: true, 
            badge: '🌴 Nueva',
            emoji: '🌴🍹'
        }
    ],
    'cervezas': [
    { 
        name: 'Corona Extra', 
        description: 'La cerveza mexicana clara por excelencia. Ligera, refrescante y perfecta para cualquier momento. Servida con su tradicional limón.', 
        price: "", 
        image: 'imagenes/cerveza_corona.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'Budweiser', 
        description: 'La cerveza americana rey de las cervezas. Suave, refrescante y con un sabor inconfundible. Servida bien fría.', 
        price: "", 
        image: 'imagenes/cerveza_budweiser.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'Budweiser Lata', 
        description: 'La clásica Budweiser en presentación lata. Práctica, refrescante y con el mismo sabor inconfundible.', 
        price: "", 
        image: 'imagenes/cerveza_budweiser_lata.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'Poker', 
        description: 'La cerveza colombiana de tradición. Sabor intenso y carácter único. Ideal para los amantes de las cervezas con cuerpo.', 
        price: "", 
        image: 'imagenes/cerveza_poker.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'Águila Light', 
        description: 'La cerveza ligera premium. Refrescante, baja en calorías y con todo el sabor de la tradición Águila.', 
        price: "", 
        image: 'imagenes/cerveza_aguila_light.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'BBC Negra', 
        description: 'Cerveza artesanal negra. Cuerpo completo, notas a café y chocolate. Una experiencia única para los paladares exigentes.', 
        price: "", 
        image: 'imagenes/cerveza_bbc_negra.jpeg', 
        alcohol: true, 
        badge: '🍺 Premium',
        emoji: '🍺'
    },
    { 
        name: 'Club Colombia Dorada', 
        description: 'Orgullo nacional. Una cerveza dorada con el balance perfecto entre malta y lúpulo. Suave, refrescante y con carácter.', 
        price: "", 
        image: 'imagenes/cerveza_club_colombia.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'Heineken', 
        description: 'La cerveza premium de origen holandés. Sabor suave, distintivo y reconocido mundialmente.', 
        price: "", 
        image: 'imagenes/heineken.jpeg', 
        alcohol: true, 
        badge: null,
        emoji: '🍺'
    },
    { 
        name: 'Mango Viche Supreme', 
        description: 'El placer de lo cítrico. Una michelada audaz que fusiona la cerveza con sirope de mango biche y jugosas rebanadas de fruta natural. Escarchada con sal y limón.', 
        price: "", 
        image: 'imagenes/mango_biche.jpeg', 
        badge: '🥭 Especial',
        alcohol: true,
        emoji: '🥭🍺'
    }
],
    'micheladas': [
        { 
            name: 'Michelada Águila', 
            description: 'La clásica michelada con cerveza Águila. Limón, salsas, especias y el sabor refrescante de Águila.', 
            price: 16000, 
            image: 'imagenes/aguila_michelada_3.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Águila Light', 
            description: 'La versión ligera de nuestra michelada. Con cerveza Águila Light, perfecta para cuidar la línea sin perder el sabor.', 
            price: 16000, 
            image: 'imagenes/aguila_light_michelada.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Águila 2', 
            description: 'Nuestra michelada especial. Cerveza Águila con nuestra receta secreta de salsas y especias.', 
            price: 16000, 
            image: 'imagenes/aguila_michelada_2.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Águila 1', 
            description: 'La michelada clásica. Limón, sal, salsas y la mejor cerveza Águila bien fría.', 
            price: 12000, 
            image: 'imagenes/aguila_michelada_1.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Corona', 
            description: 'La michelada con la famosa Corona Extra. Limón, salsas, especias y el sabor refrescante de México.', 
            price: 22000, 
            image: 'imagenes/corona_michelada_1.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Corona 2', 
            description: 'Nuestra versión premium de michelada con Corona Extra. Ingredientes seleccionados para una experiencia única.', 
            price: 22000, 
            image: 'imagenes/corona_michelada_2.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        }
    ],
    'sodas': [
        { 
            name: 'Soda Italiana de Fresa - Berry Barna', 
            description: 'Efervescencia y sabor en movimiento. Fusión de trozos de fruta natural con sirope premium de fresa, toque cítrico de limón y soda cristalina.', 
            price: 12000, 
            image: 'imagenes/soda_italiana_fresa.jpeg', 
            alcohol: false, 
            badge: '✨ Nueva',
            emoji: '🍓'
        },
        { 
            name: 'Soda Italiana de Maracuyá - Passion Barna', 
            description: 'La frescura que te acompaña a donde vayas. Sirope artesanal con pulpa de maracuyá natural, limón y soda premium burbujeante.', 
            price: 12000, 
            image: 'imagenes/soda_italiana_maracuya.jpeg', 
            alcohol: false, 
            badge: '✨ Nueva',
            emoji: '🥭'
        }
    ],
    'sin-alcohol': [
        { 
            name: 'Oreo Dream', 
            description: 'El capricho irresistible del Poblado Campestre. Un granizado cremoso que eleva el sabor de la galleta más famosa del mundo a una experiencia de lujo. Decorado con crema chantilly y crujientes trozos de galleta Oreo.', 
            price: 18000, 
            image: 'imagenes/oreo_dream.jpeg', 
            alcohol: false, 
            badge: '🍪 Especial',
            emoji: '🍪'
        }
    ]
};

function getCategoryName(category) {
    const names = {
        'clasicos': '🍸 Clásicos',
        'exclusivos': '✨ Exclusivos',
        'cervezas': '🍺 Cervezas',
        'micheladas': '🌶️ Micheladas',
        'sodas': '🥤 Sodas',
        'sin-alcohol': '🌿 Sin Alcohol'
    };
    return names[category] || '🍸 Coctel';
}

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cocktailData, getCategoryName };
}