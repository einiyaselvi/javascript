/* 
splice is to add or remove elements from an array.
It modifies the original array and returns the removed elements.
(it will change orginal array)

removed_elements = Splice(start, length, new elements)
*/

const n1=[1,2,3,4,5,6,7,8,9,10];
console.log(n1);
console.log("Splice :" + n1.splice(2, 3, 11, 12, 13));
let removedElements = n1.splice(2, 3, 11, 12, 13);
console.log("Removed elements: " + removedElements);
console.log("Modified array: " + n1);

const n2 = [1, 2, 3, 4, 5];
console.log(n2);
console.log("Splice :" + n2.splice(1, 2));      
// This will remove 2 elements starting from index 1
// The modified array will be [1, 4, 5] and the removed elements will be [2, 3]
let removedElements2 = n2.splice(1, 2);
console.log("Removed elements: " + removedElements2);
console.log("Modified array: " + n2);

const n3=[1, 2, 3, 4, 5];
console.log(n3);
removedElements3=n3.splice(2,2,[25,56,78]);
console.log(removedElements3);
console.log(n3);

const n4=[1, 2, 3, 4, 5];
console.log(n4);
n4.splice(2,0,100,200);
console.table(n4);
console.log(n4);