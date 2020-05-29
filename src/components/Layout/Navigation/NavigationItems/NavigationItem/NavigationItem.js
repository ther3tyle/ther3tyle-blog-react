import React from "react";
import "./NavigationItem.scss";
import {Link} from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <Link to={`/${props.link}`}>
            <li className="navigation-item">
                {props.name}
            </li>
        </Link>
    );
}

export default NavigationItem;