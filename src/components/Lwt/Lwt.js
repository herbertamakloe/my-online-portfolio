import React from "react";
import { Link } from "react-router-dom";
import goArrow from "../../images/go-arrow.png";
import "./lwt.css"

const Lwt = () => {
	return (
		<div className="lwt">
			<div className="lwt-content">
				<Link className="lwt-link" to="/hire-me">
					<h1>Let's work together</h1>
					<div className="longArrow">
						<img src={goArrow} alt="" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Lwt;
