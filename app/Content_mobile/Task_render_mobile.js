import React from 'react';

const Task_render_mobile = (props) => {
    return (
        <>
            <div style={{width:"80vw",height:"16vh",backgroundColor:"white",display:"flex",flexDirection:"column",paddingLeft:"5vw",marginBottom:"5vh",paddingTop:"2vh",borderRadius:"5px"}}>
                <p>Task no. - {props.task.id}</p>
                <p>{props.task.task}</p>
            </div>
        </>
    )
}

export default Task_render_mobile;