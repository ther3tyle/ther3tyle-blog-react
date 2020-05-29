import React, {Component} from "react";
import {connect} from 'react-redux';
import {closeBackdropMenu} from "../../../actions";

import './Backdrop.scss';
import NavigationItems from "../../Layout/Navigation/NavigationItems/NavigationItems";

class Backdrop extends Component {
    clicked = () => {
        this.props.closeBackdropMenu();
    }

    render() {
        console.log(this.props.isOpen);

        return (
            <div className={"backdrop" + this.props.isOpen}
                 onClick={this.clicked}>
                <NavigationItems/>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps){
    return {
        ...ownProps,
        isOpen: state.backdropMenu.showBackdropMenu
    }
}

export default connect(mapStateToProps, {closeBackdropMenu})(Backdrop);