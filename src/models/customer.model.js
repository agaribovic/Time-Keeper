import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * @api Customer (basic information about customers)
 * @apiName CustomerModel
 * @apiGroup Model
 * @apiVersion 1.0.0
 */

const customerSchema = new mongoose.Schema({
  name: String,
  image: String,
  contact: {type:String, unique:true},
  email: String,
  phone: String,
  address: { zipcode: String, city: String, road: String },
  status: String
});

module.exports = mongoose.models.Customer || mongoose.model("Customer", customerSchema);
