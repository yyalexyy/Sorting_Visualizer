import React, { Component } from 'react';
import './category.css';
import './card.css';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = { 
            value : 'category',
            settingCategory : props.settingCategory, 
        }
    }
    handleONClick(e){
        this.settingCategory(e.target.value);
        this.setState({value:e.target.value});
    }
    categorys = ["TaoTao","Alex","1420","HSNU"] ;
    render(){
        const listItems = this.categorys.map((category) =>
            <li className='list' key={category}>
                <button className="button" type="button" value={category} 
                onClick={(e)=>{this.handleONClick(e)}}>
                    {category}
                </button>
            </li> 
        );
        return(
            <div className='card'>
                <ul className="categoryList">
                    {listItems}
                </ul>
                <h1 className="checked_item">{this.state.value}</h1>
            </div>
        )
    }
}

export default Category