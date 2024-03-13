const express = require("express");
const app = express();
const port = 1313;

app.use(express.static("public"));

app.listen(port, function (e) {
	if (e) {
		console.log("Something went wrong", e);
	} else {
		console.log("Server is listening on port " + port);
	}
});
