import { Link, useRouteError } from "react-router-dom";
import React from 'react'
import '../style/Error.css'

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			  <Link className="homePageButton" to={"/"}>Homepage</Link>
		</div>
	</div>
  );
}

export default Error;