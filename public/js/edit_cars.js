const inputCapacity = document.getElementById("input-capacity");
const capacityDiv = document.getElementById("capacity-div")
const photoDiv = document.getElementById("photo-div");
const inputPhoto = document.getElementById('input-photo');

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