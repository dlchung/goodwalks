// Controls background color based on current mood/temperature.
// Toggles appropriate classes located in index.css
export function moodColor(mood) {
  var currentMood = "";
  const great = "great-weather";
  const hot = "hot-weather";
  const cold = "cold-weather";

  switch(mood) {
    case 'great':
      currentMood = great;
      break;
    case 'hot':
      currentMood = hot;
      break;
    case 'cold':
      currentMood = cold;
      break;
    default:
      currentMood = great;
      break;
  }

  // Save mood in localStorage so we can show the correct mood between views
  localStorage.setItem('mood', JSON.stringify(mood));

  document.body.classList.remove(great, hot, cold);
  document.body.classList.add(currentMood);
}
