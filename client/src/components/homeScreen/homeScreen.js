import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Category from './category';
import SortingMethod from './sorting_methods';

import './homeSreen.css';
import './card.css';

import { YOUTUBE_SEARCH } from './../../api/api';
import { YOUTUBE_STATS } from './../../api/api';

import Spinner from 'react-bootstrap/Spinner'

class HomeSreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDiv: "categoriesDiv",
            category: '',
            sortingMethod: '',
            min: 10,
            max: 100,
            value: (10 + 100) / 2,
            isDataFetched: false,
            video_list: []
        }
    }

    toggleDiv = () => {
        this.setState({
            activeDiv: this.state.activeDiv === "categoriesDiv" ? "sortDiv" : "categoriesDiv"
        });

    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    accessAPI = async () => {
        // let data = await YOUTUBE_SEARCH();
        let videos = [];
        // await YOUTUBE_STATS(data.items, videos);

        await this.sleep(2000) //wait 2 seconds

        this.setState({ video_list: videos, isDataFetched: true });

        console.log("Youtube Stats: ", this.state.video_list);
    }


    settingCategory = (theCategory) => {
        this.setState({ category: theCategory });
    }
    settingSortingMethod = (theMethod) => {
        this.setState({ sortingMethod: theMethod });
    }
    showValue(newValue) {
        this.setState({ value: parseInt(newValue) });
        document.getElementById('sliderValue').innerHTML = newValue;
    }

    loadingDiv() {
        return (
            <div className="loading">
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="success" />
            </div>
        );
    }

    categoriesDiv() {
        return (
            <div className={this.state.activeDiv === "categoriesDiv" ? "categoriesDiv show" : "categoriesDiv hide"}
                id="categoriesDiv">
                <form className="cardContainer" name="theForm">
                    <Category settingCategory={this.settingCategory} />
                </form>

                <div>
                    <button type="button" className="nextPage" onClick={() => { this.toggleDiv(); this.accessAPI() }}>
                        Sorting Selections
                    </button>
                </div>

            </div>
        );
    }

    sortDiv() {
        return (
            <div className={this.state.activeDiv === "sortDiv" ? "sortDiv show" : "sortDiv hide"}
                id="sortDiv">

                <form className="cardContainer" name="theForm">
                    <div id="selectionsParent">

                        <div className="categoryChild">
                            {/* Sort Selection */}
                            <SortingMethod settingSortingMethod={this.settingSortingMethod} />
                        </div>

                        <div className='selectionChild'>
                            <div className='card chooseSize'>
                                <input type='range' className="slider" id="slider" name="slider"
                                    min={this.state.min} max={this.state.max} defaultValue="55" step="1"
                                    onChange={(e) => this.showValue(e.target.value)}
                                />

                                <h1 id="sliderValue" >{(this.state.min + this.state.max) / 2}</h1>
                            </div>
                        </div>
                    </div>

                    

                </form>

                <div className="btnAction">
                    <button type="button" className="backPage" onClick={this.toggleDiv}>
                        Go Back
                    </button>

                    <button type="button" className="sortBtn">
                        <NavLink className={'linkText'} to={{
                            pathname: '/Sorting',
                            aboutProps: {
                                value: this.state.value,
                                category: this.state.category,
                                sortingMethod: this.state.sortingMethod
                            }
                        }}
                        >Sorting</NavLink>
                    </button>
                </div>

            </div>
        );
    }

    render() {
        return (

            <div className="homeScreen">
                {this.state.activeDiv === "categoriesDiv" ? this.categoriesDiv() :
                    <div>
                        {this.state.isDataFetched ? this.sortDiv() : this.loadingDiv()}
                    </div>
                }
            </div>
        )
    }

}


export default withRouter(HomeSreen);