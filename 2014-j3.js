window.onload = function() {
    
    var doubleDice = document.forms[0];
    
    doubleDice.onsubmit = processForm;
    
    function processForm() {
        var rounds = parseInt(document.getElementById("rounds").value);
        var roll1Value = document.getElementById("roll1");
        var roll1 = (Math.floor(Math.random() * 6) + 1);
        var roll2 = (Math.floor(Math.random() * 6) + 1);
        var roll2Value = document.getElementById("roll2");
        var results = document.getElementById("results");
        
        for(var i=0;i<=rounds;i++) {
            roll1Value.innerHTML += roll1[i] + "<br>";
            roll2Value.innerHTML += roll2[i] + "<br>";
        } //i was trying to randomise the dice rolls based on the number of rounds entered, it unfortunately only ever return one value. Doing it this way, would randomise the values, but  i think it would be difficult to compare values the way the question required, and also to subtract from the total.
        
        if((100 - roll1) > (100 - roll2)) {
            results.innerHTML = "Player 1 is the winner"; 
        } else {
            results.innerHTML = "Player 2 is the winner";
        }
        return false;    
    } 
}