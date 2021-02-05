function findSecondNum(arr){
    var sortedArray = arr.sort(function(a, b){return a-b});
    var uniqueArray = Array.from(new Set(sortedArray));
    return uniqueArray;
}
var arr1 = [1,2,3,4,5,65,6,6,6,6,3,2,1,0,1,1,1,2,2,2,28,6];
console.log(findSecondNum(arr1));