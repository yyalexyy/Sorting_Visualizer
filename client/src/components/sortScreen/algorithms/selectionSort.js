import { swap } from '../helper/swap.js';

export const selectionSort = async(array) => {
    let n = array.length;
    let moves = [];
    let i, j, min_idx;

    for(i = 0; i < n-1; i++) {
        min_idx = i;

        for(j = i + 1; j < n; j++) {
            if(array[j] > array[min_idx]) {
                min_idx = j;
            }
            moves.push([j, min_idx, false]);
        }

        await swap(array, i, min_idx);
        moves.push([i, min_idx, true]);
    }



    return moves;
}