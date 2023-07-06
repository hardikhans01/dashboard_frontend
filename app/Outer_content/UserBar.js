import React from 'react';
import './UserBar.css';

const UserBar = () => {
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",width:"20vw",height:"90vh",alignItems:"center"}}>
                <div style={{marginTop:"3vh",marginBottom:"4vh"}}>
                    <img src='/account.png' style={{width:"2vw",height:"4vh",opacity:"0.3",display:"inline-block"}} />
                    <img src='/3dot.png' style={{width:"1.6vw",height:"3.5vh",opacity:"0.3",display:"inline-block",marginLeft:"7vw"}} />
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{width:"6.5vw",height:"6.5vw",borderRadius:"50%",border:"3px solid blue",borderRightColor:"#e1e1e1",rotate:"-45deg",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img src='/alfred.png' style={{borderRadius:"50%",backgroundColor:"yellow",width:"5vw",height:"5vw",rotate:"45deg",display:"inline-block"}} />
                </div>
                <p style={{position:"relative",zIndex:"1",display:"inline",marginTop:"4vh",backgroundColor:"blue",color:"white",height:"2vw",width:"2vw",textAlign:"center",borderRadius:"50%",marginLeft:"-1vw"}}>2</p>
                </div>
                <div style={{marginTop:"3vh"}} >
                    <p style={{fontWeight:"bold",marginBottom:"1vh",fontSize:"0.8vw"}}>Hello Alfred Bryant</p>
                    <p style={{fontSize:"0.6vw"}}>adrain.nader@yahoo.com</p>
                </div>
                <div style={{marginTop:"5vh",width:"16vw",height:"40vh",borderRadius:"8px",display:"flex",flexDirection:"column"}} >
                    <div style={{display:"flex",flexDirection:"row"}} >
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/boards.png' style={{height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >Dashboard</p>
                        </div>
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/task.png' style={{opacity:"0.3",height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >Notes</p>
                        </div>
                    </div>

                    <div style={{display:"flex",flexDirection:"row"}} >
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/task.png' style={{opacity:"0.3",height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >Task</p>
                        </div>
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/cloud.png' style={{opacity:"0.3",height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >Files</p>
                        </div>
                    </div>

                    <div style={{display:"flex",flexDirection:"row"}} >
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/email.png' style={{opacity:"0.3",height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >email</p>
                        </div>
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/customer.png' style={{opacity:"0.3",height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >clients</p>
                        </div>
                    </div>

                    <div style={{display:"flex",flexDirection:"row"}} >
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/calendar.png' style={{height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >Calendar</p>
                        </div>
                        <div style={{width:"8vw",height:"10vh",border:"1px solid #e1e1e1",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}} className='user_comp'>
                            <img src='/wrench.png' style={{opacity:"0.3",height:"3vh",width:"1.5vw",marginBottom:"1.5vh"}} />
                            <p style={{fontSize:"0.8vw"}} >settings</p>
                        </div>
                    </div>
                    
                </div>

                <div style={{marginTop:"4vh",border:"2px solid #e1e1e1",borderRadius:"20px"}} >
                    <img src='/app_draw.png' style={{width:"15vw",height:"5vh",borderRadius:"20px"}} />
                </div>

            </div>
        </>
    )
}

export default UserBar;