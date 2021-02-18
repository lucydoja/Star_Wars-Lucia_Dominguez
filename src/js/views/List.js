import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const List = () => {
	const { store, actions } = useContext(Context);

	function existente(nombre) {
		let existe = store.favorites.find(el => el === nombre);

		if (existe != undefined) {
			return true;
		}
	}

	return (
		<div className="container mb-2">
			<div className="d-flex justify-content-between">
				<Link to="/">
					<span className="btn btn-danger" role="button">
						Go to home
					</span>
				</Link>
				<span
					className="btn btn-dark"
					role="button"
					onClick={() => {
						actions.deleteAll();
					}}>
					Delete all
				</span>
			</div>

			<h2 className="titulo2">List of favorites</h2>

			{store.favorites.length == 0 ? (
				<div>
					<h1 className="text-center mt-3">You have no favorites selected</h1>
				</div>
			) : (
				<div className="cartas container mb-2 mt-3">
					{store.people.map((item, index) => {
						return existente(item.name) == true ? (
							<Card
								key={index}
								nombre={item.name}
								var1={"Population: " + item.population}
								var2={"Terrain: " + item.terrain}
								var3={"Diameter: " + item.diameter}
							/>
						) : null;
					})}
					{store.planets.map((item, index) => {
						return existente(item.name) ? (
							<Card
								key={index}
								nombre={item.name}
								var1={"Height: " + item.height}
								var2={"Eye color: " + item.eye_color}
								var3={"Hair color: " + item.hair_color}
							/>
						) : null;
					})}
				</div>
			)}
		</div>
	);
};

/*

individuo.climate != undefined ? (
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
                                            )*/

/*
                    <div className="cartas container mb-2">
				{store.people.map((item, index) => {
					return existente(item) == true ? (
						<div className="">
							<Card
								key={index}
								nombre={item.name}
								var1={"Population: " + item.population}
								var2={"Terrain: " + item.terrain}
								var3={"Diameter: " + item.diameter}
							/>
						</div>
					) : null;
				})}
				{store.planets.map((item, index) => {
					return existente(item) ? (
						<div className="">
							<Card
								key={index}
								nombre={item.name}
								var1={"Height: " + item.height}
								var2={"Eye color: " + item.eye_color}
								var3={"Hair color: " + item.hair_color}
							/>
						</div>
					) : null;
				})}
			</div>*/
