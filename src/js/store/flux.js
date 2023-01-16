const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseImgUrl: "https://starwars-visualguide.com/assets/img/",
			baseUrl: "https://www.swapi.tech/api/",
			likes: 0,
			people: null,
			vehicles: null,
			planets: null,
			favorites: [],
			singlepeople: {},
			singlevehicle: {},
			singleplanet: {},
		},
		actions: {
			addFavorites: (favorite) => {
				const newFavorites = getStore().favorites
				newFavorites.push(favorite)
				setStore({ favorites: newFavorites })
			},
			deleteFavorite: (favoriteToRemove) => {
				const { favorites } = getStore();
				const newFavorites = favorites.filter(favorite => favorite !== favoriteToRemove)
				setStore({ favorites: newFavorites })
			},
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => setStore({ people: result }))
					.catch(error => console.log('error', error));
			},
			getSinglePeople: (peopleUrl) => {
				fetch(peopleUrl)
					.then(res => res.json())
					.then(data => setStore({ singlepeople: data.result }))
					.catch(err => console.error(err))
			},
			getSingleVehicle: (VehicleUrl) => {
				fetch(VehicleUrl)
					.then(res => res.json())
					.then(data => setStore({ singlevehicle: data.result }))
					.catch(err => console.error(err))
			},
			getSinglePlanet: (PlanetUrl) => {
				fetch(PlanetUrl)
					.then(res => res.json())
					.then(data => setStore({ singleplanet: data.result }))
					.catch(err => console.error(err))
			},
			getVehicles: () => {
				fetch("https://swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => setStore({ vehicles: result }))
					.catch(error => console.log('error', error));
			},

			getPlanets: () => {
				fetch("https://swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => setStore({ planets: result }))
					.catch(error => console.log('error', error));
			},
		},
	};
};

export default getState;
