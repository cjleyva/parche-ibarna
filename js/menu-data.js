// ============================================
// PARCHE IBARNA - Datos del Menú
// Catálogo completo de bebidas únicas
// ============================================

const cocktailData = {
    'clasicos': [
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
            name: 'Cubata', 
            description: 'Un clásico con sello propio. Ron Viejo de Caldas se encuentra con la chispa de la Coca-Cola y un toque esencial de limón.', 
            price: 15000, 
            image: 'imagenes/cubata.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🥃'
        },
        { 
            name: 'Mojito', 
            description: 'El refrescante cóctel cubano a base de ron blanco, hierbabuena fresca, lima, azúcar y soda. Perfecto para cualquier ocasión.', 
            price: 17000, 
            image: 'imagenes/mojito.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍹'
        },
        { 
            name: 'Gin Tonic Clásico', 
            description: 'La elegancia de la ginebra Beefeater combinada con agua tónica de primera calidad, servida con enebro y cítricos.', 
            price: 20000, 
            image: 'imagenes/gin_tonic_clasico.jpeg', 
            alcohol: true, 
            badge: '🔥 Clásico',
            emoji: '🍸'
        },
        { 
            name: 'Gin Tonic Maracuyá', 
            description: 'Ginebra premium con tónica, maracuyá natural y un toque cítrico. Una explosión de frescura y sabor tropical.', 
            price: 22000, 
            image: 'imagenes/gin_tonic_maracuya.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '💙'
        },
        { 
            name: 'Margachelada Mango', 
            description: 'La fusión perfecta entre la margarita y la michelada. Tequila con limón, mango biche y coronita, escarchada con Tajín.', 
            price: 25000, 
            image: 'imagenes/margachelada_mango.jpeg', 
            alcohol: true, 
            badge: '🌶️ Especial',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Margachelada Fresa', 
            description: 'La fusión perfecta entre la margarita y la michelada. Tequila con limón, fresa natural y coronita, escarchada con Tajín.', 
            price: 25000, 
            image: 'imagenes/margachelada_fresa.jpeg', 
            alcohol: true, 
            badge: '🌶️ Especial',
            emoji: '🍺🌶️'
        }
    ],
    'exclusivos': [
        { 
            name: 'Eclipse', 
            description: 'Cóctel misterioso y elegante a base de ron blanco, jugo de mora y un toque de granadina. Un espectáculo de sabor y color.', 
            price: 16000, 
            image: 'imagenes/eclipse.jpeg', 
            badge: '✨ Exclusivo',
            alcohol: true,
            emoji: '🌙'
        },
        { 
            name: 'Blue Lagoon', 
            description: 'Un viaje sensorial al azul profundo. Preparado con Absolut Vodka y Curacao Azul, este cóctel destaca por su color vibrante y sabor equilibrado.', 
            price: 18000, 
            image: 'imagenes/blue_lagoon.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '💙'
        },
        { 
            name: 'La Mexicana', 
            description: 'Una explosión de carácter y frescura. Tequila con chamoy, limón y granadina. Coronada con escarchado de Tajín y chicle picante.', 
            price: 22000, 
            image: 'imagenes/mexicana.jpeg', 
            badge: '🌶️ Picante',
            alcohol: true,
            emoji: '🌶️'
        },
        { 
            name: 'Cherry Temptation', 
            description: 'Una tentación dulce y vibrante. Absolut Vodka con cerezas seleccionadas y sirope de fresa. Coronado con burbujas de Sprite.', 
            price: 16000, 
            image: 'imagenes/charry_templatation.jpeg', 
            badge: null,
            alcohol: true,
            emoji: '🍒'
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
            name: 'Tóxic', 
            description: 'Atrévete a probar nuestro Tóxic. Aguardiente Antioqueño Sin Azúcar con toque cítrico secreto, servido en copa escarchada con sal de limón. Refrescante, ligero y equilibrado.', 
            price: 12000, 
            image: 'imagenes/toxic.jpeg', 
            badge: '☣️ Atrevido',
            alcohol: true,
            emoji: '🧪'
        },
        { 
            name: 'Gold Tea Fresh', 
            description: 'El encuentro perfecto entre té y maracuyá. Licor de té con sirope de maracuyá y un toque cítrico de limón. Servido con bastante hielo y aromatizado con hierbabuena.', 
            price: 32000, 
            image: 'imagenes/gold_tea_fresh.jpeg', 
            badge: '✨ Premium',
            alcohol: true,
            emoji: '🍵'
        }
    ],
    'espanoles': [
        { 
            name: 'Kalimotxo', 
            description: 'El encuentro perfecto entre tradición y frescura. Vino tinto con Coca-Cola, refrescante y auténtico. La fusión perfecta entre España y el Valle, servido con abundante hielo.', 
            price: 12000, 
            image: 'imagenes/kalimotxo.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍷'
        },
        { 
            name: 'Tinto de Verano', 
            description: 'La bebida ideal para los días soleados. Vino tinto con Sprite, servido con abundante hielo. Refrescante, tradicional y perfecto para compartir.', 
            price: 12000, 
            image: 'imagenes/tinto_verano.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍷'
        },
        { 
            name: 'Sangría', 
            description: 'La clásica sangría española. Vino tinto con trozos de frutas frescas, un toque de brandy y soda. Refrescante y perfecta para compartir en grupo.', 
            price: { vaso: 20000, jarra: 50000 },
            image: 'imagenes/sangria.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍷🍊',
            hasSizes: true
        },
        { 
            name: 'Clara', 
            description: 'Refrescante combinación de cerveza con limón y gaseosa de naranja. Ligera, perfecta para cualquier momento del día.', 
            price: 10000, 
            image: 'imagenes/clara.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺🍋'
        },
        { 
            name: 'Carajillo', 
            description: 'El tradicional carajillo español. Café espresso con un toque de Baileys o ron. Perfecto para después de la sobremesa.', 
            price: 9000, 
            image: 'imagenes/carajillo.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '☕'
        }
    ],
    'granizados': [
        { 
            name: 'Granizado de Maracuyá', 
            description: 'Refrescante granizado de maracuyá con aguardiente amarillo, limón y pulpa natural de maracuyá. Un sabor tropical intenso.', 
            price: 14000, 
            image: 'imagenes/granizado_maracuya.jpeg', 
            badge: '🥭 Frutal',
            alcohol: true,
            emoji: '🥭'
        },
        { 
            name: 'Granizado de Mango Biche', 
            description: 'Granizado de mango biche con aguardiente, limón, chontaduro y escarchado de Tajín. Dulce, ácido y picante.', 
            price: 14000, 
            image: 'imagenes/granizado_mango_biche.jpeg', 
            alcohol: true, 
            badge: '🌶️ Picante',
            emoji: '🥭🌶️'
        },
        { 
            name: 'Granizado de Chicle', 
            description: 'Granizado con sabor a chicle, aguardiente, limón y chontaduro. Un sabor dulce que te transporta a la infancia.', 
            price: 14000, 
            image: 'imagenes/granizado_chiche.jpeg', 
            alcohol: true, 
            badge: '🍬 Dulce',
            emoji: '🍬'
        },
        { 
            name: 'Granizado de Bon Bon Bum', 
            description: 'Granizado con sabor a bon bon bum, aguardiente y limón. Dulce, refrescante y divertido.', 
            price: 14000, 
            image: 'imagenes/granizado_bon_bon_bun.jpeg', 
            alcohol: true, 
            badge: '🍬 Dulce',
            emoji: '🍬'
        },
        { 
            name: 'Granizado de Fresa', 
            description: 'Granizado de fresa natural con aguardiente y limón. Refrescante, frutal y lleno de sabor.', 
            price: 14000, 
            image: 'imagenes/granizado_fresa.jpeg', 
            alcohol: true, 
            badge: '🍓 Frutal',
            emoji: '🍓'
        }
    ],
    'granizados_cremosos': [
        { 
            name: 'Granizado Crema de Whisky', 
            description: 'Cremoso granizado de whisky con café y chocolate. Una experiencia única, suave y sofisticada.', 
            price: 15000, 
            image: 'imagenes/granizado_crema_whisky.jpeg', 
            badge: '🥃 Premium',
            alcohol: true,
            emoji: '🥃'
        },
        { 
            name: 'Granizado Piña Colada', 
            description: 'Cremoso granizado de piña colada con ron, piña natural y leche de coco. Un sabor tropical y cremoso.', 
            price: 15000, 
            image: 'imagenes/granizado_pinacolada.jpeg', 
            alcohol: true, 
            badge: '🍍 Tropical',
            emoji: '🍍🥥'
        }
    ],
    'cervezas': [
        { 
            name: 'Corona Extra', 
            description: 'La cerveza mexicana clara por excelencia. Ligera, refrescante y perfecta para cualquier momento. Servida con su tradicional limón.', 
            price: 7000, 
            image: 'imagenes/cerveza_corona.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        },
        { 
            name: 'Coronita', 
            description: 'La clásica cerveza mexicana en presentación pequeña. Sabor ligero y refrescante, ideal con un toque de limón.', 
            price: 4500, 
            image: 'imagenes/coronita_1.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        },
        { 
            name: 'Club Colombia Dorada', 
            description: 'Orgullo nacional. Una cerveza dorada con el balance perfecto entre malta y lúpulo. Suave, refrescante y con carácter.', 
            price: 5000, 
            image: 'imagenes/cerveza_club_colombia.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        },
        { 
            name: 'Budweiser', 
            description: 'La cerveza americana rey de las cervezas. Suave, refrescante y con un sabor inconfundible. Servida bien fría.', 
            price: 4000, 
            image: 'imagenes/cerveza_budweiser.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        },
        { 
            name: 'Budweiser Lata', 
            description: 'La clásica Budweiser en presentación lata. Práctica, refrescante y con el mismo sabor inconfundible.', 
            price: 4000, 
            image: 'imagenes/cerveza_budweiser_lata.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        },
        { 
            name: 'Poker', 
            description: 'La cerveza colombiana de tradición. Sabor intenso y carácter único. Ideal para los amantes de las cervezas con cuerpo.', 
            price: 4000, 
            image: 'imagenes/cerveza_poker.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        },
        { 
            name: 'Águila Light', 
            description: 'La cerveza ligera premium. Refrescante, baja en calorías y con todo el sabor de la tradición Águila.', 
            price: 5000, 
            image: 'imagenes/cerveza_aguila_light.jpeg', 
            alcohol: true, 
            badge: null,
            emoji: '🍺'
        }
    ],
    'micheladas': [
        { 
            name: 'Michelada de Mango', 
            description: 'Michelada audaz que fusiona la cerveza con sirope de mango biche y jugosas rebanadas de fruta natural. Escarchada con sal y limón.', 
            price: 16000, 
            image: 'imagenes/mango_biche.jpeg', 
            badge: '🥭 Especial',
            alcohol: true,
            emoji: '🥭🍺'
        },
        { 
            name: 'Michelada Maracuyá', 
            description: 'Michelada tropical con maracuyá natural, cerveza, limón y especias. Escarchada con sal y tajín. Refrescante y exótica.', 
            price: 16000, 
            image: 'imagenes/michelada_maracuya.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Blue Berry', 
            description: 'Michelada con blueberry, cerveza, limón y especias. Un sabor único, ácido y refrescante.', 
            price: 16000, 
            image: 'imagenes/michelada_blue_berry.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
        { 
            name: 'Michelada Tradicional', 
            description: 'La clásica michelada con cerveza, limón, salsas y especias. Escarchada con sal y lista para disfrutar.', 
            price: 16000, 
            image: 'imagenes/michelada_tradicional.jpeg', 
            alcohol: true, 
            badge: '🌶️ Michelada',
            emoji: '🍺🌶️'
        },
    ],
    'sodas': [
        { 
            name: 'Soda Italiana de Fresa - Berry Barna', 
            description: 'Efervescencia y sabor en movimiento. Fusión de trozos de fruta natural con sirope premium de fresa, toque cítrico de limón y soda cristalina.', 
            price: 15000, 
            image: 'imagenes/soda_italiana_fresa.jpeg', 
            alcohol: false, 
            badge: '✨ Nueva',
            emoji: '🍓'
        },
        { 
            name: 'Soda Italiana de Maracuyá - Passion Barna', 
            description: 'Sirope artesanal con pulpa de maracuyá natural, limón y soda premium burbujeante. Frescura que te acompaña a donde vayas.', 
            price: 15000, 
            image: 'imagenes/soda_italiana_maracuya.jpeg', 
            alcohol: false, 
            badge: '✨ Nueva',
            emoji: '🥭'
        },
        { 
            name: 'Soda Italiana de Lulo', 
            description: 'Sirope artesanal con pulpa de lulo natural, limón y soda premium burbujeante. Un sabor colombiano único y refrescante.', 
            price: 15000, 
            image: 'imagenes/soda_italina_lulo.jpeg', 
            alcohol: false, 
            badge: '✨ Nueva',
            emoji: '🍊'
        }
    ],
    'shots': [
        { 
            name: 'Aguardiente Amarillo', 
            description: 'El tradicional aguardiente antioqueño. Suave, con sabor a anís y perfecto para compartir en cualquier ocasión.', 
            price: 6000, 
            image: 'imagenes/aguardiente_amarrillo.jpeg', 
            alcohol: true, 
            badge: '🥃 Tradicional',
            emoji: '🥃'
        },
        { 
            name: 'Tequila Jose Cuervo', 
            description: 'Tequila reposado mexicano. Suave, con carácter y perfecto para chupitos o para preparar tus cócteles favoritos.', 
            price: 10000, 
            image: 'imagenes/tequila_jose_cuervo.jpeg', 
            alcohol: true, 
            badge: '🇲🇽 Premium',
            emoji: '🥃'
        },
        { 
            name: 'Baileys', 
            description: 'Crema irlandesa suave y dulce. Perfecta para disfrutar sola, en las rocas o en cócteles irresistibles.', 
            price: 9000, 
            image: 'imagenes/baileys.jpeg', 
            alcohol: true, 
            badge: '🍫 Cremoso',
            emoji: '🥃'
        },
        { 
            name: 'Ron Viejo de Caldas', 
            description: 'Ron añejo colombiano. Suave, con cuerpo y un sabor inconfundible que representa la tradición ronera de Caldas.', 
            price: 7000, 
            image: 'imagenes/ron_viejo_caldas.jpeg', 
            alcohol: true, 
            badge: '🇨🇴 Colombiano',
            emoji: '🥃'
        }
    ],
    'sin-alcohol': [
        { 
            name: 'Oreo Dream', 
            description: 'El capricho irresistible del Poblado Campestre. Granizado cremoso de galleta Oreo con crema chantilly y crujientes trozos de galleta. Una experiencia de lujo.', 
            price: 14000, 
            image: 'imagenes/oreo_dream.jpeg', 
            alcohol: false, 
            badge: '🍪 Especial',
            emoji: '🍪'
        }
    ]
};

function getCategoryName(category) {
    const names = {
        'clasicos': '🍸 Cocteles Clásicos',
        'exclusivos': '✨ Exclusivos de la Casa',
        'espanoles': '🇪🇸 Cocteles Españoles',
        'granizados': '🍧 Granizados',
        'granizados_cremosos': '🥤 Granizados Cremosos',
        'cervezas': '🍺 Cervezas',
        'micheladas': '🌶️ Micheladas',
        'sodas': '🥤 Sodas Parche Ibarna',
        'shots': '🥃 Shots',
        'sin-alcohol': '🌿 Sin Alcohol'
    };
    return names[category] || '🍸 Coctel';
}

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cocktailData, getCategoryName };
}