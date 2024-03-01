export abstract class VideoPlayer {
  protected videoState: boolean = false;
  constructor(
    protected videoPlayer: HTMLVideoElement,
    protected playPauseBtn: HTMLButtonElement,
    protected resetBtn: HTMLButtonElement,
  ) {}

  abstract playPause(): void;

  abstract addListeners(): void;
}

export class VideoPlayerHome extends VideoPlayer {
  addListeners(): void {
    this.addListenerToBtn();
    this.addListenerToPlayerEnded();
    this.addListenerToBtnReset();
  }

  addListenerToBtn(): void {
    this.playPauseBtn.addEventListener('click', () => {
      this.playPause();
      this.playPauseBtn.innerHTML = this.videoState ? 'Play' : 'Pause';
    });
  }

  playPause(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.videoState = false;
    } else {
      this.videoPlayer.pause();
      this.videoState = true;
    }
  }

  addListenerToBtnReset(): void {
    this.resetBtn.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.videoState = false;
      this.playPauseBtn.innerHTML = 'Play';
    });
  }

  addListenerToPlayerEnded(): void {
    this.videoPlayer.addEventListener('ended', () => {
      this.playPauseBtn.innerHTML = 'Play';
    });
  }
}

const videoElement: HTMLVideoElement = document.querySelector('.video')!;
const playPauseBtn: HTMLButtonElement = document.querySelector('.play')!;
const resetBtn: HTMLButtonElement = document.querySelector('.reset')!;

const videoPlayerHome = new VideoPlayerHome(
  videoElement,
  playPauseBtn,
  resetBtn,
);
videoPlayerHome.addListeners();
