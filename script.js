// ---------------------------
// IMAGE GROUPS
// ---------------------------
const groups = {
  // Robbie gallery 1 – shows images 1–2
  robbie1: [
    "images/fullsize/robbie/RobbieSmall1_web.jpg",
    "images/fullsize/robbie/RobbieSmall2_web.jpg"
  ],

  // Robbie gallery 2 – shows images 3–6
  robbie2: [
    "images/fullsize/robbie/RobbieSmall3_web.jpg",
    "images/fullsize/robbie/RobbieSmall4_web.jpg",
    "images/fullsize/robbie/RobbieSmall5_web.jpg",
    "images/fullsize/robbie/RobbieSmall6_web.jpg"
  ],

  // Robbie gallery 3 – shows images 7–8
  robbie3: [
    "images/fullsize/robbie/RobbieSmall7_web.jpg",
    "images/fullsize/robbie/RobbieSmall8_web.jpg"
  ],

  // Parker gallery – shows images 1–5
parker: [
  "images/fullsize/parker/ParkerSmall1_web.jpg",
  "images/fullsize/parker/ParkerSmall2_web.jpg",
  "images/fullsize/parker/ParkerSmall3_web.jpg",
  "images/fullsize/parker/ParkerSmall4_web.jpg",
  "images/fullsize/parker/ParkerSmall5_web.jpg"
],

art: [
  "images/fullsize/art/bloom_web.jpg",
  "images/fullsize/art/dusk_web.jpg",
  "images/fullsize/art/echoes_web.jpg",
  "images/fullsize/art/nova_web.jpg",
  "images/fullsize/art/horizon_web.jpg"
]

};

// ---------------------------
// GRAPHICS (non-photo assets)
// ---------------------------
const graphics = {
  bannerLogo: "graphics/bannerlogo.png",
  mainBanner: "graphics/mainbanner.png",
  containerBackground: "graphics/container1bkgnd.png",
  favicon: "graphics/favicon.png"
};

// ---------------------------
// LIGHTBOX + SWIPER LOGIC
// ---------------------------
const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".close-btn");
const swiperWrapper = document.querySelector(".swiper-wrapper");
let swiper;

// Build slides from image array
function buildSlides(imageList) {
  swiperWrapper.innerHTML = imageList
    .map(src => `<div class="swiper-slide"><img src="${src}" alt=""></div>`)
    .join("");
}

// Open Lightbox for a specific group
function openLightbox(images) {
  if (!images || !images.length) return;

  buildSlides(images);

  lightbox.style.display = "flex";
  lightbox.classList.add("active");
  lightbox.style.pointerEvents = "auto";

  // Reinitialize Swiper
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
}

// Close Lightbox (fast 0.3s fade-out)
function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.style.pointerEvents = "none";

  setTimeout(() => {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    lightbox.style.display = "none";
    lightbox.style.pointerEvents = "auto";
    swiperWrapper.innerHTML = "";
  }, 300); // matches 0.3s CSS transition
}

// ---------------------------
// EVENT HANDLERS
// ---------------------------

// Thumbnail click → open appropriate group
document.querySelectorAll(".thumb").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const groupKey = thumb.getAttribute("data-group");
    const images = groups[groupKey];
    if (!images || images.length === 0) return;
    openLightbox(images);
  });
});

// Close Lightbox via X or Escape
closeBtn.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

// ---------------------------
// INITIALIZE LUCIDE ICONS
// ---------------------------
if (window.lucide && typeof window.lucide.createIcons === "function") {
  window.lucide.createIcons();
}
