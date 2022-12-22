import React from "react";
import "./footerStyles.css";
import footerLogo from "../../images/herb-logo-o.png";

const Footer = () => {
	return (
		<div className="footer" data-scroll-section>
			<div className="footer-logo">
				<img src={footerLogo} alt="" />
			</div>
			<div className="footer-content">
				<a href="mailto:herbertamakloe@outlook.com">
					herbertamakloe@outlook.com
				</a>
				<a
					className="downlaodCV"
					href="https://drive.google.com/uc?export=download&id=1XwfL2xvyhtP5qKcsOV9wH6h0dST8K6HT"
				>
					download Resume
				</a>
				<a href="tel:+233201599071">+233 (0) 20 159 9071</a>
			</div>
		</div>
	);
};

export default Footer;
