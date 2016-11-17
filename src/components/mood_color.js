export default function moodColor(e) {
  var currentMood = "";
  const great = "great-weather";
  const hot = "hot-weather";
  const cold = "cold-weather";

  switch(e) {
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

  
}
