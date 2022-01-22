import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Category from './category';
import SortingMethod from './sorting_methods';

import './homeSreen.css';
import './card.css';

class HomeSreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeDiv: "categoryDiv",
            category : '',
            sortingMethod : '',
            min : 10,
            max : 100,
            value : (10+100)/2
        }
    }

    toggleDiv = () => {
        this.setState({
            activeDiv: this.state.activeDiv === "categoryDiv" ? "sortDiv" : "categoryDiv"
        });
    }

    settingCategory = (theCategory) => {
        this.setState({category: theCategory});
    }
    settingSortingMethod = (theMethod) => {
        this.setState({sortingMethod: theMethod});
    }
    showValue(newValue){
        this.setState({value: parseInt(newValue)});
        document.getElementById('sliderValue').innerHTML=newValue;
    }
    render(){
        return(
        <div className="HomeScreen" style={{height:"100vh", backgroundColor:"#000"}}>
            <div className={this.state.activeDiv === "categoryDiv" ? "categoryDiv show" : "categoryDiv hide"}
                id = "categoryDiv">
                    <form className="cardContainer" name="theForm">
                        <Category settingCategory={this.settingCategory} />
                    </form>

                    <button type="button" className="nextPage" onClick={this.toggleDiv}>
                        Sorting Selections
                    </button>
            </div>


            <div className={this.state.activeDiv === "sortDiv" ? "sortDiv show" : "sortDiv hide"}
                id="sortDiv">
                    <form className="cardContainer" name="theForm">
                        <SortingMethod settingSortingMethod={this.settingSortingMethod} />

                        <div className='card chooseSize'>
                            <input type='range' className="slider" id="slider" name="slider"
                                min={this.state.min} max={this.state.max} defaultValue = "55" step="1"
                                onChange = {(e)=>this.showValue(e.target.value)}
                            />
                            
                            <h1 id="sliderValue" >{(this.state.min+this.state.max)/2}</h1>
                        </div>

                    </form>
                    
                    <div className="btnAction">
                        <button type="button" className="backPage" onClick={this.toggleDiv}>
                            Go Back
                        </button>

                        <button type="button"  className="sortBtn">
                                <NavLink to={{
                                    pathname:'/Sorting',
                                    aboutProps:{
                                        value:this.state.value,
                                        category:this.state.category,
                                        sortingMethod:this.state.sortingMethod
                                    }
                                }} 
                                >Sorting</NavLink>
                        </button>
                    </div>

            </div>

        </div>
        )
    }

}


export default withRouter(HomeSreen);