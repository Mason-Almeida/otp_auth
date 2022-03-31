const express = require("express");
const res = require("express/lib/response");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));

app.use('/' , require('./routes/auth.routes'));

app.listen(5000 , () => {
    console.log('App is running on 5000');
})