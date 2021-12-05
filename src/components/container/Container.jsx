import React from "react";
import System from "../systempoint/System";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Container = () => {
    return (
        <div className="grid-container">
            <div className="item-header">
                <Header />
            </div>
            <div className="item-minicards">
            <div className="rank"></div>
            <div className="completed"></div>
            <div className="streak"></div>
            </div>
            <div className="item-navbar">
                <Navbar />
            </div>
            <div className="item-system">
                <System />
            </div>
            <div className="item-achievements"></div>
            <div className="item-graph"></div>
            <div className="item-footer"></div>
        </div>
    )
}

export default Container;