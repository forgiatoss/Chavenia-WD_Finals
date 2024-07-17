document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audio-player');

  audioPlayer.addEventListener('play', () => {
      console.log('Playing song...');
  });

  audioPlayer.addEventListener('pause', () => {
      console.log('Paused song...');
  });

  audioPlayer.addEventListener('ended', () => {
      console.log('Song ended.');
  });
});
