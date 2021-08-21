const {
    performance
} = require('perf_hooks');

function selectionSort(array) {
    let len = array.length;
    const startTime = performance.now(); 
    for(let i = 0; i < len; i++) {

        // Find the smallest element of the unsorted part of the array
        let minIndex = i;   // Index of the minimum element
        for(let j = i + 1; j < len; j++){
            if(array[j] < array[minIndex]) {    // Compare the j-th element with current minimum
                minIndex = j;
            }
        }

        // Swap the found minimum with element i
        if (minIndex !== i) {   // Don't bother swapping if element i is the minimum
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    const newTime = performance.now();
    const resultTime = newTime - startTime;
    console.log(resultTime);
    
    return array;
}

let myArray = [4, 5, 6, 10, 9];

console.log(selectionSort(randomNumber(1000)));


function randomNumber(length){
    var randomArray = [...Array(length)].map(() => Math.floor(Math.random() * 10));
    return randomArray; 
};

//console.log(randomNumber(15));

  



