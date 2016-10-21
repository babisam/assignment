(function () {
'use strict';
var message;
angular.module('app_hw1', [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.list = "";
  $scope.checkIfTooMuch = function(){
    var a = $scope.list;
    var b = a.split(',');
    if(b.length >3 )
      message = "too much";
    else if(b.length==1 && b[0]=="")
      message = "Please enter data first";
    else
      message = "Enjoy";
  };
  $scope.say_message=function(){
    return message;
  };
}

})();
