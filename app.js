const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 1313;

app.use("/", express.static(path.resolve(__dirname, "public")));

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, function (e) {
	if (e) {
		console.log("Something went wrong", e);
	} else {
		console.log("Server is listening on port " + port);
	}
});
