angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.addListing = function(newL) {
      $scope.listings.push(newL);
    };
    $scope.deleteListing = function(listing) {
      if(listing == $scope.detailedInfo) {
        $scope.detailedInfo = undefined;
      }
      $scope.listings.splice($scope.listings.indexOf(listing), 1);
    };
    $scope.showDetails = function(listing) {
  	   $scope.detailedInfo = listing;
	  };
  }
]);
