let table = document.getElementsByTagName('table')[0]
let rowCount = 0;
let wrongDataCount = 0;

// console.log(table)
// for (let row of table.rows) {
//     if (row.getAttribute('style') === 'background-color: tomato') {
//         rowCount++
//     }
//     // for (let cell of row.cells) {
//     //     let value = cell.innerText;
//     //     console.log(value)
//     // }

//     for (j = 0; j < 3; j++)
//     {
//         y = table[i].cells;
//         //do something with cells in a row
//         y[j].innerHTML = "";
//     }
// }
for (var i = 0, row; row = table.rows[i]; i++) {
    if (row.getAttribute('style') === 'background-color: tomato') {
        rowCount++
    }
    console.log(row)
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[i]; j++) {
        // console.log(col)
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
    }
}
console.log(rowCount)