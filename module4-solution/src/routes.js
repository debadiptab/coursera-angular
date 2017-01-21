(function () {
	'use strict';
	angular.module("MenuApp").config(RoutesConfig);

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

	function RoutesConfig($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/')

	    $stateProvider
	        .state('home', {
	            url: '/',
	            templateUrl: 'src/menuapp/templates/home.template.html'

	        })


	    .state('categories', {
	        url: '/categories',
	        templateUrl: 'src/menuapp/templates/categories.html',
	        controller: 'CategoriesController as categoriesController',
	        resolve: {
	            categories: ['MenuDataService',
	                function(MenuDataService) {
	                    return MenuDataService.getAllCategories();
	                }
	            ]
	        }

	    })

	    .state('items', {
	        url: '/item/{id}',
					params:{
						id: '',
						category: ''
					},
	        templateUrl: 'src/menuapp/templates/items.html',
	        controller: 'ItemsController as itemsController',
	        resolve: {
	            items: ['$stateParams', 'MenuDataService',
	                function($stateParams, MenuDataService) {
	                    return MenuDataService.getItemsForCategory($stateParams.id);
	                }
	            ],
							category:['$stateParams',
									function($stateParams) {
											return $stateParams.category ;
									}
							]
	        }
	    })

			;



	}
})() ;
