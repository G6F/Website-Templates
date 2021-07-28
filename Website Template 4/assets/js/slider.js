var video = document.getElementById('video');
var volumeControl = document.getElementById('vol-control');

var setVolume = function () {
	video.volume = this.value / 100;
};

volumeControl.addEventListener('change', setVolume);
volumeControl.addEventListener('input', setVolume);
