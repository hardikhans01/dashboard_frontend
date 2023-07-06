'use client'
import React from 'react';
import Navbar from './Navbar';
import Content from '../Content/Content';
import Navbar_mobile from './../Components_mobile/Navbar_mobile';
import Content_mobile from './../Components_mobile/Content_mobile';
import UppNavbar from './../Outer_content/UppNavbar';
import SideBar from './../Outer_content/SideBar';
import UserBar from './../Outer_content/UserBar';
import './Navbar.css';

const Dashboard = () => {
  return (
    <div className='bg-gray-100' style={{width:"100vw",height:"100vh",margin:0,padding:0,color:"gray"}}>
      <div className="bg-gray-100 complete_struct">
        <UppNavbar />
        <div style={{display:"flex",flexDirection:"row"}}>
          <SideBar />
          <UserBar />
        <div  style={{display:"flex",marginTop:"3vh",flexDirection:"column",width:"72vw",height:"86vh",border:"1px solid #e1e1e1",color:"gray",borderRadius:"8px"}}>
          <header className="bg-white shadow">
            <Navbar />
          </header>
          <main>
            <Content />
          </main>
          </div>
        </div>
      </div>
      <div className='mobile_struct bg-gray-100'>
        <header className="shadow">
          <Navbar_mobile />
        </header>
        <main>
          <Content_mobile />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
