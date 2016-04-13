var express = require('express');
var router = express.Router();

/* GET home page. */
exports.showHomepage = function(req, res){
    res.render('index', { title: 'appy Resource Submitter' });
};

/* GET listings page. */
exports.displayResources = function(req, res){
    res.render('resourceList', { foo: "foo" });
};

/* GET new listing page. */
exports.createResource = function(req, res){
    res.render('newResource', { foo: "foo" });
};
