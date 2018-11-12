function dwarfRollCall(dwarves) {
 var dwarvesNum = [];
  
  for (let i=0; i < dwarves.length; i++) {
  dwarvesNum.push([i+1] + '. ' + dwarves[i] + ' ') }
  
  return dwarvesNum.join('');
}

function summonCaptainPlanet(planeteerCalls) {
  var Elements = [];
  
  for(let i=0; i < planeteerCalls.length; i++) {
    Elements.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return Elements;
}

function longPlaneteerCalls(words) {
  if (words.length < 4) {
    return false;
  } else {
    return true;
  }
}

function findTheCheese (foods) {
var milkProtiens = ["gouda", "camembert", "cheddar"];
var ingredients = ["garlic", "rosemary", "bread"];
for (let i = 0; i < foods.length; i++) {
  if (foods[i] == "gouda" || foods[i] == "cheddar" || foods[i] == "camembert")
  return "cheddar";}
{
return "no cheese!";
}
}