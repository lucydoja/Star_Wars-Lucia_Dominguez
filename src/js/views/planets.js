import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cartas container planetas">
			{store.planets.map((item, index) => {
				return (
					<Card
						key={index}
						nombre={item.name}
						var1={"Population: " + item.population}
						var2={"Terrain: " + item.terrain}
						var3={"Diameter: " + item.diameter}
					/>
				);
			})}
		</div>
	);
};
