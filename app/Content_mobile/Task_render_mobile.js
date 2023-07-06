import React from 'react';

const Task_render_mobile = (props) => {
    return (
        <>
            <div style={{width:"80vw",minHeight:"12vh",backgroundColor:"white",display:"flex",flexDirection:"column",paddingLeft:"5vw",marginBottom:"2vh",paddingTop:"2vh",borderRadius:"10px"}}>
                <p>Task no. - {props.task.id} 
                { !(props.task.status=='todo' &&(props.task.id==2 || props.task.id==3))?
                    <img src='/sam.png' style={{width:"8vw",height:"8vw",display:"inline-block",borderRadius:"50%",marginLeft:"42vw"}} />:
                    props.task.id==2?
                        <div style={{display:"inline"}}>
                            <img src='/alfred.png' style={{width:"8vw",height:"8vw",display:"inline-block",borderRadius:"50%",marginLeft:"38vw"}} />
                            <img src='/sam.png' style={{width:"8vw",height:"8vw",display:"inline-block",borderRadius:"50%",marginLeft:"-4vw"}} />
                        </div>
                        :
                        <div style={{display:"inline"}}>
                            <img src='/alfred.png' style={{width:"8vw",height:"8vw",display:"inline-block",borderRadius:"50%",marginLeft:"34vw"}} />
                            <img src='/sam.png' style={{width:"8vw",height:"8vw",display:"inline-block",borderRadius:"50%",marginLeft:"-4vw"}} />
                            <img src='/alfred.png' style={{width:"8vw",height:"8vw",display:"inline-block",borderRadius:"50%",marginLeft:"-4vw"}} />
                        </div>
                
                }
                </p>
                <p>{props.task.task}</p>
                {
                    props.task.status=='todo'&&props.task.id==1?
                    <div style={{marginTop:"1.5vh",paddingBottom:"1vh"}}>
                        <img src='/attach.png' style={{display:"inline-block",width:"4vw",height:"3vh",opacity:"0.3"}} /><p style={{display:"inline",fontSize:"4vw",marginLeft:"2vw"}}>2</p>
                        <img src='/time.png' style={{display:"inline",width:"5vw",height:"3vh",marginLeft:"31vw",opacity:"0.3",marginRight:"2vw"}} />
                        <p style={{display:"inline",fontSize:"4vw",fontWeight:"bold"}}>3 days left !</p>
                    </div>
                    :""
                }
                {
                    props.task.status=='in_work' && props.task.id==2?
                    <div style={{marginTop:"1.5vh",paddingBottom:"1vh"}}>
                        <img src='/attach.png' style={{display:"inline-block",width:"4vw",height:"3vh",opacity:"0.3"}} /><p style={{display:"inline",fontSize:"4vw",marginLeft:"2vw"}}>4</p>
                        <img src='/time.png' style={{display:"inline",width:"5vw",height:"3vh",marginLeft:"31vw",opacity:"0.3",marginRight:"2vw"}} />
                        <p style={{display:"inline",fontSize:"4vw",fontWeight:"bold"}}>6 days left !</p>
                    </div>
                    :""
                }

                {
                    props.task.status=='in_work' && props.task.id==4?
                    <div style={{marginTop:"1.5vh",paddingBottom:"1vh"}}>
                        <img src='/attach.png' style={{display:"inline-block",width:"4vw",height:"3vh",opacity:"0.3"}} /><p style={{display:"inline",fontSize:"4vw",marginLeft:"2vw"}}>1</p>
                        <img src='/time.png' style={{display:"inline",width:"5vw",height:"3vh",marginLeft:"31vw",opacity:"0.3",marginRight:"2vw"}} />
                        <p style={{display:"inline",fontSize:"4vw",fontWeight:"bold",color:"red"}}>1 day left !</p>
                    </div>
                    :""
                }
            </div>
            {
                props.task.status=='in_work'&&props.task.id==1?
                <img src='/resort.png' style={{width:"80vw",height:"30vh",marginTop:"5vh",borderRadius:"5px"}} />
                :""
            }
        </>
    )
}

export default Task_render_mobile;