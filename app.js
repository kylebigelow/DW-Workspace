const express = require('express');
const app = express();
app.set("view engine", "pug");

app.get('/', function(req, res, next){
    //build all things above send. you can only use send once
    console.log("YO wabba wabba");
    console.warn("This is kinda bad");
    console.error("What does this do?");
    res.render("index", {pageTitle: "Home"});
});

app.get('/restoration', function(req, res, next) {
    res.render("restoration", {pageTitle: "Restoration"});
});

app.get('/about', function(req, res, next) {

});

app.get('/service', function(req, res, next) {

});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3180, function(){
    console.log("Server is Running on Port 3180");
});