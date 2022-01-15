import React, { Component } from 'react';
import './bars_container.css';

import {bubbleSort} from './algorithms/bubbleSort.js';
import {selectionSort} from './algorithms/selectionSort.js';
import {insertionSort} from './algorithms/insertionSort.js';
import {mergeSort} from './algorithms/mergeSort.js';
import Frame from './frame';

class SortSreenVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortingMethod: props.location.aboutProps.sortingMethod,
            category: props.location.aboutProps.category,
            value: props.location.aboutProps.value,
            videos: [],
        }

    }

    componentDidMount() {
        this.generateNumbers();
    }

    generateNumbers() {
        let lst = [];
        const min = 1;
        const max = 100;
        for (let index = 0; index < this.state.value; index++) {
            var rand =  Math.floor(min + (Math.random() * (max-min + 1)));
            lst.push(rand);
        }

        this.setState({videos: lst});
    }


    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    render(){
        // this.generateNumbers();
        // this.sleep(5000);
        // console.log(this.state.videos);
        // console.log(this.state.videos);
        this.start()
        return(
            <div>
                <h1>Sort Sreen</h1>
                <Frame videos={this.state.videos}/>
                

              
            </div>
        );
    }

    start = async() => {
        // get an arry of moves (to visualize either swap or no swap)
        let moves = await this.getAlgorithmMoves();
        // console.log(moves);

        // visualize swap
        await this.visualizeMoves(moves);

        console.log("start out");
    }


    getAlgorithmMoves = async() => {
        let moves = [];
        let arr = await this.copyList();
        
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
        console.log(moves)

        if(moves.length === 0)
            return;
        

        while(moves.length > 0) {
            let curr = moves[0];

            if(curr[2] === true) {
                await this.updateList(curr[0], curr[1]);
            }

            moves.shift();
        }

    }

    // swap the element for each move
    updateList = async(idx1, idx2) => {
        let arr = [...this.state.videos];

        let tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;

        await this.updateStateChanges(arr);
    }

    // Update the state of the list
    updateStateChanges = async(newArr) => {
        this.setState({videos: newArr});
        await this.pause();
    }

    pause = async() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            });
        });
    }


    copyList = async() => {
        let lst = [];
        for(let i = 0; i < this.state.videos.length; i++) {
            lst.push(this.state.videos[i]);
        }

        return lst;
    }

}

export default SortSreenVisualizer;