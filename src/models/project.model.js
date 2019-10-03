import mongoose from 'mongoose'
const Schema = mongoose.Schema 
/**
 * @api Project (information about project with archive of all days)
 * @apiName Projctmodel
 * @apiGroup Model
 * @apiVersion 1.0.0
 */
const Day = new Schema({
    date: Date, 
    employeeId: { type:mongoose.Schema.Types.ObjectId, ref: 'Person'},
    type: String, 
    hours: Number, 
})

const projectSchema = new Schema({
    name: String, 
    description: String, 
    teamId: { type:mongoose.Schema.Types.ObjectId, ref: 'Team'},
    startDate: Date, 
    endDate: Date, 
    status: String, 
    customer: {
        name: String,
        image: String, 
        contact: String, 
        email: String, 
        phone: String, 
        address: {
            zipCode: String, 
            city: String, 
            road: String 
        },
        status: String 
    },
    archive: [ Day ]
})

module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema)