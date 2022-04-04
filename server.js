const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connection = require('./utils/db');
const cors = require('cors');
const exphbs = require("express-handlebars");
const passport = require('passport');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose")

const app = express();

dotenv.config();
app.use(cors());

connection();

app.use(morgan('dev'));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(require("express-session")({
secret:"Any normal Word",//decode or encode session
    resave: false,          
    saveUninitialized:false    
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.use(express.json());
app.use(express.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());

app.use('/' , require('./routes/auth.routes'));
app.use('/user' , require('./routes/user.routes'));

app.listen(process.env.PORT , () => {
    console.log('App is running on 5000');
});

// <div class="container">
//      <form action="/users" method="POST">
//      <div class='row'>
//          <h3>User Login</h3>
//          <hr>
//          <div class='col-sm-4'>
//          <div class='form-group'>
//          <label for="username">User Name</label>
//          <input class="form-control" id="username" name="username" size="100" type="text" required="true" />
//          </div>
//          </div>
//          <div class='col-sm-4'>
//          <div class='form-group'>
//          <label for="password">Password</label>
//          <input class="form-control" id="password" name="password" required="true" size="100" type="password" />
//          </div>
//     </div>
//          </div>
//          <br />
//          <div class='row'>
//              <div class="col-md-1">
//              <button type="button" class="btn btn-warning" onclick="location.href='/';">Back</button>
//              </div> <br />
//              <div class="col-md-1">
//              <button type="button" class="btn btn-danger" onclick="location.href='/users';">Reset</button>
//              </div><br />
//              <div class="col-md-2">
//              <button type="submit" class="btn btn-success">Login</button>
//              </div>
//         </div>
//      </form>
//  </div>