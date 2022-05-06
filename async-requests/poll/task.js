const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState == xhr.DONE && this.status == 200) {
    var data = JSON.parse(this.responseText).data;
    pollTitle.innerText = data.title;

    for (let answer of data.answers) {
      const button = `<button class="poll__answer" onclick="alert('Спасибо, ваш вопрос засчитан!');">${answer}</button>`;
      pollAnswers.insertAdjacentHTML("beforeend", button);
    }
  }
});
