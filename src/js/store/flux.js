const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
		},
		actions: {

			loadCharacters: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/people`);
					let data = await response.json();

					const fetchs = data.results.map((item) => fetch(item.url))
					const respuestas = await Promise.all(fetchs);
					const datas = await Promise.all(respuestas.map((item) => item.json()));

					let characters = datas.map((item) => ({ uid: item.result.uid, ...item.result.properties }))

					setStore({
						characters: characters
					})
				} catch (error) {
					console.log(error)
				}
			},
			loadPlanets: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/planets`);
					let data = await response.json();

					const fetchs = data.results.map((item) => fetch(item.url))
					const respuestas = await Promise.all(fetchs);
					const datas = await Promise.all(respuestas.map((item) => item.json()));

					let planets = datas.map((item) => ({ uid: item.result.uid, ...item.result.properties }))

					setStore({
						planets: planets
					})

				} catch (error) {
					console.log(error)

				}
			},
			loadStarships: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/starships`);
					let data = await response.json();

					const fetchs = data.results.map((item) => fetch(item.url))
					const respuestas = await Promise.all(fetchs);
					const datas = await Promise.all(respuestas.map((item) => item.json()));

					let starships = datas.map((item) => ({ uid: item.result.uid, ...item.result.properties }))

					setStore({
						starships: starships
					})

				} catch (error) {
					console.log(error)

				}
			},
			getFavorite: (data) => {
				const store = getStore();
				if (!store.favorites.includes(data)){
					setStore({ favorites: [...store.favorites, data]})
				}
			},
			deleteFavorite: (data) => {
				const store = getStore();
				const favorite = store.favorites.filter(favorite => favorite !== data);
				setStore({ favorites: favorite });
			  }
		}
	};
};

export default getState;



//[data.result.properties]