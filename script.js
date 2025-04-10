document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});