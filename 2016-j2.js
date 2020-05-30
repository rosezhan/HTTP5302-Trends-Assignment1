window.onload = function() {
    
    var magicSquare = document.forms[0];
    
    magicSquare.onsubmit = processForm;
    
    function processForm() {
        var r11 = parseInt(document.getElementById("r1-1").value);
        var r12 = parseInt(document.getElementById("r1-2").value);
        var r13 = parseInt(document.getElementById("r1-3").value);
        var r14 = parseInt(document.getElementById("r1-4").value);
        var r21 = parseInt(document.getElementById("r2-1").value);
        var r22 = parseInt(document.getElementById("r2-2").value);
        var r23 = parseInt(document.getElementById("r2-3").value);
        var r24 = parseInt(document.getElementById("r2-4").value);
        var r31 = parseInt(document.getElementById("r3-1").value);
        var r32 = parseInt(document.getElementById("r3-2").value);
        var r33 = parseInt(document.getElementById("r3-3").value);
        var r34 = parseInt(document.getElementById("r3-4").value);
        var r41 = parseInt(document.getElementById("r4-1").value);
        var r42 = parseInt(document.getElementById("r4-2").value);
        var r43 = parseInt(document.getElementById("r4-3").value);
        var r44 = parseInt(document.getElementById("r4-4").value);
        var square = document.getElementById("square");
        var result = document.getElementById("result");
        
        var row1 = parseInt(r11 + r12 + r13 + r14);
        var row2 = parseInt(r21 + r22 + r23 + r24);
        var row3 = parseInt(r31 + r32 + r33 + r34);
        var row4 = parseInt(r41 + r42 + r43 + r44);
        var col1 = parseInt(r11 + r21 + r31 + r41);
        var col2 = parseInt(r12 + r22 + r32 + r42);
        var col3 = parseInt(r13 + r23 + r33 + r43);
        var col4 = parseInt(r14 + r24 + r34 + r44);
        
        square.innerHTML = r11 + " " + r12 + " " + r13 + " " + r14 + "<br>" + r21 + " " + r22 + " " + r23 + " " + r24 + "<br>" + r31 + " " + r32 + " " + r33 + " " + r34 + "<br>" + r41 + " " + r42 + " " + r43 + " " + r44 + "<br>";
        
        if (row1 !== row2 !== row3 !== row4 !== col1 !== col2 !== col3 !== col4) //perhaps the problem is in that I used "not equals", though I tried === and that did not work either. 
        {
            result.innerHTML = "Not Magic";
        } else {
            result.innerHTML = "Magic Square";
        } 
        //I think I was on the right track but no matter what I tried, the result always returned "not magic"     
        return false;
    } //form
}//window.onload