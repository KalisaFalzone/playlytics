angular.module('playlytics')

.factory('playlistFactory', ['$localStorage', '$state', function ($localStorage, $state){

  var storage = $localStorage.$default({myPlaylists: {}})

  var createPlaylist = function(playlist) {
    if (storage.myPlaylists[playlist]) {
      alert("this playlist already exists")
    } else {
      storage.myPlaylists[playlist] = [];
    }
  }

  return {
      createPlaylist: createPlaylist,
      myPlaylists: storage.myPlaylists,
    }

}]);
