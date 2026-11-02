const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const spec = document.getElementById("pcSpec").value.trim();
    const need = document.getElementById("need").value;
    const message = document.getElementById("message").value.trim();

    // Ganti dengan nomor WhatsApp admin, gunakan kode negara tanpa tanda +.
    const phone = "6281234567890";

    const text = encodeURIComponent(
        `Halo Rezzky Upgrade PC!\nNama: ${name}\nSpesifikasi PC: ${spec}\nKebutuhan: ${need}\nPesan: ${message}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});


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

