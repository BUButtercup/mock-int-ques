//to further modularize, this function has separated out the sorting of the two array elements for readability
const swapEm = (arr, firstInd, secondInd) => {
    const temporary = arr[firstInd];
    arr[firstInd] = arr[secondInd];
    arr[secondInd] = temporary;
}

//here's our actual sorting function
const bubbleSort = (arr) => {
    const len = arr.length;

    //"swapped" will tell the program whether or not the inner loop had to swap any array elements upon it's iteration
    let swapped;

    //the outer loop iterates once over the array, executing the inner loop upon each element
    for(let i=0; i < len; i++){

        //the inner loop iterates over the array multiple times, swapping elements if they meet the contitional statement and changing the "swapped" value to true
        for(let j=0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                swapEm(arr, j, j+1);
                swapped = true;
            }
            //to visualize the changes with each iteration over inner loop during manual test, use below console.log 
            // console.log(`${j+1} time in j`, arr)
        }
        //to visualize the changes with each iteration over outer loop during manual test, use below console.log 
        // console.log(`${i+1} time in i`, arr)

        //if after the first inner loop "swapped" has not been changed to true, break because the array is sorted
        if(!swapped){

            //to help visualize manual sorted array test, use below console.log
            // console.log('sorted array', arr)
            break;
        }
    }
    return arr
}

//you can manually test with a sorted array using this console.log
// console.log(bubbleSort([2, 5, 11, 34, 65, 87, 105]))

//you can manually test with an unsorted array using this console.log
// console.log(bubbleSort([17, 63, 34, 100, 2, 8, 23]))

module.exports = bubbleSort;