//#region 
// import Team from '../models/team.model'
// import _ from 'lodash'

// const insert = (data, callback) => {
//     let team = new Team(data)
//     team.save((err, result) => {
//         if (err)
//             callback(400, err)
//         else callback(201, result)
//     })
// }

// const getAll = (callback) => {
//     Team.find((err, result) => {
//         if (err) {
//             callback(400, err)
//         } else {
//             callback(200, result)
//         }
//     })
// }
// const getOne = (id, callback) => {
//     Team.findById(id).populate('members.person', '_id firstName lastName')
//         .exec((err, result) => {
//             if (err) {
//                 callback(400, err)
//             } else {
//                 callback(200, result)
//             }
//         })
// }
// const update = (id, body, callback) => {
//     getOne(id, (status, team) => {
//         team = _.extend(team, body)
//         team.save((err, result) => {
//             if (err) {
//                 callback(400, err)
//             } else {
//                 callback(200, result)
//             }
//         })
//     })
// }
// const remove = (id, callback) => {
//     getOne(id, (status, team) => {
//         team.remove((err, result) => {
//             if (err) {
//                 callback(400, err)
//             } else {
//                 callback(200, result)
//             }
//         })
//     })
// }

// export default { getAll, insert, getOne, update ,remove}

//.populate('members.person', ' _id firstName lastName')
//#endregion


import _ from 'lodash'
import mongoose from 'mongoose'
import logger from '../errorHandler'

class Repository {
   constructor(modelName) {
       this.collection = mongoose.model(modelName)
   }

/**
*  @api{getAll}/api Get all from the database for specific collection
* @apiName Get All
* @apiGroup Repository
* @apiVersion 1.0.0
* @apiSuccess {Repository} returns all members of specific collection from the database for
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success:
[
    {
        "_id": "5c9b924f380e7d09e4606c65",
        "teamName": "Apollo",
        "description": "Apollo team consists of four brave musketeers",
        "members": [
            {
                "_id": "5c9b924f380e7d09e4606c66",
                "role": "developer",
                "hours": 40
            }
        ],
        "__v": 0
    },
    {
        "_id": "5c9b9476b8f6a44310d552cb",
        "teamName": "Apollo",
        "description": "Apollo team consists of four brave musketeers",
        "members": [
            {
                "_id": "5c9b9476b8f6a44310d552cc",
                "role": "developer",
                "hours": 40
            }
        ],
        "__v": 0
    }
]
 */

   getAll(callback) {
       this.collection.find((err, result) => {
           if(err) {
               callback(400, err)
           } else {
               callback(200, result)
           }
       })
   }
/**
*  @api{getOne}/api/collection/id Get one from the database for specific collection
* @apiName Get One
* @apiGroup Repository
* @apiVersion 1.0.0
* @apiSuccess {Repository} returns one members of specific collection from the database for
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success:
{
    "_id": "5c9b924f380e7d09e4606c65",
    "teamName": "Apollo",
    "description": "Apollo team consists of four brave musketeers",
    "members": [
        {
            "_id": "5c9b924f380e7d09e4606c66",
            "role": "developer",
            "hours": 40
        }
    ],
    "__v": 0
}
*/


   getOne(id, callback) {
       this.collection.findById(id)
       .exec((err, result) => {
           if(err) {
               callback(400, err)
           } else {
               callback(200, result)
           }
       })
   }

   /**
*  @api{insert}/api/collection Inserts new document in collection
* @apiName Insert
* @apiGroup Repository
* @apiVersion 1.0.0
* @apiSuccess {Repository} inserts one members of specific collection in the database
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success:
 {
    "_id": "5c9c9739bfd339355c17b956",
    "teamName": "Nemesis",
    "description": "Nemesi tema",
    "members": [
        {
            "_id": "5c9b9476b8f6a44310d552cc",
            "role": "dev",
            "hours": 40
        }
    ],
    "__v": 0
}
*/

   insert(data, callback) {
       let obj = new this.collection(data)
       obj.save((err, result) => {
           if(err) {
               callback(400, err)
           } else {
               callback(200, result)
           }
       })
    }
 /**
*  @api{update}/api/collection Updates existing document in collection
* @apiName Update
* @apiGroup Repository
* @apiVersion 1.0.0
* @apiSuccess {Repository} updates one member of specific collection in the database
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success:
{
    "_id": "5c9c9739bfd339355c17b956",
    "teamName": "Nemesis",
    "description": "Nemesis team",
    "members": [
        {
            "_id": "5c9b9476b8f6a44310d552cc",
            "role": "dev",
            "hours": 40
        }
    ],
    "__v": 1
}
*/

    update = (id, body, callback) => {
        this.getOne(id, (status, obj) => {
            if (status !== 200) {
                callback(404, 'Requested data not found')
            } else {
                obj = _.extend(obj, body)
                obj.save((err, result) => {
                    if (err) {
                        callback(400, err)
                    } else {
                        callback(200, result)
                    }
                })
            }
       
        })
    }

/**
*  @api{remove}/api/collection/id Deletes existing document in collection with specified id
* @apiName Remove
* @apiGroup Repository
* @apiVersion 1.0.0
* @apiSuccess {Repository} removes one member of specific collection in the database
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success:
{
    "_id": "5c9c9739bfd339355c17b956",
    "teamName": "Nemesis",
    "description": "Nemesis team",
    "members": [
        {
            "_id": "5c9b9476b8f6a44310d552cc",
            "role": "dev",
            "hours": 40
        }
    ],
    "__v": 1
}
*/
    remove = (id, callback) => {
        this.getOne(id, (status, obj) => {
            if (status !== 200) {
                callback(404, 'Requeted data not found')
            } else {
                obj.remove((err, result) => {
                    if (err) {
                        callback(400, err)
                    } else {
                        callback(200, result)
                    }
                })
            }
        })

    }
}

module.exports = Repository
