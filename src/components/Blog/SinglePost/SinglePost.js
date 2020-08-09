import React, {Component} from "react";
import "./SinglePost.css";


class SinglePost extends Component {
    render() {
        return (
            <div className={SinglePost}>
                <h1 className="post__title">Blog Title</h1>

                {/*Dummy Text ** REMOVE LATER ** */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel semper dolor. Maecenas ut enim sollicitudin, aliquam est sodales, suscipit arcu. Praesent leo dolor, pellentesque eget nulla eget, consequat iaculis nulla. Integer mattis, tellus ut hendrerit sagittis, ipsum sapien maximus nisi, maximus auctor odio arcu id enim. Vestibulum vitae sapien hendrerit, pellentesque tellus in, consectetur metus. Vivamus sed magna neque. Nam vel gravida tortor, vel sodales purus. Mauris vitae nulla odio. Phasellus pulvinar elit ut libero laoreet, id interdum arcu elementum. Suspendisse nunc augue, suscipit vel hendrerit sit amet, bibendum ac nulla. Phasellus sem augue, condimentum a auctor ac, volutpat nec dui.</p>
                <p>Vestibulum eu arcu erat. In in feugiat risus, in lobortis augue. Quisque vestibulum metus porta iaculis facilisis. Vestibulum in porta leo. Nulla et augue vitae eros volutpat accumsan ut ac sem. Quisque sollicitudin felis nunc, sit amet fringilla mi placerat eu. Etiam eu gravida augue, porttitor consequat enim. Praesent sit amet lacus at magna fringilla posuere et nec odio. Duis eu semper metus.</p>
                <p>Aliquam at ornare nunc. Proin ultrices sed metus nec ornare. Vestibulum varius mattis justo volutpat vestibulum. Aliquam nec vestibulum velit. Nunc aliquet sollicitudin dui, ac fermentum eros. Nam mi tellus, vestibulum et dui eget, facilisis consequat justo. Nulla lacus nulla, faucibus et tortor ut, mattis tincidunt dui. Phasellus varius felis sed enim malesuada, non eleifend nisl semper.</p>
                <button>btn</button>
            </div>
        );
    }
}

export default SinglePost;
