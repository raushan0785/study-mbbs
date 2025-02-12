
// Form validation and submission
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const country = this.querySelector('select').value;

    if (!name || !email || !phone || !country) {
        alert('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Track form submission
    if (typeof gtag === 'function') {
        gtag('event', 'form_submission', {
            'event_category': 'forms',
            'event_label': 'application_form'
        });
    }

    if (typeof fbq === 'function') {
        fbq('track', 'Lead');
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    alert('Thank you for your application! We will contact you soon.');
    this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
            element.classList.add('animate-fadeIn');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
