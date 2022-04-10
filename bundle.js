(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // views/newsView.js
  var require_newsView = __commonJS({
    "views/newsView.js"(exports, module) {
      var NewsFeed2 = class {
      };
      module.exports = NewsFeed2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsAPI2 = class {
      };
      module.exports = NewsAPI2;
    }
  });

  // index.js
  var NewsFeed = require_newsView();
  var NewsAPI = require_newsApi();
  var feed = new NewsFeed();
  var api = new NewsAPI();
})();
