import { Link, useRouteError } from "react-router-dom";
import React from 'react'
import '../style/Error.css'
import { getAuthUser } from "../../helper/Storage";

const Error = () => {
  const error = useRouteError();
	console.error(error);
	const auth = getAuthUser();

  return (
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			  </div>
			  {auth && auth.data.role === "ADMIN" && (<Link className="homePageButton" to={"/registration"}>Register Page</Link>)}
			  {auth && auth.data.role !== "ADMIN" && (<Link className="homePageButton" to={"/home"}>Home Page</Link>)}
			  {!auth && (<Link className="homePageButton" to={"/"}>Login Page</Link>)}
			  
		</div>
	</div>
  );
}

export default Error;