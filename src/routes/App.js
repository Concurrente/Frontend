
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Layout from "../templates/Layout";
import '../App.css';

class App extends React.Component {
    render(){

      return (
        <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    );
  }
}

export default App;
