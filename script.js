// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// scroll progress indicator
window.addEventListener('scroll', () => {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-indicator').style.transform = `scaleX(${scrolled / 100})`;
});

// add scroll effect to navigation
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

// intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

//cursor stuff
const tooltip = document.createElement('div');
tooltip.className = 'custom-tooltip';
tooltip.textContent = '<click to interact with prototype>';
document.body.appendChild(tooltip);

document.querySelectorAll('.project-card').forEach(card => {
    let isHovering = false;

    card.addEventListener('mouseenter', () => {
        isHovering = true;
        tooltip.classList.add('show');
        card.style.cursor = 'pointer';
    });

    card.addEventListener('mouseleave', () => {
        isHovering = false;
        tooltip.classList.remove('show');
        card.style.cursor = 'default';
    });

    card.addEventListener('mousemove', (e) => {
        if (isHovering) {
            //use requestAnimationFrame for smooth movement
            requestAnimationFrame(() => {
                const tooltipWidth = 200;
                const leftPos = Math.min(e.clientX, window.innerWidth - tooltipWidth);

                tooltip.style.left = leftPos + 'px';
                tooltip.style.top = (e.clientY - 60) + 'px';
            });
        }
    });

    card.addEventListener('click', () => {
        const figmaUrl = card.dataset.figmaUrl;
        if (figmaUrl) {
            window.open(figmaUrl, '_blank');
        } else {
            alert('Prototype coming soon!')
        }
    });
});