import express from 'express'
import auth from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/login').get(auth.login)
router.route('/auth/contact').get(auth.contact)
export default router