document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all primary sections and elements with .fade-in class
    const targets = document.querySelectorAll('.hero-section, .section, .fade-in, .final-cta-section, footer');

    targets.forEach(target => {
        // If it doesn't already have fade-in, add it (unless it's one of the manually added ones)
        if (!target.classList.contains('fade-in')) {
            target.classList.add('fade-in');
        }
        observer.observe(target);
    });
});
