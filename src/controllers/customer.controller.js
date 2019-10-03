import {Customers} from '../repositories/unitOfWork'
import logger from '../errorHandler'

/**
* @api{post}/api/customer Creating a Customer
* @apiName CreateCustomer
* @apiGroup Customer
* @apiVersion 1.0.0
* @apiSuccess {Customer} returns a Customer Documents
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
const create = (req, res) => { Customers.insert(req.body, (status, result) => { 
    logger.info('Creating a customer')
    if(status>300)logger.error('Creating a customer')
    res.status(status).send(result) }) }

/**
* @api{get}/api/customer Listing all Customers
* @apiName ListCustomers
* @apiGroup Customer
* @apiVersion 1.0.0
* @apiSuccess {Customer} returns a Customer Documents
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
const list = (req, res) => { Customers.getAll((status, result) => { 
    logger.info('Listing a customer')
    if(status>300)logger.error('Listing a customer')
    res.status(status).send(result) }) }

/**
* @api{get}/api/customer/:id Finding a Customer by Id
* @apiName FindCustomerById
* @apiGroup Customer
* @apiVersion 1.0.0
* @apiSuccess {Customer} returns a Customer Documents
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
const customerById = (req, res, next, id) => { req.id = id; next() }

/**
* @api{get}/api/customer/:id Reading a Customer by ID
* @apiName ReadCustomer
* @apiGroup Customer
* @apiVersion 1.0.0
* @apiSuccess {Customer} returns a Customer Documents
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
const read = (req, res) => { Customers.getOne(req.id, (status, result) => {
    logger.info('Reading a customer')
    if(status>300)logger.error('Reading a customer')
     res.status(status).send(result) }) }

/**
* @api{put}/api/customer/:id Updating a Customer 
* @apiName UpdateCustomer
* @apiGroup Customer
* @apiVersion 1.0.0
* @apiSuccess {Customer} updates a Customer Documents
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
const update = (req, res) => { Customers.update(req.id, req.body, (status, result) => { 
    logger.info('Updating a customer')
    if(status>300)logger.error('Updating a customer')
    res.status(status).send(result) }) }

/**
* @api{delete}/api/customer/:id Removing a Customer 
* @apiName RemoveCustomer
* @apiGroup Customer
* @apiVersion 1.0.0
* @apiSuccess {Customer} removes a Customer Documents
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
const remove = (req, res) => { Customers.remove(req.id, (status, result) => { 
    logger.info('Removing a customer')
    if(status>300)logger.error('Removing a customer')
    res.status(status).send(result )}) 
}

export default { create, list, customerById, read, update, remove }