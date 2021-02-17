import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { People } from "./people";
import { Planets } from "./planets";

export const Home = () => (
	<div>
		<h2 className="titulo">Characters</h2>
		<People />
		<h2 className="titulo">Planets</h2>
		<Planets />
	</div>
);
