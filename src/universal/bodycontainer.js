import React from 'react'
import './bodycontainer.css'
import Header from './header'
import DiscoverBody from '../discover/discoverbody'

class BodyContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    // decides which container to render based on Redux/state sending
    render() {
        return (
            <div id="bodycontainer-body">
                <Header></Header>
                <DiscoverBody></DiscoverBody>
            </div>
        )
    }
}

export default BodyContainer