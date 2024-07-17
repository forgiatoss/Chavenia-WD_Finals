// script.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            window.open(target, '_blank');
        });
    });
});
