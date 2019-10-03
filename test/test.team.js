const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

let teamId;

describe("#teams", function() {
  describe("/GET teams", function() {
    this.timeout(5000);
    it("should list all teams", async function() {
      const result = await chai.request(app).get("/api/teams");
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/POST teams", function() {
    this.timeout(5000);
    it("it should create a team", async function() {
      let team = {
        // _id: "5c9ce5d634ebf14458546abc",
        teamName: "Apollo",
        description: "Apollo team consists of four brave musketeers",
        members: [
          {
            role: "QA",
            hours: 40
          }
        ]
      };

      const result = await chai
        .request(app)
        .post("/api/teams")
        .send(team);
      teamId = result.body._id;
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/GET/:id", function() {
    this.timeout(5000);
    it("should return one team", async function() {
      const result = await chai.request(app).get(`/api/teams/${teamId}`);
      result.should.have.status(200);
    });
  });

  describe("/PUT/:id team", () => {
    this.timeout(5000);
    it("it should update a team based on the given id", async () => {
      let team = {
        description: "Very nice team to collaborate with"
      };

      const result = await chai
        .request(app)
        .put(`/api/teams/${teamId}`)
        .send(team);
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/DELETE/:id team", () => {
    this.timeout(5000);
    it("it should delete a team based on the given id", async () => {
      chai
        .request(app)
        .delete(`/api/teams/${teamId}`)
        .end((err, res) => {
          res.should.have.status(200);
          //console.log(res.body)
        });
    });
  });
});
