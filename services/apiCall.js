export async function fetchCity() {
	try {
		const cityName = document.getElementById("cityName").value;
		const APICall = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;
		const res = await fetch(APICall);
		console.log(res.json());
	} catch (error) {
		console.error(error);
	}
}
