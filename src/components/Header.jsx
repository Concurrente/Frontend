import React from "react";
import '../assets/styles/components/Header.css';
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1>Un lugar <span className="bold">Seguro</span></h1>
            </div>
        )
    }
}
export default Header;