import React from "react";
import "./NavigationItem.scss";
import {Link} from 'react-router-dom';


const NavigationItem = (props) => {
    return (
        <li className="navigation-item">
            <Link to={`/${props.link}`}>
                <a className={props.active ? "active" : null}>{props.name}</a>
            </Link>
        </li>
    );
}

export default NavigationItem;