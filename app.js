(function(){
'use strict'
angular.module('LunchCheck', [])

.controller('LunchCheckController', Check);

Check.$inject = ['$scope'];
function Check ($scope) {
  $scope.dish = "" ;
  $scope.msg ;

  $scope.displayMsg = function (){
    if($scope.dish == ""){
      $scope.msg = 'Please Enter Data First';
    }
    else{
      $scope.msg = checkDish($scope.dish);
    }
  }

  function checkDish(string){
    var re = /\s*,\s*/;
    var val = "";
    var nameList = string.split(re);
      console.log(nameList);
    var dishArrayLenght = nameList.length;

    if(dishArrayLenght  <= 3 ){
      val = 'Enjoy!';
    }
    else {
      val = 'Too Much'
    }
      console.log(dishArrayLenght);
      return val;
  }

}

})();
