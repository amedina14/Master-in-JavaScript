'use strict'

window.addEventListener('load', () => {

    /**
     * Timers:
     * 
     * setTimeout: se ejecuta solo 1 ves.
     */
    function intervalo() {
        var tiempo = setInterval(() => {
            console.log("Set interval eject");
            
            var header = document.querySelector("h1");

            if (header.style.fontSize == "50px") {
                header.style.fontSize = "35px";
            } else {
                header.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", () => {
        alert("has parado la bomba");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", () => {
        alert("has iniciado la bomba");
        intervalo();
    });

});
