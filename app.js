const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000
const db = require('./config/database')


//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ', err))

    app.get('/', (req,res) => res.send('index'))


//Gig routes 
app.use('/gigs', require('./routes/gigs'))



app.listen(PORT , () => console.log(`Server started on port ${PORT}`));