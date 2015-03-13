'use strict';

/* Controllers */
/* jshint node: true */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    /*
      Phone.abc = function() {
          // make GET HTTP Request to phones/phones.json

          return [PhoneObj]
      }
    */

    // move phoneId: 'phones' to Phone service
    $scope.phones = Phone.query({
      phoneId: 'phones'
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {

    $scope.phone = Phone.get({
        phoneId: $routeParams.phoneId
    }, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

  }]);
