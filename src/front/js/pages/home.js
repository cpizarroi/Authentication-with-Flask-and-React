import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h1 className="text-center m-5 text-primary text-uppercase">Welcome to my page</h1>
				<p className="text-center p-5">Have you never been here? <Link to="../signup"> Signup</Link></p>
			</div>
		</>
	);
};