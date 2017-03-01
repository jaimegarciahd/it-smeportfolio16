
//The variables below are what link the html structure and give it more details that make the calculator work. So the HTML just strucutres it but the java 
//below is linking it and everything after linking it will give it more values.
var usradd = document.getElementById("usradd");
var text = document.getElementById("text");
var sbmt = document.getElementById("Submit");
var disp = document.getElementById("disp");
var clearBtn = document.getElementById("clearBtn");
//the event listener below just makes whatever the input value to be submitted show up on the page. In this case, whatever is in the text box will be displayed
//and the computer will hear for the click of the "submit" button.
sbmt.addEventListener("click", function() {

    var newTask = usradd.value;
//These values/lines of code are what will appear in the drop down menu. This is what the user will be able to choose and that will be what affects how his 
//notes appear.
    if (text.value === "none") {
        disp.innerHTML += "<div>" + newTask + "</div>";
    }
    else if (text.value === "red") {
        disp.innerHTML += "<div style='color: #FF0000'>" + newTask + "</div>";
    }
    else if (text.value === "bold") {
        disp.innerHTML += "<div style='font: bold 20px/30px Times New Roman, serif'>" + newTask + "</div>";
    }
    else if (text.value === "underline") {
        disp.innerHTML += "<div style='text-decoration: underline'>" + newTask + "</div>";
    }
    else if (text.value === "italics") {
        disp.innerHTML += "<div style='font: italic 15px/30px Times New Roman, serif'>" + newTask + "</div>";
    }
});
//This is the same for the submit button. The computer will "wait" for the "clear" button to be clicked and then it will preform the action that button is
// instructed to do.
clearBtn.addEventListener("click", function() {
    disp.innerHTML = "";

});

//This is the same for the submit button. The computer will "wait" for a specific task on the to-do list to be clicked on and it will delete that tas.k
disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);

});
