'use strict';

angular.module('tutorialChatApp')
    .controller('MainCtrl', function ($scope, $anchorScroll, $cookies, Chat) {
        var _this = this;

        while ($cookies.userid == null || $cookies.userid.trim().length < 3) {
            $cookies.userid = prompt("Wpisz swoje imie i nazwisko");
        }

        this.messages = Chat;

        this.newMessage = "";

        this.chat = $(".panel-body").first();

        this.sendMsg = function() {
            this.messages.$add({
                nick: $cookies.userid,
                message: this.newMessage,
                timestamp: new Date()
            });
            this.newMessage = "";
        };

        Chat.$on('change', function() {
            _this.chat.animate({scrollTop: _this.chat.prop("scrollHeight")}, 250);
        });
    });
