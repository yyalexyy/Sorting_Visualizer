import React, { Component } from 'react';

class BubbleSort extends Component {
    constructor(props) {
        super(props);
    }

    swap(arr, val1, val2) {
        var temp = arr[val1];
        arr[val1] = arr[val2];
        arr[val2] = temp;
    }

    bubble_sort(arr) {
        var n = arr.length;
        var i, j;
        
        for(i = 0; i < n-1; i++) {
            for(j = 0; j < n-i-1; j++) {
                if(arr[j] > arr[j+1]) {
                    this.swap(arr, j, j+1);
                }
            }
        }
    }

    render(){
        console.log("IN bubble_sort.js")

        return(
            <div>
                <h1>In Bubble Sort</h1>
            </div>
        )
    }

}

export default BubbleSort;