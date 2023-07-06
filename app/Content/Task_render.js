import React from 'react';

const Task_render = (props) => {
    // console.log(props , ' -> props')
    return (
        <>
            <div style={{width:"14vw",height:"8vh",marginBottom:"1vh",backgroundColor:"white",paddingLeft:"1vw",fontSize:"0.8vw",borderRadius:"5px",paddingTop:"0.8vh"}}>
                <p style={{color:"gray"}}> Task no. - {props.task.id} {!(props.task.status=='todo'&&(props.task.id==2||props.task.id==3))?<img src='/sam.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline-block",marginLeft:"4vw"}} />: 
                <div style={{display:"inline-block",marginLeft:`${props.task.id==2?2:""}vh`}}>
                    <img src='/alfred.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline",marginLeft:"2vw"}} />
                    <img src='/sam.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline",marginLeft:"-1vw"}} />
                    {props.task.id==3&&props.task.status=='todo'?<img src='/alfred.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline",marginLeft:"-1vw"}} />:""}
                </div>
                }</p>
                <p>{props.task.task}</p>
            </div>
            {props.task.status=='in_work' && props.task.id==1?
                <div>
                    <img src='/resort.png' style={{width:"13vw",height:"18vh",borderRadius:"5px"}} />
                </div>:""
            }
        </>
    )
}

export default Task_render;