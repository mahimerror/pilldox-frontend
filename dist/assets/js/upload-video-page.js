document.addEventListener("DOMContentLoaded", () => {
  // zh video upload and show video name and video size start
  const input = document.getElementById("roomsCoverUpload");
  const videoInfo = document.getElementById("vide-info");
  const videoName = document.getElementById("upload-video-name");
  const videoSize = document.getElementById("upload-video-size");
  const videoBoxCloseBtn = document.getElementById("video-preview-close-btn");
  const videTitle = document.getElementById("video-title");

  let fileSelected;

  input.addEventListener("change", () => {
    fileSelected = input.files[0];
    console.log(fileSelected);

    if (fileSelected) {
      videoInfo.classList.remove("hidden");
      videoName.textContent = `${fileSelected.name}`;
      videTitle.textContent = `${fileSelected.name}`;

      const sizeMb = fileSelected.size / (1024 * 1024);
      console.log(sizeMb);
      const sizeText =
        sizeMb < 1
          ? `${(fileSelected.size / 1024).toFixed(1)} KB`
          : `${sizeMb.toFixed(2)} MB`;

      videoSize.textContent = `${sizeText}`;
    } else {
      videoInfo.classList.add("hidden");
    }
  });

  videoBoxCloseBtn.addEventListener("click", () => {
    videoInfo.classList.add("hidden");
    document.getElementById("roomsCoverUpload").value = "";
  });
  // zh video upload and show video name and video size end

  // zh form validation start
  const form = document.getElementById("upload-form");
  const showModalBtn = document.getElementById("showModalBtn");
  const overlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  const showModal = () => {
    console.log("dfjhfgjhg");
    overlay.classList.remove("hidden");
  };
  const hideModal = () => {
    overlay.classList.add("hidden");
    modalVideo.pause();
    modalVideo.src = "";
  };
  overlay.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
      hideModal();
    }
    console.log(overlay);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const videoUploadLabel = document.getElementById("roomsCoverUpload");
    // const videoUploadLabel = document.getElementById("roomsCoverUpload");
    const formTitle = document.getElementById("add-title").value;
    const formDescription = document.getElementById("add-description").value;
    const formTags = document.getElementById("add-tags").value;
    const modalVideo = document.getElementById("modalVideo");
    const modalVidoSize = document.getElementById("modalVidoSize");

    if (!videoUploadLabel.files.length) {
      alert("Please Upload Video");
      return;
    }

    if (fileSelected) {
      modalVideo.src = URL.createObjectURL(fileSelected);
      videoName.textContent = `${fileSelected.name}`;
      videTitle.textContent = `${fileSelected.name}`;
      const sizeMb = fileSelected.size / (1024 * 1024);
      console.log(sizeMb);
      const sizeText =
        sizeMb < 1
          ? `${(fileSelected.size / 1024).toFixed(1)} KB`
          : `${sizeMb.toFixed(2)} MB`;

      modalVidoSize.textContent = `${sizeText}`;
    }

    if (!formTitle || !formDescription || !formTags) {
      alert("Please fill in the all field");
      return;
    }

    showModal();
  });
  // zh form validation end
});
