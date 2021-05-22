/**
 * Binary search using recursive algorithm
 */
var binarySearch = function search(array, searchedElement, lowIndex, highIndex) {
  if (arguments.length === 2) {
    // this code is called in the first time using binarySearch function
    // inititalize value for lowIndex and highIndex
    lowIndex = 0;
    highIndex = array.length - 1;
  }

  // get middle index
  var middleIndex = Math.ceil((lowIndex + highIndex) / 2);

  if (highIndex < lowIndex) {
    // that mean no items in array need to search
    return -1;
  }

  if (highIndex === lowIndex) {
    // that mean just only 1 item in array need to check
    if (searchedElement === array[middleIndex]) {
      return middleIndex;
    } else {
      return -1;
    }
  }

  if (searchedElement === array[middleIndex]) {
    return middleIndex;
  } else if (searchedElement < array[middleIndex]) {
    // search in left hafl array
    return search(array, searchedElement, lowIndex, middleIndex - 1);
  } else {
    // search in right hafl array
    return search(array, searchedElement, middleIndex + 1, highIndex);
  }
};
