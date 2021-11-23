const express = require("express");
const axios = require("axios");

const app = express();
const PORT =8000;

app.get("/users/:username", async (req, res) => {
	const { username } = req.params;

	try {
		const {
			data: {
				name,
				login,
				avatar_url,
				location,
				company,
				followers,
				following,
			},
		} = await axios.get(`https://api.github.com/users/${username}`);

		const responseData = {
			name,
			login,
			avatar_url,
			location,
			company,
			followers,
			following,
		};

		res.status(200).json(responseData);
	} catch (err) {
		// next(err);
		res.send(err)
	}
});

app.listen(PORT,()=>{
	console.log(`Server started at port : ${PORT}`);
});