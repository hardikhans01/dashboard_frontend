import React from 'react';
import Navbar from './Navbar';
import Content from '../Content/Content';
import Navbar_mobile from './../Components_mobile/Navbar_mobile';
import './Navbar.css';

const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-100 complete_struct">
        <header className="bg-white shadow">
          <Navbar />
        </header>
        <main>
          <Content />
        </main>
      </div>
      <div className='mobile_struct bg-gray-100'>
        <header className="shadow">
          <Navbar_mobile />
        </header>
        <main>
          <Content />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
