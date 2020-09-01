const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const methodOverride = require("method-override");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const Users = require("./models/users.js");

mongoose.connect("mongodb://localhost:27017/Classroom", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("ERROR!" + err.message);
});
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// console.log(__dirname);
// app.use(methodOverride("_method"));
// app.use(flash());

// app.use(require("express-session")({
//     secret: "A demonstration.",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });


//ROUTES
app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile", function(req, res){
    res.render("profile");
});

app.get("/courses", function(req, res){
    res.render("courses");
});

app.get("/module", function(req, res){
    res.render("module");
});


app.get("/login", function(req, res){
    res.render("login");
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    var username = req.body.username;
    var firstname = req.body.firstname;
    var surname = req.body.surname;
    var email = req.body.email;
    var password = req.body.password;
    var newUser = {username: username, firstname: firstname, surname: surname, email: email, password: password};
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
        } else{
            res.redirect("/profile");
        }
    });
    User.create(newUser, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{

        }
    })
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Classroom is open!");
});