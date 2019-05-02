import React, {Component} from "react";
import "./style.css"

class Nav extends Component {

    render(){

        return (
            <>
                <nav className="navStyle">
                    <ul>
                        <li>Get Clicky!</li>
                        <li>The GAME</li>
                        <li>Score!</li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Nav;
