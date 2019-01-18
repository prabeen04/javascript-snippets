//flatten an nested array
let arr = [1, [2], [3, [[4]]]] //expected output:  [1, 2, 3, 4]

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

//with reduce
const flatWithReduce = function (array) {
   return array.reduce((acc, item) => {
       console.log('first loop', acc)
        if (Array.isArray(item)) {
            console.log('is array', item)
            flatWithReduce(item)
        } else {
            acc.push(item)
        }
        return acc
    }, [])
}
console.log(flatWithReduce(arr))
console.log(flatten(arr))