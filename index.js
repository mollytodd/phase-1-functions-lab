// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  return Math.abs(42 - pickUpLocation);
}
distanceFromHqInBlocks(43);

// remember the math.abs is for returning positive numbers

function distanceFromHqInFeet(pickUpLocation) {
  let blocks = distanceFromHqInBlocks(pickUpLocation) * 264;
  return blocks;
}
distanceFromHqInFeet(43);

// forgot to assign blocks as a variable

function distanceTravelledInFeet(startingPoint, endingPoint) {
  let blocksTraveledInFeet = Math.abs(startingPoint - endingPoint);
  return blocksTraveledInFeet * 264;
}

distanceTravelledInFeet(43, 48);

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (0.02 * distance);
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(50, 60));
//still getting an error on the 2 cents per foot, it says expected 1056 to equal 2.56
