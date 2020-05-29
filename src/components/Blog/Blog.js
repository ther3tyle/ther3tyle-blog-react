import React, {Component} from "react";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

class Blog extends Component {
    getPosts = async () => {
        const response = await jsonPlaceholder
            .get("/posts");
        return response.data;
    }

    blog = null;

    componentDidMount() {
        this.getPosts()
            .then(data => {
                this.blog = data;
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                {this.blog}
            </div>
        );
    }
}

export default Blog;