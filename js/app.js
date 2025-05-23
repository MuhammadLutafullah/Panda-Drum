/* ============================
       Slider Js Start Here
=============================== */
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: false,
  spaceBetween: 10,
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;
      updateActiveThumbnail(activeIndex);
    },
  },
});

const thumbnails = document.querySelectorAll(".color-option img");

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    swiper.slideTo(index);
    updateActiveThumbnail(index);
  });
});

function updateActiveThumbnail(activeIndex) {
  thumbnails.forEach((thumb, index) => {
    if (index === activeIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

thumbnails[0].classList.add("active");

/* =============================
       Slider Js End Here
================================ */

/* =============================
       Radio Input Js Start Here
================================ */

document.addEventListener("DOMContentLoaded", function () {
  const tabEls = document.querySelectorAll('button[data-bs-toggle="tab"]');

  tabEls.forEach((tabEl) => {
    tabEl.addEventListener("shown.bs.tab", function (e) {
      const radio = e.target.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
    });
  });
  const radios = document.querySelectorAll('input[name="drum-type"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        const tabButton = this.closest(".nav-link");
        if (tabButton) {
          const tab = new bootstrap.Tab(tabButton);
          tab.show();
        }
      }
    });
  });
});

/* =============================
       Radio Input Js End Here
================================ */
