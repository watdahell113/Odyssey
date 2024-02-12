var desconoff = false
var cononoff = false
function showdesc() {
    
    if (desconoff === false) {
        document.getElementById("desc").style.opacity = "1"
        desconoff = true
        console.log("on")
    } else if (desconoff === true) {
        document.getElementById("desc").style.opacity = "0"
        desconoff = false
        console.log("off")
    }
};

function showcon() {
    
    if (cononoff === false) {
        document.getElementById("controlls").style.opacity = "1"
        cononoff = true
        console.log("on")
    } else if (cononoff === true) {
        document.getElementById("controlls").style.opacity = "0"
        cononoff = false
        console.log("off")
    }
};