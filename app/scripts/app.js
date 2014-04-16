'use strict';

angular.module('tutorialChatApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'firebase'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('Chat', function($firebase) {
        return $firebase(new Firebase("https://chat-tutorial.firebaseio.com/").endAt().limit(100));
    });
