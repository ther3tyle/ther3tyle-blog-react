import React, {Component} from "react";
import "./Card.css";

class Card extends Component {
    render() {
        let title = this.props.title;
        if (this.props.title.length > 35) {
            for (let i = 35; i < title.length; i++) {
                if (title[i] === " ") {
                    title = title.substring(0, i);
                    break;
                }
                if (i === title.length - 1)
                    title = title.substring(0, 35);
            }
            title += "...";
        }

        return (
            <div className="card">
                <div className="card-content card__image">
                    <img src={this.props.imageSource}
                         alt={this.props.title}/>
                </div>
                <div className="card-content card__title">
                    {title}
                </div>
            </div>
        )
    }
}

export default Card;