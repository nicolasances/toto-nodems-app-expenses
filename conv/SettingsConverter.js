var config = require('../config');
var moment = require('moment-timezone');

/**
 * Updates the settings
 */
exports.update = function(data) {

  return new Promise((s, f) => {

    console.log(data);

    let upd = {};

    if (data.showDemo) upd.showDemo = data.showDemo;

    s({$set: upd});

  });

}
