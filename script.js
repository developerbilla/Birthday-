document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Initialize variables
    const envelope = document.querySelector('.envelope');
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const birthdayContent = document.querySelector('.birthday-content');
    const gifts = document.querySelectorAll('.gift');
    const giftModal = document.getElementById('gift-modal');
    const closeButton = document.querySelector('.close-button');
    const giftMessage = document.querySelector('.gift-message');
    const musicToggle = document.getElementById('music-toggle');
    const birthdaySong = document.getElementById('birthday-song');
    const timer = document.getElementById('timer');
    
    let startTime = new Date().getTime();
    
    // Envelope click handler
    envelope.addEventListener('click', function() {
        envelope.classList.add('opened');
        
        setTimeout(function() {
            envelopeWrapper.style.opacity = '0';
            envelopeWrapper.style.transform = 'scale(0.8)';
            
            setTimeout(function() {
                envelopeWrapper.style.display = 'none';
                birthdayContent.classList.remove('hidden');
                setTimeout(function() {
                    birthdayContent.classList.add('visible');
                }, 100);
            }, 500);
        }, 1000);
    });
    
    // Gift click handlers
    gifts.forEach(function(gift) {
        gift.addEventListener('click', function() {
            gift.classList.add('opened');
            
            // Show different messages based on which gift was clicked
            let message = '';
            switch(gift.id) {
                case 'gift1':
                    message = `
                    <h3>A Special Poem for Name</h3>
                    <p class="gift-poem">
                        Like a rose in full bloom, you're a beauty divine,<br>
                        Your smile lights up rooms, making everything shine.<br>
                        On this special day, I celebrate you,<br>
                        Your grace, your charm, and your kind heart too.
                    </p>
                    <p class="gift-note">Happy Birthday, gorgeous! 💋</p>
                    `;
                    break;
                case 'gift2':
                    message = `
                    <h3>Your Virtual Surprise</h3>
                    <p>If I could, I'd give you the world wrapped in gold.</p>
                    <p>But until then, here's a virtual promise of all the adventures we'll share and memories we'll create.</p>
                    <p class="gift-note">Here's to many more birthdays together! 💕</p>
                    `;
                    break;
                case 'gift3':
                    message = `
                    <h3>A Birthday Wish</h3>
                    <p>May your day be as beautiful as you are. May this year bring you success in everything you touch, joy in every moment, and love in abundance.</p>
                    <p class="gift-note">You deserve all the happiness in the world! 🥂</p>
                    `;
                    break;
            }
            
            giftMessage.innerHTML = message;
            giftModal.classList.add('show');
        });
    });
    
    // Close modal button
    closeButton.addEventListener('click', function() {
        giftModal.classList.remove('show');
    });
    
    // Click outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target === giftModal) {
            giftModal.classList.remove('show');
        }
    });
    
    // Music player toggle
    musicToggle.addEventListener('click', function() {
        if (birthdaySong.paused) {
            birthdaySong.play();
            musicToggle.querySelector('.music-text').textContent = 'Pause Birthday Song';
        } else {
            birthdaySong.pause();
            musicToggle.querySelector('.music-text').textContent = 'Play Birthday Song';
        }
    });
    
    // Update timer function
    function updateTimer() {
        let now = new Date().getTime();
        let elapsed = now - startTime;
        
        let hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
        
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        
        timer.textContent = hours + ":" + minutes + ":" + seconds;
        
        setTimeout(updateTimer, 1000);
    }
    
    // Initialize timer
    updateTimer();
    
    // Create dynamic hearts
    function createHearts() {
        const heartAnimation = document.querySelector('.heart-animation');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Set random positions and delays
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 20 + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            
            heartAnimation.appendChild(heart);
        }
    }
    
    // Call the function to create hearts
    createHearts();
    
    // Add extra animations for polaroid images
    const polaroids = document.querySelectorAll('.polaroid');
    
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('mouseover', () => {
            const randomRotation = (Math.random() * 10 - 5) + 'deg';
            polaroid.style.transform = `scale(1.05) rotate(${randomRotation})`;
        });
        
        polaroid.addEventListener('mouseout', () => {
            const originalRotation = polaroid.style.getPropertyValue('--rotation') || '0deg';
            polaroid.style.transform = `rotate(${originalRotation})`;
        });
    });

    // Add confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '-1';
        document.body.appendChild(confettiContainer);
        
        const colors = ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffc9c9', '#f9f9f9', '#ffd1d1'];
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                const size = Math.random() * 10 + 5;
                
                confetti.style.position = 'absolute';
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-20px';
                confetti.style.borderRadius = (Math.random() > 0.5) ? '50%' : '0';
                confetti.style.opacity = Math.random() * 0.7 + 0.3;
                
                confettiContainer.appendChild(confetti);
                
                // Animation
                const animationDuration = Math.random() * 3 + 2;
                const xMovement = (Math.random() - 0.5) * 20;
                
                confetti.animate([
                    { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                    { transform: `translateY(100vh) translateX(${xMovement}vw) rotate(360deg)`, opacity: 0 }
                ], {
                    duration: animationDuration * 1000,
                    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
                }).onfinish = () => {
                    confetti.remove();
                };
            }, Math.random() * 4000);
        }
    }
    
    // Release confetti when the birthday content becomes visible
    const birthdayContentObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.classList.contains('visible')) {
                createConfetti();
                birthdayContentObserver.disconnect();
            }
        });
    });
    
    birthdayContentObserver.observe(birthdayContent, { attributes: true });
    function typeWriterEffect() {
        const messageContainer = document.querySelector('.message');
        const messageTextElements = messageContainer.querySelectorAll('p');
    
        let currentElementIndex = 0;
        let currentCharIndex = 0;
        let typingSpeed = 50;
    
        function typeNextChar() {
            if (currentElementIndex >= messageTextElements.length) return; // Stop when all paragraphs are done
    
            const currentElement = messageTextElements[currentElementIndex];
            const originalText = currentElement.getAttribute('data-text') || currentElement.textContent;
    
            if (!currentElement.getAttribute('data-text')) {
                currentElement.setAttribute('data-text', originalText);
                currentElement.textContent = '';
            }
    
            if (currentCharIndex < originalText.length) {
                currentElement.textContent = originalText.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                setTimeout(typeNextChar, typingSpeed);
            } else {
                // Move to next paragraph after a short delay
                setTimeout(() => {
                    currentElementIndex++;
                    currentCharIndex = 0;
    
                    if (currentElementIndex < messageTextElements.length) {
                        messageTextElements[currentElementIndex].style.visibility = 'visible';
                        typeNextChar();
                    }
                }, 1000); // Delay before typing the next paragraph
            }
        }
    
        // Initialize: Hide all paragraphs and store original text
        messageTextElements.forEach(el => {
            el.style.visibility = 'hidden';
            el.setAttribute('data-text', el.textContent);
            el.textContent = '';
        });
    
        // Show and start typing for the first paragraph
        if (messageTextElements.length > 0) {
            messageTextElements[0].style.visibility = 'visible';
            typeNextChar();
        }
    }
    
    // Start typing effect when the content becomes visible
    setTimeout(() => {
        if (birthdayContent.classList.contains('visible')) {
            typeWriterEffect();
        } else {
            birthdayContent.addEventListener('transitionend', function handler() {
                if (birthdayContent.classList.contains('visible')) {
                    typeWriterEffect();
                    birthdayContent.removeEventListener('transitionend', handler);
                }
            });
        }
    }, 2000);
    
});