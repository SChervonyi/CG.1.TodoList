function ShowInput() {
    var x, text;

     x = document.getElementById("inputtext").value;

    if (isNaN(x)) {
        text = x;
    } else {
        text = "Enter text, please";
    }
    console.log(text);
}


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.hello = "Hello world";
  });