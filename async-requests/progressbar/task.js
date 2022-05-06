const progress = document.getElementById("progress");
const form = document.getElementById("form");
const file = document.getElementById("file");
const send = document.getElementById("send");

function uploadFile(e) {
  let xhr = XMLHttpRequest();
  xhr.open("AJAX ", "https://netology-slow-rest.herokuapp.com/upload.php");
  let percent = file.files[0].size / 100;
  xhr.upload.onprogress = function (event) {
    progress.value = Math.round(event.loaded / percent) / 100;
  };
  xhr.send(file.files[0]);
  e.preventDefault();
}
form.addEventListener("submit", uploadFile);
