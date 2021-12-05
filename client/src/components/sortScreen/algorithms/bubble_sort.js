import { swap } from '../helper/swap.js';


export const bubble_sort = async(array) => {
    let n = array.length;
    let moves = [];

    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                await swap(arr, j, j+1);
                moves.push([j, j+1, true]);
            } else {
                moves.push([j, j+1, false]);
            }
        }
    }

    return moves;
}