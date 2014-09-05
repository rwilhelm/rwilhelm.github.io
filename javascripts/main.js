angular.module('app', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/about', {
	  templateUrl: 'views/about.html',
	  controller: 'aboutCtrl'
	})
  .when('/contact', {
	  templateUrl: 'views/contact.html',
	  controller: 'contactCtrl'
	})
  .when('/img', {
	  templateUrl: 'views/img.html',
	  controller: 'imgCtrl'
	})
  .when('/stats', {
	  templateUrl: 'views/stats.html',
	  controller: 'statsCtrl'
	});
	$locationProvider.html5Mode(false);
})

.controller('appCtrl', ['$scope', function($scope) {
	$scope.title = 'asdf';
}])

.controller('aboutCtrl', ['$scope', function($scope) {
	$scope.title = 'about';
}])

.controller('aboutCtrl', ['$scope', function($scope) {
	$scope.title = 'about';
}])

.controller('statsCtrl', ['$scope', function($scope) {
	$scope.title = 'stats';
}])

.controller('imgCtrl', ['$scope', function($scope) {
	$scope.title = 'img';
}]);
