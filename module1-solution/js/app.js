(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = '' ;
  $scope.message = '' ;
  $scope.state = 0 ;

  $scope.checkLunch = function () {
      var items = $scope.menu.split(',').filter(filterEmptyItems) ;
      if (items.length === 0) {
        $scope.message = "Please enter data first" ;
        $scope.state = -1 ;
      } else if (items.length <= 3)  {
        $scope.message = 'Enjoy!' ;
        $scope.state = 1 ;
      } else {
        $scope.message = 'Too much!' ;
        $scope.state = 1 ;
      }
  };

}

  function filterEmptyItems(item) {
    return item.trim() !== '' ;
  }
})();
