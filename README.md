# Music Player Project

This project is a simple, yet stylish music player built using HTML, CSS, and JavaScript. It features play, pause, next, and previous functionalities. A music progress bar is also included to track the song's progress. The design is elegant and features a blurred album cover in the background for an aesthetic look.

## Project Structure

The project consists of three main files:

1. `index.html`: The main HTML file that structures the music player interface. It includes the song cover, title, artist, progress bar, and control buttons.

2. `style.css`: The CSS file that styles the HTML elements to give the music player its sleek look. It uses the 'Poppins' Google font for all text.

3. `index.js`: The JavaScript file that handles the music player's functionality. It includes playing, pausing, switching to next or previous tracks, updating the progress bar, and other features.

## How to Run

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Main Features

1. **Play/Pause**: Click on the play button to start playing the currently loaded song. The button changes to a pause button, which can be clicked to pause the music.

2. **Next/Previous**: The next and previous buttons can be used to switch between songs.

3. **Progress Bar**: The progress bar shows the progress of the currently playing song. You can click anywhere on the bar to jump to a different part of the song.

4. **Song Information**: The music player displays the title and artist of the currently playing song.

5. **Background Image**: The blurred album cover of the currently playing song is displayed as a background image for a pleasing aesthetic effect.

## Code Snippets

The main features of the music player are implemented in the `MusicPlayer` object in `index.js`. For example, here's how the play and pause functionalities are implemented:

```javascript
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
```
