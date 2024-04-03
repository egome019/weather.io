const router = async () => {
	const routes = [
		{ path: "/", view: () => console.log("viewing") },
		{ path: "/search", view: () => console.log("viewer") },
	];

	const matches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});
	let match = matches.find((equals) => equals.isMatch);

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}

	console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
	router();
});
