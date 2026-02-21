const request = require("supertest");
const app = require("../server");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;

describe("Enrollment API Testing", function () {

  before(async function () {
    await Course.deleteMany({});
    await Enrollment.deleteMany({});

    await Course.create({
      courseId: "C101",
      title: "Test Course",
      category: "Test",
      price: 1000
    });
  });

  after(async function () {
    await mongoose.connection.close();
  });

  it("Should enroll successfully", async function () {
    const res = await request(app)
      .post("/api/enroll")
      .send({ userId: "U1", courseId: "C101" });

    expect(res.status).to.equal(201);
  });

  it("Should prevent duplicate enrollment", async function () {
    const res = await request(app)
      .post("/api/enroll")
      .send({ userId: "U1", courseId: "C101" });

    expect(res.status).to.equal(400);
  });

});