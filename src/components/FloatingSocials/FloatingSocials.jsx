import React from "react";
import "./floatingSocials.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FloatingSocials = () => {
	return (
		<div className="social-handle">
			<div className="social-links">
				<a className="social-icon" href="https://facebook.com/herbertkwabla">
					<FacebookOutlinedIcon />
				</a>
				<a
					className="social-icon"
					href="https://www.instagram.com/herbertamakloe/"
				>
					<InstagramIcon />
				</a>
				<a
					className="social-icon"
					href="https://www.linkedin.com/in/herbert-kwabla-tamakloe-0b76a016a/"
				>
					<LinkedInIcon />
				</a>
			</div>
		</div>
	);
};

export default FloatingSocials;
