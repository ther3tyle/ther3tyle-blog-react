import React, {Component} from "react";
import "./SinglePost.css";
import {connect} from "react-redux";
import {changeBgColor, changeTextColor} from "../../../redux/actions";


class SinglePost extends Component {
    componentDidMount() {
        this.props.changeTextColor("#141414");
        this.props.changeBgColor("#ffffff");
    }

    render() {
        return (
            <div style={{color: this.props.textColor}}>
                <h1>Blog Title</h1>

                {/*Dummy Text ** REMOVE LATER ** */}
                <div className="code">

                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel semper dolor. Maecenas ut enim sollicitudin, aliquam est sodales, suscipit arcu. Praesent leo dolor, pellentesque eget nulla eget, consequat iaculis nulla. Integer mattis, tellus ut hendrerit sagittis, ipsum sapien maximus nisi, maximus auctor odio arcu id enim. Vestibulum vitae sapien hendrerit, pellentesque tellus in, consectetur metus. Vivamus sed magna neque. Nam vel gravida tortor, vel sodales purus. Mauris vitae nulla odio. Phasellus pulvinar elit ut libero laoreet, id interdum arcu elementum. Suspendisse nunc augue, suscipit vel hendrerit sit amet, bibendum ac nulla. Phasellus sem augue, condimentum a auctor ac, volutpat nec dui.</p>
                <p>Vestibulum eu arcu erat. In in feugiat risus, in lobortis augue. Quisque vestibulum metus porta iaculis facilisis. Vestibulum in porta leo. Nulla et augue vitae eros volutpat accumsan ut ac sem. Quisque sollicitudin felis nunc, sit amet fringilla mi placerat eu. Etiam eu gravida augue, porttitor consequat enim. Praesent sit amet lacus at magna fringilla posuere et nec odio. Duis eu semper metus.</p>
                <p>Aliquam at ornare nunc. Proin ultrices sed metus nec ornare. Vestibulum varius mattis justo volutpat vestibulum. Aliquam nec vestibulum velit. Nunc aliquet sollicitudin dui, ac fermentum eros. Nam mi tellus, vestibulum et dui eget, facilisis consequat justo. Nulla lacus nulla, faucibus et tortor ut, mattis tincidunt dui. Phasellus varius felis sed enim malesuada, non eleifend nisl semper.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        textColor: state.colors.text
    }
}

export default connect(mapStateToProps, {changeBgColor, changeTextColor})(SinglePost);
