const express       = require('express');
const app           = express();
const mongoose      = require('mongoose');
const User = require("./model/User");
mongoose.connect('mongodb://localhost:27017/testingDB',{
    useNewUrlParser:true,
})
mongoose.connection.on("error", err => {
    console.log("err", err)
  });
  
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  });

app.use(express.json());
app.get("/users", async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json({ message: "Users fetched", users });
	} catch (err) {
		res.json(err);
	}
});

app.post("/users", async (req, res, next) => {
	try {
		const { name, email, city } = req.body;

		const user = await User.create({
			name,
			email,
			city,
		});

		res.status(201).json({ message: "User created successfully.", user });
	} catch (err) {
		res.json(err);
	}
});
app.get("/users/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);
		res.status(200).json({ message: "User found.", user });
	} catch (err) {
		res.json(err);
	}
});
app.put("/users/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);
		if (!user) {
			throw new Error("No such user exists");
		}
		const updatedUser = await Object.assign(user, req.body).save();

		res.json({ message: "User updated.", user: updatedUser });
	} catch (err) {
		if (err.message === "No such user exists") {
			return res.json({ message: err.message });
		}
		res.json(err);
	}
});
app.delete("/users/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const result = await User.deleteOne({ _id: id });
		res.status(200).json({ message: "User deleted.", result });
	} catch (err) {
		res.json(err);
	}
});

app.listen(5000, () => {
	console.log(`App listening on http://localhost:5000`);
});

module.exports = app;
