import React from "react";
import Task_render from "./Task_render";

const Done = (props) => {
    const arr=props.arr;
    return (
        <>
            <div style={{cursor:"default"}}>
                <div style={{borderRadius:"5px",backgroundColor:"white",width:"19vw",height:"8vh",paddingTop:"2vh",paddingLeft:"1vw",marginBottom:"4vh",boxShadow:"0.5px 0.5px gray"}}>
                    <p style={{display:"inline",fontSize:"1.3vw"}}>Done</p>
                    <p style={{marginLeft:"2vw",border:"1px solid gray",borderRadius:"50%",width:"1.8vw",display:"inline-block",textAlign:"center",fontSize:"1.2vw"}}>{arr.length}</p>
                    <img src='/3dot.png' style={{width:"2vw",display:"inline-block",marginLeft:"4vw",cursor:"pointer"}} />
                    <img src='/plus.png' style={{width:"2vw",display:"inline-block",marginLeft:"2vw",cursor:"pointer"}} />
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

export default Done;