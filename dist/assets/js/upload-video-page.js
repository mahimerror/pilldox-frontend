// zh modal content show selector start
const showModalBtn = document.getElementById("showModalBtn");
const overlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");

//   show the modal
function showModal() {
  overlay.classList.remove("hidden");
}
//   hide the modal
function hideModal() {
  overlay.classList.add("hidden");
}

//   add listeners
showModalBtn.addEventListener("click", showModal);
overlay.addEventListener("click", function (event) {
  if (!modalContent.contains(event.target)) {
    hideModal();
  }
  console.log(overlay);
});
console.log(overlay);
// zh modal content show selector end

// zh video upload and show video name and video size
const input = document.getElementById("roomsCoverUpload");
const videoInfo = document.getElementById("vide-info");
const videoName = document.getElementById("upload-video-name");
const videoSize = document.getElementById("upload-video-size");
const videoBoxCloseBtn = document.getElementById("video-preview-close-btn");

input.addEventListener("change", () => {
  const file = input.files[0];
  console.log(file);

  if (file) {
    videoInfo.classList.remove("hidden");
    videoName.textContent = `${file.name}`;

    const sizeMb = file.size / (1024 * 1024);
    console.log(sizeMb);
    const sizeText =
      sizeMb < 1
        ? `${(file.size / 1024).toFixed(1)} KB`
        : `${sizeMb.toFixed(2)} MB`;

    videoSize.textContent = `${sizeText}`;
  } else {
    videoInfo.classList.add("hidden");
  }
});

videoBoxCloseBtn.addEventListener("click", () => {
  videoInfo.classList.add("hidden");
});
// zh video upload and show video name and video size
