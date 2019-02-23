class HashTable {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    _hash(key) {
        //generate a hash
    }

    set(key, value) {
        //set the key value pair
        this.data.push([key, value])
        this.length++
        return this
    }

    get(key) {
        //gey the value of the key
        for (let i = 0; i < this.data.length; i++) {
            if (key === this.data[i][0]) {
                console.log(this.data[i][1])
                return this.data[i][1]
            }
        }
        console.log('value not exists')
        return;
    }
}

const newMap = new HashTable();
newMap.set('CF', 'Rashford')
newMap.set('MF', 'Pogba')
newMap.set('DF', 'Jones')
newMap.get('DF')
console.log(newMap)