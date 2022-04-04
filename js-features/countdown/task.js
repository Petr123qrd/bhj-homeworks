const addText = function(){
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
}
    setInterval(addText, 1000)

    setTimeout (
        () => {
            alert( "Вы победили в конкурсе!" );
        },
        60 * 1000
    );

    