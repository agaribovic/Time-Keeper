module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    secret: 'Time$ch00l',
    ftpOptions: { host: 'ftp.smarterasp.net', user: 'apollo', password: 'gigiSchool' },
    token: 'x',
    currentUser: {
        id: '', name: '', sub: '', cli: '', scopes: [{ role: '', action: '', team: '' }]
    },
    identity: 'http://localhost:5000/login',
    mongoUri: 'mongodb://mistral:Mistral2018@ds020168.mlab.com:20168/mern_db',
    mongo: 'mongodb://localhost:27017/TimeKeeperProjectApollo',
    userMail: 'apollogigischool@gmail.com',
    userPassword: 'Apollo2019!'
}

