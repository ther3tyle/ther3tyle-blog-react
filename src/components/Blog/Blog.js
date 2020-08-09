import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts, changeBgColor, changeTextColor} from "../../redux/actions";

import Card from "../UI/Card/Card";
import "./Blog.css";
import SearchBar from "../UI/SearchBar/SearchBar";

class Blog extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        this.props.changeBgColor("#ffffff");
        this.props.changeTextColor("#141414");
    }

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <Card
                    key={post.id}
                    imageSource={`https://picsum.photos/id/${post.id}/600/600`}
                    title={post.title}
                    text={post.body}
                    author={post.userId}/>
            )
        });
    }

    render() {
        return (
            <div className="blog-container">
                <SearchBar />
                <div className="blog">
                    <div className="posts">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {posts: state.posts, images: state.loremPicsum}
};

export default connect(mapStateToProps, {fetchPosts, changeBgColor, changeTextColor})(Blog);
