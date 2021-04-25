import "./sidebar.css";
import logo from "../../assets/logo.png";
import React, { opensidebar } from 'react';
import BookView from "../text/bookView";
import { Form, Button, FormControl } from 'react-bootstrap';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__img">
                <img src={logo} alt="logo" className="img-responsive" />
                <h1>Zepto</h1>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}>
                </i>

            </div>
            <div className="sidebar__menu">

                <Form inline className="inline">
                    <i className="fa fa-search icn" aria-hidden="true"></i>
                    <FormControl type="text" placeholder="Search" className="search" />

                </Form>

                <div className="mobil-nav">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-home"></i>
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-archive"></i>
                        <a href="#">Play Area</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-wrench"></i>
                        <a href="#">Widgets</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-building-o"></i>
                        <a href="#">Templates</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-user-secret" aria-hidden="true"></i>
                        <a href="#">Data Lockers</a>
                    </div>
                </div>


                <h2>My Dashboard</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                    <a href="#">Finance</a>
                </div>
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Sales</a>
                </div>
                <div className="sidebar__link">                   
                        <BookView />                   
                </div>


                {/* <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee Management</a>
                </div> */}
                {/* <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div> */}
                {/* <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div> */}

                <h2>Shared <i class="fa fa-users" aria-hidden="true"></i></h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Shared 01</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Shared 02</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Shared 03</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Shared 04</a>
                </div>


            </div>

        </div>

    )
}


export default Sidebar;