var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var Name = popup.querySelector("[name=Name]");
var Email = popup.querySelector("[name=Email]");
var Text = popup.querySelector("[name=Text]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("Name");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-write-us-show");
  if (storage) {
    Name.value = storage;
    Email.focus();
  } else {
    Name.focus();
  }
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-write-us-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt) {
  if (!Name.value || !Email.value || !Text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("Name", Name.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-write-us-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-write-us-show");
      popup.classList.remove("modal-error");
    }
  }
});
var linkMap = document.querySelector(".popup-big-map");
var popupMap = document.querySelector(".pop-up-big-map");
var closeMap = popupMap.querySelector(".close-map");
linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("pop-up-big-map-show");
});
closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("pop-up-big-map-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("pop-up-big-map-show")) {
      evt.preventDefault();
      popupMap.classList.remove("pop-up-big-map-show");
    }
  }
});
