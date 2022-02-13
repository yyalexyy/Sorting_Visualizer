import React, { Component } from 'react';
import './frame.css';

class Frame extends Component {

    getBarType = (value) => {
        if(value === 0)
            return 'bars'
        else if(value === 1)
            return 'bars_current'
        else  if(value === 2)
            return 'bars_done'
        else  
            return 'bars_range'
    }

    render() {
        // console.log("In Frames")
        return(

            // display the bars 
            <div className="frame">
                <ul className='bars_container'>
                    {this.props.videos.map((elem, idx) => 
                        <li className = {this.getBarType(elem.barType)} 
                            key = {idx}
                            value = {elem.key}
                            style={{width : `${3 * elem.key}px`}}
                        >
                            {elem.key}
                        </li>
                    )}
                </ul>

            </div>

        );
    }

}

export default Frame;