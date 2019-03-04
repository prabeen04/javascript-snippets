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
            if (wordMap[word] > commonWord) {
                commonWord = word
            }
        })
    // }
    return commonWord;
}

// console.log(mostCommonWord(sentence))

/**
 * merge two sorted arrays of integers
 * input: [1, 5, 8, 6] & [0, 3, 5, 7]
 * output: [0, 1, 3, 5, 5, 6, 7, 8]
 */

function mergeSortedArrays(arr1, arr2) {
    if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        console.log('icorrect inputs');
        return;
    }

    const sortedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 0;
    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr2Item)
        if (!arr2Item || arr1Item < arr2Item) {
            sortedArray.push(arr1Item);
            arr1Item = arr1[i]
            i++
        } else {
            sortedArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }


    return sortedArray;
}

// console.log(mergeSortedArrays([1, 5, 8, 6], [2, 3, 5, 7]))

/**
 * given an array find the first recurring character, if not return undefined
 * input: [1, 2, 4, 6, 1, 8, 10]
 * output: 1
 */

const recurringArr = [0, 2, 4, 6, 1, 8, 8, 10];
function firstRecurringChar(arr) {
    if (!Array.isArray(arr)) {
        console.log('incorrect input')
        return;
    }

    const charMap = {}

    for (let i = 0; i < arr.length; i++) {
        if (!charMap[arr[i]]) {
            charMap[arr[i]] = arr[i];
        } else {
            return charMap[arr[i]]
        }

    }
    return undefined;
}

// console.log(firstRecurringChar(recurringArr))


/**
 * check whether sum of two elements of an array presenting inside a array
 * input [1, 2, 5, 8, 11], output :false
 * input [1, 2, 3, 8, 11], output :true( 1+2 = 3)
 */

function sumOfElementExist(arr) {
    if (!Array.isArray(arr)) {
        console.log('incorrect input')
        return;
    }
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = arr[i]
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (map[sum]) {
                return true;
            }
        }
    }
    return false;
}

// console.log(sumOfElementExist([1, 2, 3, 5, 8, 11]))


/**
 * remove next immediate duplicate in an array
 * input: [100, 200, 200, 400, 500, 500, 500, 700, 800, 800]
 * output: [100, 200, 400, 500, 700, 800]
 */

function removeNextDuplicate(arr) {
    if (!Array.isArray(arr)) {
        console.log('incorrect input')
        return;
    }

    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            newArr.push(arr[i])
        }
        if (arr[i] !== newArr[newArr.length - 1]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeNextDuplicate([100, 100, 200, 200, 400, 100, 100, 500, 500, 500, 700, 800, 800]))