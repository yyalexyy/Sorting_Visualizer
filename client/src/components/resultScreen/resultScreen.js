import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class ResultSreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos : props.location.aboutProps.videos,
        }
    }
    componentDidMount() {
    }
    render(){
        return(
            <div>
                <button onClick={()=>{console.log("videos:",this.props.location.aboutProps)}}> 123 </button>
                <button>
                    <NavLink to = {{pathname:'/'}} > HOME </NavLink>
                </button>
            </div>
        )
    }
}

export default withRouter(ResultSreen);