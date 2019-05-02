import React, {Component} from "react";
import "./style.css";

class CharTile extends Component{
    
    render() {
        
        return(
            <>
                <div className="Card">
                    <div className="img-container">
                        <img alt={this.props.id} src={this.props.image}/>
                    </div>
                </div>
            </>
        )
    }
}

export default CharTile;