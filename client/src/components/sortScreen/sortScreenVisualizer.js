import React, { Component } from 'react';

import {bubbleSort} from './algorithms/bubbleSort.js';
import {selectionSort} from './algorithms/selectionSort.js';
import {insertionSort} from './algorithms/insertionSort.js';
import {mergeSort} from './algorithms/mergeSort.js';

import Frame from './frame';

const BAR_DEFAULT = 0 
const BAR_CURRENT = 1
const BAR_DONE = 2;

class SortSreenVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortingMethod: props.location.aboutProps.sortingMethod,
            category: props.location.aboutProps.category,
            value: props.location.aboutProps.value,
            videos: [], // array of dictionaries {key: num; barType: 0,1,2}
        }
    }

    componentDidMount() {
        this.startSort();
    }

    generateNumbers() {
        let lst = [];
        const min = 1;
        const max = 100;
        for (let index = 0; index < this.state.value; index++) {
            let randNum =  Math.floor(min + (Math.random() * (max-min + 1)));
            lst.push({key: parseInt(randNum), barType: BAR_DEFAULT});
        }
        // console.log(lst);
        this.setState({videos: lst});
    }

    render(){
        return(
            <div>
                <h1>Sort Sreen</h1>

                <Frame videos={this.state.videos}/>
            </div>
        );

    }

    startSort = async() => {
        await this.generateNumbers();

        // get an arry of moves (to visualize either swap or no swap)
        let moves = await this.getAlgorithmMoves();
        // console.log(moves);

        // visualize swap
        await this.visualizeMoves(moves);

        await this.done();

        console.log("start out");
    }


    getAlgorithmMoves = async() => {
        let moves = [];
        let arr = await this.getKeysList();
        
        console.log("In getAlgorithmMoves")

        if(this.state.sortingMethod === "bubbleSort") {
            moves = await bubbleSort(arr);
        } else if (this.state.sortingMethod === "selectionSort") {
            moves = await selectionSort(arr);
        } else if (this.state.sortingMethod === "insertionSort") {
            moves = await insertionSort(arr);
        } else if (this.state.sortingMethod === "mergeSort") {
            moves = await mergeSort(arr);
        }

        return moves;
    }

    visualizeMoves = async(moves) => {
        // console.log(moves)

        if(moves.length === 0)
            return;
        
        while(moves.length > 0) {
            let curr = moves[0];

            let indices = [curr[0], curr[1]];
            // change bar status to BAR_CURRENT
            await this.updateBarStatus(indices, BAR_CURRENT);

            if(curr[2] === true) {
                await this.swpUpdateList(curr[0], curr[1]);
            }

            // change bar status to BAR_DEFAULT
            await this.updateBarStatus(indices, BAR_DEFAULT);

            moves.shift();
        }

    }

    // Swap the element for each move
    swpUpdateList = async(idx1, idx2) => {
        let arr = [...this.state.videos];

        let tmp = arr[idx1].key;
        arr[idx1].key = arr[idx2].key;
        arr[idx2].key = tmp;

        await this.updateStateChanges(arr);
    }

    // Update Bar Status
    updateBarStatus = async(indices, barStatus) => {
        let arr = [...this.state.videos];

        for(let i = 0; i < indices.length; i++) {
            arr[indices[i]].barType = barStatus;
        }

        await this.updateStateChanges(arr);
    }

    // Update the state of the list
    updateStateChanges = async(newArr) => {
        this.setState({videos: []});
        this.setState({videos: newArr});
        await this.pause();
    }

    pause = async() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 300/1);
        });
    }

    // Update All Bar Status to Done 
    done = async() => {
        let indices = []

        for(let i = 0; i < this.state.videos.length; i++) {
            indices.push(i);
        }

        await this.updateBarStatus(indices, BAR_DONE);
    }


    getKeysList = async() => {
        let lst = [];
        for(let i = 0; i < this.state.videos.length; i++) {
            lst.push(this.state.videos[i].key);
        }

        return lst;
    }

}

export default SortSreenVisualizer;