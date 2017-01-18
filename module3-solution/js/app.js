(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('MenuItemUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json')
.directive('foundItems', FoundItemsDirective);

 function FoundItemsDirective() {
   var ddo = {
     templateUrl: 'foundItems.html',
     scope: {
       found: '<',
       onRemove: '&'
     },
     controller: FoundItemsDirectiveController,
     controllerAs: 'list',
     bindToController: true
   };
   return ddo;
 }

 function FoundItemsDirectiveController() {
   var list = this;

   list.empty = function() {
     return list.found && list.found.length === 0;
   }
 }


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var narrowItDownController = this;

  narrowItDownController.searchTerm = '' ;

  narrowItDownController.items ;

  narrowItDownController.narrowIt = function () {
    if (narrowItDownController.searchTerm !== '') {
      var promise = MenuSearchService.getMatchedMenuItems(narrowItDownController.searchTerm) ;
      promise.then(function (result) {
        narrowItDownController.items = result ;

      })
    } else {
      narrowItDownController.items = [] ;
    }
  };

  narrowItDownController.removeItem = function(index) {
    narrowItDownController.items.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'MenuItemUrl'];
function MenuSearchService($http, MenuItemUrl) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var searchStr = searchTerm.toLowerCase() ;
    var promise = $http({
      method: 'GET',
      url: MenuItemUrl
    }) ;
    return promise.then(function (response) {
      var foundItems = [] ;
      var results = response.data.menu_items;
      for (var i = 0; i < results.length; i++) {
        var result = results[i] ;
        if (result.description.toLowerCase().indexOf(searchStr) > -1) {
            foundItems.push(result);
          }
      }
      return foundItems;
    }).catch(function(error) {
      console.log("Something went wrong", error);
    });
  };

}

})();
