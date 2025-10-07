// Photo groups (case-sensitive file names)
const groups = {
  robbie: [
    "images/fullsize/robbie/RobbieSmall1_web.jpg",
    "images/fullsize/robbie/RobbieSmall2_web.jpg",
    "images/fullsize/robbie/RobbieSmall3_web.jpg",
    "images/fullsize/robbie/RobbieSmall4_web.jpg",
    "images/fullsize/robbie/RobbieSmall5_web.jpg",
    "images/fullsize/robbie/RobbieSmall6_web.jpg",
    "images/fullsize/robbie/RobbieSmall7_web.jpg",
    "images/fullsize/robbie/RobbieSmall8_web.jpg"
  ],
  parker: [
    "images/fullsize/parker/ParkerSmall1_web.jpg",
    "images/fullsize/parker/ParkerSmall2_web.jpg",
    "images/fullsize/parker/ParkerSmall3_web.jpg",
    "images/fullsize/parker/ParkerSmall4_web.jpg",
    "images/fullsize/parker/ParkerSmall5_web.jpg"
  ]
};

// Site graphics (non-photo assets) – for reference/use if needed later
const graphics = {
  bannerLogo: "graphics/bannerlogo.png",
  mainBanner: "graphics/mainbanner.png",
  containerBackground: "graphics/container1bkgnd.png",
  favicon: "graphics/favicon.png"
};

const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".close-btn");
const swiperWrapper = document.querySelector(".swiper-wrapper");
let swiper;

// Open lightbox on thumbnail click
document.querySelectorAll(".thumb").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const groupKey = thumb.getAttribute("data-group");
    const images = groups[groupKey];
    if (!images || images.length === 0) return;

    // Build slides
    swiperWrapper.innerHTML = "";
    images.forEach(src => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${src}" alt="">`;
      swiperWrapper.appendChild(slide);
    });

    lightbox.classList.add("active");

    // Init/refresh Swiper
    if (swiper) swiper.destroy(true, true);
    swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 60,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      keyboard: { enabled: true },
      observer: true,
      observeParents: true
    });
  });
});

// Close lightbox with animation-friendly delay
function closeLightbox() {
  lightbox.classList.remove("active");
}
closeBtn.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// Lucide icons (guarded)
if (window.lucide && typeof window.lucide.createIcons === "function") {
  window.lucide.createIcons();
}
