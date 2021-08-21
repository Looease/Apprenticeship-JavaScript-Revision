// const insertionSort = (array) => {
//     let len = array.length;
//     for(i = 0; i < len; i++){
//         let minIndex = i;
//         for( j = i-1; j >= 0; j--){
//             if(array[minIndex] < j ){
//                 minIndex = j;
//             }
//         }
//         if(minIndex != i){
//             let temp = array[i];
//             array[i] = array[minIndex];
//             array[minIndex] = temp;
//         }
    
//     }        
        
// }

// let testArray = [5, 10, 20, 14]

// insertionSort(testArray);

// Insertion sort
const numArray = [5,3,8,5,1,9]

for (let i = 0; i < numArray.length; i++) {
    let comparisonIndex = i;

    for (let j = i-1; j >= 0; j--) {
       if (numArray[j] > numArray[comparisonIndex]) {
        let temp = numArray[j];
        numArray[j] = numArray[comparisonIndex];
        numArray[comparisonIndex] = temp;
        comparisonIndex -= 1;
       }

    }
}

console.log(numArray)