// music player object
const MusicPlayer = {
  songs: [
    { path: 'assets/1.mp3', displayName: 'ADHD', cover: 'assets/1.jpg', artist: 'Kendrick Lamar' },
    { path: 'assets/2.mp3', displayName: '#3', cover: 'assets/2.jpg', artist: 'Aphex Twin' },
    { path: 'assets/3.mp3', displayName: 'Fade Into You', cover: 'assets/3.jpg', artist: 'Mazzy Star' },
  ],
  isPlaying: false,
  music: new Audio(),
  musicIndex: 0,

  elements: {
    image: document.getElementById('cover'),
    title: document.getElementById('music-title'),
    artist: document.getElementById('music-artist'),
    currentTimeEl: document.getElementById('current-time'),
    durationEl: document.getElementById('duration'),
    progress: document.getElementById('progress'),
    playerProgress: document.getElementById('player-progress'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.getElementById('next'),
    playBtn: document.getElementById('play'),
    background: document.getElementById('bg-img'),
  },

  init() {
    this.attachEventListeners();
    this.loadMusic(this.songs[this.musicIndex]);
  },

  togglePlay() {
    this.isPlaying ? this.pauseMusic() : this.playMusic();
  },

  playMusic() {
    this.isPlaying = true;
    this.elements.playBtn.classList.replace('fa-play', 'fa-pause');
    this.elements.playBtn.setAttribute('title', 'Pause');
    this.music.play();
  },

  pauseMusic() {
    this.isPlaying = false;
    this.elements.playBtn.classList.replace('fa-pause', 'fa-play');
    this.elements.playBtn.setAttribute('title', 'Play');
    this.music.pause();
  },

  loadMusic(song) {
    this.music.src = song.path;
    this.elements.title.textContent = song.displayName;
    this.elements.artist.textContent = song.artist;
    this.elements.image.src = song.cover;
    this.elements.background.src = song.cover;
  },

  changeMusic(direction) {
    this.musicIndex = (this.musicIndex + direction + this.songs.length) % this.songs.length;
    this.loadMusic(this.songs[this.musicIndex]);
    this.playMusic();
  },

  updateProgressBar() {
    const { duration, currentTime } = this.music;
    const progressPercent = (currentTime / duration) * 100;
    this.elements.progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    this.elements.durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    this.elements.currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
  },

  setProgressBar(e) {
    const width = this.elements.playerProgress.clientWidth;
    const clickX = e.offsetX;
    this.music.currentTime = (clickX / width) * this.music.duration;
  },

  attachEventListeners() {
    this.elements.playBtn.addEventListener('click', () => this.togglePlay());
    this.elements.prevBtn.addEventListener('click', () => this.changeMusic(-1));
    this.elements.nextBtn.addEventListener('click', () => this.changeMusic(1));
    this.music.addEventListener('ended', () => this.changeMusic(1));
    this.music.addEventListener('timeupdate', () => this.updateProgressBar());
    this.elements.playerProgress.addEventListener('click', (e) => this.setProgressBar(e));
  },
}

// initialize music player
MusicPlayer.init();
