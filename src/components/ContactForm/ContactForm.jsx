import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import successImage from "../../images/ms_image.svg";
import "./contactForm.css";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_rivd7qd",
				"template_v3r2bip",
				form.current,
				"9fZS1pRxY5ddLAIdv"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Message sent");

					setTimeout(() => {
						document.querySelector(".form").style.opacity = "0.2";
						document.querySelector(".success_message").style.width = "100%";
					}, 10);
					setTimeout(() => {
						document.querySelector(".form").style.opacity = "1";
						document.querySelector(".success_message").style.width = "0px";
					}, 2000);
					document.querySelector(".form_name").value = "";
					document.querySelector(".form_email").value = "";
					document.querySelector(".company_name").value = "";
					document.querySelector(".form_message").value = "";
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="contact_form">
			<div className="success_message">
				<img src={successImage} alt="" />
			</div>
			<form ref={form} onSubmit={sendEmail} className="form">
				<div className="name_email">
					<input
						type="text"
						name="user_name"
						id=""
						className="form_name"
						placeholder="Full name"
					/>
					<input
						type="email"
						name="user_email"
						id=""
						className="form_email"
						placeholder="Email"
					/>
				</div>

				<input
					type="text"
					name="user_company"
					className="company_name"
					placeholder="Company"
				/>
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="Type your message"
					className="form_message"
				></textarea>
				<button type="submit" className="send_btn">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
