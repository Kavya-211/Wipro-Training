const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../server");
const { server } = require("../server");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

describe("Admin API Testing", () => {

  let adminToken;

  before(async () => {
     await User.deleteOne({ email: "admin@test.com" });

    const hashed = await bcrypt.hash("123456", 10);

    await User.create({
      name: "AdminUser",
      email: "admin@test.com",
      password: hashed,
      role: "admin",
      active: true
    });

    const login = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@test.com",
        password: "123456"
      });

    adminToken = login.body.token;
  });

  it("should get all customers", async () => {

    const res = await request(app)
      .get("/api/admin/customers")
      .set("Authorization", adminToken);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("should get all accounts", async () => {

    const res = await request(app)
      .get("/api/admin/accounts")
      .set("Authorization", adminToken);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

});

