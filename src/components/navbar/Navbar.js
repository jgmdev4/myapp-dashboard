import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import React, { opensidebar } from 'react';

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </a>
                <a className="active_link" href="#">Dashboard</a>
                <a href="#">Play Area</a>
                <a href="#">Widgets</a>
                <a href="#">Templates</a>
                <a href="#">Data Lockers</a>

            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="" />
                </a>
                <a href="#">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    {/* <i className="fa fa-clock-o" aria-hidden="true"></i> */}
                </a>


            </div>

        </nav>

    )
}

export default Navbar;