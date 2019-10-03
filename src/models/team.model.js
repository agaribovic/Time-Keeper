import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * @api Team (basic information about team and his memebers)
 * @apiName TeamModel
 * @apiGroup Model
 * @apiVersion 1.0.0
 */

const Member = new mongoose.Schema({
  person: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
  role: String,
  hours: Number
});
const teamSchema = new Schema({
  teamName: String,
  description: String,
  members: [Member]
});

module.exports = mongoose.models.Team || mongoose.model("Team", teamSchema);
