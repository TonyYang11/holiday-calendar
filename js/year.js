var jan = {
  month: 1,
  title: "January",
  first: 4,
  days: 31,
  holidays: [1, 2, 3],
  weekends: [9, 10, 16, 17, 23, 24, 30, 31]
};
var feb = {
  month: 2,
  title: "February",
  first: 0,
  days: 29,
  holidays: [7, 8, 9, 10, 11, 12, 13],
  workings: [6, 14],
  weekends: [20, 21, 27, 28]
};
var mar = {
  month: 3,
  title: "March",
  first: 1,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [5, 6, 12, 13, 19, 20, 26, 27]
};
var apr = {
  month: 4,
  title: "April",
  first: 4,
  days: 30,
  holidays: [2, 3, 4],
  workings: [],
  weekends: [9, 10, 16, 17, 23, 24, 30]
};
var may = {
  month: 5,
  title: "May",
  first: 6,
  days: 31,
  holidays: [1, 2],
  workings: [],
  weekends: [7, 8, 14, 15, 21, 22, 28, 29]
};
var jun = {
  month: 6,
  title: "June",
  first: 2,
  days: 30,
  holidays: [9, 10, 11],
  workings: [12],
  weekends: [4, 5, 18, 19, 25, 26]
};
var jul = {
  month: 7,
  title: "July",
  first: 4,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [2, 3, 9, 10, 16, 17, 23, 24, 30, 31]
};
var aug = {
  month: 8,
  title: "August",
  first: 0,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [6, 7, 13, 14, 20, 21, 27, 28]
};
var sep = {
  month: 9,
  title: "September",
  first: 3,
  days: 30,
  holidays: [15, 16, 17],
  workings: [18],
  weekends: [3, 4, 10, 11, 24, 25]
};
var oct = {
  month: 10,
  title: "October",
  first: 5,
  days: 31,
  holidays: [1, 2, 3, 4, 5, 6, 7],
  workings: [8, 9],
  weekends: [15, 16, 22, 23, 29, 30]
};
var nov = {
  month: 11,
  title: "November",
  first: 1,
  days: 30,
  holidays: [],
  workings: [],
  weekends: [5, 6, 12, 13, 19, 20, 26, 27]
};
var dec = {
  month: 12,
  title: "December",
  first: 3,
  days: 31,
  holidays: [],
  workings: [],
  weekends: [3, 4, 10, 11, 17, 18, 24, 25, 31]
};


module.exports = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
