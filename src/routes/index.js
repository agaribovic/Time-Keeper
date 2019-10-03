import teamRouter from './team.route'
import personRouter from './person.route'
import customerRouter from './customer.route'
import projectRouter from './project.route'
import calendarRouter from './calendar.route'
import authRouter from './auth.router'
import mailerRouter from './mailer.router'

/** 
* @api{Routing} Routing GET, PUT AND DELETE methods for projects with specified ID
* @apiName Router
* @apiGroup Routes
* @apiVersion 1.0.0
*/

export default(app)=>
{
    app.use('/',teamRouter)
    app.use('/',personRouter)
    app.use('/',projectRouter)
    app.use('/',customerRouter)
    app.use('/',calendarRouter)
    app.use('/',authRouter)
    app.use('/',mailerRouter)
}