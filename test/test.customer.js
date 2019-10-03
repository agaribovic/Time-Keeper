const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

let customerId;

describe("#customers", function() {
  describe("/GET customers", function() {
    this.timeout(5000);
    it("should list all customers", async function() {
      const result = await chai.request(app).get("/api/customers");
      result.should.have.status(200);
    });
  });

  describe("/POST customers", function() {
    this.timeout(5000);
    it("it should create a customer", async function() {
      let customer = {
        //_id: "5c9ce5d634ebf14458546abc",
        name: "Anonymus",
        image: "slika",
        contact: "",
        email: "anonymus@hotmail.com",
        phone: "+32146578",
        address: "",
        status: "active"
      };

      const result = await chai
        .request(app)
        .post("/api/customers")
        .send(customer);

      customerId = result.body._id;
      result.should.have.status(200);
    });
  });

  describe("/GET/:id", function() {
    this.timeout(5000);
    it("should return one customer", async function() {
      const result = await chai.request(app).get(`/api/teams/${customerId}`);
      result.should.have.status(200);
    });
  });

  describe("/PUT/:id customer", () => {
    this.timeout(5000);
    it("it should update a customer based on the given id", async () => {
      let customer = {
        name: "Novi Anonimus",
        image: "bez slike"
      };

      const result = await chai
        .request(app)
        .put(`/api/customers/${customerId}`)
        .send(customer);
      result.should.have.status(200);
    });
  });

  describe("/DELETE/:id customer", () => {
    this.timeout(5000);
    it("it should delete a team based on the given id", async () => {
      chai
        .request(app)
        .delete(`/api/customers/${customerId}`)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
