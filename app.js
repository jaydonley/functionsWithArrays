// --------- #4 ------------ 

var newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// --------- #5 ------------

addToArray = (arr, val) => {
    arr.push(val);
    return arr;
}
console.log(addToArray(newArr, 10));

// -------- #6 ---------------

spliceFunction = (arr) => {
    arr.splice(7);
    return arr;
}
console.log(spliceFunction(newArr));

// --------- #7 ------------

sliceNdiceFunc = (arr) => {
    let newArr = arr.slice(0, 2);
    return newArr;
}
console.log(sliceNdiceFunc(newArr));