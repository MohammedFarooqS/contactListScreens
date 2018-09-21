var myApp = angular.module('myApp', ['ngRoute']);
   myApp.config(function($routeProvider, $locationProvider, $httpProvider){
        $routeProvider
            .when('/home', {
                templateUrl: '../view/home.html'
            })
            .when("/admin", {
              // template: "<div>Admin Page</div>"
              templateUrl: "../view/admin.html"
            })
            .when("/contact",{
              templateUrl: '../view/contact.html'
            // template: "<div>Contact Page</div>"
             })
            .otherwise({ 
             redirectTo: '../view/home.html' 
              // template: "<div>Other Page</div>"
          });
      //  $locationProvider.html5Mode(true);
    });
    // myApp.controller("homeController",function($scope){
    //     $scope.message = "Home Page";
    // })

myApp.directive('fileModel', ['$parse', function ($parse) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
              scope.$apply(function(){
                  modelSetter(scope, element[0].files[0]);
              });
          });
      }
  };
}]);

myApp.service('fileUpload', ['$http', function ($http) {
  this.uploadFileToUrl = function(file, uploadUrl){
      var fd = new FormData();
      fd.append('file', file);
      $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
      })
      .success(function(){
      })
      .error(function(){
      });
  }
}]);

myApp.controller('AppCtrl', ['$scope', '$http', 'fileUpload',function($scope, $http, fileUpload) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response;
    $scope.contact = "";
  });
};

refresh();

$scope.addContact = function() {
    console.log("Add contact working");
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).success(function(response) {
    $scope.contact = response;
  });
};  

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}

$scope.uploadFile = function(){
  var file = $scope.myFile;
  var file1 = $scope.uploadFile;
  console.log('file is 1' );
  console.dir(file);
  console.log('file is 2' );
  console.dir(file1);
  var uploadUrl = "/fileUpload";
  fileUpload.uploadFileToUrl(file, uploadUrl);
};

}]);﻿