const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

const searchInput = document.getElementById("searchProduct");
const sortSelect = document.getElementById("sortProduct");
const productGrid = document.getElementById("productGrid");
const productCards = [...productGrid.querySelectorAll(".product-card")];

function updateProducts() {
    const keyword = searchInput.value.toLowerCase();

    let visibleProducts = productCards.filter((card) => {
        return card.textContent.toLowerCase().includes(keyword);
    });

    if (sortSelect.value !== "default") {
        visibleProducts.sort((a, b) => {
            const priceA = Number(
                a.querySelector(".price").textContent.replace(/[^0-9]/g, "")
            );
            const priceB = Number(
                b.querySelector(".price").textContent.replace(/[^0-9]/g, "")
            );

            return sortSelect.value === "low"
                ? priceA - priceB
                : priceB - priceA;
        });
    }

    productGrid.innerHTML = "";

    if (visibleProducts.length === 0) {
        productGrid.innerHTML =
            '<p class="empty-state">Komponen tidak ditemukan.</p>';
        return;
    }

    visibleProducts.forEach((card) => {
        productGrid.appendChild(card);
    });
}

searchInput.addEventListener("input", updateProducts);
sortSelect.addEventListener("change", updateProducts);

document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.product;

        // Ganti dengan nomor WhatsApp admin, gunakan kode negara tanpa tanda +.
        const phone = "6281234567890";

        const message = encodeURIComponent(
            `Halo, saya ingin bertanya tentang ${productName}. Apakah tersedia?`
        );

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
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

