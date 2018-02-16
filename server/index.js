const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      config = require('./config'),
      app = express(),
      port = 3018;


// ========== MIDDLEWARE ========== //

// ===== TOP LEVEL MIDDLEWARE ===== //

app.use(bodyParser.json());
app.use(cors());
app.use(session({
     secret: config.secret,
     saveUnitialized: false,
     resave: false
}));

// ===== CUSTOM MIDDLEWARE ===== //



// ========== ENDPOINTS ========== //

// === GET REQUESTS === //

app.get('/api/friends/list', (req, res) => {
    
})
app.get('/api/user/list', (req, res) => {
    
})  
app.get('/api/user/search', (req, res) => {
    
})


// === PUT REQUESTS === //



// === POST REQUESTS === //



// === DELETE REQUESTS === //



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})