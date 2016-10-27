var app = angular.module('TestApp', ['ui.router']);
app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('introduce', {
            url: '/introduce',
            templateUrl: "modules/introduce/introduce.html",
            controller:'introduceCtrl',

        })
        .state('bind', {
            url: '/bind',
            templateUrl: "modules/bind/bind.html",
            controller:'bindCtrl',
        })
        .state('directive', {
            url: '/directive',
            templateUrl: "modules/directive/directive.html",
            controller: 'directiveCtrl',
        });        
    }]);