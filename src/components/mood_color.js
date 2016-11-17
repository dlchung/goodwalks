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
      currentMood = "";
      break;
  }

  localStorage.setItem('mood', JSON.stringify(mood));
  document.body.classList.remove(great, hot, cold);
  document.body.classList.add(currentMood);
}
