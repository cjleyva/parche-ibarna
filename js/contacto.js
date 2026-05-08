// ============================================
// PARCHE IBARNA - Contact Page JavaScript
// Formulario de reservas con fecha y hora
// Envío por WhatsApp - HORARIO CORREGIDO
// ============================================

(function() {
    'use strict';

    // NÚMERO DE WHATSAPP DE LA COCTELERÍA
    const WHATSAPP_NUMBER = "573204901827";

    // Imágenes para el carrusel del hero
    const heroImages = [
        'imagenes/barcelona.jpeg',
        'imagenes/golde_tea.jpeg',
        'imagenes/blue_zombie.jpeg',
        'imagenes/margarita_clasica.jpeg',
        'imagenes/coronita.jpeg',
        'imagenes/pina_cream.jpeg'
    ];

    // Días de cierre (lunes y martes)
    const DIAS_CERRADO = [1, 2]; // 1 = Lunes, 2 = Martes

    document.addEventListener('DOMContentLoaded', function() {
        initHeroCarousel();
        initForm();
        updateCartBadge();
        setMinDate();
    });

    // Configurar fecha mínima (hoy)
    function setMinDate() {
        const fechaInput = document.getElementById('fecha');
        if (fechaInput) {
            const hoy = new Date();
            const yyyy = hoy.getFullYear();
            const mm = String(hoy.getMonth() + 1).padStart(2, '0');
            const dd = String(hoy.getDate()).padStart(2, '0');
            fechaInput.min = `${yyyy}-${mm}-${dd}`;
        }
    }

    // Validar que la fecha no sea un día cerrado
    function validarDiaCerrado(fecha) {
        const diaSemana = new Date(fecha).getDay();
        return DIAS_CERRADO.includes(diaSemana);
    }

    // Validar hora según el día - VERSIÓN CORREGIDA
    function validarHorario(fecha, hora) {
        const diaSemana = new Date(fecha).getDay();
        const [horaNum, minutos] = hora.split(':').map(Number);
        
        // Domingo
        if (diaSemana === 0) {
            return horaNum >= 16 && horaNum < 23;
        }
        // Miércoles y Jueves (3 y 4)
        else if (diaSemana === 3 || diaSemana === 4) {
            // Atención de 6pm a 1am (18:00 a 01:00)
            return (horaNum >= 18 && horaNum <= 23) || (horaNum >= 0 && horaNum < 1);
        }
        // Viernes y Sábado (5 y 6)
        else if (diaSemana === 5 || diaSemana === 6) {
            // Atención de 6pm a 3am (18:00 a 03:00)
            return (horaNum >= 18 && horaNum <= 23) || (horaNum >= 0 && horaNum < 3);
        }
        return false;
    }

    // Obtener mensaje de horario según el día
    function getMensajeHorario(fecha) {
        const diaSemana = new Date(fecha).getDay();
        if (diaSemana === 0) {
            return 'Los domingos atendemos de 4:00 PM a 11:00 PM';
        } else if (diaSemana === 3 || diaSemana === 4) {
            return 'Miércoles y Jueves atendemos de 6:00 PM a 1:00 AM';
        } else if (diaSemana === 5 || diaSemana === 6) {
            return 'Viernes y Sábados atendemos de 6:00 PM a 3:00 AM';
        }
        return 'Horario no disponible';
    }

    // Inicializar carrusel del hero
    function initHeroCarousel() {
        const heroWrapper = document.getElementById('heroCarouselWrapper');
        if (!heroWrapper) return;

        heroWrapper.innerHTML = heroImages.map(img => `
            <div class="swiper-slide">
                <div class="hero-slide-bg" style="background-image: url('${img}');"></div>
            </div>
        `).join('');

        new Swiper('.hero-swiper', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 2000
        });
    }

    // Formatear fecha para mostrar
    function formatearFecha(fechaString) {
        const fecha = new Date(fechaString);
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        return `${diasSemana[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    }

    // Formatear hora para mostrar (convertir 24h a 12h)
    function formatearHora(hora24) {
        const [hora, minutos] = hora24.split(':');
        let horaNum = parseInt(hora);
        const ampm = horaNum >= 12 ? 'PM' : 'AM';
        horaNum = horaNum % 12 || 12;
        return `${horaNum}:${minutos} ${ampm}`;
    }

    // Inicializar formulario
    function initForm() {
        const form = document.getElementById('reservaForm');
        const formMessage = document.getElementById('form-message');

        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre')?.value.trim() || '';
            const telefono = document.getElementById('telefono')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const personas = document.getElementById('personas')?.value || '';
            const fecha = document.getElementById('fecha')?.value || '';
            const hora = document.getElementById('hora')?.value || '';
            const tipoReserva = document.getElementById('tipoReserva')?.value || '';
            const detalles = document.getElementById('detalles')?.value.trim() || '';
            
            // Validaciones
            if (!nombre || nombre.length < 3) {
                showMessage('Por favor ingresa tu nombre completo', 'error');
                return;
            }
            
            if (!email || !email.includes('@')) {
                showMessage('Por favor ingresa un email válido', 'error');
                return;
            }
            
            if (!personas || personas < 1 || personas > 20) {
                showMessage('Por favor ingresa un número válido de personas (1-20)', 'error');
                return;
            }
            
            if (!fecha) {
                showMessage('Por favor selecciona la fecha de tu reserva', 'error');
                return;
            }
            
            if (!hora) {
                showMessage('Por favor selecciona la hora de tu reserva', 'error');
                return;
            }
            
            // Validar día cerrado
            if (validarDiaCerrado(fecha)) {
                showMessage('Lo sentimos, los lunes y martes estamos cerrados. Por favor selecciona otra fecha.', 'error');
                return;
            }
            
            // Validar horario
            if (!validarHorario(fecha, hora)) {
                const mensajeHorario = getMensajeHorario(fecha);
                showMessage(`Horario no válido. ${mensajeHorario}`, 'error');
                return;
            }
            
            if (!tipoReserva) {
                showMessage('Por favor selecciona el tipo de reserva', 'error');
                return;
            }
            
            // Obtener fecha y hora actual para el registro
            const ahora = new Date();
            const fechaSolicitud = ahora.toLocaleDateString('es-CO');
            const horaSolicitud = ahora.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
            
            // Formatear fecha y hora para mostrar
            const fechaFormateada = formatearFecha(fecha);
            const horaFormateada = formatearHora(hora);
            
            // Crear mensaje para WhatsApp
            let mensaje = "🍸 *¡NUEVA RESERVA - PARCHE IBARNA!* 🍸\n\n";
            mensaje += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            mensaje += `📅 *Solicitado:* ${fechaSolicitud} - ${horaSolicitud}\n`;
            mensaje += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            mensaje += "👤 *DATOS DEL CLIENTE:*\n";
            mensaje += "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n";
            mensaje += `*Nombre:* ${nombre}\n`;
            mensaje += `*Teléfono:* ${telefono || 'No especificado'}\n`;
            mensaje += `*Email:* ${email}\n\n`;
            
            mensaje += "📅 *DETALLES DE LA RESERVA:*\n";
            mensaje += "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n";
            mensaje += `*Fecha:* ${fechaFormateada}\n`;
            mensaje += `*Hora:* ${horaFormateada}\n`;
            mensaje += `*Personas:* ${personas}\n`;
            mensaje += `*Tipo:* ${tipoReserva}\n`;
            if (detalles) {
                mensaje += `*Detalles adicionales:* ${detalles}\n`;
            }
            
            mensaje += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            mensaje += "👨‍🍳 *INSTRUCCIONES PARA EL PERSONAL:*\n";
            mensaje += "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n";
            mensaje += "✅ Verificar disponibilidad de mesa\n";
            mensaje += "✅ Confirmar reserva con el cliente\n";
            mensaje += "✅ Preparar área correspondiente\n\n";
            
            mensaje += "✨ *¡Gracias por preferir PARCHE IBARNA!* ✨\n";
            mensaje += "📍 Poblado Campestre";
            
            // Enviar al número de la coctelería
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
            
            window.open(url, '_blank');
            showMessage('✨ ¡Reserva enviada! Serás redirigido a WhatsApp para confirmar.', 'success');
            form.reset();
        });
    }
    
    function showMessage(message, type) {
        const formMessage = document.getElementById('form-message');
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    }

    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('parcheCart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('#cartBadge, #cartBadgeMobile').forEach(badge => {
            if (badge) {
                if (totalItems > 0) {
                    badge.textContent = totalItems;
                    badge.style.display = 'inline-flex';
                } else {
                    badge.style.display = 'none';
                }
            }
        });
    }

    console.log('✨ PARCHE IBARNA | Contact page initialized with corrected hours');
})();