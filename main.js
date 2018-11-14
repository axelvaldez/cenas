var citySelect = document.querySelector(".city-select");

window.onkeypress = function(e) {
  if (!e) e = event;
  if (e.keyCode == 115 || e.keyCode == 83) {
    if (citySelect.style.display == "block") {
      citySelect.style.display = "none";
    } else {
      citySelect.style.display = "block";
    }
  }
};
