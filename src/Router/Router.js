import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";

const Router = (props) => {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Layout>
                    <Route path="/" exact component={Home}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/blog/post" exact component={Blog}/>
                </Layout>
            </BrowserRouter>
        </div>
    );
};

export default Router;
