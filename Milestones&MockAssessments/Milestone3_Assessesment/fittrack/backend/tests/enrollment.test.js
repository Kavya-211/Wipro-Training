const request = require("supertest");
const app = require("../server");

describe("Enrollment API", () => {
  it("Should return 400 if userId missing", async () => {
    const res = await request(app)
      .post("/api/enroll")
      .send({ programId: "FTP001" });

    if (res.status !== 400) {
      throw new Error("Test failed");
    }
  });
});