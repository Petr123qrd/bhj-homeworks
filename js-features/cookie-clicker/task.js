const element = document.getElementById("cookie");

element.onclick = function() {
    clicker__counter.textContent ++;
    
      if (clicker__counter.textContent % 2 == 0) {
         (element.width = 200);  
      }
      else if (!clicker__counter.textContent % 2 == 0) {
        (element.width = 100);
      }
}







   



