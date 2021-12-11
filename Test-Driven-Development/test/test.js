const chai = require("chai"),
	expect = chai.expect;
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");

const server = require("../server");
const User = require("../model/User");

chai.use(chaiHttp);

describe("Users", () => {
	// Delete all the users data before each test case
	beforeEach((done) => {
		User.deleteMany({}, (err) => {
			done();
		});
	});

	describe("/GET User", () => {
		it("should get all the users", (done) => {
			chai.request(server)
				.get("/users")
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.a("object");
					expect(res.body).to.have.property("users");
					expect(res.body.users).to.have.lengthOf(0);
					done();
				});
		});
	});

	describe("/POST User", () => {
		it("should not create a new user without city", (done) => {
			const user = {
				name: "Sarvesh",
				email: "sarvesh@gmail.com",
			};

			chai.request(server)
				.post("/users")
				.send(user)
				.end((err, res) => {
					expect(res.body).to.be.a("object");
					expect(res.body).to.have.property("errors");
					expect(res.body.errors).to.have.property("city");
					expect(res.body.errors.city)
						.to.have.property("kind")
						.eq("required");
					done();
				});
		});

		it("should not create a new user without email", (done) => {
			const user = {
				name: "Sarvesh",
                city:'Haldwani'
			};

			chai.request(server)
				.post("/users")
				.send(user)
				.end((err, res) => {
					expect(res.body).to.be.a("object");
					expect(res.body).to.have.property("errors");
					expect(res.body.errors).to.have.property("email");
					expect(res.body.errors.email)
						.to.have.property("kind")
						.eq("required");
					done();
				});
		});
	});

	describe("/GET User by Id", () => {

		it("should return null for non-existing user id", (done) => {
			const userId = new mongoose.Types.ObjectId();

			chai.request(server)
				.get("/users/" + userId)
				.end((err, res) => {
					expect(res.body).to.have.property("user").eq(null);
					done();
				});
		});
	});

	describe("/PUT Update user by id", () => {
		it("should update the user given a valid user id", (done) => {
			User.create({
				name: "Sarvesh",
				email: "sarvesh@gmail.com",
				city:"agra",
			}).then((user) => {
				chai.request(server)
					.put("/users/" + user._id)
					.send({ name: "Sarvesh Bhatt" })
					.end((err, res) => {
						expect(res.body)
							.to.have.property("message")
							.eq("User updated.");
						expect(res.body)
							.to.have.property("user")
							.to.be.a("object");
						expect(res.body.user)
							.to.have.property("name")
							.eq("Sarvesh Bhatt");

						done();
					});
			});
		});

		it("should not update the user for non-existing user id", (done) => {
			const userId = new mongoose.Types.ObjectId();

			chai.request(server)
				.put("/users/" + userId)
				.send({ name: "Sarvesh Bhatt" })
				.end((err, res) => {
					expect(res.body)
						.to.have.property("message")
						.eq("No such user exists");

					done();
				});
		});
	});

	describe("/DELETE User by id", () => {

		it("should not delete a user for non-existing user id", (done) => {
			const userId = new mongoose.Types.ObjectId();

			chai.request(server)
				.delete("/users/" + userId)
				.end((err, res) => {
					expect(res.body).to.be.a("object");
					expect(res.body).to.have.property("result");
					expect(res.body.result).to.have.property("deletedCount");
					expect(res.body.result.deletedCount).to.eq(0);
					done();
				});
		});

		it("should delete the user given a valid user id", (done) => {
			User.create({
				name: "Sarvesh",
				email: "sarv@gmail.com",
				age: 23,
                city:'Haldwani'
			}).then((user) => {
				chai.request(server)
					.delete("/users/" + user._id)
					.end((err, res) => {
						expect(res.body).to.be.a("object");
						expect(res.body).to.have.property("result");
						expect(res.body.result).to.have.property(
							"deletedCount"
						);
						expect(res.body.result.deletedCount).to.eq(1);
						done();
					});
			});
		});
	});
});