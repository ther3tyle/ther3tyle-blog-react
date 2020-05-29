import React, {Component} from "react";

import './Backdrop.scss';
import NavigationItems from "../../Layout/Navigation/NavigationItems/NavigationItems";

class Backdrop extends Component {

    clicked = () => {
        this.props.click();
    }

    render() {
        // backdrop is default
        // append " open" or " close" as required
        const classValues = "backdrop" + this.props.show;
        return (
            <div className={classValues}
                 onClick={this.clicked}>
                <NavigationItems/>
            </div>
        );
    }
}

export default Backdrop;