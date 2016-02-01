angular.module('playlytics')

.directive('searchForm', [function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/searchForm/searchFormTemplate.html',
    link: function(scope, element, attributes) {
      console.log('searchForm link loading');
    }
  };
}]);