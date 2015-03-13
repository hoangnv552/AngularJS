'use strict';

/* Services */
/* jshint node: true */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    // return $resource(
    // 	'phones/:phoneId.json',
    // 	{}, {
    //   		abc: {
  		// 		method:'GET',
  		// 		params: {
  		// 			phoneId: 'phones'
  		// 		},
  		// 		isArray: true
  		// 	}
    // 	});

	return $resource('phones/:phoneId.json');
  }]);
