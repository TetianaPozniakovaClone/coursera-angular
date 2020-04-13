(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = '';
  $scope.lunchMenu = null;
  $scope.messageColor = '';

  $scope.displayMessage = function() {
    if (!$scope.lunchMenu) {
      $scope.messageColor = 'red';
      $scope.message = 'Please enter data first';
    }
    else {
      let lunchList = $scope.lunchMenu.split(',');
      lunchList = removeEmptyValues(lunchList);
      $scope.messageColor = "green";

      if(lunchList.length < 4) {
        $scope.message = 'Enjoy!';
      }
      else {
        $scope.message = 'Too much!';
      }
    }
  };

  function removeEmptyValues(list) {
    return list.map(s => s.trim()).filter(item => item);
  }
}

})();
