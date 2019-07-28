//Code By Milad Hatam - MiladHatam@gmail.com
const itemsNumber = 100;
var itemCounter = itemsNumber;
var rowSwitch = false; //Even and odd rows ( Numbers are counting zigzag)
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
