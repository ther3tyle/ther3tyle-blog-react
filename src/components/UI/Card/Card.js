import React, {Component} from "react";
import "./Card.scss";
import Button from "../Button/Button";

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content card__image">
                    <img src={this.props.imageSource}
                         alt={this.props.title}/>
                </div>
                <div className="card-content card__hr">
                    <hr/>
                </div>
                <div className="card-content card__author">
                    {"AUTHOR: " + this.props.author}
                </div>
                <div className="card-content card__title">
                    {this.props.title}
                </div>
                <div className="card-button">
                    <Button/>
                </div>
            </div>
        )
    }
}

export default Card;