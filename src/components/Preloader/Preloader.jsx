import React from "react";
import "./preloader.css";

const Preloader = () => {
	return (
		<div className="loader">
			<span className="loader__element"></span>
			<span className="loader__element"></span>
			<span className="loader__element"></span>
		</div>
	);
};

export default Preloader;
