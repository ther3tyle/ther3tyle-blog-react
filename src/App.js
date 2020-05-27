import React from 'react';

import Layout from "./components/Layout/Layout";
import BackgroundImages from "./components/BackgroundImages/BackgroundImages";


function App() {

  return (
    <div className="app">
      <Layout>
        <BackgroundImages />
      </Layout>
    </div>
  );
}

export default App;
