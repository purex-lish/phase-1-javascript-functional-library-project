function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let mappedArray = [];
    myEach(collection, function(value, key, collection) {
        mappedArray.push(callback(value, key, collection));
    });
    return mappedArray;
}

//myReduce function
   
function myReduce(collection, callback, acc) {
    let values;
    let startIndex = 0;

    // Determine if collection is array or object
    if (Array.isArray(collection)) {
        // Create a copy of array to avoid mutation
        values = collection.slice(); 
        if (acc === undefined) {
            acc = values.shift(); 
        }
    } else {
        values = Object.values(collection);
        if (acc === undefined) {
        // Use first value of object as initial accumulator if not provided
            acc = values.shift(); 
        }
        startIndex = acc === undefined ? 1 : 0; 
    }

    // Iterate over values and apply callback
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}

//,yFind function
function myFind(collection, predicate) {
    let foundValue;

    // Determine if collection is an array or an object
    if (Array.isArray(collection)) {
        // Iterating over an array
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                foundValue = collection[i];
            // Stops iteration as soon as a match is found
                break; 
            }
        }
    } else {
        // Iterating over an object
        for (const key in collection) {
            if (predicate(collection[key])) {
                foundValue = collection[key];
            // To Stop iteration as soon as a match is found
                break; 
            }
        }
    }
// Return the found value or undefined if no match found
    return foundValue; 
}

    

function myFilter(collection, predicate) {
    let filteredArray = [];
    myEach(collection, function(value, key, collection) {
        if (predicate(value)) {
            filteredArray.push(value);
        }
    });
    return filteredArray;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
//myKeys function
function myKeys(object) {
    return myMap(object, function(value, key) {
        return key;
    });
}

//myValues function
function myValues(object) {
    return myMap(object, function(value) {
        return value;
    });
}