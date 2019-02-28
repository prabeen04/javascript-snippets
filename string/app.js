/**
 * reverse a string
 */

function stringReverse1(str) {
    if (typeof str !== 'string') {
        console.log('incorrect input');
        return;
    }
    if (str.length === 1) {
        return str;
    }
    return str.split('').reverse().join('');
}

// console.log(stringReverse1('123456'))

function stringReverse2(str) {
    if (typeof str !== 'string') {
        console.log('incorrect input');
        return;
    }
    if (str.length === 1) {
        return str;
    }

    let strArr = str.split('');
    let reversedString = '';
    for (let i = strArr.length - 1; i >= 0; i--) {
        reversedString += strArr[i]
    }

    return reversedString
}

// console.log(stringReverse2('0123456'))

function stringReverse3(str) {
    if (typeof str !== 'string') {
        console.log('incorrect input');
        return;
    }
    if (str.length === 1) {
        return str;
    }
    let strArr = str.split('');
    return strArr.reduce((acc, char, i) => {
        return char + acc
    }, '')
}

// console.log(stringReverse3('9'))