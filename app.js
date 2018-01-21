(function(){
'use strict'
angular.module('LunchCheck', [])

.controller('LunchCheckController', Check);

Check.$inject = ['$scope'];
function Check ($scope) {
  $scope.dish = "" ;
  $scope.msg ;

  //DISPLAY MESSAGE FUNCTION
  $scope.displayMsg = function (){
    if($scope.dish == ""){
      $scope.msg = 'Please Enter Data First';
    }
    else{
      $scope.msg = checkDish($scope.dish);
    }
  }
  // CHECK VALIDATION OF DISH OF LUNCH
  function checkDish(string){
    var commaSeprate = /\s*,\s*/;
    var val = "";
    var nameList = string.split(commaSeprate);
      console.log(nameList);
    var dishArrayLength = nameList.length;

    if(dishArrayLength  <= 3 ){
      val = 'Enjoy!';
    }
    else {
      val = 'Too Much'
    }
      console.log(dishArrayLength);
      return val;
  }
}

})();
