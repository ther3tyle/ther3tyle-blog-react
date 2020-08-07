import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";

const Router = (props) => {
    const baseURL = process.env.PUBLIC_URL
    return (
        <div>
            <BrowserRouter basename={baseURL}>
                <Layout>
                    <Route path={baseURL + "/"} exact component={Home}/>
                    <Route path={baseURL + "/blog"} exact component={Blog}/>
                    <Route path={baseURL + "/blog/post"} exact component={Blog}/>
                </Layout>
            </BrowserRouter>
        </div>
    );
};

export default Router;
