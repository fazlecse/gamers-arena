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

  // product-slider carousel
  $(".flash-sale-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 3000,
    // rtl: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-regular fa-angle-left'></i>",
      "<i class='fa-regular fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
        dotsEach: 3,
      },
      768: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });

  $(".trending-items-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 2000,
    // rtl: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-regular fa-angle-left'></i>",
      "<i class='fa-regular fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
        dotsEach: 4,
        margin: 10,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      992: {
        items: 4,
        nav: true,
        dots: false,
      },
      1200: {
        items: 6,
        nav: true,
        dots: false,
      },
    },
  });

  // img-slider carousel
  $(".img-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 2000,
    // rtl: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
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
  });
  // Hero slider end

  // Countdown start
  if ($(".countdown").length) {
    $(".countdown").countdown("2025/3/19", function (event) {
      $(this).html(
        event.strftime(
          '<div class="single-countdown"><h5>%D</h5><span>Days</span> </div> <div class="single-countdown"><h5>%H</h5><span>Hours</span> </div> <div class="single-countdown"><h5>%M</h5><span>Minutes</span> </div> <div class="single-countdown"><h5>%S</h5><span>Second</span> </div>'
        )
      );
    });
  }
  // Countdown end

  // Isotope start
  if ($(".listing-row").length) {
    $(document).ready(function () {
      var $grid = $(".listing-row").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: 1,
        },
      });

      var selectedFilter = localStorage.getItem("selectedFilter") || ".all";
      $grid.isotope({ filter: selectedFilter });

      $(".isotope-btn-group button").removeClass("active");
      $(
        '.isotope-btn-group button[data-filter="' + selectedFilter + '"]'
      ).addClass("active");

      $(".isotope-btn-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
        localStorage.setItem("selectedFilter", filterValue);

        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
      });

      $grid.isotope("layout");

      $(".form-check-input").on("change", function () {
        $(".review-single-hidden-box").toggle(this.checked);
        $grid.isotope("layout");
      });
    });
  }
  // Isotope ends

  //--- BAR FILLAR ---//
  if ($(".progress-bar").length) {
    const progressItem = document.getElementsByClassName("progress-item")[0];
    const progressBars = document.querySelectorAll(".progress-bar");

    function showProgress() {
      progressBars.forEach((progressBar) => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
      });
    }

    function hideProgress() {
      progressBars.forEach((p) => {
        p.style.opacity = 0;
        p.style.width = 0;
      });
    }

    window.addEventListener("scroll", () => {
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

  // Aos start
  AOS.init();
  // Aos end
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

// Increase decrease button start
document.addEventListener("DOMContentLoaded", (event) => {
  const cartItemCounts = document.querySelectorAll(".cart-item-count");
  cartItemCounts.forEach((cartItemCount) => {
    const decreaseButton = cartItemCount.querySelector("[data-decrease]");
    const increaseButton = cartItemCount.querySelector("[data-increase]");
    const valueInput = cartItemCount.querySelector("[data-value]");

    decreaseButton.addEventListener("click", () => {
      let currentValue = parseInt(valueInput.value);
      if (currentValue > 1) {
        valueInput.value = currentValue - 1;
      }
    });

    increaseButton.addEventListener("click", () => {
      let currentValue = parseInt(valueInput.value);
      valueInput.value = currentValue + 1;
    });
  });
});

// Increase decrement button end
// Jquery UI start
if ($("#datepicker").length) {
  $("#datepicker").datepicker();
}
// Jquery UI end

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

// input field show hide password end

// mobile menu start
jQuery("#mobile-menu").meanmenu({
  meanScreenWidth: "991",
  meanMenuContainer: ".mobile-menu",
  meanMenuOpen: "<i class='fal fa-bars'></i>",
  meanMenuClose: "<i class='far fa-times-circle'></i>",
});
// mobile menu end

// Dropdown select with Filter end
if ($(".search-box2").length) {
  function handleSelect(searchBox2, searchInput, searchItem) {
    searchInput.addEventListener("click", function (event) {
      searchBox2.classList.add("active");
      event.stopPropagation();
    });

    window.addEventListener("click", function () {
      searchBox2.classList.remove("active");
    });

    searchItem.forEach(function (searchItemSingle) {
      searchItemSingle.addEventListener("click", function () {
        const text = searchItemSingle.querySelector(".title");
        const textContent = text.textContent;
        searchInput.value = textContent;
        searchBox2.classList.remove("active");
      });
    });
  }

  const searchBox2 = document.querySelector("#search-box2");
  const searchInput = document.querySelector("#search-input");
  const searchItem = document.querySelectorAll("#search-result .search-item");
  handleSelect(searchBox2, searchInput, searchItem);

  // filter start
  function filterItems(inputId, items) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();

    items.forEach((item) => {
      const title = item.querySelector(".title");
      const txtValue = title.textContent || title.innerText;

      if (txtValue.toUpperCase().includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const filterSearchInputId = "search-input";
  const filterSearchInput = document.getElementById(filterSearchInputId);
  const items = document.querySelectorAll("#search-result .search-item");
  filterSearchInput.addEventListener("keyup", function () {
    filterItems(filterSearchInputId, items);
  });
}
// Dropdown select with Filter end
