var jan = {
  month: 1,
  title: "January",
  first: 3,
  days: 31,
  holidays: [1, 2, 3],
  workings: [4],
  weekends: [10, 11, 17, 18, 24, 25, 31]
};
var feb = {
  month: 2,
  title: "February",
  first: 6,
  days: 28,
  holidays: [18, 19, 20, 21, 22, 23, 24],
  workings: [15, 28],
  weekends: [1, 7, 8, 14]
};
var mar = {
  month: 3,
  title: "March",
  first: 6,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [1, 7, 8, 14, 15, 21, 22, 28, 29]
};
var apr = {
  month: 4,
  title: "April",
  first: 2,
  days: 30,
  holidays: [4, 5, 6],
  workings: [],
  weekends: [11, 12, 18, 19, 25, 26]
};
var may = {
  month: 5,
  title: "May",
  first: 4,
  days: 31,
  holidays: [1, 2, 3],
  workings: [],
  weekends: [9, 10, 16, 17, 23, 24, 30, 31]
};
var jun = {
  month: 6,
  title: "June",
  first: 0,
  days: 30,
  holidays: [20, 21, 22],
  workings: [],
  weekends: [6, 7, 13, 14, 27, 28]
};
var jul = {
  month: 7,
  title: "July",
  first: 2,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [4, 5, 11, 12, 18, 19, 25, 26]
};
var aug = {
  month: 8,
  title: "August",
  first: 5,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30]
};
var sep = {
  month: 9,
  title: "September",
  first: 1,
  days: 30,
  holidays: [26, 27],
  workings: [],
  weekends: [5, 6, 12, 13, 19, 20]
};
var oct = {
  month: 10,
  title: "October",
  first: 3,
  days: 31,
  holidays: [1, 2, 3, 4, 5, 6, 7],
  workings: [10],
  weekends: [11, 17, 18, 24, 25, 31]
};
var nov = {
  month: 11,
  title: "November",
  first: 6,
  days: 30,
  holidays: [],
  workings: [],
  weekends: [1, 7, 8, 14, 15, 21, 22, 28, 29]
};
var dec = {
  month: 12,
  title: "December",
  first: 1,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [5, 6, 12, 13, 19, 20, 26, 27]
};


module.exports = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
