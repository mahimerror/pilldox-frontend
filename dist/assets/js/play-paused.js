document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
  // play paused
  const video = wrapper.querySelector("#custom-video");
  const playPauseBtn = wrapper.querySelector("#playPauseBtn");
  const playIcon = wrapper.querySelector("#playIcon");
  const pauseIcon = wrapper.querySelector("#pauseIcon");

  const togglePlayPause = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const togglePlayBtn = () => {
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  };

  const togglepauseBtn = () => {
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  };

  video.addEventListener("play", togglePlayBtn);
  video.addEventListener("pause", togglepauseBtn);
  playPauseBtn.addEventListener("click", togglePlayPause);

  // sound icon change
  const soundMutedBtn = wrapper.querySelector("#sound-muted-btn");
  const soundIcon = wrapper.querySelector("#sound-icon");
  const mutedIcon = wrapper.querySelector("#muted-icon");

  const toggleMute = () => {
    video.muted = !video.muted;
    if (video.muted) {
      soundIcon.classList.add("hidden");
      mutedIcon.classList.remove("hidden");
    } else {
      soundIcon.classList.remove("hidden");
      mutedIcon.classList.add("hidden");
    }
  };

  soundMutedBtn.addEventListener("click", toggleMute);
});
