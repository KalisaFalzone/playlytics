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

  var displayPlaylist = function(pl) {
    console.log('playlist selected', pl)

    $state.go('playlist')

  }

  var addSong = function(song) {

  }

  return {
      createPlaylist: createPlaylist,
      myPlaylists: storage.myPlaylists,
      displayPlaylist: displayPlaylist
    }
}]);
