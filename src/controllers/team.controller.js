import {Teams} from '../repositories/unitOfWork'
import logger from '../errorHandler'

/**
* @api{post}/api/team Creating a Team
* @apiName CreateTeam
* @apiGroup Team
* @apiVersion 1.0.0
* @apiSuccess {Team} returns a Team Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
       date: "01.05.2005",
       employeeId: "asdaisdhadi234io2h43h234uiofsd",
       type: "tip",
       hours: 8,
   }
* }
*/
const create = (req, res) => { Teams.insert(req.body, (status, result) => { 
    logger.info('Creating a team')
    if(status>300)logger.error('Creating a team')
    res.status(status).send(result) }) }

/**
* @api{get}/api/team Listing all Teams
* @apiName ListTeam
* @apiGroup Team
* @apiVersion 1.0.0
* @apiSuccess {Team} returns a Team Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
       date: "01.05.2005",
       employeeId: "asdaisdhadi234io2h43h234uiofsd",
       type: "tip",
       hours: 8,
   }
* }
*/
const list = (req, res) => { Teams.getAll((status, result) => {
    logger.info('Listing a team')
    if(status>300)logger.error('Listing a team')
    res.status(status).send(result) }) }

/**
* @api{get}/api/team/:id Finding a Team by Id
* @apiName FindTeamById
* @apiGroup Team
* @apiVersion 1.0.0
* @apiSuccess {Team} returns a Team Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
       date: "01.05.2005",
       employeeId: "asdaisdhadi234io2h43h234uiofsd",
       type: "tip",
       hours: 8,
   }
* }
*/
const teamById = (req, res, next, id) => { req.id = id; next() }

/**
* @api{get}/api/team/:id Reading a Team
* @apiName ReadATeam
* @apiGroup Team
* @apiVersion 1.0.0
* @apiSuccess {Team} returns a Team Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
       date: "01.05.2005",
       employeeId: "asdaisdhadi234io2h43h234uiofsd",
       type: "tip",
       hours: 8,
   }
* }
*/
const read = (req, res) => { Teams.getOne(req.id, (status, result) => { 
    logger.info('Reading a team')
    if(status>300)logger.error('Reading a team')
    res.status(status).send(result) }) }

/**
* @api{put}/api/team/:id Updating a Team 
* @apiName UpdateTeam
* @apiGroup Team
* @apiVersion 1.0.0
* @apiSuccess {Team} updates a Team Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
       date: "01.05.2005",
       employeeId: "asdaisdhadi234io2h43h234uiofsd",
       type: "tip",
       hours: 8,
   }
* }
*/
const update = (req, res) => { Teams.update(req.id, req.body, (status, result) => {
    logger.info('Updating a team')
    if(status>300)logger.error('Updating a team')
    res.status(status).send(result) }) }//#region 

/**
* @api{delete}/api/team/:id Removing a Team
* @apiName RemoveTeam
* @apiGroup Team
* @apiVersion 1.0.0
* @apiSuccess {Team} removes a Team Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
       date: "01.05.2005",
       employeeId: "asdaisdhadi234io2h43h234uiofsd",
       type: "tip",
       hours: 8,
   }
* }
*/
const remove = (req, res) => { Teams.remove(req.id, (status, result) => { 
    logger.info('Removing a team')
    if(status>300)logger.error('Removing a team')
    res.status(status).send(result )}) }

export default { create, list, teamById, read, update, remove }