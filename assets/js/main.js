"use strict";
// Preloader area
const preloaderFunction = () => {
  document.getElementById("preloader").style.display = "none";
};

// toggleSideMenu start
const toggleSideMenu = () => {
  document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
const header = document.querySelector("nav");
window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY >= 100);
});

$(document).ready(function () {
  // Testimonial section start
  // Owl carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 2000,
    nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-angle-left'></i>",
      "<i class='fa-regular fa-angle-right'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: 3,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
        dotsEach: 2,
      },
      768: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });

  // Brands carousel
  $(".product-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    // dots: false,
    // rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });

  // cmn select2 start
  $(".cmn-select2").select2();
  // cmn select2 end

  // cmn-select2 with image start
  $(".cmn-select2-image").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // cmn-select2 with image end

  // Modal select2 with image start
  $(".modal-select2-image").select2({
    dropdownParent: $("#formModal"),
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // MOdal select2 with image end

  // Cmn select2 tags start
  $(".cmn-select2-tags").select2({
    tags: true,
  });
  // Cmn select2 tags end

  // cmn select2 modal start
  $(".modal-select2").select2({
    dropdownParent: $("#formModal"),
  });
  // cmn select2 modal start

  // Hero slider start

  var swiper = new Swiper(".hero-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
  // Hero slider end
  
// input field show hide password end
    // Isotope start
    if ($('.listing-row').length) {
      $(document).ready(function () {
          var $grid = $('.listing-row').isotope({
              itemSelector: '.grid-item',
              percentPosition: true,
              masonry: {
                  columnWidth: 1
              }
          });

          var selectedFilter = localStorage.getItem('selectedFilter') || '.all';
          $grid.isotope({ filter: selectedFilter });

          $('.isotope-btn-group button').removeClass('active');
          $('.isotope-btn-group button[data-filter="' + selectedFilter + '"]').addClass('active');

          $('.isotope-btn-group').on('click', 'button', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
              localStorage.setItem('selectedFilter', filterValue);

              $(this).siblings('.active').removeClass('active');
              $(this).addClass('active');
          });

          $grid.isotope('layout');

          $('.form-check-input').on('change', function () {
              $('.review-single-hidden-box').toggle(this.checked);
              $grid.isotope('layout');
          });
      });
  }
  // Isotope ends
  //--- BAR FILLAR ---//
  if ($(".progress-bar").length) {
    const progressItem = document.getElementsByClassName("progress-item")[0];
    const progressBars = document.querySelectorAll('.progress-bar');

    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 1;
            progressBar.style.width = `${value}%`;
        });
    }

    function hideProgress() {
        progressBars.forEach(p => {
            p.style.opacity = 0;
            p.style.width = 0;
        });
    }

    window.addEventListener('scroll', () => {
        const sectionPos = progressItem.getBoundingClientRect().top;
        const screenPos = window.innerHeight;
        if (sectionPos < screenPos) {
            showProgress();
        } else {
            hideProgress();
        }
    });
}
//--- BAR FILLAR ---//
});

// input file preview
const previewImage = (id) => {
  document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Copy text start
function copyTextFunc() {
  const element = document.querySelector(".docs-code");
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}
// Copy text end

// Social share start
if ($("#shareBlock").length) {
  $("#shareBlock").socialSharingPlugin({
    urlShare: window.location.href,
    description: $("meta[name=description]").attr("content"),
    title: $("title").text(),
  });
}
// Social share end

// Nice select start
if ($(".nice-select").length) {
  $(".nice-select").niceSelect();
}
// Nice select end

// Range area start
if ($(".js-range-slider").length) {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: false,
  });
}
// Range area end

// International Telephone Input start
if ($("#telephone").length) {
  const input = document.querySelector("#telephone");
  window.intlTelInput(input, {
    initialCountry: "bd",
    separateDialCode: true,
  });
}
// International Telephone Input end

// Copy page url start
if ($("#copyBtn").length) {
  document.getElementById("copyBtn").addEventListener("click", () => {
    let pageUrl = window.location.href;

    navigator.clipboard
      .writeText(pageUrl)
      .then(() => {
        if (pageUrl) {
          document.getElementById("copyBtn").innerHTML =
            'Copied Profile <i class="fa-regular fa-circle-check"></i>';
          setTimeout(() => {
            document.getElementById("copyBtn").innerHTML =
              'Copy Profile <i class="fa-regular fa-copy"></i>';
          }, 1000);
        }
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}

// Copy page url end
// input field show hide password start
if (document.querySelector(".login-register-form")) {
  const passwordBoxes = document.querySelectorAll(".password-box");
  passwordBoxes.forEach((passwordBox) => {
    const passwordInput = passwordBox.querySelector(".password");
    const passwordIcon = passwordBox.querySelector(".password-icon");

    passwordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.add("fa-eye-slash");
        passwordIcon.classList.remove("fa-eye");
      } else {
        passwordInput.type = "password";
        passwordIcon.classList.add("fa-eye");
        passwordIcon.classList.remove("fa-eye-slash");
      }
    });
  });
}
