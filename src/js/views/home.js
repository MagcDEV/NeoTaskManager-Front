import React from "react";
import "../../styles/home.css";
import { Navbar } from "../component/Navbar.jsx";
import {SearchBar} from "../component/SearchBar.jsx"

import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid h-100">
        <div className="row h-100">
            <div className="col-2 border d-flex flex-column h-100 fixed justify-content-around">
                <Navbar/>
            </div>
            <div className="col-10 d-flex h-100 border scrollit">
                <div className="w-100 d-flex flex-column">
                    <div className="w-100 d-flex justify-content-around">
                        <SearchBar/>
                        <h4 className="text-center mt-3">
                            Hello, Manuel
                        </h4>
                    </div>
                    <div className="d-flex w-100 mt-1 justify-content-around h-100">
                        <div className="col-3 border h-100">To Do</div>
                        <div className="col-3 border h-100">In progress</div>
                        <div className="col-3 border h-100">Completed</div>
                    </div>
                </div>
            </div>
        </div>
	</div>
);
