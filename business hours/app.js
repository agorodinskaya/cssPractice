let daysOfWeekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let year = 20;
// 1st step
function businessHours(hourNumber, day) {
    if (hourNumber <= 18 && hourNumber >= 9) {
        return true
    } return false
}
// 2nd step

function getDayNumber(yearDayNumber, janFirstDayNumber = 3) {
    let dayOfWeek;
    if (yearDayNumber > 0 && yearDayNumber <= 366) {
        dayOfWeek = ((yearDayNumber + janFirstDayNumber - 1)) % 7;
        // console.log(dayOfWeek);
        // console.log(daysOfWeekArray[dayOfWeek]);

        return daysOfWeekArray[dayOfWeek];
    } return alert('wrong date')
}
//3rd step
function checkOpeningHours(yearDayNumber, hourNumber) {
    if (getDayNumber(yearDayNumber) !== daysOfWeekArray[0] && getDayNumber(yearDayNumber) !== daysOfWeekArray[6] && businessHours(hourNumber)) {
        return true + ' the shop is open'
    } else return false + ' we are closed, for more info read the conditions in the formulas above'
}


// console.log(businessHours(9))
// console.log(getDayNumber(270))
console.log(checkOpeningHours(182, 9))
