const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			people: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						let personas = getStore().people;
						for (let i = 0; i < data.results.length; i++) {
							fetch(data.results[i].url)
								.then(res => res.json())
								.then(dataProp => {
									personas.push(dataProp.result.properties);
									setStore({ people: [...personas] });
								});
						}
					})
					.catch(err => console.error(err));
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						let planetas = getStore().planets;
						for (let i = 0; i < data.results.length; i++) {
							fetch(data.results[i].url)
								.then(res => res.json())
								.then(dataProp => {
									planetas.push(dataProp.result.properties);
									setStore({ planets: [...planetas] });
								});
						}
					})
					.catch(err => console.error(err));
			},

			addFavorites: variable => {
				let favoritos = getStore().favorites;
				favoritos = favoritos.concat(variable);
				setStore({ favorites: [...favoritos] });
			},

			deleteFav: variable => {
				let favoritos = getStore().favorites;
				let borrar = favoritos.find(el => el === variable);
				let index = favoritos.indexOf(borrar);
				favoritos.splice(index, 1);
				setStore({ favorites: [...favoritos] });
			},

			deleteAll: () => {
				setStore({ favorites: [] });
			}
		}
	};
};

export default getState;
