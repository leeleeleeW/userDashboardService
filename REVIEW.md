| **issues found in userDashboard.html** | 
| :--- | 
**1**
script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular.min.js"></script> 
add reference to angularJS library
**2**
<cript src="userDashboardController.js"></script> 
add reference to the userDashboardController.js file -->
**3**
script src="userDashboardService.js"></script> 
add reference to the userDashboardService.js file -->
**4**
ng-app="MyApp" ng-controller="userDashboardController">
add ng-app directive and user lower case for the controller name

<br><br>


| **issues found in userDashboardController.js** | 
| :--- | 
**1**
var module = angular.module('MyApp', []);
// create the MyApp module
**2**
module.controller('userDashboardController', function($scope, userDashboardService)
//use lower case for the service and controller name to match the reference in the html file

<br><br>

| **issues found in userDashboardService.js** | 
| :--- | 
**1**
module.service('userDashboardService', function($http) {
//use module for the module 
**2**
//user lower case for the service name to match the reference in the controller js 
**3**
//use service instead of factory for a simpler architecture

