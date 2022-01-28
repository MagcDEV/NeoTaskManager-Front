import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav id="sidebar" className="col-2 d-flex flex-column h-100 border justify-content-around">
			<div>
				<h4>Neo Task</h4>
			</div>
			<div>Home</div>
			<div>Create Task</div>
			<div>All Task</div>
			<div>Account</div>
			<div>Log Out</div>
        </nav>
	);
};
