import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="human_inc.jpg"
								alt="human incubator"
								className="work-image"
							/>
							<div className="work-title">Human Incubator Inc.</div>
							<div className="work-subtitle">
								Quality Assurance Engineer
							</div>
							<div className="work-duration">Jan 2021 - Dec 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
