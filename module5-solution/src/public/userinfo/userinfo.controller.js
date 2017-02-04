(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['MenuService', 'userInfo'];
function UserInfoController(MenuService, userInfo) {
  var $ctrl = this;

  if (userInfo) {
    $ctrl.userInfo = userInfo;
    MenuService.getMenuItem(userInfo.favorite)
      .then(function(response) {
        $ctrl.menuItem = response;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};

})();
