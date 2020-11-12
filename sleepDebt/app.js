const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 6;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 7;
      break;
    case 'Thursday':
      return 6;
      break;
    case 'Friday':
      return 7;
      break;
    case 'Saturday':
      return 5;
      break;
    case 'Sunday':
      return 6;
      break;
  }
}

// console.log(getSleepHours('Monday'))

const getActualSleepHours = () => {
  const daysOfWeek = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  console.log(getSleepHours(daysOfWeek[0]))

 let sumOfDebt = getSleepHours(daysOfWeek[0]) 
 + getSleepHours(daysOfWeek[1]) 
 + getSleepHours(daysOfWeek[2]) 
 + getSleepHours(daysOfWeek[3]) 
 + getSleepHours(daysOfWeek[4]) 
 + getSleepHours(daysOfWeek[5]) 
 + getSleepHours(daysOfWeek[6]) 

 return sumOfDebt;
}

console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  idealHours = 7.5;
  return idealHours *7;
}

console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours  = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('Good job!')
  } else if (actualSleepHours > idealSleepHours){
    console.log('You are sleeping more than needed')
  } else {
    console.log(`Get some sleep urgently, you need to sleep ${-(actualSleepHours - idealSleepHours)} hours more`)
  }
}
calculateSleepDebt()

