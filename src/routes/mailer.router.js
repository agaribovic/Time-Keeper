import express from 'express'
import contactCtrl from '../controllers/contact.controller'

const router = express.Router()

router.route('/api/contact')
     .post(contactCtrl.create)

export default router