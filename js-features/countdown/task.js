const addText = function() {
      const timer = document.getElementById("timer");
          timer.textContent -= 1;
          if (timer.textContent == 0) {
              alert("Вы победили в конкурсе!");
              (timer.textContent = 60 );
          }  
}  

setInterval(addText, 1000)
    
