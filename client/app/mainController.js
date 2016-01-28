angular.module('playlytics')

.controller('mainController', ['Spotify', '$scope', function(Spotify, $scope){
  var band = Spotify.search('Pulp', 'artist')
  .then(function(data) { console.log(data) })
}])