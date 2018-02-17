const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      massive = require('massive'),
      passport = require ('passport'),
      Auth0Stratgey = require('passport-auth0'),
      app = express(),
      port = 3018;

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




// ========== ENDPOINTS ========== //

// === GET REQUESTS === //

app.get('/api/friend/list', )
app.get('/api/user/list', )  

app.get('/api/user/search', )


// === PUT REQUESTS === //
app.put('/api/user/update/:id', )


// === POST REQUESTS === //

app.post('/api/friend/add', )
app.post('/api/friend/remove', )
app.post('/api/recommended', )
app.post('/api/recommdended/add', )


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})