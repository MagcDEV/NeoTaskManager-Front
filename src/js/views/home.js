import React from "react";
import "../../styles/home.css";
import { Navbar } from "../component/Navbar.jsx";
import {SearchBar} from "../component/SearchBar.jsx"


export const Home = () => (
	<div className="container-fluid mt-5 h-100">
        <div className="row h-100">
            <Navbar/>
            <div id="layout" className="col-10 h-100 border">
                <div className="row m-2 justify-content-between">
                    <SearchBar/>
                    <div className="col-6">
                        <h4 className="text-center align-middle">
                            Hello, Manuel
                        </h4>
                    </div>
                </div>
                <div className="row justify-content-around h-100">
                    <div className="col-3 border h-100">To Do</div>
                    <div className="col-3 border h-100">In progress</div>
                    <div className="col-3 border h-100">Completed</div>
                </div>
            </div>
        </div>
	</div>
);
