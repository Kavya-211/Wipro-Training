const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const User = require("../models/User");

describe("Loan API Testing", () => {

  let token;

  before(async () => {
    
    await User.deleteOne({ email: "loan@test.com" });

    // Register user
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "LoanUser",
        email: "loan@test.com",
        password: "123456",
         deposit: 600 
      });

    // Login
    const login = await request(app)
      .post("/api/auth/login")
      .send({
        email: "loan@test.com",
        password: "123456",
      });

    token = login.body.token;
  });

  it("should apply for loan", async () => {

    const res = await request(app)
      .post("/api/loan/apply")
      .set("Authorization", token)
      .send({ amount: 3000 });

    expect(res.status).to.equal(200);
  });

  it("should get my loans", async () => {

    const res = await request(app)
      .get("/api/loan/my")  
      .set("Authorization", token);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

});
