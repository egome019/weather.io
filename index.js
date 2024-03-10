const url =
	"https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=los%20angeles%20county&language=en";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "2411e78fb0mshecea44d59b4a7a0p176689jsnbaf309ca722b",
		"X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
	},
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
