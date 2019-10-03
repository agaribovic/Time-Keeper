import '../models/person.model'
import '../models/team.model'
import '../models/customer.model'
import '../models/project.model'
import '../models/calendar.model'
import Repository from './repository'

/** 
* @api Creates creates instances of repository for each model
* @apiName UnitOfWork
* @apiGroup UnitOfWork
* @apiVersion 1.0.0
*/

class unitofWork
{
    static People = new Repository('Person')
    static Teams = new Repository('Team')
    static Customers=new Repository('Customer')
    static Projects = new Repository('Project')
    static Calendar = new Repository('Calendar')
}

module.exports = unitofWork