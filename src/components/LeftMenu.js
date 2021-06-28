import React from "react";
import '../index.css'
import logoMenu from '../LOGO.png'

export class LeftMenu extends React.Component{
    render() {
        return <div className="left-menu">
            <span>&lt;</span>
            <img className="logo" src={logoMenu} alt="logo"/>
            {
                this.props.data.map(item => (
                <div>
                    <img key={item.id} src={item.icon} alt={item.title} />
                    {item.title}
                </div>
                ))
            }
        </div>;
    }
}
