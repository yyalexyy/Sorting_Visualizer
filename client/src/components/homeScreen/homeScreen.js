import './homeSreen.css';
import React, { Component } from 'react';

class HomeSreen extends Component {
    showValue(newValue){
        document.getElementById('sliderValue').innerHTML=newValue;
    }
    render(){
        return(
        <div className="HomeScreen" style={{height:"100vh", backgroundColor:"black"}}>
            <div style={{height:"10px"}}/>
            <form className='cardContainer' name="theForm">
                <div className='card category'>
                    <div>
                        <input type='radio' id='TaoTao' name="category"/>
                        <lable for='TaoTao'>TaoTao</lable>
                    </div>
                    <div>
                        <input type='radio' id='Alex'name="category"/>
                        <lable for='Alex'>Alex</lable>
                    </div>
                    <div>
                        <input type='radio' id='HSNU'name="category" />
                        <lable for='HSNU'>HSNU</lable>
                    </div>
                    <div>
                        <input type='radio' id='1420'name="category"/>
                        <lable for='1420'>1420</lable>
                    </div>
                    <h1 id="selected">{}</h1>
                </div>
                <div className='card sorting'>
                    <div>
                        <input type='radio' id='bubbleSort'name="sorting"/>
                        <lable for='bubbleSort'>bubbleSort</lable>
                    </div>
                    <div>
                        <input type='radio' id='mergeSort'name="sorting"/>
                        <lable for='mergeSort'>mergeSort</lable>
                    </div>
                    <div>
                        <input type='radio' id='selectionSort'name="sorting"/>
                        <lable for='selectionSort'>selectionSort</lable>
                    </div>
                    <div>
                        <input type='radio' id='insertionSort'name="sorting"/>
                        <lable for='insertionSort'>insertionSort</lable>
                    </div>
                </div>
                <div className='card chooseSize'>
                    <input type='range' className="slider" id="slider" name="slider"
                        min="10" max="100" defaultValue = "55" step="1"
                        onChange = {(e)=>this.showValue(e.target.value)}
                    />
                    <h1 id="sliderValue" >{55}</h1>
                    <h1 id="submitValue">{123}</h1>
                    <button form="theForm"
                        title="Sorting" className="sortingButtom" id="sortingButtom" 
                        style={{backgroundColor:'red',borderRadius:'10px'}}>
                        Sorting
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
            <div>
            </div>
        </div>
        )
    }
}


export default HomeSreen;