function scuberGreetingForFeet(rideDist){
  if (rideDist > 2500) {
    return (`No can do.`)
  } 
    if (rideDist <= 400) {
      return (`This one is on me!`);
    } else {
        if ((rideDist > 400) * (rideDist < 2000) === 1) {
          return (`That will be twenty bucks.`);
        } else {
          if (rideDist > 2000) {
            return (`I will gladly take your thirty bucks.`);
          }
        }
      }
  }

function ternaryCheckCity(rideDestin){
  let finalDec = `DOES NOT COMPUTE!!!`;
  rideDestin === `NYC` ? (finalDec = `Ok, sounds good.`) : (finalDec = `No go.`);
  return (finalDec);
} 

function switchOnCharmFromTip(tipAmt){
  switch (tipAmt) {
    case `generous`:
      return (`Thank you so much.`);
    case `not as generous`:
      return (`Thank you.`);
    case `thanks for everything`:
      return ('Bye.');
  }
} 