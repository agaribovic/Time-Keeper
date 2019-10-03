import { Projects } from '../repositories/unitOfWork'
import logger from '../errorHandler'
/**
 * 
 * @api{post}/api/projects Creating a project
 * @apiName Createproject
 * @apiGroup Project
 * @apiVersion 1.0.0
 * @apiSuccess {Project} returns Project Document
 * @apiSuccess {Number} status should be 200
 * @apiSuccessExample Example data on success
 *  {
        "name":"zakir",
        "description":"opis",
        "teamId":"asdj234io2j3ifjsodf"
        "status":"ok"
    }
 * }
 */
const create = (req, res) => {
    Projects.insert(req.body, (status, result) => {
        logger.info('Creating a project')
        if (status > 300) logger.error('Creating a project')
        res.status(status).send(result)
    })
}


/**
* 
* @api{get}/api/projects Listing all projects
* @apiName ListingAllproject
* @apiGroup Project
* @apiVersion 1.0.0
* @apiSuccess {Project} returns Project Documents
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
    "name":"zakir",
    "description":"opis",
    "teamId":"asdj234io2j3ifjsodf"
    "status":"ok"
}
* }
*/
const list = (req, res) => {
    Projects.getAll((status, result) => {
        logger.info('Listing a project')
        if (status > 300) logger.error('Listing a project')
        res.status(status).send(result)
    })
}

/**
* 
* @api{get}/api/projects/:id Finding a project by Id
* @apiName FindAProjectById
* @apiGroup Project
* @apiVersion 1.0.0
* @apiSuccess {Project} returns a Project Document
* @apiSuccess {Number} status should be 200
* @apiSuccessExample Example data on success
*  {
    "name":"zakir",
    "description":"opis",
    "teamId":"asdj234io2j3ifjsodf"
    "status":"ok"
}
* }
*/
const projectById = (req, res, next, id) => { req.id = id; next() }
/**
 * 
 * @api{get}/api/projects/:id Reading a project by Id
 * @apiName ReadProjectById
 * @apiGroup Project
 * @apiVersion 1.0.0
 * @apiSuccess {Project} returns a Project Document
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
const read = (req, res) => {
    Projects.getOne(req.id, (status, result) => {
        logger.info('Reading a project')
        if (status > 300) logger.error('Reading a project')
        res.status(status).send(result)
    })
}


/**
 * 
 * @api{put}/api/projects/:id Updating a project by Id
 * @apiName UpdateProject
 * @apiGroup Project
 * @apiVersion 1.0.0
 * @apiSuccess {Project} returns a Project Document
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
const update = (req, res) => {
    Projects.update(req.id, req.body, (status, result) => {
        logger.info('Creating a project')
        if (status > 300) logger.error('Creating a project')
        res.status(status).send(result)
    })
}



/**
 * 
 * @api{delete}/api/projects/:id Deleting a project 
 * @apiName DeleteProject
 * @apiGroup Project
 * @apiVersion 1.0.0
 * @apiSuccess {Project} returns a Project Document
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
const remove = (req, res) => {
    Projects.remove(req.id, (status, result) => {
        logger.info('Updating a project')
        if (status > 300) logger.error('Updating a project')
        res.status(status).send(result)
    })
}

export default { create, list, update, remove, projectById, read }
