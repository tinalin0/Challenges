// Challenges without Parameters - prompts
let array = [];

// 1. Includes
function includes() {
    let item = prompt("What do you want to find?");
    for (let i = 0; i < array.length; i++) {
        if (names[i] === item) {
            return true;
        }
    }
    return false;
}

// 2. Index Of
function indexOf() {
    let item = prompt("what do you want to find?");
    for (let i = 0; i < array.length; i++) {
        if (names[i] === item) {
            return i;
        }
    }
    return -1;
}

// 3. Reverse
function reverse() {
    let reverseArray = [];
    for (let i = array.lengthj; i > 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

// 4. Slice
function slice() {
    let start = prompt("Where to start?");
    let stop = prompt("Where to stop?");
    let arraySliced = []
    for (let i = start; i < stop; i++) {
        arraySliced.push(array[i]);
    }
    return arraySliced;
}

// 5.Concat
function concat() {
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}

// 6.Join
function join() {
    let sep = prompt("How to join?");
    let joinedString = "";
    for (let i = 0; i < array.length; i++) {
        joinedString += `${array[i]}${sep}`;
    }
    return joinedString;
}

// 7. Max
function max() {
    let maxNum;
    for (let i = 0; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i];
        }
    }
    return maxNum;
}