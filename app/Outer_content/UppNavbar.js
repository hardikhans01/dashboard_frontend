import React from "react";

const UppNavbar = ()=>{
    return (
        <>
            <div className="bg-gray-100" style={{display:"flex",flexDirection:"row",alignItems:"center",width:"100vw",height:"10vh",border:"1px solid #e1e1e1"}}>
                <div style={{marginLeft:"1.3vw",border:"0px solid #e1e1e1",borderRadius:"50%",backgroundColor:"white",display:"flex",alignItems:"center",height:"4.5vh",width:"2.2vw",justifyContent:"center"}}>
                <img src='/menu.png' style={{width:"2vw",height:"3vh",display:"inline",opacity:"0.3"}} />
                </div>
                <div style={{marginLeft:"2vw"}}>
                    <p style={{fontSize:"1.3vw",fontWeight:"bold",color:'#3e3b3b'}}>Constructor</p>
                </div>
                <div style={{marginLeft:"4vw"}}>
                    <p style={{fontSize:"1vw",fontWeight:"bold",opacity:"0.8"}}>Dashboard</p>
                </div>
                <div style={{marginLeft:"1.5vw"}}>
                    <p style={{fontSize:"1vw",fontWeight:"bold",opacity:"0.8"}}>About Us</p>
                </div>
                <div style={{marginLeft:"1.5vw"}}>
                    <p style={{fontSize:"1vw",fontWeight:"bold",opacity:"0.8"}}>News</p>
                </div>
                <div style={{marginLeft:"1.5vw"}}>
                    <p style={{fontSize:"1vw",fontWeight:"bold",opacity:"0.8"}}>User Policy</p>
                </div>
                <div style={{marginLeft:"1.5vw"}}>
                    <p style={{fontSize:"1vw",fontWeight:"bold",opacity:"0.8"}}>Contacts</p>
                </div>
                <div style={{marginLeft:"1.5vw"}}>
                    <img src="/3dot.png" style={{width:"2vw",height:"4vh",opacity:"0.3"}} />
                </div>
                <div style={{marginLeft:"5vw",width:"23vw"}} >
                    <img src="/search.png" style={{width:"1.7vw",height:"3vh",zIndex:1,position:"relative",display:"inline"}} />
                    <input type="search" style={{marginLeft:"-3vw",width:"22vw",height:"5.5vh",borderRadius:"20px",border:"1px solid #e1e1e1",paddingLeft:"3.5vw",fontSize:"0.8vw",display:"inline"}} placeholder="Search products, orders and clients" />
                    <img src='/right_arrow.png' style={{width:"1.7vw",height:"3vh",display:"inline-block",opacity:"0.3",marginLeft:"-3vw"}} />
                </div>
                <div>
                    <img src="/user.png" style={{width:"1.7vw",height:"3vh",opacity:"0.3",display:"inline-block"}} />
                    <p style={{display:"inline-block",marginLeft:"1vw"}}>Clayton Santos</p>
                    <img src="/bell.png" style={{marginLeft:"1vw",width:"2vw",height:"4vh",display:"inline-block",opacity:"0.3"}} />
                    <img src="/cross.png" style={{marginLeft:"1vw",width:"2vw",height:"4vh",display:"inline-block",opacity:"0.3"}} />
                </div>
            </div>
        </>
    )
}

export default UppNavbar;