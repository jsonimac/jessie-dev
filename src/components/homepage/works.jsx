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
								src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-1/278498238_294100662908872_8539355154255964375_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=754033&_nc_ohc=KkzorBzeZX4AX-Ms6HO&_nc_ht=scontent.fcgy2-2.fna&oh=00_AfARwY0JyrGrOry1FRkZR7ZCsbnzLlh4s4jWrYxRzeAuhw&oe=650B6D11"
								alt="human incubator"
								className="work-image"
							/>
							<div className="work-title">Human Incubator Inc.</div>
							<div className="work-subtitle">
								Quality Assurance Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
