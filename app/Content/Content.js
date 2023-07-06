import React,{useState,useEffect} from 'react';
import Todo from './Todo';
import In_work from './In_work';
import Review from './Review';
import Done from './Done';

const Content = () => {

    let arr = [{status:"todo",task:"Hello everyone !!!",id:"1"},{status:"todo",task:"Make money online",id:"2"},{status:"in_work",task:"Types of paper in catalog",id:"3"},{status:"review",task:"Astronomy or Astrology",id:"4"},{status:"done",task:"Copper Canyon",id:"5"},{status:"in_work",task:"Global resort network",id:"8"},{status:"in_work",task:"Development Apps",id:"6"},{status:"in_work",task:"Copper Canyon",id:"7"},{status:"todo",task:"Search Engine Optimization",id:"9"},{status:"todo",task:"Statistic of successfull person",id:"10"},{status:"todo",task:"Getting Free Publicity",id:"11"},{status:"done",task:"Astronomy binoculars are great",id:"12"}];
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
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{width:"15vw",marginLeft:"2.4vw"}}>
                            <Review arr={review_arr} />
                        </div>
                        <div style={{width:"15vw",marginLeft:"2.4vw"}}>
                            <Done arr={done_arr} />
                        </div>
                    </div>
                    <div style={{marginTop:"5vh",marginLeft:"4vw",width:"20vw",height:"32vh",borderRadius:"15px",backgroundColor:"white",display:"flex",flexDirection:"column"}}>
                        <div style={{paddingLeft:"2vw",width:"25vw",height:"5vh",display:"flex",flexDirection:"row"}}>
                            <p style={{display:"inline",fontSize:"3vw",color:"blue",marginTop:"-2vh"}}>.</p>
                            <p style={{display:"inline",fontSize:"0.8vw",marginTop:"3vh",marginLeft:"1vw",marginRight:"1vw"}}>Development Apps</p>
                            <p><img src='/attach.png' style={{width:"1.5vw",height:"3vh",display:"inline",opacity:"0.3",marginTop:"3vh",rotate:"45deg"}} /></p>
                        </div>
                        <div style={{paddingLeft:"2vw",marginTop:"3vh",display:"flex",flexDirection:"row"}}>
                            <p style={{fontSize:"0.8vw"}}>-{`${'>'}`}&nbsp;&nbsp; 4 Subtask </p>
                            <p style={{fontSize:"0.8vw"}}><img src='/time.png' style={{marginLeft:"3vw",width:"1.5vw",height:"3vh",display:"inline",opacity:"0.3"}} /> &nbsp;Time monitored!</p>
                        </div>
                        <div style={{paddingLeft:"2vw",marginTop:"3vh",display:"flex",flexDirection:"row"}}>
                            <p style={{fontSize:"0.8vw"}}><img src='/cloud.png' style={{width:"1.5vw",height:"3vh",display:"inline",opacity:"0.3"}} />&nbsp; 3 Files </p>
                            <p style={{fontSize:"0.8vw"}}><img src='/email.png' style={{marginLeft:"4vw",width:"1.5vw",height:"3vh",display:"inline",opacity:"0.3"}} /> &nbsp;7 emails</p>
                        </div>
                        <div style={{paddingLeft:"2vw",marginTop:"3vh",display:"flex",flexDirection:"row"}}>
                            <p style={{fontSize:"0.8vw"}}><img src='/alfred.png' style={{width:"1.5vw",height:"3vh",display:"inline",borderRadius:"50%"}} />&nbsp; Alfred Bryant </p>
                        </div>
                        <div style={{borderBottom:"1px solid #e1e1e1",marginTop:"1vh"}} />
                        <div style={{display:"flex",flexDirection:"row",marginTop:"1vh"}}>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <p style={{marginLeft:"2vw",fontSize:"0.8vw"}}>Start Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Date</p>
                                <p style={{marginLeft:"2vw",fontSize:"0.7vw"}}>Sept 3 , 9:00 pm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sept 4 , 9:00 pm</p>
                            </div>
                            <div>
                                <img src='/right_arrow.png' style={{width:"1.5vw",height:"3vh",opacity:"0.3",marginLeft:"1.5vw",marginTop:"1vh"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Content;