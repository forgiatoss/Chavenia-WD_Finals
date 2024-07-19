// assets/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const cardHolder = document.getElementById('cardHolder');

    const projects = [
        { title: 'About Me', url: '/aboutme/index.html' },
        { title: 'Resume', url: '/resume/index.html' },
        { title: 'Favorite Song', url: '/music/index.html' },
        { title: 'Project Overview', url: '/projectoverview/index.html' },
        { title: 'Projects Showcase', url: '/projects/index.html' }
    ];

    projects.forEach(project => {
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = project.url;
        card.target = '_blank'; // Open link in a new tab

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('cardTitle');
        cardTitle.textContent = project.title;

        card.appendChild(cardTitle);
        cardHolder.appendChild(card);
    });
});