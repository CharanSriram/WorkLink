import React from 'react'
import './discover.css'

function HomeownerCard(props) {
    return (
        <div className="homeowner-body">
            <div className="homeowner-textcontainer">
                <p className="homeowner-name">{props.name}</p>
                <p className="homeowner-job">Hired for {props.job}</p>
                <p className="homeowner-rating">Net Rating: {props.rating}/40</p>
            </div>
        </div>
    )
}

export default HomeownerCard