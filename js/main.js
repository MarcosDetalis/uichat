var chbox = document.getElementById("mensaje");
chbox.addEventListener("click", function () {
 
 document.getElementById("icono").classList.add("active") 
 document.getElementById("send").classList.remove("active")
 document.getElementById("cerrar").classList.remove("active")

});