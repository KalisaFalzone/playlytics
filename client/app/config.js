angular.module('playlytics')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/myPlaylists");
  //
  // Now set up the states
  $stateProvider
    .state('myPlaylists', {
      url: "/myPlaylists",
      controller: 'myPlaylistsController',
      templateUrl: "app/myPlaylists/myPlaylistsTemplate.html"
    })
    .state('playlist', {
      url: "/playlist",
      controller: 'playlistController',
      templateUrl: "app/playlist/playlistTemplate.html",
    });
}]);