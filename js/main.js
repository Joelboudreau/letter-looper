/*global alert, console*/

var letter;

// getting value
while (!letter){
    letter = prompt("Enter a letter please:");
}


// print triangle
for (var i = 0; i < 10; i += 1) {
        
    for(var k = 0; k <= i; k += 1){
        document.write(letter);
        
    }
    
    document.write("<br>");
}