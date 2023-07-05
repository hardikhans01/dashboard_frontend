import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <div className='desktop-nav bg-gray-100'>
            <a href='#' className='nav-comp' >
                <p className='nav-comp-style'>
                    <img src={'/list.png'} className='nav-icon-img'/>
                    &nbsp;&nbsp;List Tasks
                </p>
            </a>
            <a href='#' className='nav-comp' >
                <p className='nav-comp-style' style={{color:"blue",paddingBottom:"1vh",borderBottomWidth:"2px",borderBottomColor:"blue"}}>
                    <img src={'/boards.png'} className='nav-icon-img' />
                    &nbsp;&nbsp;Boards
                </p>
            </a>
            <a href='#' className='nav-comp' >
                <p className='nav-comp-style'>
                    <img src={'/calendar.png'} className='nav-icon-img' />
                    &nbsp;&nbsp;Calendar
                </p>
            </a>
            <a href='#' className='nav-comp' >
                <p className='nav-comp-style'>
                    <img src={'/gantt.png'} className='nav-icon-img' />
                    &nbsp;Gantt
                </p>
            </a>
            <a href='#' className='nav-comp' >
                <p className='nav-comp-style'>
                    <img src={'/timeline.png'} className='nav-icon-img' />
                    &nbsp;Timeline
                </p>
            </a>
            <a href='#' className='nav-comp' >
                <p className='nav-comp-style'>
                <img src={'/activity.png'} className='nav-icon-img' />
                &nbsp;Activity</p>
            </a>
            <div className='search-div' style={{paddingLeft:"1vw",marginLeft:"2vw",display:"flex"}}>
            <img src={'/search.png'} className='nav-img-style'/>
            <input type='search' className='nav-search bg-white rounded shadow nav-comp-style' placeholder='Search Tasks' />
            </div>
        </div>
    </div>
  );
};

export default Navbar;
