import React from 'react'
import './bodycontainer.css'
import Header from './header'

class BodyContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    // decides which container to render based on Redux/state sending
    render() {
        return (
            <div id="bodycontainer-body">
                <Header></Header>
            </div>
        )
    }
}

export default BodyContainer