const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
      navToggle.focus();
    }
  });

  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
      }
    });
  });
}

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');
    
    question.classList.toggle('active');
    question.setAttribute('aria-expanded', !isActive);
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = "0 1.25rem";
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.padding = "1.25rem";
    }
  });
  
  question.setAttribute('aria-expanded', 'false');
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('form-status');

  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
    }
  }

  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
      errorElement.textContent = '';
      input.classList.remove('invalid');
      input.setAttribute('aria-invalid', 'false');
    }
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (nameInput) clearError(nameInput);
    if (emailInput) clearError(emailInput);
    if (messageInput) clearError(messageInput);
    if (formStatus) formStatus.style.display = 'none';

    if (nameInput && nameInput.value.trim() === '') {
      showError(nameInput, 'Name is required.');
      isValid = false;
    }

    if (emailInput) {
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      }
    }

    if (messageInput && messageInput.value.trim() === '') {
      showError(messageInput, 'Message is required.');
      isValid = false;
    }

    if (formStatus) {
      if (isValid) {
        formStatus.textContent = 'Thank you! Your message has been sent. (Demo - no actual submission)';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Please correct the errors above before submitting.';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
      }
    }
  });
}

const games = [
  {
    id: 'squeel',
    title: 'Squeel',
    imageSrc: 'images/game1.png',
    imageAlt: 'A stylized low-poly pig in a mechanical slaughterhouse.',
    description: `This little piggy is running for his life! In this thrilling roguelike, you must navigate the treacherous, procedurally generated corridors of a slaughterhouse. No two escape attempts are ever the same. Outsmart menacing butchers, dodge deadly traps, and squeal your way to freedom in a desperate dash for survival.`
  },
  {
    id: 'echelon',
    title: 'Echelon',
    imageSrc: 'images/game2.png',
    imageAlt: 'A PS1-style low-poly skyscraper against a pixelated sky.',
    description: `Lock and load. The only way is up. In this fast-paced, arcade-style FPS, your mission is to ascend a monolithic skyscraper floor by glorious floor. Battle your way through waves of elite enforcers, with each level cranking up the difficulty and the firepower. But this is more than just a building—it's the headquarters of a sinister secret society, and the closer you get to the penthouse, the deeper you get into the truth they'd kill to protect.`
  },
  {
    id: 'crime',
    title: 'The Perfect Crime',
    imageSrc: 'images/game3.png',
    imageAlt: 'Two low-poly figures in a dark, PS1-style interrogation room.',
    description: `The perfect crime is a work of art, and the canvas must be spotless. This is a realistic, forensic-focused simulation where the goal is not the act itself, but the flawless execution of its cover-up. Meticulously plan every detail, from the method and location to the disposal of evidence. Once the deed is done, you must contend with modern police procedure, navigate tense interrogations, and erase every trace of your existence from the scene. This is not a game of action, but a battle of intellect against a system designed to find you.`
  }
];

const galleryContainer = document.getElementById('game-gallery');
const prevButton = document.getElementById('prev-game-btn');
const nextButton = document.getElementById('next-game-btn');
const statusDisplay = document.getElementById('gallery-status');

if (galleryContainer && prevButton && nextButton && statusDisplay) {
  let currentGameIndex = 0;

  function displayGame(index) {
    const game = games[index];

    galleryContainer.style.opacity = 0;

    setTimeout(() => {
      galleryContainer.innerHTML = `
        <div class="game-entry" role="group" aria-labelledby="${game.id}-heading">
          <div class="game-description">
            <h2 id="${game.id}-heading">${game.title}</h2>
            <p>${game.description}</p>
          </div>
          <div class="game-image-container">
            <img class="rounded-corners" src="${game.imageSrc}" alt="${game.imageAlt}" loading="lazy">
          </div>
        </div>
      `;

      statusDisplay.textContent = `Game ${index + 1} of ${games.length}`;
      galleryContainer.style.opacity = 1;
    }, 400);
  }

  nextButton.addEventListener('click', () => {
    currentGameIndex = (currentGameIndex + 1) % games.length;
    displayGame(currentGameIndex);
  });

  prevButton.addEventListener('click', () => {
    currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
    displayGame(currentGameIndex);
  });

  displayGame(currentGameIndex);
}
