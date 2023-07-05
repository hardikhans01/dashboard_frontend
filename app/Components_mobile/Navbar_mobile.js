'use client'
import React,{useState} from 'react';

const Navbar_mobile = () => {

    const comp_arr = [{id:"1",name:"List Tasks",img:"/list.png"},{id:"2",name:"Boards",img:"/boards.png"},{id:"3",name:"calendar",img:"/calendar.png"},{id:"4",name:"Gantt",img:"/gantt.png"},{id:"5",name:"Timeline",img:"/timeline.png"},{id:"6",name:"Activity",img:"/activity.png"}]

    const [i,SetI] = useState(1);

    const cl_Handler = (a) => {
        if(i+a<=5 && i+a>=0){
            SetI(i+a);
        }
    }

    return (
        <>
            <div>
                <div style={{height:"10vh",display:"flex",flexDirection:"row",curson:"default"}}>
                    <div style={{display:"flex",alignItems:"center",paddingLeft:"3vw",cursor:"pointer"}} onClick={()=>{cl_Handler(-1)}}>
                        <img src='/left_arrow.png' style={{width:"8vw",height:"5vh"}} />
                    </div>
                    <div style={{display:"inline-flex",width:"50vw",height:"5vh",alignSelf:"center",marginLeft:"7vw",marginRight:"7vw",alignItems:"center",justifyContent:"center",borderBottom:`${i==1?"3px solid blue":""}`,paddingBottom:"2vh"}}>
                        <img src={`${comp_arr[i].img}`} style={{width:"7vw",height:"5vh",marginRight:"2vw"}} /> 
                        <p style={{color:`${i==1?"blue":""}`}}>{comp_arr[i].name}</p>
                    </div>
                    <div style={{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={()=>{cl_Handler(1)}}>
                        <img src='/right_arrow.png' style={{width:"8vw",height:"5vh"}} />
                    </div>
                    <div style={{display:"flex",alignItems:"center",marginLeft:"5vw"}}>
                        <img src='/search_icon.png' style={{width:"8vw",height:"5vh"}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar_mobile;