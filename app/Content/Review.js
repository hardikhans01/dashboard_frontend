import React from "react";
import Task_render from "./Task_render";

const Review = (props) => {
    const arr = props.arr;
    return (
        <>
            <div style={{cursor:"default"}}>
                <div style={{borderRadius:"5px",backgroundColor:"white",width:"14vw",height:"6vh",paddingTop:"0.8vh",paddingLeft:"1vw",marginBottom:"2vh",boxShadow:"0.5px 0.5px gray"}}>
                    <p style={{display:"inline",fontSize:"0.9vw",fontWeight:"bold"}}>Review</p>
                    <p style={{marginLeft:"1vw",border:"1px solid gray",borderRadius:"50%",width:"1.2vw",display:"inline-block",textAlign:"center",fontSize:"0.8vw",color:"gray"}}>{arr.length}</p>
                    <img src='/3dot.png' style={{width:"1vw",display:"inline-block",marginLeft:"2.5vw",cursor:"pointer"}} />
                    <img src='/plus.png' style={{width:"1vw",display:"inline-block",marginLeft:"1.5vw",cursor:"pointer"}} />
                </div>
                {/* <div>
                    <img src='/feather.png' style={{width:"19vw",height:"28vh",borderRadius:"5px"}} />
                </div> */}
                {
                    arr.length?
                    arr.map(e=>{
                        return <Task_render task ={e} />
                    })
                    :""
                }
                <div style={{width:"14vw",height:"12vh",borderRadius:"8px",backgroundColor:"white",display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",width:"14vw",height:"7vh"}}>
                        <p style={{marginLeft:"0.5vw",marginTop:"1.5vh",fontSize:"1vw"}}><img src="/cross.png" style={{width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"1vw"}} /> Type your Task
                        <img src="/sam.png" style={{marginLeft:"1vw",width:"1.5vw",height:"3vh",borderRadius:"50%",display:"inline"}} />
                        </p>
                    </div>
                    <div>
                        <img src="/attach.png" style={{marginLeft:"0.5vw",width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"1vw"}} />
                        <img src="/time.png" style={{width:"1.5vw",height:"3vh",opacity:"0.3",display:"inline",marginRight:"4vw"}} />
                        <button style={{backgroundColor:"blue",color:"white",width:"4vw",height:"3vh",borderRadius:"6px",fontSize:"1vw"}} >Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;