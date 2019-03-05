(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Circle = _interopRequireDefault(require("./objects/Circle"));

var _ColorRGB = _interopRequireDefault(require("./objects/params/ColorRGB"));

var _timers = require("timers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

class Draw {
  constructor(context, height, width) {
    this.context = context;
    this.height = height;
    this.width = width;
  }

  ClearMap() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  delay(ms) {
    return new Promise(function (resolve) {
      (0, _timers.setTimeout)(resolve, ms);
    });
  }

  asyncAwait(callback) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.delay(10);
      yield callback();
    });
  }

  DrawObjects(x, y) {
    return __awaiter(this, void 0, void 0, function* () {
      let circle = new _Circle.default(x, y, 50, new _ColorRGB.default(1, 50, 50), this.context);

      for (let i = 1; i <= 10; i += 1) {
        const that = this;
        yield this.asyncAwait(() => {
          circle.X += i * 10;
          circle.Y += i * 10;
          circle.D += i;
          circle.Color = new _ColorRGB.default(circle.Color.Red + i + 10, circle.Color.Green + i, circle.Color.Blue + i);
          circle.Draw();
          circle.History.push(_Circle.default.createCopy(circle));
        });
      }

      circle.History.forEach(x => {
        console.log(x.X);
        console.log(x.Color);
      });
      return circle;
    });
  }

}

var _default = Draw;
exports.default = _default;

},{"./objects/Circle":5,"./objects/params/ColorRGB":7,"timers":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Iterator {
  constructor() {
    this.currentPos = 0;
    this.Collection = new Array();
  }

  Iterator() {}

  next() {
    if (this.currentPos < this.Collection.length) {
      return this.Collection[this.currentPos++];
    } else {
      this.currentPos = 0;
    }
  }

  push(item) {
    this.Collection.push(item);
  }

  pop() {
    this.Collection.pop();
  }

  hasMore() {
    if (this.currentPos < this.Collection.length) {
      return true;
    } else {
      return false;
    }
  }

}

var _default = Iterator;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Draw = _interopRequireDefault(require("./Draw"));

var _Iterator = _interopRequireDefault(require("./Iterator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

class Main {
  scene() {
    return __awaiter(this, void 0, void 0, function* () {
      this.DrawContext = new _Draw.default(this.Context, this.Height, this.Width);
      let iterator = new _Iterator.default();
      iterator.push((yield this.DrawContext.DrawObjects(100, 100)));
      iterator.push((yield this.DrawContext.DrawObjects(500, 100)));
    });
  }

  constructor(context, width, height) {
    this.Context = context;
    this.Width = width;
    this.Height = height;
  }

}

var _default = Main;
exports.default = _default;

},{"./Draw":1,"./Iterator":2}],4:[function(require,module,exports){
"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

window.onload = function () {
  return __awaiter(this, void 0, void 0, function* () {
    var x = document.getElementById('myCanvas');
    x.setAttribute('width', String(window.screen.width));
    x.setAttribute('height', String(window.screen.height));
    let main = new _index.default(x.getContext("2d"), window.screen.width, window.screen.height);
    yield main.scene();
  });
};

},{"./index":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ColorAdapter = _interopRequireDefault(require("./params/ColorAdapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Circle {
  constructor(X, Y, D, Color, Context) {
    this.History = [this];
    this.X = X;
    this.Y = Y;
    this.D = D;
    this.Color = Color;
    this.Adapter = new _ColorAdapter.default(this.Color);
    this.Context = Context;
  }

  getName() {
    return "Circle";
  }

  static createCopy(circle) {
    let copy = new Circle(circle.X, circle.Y, circle.D, circle.Color, circle.Context);
    return copy;
  }

  getSnapshot(version) {
    if (this.History.length > version) {
      return this.History[version];
    } else {
      return this;
    }
  }

  Draw() {
    this.Context.beginPath();
    this.Context.arc(this.X, this.Y, this.D, 0, 2 * Math.PI);
    this.Context.stroke();
    this.Context.fillStyle = new _ColorAdapter.default(this.Color).Hex;
    this.Context.fill();
  }

}

var _default = Circle;
exports.default = _default;

},{"./params/ColorAdapter":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ColorAdapter {
  convertFromHex(colorObject) {
    this.Hex = colorObject.Hex;

    if (colorObject.Hex.length > 3) {
      let tempRed = colorObject[0] + colorObject[1];
      let tempGreen = colorObject[2] + colorObject[3];
      let tempBlue = colorObject[4] + colorObject[5];
      this.Red = parseInt(tempRed);
      this.Green = parseInt(tempGreen);
      this.Blue = parseInt(tempBlue);
    } else {
      let tempRed = colorObject[0];
      let tempGreen = colorObject[1];
      let tempBlue = colorObject[2];
      this.Red = parseInt(tempRed);
      this.Green = parseInt(tempGreen);
      this.Blue = parseInt(tempBlue);
    }
  }

  convertFromRGB(colorObject) {
    this.Red = colorObject.Red;
    this.Green = colorObject.Green;
    this.Blue = colorObject.Blue;
    this.Hex = '#' + colorObject.Red.toString(16) + colorObject.Green.toString(16) + colorObject.Blue.toString(16);
  }

  constructor(colorObject) {
    if (colorObject.Hex) {
      this.convertFromHex(colorObject);
    } else {
      this.convertFromRGB(colorObject);
    }
  }

}

var _default = ColorAdapter;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ColorRGB {
  constructor(r, g, b) {
    this.Red = r;
    this.Green = g;
    this.Blue = b;
  }

}

var _default = ColorRGB;
exports.default = _default;

},{}],8:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],9:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":8,"timers":9}]},{},[4]);
