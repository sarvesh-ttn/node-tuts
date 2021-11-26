const items = require('../model/service')

//  get all users
module.exports.getAll = async (req,res)=>{
    const response = await items.getAll();
    res.send(response)
}
// create users
module.exports.create = async (req,res)=>{
    const response  = await items.create(req.body)
    console.log(response);
    res.send(response)
}
// update users
module.exports.update = async (req,res) =>{
    const response = await items.update(req.params,req.body)
    res.send(response)
}
// delete users
module.exports.delete = async (req,res)=>{
    const response = await items.delete(req.params)    
    res.send(response);
}
// error handling method
const handleValidationError = (err, res) => {
	const errors = Object.values(err.errors).map((el) => el.message);
	const fields = Object.values(err.errors).map((el) => el.path);
	const code = 400;
	if (errors.length > 1) {
		const formattedErrors = errors.join("");
		res.status(code).send({ messages: formattedErrors, fields: fields });
	} else {
		res.status(code).send({ messages: errors, fields: fields });
	}
};

module.exports.errorHandler = (err, req, res, next) => {
	try {
		if (err.name === "ValidationError")
			return (err = handleValidationError(err, res));
	} catch (err) {
		res.status(500).send({ error: "An unknown error occurred." });
	}
};