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

/**
 * check whether a given string is a palindrome
 */

function isPalindrome(str) {
    if (typeof str !== 'string') {
        console.log('incorrect input');
        return;
    }
    if (str.length === 1) {
        return true;
    }
    str = str.replace(/\W/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

// console.log(isPalindrome('t  *# ete t'))

//what is the error
new Promise((resolve, reject) => {
    return resolve('resolved')
    throw new Error('error')
}).then(console.log(''))


//output === 2
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error') })
//     .catch(() => 1)
//     .then((x) => x + 1)
//     .then((x) => console.log(x))
//     .catch(console.error)
























//test

const questions = [
    ' Capital of India is ?',
    ' ( a + b )2 = ?',
    '2 * 3 = ?',
    '5 * 5 = ?',
    '100 * 0 = ?'
]


/**
 * New Delhi
Bangalore
Hyderabad

 */
class QuestionSet {
    constructor(data) {
        this.data = data;
        this.currentIndex = 0;
        this.isActive = true
    }

    next() {
        let newIndex = this.currentIndex + 1;
        if (newIndex < this.data.length) {
            // this.print(this.data[newIndex])
            this.currentIndex++;
        } else {
            this.print('you are in the last question ')
        }
    }
    prev() {
        let newIndex = this.currentIndex - 1;
        if (newIndex > 0) {
            // this.print(this.data[newIndex])
            this.currentIndex--;
        } else {
            this.print('you are in the first question')
        }
    }

    quit() {
        this.currentIndex = 0;
        this.isActive = false
        return;
    }

}

(function driver(questions) {
    let instance = new QuestionSet(questions);
    while (instance.isActive) {
        let key = instance.getInput()
        instance.print(instance.data[instance.currentIndex])
        if (key === 'N') {
            instance.next()
        }
        if (key === 'P') {
            instance.prev()
        }
        if (key === 'Q') {
            instance.quit()
        }
    }
})(questions)























































