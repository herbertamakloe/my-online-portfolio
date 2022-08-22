import React from "react";
import "./cardStyles.css";
// import cardImage from "../../images/cardimg-1.jpg";

const Card = (props) => {
	return (
		<div className="card">
			<img src={`${props.background}`} alt="" />
			<div className="cardOverlay">
				<div className="cardText">
					<h3>{props.title}</h3>
					<a href={props.link}>View Project</a>
					<a href={props.github}>GitHub</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
