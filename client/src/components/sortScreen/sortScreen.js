import React, { Component } from 'react';

class SortSreen extends Component {
    constructor(props) {
        super(props);
        console.log(props.location.aboutProps);
    }

    render(){
        console.log("IN")
        return(
            <div>
                <h1>Sort Sreen</h1>
            </div>
        )
    }

}


export default SortSreen;