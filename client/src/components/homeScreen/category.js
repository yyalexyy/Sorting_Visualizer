import React, { Component } from 'react';
import './category.css';
import './card.css';

import {LIST_COUNTRIES, LIST_CATEGORIES, LIST_VIDEO_DURATIONS, LIST_DATES} from './listCategories.js'

const mainCategories = ["Country", "Category", "Video Duration", "Date"];

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'category',
            activeDiv: "categoryChild",
            countryDiv: "none",
            categoryDiv: "none",
            vDurationDiv: "none",
            dateDiv: "none"
        }
    }

    // componentDidMount() {
    //     const listItems = mainCategories.map((ctg) =>
    //         <li className="selectionList" key={ctg}>
    //                 <button className="selectionBtn" type="button" value={ctg}
    //                     onClick={(e) => { {this.handleONClick(e)} }}>
    //                     {ctg}
    //                 </button>
    //         </li>
    //     );
    //     <div id="selectionsParent">
    //         <div className="categoryChild">
    //             <ul className="categoryList">
    //                 {listItems}
    //             </ul>
    //         </div>
    //     </div>
    // }

    // componentDidUpdate() {
    //     const listItems = mainCategories.map((ctg) => {
    //         switch(ctg) {
    //             case "Country":
    //                 <li className="selectionList" key={ctg}>
    //                     <button className="selectionBtn" type="button" value={ctg}
    //                         onClick={(e) => { {this.handleONClick(e)} }}>
    //                         {ctg}:{this.state.countryDiv}
    //                     </button>
    //                 </li>
    //                 break;
    //             case "Category":
    //                 <li className="selectionList" key={ctg}>
    //                     <button className="selectionBtn" type="button" value={ctg}
    //                         onClick={(e) => { {this.handleONClick(e)} }}>
    //                         {ctg}:{this.state.categoryDiv}
    //                     </button>
    //                 </li>
    //                 break;
    //             case "Video Duration":
    //                 <li className="selectionList" key={ctg}>
    //                     <button className="selectionBtn" type="button" value={ctg}
    //                         onClick={(e) => { {this.handleONClick(e)} }}>
    //                         {ctg}:{this.state.vDurationDiv}
    //                     </button>
    //                 </li>
    //                 break;
    //             case "Date":
    //                 <li className="selectionList" key={ctg}>
    //                     <button className="selectionBtn" type="button" value={ctg}
    //                         onClick={(e) => { {this.handleONClick(e)} }}>
    //                         {ctg}:{this.state.dateDiv}
    //                     </button>
    //                 </li>
    //                 break;
    //         }

    //         // if(this.state.activeDiv === ctg) {
    //         //     <li className="selectionList" key={ctg}>
    //         //         <button className="selectionBtn" type="button" value={ctg}
    //         //             onClick={(e) => { {this.handleONClick(e)} }}>
    //         //             {ctg}:{this.state.countryDiv}
    //         //         </button>
    //         //     </li>
    //         // } else {

    //         // }

    //     });
    //     <div id="selectionsParent">
    //         <div className="categoryChild">
    //             <ul className="categoryList">
    //                 {listItems}
    //             </ul>
    //         </div>
    //     </div>
    // }


    handleONClick(e) {
        let selection = e.target.value;
        this.setState({ value: selection });
        this.props.settingCategory(selection);

        console.log(selection);

        // this.setState({ activeDiv: selection });

        if(selection === "Country") {
            this.setState({
                activeDiv: "countryDiv"
            });
        } else if (selection === "Category") {
            this.setState({
                activeDiv: "categoryDiv"
            });
        } else if (selection === "Video Duration") {
            this.setState({
                activeDiv: "vDurationDiv"
            });
        } else if (selection === "Date") {
            this.setState({
                activeDiv: "dateDiv"
            });
        }

    }


    render() {
        const listItems = mainCategories.map((ctg) =>
            <li className="selectionList" key={ctg}>
                    <button className="selectionBtn" type="button" value={ctg}
                        onClick={(e) => { this.handleONClick(e) }}>
                        {ctg}
                    </button>
            </li>
        );

        return (
            <div className="selectionContainer">
                <div id="selectionsParent">
                    {/* Categories display on the left*/}
                    <div className="categoryChild">
                        <ul className="categoryList">
                            {listItems}
                        </ul>
                    </div>

                    {/* Options display on the right*/}
                    <div className="selectionChild">
                        <div className={this.state.activeDiv === "categoryChild" ? "div show" : "div hide"}>
                            <p style={{margin:"auto", marginTop:"12rem"}}><em>
                                Select your country, category, video duration, and/or date.
                            </em></p>
                        </div>

                        <div className={this.state.activeDiv === "countryDiv" ? "div show" : "div hide"}>
                            <ul className="optionList">
                                {LIST_COUNTRIES}
                            </ul>
                        </div>

                        <div className={this.state.activeDiv === "categoryDiv" ? "div show" : "div hide"}>
                            <ul className="optionList">
                                {LIST_CATEGORIES}
                            </ul>
                        </div>


                        <div className={this.state.activeDiv === "vDurationDiv" ? "div show" : "div hide"}>
                            <ul className="optionList">
                                {LIST_VIDEO_DURATIONS}
                            </ul>
                        </div>


                        <div className={this.state.activeDiv === "dateDiv" ? "div show" : "div hide"}>
                            <ul className="optionList">
                                {LIST_DATES}
                            </ul>
                        </div>

                    </div>

                </div>
                
                {/* <h1 className="checked_item" style={{ marginTop: '30%' }}>{this.state.value}</h1> */}
            </div>
        )
    }
}

export default Category