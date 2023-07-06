import React from "react";
import Task_render_mobile from "../Content_mobile/Task_render_mobile";

const In_work_mobile = (props) => {
    const arr = props.arr;
    return (
        <>
            <div>
                <div style={{width:"80vw",height:"10vh",backgroundColor:"white",borderRadius:"5px",boxShadow:"0.5px 0.5px gray",display:"flex",alignItems:"center",paddingLeft:"5vw",marginBottom:"5vh"}}>
                    <p>In Work</p>
                    <p style={{marginLeft:"7vw",borderRadius:"50%",border:"2px solid gray",width:"8vw",textAlign:"center"}}>{arr.length}</p>
                    <img src='/3dot.png' style={{marginLeft:"25vw",width:"6vw",height:"4vh"}} />
                    <img src='/plus.png' style={{width:"6vw",height:"4vh",marginLeft:"8vw"}} />
                </div>
                {/* <img src='/resort.png' style={{width:"80vw",height:"40vh",marginTop:"5vh",borderRadius:"5px"}} /> */}
                {
                    arr.length>0?
                    arr.map(e=>{
                        return <Task_render_mobile task = {e} />
                    })
                    :""
                }
            </div>
        </>
    )
}

export default In_work_mobile;