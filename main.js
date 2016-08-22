var app = angular.module("myToDoList", []); 
app.controller("myCtrl", function($scope) {
  $scope.products = ["Hello!"];
  $scope.addRecord = function () {
   $scope.errortext = "";
   if (!$scope.addRec) {return;}        
   if ($scope.products.indexOf($scope.addRec) == -1) {
    $scope.products.push($scope.addRec);
   } else {
    $scope.errortext = "Attention. Record exists!";
   }
  }

  $scope.removeRecord = function (x) {
   $scope.errortext = "";    
   $scope.products.splice(x, 1);
  }
});
