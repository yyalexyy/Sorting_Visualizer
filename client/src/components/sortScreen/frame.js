import React, { Component } from 'react';
import { bubbleSort } from './algorithms/bubbleSort';
import './frame.css';

class Frame extends Component {

    render() {
        // console.log("In Frames")
        return(

            // display the bars 
            <div className="frame">
                {/* <div>
                    {this.props.videos.map((elem, idx) => {
                        console.log(elem, idx);

                        <div 
                            key = {idx}
                            style = {{width : elem}}
                            value = {elem}
                        >
                         {elem}
                        </div>
                    })}
                </div> */}

                <ul className='bars_container'>
                    {this.props.videos.map((value) => 
                        <li className='bars' id={value} key={value} style={{width : `${3 * value}px`}}>
                            {value}
                        </li>
                    )}
                </ul>

            </div>

        );
    }

}

export default Frame;