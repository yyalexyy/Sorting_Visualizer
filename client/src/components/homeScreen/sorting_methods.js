import React, { Component } from 'react';
import './sorting_methods.css';
import './card.css';

class SortingMethod extends Component {
    constructor(props){
        super(props);
        this.state = { 
            value : 'sorting_method',
        }
    }
    handleONClick(e){
        this.setState({value:e.target.value});
        this.props.settingSortingMethod(e.target.value);
    }
    methods = ["bubbleSort","mergeSort","selectionSort","insertionSort"] ;
    render(){
        const listItems = this.methods.map((method) =>
            <li className='list' key={method}>
                <button className="button" type="button" value={method} 
                onClick={(e)=>{this.handleONClick(e)}}>
                    {method}
                </button>
            </li> 
        );
        return(
            <div className='card'>
                <ul className="sortingList">
                    {listItems}
                </ul>
                <h1 className="checked_item">{this.state.value}</h1>
            </div>
        )
    }
}

export default SortingMethod