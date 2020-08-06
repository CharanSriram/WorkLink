import React from 'react';
import './sidebar.css'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    // need to import font for sidebar-header

    render() {
        return (
            <div id="sidebar-container" >
                <h2 className= "sidebar-header">Previous Workers</h2>
                <input className="sidebar-input" placeholder="Search" value={this.state.searchText} onChange={this.handleChange}></input>
                <div className="sidebar-cards-container" ></div>
            </div>
        )   
    }

}

export default Sidebar;