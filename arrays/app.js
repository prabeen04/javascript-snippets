const arr = [1, 2, 3, 4, 5, 5, 6, 11, 11, 11, 34, 65, 77]

function findDuplicateAndItsIndexes(arr, num) {
    if (!Array.isArray(arr) || !num) {
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

console.log(findDuplicateAndItsIndexes(arr, 11))