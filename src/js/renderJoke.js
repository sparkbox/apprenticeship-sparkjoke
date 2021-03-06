// hard coded joke object
const hardcodedJoke = {
  setup: 'Why did the chicken cross the road?',
  punchline: 'To get to the other side.',
};

// dynamically renders joke to DOM
// uses hardcoded joke as default parameter
export const renderJoke = (jokeObject = hardcodedJoke) => {
  // get DOM elements
  const setupDiv = document.getElementById('setup');
  const punchlineDiv = document.getElementById('punchline');

  // set new text for Divs
  setupDiv.innerText = jokeObject.setup;
  punchlineDiv.innerText = jokeObject.punchline;
};
