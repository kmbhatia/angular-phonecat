'use strict';

angular.
	module('phonecatApp').
		config(['$routeProvider', //We request necessary providers to be injected into our configuration function
			function config($routeProvider) {
				$routeProvider.
				//when('/phones' : Determines the view to be shown when the URL hash fragment is /phones
					when('/phones', { //$routeProvider.when : Adds new route definition to the $route service
						template: '<phone-list></phone-list>'
					}).
				//when('/phones/:phoneId' : Determines the view to be shown when the URL hash fragment matches /phones/phoneId
					when('/phones/:phoneId',{ //":" (colon) prefix used with variables are extracted into $routeParams 
						template: '<phone-detail></phone-detail>'
					}).
					otherwise('/phones'); //Sets route definition that will be used on route change when no other route definition matches
			}
		]);