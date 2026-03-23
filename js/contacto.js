// ============================================
// PARCHE IBARNA - Contact Page JavaScript
// Form Handling
// ============================================

(function() {
    'use strict';

    const form = document.getElementById('reservaForm');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Validate email
            const email = form.querySelector('input[type="email"]').value;
            if (!email || !email.includes('@')) {
                showMessage('Por favor ingresa un email válido', 'error');
                return;
            }
            
            // Validate name
            const name = form.querySelector('input[placeholder="Nombre completo"]').value;
            if (!name || name.length < 3) {
                showMessage('Por favor ingresa tu nombre completo', 'error');
                return;
            }
            
            // Simulate form submission
            showMessage('✨ ¡Reserva enviada! Nuestro equipo te contactará pronto.', 'success');
            form.reset();
            
            // Log for demo
            console.log('Reserva enviada:', data);
        });
    }
    
    function showMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    }

    console.log('✨ PARCHE IBARNA | Contact page initialized');
})();