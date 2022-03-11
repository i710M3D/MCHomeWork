var arr = [-3,8,7,6,5,-4,3,2,1];
var arr2 = [];
function min(arr) {
    var min = 0 ;
    for (let j = 0; j < arr.length ; j++) { if (arr[j+1]<arr[min])  { min = j+1 ;}   }
    return min;
}
const Len = arr.length;
for (let i = 0; i < Len; i++) {
    var remove = min(arr);
    arr2.push(arr[remove]);
    arr.splice(remove,1);
}
arr = arr2;
console.log(arr);