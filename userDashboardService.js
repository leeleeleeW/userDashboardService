//angular.module('app')
//.factory('userDashboardService', function($http) {
module.service('userDashboardService', function($http) {
//use myapp for the module and controller, and inject the userDashboardService
//user lower case for the service name to match the reference in the controller js 
//use service instead of factory for a simpler architecture


var users = [];

$http.get('https://api.example.com/users').then(function(response) {
users = response.data;
});
//return {
//getUsers: function() {
this.getUsers=function() {
return users;
};

//getUser: function(id) {
this.getUser=function(id) {
for (var i = 0; i < users.length; i++) {
if (users[i].id == id) return users[i];
}
},
//updateUser: function(id, changes) {
this.updateUser=function(id, changes) {
$http.put('https://api.example.com/users/' + id, changes);
$http.get('https://api.example.com/users').then(function(response) {
users = response.data;
});
},
//searchUsers: function(query) {
this.searchUsers=function(query) {
var results = [];
for (var i = 0; i < users.length; i++) {
if (users[i].name.toLowerCase().indexOf(query) !== -1 ||
users[i].email.toLowerCase().indexOf(query) !== -1) {
results.push(users[i]);
}
}
return results;
}
//};
});
