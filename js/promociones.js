// ============================================
// PARCHE IBARNA - Promotions Page JavaScript
// Countdown Timer
// ============================================

(function() {
    'use strict';

    // Countdown to next happy hour (Friday 7pm)
    function updateCountdown() {
        const now = new Date();
        const target = new Date();
        
        // Set target to next Friday at 19:00
        const daysUntilFriday = (5 - now.getDay() + 7) % 7;
        target.setDate(now.getDate() + daysUntilFriday);
        target.setHours(19, 0, 0, 0);
        
        // If today is Friday but after 7pm, go to next Friday
        if (now.getDay() === 5 && now.getHours() >= 19) {
            target.setDate(now.getDate() + 7);
        }
        
        const diff = Math.max(0, target - now);
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const daysEl = document.querySelector('.days');
        const hoursEl = document.querySelector('.hours');
        const minutesEl = document.querySelector('.minutes');
        const secondsEl = document.querySelector('.seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    console.log('✨ PARCHE IBARNA | Promotions page initialized');
})();