import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import TOP3Carousel from './top3_carousel';

class ResultSreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: props.location.aboutProps.videos,
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                {/* <button onClick={()=>{console.log("videos:",this.props.location.aboutProps.videos)}}> 123 </button> */}
                <TOP3Carousel videos = {this.props.location.aboutProps.videos}/>
                {/* <button>
                    <NavLink to = {{pathname:'/'}} > HOME </NavLink>
                </button> */}
            </div>
        )
    }
}

export default withRouter(ResultSreen);