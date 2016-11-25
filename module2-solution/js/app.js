(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var boughtController = this;

  boughtController.items = ShoppingListCheckOffService.getItemsBought() ;
}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var buyController = this;

  buyController.items = ShoppingListCheckOffService.getItemsToBuy() ;

  buyController.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Chips",
    quantity: "5"
  }
];
  var itemsBought = [];

  service.buyItem = function (itemIdex) {
    itemsBought.push(itemsToBuy[itemIdex]) ;
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
