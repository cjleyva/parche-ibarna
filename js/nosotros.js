// ============================================
// PARCHE IBARNA - About Us Page JavaScript
// ============================================

(function() {
    'use strict';

    // Team member data
    const teamData = [
        { name: 'Carlos Méndez', role: 'Head Bartender', experience: '10 años', image: null, emoji: '🍸' },
        { name: 'Laura Ramírez', role: 'Mixóloga Senior', experience: '8 años', image: null, emoji: '🍹' },
        { name: 'Andrés Moreno', role: 'Sommelier', experience: '12 años', image: null, emoji: '🍾' }
    ];

    // Render team section if exists
    const teamContainer = document.getElementById('team-container');
    if (teamContainer) {
        teamContainer.innerHTML = teamData.map(member => `
            <div class="team-card reveal">
                <div class="team-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-experience">${member.experience} de experiencia</p>
            </div>
        `).join('');
    }

    console.log('✨ PARCHE IBARNA | About Us page initialized');
})();