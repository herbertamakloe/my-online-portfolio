import React from "react";
import logo from "../../images/logo@2x.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = (props) => {
	return (
		<header data-scroll-section>
			<div className="navigation">
				<div className="logo-container">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<FaBars className="hamburger" onClick={props.toggleBtn} />
				<div className="navmenu">
					<ul className="navmenu">
						<li>
							<Link to="/resume">resume</Link>
						</li>
						<li>
							<Link to="/about">about me</Link>
						</li>
						<li>
							<a href="https://github.com/herbertamakloe">github</a>
						</li>
						<li className="hire-me-btn">
							<Link to="/hire-me">hire me.</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
