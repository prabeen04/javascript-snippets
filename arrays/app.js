const arr1 = [1, 2, 3, 4, 5, 5, 6, 11, 11, 11, 34, 65, 77]

//find count of number in a given array and its indexes
function findDuplicateAndItsIndexes(arr, num) {
    if (!Array.isArray(arr) && !num) {
        console.log('incorrect input')
        return
    }
    const obj = {
        count: 0,
        indexes: []
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === num) {
            obj['count']++
            obj['indexes'].push(i)
        }
    }

    return obj;
}

// console.log(findDuplicateAndItsIndexes(arr1, 11))

/**
 * given an sorted array of integers re-arrange duplicate numbers to the start with maximum
 * no of duplicates to start
 *  input: [1, 4, 5, 5, 6, 11, 11, 11, 34,]
 *  output: [11, 11, 11, 5, 5, 1, 4, 6, 34,]
 */
const arr2 = [1, 2, 3, 4, 5, 5, 6, 11, 11, 11, 34, 65, 77]

function sortDuplicates(arr) {
    if (!Array.isArray(arr)) {
        console.log('incorrect input')
        return
    }
    const duplicateArr = [];
    const uniqArr = [];
    const map = {}
    //filter duplicate arrays
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1
        } else {
            map[arr[i]]++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === 1) {
            uniqArr.push(arr[i])
        } else {
            duplicateArr.push(arr[i])
        }
    }
    console.log(map)
    return [...duplicateArr, ...uniqArr]

}

// console.log(sortDuplicates(arr2))

/**
 * remove duplicates in an array
 */

const arr3 = [1, 2, 3, 4, 5, 5, 6, 11, 11, 11, 34, 65, 77]

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        console.log('incorrect input')
        return
    }
    const seen = {};
    const uniqArr = [];

    //filter duplicate arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true
        }
    }
    for (let item in seen) {
        uniqArr.push(Number(item))
    }
    return uniqArr;

}

// console.log(removeDuplicates(arr3))


/**
 * given two array check is they have any common Item
 * input1 [1, 2, 5, 9]
 * input2 [11, 21, 15, 89]
 * return false
 * 
 * input1 [1, 2, 5, 9]
 * input2 [11, 21, 5, 89]
 * return true
 */

const array1 = [1, 2, 5, 9]
const array2 = [11, 21, 15, 89]
const array3 = [11, 21, 5, 89]

function commonElementExists(arr1, arr2) {
    console.log(arr2.length)
    const obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    console.log(obj)
    for (let j = 0; j < arr2.length; j++) {
        console.log('inside loop')
        if (arr2[j] in obj) {
            console.log('insideIF', arr2[j])
            return true
        }
    }
    return false
}

// console.log(commonElementExists(array3, array2))



/**
 * given an array of unsorted words and a word find if that word exists
 */
const words = ['paul', 'marcus', 'herera', 'matic', 'martial', 'lingard', 'de gea']

function wordExists(arr, word) {
    if (!Array.isArray(arr) && !word) {
        console.log('incorrect input')
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    return false
}

// console.log(wordExists(words, 'matic'))

/**
 *  Given a string of words, return the most common used word in it.
 */

const sentence = 'abc def ghi is not abc fed ihpg fed ihg fed ihg';

function mostCommonWord(sentence) {
    const wordArray = sentence.split(' ')
    let commonWord = ''
    let wordMap = {}

    for (let i = 0; i < wordArray.length; i++) {
        if (!wordMap[wordArray[i]]) {
            wordMap[wordArray[i]] = 1
        } else {
            wordMap[wordArray[i]]++
        }
    }
    // console.log(wordMap)
    // for(let word in wordMap){
    Object.keys(wordMap)
        .forEach((word) => {
            console.log('inside IIII', wordMap[word])
            if (wordMap[word] > commonWord) {
                commonWord = word
            }
        })
    // }
    console.log(commonWord)
    return commonWord;
}

console.log(mostCommonWord(sentence))