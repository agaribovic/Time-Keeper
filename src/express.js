import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import template from './template'
/* const corsOptions={
    origin:'*',
    methods:'*',
    allowedHeaders:'Bearer'
} */
const app = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => { res.status(200).send(template()) })
routes(app)

export default app 
