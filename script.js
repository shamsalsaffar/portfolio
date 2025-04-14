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

// js för skills sidan 
const skillItems = document.querySelectorAll('.skill-item');
        const descriptionDiv = document.getElementById('description');

        // Skill descriptions
      
  document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item");
    const descriptionDiv = document.getElementById("description");

    const descriptions = {
      Java: 'Java is a high-level, class-based, object-oriented programming language used for building scalable and secure applications.',
      HTML: 'HTML is the standard markup language used to create web pages and web applications.',
      CSS: 'CSS is used for styling and designing the layout of web pages, allowing developers to create responsive designs.',
      JavaScript: 'JavaScript is a programming language used to create interactive effects within web browsers.',
      Postgres: 'PostgreSQL is an open-source relational database management system that is highly extensible and supports complex queries.',
      MongoDB: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it scalable and easy to work with.',
      "REST API": 'REST (Representational State Transfer) API is a set of web services that allows systems to communicate over HTTP.',
      GitHub: 'GitHub is a platform for hosting and version control of software development projects using Git.',
      Maven: 'Maven is a build automation tool used primarily for Java projects, helping with dependency management and project configuration.',
      "Node.js": 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine, enabling server-side JavaScript development.',
      Docker: 'Docker is a platform for developing, shipping, and running applications in containers, making deployment easier and more consistent.',
      React: 'React is a JavaScript library for building user interfaces, especially for single-page applications with a component-based architecture.'
    };

    skillItems.forEach(item => {
      item.addEventListener("click", () => {
        const skill = item.textContent.trim(); // Läs själva texten (t.ex. "Java")
        const description = descriptions[skill];
        if (description) {
          descriptionDiv.innerHTML = `
            <h3 style="font-family: 'Great Vibes', cursive; color: #390626;">${skill}</h3>
            <p style="font-family: 'Akaya Telivigala', cursive; font-size: 1.5rem; color: #390626;">${description}</p>`;
        } else {
          descriptionDiv.innerHTML = "<p>Ingen beskrivning tillgänglig för denna skill.</p>";
        }
      });
    });
  });

