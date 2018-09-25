(function() {

    "use strict";

    var App = angular.module("App.controllers",[]);
    App.controller('homeController', function($scope) {
        console.log("Hello World from Home controller");
    });
});