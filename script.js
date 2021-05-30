console.log("I loaded correctly")

// creating an array like object
var row = document.getElementsByClassName("custom-middle");

var currentHour = parseInt(moment().format('H'));

console.log(currentHour);

checkHour()

function checkHour() {
    for (var i = 0; i < row.length; i++) {
        var currentRow = row[i]
        var rowID = currentRow.getAttribute("id")
        var compareId = parseInt(rowID)
        if (compareId === currentHour) {
            currentRow.classList.add("red")
        } else if (compareId > currentHour) {
            currentRow.classList.add("gray")
            
        } else {
            currentRow.classList.add("white")
        }
    } 
}