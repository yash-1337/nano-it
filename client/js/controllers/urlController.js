var app = angular.module('urlPage', []);

var input = {
    url: ""
}


var errorText = document.getElementById("errorText");

var simplifyBtnPress = false;

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller("urlController", ['$scope', '$http', "$rootScope", function ($scope, $http, $rootScope) {

    function updateList() {
        $http.post("/listLinks", input).then(function successCallback(response) {
            $rootScope.urls = response.data;
        }.bind(this));
    }

    updateList();

    var r = new RegExp('^(?:[a-z]+:)?//', 'i');

    this.input = input;
    this.submit = function () {
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var currentDate = month + "/" + day + "/" + year

        var urlData = {
            url: input.url,
            date: currentDate
        }
        if (r.test(input.url)) {
            simplifyBtnPress = true;
            errorText.style.display = "none";
            $http.post("/urlinput", urlData).then(function successCallback(response) {
                document.getElementById("outputLink").innerHTML = "The shortened URL is <strong><a href='" + response.data + "'>https://nano-it.herokuapp.com" + response.data + "</a></strong>"
                updateList();
            });
        } else {
            errorText.style.display = "block";
        }
    }

}]);
