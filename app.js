const express = require("express");
const app = express();
const port = 1313;

// app.use("/", express.static("public"));

app.get("/", function (req, res, next) {
	// need file with route response
});

app.listen(port, function (e) {
	if (e) {
		console.log("Something went wrong", e);
	} else {
		console.log("Server is listening on port " + port);
	}
});
