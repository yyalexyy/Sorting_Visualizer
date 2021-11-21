import React, { Component } from 'react';
import './bars_container.css'

class SortSreen extends Component {
    videos = [];
    constructor(props) {
        super(props);
        console.log(props.location.aboutProps);
        const min = 1;
        const max = 100;
        for (let index = 0; index < props.location.aboutProps.value; index++) {
            var rand =  Math.floor(min + (Math.random() * (max-min)));
            this.videos.push(rand);
        }
    }
    render(){
        console.log("IN")
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


export default SortSreen;