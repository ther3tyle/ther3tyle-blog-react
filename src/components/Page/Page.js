import React, {Component} from "react";
import {connect} from "react-redux";
import {changeBgColor, changeTextColor} from "../../redux/actions";
import "./Page.css";

class Page extends Component {
    componentDidMount() {
        this.props.changeBgColor("#ffffff");
        this.props.changeTextColor("#141414");
    }

    render() {
        return (
            <div className={Page}>
                <h1>
                    Title
                </h1>
                <div>
                    "Hello World"
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {changeBgColor, changeTextColor})(Page)
