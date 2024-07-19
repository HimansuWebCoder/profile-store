const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [
	  {
	  	id: "1",
	  	name: "Himansu",
	  	passion: "Programming",
	  	image: ""
	  }
]

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
})

app.get("/image", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "frontend", "img.png"));
})

app.get("/profile-editor", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "frontend", "profile-editor.html"));
})

app.get("/profile", (req, res) => {
	 res.json(users);
})

app.get("/profile-editor", (req, res) => [
	res.json(users)
])

app.put("/profile-editor", (req, res) => {
	const { id, name, passion, image } = req.body;
	users[0].name = name;
	users[0].passion = passion;
	users[0].image = image;
	if (users[0].id === id) {
	   res.json(users);
	}
})

// app.delete("/profile", (req, res) => {
// 	const { id } = req.body;
// 	if (users[0].id === id) {
// 		users = "";
// 	  res.json(users);
// 	}
// })


app.listen(port);