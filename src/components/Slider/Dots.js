import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	label {
		padding: 5px 10px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		&:focus-within {
			border: 1px solid rgb(245, 245, 245);
		}
		&::before {
			content: "";
			position: absolute;
			display: block;
			width: 40px;
			height: 40px;
		}
		&:hover {
			&::before {
				z-index: 9;
			}
			span.dot {
				opacity: 1;
			}
		}
		input {
			clip: rect(0px, 0px, 0px, 0px);
			clip-path: inset(50%);
			overflow: hidden;
			position: absolute;
			width: 5px;
			height: 5px;
		}
		span.dot {
			color: rgb(245, 245, 245);
			transition: opacity 125ms ease-in-out 0s;
			width: 4px;
			height: 4px;
			border-radius: 100%;
			background-color: currentColor;
			opacity: 0.3;
			display: inline-block;
			position: relative;
			&::before {
				content: "";
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				width: 10px;
				height: 10px;
				border-radius: 100%;
				border: 4px solid;
				opacity: 0.1;
				transform: translate(-50%, -50%) scale(0);
				transition: transform 200ms ease 0s;
			}
		}
		input:checked ~ span.dot {
			opacity: 1;
			&::before {
				transform: translate(-50%, -50%) scale(1);
			}
		}
	}
`;

const Dots = (props) => {
	const handleChange = (e) => {
		props.setIndex(Number(e.target.value));
	};
	return (
		<Wrapper>
			{props.slides.map((_, i) => {
				return (
					<label onChange={handleChange} key={i}>
						<input
							type="radio"
							name="slides"
							id={`slider-dot-radio-${i}`}
							readOnly
							value={i}
							checked={i === props.index}
						/>
						<span className="dot"></span>
					</label>
				);
			})}
		</Wrapper>
	);
};

export default Dots;
