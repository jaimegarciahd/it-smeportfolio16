
var num1inp = document.getElementById("num1inp");
var num2inp = document.getElementById("num2inp");

var selector =document.getElementById("Selector");
var calculate =document.getElementById("calculate");
var display= document.getElementById("display");



calculate.addEventListener("click", function(){
    

    var num1 = + num1inp.value;
    var num2 = + num2inp.value;
    
    if(selector.value === "Addition"){    
        var answer = num1 + num2    ;
        
        display.innerHTML = answer;
    }
    else if( selector.value === "Division"){
        
        var answe = a / num2;
        
        display.innerHTML = answe;
    }
    else if (selector.value === "Multiplication"){
        
        var answ =num1 * num2;
        
        display.innerHTML = answ;
    }
    else if (selector.value === "Squared"){
        
        var ans = Math.pow(num1 ,num2);
        
        display.innerHTML = ans;
    }
    else if (selector.value ==="Subtraction" ) {
        
        var an = num1 - num2;
        
        display.innerHTML = an;
    }
    else if (selector.value === "Nth power"){
        
        var a = Math.pow(num1 , 1/num2);
        
        display.innerHTML = a;
    }
    

})