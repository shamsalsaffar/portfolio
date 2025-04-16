# SHAMS Portfolio

Det är en enkel, responsiv personlig portföljwebbplats för att visa upp olika sidor som "About Me", "Skills", "Portfolio" och "Contact Me". Webbplatsen är byggd med HTML för struktur, CSS för stil och JavaScript för interaktivitet.

## Teknologier
- **Figma** för att planera hemsidan.
- **TTsReader** för att spela upp ljud från `audio.mp3`.
- **Formspree** för att skapa direktkontaktformulär.
- **Animties.se** för att lägga till effekter på sidan.
- **localStorage** för att spara språkinställningar på CV-sidan.

## Funktioner
- **Responsiv design** som anpassar sig till skärmstorlekar: 1440, 768, 440, 390 px.
- **Interaktiva sektioner** med JavaScript.
- **Interaktivt kontaktformulär** som är direkt kopplat till mig.
- **Interaktivt ljud** som spelas upp vid välkomstmeddelande.
- **Agil utveckling** för att optimera arbetssätt och process.

### Filer:
- **.html Sidor**: Huvudfilen för HTML-strukturen för hela porjekt och det är 9 sidor.
- **styles.css**: CSS-filen som definierar webbplatsens stil.
- **script.js**: JavaScript-filen som lägger till interaktivitet.
- **images/**: Mapp med bilder som används på webbplatsen.

## Hemside
Jag försökte bygga en klassisk stil med en hint om att sidan tillhör någon som sysslar med programmering. Här är strukturen:
- **Header och Navigation**:
  - **Vänster meny**: Visar namnet "SHAMS ALSAFFAR", som länkar tillbaka till portfolion.
  - **Höger meny**: Innehåller länkar till andra sektioner på portfolion som "About Me" och "Contact Me".
- **Body**: Innehåller 6 sektioner (Experience, Skills, Projects, CV, Education och Interests).
- **Footer**: Visar ett upphovsrättsmeddelande.
- **Välkomstljud**: Ljud spelas upp när användaren trycker på sidan.

## JavaScript-funktioner
- **Scroll-ljud**: Spelar ett välkomstljud när användaren trycker på sidan.

## Experience section
Syftet med denna sida är att ge en tydlig och strukturerad översikt över mina arbetslivserfarenheter, presenterade på ett användarvänligt och visuellt tilltalande sätt.

- **Struktur och Layout**:
  - Header och navigation som på hemsidan.
  - **Main content**: Består av en rad "job-boxes" som representerar mina tidigare arbetslivserfarenheter.
  - Varje box innehåller:
    - Jobbtitel och plats.
    - Punktlista med arbetsuppgifter eller ansvarsområden.
  - Layouten är responsiv och fungerar på både desktop och mobila enheter.

### Karusell (Carousel)
I slutet av sidan finns en interaktiv karusell som visar länkar till andra sektioner av portfolion såsom:
- Experience
- Education
- Skills

```html
<!-- Carousel Section -->
<div class="carousel-container">
    <div class="carousel">
        <div class="carousel-item">
            <a href="experience.html">
                <img src="/images/new_experince-removebg-preview (1).png" alt="Experience Image" />
            </a>
        </div>
        
        <div class="carousel-item">
            <a href="projects.html">
                <img src="/images/Projects.png" alt="Projects" />
            </a>
        </div>
        <div class="carousel-item">
            <a href="skills.html">
                <img src="/images/skillmain-removebg-preview.png" alt="Skills" />
            </a>
        </div>
        <div class="carousel-item">
            <a href="interests.html">
                <img src="/images/interests.png" alt="Interests"/>
            </a>
        </div>
        <div class="carousel-item">
            <a href="cv.html">
                <img src="/images/Cv  .png" alt="CV Image"/>
            </a>
        </div>
    </div>
</div>
```

### JavaScript-funktionalitet
- Automatisk rörelse: Karusellen rör sig kontinuerligt åt vänster med ett jämnt intervall.
- Oändlig loop: När karusellen når slutet, startar den om från början.

## Projekt page
Denna sida visar projekten i portfolion för Shams AlSaffar, med en responsiv design som fungerar på både desktop och mobila enheter.

- **Struktur**:
  - **Header och Navigation**: Samma som på andra sidor, vilket gör det enkelt att navigera mellan sektionerna.
  - **Main content**: Innehåller en grid-layout där varje "job-box" representerar ett arbetsprojekt eller en prestation. Dessa boxar fungerar som klickbara objekt som leder användaren till detaljerad information om varje projekt.
  - **Karusell**: En interaktiv karusell som innehåller länkar till andra sidor som Experience, Education, Skills och CV, vilket gör det möjligt för användaren att snabbt hoppa mellan olika sektioner på portfolion.

### Modalfunktionalitet
För varje projekt finns en **modal** som visar detaljerad information om projektet när användaren klickar på "More Details"-knappen. Modalen är en pop-up ruta som öppnas över sidan och visar information som projektets mål, teknologier som användes, och en kort beskrivning av resultatet. Denna funktion gör att användaren kan få djupare insikt i varje projekt utan att behöva navigera bort från sidan. Efter att modalen öppnas kan användaren stänga den genom att klicka på en "stäng"-knapp eller utanför modalen för att återgå till huvudprojektet.

## Skills Section
Visar färdigheter som Java-utvecklare, inklusive en karusell för att navigera mellan olika sektioner. En enkel sida som innehåller färdigheter och en kort beskrivning för varje färdighet, där JavaScript används för att implementera detta.

### Dynamisk beskrivning av färdigheter

Denna JavaScript-kod tillåter användaren att klicka på olika färdighetsobjekt och få en beskrivning av den valda färdigheten. När användaren klickar på en färdighet visas en kort beskrivning av den, vilket gör att användaren kan få mer information om varje färdighet på ett interaktivt sätt.

#### JavaScript för att visa beskrivningar av färdigheter

```html
<script>
  const skillItems = document.querySelectorAll('.skill-item');
  const descriptionDiv = document.getElementById('description');

  // Beskrivningar av färdigheter
  document.addEventListener("DOMContentLoaded", () => {
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
</script>
```

- **JavaScript-funktionalitet**:
  - När en färdighetsobjekt klickas på, triggas visningen av en beskrivning.
  - Karusellen rör sig automatiskt med ett intervall på 1,5 sekunder och visar en ny bild varje gång.

## Education section
Visar utbildningshistorik i form av en tidslinje.

- **Struktur**:
  - **Header**: Innehåller länkar till "About Me" och "Contact Me".
  - **Main-sektion**: Visar två utbildningserfarenheter (Java Developer Program och Computer Science) i en tidslinje.

### JavaScript-funktionalitet
- Karusellen rör sig automatiskt varje 1,5 sekund.
- Oändlig loop när karusellen når slutet.

## Interest section
Visar Shams Alsaffars personliga intressen och familjemomentsbilder.

- **Funktioner**:
  - Responsiv design och smooth carousel.
  - Familjebilder som visas i en gallerivisning.
- **CSS Funktioner**:
###  Bakgrund och Animering

`body.interest-page` använder en gradient-animation (`@keyframes gradient-fade`) som skiftar bakgrundsfärgerna mjukt var tionde sekund.  
Detta skapar en levande och elegant visuell effekt med mjuka färgövergångar, vilket ger sidan ett dynamiskt och tilltalande utseende.

###  Bildanimationer

Bilderna i `.interest-image` visas med en studsande in-animation (`@keyframes bounceIn`) när sidan laddas, vilket ger ett mjukt och lekfullt första intryck.  

När användaren hovrar över en bild:

- Bilden förstoras något med en **pulse-animation** (`@keyframes pulse`)
- Samtidigt aktiveras en visuell effekt med **högre ljusstyrka** och **ökat kontrastvärde**, vilket skapar en tydlig och interaktiv känsla.



##  CV Page

En enkel struktur som visar Shams AlSaffars CV och relaterad information.

### Flerspråksstöd (Svenska & Engelska)

CV-sidan har stöd för två språk: **svenska** och **engelska**.

- Detta uppnås genom att HTML-sidan innehåller **dubbel text** – där varje sektion har både svensk och engelsk text inskriven.
- I **JavaScript**-filen i **HTML Sidan**finns kod som visar **endast ett av språken** baserat på användarens val, med engelska som **standardspråk**.
- Språkinställningen **sparas i `localStorage`** så att sidan kommer ihåg användarens val även efter att sidan laddas om.

###  Språkinställningen i JavaScript sidan

```javascript
// Funktion för att öppna och stänga språklistan
function toggleLanguageMenu() {
  const menu = document.getElementById('language-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function changeLanguage(lang) {
  const element = document.querySelectorAll('[data-lang]');
  element.forEach(element => {
    if (element.getAttribute('data-lang') === lang) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
  document.getElementById('language-menu').style.display = 'none';
  localStorage.setItem('language', lang);
}

// När sidan laddas, sätt standardspråk eller använd sparat språk
document.addEventListener("DOMContentLoaded", function () {
  const lang = localStorage.getItem('language') || 'en';
  changeLanguage(lang);
});

### Språkhantering med JavaScript i HTML sidan 
som ledar att **EN** blir standard språk på sidan 

```html
<script>
  // Funktion för att byta språk
  function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
  }

  // Funktion för att öppna och stänga språkmenyn
  function toggleLanguageMenu() {
    const menu = document.getElementById('language-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  // Sätt standard språk på sidladdning
  window.onload = () => {
    changeLanguage('en');
  };
</script>
```



