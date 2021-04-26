	/**
	* phonecatApp Module
	*
	* Description
	* Creating a custom component with it's controller and template
	* Line 13 : We are explicitly mentioning $http in string format to avoid issues related to loading of dependencies post-minification
	*/

	angular.
	module('phoneList').
	component('phoneList', {
		templateUrl:'phone-list/phone-list.template.html',
		controller:['$http', function PhoneListController($http){
			var self = this; //Assigning this to self variable. 
		//Assigning to self is needed for Asynchronous calls. 
		//https://stackoverflow.com/questions/11577241/why-do-we-need-var-self-this-in-classes-in-javascript
			self.orderProp='age'; //Sets Default Sorting Order and not leave a blank option in drop down

			$http.get('phones/phones.json').then(function(response){
				self.phones = response.data;
			});
		}]
	}); 