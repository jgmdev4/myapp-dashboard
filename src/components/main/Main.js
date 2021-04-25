import "./main.css";
import React from 'react';
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
import Clock from "../clock/Clock";
import Model from "../model/Model";


const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <Clock />
                    <div className="main__greeting">
                        <div className="wrap">
                            <h1>Hello Zepto</h1>
                            <p>Welcome to your Sales Dashboard</p>
                        </div>
                        
                    </div>
                </div>
                <Model />
                <div className="main__cards">
                    <div className="card">
                        <i
                            className="fa fa-user-o fa-2x text-lightblue"
                            aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Subscribers</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i
                            className="fa fa-video-camera fa-2x text-yellow"
                            aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title">340</span>
                        </div>
                    </div>

                    <div className="card">
                        <i
                            className="fa fa-thumbs-up fa-2x text-green"
                            aria-hidden="true"
                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>
                </div>

                <div class="charts">
                    <div class="charts__left">
                        <div class="charts__left__title">
                            <div className="chart_left_head">
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i class="fa fa-usd" ></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>

                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$124,200</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>

                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1881</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </main>
    )

}

export default Main;