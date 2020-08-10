import React from "react";
import "./NavigationItem.css";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

const NavigationItem = (props) => {
    let navColor = props.textColor;
    if (props.isBackdrop) {
        navColor = "#ffffff";
    }

    return (
        <Link to={`/${props.link}`}>
            <li className="navigation-item" style={{color: navColor}}>
                {props.name}
            </li>
        </Link>
    );
}

const mapStateToProps = (state) => {
    return {
        isBackdrop: state.backdropMenu.showBackdrop === " open",
        textColor: state.colors.text
    }
}

export default connect(mapStateToProps, )(NavigationItem);
