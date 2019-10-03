import express from 'express'
import projectCtrl from '../controllers/project.controller'

const router = express.Router()

/** 
* @api{Routing} Routing GET and POST methods for projects
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/projects')
    .get(projectCtrl.list)
    .post(projectCtrl.create)

/** 
* @api{Routing} Routing GET, PUT AND DELETE methods for projects with specified ID
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/projects/:id')
    .get(projectCtrl.read)
    .put(projectCtrl.update)
    .delete(projectCtrl.remove)

router.param('id', projectCtrl.projectById)

export default router