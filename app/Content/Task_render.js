import React from 'react';

const Task_render = (props) => {
    // console.log(props , ' -> props')
    return (
        <>
            <div style={{width:"14vw",minHeight:"8vh",marginBottom:"1vh",backgroundColor:"white",paddingLeft:"1vw",fontSize:"0.8vw",borderRadius:"5px",paddingTop:"0.8vh"}}>
                <p style={{color:"gray"}}> Task no. - {props.task.id} {!(props.task.status=='todo'&&(props.task.id==2||props.task.id==3))?<img src='/sam.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline-block",marginLeft:"4vw"}} />: 
                <div style={{display:"inline-block",marginLeft:`${props.task.id==2?2:""}vh`}}>
                    <img src='/alfred.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline",marginLeft:"2vw"}} />
                    <img src='/sam.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline",marginLeft:"-1vw"}} />
                    {props.task.id==3&&props.task.status=='todo'?<img src='/alfred.png' style={{width:"2vw",height:"2vw",borderRadius:"50%",display:"inline",marginLeft:"-1vw"}} />:""}
                </div>
                }</p>
                <p style={{fontWeight:"bold"}}>{props.task.task}</p>
                {
                    (props.task.status=='in_work' && props.task.id==2)?
                    <p style={{fontWeight:"bold"}}>
                        <img src='/attach.png' style={{width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"4vw"}} />
                        <img src='/time.png' style={{width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"1vw"}} />
                        3 days left!
                    </p>
                    :""
                }
                {
                    (props.task.status=='in_work' && props.task.id==4)?
                    <p style={{color:"red",fontWeight:"bold"}}>
                        <img src='/attach.png' style={{width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"4vw"}} />
                        <img src='/time.png' style={{width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"1vw"}} />
                        1 day left!
                    </p>
                    :""
                }
            </div>
            {props.task.status=='in_work' && props.task.id==1?
                <div>
                    <img src='/resort.png' style={{width:"14vw",height:"18vh",borderRadius:"5px"}} />
                </div>:""
            }
        </>
    )
}

export default Task_render;