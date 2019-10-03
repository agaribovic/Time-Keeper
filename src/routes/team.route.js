import express from 'express'
import teamCtrl from '../controllers/team.controller'
const router = express.Router()

/** 
* @api{Routing} Routing GET and POST methods for teams
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/teams')
    .get(teamCtrl.list)
    .post(teamCtrl.create)


/** 
* @api{Routing} Routing GET, PUT AND DELETE methods for teams with specified ID
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

router.route('/api/teams/:id')
    .get(teamCtrl.read)
    .put(teamCtrl.update)
    .delete(teamCtrl.remove)

router.param('id', teamCtrl.teamById)

export default router





