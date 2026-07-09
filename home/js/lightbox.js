const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// All images you want clickable
document.querySelectorAll(".figure-block img, .slide-fg").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

// Close button
closeBtn.addEventListener("click", closeLightbox);

// Click outside image
lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Escape key
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}
