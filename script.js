document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Gracias por contactar a INGMAQ");

this.reset();

});