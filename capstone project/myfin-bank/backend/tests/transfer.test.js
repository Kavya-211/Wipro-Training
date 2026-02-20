const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const User = require("../models/User");

describe("Transfer API Testing", () => {

  let token;

  before(async () => {

    await User.deleteOne({ email: "transfer@test.com" });

    // Register
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "TransferUser",
        email: "transfer@test.com",
        password: "123456",
        deposit:600
      });

    // Login
    const login = await request(app)
      .post("/api/auth/login")
      .send({
        email: "transfer@test.com",
        password: "123456"
      });

    token = login.body.token;

    // Deposit 
    await request(app)
      .post("/api/account/deposit")
      .set("Authorization", token)
      .send({ amount: 5000 });
  });

  it("should transfer to FD", async () => {
    const res = await request(app)
      .post("/api/transfer")
      .set("Authorization", token)
      .send({
        amount: 1000,
        type: "fd"
      });

    expect(res.status).to.equal(200);
    expect(res.body.transactionId).to.exist;
  });

});
