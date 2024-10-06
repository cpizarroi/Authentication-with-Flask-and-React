import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {

	const navigate= useNavigate();
	
	const { store, actions } = useContext(Context);

	const [user, setUser] = useState({})

return(
	<>
		<div className="container mt-2 pt-5">
			<div className="row justify-content-center pt-2">
				<div className="card border border-primary mb-5" style={{width: 35+"rem"}}>
  					<div className="card-body">
    					<h5 className="card-title text-center pt-4 pb-4 text-primary fs-2">Login</h5>
    					<form>
  							<div className="mb-3">
    							<label 
								htmlFor="email" 
								className="form-label">Email address</label>
    							<input 
								type="email" 
								className="form-control border-primary" 
								id="email" aria-describedby="emailHelp" 
								onChange={(e)=>{setUser({...user, email:e.target.value})}}/>
  							</div>
  							<div className="mb-3">
    							<label 
								htmlFor="password" 
								className="form-label">Password</label>
    							<input 
								type="password" 
								className="form-control border-primary" 
								id="password" 
								onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
  							</div>
							<div className="row mt-5 mb-2">
								<button 
								type="button" 
								className="btn btn-primary" 
								onClick={()=>{actions.loginUser(user, navigate)}}>Log in</button>
							</div>
						</form>
  					</div>
				</div>
			</div>
		</div>
	</>
)
};