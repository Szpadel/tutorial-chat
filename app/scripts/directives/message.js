'use strict';

angular.module('tutorialChatApp')
    .directive('message', function ($cookies) {
        return {
            template: '<li class="clearfix" ng-class="{left: !me, right: me}">\n    <span class="chat-img" ng-class="{\'pull-left\': !me, \'pull-right\': me}">\n        <img src="http://placehold.it/50/{{ color }}/fff&amp;text={{ shortName }}" alt="User Avatar"\n             class="img-circle">\n    </span>\n\n    <div class="chat-body clearfix">\n        <div class="header">\n            <strong ng-if="!me" class="primary-font">{{ message.nick }}</strong>\n            <small class="text-muted" ng-class="{\'pull-right\': !me}">\n                <span class="glyphicon glyphicon-time"></span><timeago timestamp="message.timestamp"></timeago>\n            </small>\n            <strong ng-if="me" class="primary-font pull-right">{{ message.nick }}</strong>\n        </div>\n        <p>\n            {{ message.message }}\n        </p>\n    </div>\n</li>',
            restrict: 'E',
            scope: {
                message: '='
            },
            link: function postLink(scope, element, attrs) {
                scope.me = false;
                scope.color = "55C1E7";
                scope.shortName = scope.message.nick[0];
                if($cookies.userid == scope.message.nick) {
                    scope.message.nick = "Me";
                    scope.me = true;
                    scope.color = "FA6F57";
                    scope.shortName = "Me";
                }

            }
        };
    });
