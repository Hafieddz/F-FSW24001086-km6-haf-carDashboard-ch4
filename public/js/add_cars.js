const inputCapacity = document.getElementById("input-capacity");
const capacityDiv = document.getElementById("capacity-div")
const photoDiv = document.getElementById("photo-div");
const inputPhoto = document.getElementById('input-photo');
const formBtn = document.getElementById('form-btn');
const photoInputAlert = document.getElementById('photo-input-alert');

function setCapacityInput(type) {
  inputCapacity.value = type;
  capacityDiv.innerText = type;
}

photoDiv.addEventListener('click', () => {
  inputPhoto.click();
})

inputPhoto.onchange = function(e) {
  const file = this.value;
  const fileName = file.replace(/.*[\/\\]/, '');
  photoDiv.innerText = fileName;
}

formBtn.onclick = (e) => {
  if(inputPhoto.value === '') {
    photoInputAlert.classList.remove('hidden');
  }
}