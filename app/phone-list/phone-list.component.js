	/**
	* phonecatApp Module
	*
	* Description
	* Creating a custom component with it's controller and template
	*/

	angular.
	module('phoneList').
	component('phoneList', {
		templateUrl:'phone-list/phone-list.template.html',
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