import React from 'react';
import {connect} from "react-redux";

import {changeBgColor} from "./redux/actions";
import Router from "./Router/Router";


const App = (props) => {
    return (
        <div className="app" style={{background: props.bgColor}}>
            <Router/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bgColor: state.colors.background
    }
}

export default connect(mapStateToProps, {changeBgColor})(App);