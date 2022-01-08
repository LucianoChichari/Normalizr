const util = require("util");

module.exports = (data) => {
  console.log(util.inspect(data, false, 12, true));
};
