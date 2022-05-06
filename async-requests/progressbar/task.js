const progress = document.getElementById("progress");
const form = document.getElementById("form");
const file = document.getElementById("file");
const send = document.getElementById("send");

function uploadFile(e) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST ", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / 1000000;
  };
  xhr.send(file.files[0]);
  e.preventDefault();
}
form.addEventListener("submit", uploadFile);
