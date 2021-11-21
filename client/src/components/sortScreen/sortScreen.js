import React, { Component } from 'react';
import './bars_container.css';

import BubbleSort from './bubble_sort/bubble_sort.js';
import SelectionSort from './selection_sort/selection_sort.js';
import InsertionSort from './insertion_sort/insertion_sort.js';
import MergeSort from './merge_sort/merge_sort.js';

class SortSreen extends Component {
    videos = [];

    constructor(props) {
        super(props);
        this.state = {
            sortingMethod: props.location.aboutProps.sortingMethod,
            category: props.location.aboutProps.category,
            value: props.location.aboutProps.value,
        }

    }

    generateNumbers() {
        const min = 1;
        const max = 100;
        for (let index = 0; index < this.state.value; index++) {
            var rand =  Math.floor(min + (Math.random() * (max-min)));
            this.videos.push(rand);
        }
    }
    
    visialize_sort() {
        if(this.state.sortingMethod === "bubbleSort") {
            return <BubbleSort/>
        } else if (this.state.sortingMethod === "selectionSort") {
            return <SelectionSort/>
        } else if (this.state.sortingMethod === "insertionSort") {
            return <InsertionSort/>
        } else if (this.state.sortingMethod === "mergeSort") {
            return <MergeSort/>
        }
    }


    render(){
        this.generateNumbers();
        
        console.log(this.state.sortingMethod)

        var videos_bars = this.videos.map((value) => 
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
                
                {this.visialize_sort()}

            </div>
        )
    }

}


export default SortSreen;