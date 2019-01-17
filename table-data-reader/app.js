function solution(D, T) {
    let table = document.getElementsByTagName('table')[0]
    let rowCount = 0;
    let wrongDataCount = 0;
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.getAttribute('style') === 'background-color: tomato') {
            rowCount++
        }
        let list = row.getElementsByTagName('td')
        let issuedDate = new Date(list[1].innerHTML);
        let returnedDate = new Date(list[2].innerHTML);
        if (issuedDate - returnedDate < 0) {
            console.log('dates are same', returnedDate)
            wrongDataCount++
        }
    }
    return rowCount - wrongDataCount
}

new Date('2018-10--09')
console.log(solution(1, 2))

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(D, T) {
    let table = document.getElementsByTagName('table')[0];
    let rows = table.getElementsByTagName('tr');
    const books = [];
    let overdueBooks = 0;
    let wrongOverdues = 0;
    for (var i = 0; i < rows.length; i++) {
        let style = rows[i].getAttribute('style');
        if (style === 'background-color: red') {
            overdueBooks++;
        }
        for (var j = 0, col1, col2; col1 = rows[j][1], col2 = rows[j][2]; j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            if (new Date(col1.innerHTML) === new Date(col2.innerHTML)) {
                wrongOverdues++
            }
        }
    }
    return overdueBooks - wrongOverdues
}
