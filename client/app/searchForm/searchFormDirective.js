angular.module('playlytics')

.directive('searchForm', [function(){

  var controller = ['$scope', function($scope){

    $scope.responseFn = function(response) {

      response.tracks.items.forEach(function(item) {
        item.artistName = item.artists[0].name;
      })

      return response;
    }

    $scope.requestFn = function(query) {
      return { "q": query, "type":"track" }
    }
  }]

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/searchForm/searchFormTemplate.html',
    controller: controller
  };
}]);
