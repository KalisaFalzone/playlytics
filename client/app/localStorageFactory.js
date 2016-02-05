angular.module('playlytics')

.factory('localStorageFactory', [function (){

  var createPlaylist = function(playlist) {
    console.log('createPlaylist called', playlist);

  }

  return {
      createPlaylist: createPlaylist
    }
}]);