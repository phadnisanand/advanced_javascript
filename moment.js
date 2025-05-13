const moment = require('moment');
const dateString = '2025-05-13';
const parsedDate = moment(dateString);
console.log(parsedDate.format('MMMM D, YYYY'));
console.log(parsedDate.format('YYYY-MM-DD HH:mm:ss'));

// add 7 days 
const futureDate = moment().add(7, 'days');
console.log(futureDate.format('YYYY-MM-DD'));

// diff between two dates.
const date1 = moment('2025-05-01');
const date2 = moment('2025-05-13');
const diffInDays = date2.diff(date1, 'days');
console.log(diffInDays);