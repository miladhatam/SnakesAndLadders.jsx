# SnakesAndLadders.jsx
A photoshop Script to autogenerate numbers(1-100) from down below with uncommon sorting type of this specific game( It's a simple code for my students to teach them coding in Photoshop better).

Instruction: Create text layers form 1-10 for first row and then duplicate them 9 times till number 91-100 then run the script as well.

//Code By Milad Hatam - MiladHatam@gmail.com
var rowSwitch = false;
var itemsNumber = 100;
var itemCounter = 100;
var row = 0;
var col = 0;
var aDoc = app.activeDocument;
for (j = 9; j >= 0; j--) {
    if (rowSwitch) {
        rowSwitch = false;
    } else {
        rowSwitch = true;
    }
    row++;
    for (i = 9; i >= 0; i--) {
        itemCounter--;
        if (rowSwitch) {
            aDoc.layers[itemCounter].textItem.contents = itemsNumber - itemCounter;
        } else {
            aDoc.layers[itemCounter].textItem.contents = row * 10 - col;
        }
        col++;
    }
    col = 0;
}
//Code By Milad Hatam
