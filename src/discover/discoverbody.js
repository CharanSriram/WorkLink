import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import $ from "jquery";
import './discover.css'
import WorkerCard from './workercard'
import HomeownerCard from './homeownercard'
import store from './redux'
import { createWorkers } from './redux'

class DiscoverBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            width: "586.703px",
            renderArray : [],
            currentWorker : {

            }
        }
    }

    componentDidMount() {
        this.createGoogleMap()

    }

    changeAllViews = (key) => {
        // sets the state to the properties from the WorkerCard
        // need to pull ratings using the key from the store
        let workerProps = store.getState()[key]
        let netRating = 0;
        
        workerProps.ratings.forEach(score =>{
            netRating += score
        })

        // Now we know who the current worker is
        this.setState({
            currentWorker : {
                name: workerProps.name,
                ratings: workerProps.ratings,
                homeowners: workerProps.homeowners,
                job: workerProps.job,
                netRating
            }
        })
    }

    getHomeowners = () => {
        let arr = []
        if (this.state.currentWorker.homeowners) {
            this.state.currentWorker.homeowners.forEach(homeowner => {
                arr.push(<HomeownerCard name={homeowner.name} job={this.state.currentWorker.job} rating={homeowner.netRating}></HomeownerCard>)
            })
        }
        return arr
    }

    getScore = (num) => {
        let returnNum = 0;
        if (this.state.currentWorker.ratings) {
            returnNum = this.state.currentWorker.ratings[num]
        }
        return returnNum + "/10"
    }

    createGoogleMap = () => {
        new window.google.maps.Map(document.getElementById('discover-mapbody'), {
            zoom: 7,
            center: {
                lat: 33.171136,
                lng:  -96.743538
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = () => {
        store.dispatch(createWorkers(this.state.text))
        let temp = []
        for (let i = 0; i < store.getState().length; i++) {
            let workerProps = store.getState()[i]
            temp.push(<WorkerCard key= {i} keyProp={i} propertyPasser={(key) => this.changeAllViews(key)} name={workerProps.name} job={workerProps.job} quote={workerProps.quote}></WorkerCard>)
        }    
        this.setState({
            renderArray: temp
        })
    }

    render() {
        let style = {
            width: this.state.width
        }

        return (
            <div id="discover-body">
                <div id="discover-search-container">
                    <p id="discover-description">Search for a task, and WorkLink’s algorithm will find workers used by your community</p>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input id="discover-searchbar" style={style} placeholder="Search..." value={this.state.text} onChange={this.handleChange}></input>
                        <button onClick={this.handleSubmit} id="discover-searchbutton">Search</button>
                    </div>
                    
                </div>
                <div id="discover-main-container">
                    <div id="discover-workerlist">
                        <h2 id="discover-worker-header">Workers</h2> 
                        <p id="discover-workerdesc">Select a profile to view more</p>
                        <div id="discover-workercards">
                             <Scrollbars>
                                {
                                    this.state.renderArray
                                }
                            </Scrollbars>    

                        </div>
                    </div>
                    <div id="discover-mapandstats">
                        <div id="discover-map">
                            <div id="discover-mapbody"></div>
                            <div id="discover-homeownersbody">
                                <h2 style={{marginBottom: '10px'}} id="discover-worker-header">Homeowners</h2> 
                                <Scrollbars>
                                {
                                    this.getHomeowners()
                                }
                                </Scrollbars>
                                
                                
                            </div>
                        </div>
                        <div id="discover-stats">
                            <div id="discover-rawstats">
                                <h3 id="discover-name">{this.state.currentWorker.name || ""}</h3>
                                <p id="discover-portfolio">Portfolio</p>
                                <div id="discover-statsgrid">
                                    <div className="discover-metric">
                                        <div className="discover-ratingbg">
                                            <h3 className="discover-ratingnum">{this.getScore(0)}</h3>
                                        </div>
                                        <p className="discover-ratingtype">Punctuality</p>
                                    </div>
                                    <div className="discover-metric">
                                        <div className="discover-ratingbg">
                                            <h3 className="discover-ratingnum">{this.getScore(1)}</h3>
                                        </div>
                                        <p className="discover-ratingtype">Effectiveness</p>
                                    </div>
                                    <div className="discover-metric">
                                        <div className="discover-ratingbg">
                                            <h3 className="discover-ratingnum">{this.getScore(2)}</h3>
                                        </div>
                                        <p className="discover-ratingtype">Communication</p>
                                    </div>
                                    <div className="discover-metric">
                                        <div className="discover-ratingbg">
                                            <h3 className="discover-ratingnum">{this.getScore(3)}</h3>
                                        </div>
                                        <p className="discover-ratingtype">Time Efficiency</p>
                                    </div>
                                </div>
                            </div>
                            <div id="discover-photoportfolio">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiscoverBody;