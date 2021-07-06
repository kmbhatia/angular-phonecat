'use strict';

angular.
	module('phoneDetail').
	component('phoneDetail',{
		templateUrl: 'phone-detail/phone-detail.template.html',
		controller: ['$http'/*Used to fetch appropriate JSON files*/,'$routeParams'/*Used to fetch current parameters of a URL*/, 
			function PhoneDetailController($http, $routeParams){
				var self = this;
				$http.get('phones/'+$routeParams.phoneId+'.json').then(function(response){
					self.phone = response.data;

				});
			}
		]
	});