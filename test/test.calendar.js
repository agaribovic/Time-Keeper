const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";


let calendarId;

describe("#calendar", function() {
  let varijablaId;
  describe("/GET calendar", function() {
    this.timeout(5000);
    it("should list all calendars", async function () {
      const result = await chai.request(app).get("/api/calendar");
      result.should.have.status(200);
    });
  });


  describe("/POST calendar", function() {
    this.timeout(5000);
    it("it should create a calendar", async function() {
      let calendar = {
        //_id: "5c9ce5d634ebf14458546abc",
        date: "2019-03-29",
        type: "Gregorijanski",

        hours: 42
      };

      const result = await chai
        .request(app)
        .post("/api/calendar")
        .send(calendar);
      calendarId = result.body._id;
      result.should.have.status(200);
    });
  });


  describe("/GET/:id", function() {
    this.timeout(5000);
    it("should return one calendar", async function() {
      const result = await chai.request(app).get(`/api/calendar/${calendarId}`);

      result.should.have.status(200);
      console.log(varijablaId);
    });
  });

  describe("/PUT/:id calendar", () => {

    this.timeout(5000);
    it("it should update a calendar based on the given id", async () => {
      let calendar = {
        type: "lunar"
      };

      const result = await chai
        .request(app)
        .put(`/api/calendar/${calendarId}`)
        .send(calendar);
      result.should.have.status(200);
    });
  });

  describe("/DELETE/:id calendar", () => {
    this.timeout(5000);
    it("it should delete a calendar based on the given id", async () => {
      chai
        .request(app)
        .delete(`/api/calendar/${calendarId}`)
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});

