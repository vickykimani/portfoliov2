//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behaviour: 'smooth',
            block: 'start'
        });
    });
});

//scroll progress indicatior
window.addEventListener('scroll', () => {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-indicator').getElementsByClassName.transform = `scaleX(${scrolled / 100})`;
});

//add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.85)';
        nav.style.boxShadow = 'none';
    }
});