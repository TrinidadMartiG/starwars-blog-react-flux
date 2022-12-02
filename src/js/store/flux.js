const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			likes: 0,
			people: null,
			vehicles: null,
			planets: null,
			species: null
		},


		actions: {
			addLike: () => {
				const like = getStore().likes
				setStore({ likes: like + 1 })
			},

			getPeople: () => {
				fetch("https://rickandmortyapi.com/api/character")
					.then(response => response.json())
					.then(result => setStore({ people: result }))
					.catch(error => console.log('error', error));
			},

			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles")
					.then(response => response.json())
					.then(result => setStore({ vehicles: result }))
					.catch(error => console.log('error', error));
			},

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then(response => response.json())
					.then(result => setStore({ planets: result }))
					.catch(error => console.log('error', error));
			},	
			
			getSpecies: () => {
				fetch("https://swapi.dev/api/species")
					.then(response => response.json())
					.then(result => setStore({ species: result }))
					.catch(error => console.log('error', error));
			},
		},
	};
};

export default getState;
