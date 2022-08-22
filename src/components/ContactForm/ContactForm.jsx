import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contactForm.css";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

	return (
		<div className="contact_form">
			<form ref={form} onSubmit={sendEmail}>
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

				<input type="text" name="user_company" className="company_name" placeholder="Company" />
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
