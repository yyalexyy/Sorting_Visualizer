import './homeSreen.css';
import React, { Component,setState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class HomeSreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoty : '',
            sortingMethod : '',
            min : 10 ,
            max : 100 ,
            value : 0 
        }
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

                <div className='card chooseSize'>
                    <input type='range' className="slider" id="slider" name="slider"
                        min={this.state.min} max={this.state.max} defaultValue = "55" step="1"
                        onChange = {(e)=>this.showValue(e.target.value)}
                    />
                    <h1 id="sliderValue" >{(this.state.min+this.state.max)/2}</h1>
                    <button form="theForm"
                        title="Sorting" className="sortingButtom" id="sortingButtom" 
                        style={{backgroundColor:'red',borderRadius:'10px'}}>
                            <NavLink to={{
                                pathname:'/Sorting',
                                aboutProps:{min:this.state.min,value:this.state.value}
                            }} 
                            >Sorting</NavLink>
                    </button>
                    
                    <script type="text/javascript">
                    var sortingButtom = document.getElementById("sortingButtom");
                    sortingButtom.onClick = {() => {
                        var category = document.querySelector('input[name="category"]:check').value;
                        var sorting = document.querySelector('input[name="sorting"]:check').value;
                        var size = document.querySelector('input[name="slider"]').value;
                        document.getElementById("submitValue").innerHTML = {category}}}
                    </script>
                </div>
            </form>
        </div>
        )
    }

}


export default withRouter(HomeSreen);