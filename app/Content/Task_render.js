import React from 'react';

const Task_render = (props) => {
    // console.log(props , ' -> props')
    return (
        <>
            <div style={{width:"19vw",height:"12vh",marginBottom:"2vh",backgroundColor:"white",paddingLeft:"1vw",fontSize:"1.2vw",borderRadius:"5px",paddingTop:"0.8vh"}}>
                <p> Task no. - {props.task.id}</p>
                <p>{props.task.task}</p>
            </div>
        </>
    )
}

export default Task_render;