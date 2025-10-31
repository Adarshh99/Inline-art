// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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

// Floating Labels Enhancement
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        // Check if input has value on load
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // Add has-value class on input
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Handle focus and blur
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (!this.value) {
                this.classList.remove('has-value');
            }
        });
    });
});

// Enhanced Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Check if running locally (file:// protocol) or if we're on a server
    const isLocalFile = window.location.protocol === 'file:';
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    // Check if form was submitted successfully (redirect back from FormSubmit)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        
        btnText.textContent = 'Message Sent!';
        btnIcon.innerHTML = '<i class="fas fa-check"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! We\'ll get back to you soon.';
        contactForm.appendChild(successMsg);
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            contactForm.querySelectorAll('.form-input').forEach(input => {
                input.classList.remove('has-value');
                input.parentElement.classList.remove('focused');
            });
            btnText.textContent = 'Send Message';
            btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
            submitBtn.style.background = '';
            successMsg.remove();
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 5000);
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', async (e) => {
        // Validate form first
        if (!contactForm.checkValidity()) {
            e.preventDefault();
            contactForm.reportValidity();
            return;
        }
        
        // Get form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        
        // Show loading state
        submitBtn.disabled = true;
        const originalText = btnText.textContent;
        btnText.textContent = 'Sending...';
        btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Use mailto - best option, works everywhere, no setup needed
        e.preventDefault();
        
        // Create formatted email body
        const emailBody = `Name: ${firstName}${lastName ? ' ' + lastName : ''}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This message was sent from the Inline Art contact form.`;
        
        // Create mailto link with all form data
        const mailtoLink = `mailto:govindupadhyay85273@gmail.com?subject=${encodeURIComponent('New Contact Form - Inline Art')}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(email)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message immediately
        btnText.textContent = 'Opening Email...';
        btnIcon.innerHTML = '<i class="fas fa-envelope"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        
        // After short delay, show success and reset form
        setTimeout(() => {
            btnText.textContent = 'Email Opened!';
            btnIcon.innerHTML = '<i class="fas fa-check"></i>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Your email client is opening. Please click "Send" to complete your submission.';
            contactForm.appendChild(successMsg);
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                contactForm.querySelectorAll('.form-input').forEach(input => {
                    input.classList.remove('has-value');
                    input.parentElement.classList.remove('focused');
                });
                submitBtn.disabled = false;
                btnText.textContent = originalText;
                btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
                submitBtn.style.background = '';
                successMsg.remove();
            }, 5000);
        }, 500);
    });
}

// Enhanced Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

// Fade-in observer
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to various elements
document.addEventListener('DOMContentLoaded', () => {
    // Service cards - fade in
    document.querySelectorAll('.service-item-new, .service-card').forEach((el, index) => {
        el.classList.add('scroll-fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    // Featured items - slide from opposite sides
    document.querySelectorAll('.featured-item').forEach((el, index) => {
        if (el.classList.contains('reverse')) {
            el.classList.add('scroll-slide-right');
        } else {
            el.classList.add('scroll-slide-left');
        }
        el.style.transitionDelay = `${index * 0.2}s`;
        fadeInObserver.observe(el);
    });

    // Section titles - scale in
    document.querySelectorAll('.section-title, .services-main-title').forEach(el => {
        el.classList.add('scroll-scale-in');
        fadeInObserver.observe(el);
    });
    
    // About Us Section - animations
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) {
        aboutTitle.classList.add('scroll-scale-in');
        fadeInObserver.observe(aboutTitle);
    }
    
    // About Us highlight items - slide in
    document.querySelectorAll('.highlight-item').forEach((el, index) => {
        el.classList.add('scroll-slide-left');
        el.style.transitionDelay = `${index * 0.15}s`;
        fadeInObserver.observe(el);
    });
    
    // About Us card - slide in from right
    const aboutCard = document.querySelector('.about-card');
    if (aboutCard) {
        aboutCard.classList.add('scroll-slide-right');
        fadeInObserver.observe(aboutCard);
    }
    
    // About Us mission - fade in
    const aboutMission = document.querySelector('.about-mission');
    if (aboutMission) {
        aboutMission.classList.add('scroll-fade-in');
        fadeInObserver.observe(aboutMission);
    }

    // Process steps - fade in with stagger
    document.querySelectorAll('.process-step').forEach((el, index) => {
        el.classList.add('scroll-fade-in');
        el.style.transitionDelay = `${index * 0.15}s`;
        fadeInObserver.observe(el);
    });

    // Approach items - rotate in
    document.querySelectorAll('.approach-item').forEach((el, index) => {
        el.classList.add('scroll-rotate-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    // Other service items - slide animations
    document.querySelectorAll('.other-service-item').forEach((el, index) => {
        if (index % 2 === 1) {
            el.classList.add('scroll-slide-right');
        } else {
            el.classList.add('scroll-slide-left');
        }
        el.style.transitionDelay = `${index * 0.2}s`;
        fadeInObserver.observe(el);
    });

    // Contact form - fade in
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.classList.add('scroll-fade-in');
        fadeInObserver.observe(contactForm);
    }

    // Info items - slide from right
    document.querySelectorAll('.info-item').forEach((el, index) => {
        el.classList.add('scroll-slide-right');
        el.style.transitionDelay = `${index * 0.15}s`;
        fadeInObserver.observe(el);
    });
    
    // Works section - animations
    const worksTitle = document.querySelector('.works-title');
    if (worksTitle) {
        worksTitle.classList.add('scroll-scale-in');
        fadeInObserver.observe(worksTitle);
    }
    
    // Work items - fade in with stagger
    document.querySelectorAll('.work-item').forEach((el, index) => {
        el.classList.add('scroll-fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Smooth header background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Gallery Modal Functionality
const galleryData = {
    kitchen: {
        title: 'Modular Kitchen Unit',
        images: [
            'https://assets.zyrosite.com/cdn-cgi/image/format=auto,quality=95,fit=crop,gravity=auto,w=1200/GCG69xk/pexels-heyho-7533764-dJo6VQP6v8h1Rj6V.jpg',
            'https://images.woodenstreet.de/image/data/modular%20kitchen/UrbaneU.jpg',
            'https://cdn.shopify.com/s/files/1/0558/5557/9327/files/127_480x480.jpg?v=1686336886',
            'https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg'
        ]
    },
    living: {
        title: 'Living Room Interior',
        images: [
            'https://d2emch4msrhe87.cloudfront.net/image/data%2FLooks%2F1.jpg',
            'https://www.asenseinterior.com/assets/uploads/627d37c1e040220ba214d240f21fd0f0.webp'
        ]
    },
    wardrobe: {
        title: 'Modular Wardrobe Design',
        images: [
            'https://www.ulcdn.net/media/collection%20and%20listing/Sliding_door_wardrobe.jpg?1684403869',
            'https://i.pinimg.com/736x/e1/84/fc/e184fcf942a253daf5681dcc8271ba65.jpg'
        ]
    },
    residential: {
        title: 'Residential Interior Design',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86N6GIexDsSVPrJg4nmG1pxv90mbWJ8QpBQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUTjJryA6WUOfaZHbDSrAXnGFoD6OrIr-Cw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fWoVAnr0UquZF7kImOnAe9iHcs7Ebp7oHA&s'
        ]
    },
    commercial: {
        title: 'Commercial Interior',
        images: [
            'https://cjassociatesinc.com/wp-content/uploads/CJA-4-1.png',
            'https://alive-studio.in/wp-content/uploads/2021/12/04-1.jpg'
        ]
    },
    bathroom: {
        title: 'Bathroom Vanity Cabinet Designs',
        images: [
            'https://www.regalokitchens.com/images/design/vanity/01.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TGxkWsbz6qG-PzAFThgKlZACAI0Hz_msIw&s',
            'https://www.bhg.com/thmb/19rKLPxIm4VMkgxRHm6BJ7qUhYI=/5323x0/filters:no_upscale():strip_icc()/7005828_AA_2722_preview-32238b892c2b40c0be4ee99201c4ab72.jpg'
        ]
    },
    architectural: {
        title: 'Architectural Design Services',
        images: [
            'https://cdn.cadcrowd.com/blog/uploads/2022/04/architectural-3d-rendering.png'
        ]
    },
    'false-ceiling': {
        title: 'False Ceiling Design',
        images: [
            'https://cdn.magicdecor.in/com/2025/08/27161604/Peripheral-False-Ceiling-1.jpg'
        ]
    },
    'glass-design': {
        title: 'Designer Glass Designs',
        images: [
            'https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/02/24124649/Modern-Window-Glass-Design-Texture-For-Your-House.png'
        ]
    }
};

let currentGallery = null;
let currentImageIndex = 0;

// Open gallery modal
function openGallery(galleryKey) {
    const gallery = galleryData[galleryKey];
    if (!gallery || gallery.images.length === 0) return;
    
    currentGallery = galleryKey;
    currentImageIndex = 0;
    
    const modal = document.getElementById('galleryModal');
    const modalTitle = modal.querySelector('.modal-title');
    const galleryImages = modal.querySelector('.gallery-images');
    const galleryThumbnails = modal.querySelector('.gallery-thumbnails');
    const totalImages = modal.querySelector('.total-images');
    const currentImage = modal.querySelector('.current-image');
    
    // Set title
    modalTitle.textContent = gallery.title;
    
    // Clear previous content
    galleryImages.innerHTML = '';
    galleryThumbnails.innerHTML = '';
    
    // Set total images
    totalImages.textContent = gallery.images.length;
    currentImage.textContent = '1';
    
    // Create image items
    gallery.images.forEach((imageUrl, index) => {
        // Main image
        const imageItem = document.createElement('div');
        imageItem.className = 'gallery-image-item';
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${gallery.title} - Image ${index + 1}`;
        img.loading = 'lazy';
        imageItem.appendChild(img);
        galleryImages.appendChild(imageItem);
        
        // Thumbnail
        const thumbnail = document.createElement('div');
        thumbnail.className = 'gallery-thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.addEventListener('click', () => goToImage(index));
        const thumbImg = document.createElement('img');
        thumbImg.src = imageUrl;
        thumbImg.alt = `Thumbnail ${index + 1}`;
        thumbnail.appendChild(thumbImg);
        galleryThumbnails.appendChild(thumbnail);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update slider position
    updateSlider();
}

// Close gallery modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentGallery = null;
    currentImageIndex = 0;
}

// Update slider position
function updateSlider() {
    const galleryImages = document.querySelector('.gallery-images');
    const currentImageEl = document.querySelector('.current-image');
    const totalImagesEl = document.querySelector('.total-images');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    
    if (galleryImages) {
        galleryImages.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    }
    
    if (currentImageEl) {
        currentImageEl.textContent = currentImageIndex + 1;
    }
    
    // Update active thumbnail
    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Navigate to specific image
function goToImage(index) {
    if (!currentGallery) return;
    const gallery = galleryData[currentGallery];
    if (index >= 0 && index < gallery.images.length) {
        currentImageIndex = index;
        updateSlider();
    }
}

// Next image
function nextImage() {
    if (!currentGallery) return;
    const gallery = galleryData[currentGallery];
    currentImageIndex = (currentImageIndex + 1) % gallery.images.length;
    updateSlider();
}

// Previous image
function prevImage() {
    if (!currentGallery) return;
    const gallery = galleryData[currentGallery];
    currentImageIndex = currentImageIndex === 0 ? gallery.images.length - 1 : currentImageIndex - 1;
    updateSlider();
}

// Initialize gallery modal
document.addEventListener('DOMContentLoaded', () => {
    // Explore button click handlers
    document.querySelectorAll('.explore-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryKey = btn.getAttribute('data-gallery');
            if (galleryKey) {
                openGallery(galleryKey);
            }
        });
    });
    
    // Close button
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGallery);
    }
    
    // Backdrop click to close
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', closeGallery);
    }
    
    // Navigation buttons
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevImage();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('galleryModal');
        if (!modal || !modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    const galleryImagesContainer = document.querySelector('.gallery-images-container');
    if (galleryImagesContainer) {
        galleryImagesContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        galleryImagesContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextImage();
        }
        if (touchEndX > touchStartX + 50) {
            prevImage();
        }
    }
});
