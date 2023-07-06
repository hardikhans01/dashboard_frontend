import React from "react";
import Task_render_mobile from "../Content_mobile/Task_render_mobile";

const Review_mobile = (props) => {
    const arr = props.arr;
    return (
        <>
            <div>
                <div style={{width:"80vw",height:"10vh",backgroundColor:"white",borderRadius:"5px",boxShadow:"0.5px 0.5px gray",display:"flex",alignItems:"center",paddingLeft:"5vw",marginBottom:"5vh"}}>
                    <p>Review</p>
                    <p style={{marginLeft:"7vw",borderRadius:"50%",border:"2px solid gray",width:"8vw",textAlign:"center"}}>{arr.length}</p>
                    <img src='/3dot.png' style={{marginLeft:"25vw",width:"6vw",height:"4vh"}} />
                    <img src='/plus.png' style={{width:"6vw",height:"4vh",marginLeft:"8vw"}} />
                </div>
                {/* <img src='/feather.png' style={{width:"80vw",height:"40vh",marginTop:"5vh",borderRadius:"5px"}} /> */}
                {
                    arr.length>0?
                    arr.map(e=>{
                        return <Task_render_mobile task = {e} />
                    })
                    :""
                }
                <div style={{width:"80vw",height:"15vh",borderRadius:"8px",backgroundColor:"white",display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",width:"80vw",height:"7vh",marginBottom:"1vh"}}>
                        <p style={{marginLeft:"5vw",marginTop:"1.5vh",fontSize:"4vw",fontWeight:"bold"}}><img src="/cross.png" style={{width:"5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"5vw"}} /> Type your Task
                        <img src="/sam.png" style={{marginLeft:"20vw",width:"7vw",height:"4vh",borderRadius:"50%",display:"inline"}} />
                        </p>
                    </div>
                    <div>
                        <img src="/attach.png" style={{marginLeft:"5vw",width:"5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"4vw"}} />
                        <img src="/time.png" style={{width:"5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"40vw"}} />
                        <button style={{backgroundColor:"blue",color:"white",width:"15vw",height:"4vh",borderRadius:"6px",fontSize:"4vw"}} >Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review_mobile;