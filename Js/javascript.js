// Encapsular la sintaxis para obtener elementos
function $(id) {
    return document.getElementById(id);
}
window.onload = function() {
    document.onclick = function(e) {
            $("pop").style.display = "none";
        }
        // var pop = document.getElementById("pop");
    $("btn").onclick = function(e) {
            if (pop.style.display == "block") {
                                     // Juicio del estado actual
                $("pop").style.display = "none";
            } else {
                $("pop").style.display = "block";
            }
            var e = e || window.e;
            stopFunc(e);
        }
                     // Se usa para evitar que se oculte el área donde se hizo clic
    $("pop").onclick = function(e) {
        var e = e || window.e;
        stopFunc(e);
    }
}

function stopFunc(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}