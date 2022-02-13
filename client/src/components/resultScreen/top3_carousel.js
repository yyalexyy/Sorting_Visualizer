import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react';

class TOP3Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos : props.videos,
        }
    }
    componentDidMount() {
        console.log(this.state.videos);
    }
    render(){
        const TOP3 = this.state.videos.map((video) =>
            <Carousel.Item className='list' key={video.snippet.title}>
                <img className="d-block w-100" src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
                <Carousel.Caption>
                    <h3 style={{coler:"white"}}>{video.snippet.title}</h3>
                    <p style={{coler:"white"}}>{video.snippet.description}</p>
                </Carousel.Caption>
            </Carousel.Item> 
        );
        return(//<>123</>
            <Carousel>
                {TOP3}
            </Carousel>
        )
    }
}

export default TOP3Carousel;
