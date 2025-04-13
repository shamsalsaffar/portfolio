// Script for opening and closing the modals

// Function to open the modal based on the modal ID passed
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close the modal based on the modal ID passed
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Event listener for closing modal when clicking outside the modal content
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
};

  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  let index = 0;

  setInterval(() => {
    index++;
    if (index >= items.length) {
      index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); // كل 3 ثواني

