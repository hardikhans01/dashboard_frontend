'use client'
import React,{useState,useEffect} from "react";
import Todo_mobile from './../Content_mobile/Todo_mobile';
import In_work_mobile from './../Content_mobile/In_work_mobile';
import Review_mobile from './../Content_mobile/Review_mobile';
import Done_mobile from './../Content_mobile/Done_mobile';
import Review from "../Content/Review";

const Content_mobile = () => {

    let arr = [{status:"todo",task:"Hello everyone !!!",id:"1"},{status:"todo",task:"Make money online",id:"2"},{status:"in_work",task:"Types of paper in catalog",id:"3"},{status:"review",task:"Astronomy or Astrology",id:"4"},{status:"done",task:"Copper Canyon",id:"5"},{status:"in_work",task:"Global resort network",id:"8"},{status:"in_work",task:"Development Apps",id:"6"},{status:"in_work",task:"Copper Canyon",id:"7"},{status:"todo",task:"Search Engine Optimization",id:"9"},{status:"todo",task:"Statistic of successfull person",id:"10"},{status:"todo",task:"Getting Free Publicity",id:"11"},{status:"review",task:"Astronomy binoculars are great",id:"12"}];

    const [todo_arr , SetTodo] = useState([]);
    const [work_arr , SetWork] = useState([]);
    const [review_arr , SetReview] = useState([]);
    const [done_arr , SetDone] = useState([]);
    
    useEffect(()=>{
        const ar_filt = (e) =>{
            if(e.status=='todo'){
                SetTodo((prev)=>{
                    return [...prev,{status:e.status,task:e.task,id:prev.length+1}]
                })
            }else if(e.status=='in_work'){
                SetWork((prev)=>{
                    return [...prev,{status:e.status,task:e.task,id:prev.length+1}]
                })
            }else if(e.status=='review'){
                SetReview((prev)=>{
                    return [...prev,{status:e.status,task:e.task,id:prev.length+1}]
                })
            }else if(e.status=='done'){
                SetDone((prev)=>{
                    return [...prev,{status:e.status,task:e.task,id:prev.length+1}]
                })
            }
        }

        arr.filter(ar_filt);
    },[])

    return (
        <>
            <div style={{overflowX:"scroll",margin:0,padding:0,color:"black"}}>
                <div style={{width:"370vw",display:"flex",flexDirection:"row",height:"80vh",marginTop:"6vh"}}>
                    <div style={{width:"80vw",height:"80vh",marginLeft:"10vw"}}>
                        <Todo_mobile arr={todo_arr} />
                    </div>
                    <div style={{width:"80vw",height:"80vh",marginLeft:"10vw"}}>
                        <In_work_mobile arr={work_arr} />
                    </div>
                    <div style={{width:"80vw",height:"80vh",marginLeft:"10vw"}}>
                        <Review_mobile arr={review_arr} />
                    </div>
                    <div style={{width:"80vw",height:"80vh",marginLeft:"10vw"}}>
                        <Done_mobile arr={done_arr} />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Content_mobile;