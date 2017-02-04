(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserInfoService'];
function SignupController(MenuService, UserInfoService) {
  var $ctrl = this;

  $ctrl.signUpForm = {};

  $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.signUpForm.favorite)
        .then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          UserInfoService.saveUserInfo($ctrl.signUpForm);
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });


    }

    $ctrl.validateFavorite = function() {
      if ($ctrl.signUpForm.favorite === '') {

      } else {
        MenuService.getMenuItem($ctrl.signUpForm.favorite)
          .then(function () {
            $ctrl.invalidFavorite = false;
          })
          .catch(function() {
            $ctrl.invalidFavorite = true;
          });
      }
    }
  }
})();
