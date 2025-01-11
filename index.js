// Detect Scroll for Animation
window.addEventListener('scroll', function () {
    document.querySelectorAll('.animate-scroll').forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Hide the loading screen after the page is fully loaded
window.addEventListener('load', function () {
    // Set a delay for hiding the loading screen (optional for a better visual experience)
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 50);  // Adjust time (in milliseconds) if needed, 500ms is generally enough
});
