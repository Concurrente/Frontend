import React from "react";
import Header from "../components/Header";
import '../assets/styles/components/Layout.css';

class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}
export default Layout;