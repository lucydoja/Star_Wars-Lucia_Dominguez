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
			}
			/*
            exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}*/
		}
	};
};

export default getState;
