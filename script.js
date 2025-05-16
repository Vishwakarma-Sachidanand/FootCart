function runAnimations() {}
runAnimations();

// Ensure the DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('promoVideo');
  const playButton = document.getElementById('playButton');

  // Show play button when the video is paused
  video.addEventListener('pause', () => {
    playButton.style.display = 'block';  // Show button when video is paused
  });

  // Hide play button when the video is playing
  video.addEventListener('play', () => {
    playButton.style.display = 'none';  // Hide button when video is playing
  });

  // Function to resume video when the play button is clicked
  function resumeVideo() {
    video.play();
  }

  // Optional: Pause the video when clicked (for testing functionality)
  video.addEventListener('click', () => {
    if (!video.paused) {
      video.pause();
    }
  });
});


// form submit 
const openModalBtn = document.getElementById('openModalBtn');
// const requestModal = document.getElementById('requestModal');
// const cancelBtn = document.getElementById('cancelBtn');
// const submitBtn = document.getElementById('submitBtn');

// const openModal = () => {
//   requestModal.style.display = 'flex';
//   document.body.classList.add('modal-open');
// };

// const closeModal = () => {
//   requestModal.style.display = 'none';
//   document.body.classList.remove('modal-open');
// };

// openModalBtn.addEventListener('click', openModal);
// cancelBtn.addEventListener('click', closeModal);
// submitBtn.addEventListener('click', closeModal);
document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const requestModal = document.getElementById('requestModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const submitBtn = document.getElementById('submitBtn');

  const openModal = () => {
    requestModal.style.display = 'flex'; // Use flex to center it
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    requestModal.style.display = 'none';
    document.body.classList.remove('modal-open');
  };

  openModalBtn.addEventListener('click', openModal);
  cancelBtn.addEventListener('click', closeModal);
  submitBtn.addEventListener('click', closeModal);
});
