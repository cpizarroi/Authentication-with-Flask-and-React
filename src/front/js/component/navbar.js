import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>
			<div className="container">
				<div className="d-flex p-1">
					<img src="https://cdn.pixabay.com/photo/2016/10/02/19/50/brain-1710293_960_720.png" style={{width: 4+"rem"}}/>
					<p className="pt-3 ps-1 text-primary text-uppercase">Thinking Brains</p>
				</div>
				
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-outline-primary me-3">Signup</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-outline-primary">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};