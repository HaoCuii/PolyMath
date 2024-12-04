document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    
    // Parallax effect for the background of the 'body' section
    const bodyParallax = document.querySelector('.body');
    bodyParallax.style.backgroundPositionY = `${scrollPosition * -0.5}px`; // Adjust scroll speed

});

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentTestimonialIndex = 0;

    function updateTestimonials(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentTestimonialIndex =
            (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonials(currentTestimonialIndex);
    });

    nextButton.addEventListener('click', () => {
        currentTestimonialIndex =
            (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonials(currentTestimonialIndex);
    });

    // Initialize first testimonial as active
    updateTestimonials(currentTestimonialIndex);
});
