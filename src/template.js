import config from './config'
import _ from 'lodash'
export default (title = 'TimeKeeper') => {
    
    if(!_.isEmpty(config.currentUser))
    {
        return `<!doctype html>
    <html lang='en'>
        <head>
            <meta charset='utf-8'>
            <title>${title}</title>
        </head>
        <body>
            <h2>Hello from ${title}</h2>
            <p>Your user is<br>
            ${config.currentUser._id}<br>
            ${config.currentUser.name}<br>
            ${config.currentUser.sub}<br>
            ${config.currentUser.cli}<br>
            ${config.currentUser.scopes[0].role}:${config.currentUser.scopes[0].action} <br>
            ${config.token}
            </p>
        </body>
    </html>`

    }
    else{
        return `<!doctype html>
        <html lang='en'>
            <head>
                <meta charset='utf-8'>
                <title>${title}</title>
            </head>
            <body>
                <h1>Your account is not yet enabled, please contact your administrator</h1>
            </body>
        </html>`
    }
}