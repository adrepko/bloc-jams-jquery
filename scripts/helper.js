class Helper {
  playPauseAndUpdate(song) {
    const songLength = player.getDuration();
    player.playPause(song);
    $('#time-control .total-time').text(player.prettyTime(songLength));
  }
}

const helper = new Helper();
