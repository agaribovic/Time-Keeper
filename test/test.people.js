const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

let personId;

describe("#people", function() {
  describe("/GET people", function() {
    this.timeout(5000);
    it("should list all people", async function() {
      const result = await chai.request(app).get("/api/people");
      result.should.have.status(200);
    });
  });

  describe("/POST people", function() {
    this.timeout(5000);
    it("it should create a person", async function() {
      let person = {
        //_id: "5c9ce5d634ebf14458546abc",
        firstName: "John",
        lastName: "Doe",
        gender: "1",
        image: "slika",
        email: "johndoe@hotmail.com",
        phone: "+123456",
        position: "software developer",
        birthDay: "01/01/2001",
        beginDate: "02/02/2002",
        endDate: "03/03/2003",
        status: "active",
        engagements: [
          {
            role: "uloga",
            hours: "15"
          }
        ]
      };

      const result = await chai
        .request(app)
        .post("/api/people")
        .send(person);

      personId = result.body._id;
      result.should.have.status(200);
    });
  });

  describe("/GET/:id", function() {
    this.timeout(5000);
    it("should return one person", async function() {
      const result = await chai.request(app).get(`/api/people/${personId}`);
      result.should.have.status(200);
    });
  });

  describe("/PUT/:id person", () => {
    this.timeout(5000);
    it("it should update a person based on the given id", async () => {
      let person = {
        firstName: "Huso",
        lastName: "Husic",
        status: "AFK"
      };

      const result = await chai
        .request(app)
        .put(`/api/people/${personId}`)
        .send(person);
      result.should.have.status(200);
    });
  });

  describe("/DELETE/:id person", () => {
    this.timeout(5000);
    it("it should delete a person based on the given id", async () => {
      chai
        .request(app)
        .delete(`/api/people/${personId}`)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
