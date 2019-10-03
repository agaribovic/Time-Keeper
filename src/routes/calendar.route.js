import express from 'express'
import calendarCtrl from '../controllers/calendar.controller'
const router = express.Router()

/** 
* @api{Routing} Routing GET and POST methods for calendar
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/calendar')
    .get(calendarCtrl.list)
    .post(calendarCtrl.create)

/** 
* @api{Routing} Routing GET, PUT AND DELETE methods for calendar with specified ID
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/calendar/:id')
    .get(calendarCtrl.read)
    .put(calendarCtrl.update)
    .delete(calendarCtrl.remove)

router.param('id', calendarCtrl.calendarById)

export default router
