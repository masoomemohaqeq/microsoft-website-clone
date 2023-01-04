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
