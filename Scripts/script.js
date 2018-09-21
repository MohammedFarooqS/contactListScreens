var app = angular.module("myApp", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/home", {
                templateUrl: "view/home.html",
                controller: "homeController"
            })
            .when("/admin",{
                templateUrl: "view/admin.html",
                controller: "adminController"
            })
            .when("/contact",{
                templateUrl: "view/contact.html",
                controller: "contactController"
            })
    })
    .controller("homeController",function($scope){
        $scope.message = "Home Page";
    })