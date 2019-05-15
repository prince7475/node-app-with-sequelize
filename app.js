const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000


const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });


app.get('/', (req,res) => res.send('index'))




app.listen(PORT , () => console.log(`Server started on port ${PORT}`));