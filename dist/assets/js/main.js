$(document).ready(function () {
  //nice select:
  $(".hero-banner-select-sm").niceSelect();
  $(".hero-banner-select").niceSelect();
  $(".watch-history-select").niceSelect();
  $(".create-rooms-select").niceSelect();
  $(".accordion-body-address").niceSelect();
  $(".details-page-select").niceSelect();
  $(".business-specialty-select").niceSelect();
  $(".set-operation-select").niceSelect();
  // $('select').niceSelect();
  // $('#selectNice').niceSelect();

  // hideButton:
  const hidePasswordButton = document.querySelector(".hidePass");
  const showPasswordButton = document.querySelector(".showPass");
  const passwordInput = document.querySelector(".passwordInput");
  if (hidePasswordButton && showPasswordButton) {
    hidePasswordButton?.addEventListener("click", () => {
      showPasswordButton?.classList.remove("hidden");
      hidePasswordButton?.classList.add("hidden");
      passwordInput?.setAttribute("type", "text");
    });
    showPasswordButton?.addEventListener("click", () => {
      hidePasswordButton?.classList.remove("hidden");
      showPasswordButton?.classList.add("hidden");
      passwordInput?.setAttribute("type", "password");
    });
  }

  //image upload:
  const prevImg = document.querySelector(".upload-img-prev");
  const uploadImgInput = document.getElementById("upload-image");

  uploadImgInput?.addEventListener("change", () => {
    if (uploadImgInput.files.length) {
      const image = uploadImgInput.files[0];
      prevImg.src = URL.createObjectURL(image);
      console.log("change");
    }
  });

  //navbarDropDown:

  const navbarDropDownBtn = document.querySelector(".navbar-dropdown-btn");
  const navbarDropDown = document.querySelector(".navbar-dropdown");

  // Toggle the dropdown visibility when the button is clicked
  navbarDropDownBtn?.addEventListener("click", (e) => {
    // Prevent click event from propagating to the document event listener
    e.stopPropagation();

    // Toggle the dropdown visibility with animations
    if (navbarDropDown.classList.contains("opacity-0")) {
      navbarDropDown?.classList.remove("opacity-0", "-z-10", "translate-y-7");
      navbarDropDown?.classList.add("opacity-100", "z-10", "translate-y-5");
    } else {
      navbarDropDown?.classList.remove("opacity-100", "z-10", "translate-y-5");
      navbarDropDown?.classList.add("opacity-0", "-z-10", "translate-y-7");
    }
  });

  // Close the dropdown if clicked outside of it
  document.addEventListener("click", (e) => {
    if (
      !navbarDropDown?.contains(e.target) &&
      !navbarDropDownBtn?.contains(e.target)
    ) {
      navbarDropDown?.classList.remove("opacity-100", "z-10", "translate-y-5");
      navbarDropDown?.classList.add("opacity-0", "-z-10", "translate-y-7");
    }
  });

  //update profile page:
  // Containers:
  const nameUpdateContainer = document.querySelector(".name-update-container");
  const emailUpdateContainer = document.querySelector(
    ".email-update-container"
  );
  const addressUpdateContainer = document.querySelector(
    ".address-update-container"
  );

  // Buttons:
  const nameEditBtn = document.querySelector(".name-edit-btn");
  const nameEditCancelBtn = document.querySelector(
    ".update-information-accordion-cancel-btn"
  );

  const emailEditBtn = document.querySelector(".email-edit-btn");
  const emailCancelBtn = document.querySelector(".email-cancel-btn");

  const addressEditBtn = document.querySelector(".address-edit-btn");
  const addressCancelBtn = document.querySelector(".address-cancel-btn");

  // Accordions:
  const nameUpdateAccordion = document.querySelector(
    ".update-information-accordion-name"
  );
  const emailUpdateAccordion = document.querySelector(
    ".update-information-accordion-email"
  );
  const addressUpdateAccordion = document.querySelector(
    ".update-information-accordion-address"
  );

  // Name Edit Action:
  nameEditBtn?.addEventListener("click", () => {
    nameUpdateContainer?.classList.add("hidden");
    nameUpdateAccordion?.classList.remove("hidden");

    // Disable email and address options
    emailUpdateContainer?.classList.add("opacity-60");
    addressUpdateContainer?.classList.add("opacity-60");
    emailEditBtn?.setAttribute("disabled", true);
    emailEditBtn?.classList.add("cursor-not-allowed");
    addressEditBtn?.setAttribute("disabled", true);
    addressEditBtn?.classList.add("cursor-not-allowed");
  });

  // Name Edit Cancel Action:
  nameEditCancelBtn?.addEventListener("click", () => {
    nameUpdateContainer?.classList.remove("hidden");
    nameUpdateAccordion?.classList.add("hidden");

    // Re-enable email and address options
    emailUpdateContainer?.classList.remove("opacity-60");
    addressUpdateContainer?.classList.remove("opacity-60");
    emailEditBtn?.removeAttribute("disabled");
    emailEditBtn?.classList.remove("cursor-not-allowed");
    addressEditBtn?.removeAttribute("disabled");
    addressEditBtn?.classList.remove("cursor-not-allowed");
  });

  // Email Edit Action:
  emailEditBtn?.addEventListener("click", () => {
    emailUpdateContainer?.classList.add("hidden");
    emailUpdateAccordion?.classList.remove("hidden");

    // Disable name and address options
    nameUpdateContainer?.classList.add("opacity-60");
    addressUpdateContainer?.classList.add("opacity-60");
    nameEditBtn?.setAttribute("disabled", true);
    nameEditBtn?.classList.add("cursor-not-allowed");
    addressEditBtn?.setAttribute("disabled", true);
    addressEditBtn?.classList.add("cursor-not-allowed");
  });

  // Email Edit Cancel Action:
  emailCancelBtn?.addEventListener("click", () => {
    emailUpdateContainer?.classList.remove("hidden");
    emailUpdateAccordion?.classList.add("hidden");

    // Re-enable name and address options
    nameUpdateContainer?.classList.remove("opacity-60");
    addressUpdateContainer?.classList.remove("opacity-60");
    nameEditBtn?.removeAttribute("disabled");
    nameEditBtn?.classList.remove("cursor-not-allowed");
    addressEditBtn?.removeAttribute("disabled");
    addressEditBtn?.classList.remove("cursor-not-allowed");
  });

  // Address Edit Action:
  addressEditBtn?.addEventListener("click", () => {
    addressUpdateContainer?.classList.add("hidden");
    addressUpdateAccordion?.classList.remove("hidden");

    // Disable name and email options
    nameUpdateContainer?.classList.add("opacity-60");
    emailUpdateContainer?.classList.add("opacity-60");
    nameEditBtn?.setAttribute("disabled", true);
    nameEditBtn?.classList.add("cursor-not-allowed");
    emailEditBtn?.setAttribute("disabled", true);
    emailEditBtn?.classList.add("cursor-not-allowed");
  });

  // Address Edit Cancel Action:
  addressCancelBtn?.addEventListener("click", () => {
    addressUpdateContainer?.classList.remove("hidden");
    addressUpdateAccordion?.classList.add("hidden");

    // Re-enable name and email options
    nameUpdateContainer?.classList.remove("opacity-60");
    emailUpdateContainer?.classList.remove("opacity-60");
    nameEditBtn?.removeAttribute("disabled");
    nameEditBtn?.classList.remove("cursor-not-allowed");
    emailEditBtn?.removeAttribute("disabled");
    emailEditBtn?.classList.remove("cursor-not-allowed");
  });

  //modal on personal information update:
  const addIntroBtn = document.querySelector(
    ".update-information-add-intro-btn"
  );
  const updateOpeningDaysBtn = document.querySelector(
    ".update-opening-days-btn"
  );

  const aboutYouModal = document.getElementById("about-you-modal");
  const openingDaysModal = document.getElementById("opening-days-modal");
  const aboutYouModalContainer = document.getElementById(
    "about-you-modal-container"
  );
  const openingDaysModalContainer = document.getElementById(
    "opening-days-modal-container"
  );
  const aboutYouModalOverlay = document.getElementById(
    "about-you-modal-overlay"
  );
  const openingDaysModalOverlay = document.getElementById(
    "opening-days-modal-overlay"
  );

  addIntroBtn?.addEventListener("click", () => {
    if (aboutYouModal && aboutYouModalOverlay) {
      showUpdateIntroModal();
    } else {
      hideUpdateIntroModal();
    }
  });

  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    if (
      aboutYouModalContainer?.contains(e.target) &&
      !aboutYouModal.contains(e.target)
    ) {
      hideUpdateIntroModal();
    }

    if (
      openingDaysModalContainer?.contains(e.target) &&
      !openingDaysModal.contains(e.target)
    ) {
      hideOpeningModal();
    }
  });

  function hideUpdateIntroModal() {
    // Add fade-out and scale-down transitions
    aboutYouModal.classList.add("opacity-0", "scale-95");
    aboutYouModalContainer.classList.add("opacity-0");
    aboutYouModalOverlay.classList.add("opacity-0");
    document.body.style.overflow = "auto";
    // Use setTimeout to allow transition to complete before adding hidden class

    aboutYouModalOverlay.classList.add("hidden");
    aboutYouModalContainer.classList.remove("flex");
    aboutYouModalContainer.classList.add("hidden");
    aboutYouModal.classList.add("hidden");
  }

  function showUpdateIntroModal() {
    // Remove hidden classes first
    aboutYouModalOverlay.classList.remove("hidden");
    aboutYouModalContainer.classList.remove("hidden");
    aboutYouModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    // Trigger reflow to ensure transition works
    void aboutYouModalContainer.offsetWidth;

    // Add flex and transitions
    aboutYouModalContainer.classList.add("flex");

    // Add fade-in and scale-up transitions
    aboutYouModalOverlay.classList.remove("opacity-0");
    aboutYouModalContainer.classList.remove("opacity-0");
    aboutYouModal.classList.remove("opacity-0", "scale-95");
  }

  updateOpeningDaysBtn?.addEventListener("click", () => {
    if (openingDaysModal && openingDaysModalOverlay) {
      showOpeningModal();
    } else {
      hideOpeningModal();
    }
  });
  function showOpeningModal() {
    // Remove hidden classes first
    openingDaysModalOverlay.classList.remove("hidden");
    openingDaysModalContainer.classList.remove("hidden");
    openingDaysModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
    // Trigger reflow to ensure transition works
    void openingDaysModalContainer.offsetWidth;

    // Add flex and transitions
    openingDaysModalContainer.classList.add("flex");

    // Add fade-in and scale-up transitions
    openingDaysModalOverlay.classList.remove("opacity-0");
    openingDaysModalContainer.classList.remove("opacity-0");
    openingDaysModal.classList.remove("opacity-0", "scale-95");
  }
  function hideOpeningModal() {
    // Add fade-out and scale-down transitions
    openingDaysModal.classList.add("opacity-0", "scale-95");
    openingDaysModalContainer.classList.add("opacity-0");
    openingDaysModalOverlay.classList.add("opacity-0");
    document.body.style.overflow = "auto";
    // Use setTimeout to allow transition to complete before adding hidden class

    openingDaysModalOverlay.classList.add("hidden");
    openingDaysModalContainer.classList.remove("flex");
    openingDaysModalContainer.classList.add("hidden");
    openingDaysModal.classList.add("hidden");
  }

  //review ::start
  const reviewStars = document.querySelectorAll(".star");
  const reviewCountInput = document.getElementById("user-review-stars");
  function setActiveStars(count) {
    reviewStars?.forEach((star, index) => {
      const path = star.querySelector("path");

      if (path && index < count) {
        // Active state: Use gradient fill and stroke
        path.style.fill = "url(#paint0_linear_8485_2796)";
        path.setAttribute("stroke", "url(#paint0_linear_8485_2796)");
      } else {
        // Inactive state: Remove fill, use default stroke
        path.style.fill = "none";
        path.setAttribute("stroke", "url(#paint0_linear_8485_2796)");
      }
    });
  }

  // Keep track of the current rating
  let currentRating = 0;

  reviewStars?.forEach((star) => {
    if (star) {
      // Add hover effect
      star?.addEventListener("mouseenter", () => {
        const count = parseInt(star.getAttribute("data-index"));

        // Preview rating on hover
        reviewStars?.forEach((s, index) => {
          const path = s.querySelector("path");

          if (path && index < count) {
            path.style.fill = "url(#paint0_linear_8485_2796)";
            path.setAttribute("stroke", "url(#paint0_linear_8485_2796)");
          } else {
            path.style.fill = "none";
            path.setAttribute("stroke", "url(#paint0_linear_8485_2796)");
          }
        });
      });

      // Restore previous state or reset on mouse leave
      star.addEventListener("mouseleave", () => {
        setActiveStars(currentRating);
      });

      // Click to set rating
      star.addEventListener("click", () => {
        currentRating = parseInt(star.getAttribute("data-index"));
        reviewCountInput.value = currentRating;
        setActiveStars(currentRating);
      });
    }
  });

  // Reset stars if clicking outside the review area
  document.addEventListener("click", (e) => {
    const reviewStarsContainer = document.getElementById("review-stars");
    const reviewerNameInput = document.getElementById("reviewer-name");
    const reviewerEmailInput = document.getElementById("reviewer-email");
    const reviewerMessageInput = document.getElementById("reviewer-message");

    if (
      reviewStarsContainer &&
      !reviewStarsContainer.contains(e.target) &&
      !reviewerNameInput.contains(e.target) &&
      !reviewerEmailInput.contains(e.target) &&
      !reviewerMessageInput.contains(e.target)
    ) {
      // Reset to current rating or completely clear
      setActiveStars(0);
      reviewCountInput.value = 0;
      currentRating = 0;
    }
  });

  //review ::end

  //carousel::start
  $(".details-page .owl-carousel").owlCarousel({
    loop: true,
    margin: 15, // Consistent margin
    nav: true,
    dots: false,
    items: 4,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      480: {
        items: 2,
        margin: 15,
      },
      768: {
        items: 3,
        margin: 15,
      },
      1024: {
        items: 3,
        margin: 20,
      },
      1280: {
        items: 4,
        margin: 20,
      },
    },
  });

  // Function to update preview image
  function updatePreviewImage(imageSrc) {
    $("#preview").attr("src", imageSrc);
  }

  // Add click event to carousel items
  $(".details-page .carousel-item").on("click", function () {
    // Get the image source of the clicked slide
    var clickedImageSrc = $(this).find("img").attr("src");

    // Update the preview image
    updatePreviewImage(clickedImageSrc);

    // Remove active border from all carousel items
    $(".details-page .carousel-item").removeClass("border-4 border-blue-500");

    // Add border to the clicked item
    $(this).addClass("border-4 border-blue-500");
  });

  // Highlight active slide when carousel changes
  $(".details-page .owl-carousel").on("changed.owl.carousel", function () {
    // Remove active border from all carousel items
    $(".details-page .carousel-item").removeClass("border-4 border-blue-500");

    // Find the active slide in the Owl Carousel
    var $owlCarousel = $(".details-page .owl-carousel");
    var $activeItem = $owlCarousel
      .find(".owl-item.active")
      .first()
      .find(".carousel-item");

    // Add border to the first active slide
    $activeItem.addClass("border-4 border-blue-500");
  });

  // Initial highlighting when page loads
  $(document).ready(function () {
    $(".details-page .owl-carousel").trigger("to.owl.carousel", [0]);
  });
  //carousel::end

  //sidebar:

  const closeMenu = document.getElementById("menu-close");
  const openMenu = document.getElementById("menu-hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  openMenu?.addEventListener("click", function () {
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    overlay.classList.remove("-translate-x-full");
    sidebar.classList.remove("-translate-x-full");
  });

  closeMenu?.addEventListener("click", function () {
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    overlay.classList.add("hidden");
    overlay.classList.add("-translate-x-full");
    sidebar.classList.add("-translate-x-full");
  });

  document.addEventListener("click", (e) => {
    if (!sidebar?.contains(e.target) && !openMenu?.contains(e.target)) {
      openMenu?.classList.remove("hidden");
      closeMenu?.classList.add("hidden");
      overlay?.classList.add("hidden");
      overlay?.classList.add("-translate-x-full");
      sidebar?.classList.add("-translate-x-full");
    }
  });

  //business file upload:

  const fileInput = document.getElementById("businessPhoto");
  const previewContainer = document.getElementById("prev-business-documents");

  fileInput?.addEventListener("change", () => {
    Array.from(fileInput.files).forEach((file) => {
      const filePreview = document.createElement("div");
      filePreview.className =
        "flex items-center justify-between p-2 bg-white rounded-lg shadow-md w-full max-w-sm";

      // File name and extension
      const fileInfo = document.createElement("span");
      fileInfo.textContent = `${file.name}`;
      fileInfo.className = "text-sm font-medium";

      // Close button
      const closeButton = document.createElement("button");
      closeButton.textContent = "✕";
      closeButton.className =
        "text-sm text-red-500 ml-4 hover:text-red-700 focus:outline-none";

      closeButton.addEventListener("click", () => {
        previewContainer.removeChild(filePreview);
      });

      // Append to preview container
      filePreview.appendChild(fileInfo);
      filePreview.appendChild(closeButton);
      previewContainer.appendChild(filePreview);
    });

    // Clear input for allowing duplicate file uploads
    fileInput.value = "";
  });

  // accordion::
  const headers = document.querySelectorAll(".accordion-header");

  // Add click event listeners to all headers
  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const section = this.closest(".accordion-section");
      const content = section.querySelector(".accordion-content");
      const dropdownArrow = this.querySelector(".dropdown--arrow");
      // Toggle current accordion
      if (content.style.maxHeight) {
        // Close current accordion
        content.style.maxHeight = null;
        content.style.padding = "0px";
        section.classList.remove("active");
        section.classList.add("active");
        content.style.opacity = 0;
        dropdownArrow.style.transform = "rotate(0deg)";
      } else {
        // Open current accordion
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "16px 0";
        content.style.opacity = 100;
        section.classList.add("active");
        dropdownArrow.style.transform = "rotate(180deg)";
      }
    });
  });
});

// sajnin- for dora's general list - cexpand the sale items

const sale = document.getElementById("expand-sale");

sale.addEventListener("click", (e) => {
  e.preventDefault();
  const expanded = document.getElementById("expand-items");

  expanded.classList.toggle("hidden");
});

// sajnin- for the dropdown to post a product

const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const option = dropdownMenu.querySelectorAll("li");
const selected = document.getElementById("selectedOption");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("hidden");
});

option.forEach((o) =>
  o.addEventListener("click", () => {
    selected.textContent = o.textContent;
    dropdownMenu.classList.add("hidden");
  })
);

document.addEventListener("click", (e) => {
  if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

// sajnin- for form submission modal

function submitForm() {
  const modal = document.getElementById("submissionModal");
  // const submitted = document.getElementById("submitted");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function offModal() {
  const modal = document.getElementById("submissionModal");
  modal.classList.remove("flex");
  // const submitted = document.getElementById("submitted");
  modal.classList.add("hidden");
}

// script for showing uploaded image

function uploadPhoto() {
  const uploadImage = document.getElementById("uploadImage");
  const givenContent = document.getElementById("givenContent");
  const roomsCoverUpload = document.getElementById("roomsCoverUpload");

  roomsCoverUpload.addEventListener("change", function () {
    const imageFile = this.files[0];
    if (imageFile && imageFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadImage.src = e.target.result;
        uploadImage.classList.remove("hidden");
        givenContent.classList.add("hidden");
      };
      reader.readAsDataURL(imageFile);
    }
  });
}
