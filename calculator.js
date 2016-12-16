


var selector =document.getElementById("Selector");
var calculate =document.getElementById("calculate");
var display= document.getElementById("display");



calculate.addEventListener("click", function(){
    

    var input1 = +a.value;
    var input2 = +b.value;
    
    if(selector.value === "Addition"){
        
        var answer = input1 + input2    ;
        
        display.innerHTML = answer;
    }
    else if( selector.value === "Division"){
        
        var answe = a / input2;
        
        display.innerHTML = answe;
    }
    else if (selector.value === "Multiplication"){
        
        var answ = a * b;
        
        display.innerHTML = answ;
    }
    else if (selector.value === "Squared"){
        
        var ans = Math.pow(a ,b);
        
        display.innerHTML = ans;
    }
    else if (selector.value ==="Subtraction" ) {
        
        var an = a - b;
        
        display.innerHTML = an;
    }
    else if (selector.value === "Nth power"){
        
        var a = Math.pow(input1 , 1/input2);
        
        display.innerHTML = a;
    }
    

})