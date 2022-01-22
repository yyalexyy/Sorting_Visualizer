import { swap } from '../helper/swap.js';

export const insertionSort = async(array) => {
    let n = array.length;
    let i, j, key;
    let moves = [];

    for(i = 1; i < n; i++) {
        key = array[i];
        j = i - 1;

        while(j >= 0 && array[j] < key) {
            await swap(array, j, j+1);
            moves.push([j, j+1, true]);
            j = j - 1;
        }

        array[j+1] = key;
    }


    return moves;
}