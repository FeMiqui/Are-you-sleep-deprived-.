//days of the week
var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

//get your hours of sleep per day of the week
const getSleepHours = day => {
  day.toLowerCase(); //to make sure the input has a standard
  //days [0] is monday and so on...
  if (day === days[0]){return 8;} //monday
  else if (day === days[1]){return 8;} //tuesday
  else if (day === days[2]){return 8;} //wednesday
  else if (day === days[3]){return 8;} //thursday
  else if (day === days[4]){return 8;} //friday
  else if (day === days[5]){return 8;} //saturday
  else if (day === days[6]){return 8;} //sunday
  else{return 'That\'s not a day of the week!';}
};

//console.log(getSleepHours('tues'));
const getActualSleepHours = () =>{
  let sum=0;
  for (index = 0; index < days.length; index++) { 
    sum+=getSleepHours(days[index]);
  } 
  return sum;
};

const getIdealSleepHours = (hourPerNight) =>{
  return hourPerNight*7;//I should sleep 8 hours per night...
};

/*
Testing:
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
*/

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours){
    return console.log('You had the perfect amount of sleep! Congrats!');
  }else if (actualSleepHours < idealSleepHours){
    return console.log(`You are sleep deprived! You skipped ${(idealSleepHours - actualSleepHours)} hours of sleep!`);
  }else{
     return console.log(`You slept ${(idealSleepHours*-1 + actualSleepHours)} hours more than you should on this week`);
  }
}

calculateSleepDebt();
  
