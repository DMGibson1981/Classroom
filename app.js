const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const methodOverride = require("method-override");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const User = require("./models/user.js");
const Comment = require("./models/comments.js");

mongoose.connect("mongodb://localhost:27017/Classroom", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("ERROR!" + err.message);
});
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
console.log(__dirname);
app.use(methodOverride("_method"));
app.use(flash());

app.use(require("express-session")({
    secret: "A demonstration.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


//ROUTES
app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile", isLoggedIn, function(req, res){
    res.render("profile");
});

app.get("/courses", function(req, res){
    res.render("courses");
});

app.get("/forum", function(req, res){
    Comments.findById(req.params.id, function(err, comments){
        if(err){
            console.log(err);
        } else {
            res.render("forum", {comments: comments});
        }
    });
});

app.get("/comment", function(req, res){
    res.render("comment");
});

// app.post("/forum", function(req, res){
//     Const newComment = new Comment({author: req.body.author, opinion: req.body.opinion});
//     Comment.register(newComment, function(err, comment){
//         if(err){
//             console.log(err);
//             return res.render("/forum");
//         } else{

//         }
//     })

//     res.send("FUCK!");
// });

app.get("/module", function(req, res){
    res.render("module");
});

app.get("/module/test", function(req, res){
    res.render("test");
});


app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/profile",
        failureRedirect: "/login",
    }), function(req, res){

});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    const newUser = new User({username: req.body.username, firstname: req.body.firstname, surname: req.body.surname, email: req.body.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup");
        } 
        passport.authenticate("local")(req, res, function(){
            res.redirect("/profile");
        })
    });
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login");
}

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Classroom is open!");
});