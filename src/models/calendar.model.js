import mongoose from 'mongoose'
import { stringLiteral } from '@babel/types';
const Schema = mongoose.Schema

/** 
 * @api{post}/api/access Insert new access grant 
 * @apiName InsertAccess
 * @apiGroup Access
 * @apiVersion 1.0.0
 * @apiSuccess {Access} returns Access Document
 * @apiSuccess {Number} status should be 200
 * @apiSuccessExample Example data on success:
 * [
    {
        "_id": "5c93d62de41e720d80874aeb",
        "user": null,
        "client": null,
        "scopes": [
            {
                "_id": "5c93d62de41e720d80874aec",
                "role": "User",
                "action": "",
                "team": ""
            }
        ],
        "__v": 0
    }
]
 */ 


const Task = new Schema({
    projectId: String,
    description: String,
    hours: Number
})

const Comment = new Schema({
    name: String,
    content: String,
    dateOfPost: Date
})

const Day = new Schema({
    type: String,
    hours: Number,
    tasks: [Task],
    date: Date,
    comments: [Comment]
})

const calendarSchema = new Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    days: [Day]
})

module.exports = mongoose.models.Calendar || mongoose.model('Calendar', calendarSchema)