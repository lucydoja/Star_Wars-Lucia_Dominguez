import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cartas container mb-2">
			{store.people.map((item, index) => {
				return (
					<Card
						key={index}
						nombre={item.name}
						var1={"Height: " + item.height}
						var2={"Eye color: " + item.eye_color}
						var3={"Hair color: " + item.hair_color}
					/>
				);
			})}
		</div>
	);
};
