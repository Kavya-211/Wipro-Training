const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const User = require("../models/User");

describe("E2E Testing - Full User Flow", () => {

  let token;

  before(async () => {
    await User.deleteOne({ email: "e2e@test.com" });
  });

  it(" Register new user", async () => {

    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "E2EUser",
        email: "e2e@test.com",
        password: "123456",
        deposit: 600
      });

    expect(res.status).to.equal(200);
  });

  it(" Login user", async () => {

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "e2e@test.com",
        password: "123456"
      });

    expect(res.status).to.equal(200);
    token = res.body.token;
  });

  it(" Deposit money", async () => {

    const res = await request(app)
      .post("/api/account/deposit")
      .set("Authorization", token)
      .send({ amount: 5000 });

    expect(res.status).to.equal(200);
  });

  it(" Apply loan", async () => {

    const res = await request(app)
      .post("/api/loan/apply")
      .set("Authorization", token)
      .send({ amount: 2000 });

    expect(res.status).to.equal(200);
  });

  it(" Get My Loans", async () => {

    const res = await request(app)
      .get("/api/loan/my")   
      .set("Authorization", token);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it(" Transfer to FD", async () => {

    const res = await request(app)
      .post("/api/transfer")
      .set("Authorization", token)
      .send({
        amount: 1000,
        type: "fd"
      });

    expect(res.status).to.equal(200);
  });

  it(" Check Balance", async () => {

    const res = await request(app)
      .get("/api/account/balance")
      .set("Authorization", token);

    expect(res.status).to.equal(200);
    expect(res.body.balance).to.be.a("number");
  });

});
