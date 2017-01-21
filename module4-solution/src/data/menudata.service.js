(function () {
'use strict';

angular.module('DataApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');


MenuDataService.$inject = ['ApiBaseUrl', '$http']
function MenuDataService(ApiBaseUrl, $http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
            method: 'GET',
            url: ApiBaseUrl + '/categories.json'
        }).then(function(response) {
            return response.data;
        })
  }

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
        method: 'GET',
        url: ApiBaseUrl + '/menu_items.json',
        params: {
          category: categoryShortName
        }
    }).then(function(response) {
        return response.data.menu_items ;
    })

}
}

})();
