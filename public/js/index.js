// Script untuk menghilangkan alert ketika alert muncul..

const alertDiv = document.getElementById("alert-div");

if(alertDiv !== null) {
    document.addEventListener("DOMContentLoaded", () => {
       setTimeout(() => {
        alertDiv.classList.add('hidden'); 
       }, 2500);
    });
}
