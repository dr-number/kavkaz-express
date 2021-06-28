import React from "react";
import '../index.css'

export class Inbox extends React.Component{
    render() {
        return <div className="inbox">
            <div>
                <p>Inbox</p>
                <p className="number">{this.props.number}</p>
                {this.props.children}
            </div>
        </div>;
    }
}
