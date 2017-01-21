angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories']

function CategoriesController(categories) {
    categoriesController = this;
    categoriesController.categories = categories ;
}
