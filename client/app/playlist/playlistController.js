angular.module('playlytics')

.controller('playlistController', ['$scope', '$stateParams', 'playlistFactory', '$localStorage', function($scope, $stateParams, playlistFactory, $localStorage){
  $scope.playlistName = $stateParams.displayedPlaylist;
  $scope.playlist = $localStorage.myPlaylists[$stateParams.displayedPlaylist];
  $scope.deleteSong = playlistFactory.deleteSong;
  $scope.moveUp = playlistFactory.moveUp;
  $scope.moveDown = playlistFactory.moveDown;
}]);
