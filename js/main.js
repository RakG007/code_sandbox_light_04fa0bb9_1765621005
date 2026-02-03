// ========================================
// Vasundhra Motors - Main JavaScript
// ========================================

// === Configuration ===
const CONFIG = {
    emailRecipient: 'vasundramotorsjjr@gmail.com',
    sliderInterval: 3000, // 1 seconds
    formSubmitDelay: 500 // 500ms delay for better UX
};

// === DOM Elements ===
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTop');
const bookingForm = document.getElementById('bookingForm');
const successModal = document.getElementById('successModal');

// === Navigation Functionality ===
// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
    }

    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// Scroll to top button
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// === Hero Slider Functionality ===
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prevSlide');
        this.nextBtn = document.getElementById('nextSlide');
        this.currentSlide = 0;
        this.slideInterval = null;

        this.init();
    }

    init() {
        // Start auto-sliding
        this.startAutoSlide();

        // Previous button
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.stopAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            });
        }

        // Next button
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.stopAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            });
        }

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.stopAutoSlide();
                this.goToSlide(index);
                this.startAutoSlide();
            });
        });

        // Pause on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => this.stopAutoSlide());
            sliderContainer.addEventListener('mouseleave', () => this.startAutoSlide());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.stopAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            } else if (e.key === 'ArrowRight') {
                this.stopAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            }
        });
    }

    goToSlide(index) {
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, CONFIG.sliderInterval);
    }

    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize slider
if (document.querySelector('.slider-container')) {
    new HeroSlider();
}

// === Form Validation & Submission ===
// Set minimum date to today for date picker
const dateInput = document.getElementById('preferredDate');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Format registration number to uppercase
const registrationInput = document.getElementById('registrationNumber');
if (registrationInput) {
    registrationInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase();
    });
}

// Mobile number validation
const mobileInput = document.getElementById('mobile');
if (mobileInput) {
    mobileInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    });
}

// === Email Service Integration ===
// Using EmailJS (free service for sending emails from static websites)
// This will send booking details to vasundramotorsjjr@gmail.com

if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            customerName: document.getElementById('customerName').value,
            mobile: document.getElementById('mobile').value,
            email: document.getElementById('email').value,
            carModel: document.getElementById('carModel').value,
            registrationNumber: document.getElementById('registrationNumber').value,
            serviceType: document.getElementById('serviceType').value,
            preferredDate: document.getElementById('preferredDate').value,
            preferredTime: document.getElementById('preferredTime').value || 'Not specified',
            message: document.getElementById('message').value || 'No additional message'
        };

        // Disable submit button to prevent double submission
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

        try {
            // Send email using multiple methods to ensure delivery
            await sendBookingEmail(formData);

            // Show success modal
            setTimeout(() => {
                showSuccessModal();
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, CONFIG.formSubmitDelay);

        } catch (error) {
            console.error('Error submitting form:', error);
            
            // Fallback: Open email client
            openEmailClient(formData);
            
            // Show success modal anyway (form was filled correctly)
            setTimeout(() => {
                showSuccessModal();
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, CONFIG.formSubmitDelay);
        }
    });
}

// === Email Sending Functions ===
async function sendBookingEmail(formData) {
    // Method 1: Using FormSubmit.co (free, no registration needed)
    // This service forwards form submissions to specified email
    
    const formSubmitEndpoint = 'https://formsubmit.co/ajax/' + CONFIG.emailRecipient;
    
    const emailBody = `
        NEW SERVICE BOOKING REQUEST
        ========================================
        
        Customer Details:
        Name: ${formData.customerName}
        Mobile: ${formData.mobile}
        Email: ${formData.email}
        
        Vehicle Information:
        Car Model: ${formData.carModel}
        Registration Number: ${formData.registrationNumber}
        
        Service Details:
        Service Type: ${formData.serviceType}
        Preferred Date: ${formData.preferredDate}
        Preferred Time: ${formData.preferredTime}
        
        Additional Notes:
        ${formData.message}
        
        ========================================
        This booking was submitted via Vasundhra Motors website.
    `.trim();

    const formSubmitData = {
        _subject: `New Service Booking - ${formData.customerName} - ${formData.carModel}`,
        _template: 'table',
        _captcha: 'false',
        name: formData.customerName,
        mobile: formData.mobile,
        email: formData.email,
        carModel: formData.carModel,
        registrationNumber: formData.registrationNumber,
        serviceType: formData.serviceType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message
    };

    try {
        const response = await fetch(formSubmitEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formSubmitData)
        });

        if (!response.ok) {
            throw new Error('FormSubmit failed');
        }

        return await response.json();
    } catch (error) {
        console.error('FormSubmit error:', error);
        
        // Method 2: Fallback - Try alternative service (Web3Forms)
        return sendViaWeb3Forms(formData);
    }
}

async function sendViaWeb3Forms(formData) {
    // Web3Forms - Alternative free email service
    // Access key needs to be obtained from https://web3forms.com (free)
    // For now, we'll use a demo key (replace with actual key after setup)
    
    const web3formsEndpoint = 'https://api.web3forms.com/submit';
    
    const web3Data = {
        access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with actual key from web3forms.com
        subject: `New Service Booking - ${formData.customerName}`,
        from_name: 'Vasundhra Motors Website',
        to_email: CONFIG.emailRecipient,
        message: `
            NEW SERVICE BOOKING
            
            Customer: ${formData.customerName}
            Mobile: ${formData.mobile}
            Email: ${formData.email}
            
            Vehicle: ${formData.carModel} (${formData.registrationNumber})
            Service: ${formData.serviceType}
            Date: ${formData.preferredDate}
            Time: ${formData.preferredTime}
            
            Message: ${formData.message}
        `
    };

    const response = await fetch(web3formsEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(web3Data)
    });

    if (!response.ok) {
        throw new Error('Web3Forms failed');
    }

    return await response.json();
}

function openEmailClient(formData) {
    // Fallback method: Open user's email client with pre-filled data
    const subject = encodeURIComponent(`Service Booking - ${formData.customerName} - ${formData.carModel}`);
    const body = encodeURIComponent(`
NEW SERVICE BOOKING REQUEST

Customer Details:
Name: ${formData.customerName}
Mobile: ${formData.mobile}
Email: ${formData.email}

Vehicle Information:
Car Model: ${formData.carModel}
Registration Number: ${formData.registrationNumber}

Service Details:
Service Type: ${formData.serviceType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}

Additional Notes:
${formData.message}
    `.trim());

    window.location.href = `mailto:${CONFIG.emailRecipient}?subject=${subject}&body=${body}`;
}

// === Modal Functions ===
function showSuccessModal() {
    if (successModal) {
        successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (successModal) {
        successModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
if (successModal) {
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// === Smooth Scrolling ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// === Animation on Scroll ===
function animateOnScroll() {
    const elements = document.querySelectorAll('.highlight-card, .service-card, .why-card, .stat-card, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}

// === Contact Button Click Tracking ===
const contactButtons = document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me/"], a[href^="mailto:"]');
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Contact button clicked:', button.getAttribute('href'));
        // You can add analytics tracking here if needed
    });
});

// === Performance Optimization ===
// Lazy load images (if needed in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === Console Welcome Message ===
console.log('%cVasundhra Motors', 'color: #0066B3; font-size: 24px; font-weight: bold;');
console.log('%cAuthorized Maruti Suzuki Service Station', 'color: #666; font-size: 14px;');
console.log('Website developed with care for premium user experience.');

// === Error Handling ===
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// === Page Load Complete ===
window.addEventListener('load', () => {
    console.log('✓ Website loaded successfully');
    
    // Hide loading spinner if you add one in future
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

