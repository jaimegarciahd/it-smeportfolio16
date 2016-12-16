

var Colour = document.getElementById("Colour")
var colourchangeclick = document.getElementById("colourchangeclick")

colourchangeclick.addEventListener("click", function(){


    document.body.style.backgroundColor = Colour.value;
    
})