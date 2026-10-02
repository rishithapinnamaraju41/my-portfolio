
// EDUCATION TIMELINE ANIMATION

const educationCards = document.querySelectorAll(".timeline-card");

// Reveal cards when they enter the screen

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

// Observe each education card

educationCards.forEach((card) => {

    observer.observe(card);

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});