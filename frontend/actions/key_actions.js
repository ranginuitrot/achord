var dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  keyDown: function(key) {
    dispatcher.dispatch({
      actionType: "KEY_PRESSED",
      key: key
    });
  },
  keyUp: function(key) {
    dispatcher.dispatch({
      actionType: "KEY_RELEASED",
      key: key
    });
  },
  keysReset: function(keysArray) {
    dispatcher.dispatch({
      actionType: "KEYS_RESET",
      keysArray: keysArray
    });
  }
};
