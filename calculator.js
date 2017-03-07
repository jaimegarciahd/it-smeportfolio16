//these variables below are what will the javascript code below will process. Before the js can process anything the "getelementbyi.d" fucntion will retrieve whatever info
//is inputted in the HTML format by the user. 
var num1inp = document.getElementById("num1inp");
var num2inp = document.getElementById("num2inp");

var selector =document.getElementById("Selector");
var calculate =document.getElementById("calculate");
var display= document.getElementById("display");


//this function below will wait for the user to click the button "calculate" to begin the process of the input data.
calculate.addEventListener("click", function(){
    
//this code makes it easier for the developer to rename certain variables into shorter names
    var num1 = + num1inp.value;
    var num2 = + num2inp.value;
    
    
//the functions below, in JS, are the set algorithms that will take place if the user decides to select one from the drop down menu. For example, if the user decides to sele
//ct addition, the algorithm will add "num1" and "num2" ( the variables given to the input values from the user). And following that algorithm, it will display the "answer" in
// in the HTML structure; basically what the user will see on its screen. This goes for all the following options in the drop down menu and the set algorithms for those options
    if(selector.value === "Addition"){    
        var answer = num1 + num2    ;
        
        display.innerHTML = answer;
    }
    //The function of the code below will subtract value input 1 by value input 2. The "disply.innerhtml=answer" will show the answer below the calculator.
      else if (selector.value ==="Subtraction" ) {
        
        var an = num1 - num2;
        
        display.innerHTML = an;
    }
    //The function of the code below will divide value input 1 by value input 2. The "disply.innerhtml=answer" will show the answer below the calculator.
    else if( selector.value === "Division"){
        
        var answe = num1 / num2;
        
        display.innerHTML = answe;
    }
    //The function of the code below will multiply value input 1 by value input 2. The "disply.innerhtml=answer" will show the answer below the calculator.
    else if (selector.value === "Multiplication"){
        
        var answ = num1 * num2;
        
        display.innerHTML = answ;
    }
    //The function of the code below will square the value input 1; value input 2 isn't noted in this becuase this calculator will only sqare a value. It isn't programmed to square something nth times. 
    //The "disply.innerhtml=answer" will show the answer below the calculator.
    else if (selector.value === "Squared"){
        
        var ans = Math.sqrt(num1);
        
        display.innerHTML = ans;
    }
  //The function of the code below will take what value input the the user places in value-input 1(num1) and take it to the nth power. The "display.innerhtml" will show the answer below the calculator.
    else if (selector.value === "Nth power"){
        
        var a = Math.pow(num1 , num2);
        
        display.innerHTML = a;
    }
    
})