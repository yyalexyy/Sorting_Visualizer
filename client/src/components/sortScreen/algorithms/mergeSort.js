
export const mergeSort = async(array) => {
    let n = array.length;
    let moves = [];
    mergeSort_devided(array,moves,0,n-1);
    return moves;
}

const mergeSort_devided = async(array,moves,start,end) => {
    if (start===end) {
        return;
    }
    let mid = Math.floor((start+end)/2);
    await mergeSort_devided(array,moves,start,mid);
    await mergeSort_devided(array,moves,mid+1,end);
    let i = start,j = mid+1;
    let ordered_sequence = [];
    while(i<=mid&&j<=end) {
        if(array[i] < array[j]) {
            ordered_sequence.push(array[j++]);
        } else {
            ordered_sequence.push(array[i++]);
        }
    }
    while(i<=mid) {
        ordered_sequence.push(array[i++]);
    }
    while(j<=end) {
        ordered_sequence.push(array[j++]);
    }
    let range = [];
    for (let k = start; k <= end; k++) {
        range.push(k);
    }
    for (let k = 0; k <= end-start; k++) {
        array[start+k] = ordered_sequence[k];
        moves.push([start+k,ordered_sequence[k],range,"MERGESORT"]);
    }
}