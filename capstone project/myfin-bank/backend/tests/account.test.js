const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const mongoose = require("mongoose");

describe("Account API Testing", () => {

  let token;

  before(async () => {
    // Register test user
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "TestUser",
        email: "account@test.com",
        password: "123456",
        deposit: 600
      });

    // Login
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "account@test.com",
        password: "123456"
      });

    token = res.body.token;
  });

  it("should deposit money", async () => {
    const res = await request(app)
      .post("/api/account/deposit")
      .set("Authorization", token)
      .send({ amount: 1000 });

    expect(res.status).to.equal(200);
  });

  it("should get balance", async () => {
    const res = await request(app)
      .get("/api/account/balance")
      .set("Authorization", token);

    expect(res.status).to.equal(200);
    expect(res.body.balance).to.be.a("number");
  });

});
