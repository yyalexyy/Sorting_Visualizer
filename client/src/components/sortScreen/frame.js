import React, { Component } from 'react';
import './frame.css';

class Frame extends Component {

    render() {
        // console.log("In Frames")
        return(

            // display the bars 
            <div className="frame">
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