var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController', function PhoneListController($scope){
	$scope.phones = [{
		name:'Nexus S',
		snippet:'Nexus S snippet'
	},{
		name:'Moto X',
		snippet:'Moto X snippet'
	}];
	$scope.name = 'WORLD!!';
	
});