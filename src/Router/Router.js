import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Layout from "../components/Layout/Layout";
import BackgroundImages from "../components/BackgroundImages/BackgroundImages";
import Blog from "../components/Blog/Blog";

const Router = (props) => {
    return(
        <div>
            <Layout>
            <BrowserRouter>
                <Route path="/" exact component={BackgroundImages}/>
                <Route path="/blog" component={Blog}/>
            </BrowserRouter>
            </Layout>
            Router
        </div>
    );
}

export default Router;