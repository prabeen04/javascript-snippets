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

console.log(findDuplicateAndItsIndexes(arr1, 11))

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

    //filter duplicate arrays
    for (let i = 0; i < arr.length - 1; i++) {

    }
    return [...duplicateArr, ...uniqArr]

}

console.log(sortDuplicates(arr2))

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
    for(let item in seen){
        uniqArr.push(item)
    }
    console.log(seen)
    return uniqArr;

}

console.log(removeDuplicates(arr3))