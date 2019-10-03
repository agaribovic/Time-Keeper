import logger from '../errorHandler'
import { Calendar } from '../repositories/unitOfWork'
//import { modelNames } from 'mongoose';

/**
 * 
 * @api{post}/api/calendar Creating a calendar
 * @apiName CreateCalendar
 * @apiGroup Calendar
 * @apiVersion 1.0.0
 * @apiSuccess {Calendar} returns Calendar Document
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
const create = (req, res) => {
    Calendar.insert(req.body, (status, result) => {
        logger.info('Creating a calendar')
        if (status > 300) logger.error('Creating a calendar')
        res.status(status).send(result)
    })
}


/**
 * 
 * @api{get}/api/calendar Listing all calendars
 * @apiName ListCalendar
 * @apiGroup Calendar
 * @apiVersion 1.0.0
 * @apiSuccess {Calendar} returns Calendar Documents
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
const list = (req, res) => {//query za pretragu !!!  TODO
    Calendar.getAll((status, result) => {
        logger.info('Listing a calendar')
        if (status > 300) logger.error('Listing a calendar')
        res.status(status).send(result)
    })
}
/**
 * 
 * @api{get}/api/calendar/:id Finding a calendar by Id
 * @apiName FindCalendarById
 * @apiGroup Calendar
 * @apiVersion 1.0.0
 * @apiSuccess {Calendar} returns a Calendar Document
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
const calendarById = (req, res, next, id) => { req.id = id; next() }
/**
 * 
 * @api{get}/api/calendar/:id Reading a calendar by Id
 * @apiName ReadCalendarById
 * @apiGroup Calendar
 * @apiVersion 1.0.0
 * @apiSuccess {Calendar} returns a Calendar Document
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
    Calendar.getOne(req.id, (status, result) => {
        logger.info('Reading a calendar')
        if (status > 300) logger.error('Reading a calendar')
        res.status(status).send(result)
    })
}
/**
 * 
 * @api{put}/api/calendar/:id Updating a calendar by Id
 * @apiName UpdateCalendar
 * @apiGroup Calendar
 * @apiVersion 1.0.0
 * @apiSuccess {Calendar} updates a Calendar Document
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
    Calendar.update(req.id, req.body, (status, result) => {
        console.log("AjdI")
        console.log(req.id);
        console.log("BODY")
        console.log(req.body)
        logger.info('Updating a calendar')
        if (status > 300) logger.error('Updating a calendar')
        res.status(status).send(result)
    })
}
/**
 * 
 * @api{delete}/api/calendar/:id Removing a calendar
 * @apiName RemoveCalendar
 * @apiGroup Calendar
 * @apiVersion 1.0.0
 * @apiSuccess {Calendar} removes a Calendar Document
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
    Calendar.remove(req.id, (status, result) => {
        logger.info('Removing a calendar')
        if (status > 300) logger.error('Removing a calendar')
        res.status(status).send(result)
    })
}

export default { create, list, calendarById, read, update, remove }