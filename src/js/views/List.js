import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const List = () => {
	const { store } = useContext(Context);

	let tipos = [store.people, store.planets];
	store.favorites.map(variable => {
		for (let i = 0; i < tipos.length; i++) {
			let prueba = tipos[i].find(arr => arr.name === variable);
			if (prueba != undefined) {
				let individuo = prueba;

				return (
					<div>
						<Link to="/">
							<span className="btn btn-danger" href="#" role="button">
								Go back
							</span>
						</Link>
						<div className="cartas container mb-2">
							{individuo.climate != undefined ? (
								<div className="">
									<Card
										key={index}
										nombre={item.name}
										var1={"Population: " + item.population}
										var2={"Terrain: " + item.terrain}
										var3={"Diameter: " + item.diameter}
									/>
								</div>
							) : (
								<div className="">
									<Card
										key={index}
										nombre={item.name}
										var1={"Height: " + item.height}
										var2={"Eye color: " + item.eye_color}
										var3={"Hair color: " + item.hair_color}
									/>
								</div>
							)}
						</div>
					</div>
				);
			}
		}
	});
};
