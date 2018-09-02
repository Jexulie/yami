function Yami(){}

Yami.prototype.Array = {
    /**
     * Finds Different Elements and Returns in an Array.
     * @param {Array} arr1 first array
     * @param {Array} arr2 second array
     * @returns {Array}
     */
    findDifferentElement(arr1, arr2){
        var different = [];
        for(var i of arr1){
            if(!arr2.includes(i)){
                different.push(i)
            }
        }
        return different;
    },

    /**
     * Finds Same Elements and Returns in an Array.
     * @param {Array} arr1 first array
     * @param {Array} arr2 second array
     * @returns {Array}
     */
    findSameElement(arr1, arr2){
        var same = [];
        for(var i of arr1){
            if(arr2.includes(i)){
                same.push(i)
            }
        }
        return same;
    },

    /**
     * Finds Different Elements of Objects and Returns in an Array of Objects.
     * @param {Array} arr1 first array
     * @param {Array} arr2 second array
     * @returns {Array}
     */
    findDifferentObject(arr1, arr2){
        var different = [];
        var keys = getKeys(arr1);
        var values = getValues(arr1);
        var keys2 = getKeys(arr2);
        var values2 = getValues(arr2);
        var limit = keys.length > keys2.length ? keys.length : keys2.length;

        for(var i = 0; i < limit; i++){
            if(values[i] !== values2[i]){
                var obj = {}
                obj[keys[i]] = values[i]
                different.push(obj)
            }
        }

        function getKeys(a){
            var k = [];
            for(var i of a){
                k.push(Object.keys(i)[0]);
            }
            return k;
        }
        function getValues(a){
            var k = [];
            for(var i of a){
                k.push(Object.values(i)[0]);
            }
            return k;
        }

        return different;
    },

    /**
     * Finds Same Elements of Objects and Returns in an Array of Objects.
     * @param {Array} arr1 first array
     * @param {Array} arr2 second array
     * @returns {Array}
     */
    findSameObject(arr1, arr2){
        var same = [];
        var keys = getKeys(arr1);
        var values = getValues(arr1);
        var keys2 = getKeys(arr2);
        var values2 = getValues(arr2);
        var limit = keys.length > keys2.length ? keys.length : keys2.length;

        for(var i = 0; i < limit; i++){
            if(values[i] === values2[i]){
                var obj = {}
                obj[keys[i]] = values[i]
                same.push(obj)
            }
        }

        function getKeys(a){
            var k = [];
            for(var i of a){
                k.push(Object.keys(i)[0]);
            }
            return k;
        }
        function getValues(a){
            var k = [];
            for(var i of a){
                k.push(Object.values(i)[0]);
            }
            return k;
        }

        return same;
    }
}

Yami.prototype.Object = {}


module.exports = new Yami();