import React from "react";
import "./NavigationItem.css";
import {connect} from "react-redux";
import {changeBgColor, changeTextColor} from "../../../../../redux/actions";
import {Link} from 'react-router-dom';

const NavigationItem = (props) => {

    const clicked = () => {
        props.changeBgColor("#ffffff")
        props.changeTextColor("#141414")
    }

    return (
        <Link to={`/${props.link}`}>
            <li className="navigation-item" onClick={clicked} style={{color: props.textColor}}>
                {props.name}
            </li>
        </Link>
    );
}

const mapStateToProps = (state) => {
    return {
        changeBgColor: state.changeBgColor,
        changeTextColor: state.changeTextColor,
        textColor: state.colors.text
    }
}

export default connect(mapStateToProps, {changeBgColor, changeTextColor})(NavigationItem);