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

  var deleteSong = function(playlist, index) {
    storage.myPlaylists[playlist].splice(index,1);
  }

  function swapIndexes(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  var moveUp = function(playlist,index) {
    swapIndexes(storage.myPlaylists[playlist], index, index-1)
  }

  var moveDown = function(playlist,index) {
    swapIndexes(storage.myPlaylists[playlist], index, index+1)
  }

  return {
      createPlaylist: createPlaylist,
      myPlaylists: storage.myPlaylists,
      deleteSong: deleteSong,
      moveUp: moveUp,
      moveDown: moveDown
    }

}]);
