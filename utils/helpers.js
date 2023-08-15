function reverseBubbleSort(arr){

    for (let i = arr.length -1; i > 0; i--) {

        if (arr[i] > arr[i-1]) {
            let a = arr[i];
            let b = arr[i+1];

            arr[i] = b;
            arr[i+1] = a;

            reverseBubbleSort(arr);
        }
    }

    return arr;
}

module.exports = reverseBubbleSort;