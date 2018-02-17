const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      massive = require('massive'),
      passport = require ('passport'),
      Auth0Stratgey = require('passport-auth0'),
      users = require('./controllers/users')
      app = express();

      require('dotenv').config()



// ===== TOP LEVEL MIDDLEWARE ===== //

app.use(bodyParser.json());
app.use(cors());
app.use(session({
     secret: process.env.SESSION_SECRET,
     saveUnitialized: false,
     resave: false
}));

// ===== CUSTOM MIDDLEWARE ===== //

massive(process.env.DB_CONNECTION).then(db => {
    app.set('db', db)
})

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Stratgey({
    domain: 'orio.auth0.com',
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL : process.env.AUTH_CALLBACK
}, (accessToken, refreshToken, extraParams, profile, done) => {
    const db = app.get('db')
    let userData = profile._json,
    auth_id = userData.user.split('|')[1]
}))


// ========== ENDPOINTS ========== //

// === GET REQUESTS === //

app.get('/api/friend/list', )
app.get('/api/user/list', users.getAllUsers )  
app.get('/api/user/search', )


// === PUT REQUESTS === //

app.put('/api/user/update/:id', )


// === POST REQUESTS === //

app.post('/api/friend/add', )
app.post('/api/friend/remove', )
app.post('/api/recommended', )
app.post('/api/recommdended/add', )


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Running like a boss on port ${process.env.SERVER_PORT}`)
})