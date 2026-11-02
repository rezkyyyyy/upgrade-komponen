const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}


// Animasi elemen saat masuk ke area layar (scroll reveal).
const revealTargets = document.querySelectorAll(
    ".section-heading, .product-card, .service-card, .feature-card, " +
    ".info-card, .page-intro, .product-tools, .contact-card"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    revealTargets.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealTargets.forEach((element) => {
        element.classList.add("is-visible");
    });
}

