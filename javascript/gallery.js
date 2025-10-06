// Definition of all games
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

// Select DOM elements to interact with
const galleryContainer = document.getElementById('game-gallery');
const prevButton = document.getElementById('prev-game-btn');
const nextButton = document.getElementById('next-game-btn');
const statusDisplay = document.getElementById('gallery-status');

// A variable to keep track of the currently displayed game.
let currentGameIndex = 0;

// Create a function to display a game based on its index.
function displayGame(index) {
  const game = games[index];

  // A fade-out effect for a smooth transition.
  galleryContainer.style.opacity = 0;

  setTimeout(() => {
    // Build the HTML for the current game.
    // Takes games from array and displays them in the gallery container.
    galleryContainer.innerHTML = `
      <div class="game-entry" role="group" aria-labelledby="${game.id}-heading">
        <div class="game-description">
          <h2 id="${game.id}-heading">${game.title}</h2>
          <p>${game.description}</p>
        </div>
        <div class="game-image-container">
          <img class="responsive-img rounded-corners" src="${game.imageSrc}" alt="${game.imageAlt}">
        </div>
      </div>
    `;

    // Update the status display (e.g., "Game 1 of 3").
    statusDisplay.textContent = `Game ${index + 1} of ${games.length}`;

    // Fade the new content back in.
    galleryContainer.style.opacity = 1;

  }, 400); // This delay should match the CSS transition time.
}

// Add event listeners to the buttons.
nextButton.addEventListener('click', () => {
  // Move to the next index, looping back to 0 if at the end.
  currentGameIndex = (currentGameIndex + 1) % games.length;
  displayGame(currentGameIndex);
});

prevButton.addEventListener('click', () => {
  // Move to the previous index, looping to the end if at the beginning.
  currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
  displayGame(currentGameIndex);
});

// Display the first game when the page loads.
displayGame(currentGameIndex);