import React from 'react';

const SideBar = () => {
    return (
        <>
            <div style={{width:"4vw",display:"flex",flexDirection:"column",height:"90vh",marginRight:"2vw",border:"1px solid #e1e1e1"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <img src='/compass.png' style={{opacity:"0.4",width:"3vw",height:"4vh",marginTop:"4vh",paddingLeft:"1vw"}} />
                    <img src='/star.png' style={{opacity:"0.4",width:"3vw",height:"4vh",marginTop:"4vh",paddingLeft:"1vw"}} />
                    <img src='/messenger.png' style={{opacity:"0.4",width:"3vw",height:"4vh",marginTop:"4vh",paddingLeft:"1vw"}} />
                    <img src='/activity.png' style={{opacity:"0.4",width:"3vw",height:"4vh",marginTop:"4vh",paddingLeft:"1vw"}} />
                </div>
                <div style={{width:"4vw",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"30vh"}} >
                    <img src='/alfred.png' style={{width:"3vw",height:"3vw",borderRadius:"50%"}} />
                    <img src='/sam.png' style={{width:"3vw",height:"3vw",borderRadius:"50%",marginTop:"2vh"}} />
                    <img src='/alfred.png' style={{width:"3vw",height:"3vw",borderRadius:"50%",marginTop:"2vh"}} />
                </div>
            </div>
        </>
    )
}

export default SideBar;