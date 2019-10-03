const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

let projectId;

describe("#projects", function() {
  describe("/GET projects", function() {
    this.timeout(5000);
    it("should list all projects", async function() {
      const result = await chai.request(app).get("/api/projects");
      result.should.have.status(200);
    });
  });

  describe("/POST projects", function() {
    this.timeout(5000);
    it("it should create a project", async function() {
      let project = {
        //_id: "5c9ce5d634ebf14458546abc",
        name: "Time Keeper",
        description: "MERN stack",
        startDate: "2019-02-12",
        endDate: "2019-07-06",
        status: "active",
        customer: {
          name: "Kupac",
          image: "slika",
          contact: "kontakt",
          email: "kupac@gmail.com",
          phone: "+123456",
          address: {
            zipCode: "763",
            city: "Olkohama",
            road: "8 mile"
          },
          status: "active"
        },
        archive: [
          {
            date: "2019-03-03",
            type: "tip",
            hours: 1337
          }
        ]
      };

      const result = await chai
        .request(app)
        .post("/api/projects")
        .send(project);

      projectId = result.body._id;
      result.should.have.status(200);
    });
  });

  describe("/GET/:id", function() {
    this.timeout(5000);
    it("should return one project", async function() {
      const result = await chai.request(app).get(`/api/projects/${projectId}`);
      result.should.have.status(200);
    });
  });

  describe("/PUT/:id project", () => {
    this.timeout(5000);
    it("it should update a project based on the given id", async () => {
      let project = {
        description: "MEAN stack"
      };

      const result = await chai
        .request(app)
        .put(`/api/projects/${projectId}`)
        .send(project);
      result.should.have.status(200);
    });
  });

  describe("/DELETE/:id project", () => {
    this.timeout(5000);
    it("it should delete a project based on the given id", async () => {
      chai
        .request(app)
        .delete(`/api/projects/${projectId}`)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
