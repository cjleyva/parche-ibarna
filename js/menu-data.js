// ============================================
// PARCHE IBARNA - Datos del Menú
// ============================================

const cocktailData = {
    'clasicos': [
        { name: 'Kalimotxo', description: 'Vino tinto con Coca-Cola, refrescante y auténtico.', price: 22000, image: 'imagenes/barcelona.jpeg', alcohol: true, badge: null },
        { name: 'Tinto de Verano', description: 'Vino tinto con Sprite, servido con abundante hielo.', price: 19000, image: 'imagenes/tinto_verano.jpeg', alcohol: true, badge: null },
        { name: 'Havana Sunrise', description: 'Ron Havana Club 3 Años, jugo de naranja, toronja y granadina.', price: 20000, image: 'imagenes/alma_caribe.jpeg', alcohol: true, badge: null },
        { name: 'Cubata', description: 'Ron Viejo de Caldas, Coca-Cola y un toque de limón.', price: 24000, image: 'imagenes/clasico_sello.jpeg', alcohol: true, badge: null },
        { name: 'Margarita Frozen', description: 'Tequila Jose Cuervo, granizado de fresa y gomitas enchiladas.', price: 18000, image: 'imagenes/margarita_froze.jpeg', alcohol: true, badge: null },
        { name: 'Coronarita de Fresa', description: 'Margarita Frozen de fresa con una Coronita al revés.', price: 21000, image: 'imagenes/coronarita.jpeg', alcohol: true, badge: null }
    ],
    'signature': [
        { name: 'Ibarna Sour', description: 'Ron añejo, maracuyá, albahaca, espuma de clara y bitter.', price: 28000, image: 'imagenes/ibarna_sour.jpeg', badge: '🔥 #1', alcohol: true },
        { name: 'Neon Wave', description: 'Vodka, licor de melocotón, lima y butterfly pea flower.', price: 32000, image: 'imagenes/neon_wave.jpeg', badge: null, alcohol: true },
        { name: 'Brutal Purple', description: 'Gin violeta, crème de cassis, uva negra y espuma de lavanda.', price: 30000, image: 'imagenes/brutal_purple.jpeg', badge: null, alcohol: true },
        { name: 'Smoky Old', description: 'Mezcal, whisky, vermut ahumado, cereza.', price: 34000, image: 'imagenes/smoky_old.jpeg', badge: null, alcohol: true },
        { name: 'Electric Rose', description: 'Gin rosado, pomelo, agua de rosas, espuma.', price: 29000, image: 'imagenes/electric_rose.jpeg', badge: null, alcohol: true }
    ],
    'tropicales': [
        { name: 'Mango Fuego', description: 'Mezcal, mango, chile habanero, jengibre.', price: 26000, image: 'imagenes/mango_fuego.jpeg', alcohol: true, badge: null },
        { name: 'Coco Loco', description: 'Ron de coco, piña colada artesanal, lima.', price: 24000, image: 'imagenes/coco_loco.jpeg', alcohol: true, badge: null },
        { name: 'Lulo Storm', description: 'Aguardiente, lulo colombiano, naranja, panela.', price: 23000, image: 'imagenes/lulo_storm.jpeg', alcohol: true, badge: null },
        { name: 'Maracuyá Spritz', description: 'Vodka, maracuyá, prosecco, hierbabuena.', price: 27000, image: 'imagenes/maracuya_spritz.jpeg', alcohol: true, badge: null },
        { name: 'Piña Colada', description: 'Ron, crema de coco, piña, hielo.', price: 22000, image: 'imagenes/piña_colada.jpeg', alcohol: true, badge: null }
    ],
    'cervezas': [
        { name: 'Corona Extra', description: 'Cerveza mexicana clara, ligera y refrescante.', price: 12000, image: 'imagenes/corona.jpeg', alcohol: true, badge: null },
        { name: 'Club Colombia Dorada', description: 'Cerveza dorada, balance perfecto entre malta y lúpulo.', price: 11000, image: 'imagenes/club_colombia.jpeg', alcohol: true, badge: null },
        { name: 'Heineken', description: 'Cerveza premium de origen holandés.', price: 12000, image: 'imagenes/heineken.jpeg', alcohol: true, badge: null },
        { name: 'Michelada', description: 'Cerveza preparada con limón, salsas y especias.', price: 15000, image: 'imagenes/michelada.jpeg', alcohol: true, badge: null }
    ],
    'tragos': [
        { name: 'Ron Viejo de Caldas', description: 'Ron añejo colombiano.', price: 18000, image: 'imagenes/ron_viejo.jpeg', alcohol: true, badge: null },
        { name: 'Havana Club 3 Años', description: 'Ron cubano suave, ideal para cócteles.', price: 20000, image: 'imagenes/havana_club.jpeg', alcohol: true, badge: null },
        { name: 'Aguardiente Antioqueño', description: 'El trago tradicional colombiano.', price: 15000, image: 'imagenes/aguardiente.jpeg', alcohol: true, badge: null },
        { name: 'Tequila Jose Cuervo', description: 'Tequila reposado mexicano.', price: 22000, image: 'imagenes/tequila.jpeg', alcohol: true, badge: null },
        { name: 'Ginebra Beefeater', description: 'Ginebra inglesa seca.', price: 25000, image: 'imagenes/beefeater.jpeg', alcohol: true, badge: null }
    ],
    'sodas': [
        { name: 'Coca-Cola', description: 'La clásica bebida de burbujas.', price: 6000, image: 'imagenes/cocacola.jpeg', alcohol: false, badge: null },
        { name: 'Sprite', description: 'Refrescante bebida de limón.', price: 6000, image: 'imagenes/sprite.jpeg', alcohol: false, badge: null },
        { name: 'Jugo de Naranja', description: 'Jugo natural de naranja recién exprimido.', price: 8000, image: 'imagenes/jugo_naranja.jpeg', alcohol: false, badge: null },
        { name: 'Limonada Natural', description: 'Limonada fresca con limones naturales.', price: 7000, image: 'imagenes/limonada.jpeg', alcohol: false, badge: null }
    ],
    'sin-alcohol': [
        { name: 'Virgin Mojito', description: 'Menta fresca, lima, azúcar de caña, soda.', price: 14000, image: 'imagenes/virgin_mojito.jpeg', alcohol: false, badge: null },
        { name: 'Ibarna Zero', description: 'Maracuyá, albahaca, jengibre, soda.', price: 15000, image: 'imagenes/ibarna_sour.jpeg', alcohol: false, badge: null },
        { name: 'Berry Smash', description: 'Frutos rojos, limón, tónica, lavanda.', price: 15000, image: 'imagenes/berry_smash.jpeg', alcohol: false, badge: null },
        { name: 'Coconut Dream', description: 'Leche de coco, piña, canela, espuma.', price: 16000, image: 'imagenes/coco_loco.jpeg', alcohol: false, badge: null },
        { name: 'Oreo Dream', description: 'Granizado cremoso de galleta Oreo.', price: 18000, image: 'imagenes/oreo_dream.jpeg', alcohol: false, badge: '✨ Nuevo' }
    ]
};

function getCategoryName(category) {
    const names = {
        'clasicos': '🍸 Clásicos', 'signature': '✨ Signature', 'tropicales': '🌴 Tropicales',
        'cervezas': '🍺 Cervezas', 'tragos': '🥃 Tragos', 'sodas': '🥤 Sodas', 'sin-alcohol': '🌿 Sin Alcohol'
    };
    return names[category] || '🍸 Coctel';
}