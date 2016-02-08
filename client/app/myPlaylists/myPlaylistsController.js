angular.module('playlytics')

.controller('myPlaylistsController', ['$scope', 'analytics', 'playlistFactory', function($scope, analytics, playlistFactory){

  $scope.myPlaylists = playlistFactory.myPlaylists;
  $scope.displayPlaylist = playlistFactory.displayPlaylist;

}]);
