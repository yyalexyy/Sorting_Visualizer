import React, { Component } from 'react';
import '../bars.css';
import '../bars_container.css';


class BubbleSort extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.contentArray);
    }

    async swap(arr, val1, val2) {
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
        console.log("IN bubble_sort.js");

        var videos_bars = this.props.contentArray.map((value) => 
            <li className='bars' id={value} key={value} style={{width : value}}>
                {value}
            </li>
        );

        return(
            <div>
                <ul className='bars_container'>
                    {videos_bars}
                </ul>
            </div>
        )
    }

}

export default BubbleSort;