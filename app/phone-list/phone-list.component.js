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
					snippet:'Nexus S snippet',
					age : 5
				}, {
					name:'Moto X',
					snippet:'Moto X snippet',
					age : 10
				}, {
					name : 'LG Nexus',
					snippet : 'LG Nexus snippet',
					age : 15
				}];	
		this.orderProp='name'; //Sets Default Sorting Order and not leave a blank option in drop down
		}
	});