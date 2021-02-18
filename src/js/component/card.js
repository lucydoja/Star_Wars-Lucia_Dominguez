import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const [estado, setEstado] = useState(null);
	store.favorites.map(item => {
		/*
		if (item === props.nombre) {
			setEstado(true);
		} else {
			setEstado(false);
        }
        */
	});
	return (
		<div className="card m-1">
			<img
				className="card-img-top"
				src="https://images.mediotiempo.com/Q3JLKOwPAZjcdK-6u406n-REY-g=/958x596/uploads/media/2020/02/19/star-wars-franquicias-cine-ciencia.jpg"
				alt="imagen"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">
					{props.var1}
					<br />
					{props.var2}
					<br />
					{props.var3}
				</p>
				<div className="d-flex flex-row justify-content-between">
					<Link to={"/info/" + props.nombre}>
						<span className="btn btn-outline-dark" href="#" role="button">
							Learn more
						</span>
					</Link>
					{estado ? (
						<i
							className="fas fa-heart fa-2x"
							onClick={() => {
								actions.deleteFav(props.nombre);
								setEstado(false);
							}}
						/>
					) : (
						<i
							className="far fa-heart fa-2x"
							onClick={() => {
								actions.addFavorites(props.nombre);
								setEstado(true);
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	nombre: PropTypes.string,
	var1: PropTypes.any,
	var2: PropTypes.any,
	var3: PropTypes.any
};
