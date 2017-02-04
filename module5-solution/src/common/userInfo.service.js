(function () {
  'use strict';

  angular.module('common')
  .service('UserInfoService', UserInfoService);

  UserInfoService.$inject = ['$http', '$window', 'ApiPath'];
  function UserInfoService($http, $window, ApiPath) {
    var service = this;

    service.saveUserInfo = function(info) {
      $window.localStorage.setItem('userInfo', JSON.stringify(info));
    };

    service.getUserInfo = function() {
      var userInfo = JSON.parse($window.localStorage.getItem('userInfo'));
      if (userInfo) {
        return userInfo;
      }
      return null;
    };

  }

})();
