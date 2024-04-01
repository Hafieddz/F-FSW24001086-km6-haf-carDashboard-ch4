const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const alertDiv = document.getElementById("alert-div");

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchInput.value) {
        window.location.href = `/cars?nama=${searchInput.value.trim()}`
    }
})

if (alertDiv !== null) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      alertDiv.classList.add("hidden");
    }, 2500);
  });
}
