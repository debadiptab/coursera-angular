angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

ItemsController.$inject = ['items', 'category']

function ItemsController(items, category) {
    itemsController = this;
    itemsController.items = items ;
    itemsController.category = category ;
}
