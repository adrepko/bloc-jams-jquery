class Helper {
  playPauseAndUpdate(song = player.currentlyPlaying) {
    player.playPause(song);
    $('#time-control .total-time').text(player.prettyTime(song.duration));
  }
}

const helper = new Helper();
