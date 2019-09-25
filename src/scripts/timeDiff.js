const moment = require("moment");

const now = moment();
const then = moment("20190421 05:43", "YYYYMMDD HH:mm");

console.log(then.diff(now));
