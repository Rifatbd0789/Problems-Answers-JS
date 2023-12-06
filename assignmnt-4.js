function cubeNumber(number) {
    if (typeof number !== "number") {
        return "please input a valid number";
    } else {
        let cube = Math.pow (number, 3);
        return cube;
    }
}
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "please provide a valid string to calculate";
    } else {
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }
}
function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i+1] < 0 ) {
            return 'Invalid Input';
        } else {
            if (arr[i] < arr[i+1]) {
                let temp  = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                return arr;
            } 
            else if (arr[i] === arr[i+1]){
                return 'equal';
            }
            else {
                return arr;
            }
        }
    }
}
function findAddress(obj) {
    if (obj.street === undefined) {
        obj.street = '__'
    } 
    if(obj.house === undefined){
        obj.house = '__'
    }
    if(obj.society === undefined){
        obj.society = '__'
    }
    let x =obj.street+','+obj.house+','+obj.society;
    return x;
}
function canPay(changeArray, totalDue) {
    if (changeArray.length <=0) {
        return 'Value is missing!! please input value in Array';
    } else {
        let sum = 0;
        for (const val of changeArray) {
            sum = sum + val;
        }
        if (sum > totalDue) {
            return true;
        } else {
            return false;
        }
    }
}