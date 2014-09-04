angular.module('app', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/asdf', {
	  templateUrl: 'asdf.html',
	  controller: 'asdfCtrl'
	})
  .when('/qwer', {
	  templateUrl: 'qwer.html',
	  controller: 'qwerCtrl'
	})
  .when('/wsad', {
	  templateUrl: 'wsad.html',
	  controller: 'wsadCtrl'
	});
  $locationProvider.html5Mode(false);
})

.controller('appCtrl', ['$scope', function($scope) {
	$scope.title = 'asdf';
}])

.controller('asdfCtrl', ['$scope', function($scope) {
	$scope.title = 'asdf';
}])

.controller('qwerCtrl', ['$scope', function($scope) {
	$scope.title = 'qwer';
}])

.controller('wsadCtrl', ['$scope', function($scope) {
	$scope.title = 'wsad';
}]);
