var app = angular.module('myApp', ['ngRoute']);

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
});
app.config(function ($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'pages/objectives.html',
        })

        .when('/objectives', {
            templateUrl: 'pages/objectives.html',
        })
        .when('/Projects', {
            templateUrl: 'pages/Projects.html',
        })
        // route for the Education page
        .when('/Education', {
            templateUrl: 'pages/Education.html',
        })
         .when('/Achievements', {
             templateUrl: 'pages/AA.html',
         })
        .when('/Personal', {
            templateUrl: 'pages/Details.html',
        })
        // route for the skills page
        .when('/Skills', {
            templateUrl: 'pages/skills.html',
        });
});

app.controller('profileController', ['$scope', '$http', function ($scope, $http) {
    $scope.objectives_click= true;
    $scope.keys = function (obj) {
        return obj ? Object.keys(obj) : [];
    }
    $scope.notSorted = function (obj) {
        if (!obj) {
            return [];
        }
        return Object.keys(obj);
    }
    $scope.objectKeys = function (obj) {
        return Object.keys(obj);
    } 
    $http.get('data/rajarathinam.json').success(function (data) {
        $scope.profile = data;
        $scope.artistOrder = 'name';
    });
    $scope.name="Raja Rathinam";
    $scope.jobtitle = "UI & UX Developer";    
    
   

}]);



