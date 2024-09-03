const date = new Date();
console.log(date);

console.log("Year",date.getFullYear());
console.log("Month",date.getMonth());
console.log("Date",date.getDate());
console.log("day of the week",date.getDay()); 
// year,monthindex,date parameters
console.log(new Date(2022,7,15).getDay());

//to string
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toLocaleDateString());

const newDate = new Date();
newDate.setDate(17);
newDate.setMonth(4);
newDate.setFullYear(2000);
console.log(newDate);

// time part
const today = new Date()

console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())

newDate.setHours(13) // 1pm
newDate.setMinutes(13) // 13 minutes
newDate.setSeconds(13) // 13 seconds

console.log(newDate)
console.log(newDate.toTimeString())
console.log(newDate.toLocaleTimeString())

// getTime function
// returns the number of milliseconds that have been elapsed since 1970

console.log(today.getTime()) // number of milliseconds since 1970 till today



console.log(new Date(1586111400000))