let operator = document.getElementById("model")
let buttonopen = document.getElementById("hehe")
let closeicon =document.getElementById("icon")

buttonopen.onclick = function() {

    operator.style.display ="block"
}
closeicon.onclick = function() {
    operator.style.display ="none"
}
window.onclick = function(e){
if(e.target.id === "model"){
    operator.style.display ="none"
}
}