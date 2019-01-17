// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(D, T) {
    let table = document.getElementsByTagName('table')[0]
    let redRowCount = 0;
    let wrongRedRowCount = 0;
    let overdueCount = 0;
    let count = 0;
    for (var i = 0, row; row = table.rows[i]; i++) {
        let list = row.getElementsByTagName('td')
        let issuedDate = new Date(list[1].innerHTML);
        let returnedDate = new Date(list[2].innerHTML);
        if (row.getAttribute('style') === 'background-color: red') {
            redRowCount++
            if ((daysBetween(issuedDate, returnedDate) < T || daysBetween(issuedDate, new Date(D)) < T)  ) {
                wrongRedRowCount++
            }
        }

        if (daysBetween(issuedDate, returnedDate) > T || daysBetween(issuedDate, new Date(D)) > T) {
            overdueCount++
        }
    }
    return (overdueCount - (redRowCount - wrongRedRowCount)) 
}

const daysBetween = function (date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);
    //   console.log(days)
    return days;
}










