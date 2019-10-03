import express from 'express'
import customerCtrl from '../controllers/customer.controller'
const router = express.Router()

/** 
* @api{Routing} Routing GET and POST methods for customers
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/customers')
    .get(customerCtrl.list)
    .post(customerCtrl.create)

/** 
* @api{Routing} Routing GET, PUT AND DELETE methods for customers with specified ID
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/customers/:id')
    .get(customerCtrl.read)
    .put(customerCtrl.update)
    .delete(customerCtrl.remove)

router.param('id', customerCtrl.customerById)

export default router
