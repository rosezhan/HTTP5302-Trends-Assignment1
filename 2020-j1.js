window.onload = function() {
   
    var treats = document.forms[0];
    
    treats.onsubmit = processForm;
    
    function processForm() {
        var smallTreats = parseInt(document.getElementById("small-treats").value);
        var mediumTreats = parseInt(document.getElementById("med-treats").value);
        var largeTreats = parseInt(document.getElementById("large-treats").value);
        var error = document.getElementById("error-log");
        var success = document.getElementById("success-message");
        var total = ((smallTreats*1) + (mediumTreats*2) + (largeTreats*3));
    
        if (smallTreats<0 || smallTreats>10 || mediumTreats<0 || mediumTreats>10 || largeTreats<0 || largeTreats>10) {
            error.innerHTML = "Invalid value entered";
            error.style.background = "red";
        } else {
            error.innerHTML = "Small treats:" + smallTreats + "<br>" + "Medium treats:" + mediumTreats + "<br>" + "Large treats:" + largeTreats;
            error.style.background = "white";
        }
        
        console.log(smallTreats);
        
        if (total >= 10) {
            success.innerHTML="Barley is happy.";
        } else {
            success.innerHTML="Barley is sad.";  
        }
        
        console.log(total);
        return false;
        
    
    } //processform
} //window.onload