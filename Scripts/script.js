var app = angular.module("App", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/admin",{
            templateUrl: "view/admin.html",
            controller: "adminController"
        })
        .when("/home", {
            templateUrl: "view/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "view/about.html",
            controller: "aboutController"
        })
            .when("/contact",{
                templateUrl: "view/contact.html",
                controller: "contactController"
            })
    })
    .controller("homeController",function($scope){
        $scope.message = "Home Page";
    })