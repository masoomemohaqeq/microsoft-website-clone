// Searchbar
let searchCancelBtn = document.getElementById("search-cancel-btn");
let searchBtn = document.getElementById("search-btn");
let fullSearchBar = document.getElementById("full-search-bar");

searchCancelBtn.addEventListener("click", () => {
  fullSearchBar.style.display = "none";
});

searchBtn.addEventListener("click", () => {
  fullSearchBar.style.display = "flex";
});

// Initialize Swiper
var swiper = new Swiper(".swiper", {
  // spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
