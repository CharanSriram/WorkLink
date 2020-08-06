import React from 'react'
import './discover.css'
//
function WorkerCard(props) {
    let images = ["https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://www.hashatit.com/images/uploads/users/74336/profile_picture/189315459.jpg", "https://avatars2.githubusercontent.com/u/273509?s=400&u=66cc2a005c432ba73aebf3495314bf5db0d98d96&v=4", "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg"]
    let style = [
        {
            position: "relative", 
            bottom: "10px"
        },
        {
            height: "100%"
        },
        {
            height: "120%",
            position: "relative"
        },
        {
            height: "120%",
            position: "relative",
            bottom: "3px",
            left: "5px"
        }
    ]

    return (
        <div onClick={() => props.propertyPasser(props.keyProp)} className="workercard-body">
            <div className= "workercard-pfp">
                <img style={style[props.keyProp]}className="workercard-pfpimage" alt="pfp" src={images[props.keyProp]}/>
            </div>
            <div className="workercard-textcontainer">
                <p className="workercard-name">{props.name}</p>
                <p className="workercard-job">{props.job}</p>
                <p className="workercard-quote">"{props.quote}"</p>
            </div>
        </div>
    )
}

export default WorkerCard