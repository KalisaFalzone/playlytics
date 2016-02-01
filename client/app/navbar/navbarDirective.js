angular.module('playlytics')

.directive('navbar', [function(){

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'app/navbar/navbarTemplate.html',
    link: function(scope, element, attributes) {
      console.log('navbar link loading');
    }
  };
}]);