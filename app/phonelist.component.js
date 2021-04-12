	/**
	* phonecatApp Module
	*
	* Description
	* Creating a custom component with it's controller and template
	*/

	angular.module('phonecatApp').
	component('phoneList', {
		template:
			'<ul>'+'<li ng-repeat="phone in $ctrl.phones">'+'<span>{{phone.name}}</span>'+'<p>{{phone.snippet}}</p>'+'</li>'+'</ul>',
		controller:function PhoneListController(){
			this.phones = [
				{
					name:'Nexus S',
					snippet:'Nexus S snippet'
				},{
					name:'Moto X',
					snippet:'Moto X snippet'
				}];	
		
		}
	});