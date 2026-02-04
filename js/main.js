// ========================================
// Vasundhra Motors - Main JavaScript (FIXED)
// ========================================

// === Configuration ===
const CONFIG = {
    sliderInterval: 3000
};

// === DOM Elements ===
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTop');
const successModal = document.getElementById('successModal');

// === Sticky Navbar + Scroll Top ===
window.addEventListener('scroll', () => {
    navbar.style.boxShadow =
        window.scrollY > 100
            ? '0 4px 12px rgba(0,0,0,0.1)'
            : '0 2px 4px rgba(0,0,0,0.08)';

    scrollTopBtn?.classList.toggle('visible', window.scrollY > 300);
});

// === Mobile Menu ===
mobileMenuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle?.querySelector('i');
        icon?.classList.replace('fa-times', 'fa-bars');
    });
});

// === Scroll To Top ===
scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Hero Slider ===
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.current = 0;
        this.interval = null;
        this.start();
    }

    show(index) {
        this.slides[this.current].classList.remove('active');
        this.indicators[this.current].classList.remove('active');
        this.current = index;
        this.slides[this.current].classList.add('active');
        this.indicators[this.current].classList.add('active');
    }

    next() {
        this.show((this.current + 1) % this.slides.length);
    }

    start() {
        this.interval = setInterval(() => this.next(), CONFIG.sliderInterval);
    }
}

document.querySelector('.slider-container') && new HeroSlider();

// === Date Input (No past dates) ===
const dateInput = document.getElementById('preferredDate');
if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
}

// === Mobile Number Input Cleanup ===
document.getElementById('mobile')?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
});

// === Registration Uppercase ===
document.getElementById('registrationNumber')?.addEventListener('input', e => {
    e.target.value = e.target.value.toUpperCase();
});

// === Success Modal Helpers ===
window.showSuccessModal = function () {
    successModal?.classList.add('show');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function () {
    successModal?.classList.remove('show');
    document.body.style.overflow = 'auto';
};

successModal?.addEventListener('click', e => {
    if (e.target === successModal) closeModal();
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// === Animate On Scroll ===
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    '.service-card, .why-card, .stat-card, .contact-card, .testimonial-card'
).forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = '0.6s ease';
    observer.observe(el);
});

// === Console Branding ===
console.log('%cVasundhra Motors', 'font-size:22px;color:#0066B3;font-weight:bold');
console.log('✓ Website loaded successfully');

function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            form.reset();
            showSuccessModal();   // 👈 THIS shows the thank-you
        } else {
            alert("Something went wrong. Please try again.");
        }
    }).catch(() => {
        alert("Network error. Please try again.");
    });
}
