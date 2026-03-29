//angular.module('app')
var module = angular.module('MyApp', []);
 // create the myapp module
module.controller('userDashboardController', function($scope, userDashboardService) { 
  // user myapp for the module
//user lower case for the service and controller name to match the reference in the html file

$scope.filteredUsers = userDashboardService.getUsers();
$scope.onSearch = function() {
var query = $scope.searchQuery;
$scope.filteredUsers = userDashboardService.searchUsers(query);
};
$scope.makeAdmin = function(user) {
userDashboardService.updateUser(user.id, { role: 'admin' });
};
});