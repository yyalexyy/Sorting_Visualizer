import React, { Component } from 'react';

class BubbleSort extends Component {
    videos = [];
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
                    swap(arr, j, j+1);
                }
            }
        }
    }

    render(){
        
        var videos_bars = this.videos.map(
            (value) => 
            <li className='bars' key={value}>
                {value}
            </li>
        );

        return(
            <div>
                <h1>Sort Sreen</h1>
                <ul className='bars_container'>
                    {videos_bars}
                </ul>
            </div>
        )
    }

}

export default BubbleSort;