'use strict';

var groups = require('./groups');
var groupsController = require('../app/controllers/groupsController');

module.exports = function (app) {
    /**
     * [List Routes]
     * 
     */

    app.route('/').get(groupsController.home);

    app.route('/club/:id').get(groupsController.list_a_club);

    //group: groups router
    app.use('/groups', groups);

    app.route('/user').get(function(req, res, next){
        res.render('users/profile', {title: 'profile'});
    });

    app.route('/reply').get(function(req, res, next){
        res.render('groups/show', {title: 'show group'});
    });

    /**
     * [Error Routes]
     * 
     */
    app.use(function (req, res) {
        res.status(404).render('errors/404', {title: 'errors'})
    });
};

