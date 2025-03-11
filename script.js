document.addEventListener('DOMContentLoaded', function() {
    // Mobilios navigacijos toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animuoti hamburgerio ikoną
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // DUK accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Uždaryti visus kitus atsakymus
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle aktyvią klasę
            item.classList.toggle('active');
        });
    });
    
    // Smooth scroll navigacijai
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Uždaryti mobilią navigaciją, jei atidaryta
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                    
                    // Smooth scroll iki elemento
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Kontaktų formos validacija ir siuntimas
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Gauti formos laukų reikšmes
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Čia būtų formos siuntimo logika į serverį
            // Šiuo atveju tiesiog parodome sėkmės pranešimą
            
            alert(`Ačiū, ${name}! Jūsų žinutė sėkmingai išsiųsta. Susisieksime su jumis artimiausiu metu.`);
            
            // Išvalyti formą
            contactForm.reset();
        });
    }
    
    // Naujienlaiškio formos validacija ir siuntimas
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Čia būtų el. pašto siuntimo logika į serverį
                // Šiuo atveju tiesiog parodome sėkmės pranešimą
                
                alert(`Ačiū! Jūs sėkmingai užsiprenumeravote naujienlaiškį. Jūsų 10% nuolaidos kodas: GRYBUKAI10`);
                
                // Išvalyti formą
                emailInput.value = '';
            }
        });
    }
    
    // Animuoti elementus, kai jie tampa matomi
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .product-card, .testimonial, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Iškviesti animaciją pirmą kartą užkrovus puslapį
    animateOnScroll();
    
    // Iškviesti animaciją scrollinant
    window.addEventListener('scroll', animateOnScroll);
});
