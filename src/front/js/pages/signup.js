import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	const [user, setUser] = useState({})

	return (
		<>
		<div className="container mt-2 pt-5">
			<div className="row justify-content-center pt-3">
				<div className="card border border-primary mb-5" style={{width: 35+"rem"}}>
  					<div className="card-body">
    					<h5 className="card-title text-center pt-4 pb-4 text-primary fs-2">SIGNUP</h5>
    					<form>
  							<div className="mb-3">
    							<label htmlFor="email" className="form-label">Email address</label>
    							<input type="email" className="form-control border-primary" id="email" aria-describedby="emailHelp" onChange={(e) => {setUser({ ...user, email: e.target.value }); console.log(user)}} required/>
    							<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  							</div>
  							<div className="mb-3">
    							<label htmlFor="password" className="form-label">Password</label>
    							<input type="password" className="form-control border-primary" id="password" onChange={(e) => {setUser({ ...user, password: e.target.value }); console.log(user)}} required/>
  							</div>
  							<div className="mb-3 form-check">
    							<input type="checkbox" className="form-check-input" id="is_active"/>
    							<label className="form-check-label" htmlFor="exampleCheck1"
								 onClick={() => {user.is_active 
									? user.is_active == true 
									? setUser({ is_active: false }) 
									: setUser({ is_active: true })
                      				: setUser({ ...user, is_active: true });
									console.log(user)
                  				}}>Is active</label>
  							</div>
							<div className="row mt-5 mb-2">
								<button type="submit" className="btn btn-primary"
								onClick={()=>{
									fetch(process.env.BACKEND_URL + "/api/signup", {
										method: "POST",
										headers: {
										  "Content-Type": "application/json",
										},
										body: JSON.stringify(user),
									  })
									.then((resp) => resp.json())
                					.then((data) => {
                  						
                					});
								}}
								>Submit</button>
							</div>
						</form>
  					</div>
				</div>
			</div>
		</div>
		</>
	);
};