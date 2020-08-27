const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const methodOverride = require("method-override");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");

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

app.get("/", function(req, res){
    res.render("index");
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Classroom is open!");
});