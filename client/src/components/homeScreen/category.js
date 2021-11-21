import React, { Component } from 'react';
import './category.css';
import './card.css';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = { 
            value : 'category',
        }
    }
    handleONClick(e){
        this.setState({value:e.target.value});
        this.props.settingCategory(e.target.value);
    }
    categorys = ["TaoTao","Alex","1420","HSNU"] ;
    render(){
        const listItems = this.categorys.map((cat) =>
            <li className='list' key={cat}>
                <button className="button" type="button" value={cat} 
                onClick={(e)=>{this.handleONClick(e)}}>
                    {cat}
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