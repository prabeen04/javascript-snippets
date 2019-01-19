//flatten an nested array
let arr = [1, [[2], [3, [[4]]]]] //expected output:  [1, 2, 3, 4]

//list parent child
const data = [
    { name: 'Odisha', parent: null },
    { name: 'Bhubaneswar', parent: 'Odisha' },
    { name: 'Cuttack', parent: 'Odisha' },
    { name: 'CDA', parent: 'Cuttack' },
    { name: 'Odisha', parent: 'Bhubaneswar' },
    { name: 'Mangalabag', parent: 'Cuttack' },
    { name: 'Kalpana', parent: 'Bhubaneswar' },
    { name: 'Rasulgarh', parent: 'Bhubaneswar' },
]
//with for loop
function flatten() {
    var flat = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (var ii = 0; ii < arr[i].length; ii++) {
                if (Array.isArray(arr[i][ii])) {
                    for (var iii = 0; iii < arr[i][ii].length; iii++) {
                        for (var iiii = 0; iiii < arr[i][ii][iii].length; iiii++) {
                            if (Array.isArray(arr[i][ii][iii])) {
                                flat.push(arr[i][ii][iii][iiii]);
                            } else {
                                flat.push(arr[i][ii][iii]);
                            }
                        }
                    }
                } else {
                    flat.push(arr[i][ii]);
                }
            }
        } else {
            flat.push(arr[i]);
        }
    }
    return flat
}
// console.log(flatten(arr))

//with reduce
const flatWithReduce = function (array) {
    return array.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flatWithReduce(item))
        } else {
            acc.push(item)
        }
        return acc
    }, [])

}
console.log(flatWithReduce(arr))