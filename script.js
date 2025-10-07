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

document.querySelectorAll(".thumb").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const groupKey = thumb.getAttribute("data-group");
    const images = groups[groupKey];
    if (!images || images.length === 0) return;

    swiperWrapper.innerHTML = "";
    images.forEach(src => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${src}" alt="">`;
      swiperWrapper.appendChild(slide);
    });

    lightbox.style.display = "flex";
    lightbox.classList.add("active");
    lightbox.style.pointerEvents = "auto";

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
  }, 300); // match 0.3s CSS fade duration
}

closeBtn.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

if (window.lucide && typeof window.lucide.createIcons === "function") {
  window.lucide.createIcons();
}
