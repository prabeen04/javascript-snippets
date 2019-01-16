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


console.log(solution(1, 2))