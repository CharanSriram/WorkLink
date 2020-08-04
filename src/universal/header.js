import React from 'react'
import './header.css'


/* 
going to connect the header to Redux to send the button clicked to the
body 
*/
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "Discover"
        }
    }

    onClick = (e) => {
        this.setState({
            selected: e.target.id
        })

        // fire redux action dispatch with the selected screen here using e.target.id

    }

    render() {
        if(this.state.selected === "Discover"){
            return (
                <div id="header-body">
                    <div id="logo-container"></div>
                    <div id="nav-container">
                        <button onClick={this.onClick} id="Community" className="header-button">Community</button>
                        <button onClick={this.onClick} id="Scheduling" className="header-button">Scheduling</button>
                        <button onClick={this.onClick} id="Discover" className="header-button selected">Discover</button>
                        <div id="pfp-container"></div>
                    </div>
                </div>
            )
        } else if(this.state.selected === "Scheduling") {
            return (
                <div id="header-body">
                    <div id="logo-container"></div>
                    <div id="nav-container">
                        <button onClick={this.onClick} id="Community" className="header-button">Community</button>
                        <button onClick={this.onClick} id="Scheduling" className="header-button selected">Scheduling</button>
                        <button onClick={this.onClick} id="Discover" className="header-button">Discover</button>
                        <div id="pfp-container"></div>
                    </div>
                </div>
            )
        } else if(this.state.selected === "Community") {
            return (
                <div id="header-body">
                    <div id="logo-container"></div>
                    <div id="nav-container">
                        <button onClick={this.onClick} id="Community" className="header-button selected">Community</button>
                        <button onClick={this.onClick} id="Scheduling" className="header-button">Scheduling</button>
                        <button onClick={this.onClick} id="Discover" className="header-button ">Discover</button>
                        <div id="pfp-container"></div>
                    </div>
                </div>
            )
        }
    }
}

export default Header;