import React,{useState,useEffect} from 'react';
import Todo from './Todo';
import In_work from './In_work';
import Review from './Review';
import Done from './Done';

const Content = () => {

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
            <div style={{maxWidth:"70vw",paddingTop:"3vh",paddingLeft:"3vw",display:"flex",flexDirection:"row"}}>
                <div style={{width:"15vw",minHeight:"60vh"}}>
                    <Todo arr={todo_arr} />
                </div>
                <div style={{width:"15vw",marginLeft:"2.4vw"}}>
                    <In_work arr={work_arr} />
                </div>
                <div style={{width:"15vw",marginLeft:"2.4vw"}}>
                    <Review arr={review_arr} />
                </div>
                <div style={{width:"15vw",marginLeft:"2.4vw"}}>
                    <Done arr={done_arr} />
                </div>
            </div>            
        </>
    )
}

export default Content;