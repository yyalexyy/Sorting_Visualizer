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
            category : '',
            sortingMethod : '',
            min : 10 ,
            max : 100 ,
            value : 0 
        }
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
            <div style={{height:"10px"}}/>
            <form className='cardContainer' name="theForm">

                <Category settingCategory={this.settingCategory} />
                <SortingMethod settingSortingMethod={this.settingSortingMethod} />
                
                <div className='card chooseSize'>
                    <input type='range' className="slider" id="slider" name="slider"
                        min={this.state.min} max={this.state.max} defaultValue = "55" step="1"
                        onChange = {(e)=>this.showValue(e.target.value)}
                    />
                    <h1 id="sliderValue" >{(this.state.min+this.state.max)/2}</h1>
                    <button 
                        title="Sorting" className="sortingButtom" id="sortingButtom" 
                        style={{backgroundColor:'red',borderRadius:'10px'}}>
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
            </form>
        </div>
        )
    }

}


export default withRouter(HomeSreen);