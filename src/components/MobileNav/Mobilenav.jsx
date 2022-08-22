import React, { useState } from "react";
import "./MobilenavStyles.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Mobilenav = (props) => {
	const [test, setTest] = useState(true);

	// function handleTest() {
	// 	setTest(!test);
	// }
	return (
		<div className="DropdownContainer" style={props.mobileTab}>
			<div className="CloseBtnContainer">
				<AiOutlinePlus
					className="CloseIcon"
					onClick={() => {
						props.closeDropdown(test);
					}}
				/>
			</div>

			<div className="DropdownWrapper">
				<div className="DropdownMenu">
					<Link to="/resume">resume</Link>
					<Link to="/about">about me</Link>
					<a href="https://github.com/herbertamakloe">github</a>
					<div className="DropBtnWrap">
						<Link className="DropdownRoute" to="/hire-me">
							hire me.
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mobilenav;
