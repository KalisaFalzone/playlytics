angular.module('playlytics')

.controller('searchFormController', ['$scope', 'analytics', 'playlistFactory', function($scope, analytics, playlistFactory){
  $scope.selectedSong = null;
  $scope.playlistName;

  //factory functions
  $scope.createPlaylist = playlistFactory.createPlaylist;
  $scope.myPlaylists = playlistFactory.myPlaylists;
  $scope.selectedPlaylist = null;

  $scope.responseFn = function(response) {
    response.tracks.items.forEach(function(item) {
      item.artistName = item.artists[0].name;
      item.albumName = item.album.name;
    })
    return response;
  }

  $scope.requestFn = function(query) {
    return { "q": query, "type":"track" }
  }

  $scope.selectAction = function(songSelected) {
    $scope.selectedSong = {};
    console.log('chosen song:', songSelected);
    $scope.selectedSong.title = songSelected.title;
    $scope.selectedSong.artistName = songSelected.originalObject.artistName;
    $scope.selectedSong.miliseconds = songSelected.originalObject.duration_ms
    $scope.selectedSong.duration = analytics.convertTime(songSelected.originalObject.duration_ms);
    $scope.selectedSong.songPopularity = songSelected.originalObject.popularity;
    console.log('selectedSong', $scope.selectedSong);
  }
  }])

.directive('searchForm', [function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/searchForm/searchFormTemplate.html',
    controller: 'searchFormController'
  };
}])
