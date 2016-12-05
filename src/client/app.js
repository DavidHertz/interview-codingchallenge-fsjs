// ----- ANGULAR MAIN MODULE ----- //

var organizerApp = angular.module('organizerApp', ['ui.router']);


// ----- ANGULAR ROUTES CONFIGURATION ----- //

organizerApp.config(['$stateProvider', '$urlRouterProvider', RouterConfig]);


/**
 * Router configuration function.
 *
 * @param $stateProvider - Handles state behavior.
 * @param $urlRouterProvider - Handles normal URL behavior.
 *
 */
function RouterConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'views/homeView.htm',
            controller: 'MainController'
        })
        
        .state('jobbies', {
            url: '/hobbies',
            templateUrl: 'views/hobbiesView.htm',
            controller: 'HobbiesController'
        });


    $urlRouterProvider.otherwise('/home');
};