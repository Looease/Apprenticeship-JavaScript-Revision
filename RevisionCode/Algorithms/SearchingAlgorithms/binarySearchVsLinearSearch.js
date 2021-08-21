const linearSearch = (list, item) => {
    for (const [i, element] of list.entries()) {
      if (element === item) {
         return console.log(list[i])
      }
    }
    console.log('not found')
  }
array = ['aberrational','aberrations','aberrative','aberrator','aberrometer']

linearSearch(array, 'aberrative')

const binarySearch = (array, target) => {
  let upperbound = 0;
  let lowerbound = array.length - 1;
  while(upperbound <= lowerbound) {
    let middle = Math.floor((upperbound + lowerbound) / 2);
    if(target === array[middle]) {
      return console.log("Target was found at index number: " + middle);
    }
    if(target > array[middle]) {
      console.log("Searching the right side > ")
      upperbound = middle + 1;
    }
    if(target < array[middle]) {
      console.log("Searching the left side < ")
      lowerbound = middle - 1;
    }
    else {
      console.log("Still searching ")
    }
  }
  console.log("Target value not found :( :( ");
}
array = ['aberrational','aberrations','aberrative','aberrator','aberrometer']
binarySearch(array, 'olaf')