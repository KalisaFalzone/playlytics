angular.module('playlytics')

.directive('searchForm', [function(){

  var controller = ['$scope', function($scope){

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

    $scope.selectedSong = {};

    $scope.selectAction = function(songSelected) {
      $scope.selectedSong = {};
      if (songSelected) {
        console.log('chosen song:', songSelected);
        $scope.selectedSong.title = songSelected.title;
        $scope.selectedSong.artistName = songSelected.originalObject.artistName;
        $scope.selectedSong.duration = songSelected.originalObject.duration_ms;
        $scope.selectedSong.songPopularity = songSelected.originalObject.popularity;
        console.log('selectedSong', $scope.selectedSong);

      } else {
        console.log('pick a song');
      }

    }
  }]

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/searchForm/searchFormTemplate.html',
    controller: controller
  };
}]);
