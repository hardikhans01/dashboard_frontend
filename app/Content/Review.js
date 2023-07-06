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
            </div>
        </>
    )
}

export default Review;