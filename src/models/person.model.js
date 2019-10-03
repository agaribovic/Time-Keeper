import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * @api Person (basic information about person)
 * @apiName PersonModel
 * @apiGroup Model
 * @apiVersion 1.0.0
 */

const Engagement = new mongoose.Schema(
    {
        team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
        role: String,
        hours: Number
})

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    image: String,
    email: String,
    phone: String,
    position: String,
    birthDay: Date,
    beginDate: Date,
    endDate: Date,
    status: String,
    lastLogin : Date,
    engagements: [Engagement],
    currentMonth: { type: mongoose.Schema.Types.ObjectId, ref: 'Calendar' }
})

module.exports = mongoose.models.Person || mongoose.model('Person', personSchema)
