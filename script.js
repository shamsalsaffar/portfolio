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
      Java: 'Jag har lärt mig grunderna i Java och använt det för att bygga backend-logik i mina skolprojekt, bland annat med Spring Boot.',
      HTML: 'Jag använder HTML för att strukturera innehållet på mina webbsidor och skapa en tydlig layout för användaren.',
      CSS: 'Med hjälp av CSS kan jag designa och styla mina webbsidor, och jag har jobbat mycket med responsiv design för att anpassa dem till olika skärmstorlekar.',
      JavaScript: 'Jag använder JavaScript för att göra mina webbsidor interaktiva, till exempel genom att skapa menyer, sliders och valideringsfunktioner.',
      Postgres: 'Jag har arbetat med PostgreSQL i skolprojekt där vi lagrade och hanterade data i en relationsdatabas.',
      MongoDB: 'Jag har testat MongoDB i projekt där en mer flexibel datamodell behövdes, särskilt med dokumentlagring i JSON-format.',
      "REST API": 'Jag har byggt och använt REST API:er för att koppla frontend och backend, vilket har hjälpt mig att förstå hur olika delar av en applikation kommunicerar.',
      GitHub: 'Jag använder GitHub för versionshantering, samarbete i team och för att visa upp mina projekt.',
      Maven: 'Jag har använt Maven i Java-projekt för att hantera beroenden och strukturera projekt på ett smidigt sätt.',
      "Node.js": 'Jag har börjat utforska Node.js för att förstå hur man kan köra JavaScript även på serversidan.',
      Docker: 'Jag har grundläggande förståelse för Docker och hur det används för att paketera applikationer i containrar för enklare distribution.',
      React: 'Jag har byggt gränssnitt i React under frontendkursen, vilket har hjälpt mig att förstå komponentbaserad utveckling och hur man jobbar med state och props.'
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

  // Smoth scroll 
// Smooth scroll till contact section
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

//validering och skicka kontaktformulär(utan backend)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // يمنع التحديث التلقائي للصفح

  // Simulera skickande // بعد 1.5 ثانية، نعرض رسالة النجاح
  formStatus.textContent = "Sending...";
  setTimeout(() => {
    formStatus.textContent = "Thank you! Your message was sent.";
    contactForm.reset(); // بعد 1.5 ثانية، نعرض رسالة النجاح
  }, 1500);
});


// språk section

// function för öppna och stäng language lista
function toggleLanguageMenu(){
  const menu = document.getElementById('language-menu');

  // change mellan visa och gömma lista
  menu.style.display = menu.style.display === 'block' ? 'none':'block';
}
function changeLanguage(lang){
  // Hämta all element med data-lang attribut 
  const element=document.querySelectorAll('[data-lang]');

 // gå igenom alla element och visa eller dölja beronde på valt språk
 element.forEach(element=> {
  if (element.getAttribute('data-lang') === lang){
    element.style.display ='block'; // visa text
   }
  else {
    element.style.display ='none'; // dölja text
  }
 });

 // stäng språk lista efter man välja språket 
 document.getElementById('language-menu').style.display = 'none';

  // spara det valda språket i localStorge så det hållas efter att sidan laddas om 
  localStorage.setItem('language',lang);
}

// Hämta det valda språket från localStorage när sidan laddas 
document.addEventListener("DOMContentLoaded", function(){
  const lang = localStorage.getItem('language') || 'en' ; // standard language
  changeLanguage(lang);
});


  