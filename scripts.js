// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        // Add form submission logic here
    });
});
