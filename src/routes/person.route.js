import express from 'express'
import personCtrl from '../controllers/person.controller'
const router = express.Router()

/** 
* @api{Routing} Routing GET and POST methods for people
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/people')
    .get(personCtrl.list)
    .post(personCtrl.create)

/** 
* @api{Routing} Routing GET, PUT AND DELETE methods for people with specified ID
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/people/:id')
    .get(personCtrl.read)
    .put(personCtrl.update)
    .delete(personCtrl.remove)

router.param('id', personCtrl.personById)

export default router


