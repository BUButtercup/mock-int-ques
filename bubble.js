const swapEm = (arr, firstInd, secondInd) => {
    const temporary = arr[firstInd];
    arr[firstInd] = arr[secondInd];
    arr[secondInd] = temporary;
}

const bubbleSort = (arr) => {
    const len = arr.length;
    let swapped;

    for(let i=0; i < len; i++){
        for(let j=0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                swapEm(arr, j, j+1);
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr
}

// console.log(bubbleSort([17, 63, 34, 100, 2, 8, 23]))

module.exports = bubbleSort;