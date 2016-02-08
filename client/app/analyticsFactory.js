angular.module('playlytics')

.factory('analytics', [function (){

  var convertTime = function(arg) {
    var totalSeconds = arg/1000
    var totalMinutes = totalSeconds/60
    var seconds = Math.floor(totalSeconds%60)
    if (seconds < 10) {
      seconds = '0' + seconds + '';
    }
    var minutes = Math.floor(totalMinutes%60)
    var hours = Math.floor((totalMinutes/60)%60)
    return {seconds: seconds, minutes: minutes, hours: hours}

  }

  return {
      convertTime: convertTime
    }
}]);
