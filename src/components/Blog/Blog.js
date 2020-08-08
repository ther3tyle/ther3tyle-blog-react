import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../redux/actions";

import Card from "../UI/Card/Card";
import "./Blog.css";

class Blog extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <Card
                    key={post.id}
                    imageSource={`https://picsum.photos/id/${post.id}/300/300`}
                    title={post.title}
                    text={post.body}
                    author={post.userId}/>
            )
        });
    }

    render() {
        return (
            <div className="blog">
                <div className="blog-container">
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {posts: state.posts, images: state.loremPicsum}
};

export default connect(mapStateToProps, {fetchPosts})(Blog);
