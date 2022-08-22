import React, { useEffect } from "react";
import styled from "styled-components";

import Chevron from "./Chevron";

const StyledDiv = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	pointer-events: none;
	z-index: 10;
	opacity: 1;
	button {
		position: relative;
		pointer-events: auto;
		padding: 20px;
		background: none;
		border: none;
		&:nth-child(1) {
			transform: rotate(180deg);
			left: calc(
				${(p) => (100 - p.slideWidth - p.scrollBarPercent) / 2}vw - 55px
			);
		}
		&:nth-child(2) {
			right: calc(
				${(p) => (100 - p.slideWidth - p.scrollBarPercent) / 2}vw - 55px
			);
		}
		div {
			height: 50px;
			width: 50px;
			position: relative;
			/* border: 1px solid rgb(245, 245, 245, 0); */
			/* background-color: rgb(50, 87, 225,  0.4); */
			/* color: #1e1e1e; */
			/* border-radius: 4px; */
			border: 1px solid rgb(245, 245, 245, 0.4);
			background-color: none;
			color: rgb(245, 245, 245, 0.4);
			border-radius: 12px;
			opacity: 0;
			transition: opacity 200ms ease 0s, background-color 200ms ease 0s;
			&:hover {
				background: rgb(245, 245, 245);
				color: black;
			}
			span {
				display: block;
				line-height: 0;
				width: 20px;
				height: 20px;
				color: currentcolor;
				margin: 15px;
			}
		}
		&:focus div {
			opacity: 0.5;
			/* background: rgb(50, 87, 225); */
			background: rgb(245, 245, 245);
			color: black;
		}
	}
	div.slider:hover & {
		button {
			div {
				opacity: 1;
			}
		}
	}
`;

const Controls = (props) => {
	const onKeyDown = (e) => {
		if (e.key === "ArrowLeft") props.prev();
		if (e.key === "ArrowRight") props.next();
	};

	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<StyledDiv {...props}>
			<button onClick={props.prev}>
				<div>
					<span>
						<Chevron />
					</span>
				</div>
			</button>

			<button onClick={props.next}>
				<div>
					<span>
						<Chevron />
					</span>
				</div>
			</button>
		</StyledDiv>
	);
};

export default Controls;
