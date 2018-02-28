
const _ = require('lodash');


module.exports = function(bp) {

  bp.middlewares.load();

  bp.hear(/start|hi|بازگشت/i, (event, next) => {
    bp.twitter.sendText(event.user.screen_name,event.text);
  });
  
};
