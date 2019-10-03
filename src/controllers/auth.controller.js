import request from 'request'
import jwt from 'jsonwebtoken'
import config from '../config'

const login = (req, res) => {
    let token = req.query.token
    //console.log('uso')
    if (!token) {
        request.get({
            url: 'http://localhost:5000/login?client=TK'
            // headers: { client: 'TK' }
        }, (err, result) => {
            res.status(200).send(result.body)
        })
    } else {
        jwt.verify(token, config.secret, (err, result) => {
            if (err) {
                res.status(401).send('Invalid token')
            } else {
                //console.log('verified')
                config.token = token
                config.currentUser = result
                let exp = result.exp - (new Date().getTime() / 1000)
            }
        })
        res.redirect('/')
    }
}

const signed = (req, res, next) => {
    let token = req.headers.authorization.substring(7)
    if (!config.token) {
        res.status(401).send('Access denied')
    } else {
        jwt.verify(token, config.secret, (err, result) => {
            if (err) {
                console.log(err)
                res.status(401).send('Access denied')
            } else {
                config.token = token
                config.currentUser = result
                let exp = result.exp - (new Date().getTime() / 1000)
                next()
            }
        })
    }
}

const contact = (req, res) => {
}

const canRead = (req, res, next) => {
    if (config.currentUser.scopes[0].role === 'user') {

    }
    next()
}

const canWrite = (req, res, next) => {
    if (config.currentUser.scopes[0].role !== 'admin') {
        
    }
    next()
}

export default { login, signed, canRead, canWrite, contact }