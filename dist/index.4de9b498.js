// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"56Vnr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4pp4s":[function(require,module,exports) {
var _countDownJs = require("./count-down.js");
var _weatherJs = require("./weather.js");
(0, _countDownJs.setupCounter)();
(0, _weatherJs.setupWeather)() // TODO add page loader. wait for the entire page to load
;

},{"./count-down.js":"fMP8Q","./weather.js":"fWRBR"}],"fMP8Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupCounter", ()=>setupCounter);
const expiration = new Date(2023, 2, 26, 1, 48);
const days = document.querySelector(".count-down__days");
const hours = document.querySelector(".count-down__hours");
const minutes = document.querySelector(".count-down__minutes");
const seconds = document.querySelector(".count-down__seconds");
let intervalID;
function setupCounter() {
    intervalID = setInterval(count, 1000);
}
function count() {
    let daysPart = 0;
    let hoursPart = 0;
    let minutesPart = 0;
    let secondsPart = 0;
    if (getRemainingDays() > 0) {
        daysPart = Math.floor(getRemainingDays());
        const extraHoursOFaDay = (getRemainingDays() - Math.floor(getRemainingDays())) * 24;
        hoursPart = Math.floor(extraHoursOFaDay);
        const extraMinutesOFanHour = (extraHoursOFaDay - Math.floor(extraHoursOFaDay)) * 60;
        minutesPart = Math.floor(extraMinutesOFanHour);
        const extraSecondsOFaMinute = (extraMinutesOFanHour - Math.floor(extraMinutesOFanHour)) * 60;
        secondsPart = Math.floor(extraSecondsOFaMinute);
    } else clearInterval(intervalID);
    renderCounter(daysPart, hoursPart, minutesPart, secondsPart);
}
function renderCounter(d, h, m, s) {
    days.innerText = zeroForOneDigit(d);
    hours.innerText = zeroForOneDigit(h);
    minutes.innerText = zeroForOneDigit(m);
    seconds.innerText = zeroForOneDigit(s);
}
function getRemainingDays() {
    const remainingMilliseconds = expiration - new Date();
    return remainingMilliseconds / 86400000;
}
function zeroForOneDigit(number) {
    return ("0" + number).slice(-2);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fWRBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupWeather", ()=>setupWeather);
var _lottiePlayerJs = require("../node_modules/@lottiefiles/lottie-player/dist/lottie-player.js");
const weatherSection = document.querySelector(".weather");
const weatherCircle = document.querySelector("[data-weather]");
const weatherToday = document.querySelector("[data-weather='today'] .weather__lottie");
const API_KEY = "f0ec30e01082c2ba26695eb9c01c8b58";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Babol&appid=${API_KEY}`;
function setupWeather() {
    getWeather().then((result)=>{
        if (result.icon) renderWeather(result);
    });
}
async function getWeather() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.log("Response wasn't ok");
            return {};
        }
        const data = await response.json();
        console.log(data);
        const icon = data.weather[0].icon;
        const condition = data.weather[0].main;
        // const icon = '03n'
        // const condition = 'Clear'
        const day = icon.slice(-1) === "d";
        return {
            icon: icon,
            condition: condition,
            day: day
        };
    } catch (err) {
        console.error("Yo, some errors happened, err.message:", err.message);
        return {};
    }
}
function renderWeather({ icon , condition , day  }) {
    console.log(icon, condition, day);
    icon = normalizeIconName(icon);
    if (icon == null) return;
    weatherToday.load(`lottiefiles/${icon}.json`);
    weatherSection.classList.add("weather--show");
    if (day && condition === "Clouds") document.body.classList.add("body--cloudy");
    else if (!day) {
        document.body.classList.add("body--night");
        weatherCircle.classList.add("weather__circle--night");
    }
}
function normalizeIconName(icon) {
    const nightsLikeDays = [
        "03n",
        "04n",
        "09n",
        "10n",
        "11n",
        "13n",
        "50n"
    ];
    const others = [
        "01d",
        "02d",
        "03d",
        "04d",
        "09d",
        "10d",
        "11d",
        "13d",
        "50d",
        "01n",
        "02n"
    ];
    if (nightsLikeDays.includes(icon)) icon = icon.slice(0, 2) + "d";
    else if (!others.includes(icon)) // to not show any weather stuff if icon names has changed
    icon = null;
    return icon;
} // TODO add three days weather prediction

},{"../node_modules/@lottiefiles/lottie-player/dist/lottie-player.js":"bzmSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzmSe":[function(require,module,exports) {
var global = arguments[3];
!function(t, e) {
    e(exports);
}(this, function(exports) {
    "use strict";
    function _asyncIterator(t) {
        var e, r1, i, s = 2;
        for("undefined" != typeof Symbol && (r1 = Symbol.asyncIterator, i = Symbol.iterator); s--;){
            if (r1 && null != (e = t[r1])) return e.call(t);
            if (i && null != (e = t[i])) return new AsyncFromSyncIterator(e.call(t));
            r1 = "@@asyncIterator", i = "@@iterator";
        }
        throw new TypeError("Object is not async iterable");
    }
    function AsyncFromSyncIterator(t) {
        function e(t) {
            if (Object(t) !== t) return Promise.reject(new TypeError(t + " is not an object."));
            var e = t.done;
            return Promise.resolve(t.value).then(function(t) {
                return {
                    value: t,
                    done: e
                };
            });
        }
        return AsyncFromSyncIterator = function(t) {
            this.s = t, this.n = t.next;
        }, AsyncFromSyncIterator.prototype = {
            s: null,
            n: null,
            next: function() {
                return e(this.n.apply(this.s, arguments));
            },
            return: function(t) {
                var r1 = this.s.return;
                return void 0 === r1 ? Promise.resolve({
                    value: t,
                    done: !0
                }) : e(r1.apply(this.s, arguments));
            },
            throw: function(t) {
                var r1 = this.s.return;
                return void 0 === r1 ? Promise.reject(t) : e(r1.apply(this.s, arguments));
            }
        }, new AsyncFromSyncIterator(t);
    }
    var REACT_ELEMENT_TYPE;
    function _jsx(t, e, r1, i) {
        REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var s = t && t.defaultProps, a = arguments.length - 3;
        if (e || 0 === a || (e = {
            children: void 0
        }), 1 === a) e.children = i;
        else if (a > 1) {
            for(var n = new Array(a), o = 0; o < a; o++)n[o] = arguments[o + 3];
            e.children = n;
        }
        if (e && s) for(var h in s)void 0 === e[h] && (e[h] = s[h]);
        else e || (e = s || {});
        return {
            $$typeof: REACT_ELEMENT_TYPE,
            type: t,
            key: void 0 === r1 ? null : "" + r1,
            ref: null,
            props: e,
            _owner: null
        };
    }
    function ownKeys(t, e) {
        var r1 = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), r1.push.apply(r1, i);
        }
        return r1;
    }
    function _objectSpread2(t) {
        for(var e = 1; e < arguments.length; e++){
            var r1 = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ownKeys(Object(r1), !0).forEach(function(e) {
                _defineProperty(t, e, r1[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r1)) : ownKeys(Object(r1)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r1, e));
            });
        }
        return t;
    }
    function _typeof(t) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, _typeof(t);
    }
    function _wrapRegExp() {
        _wrapRegExp = function(t, e) {
            return new r1(t, void 0, e);
        };
        var t = RegExp.prototype, e = new WeakMap;
        function r1(t, i, s) {
            var a = new RegExp(t, i);
            return e.set(a, s || e.get(t)), _setPrototypeOf(a, r1.prototype);
        }
        function i(t, r1) {
            var i = e.get(r1);
            return Object.keys(i).reduce(function(e, r1) {
                return e[r1] = t[i[r1]], e;
            }, Object.create(null));
        }
        return _inherits(r1, RegExp), r1.prototype.exec = function(e) {
            var r1 = t.exec.call(this, e);
            return r1 && (r1.groups = i(r1, this)), r1;
        }, r1.prototype[Symbol.replace] = function(r1, s) {
            if ("string" == typeof s) {
                var a = e.get(this);
                return t[Symbol.replace].call(this, r1, s.replace(/\$<([^>]+)>/g, function(t, e) {
                    return "$" + a[e];
                }));
            }
            if ("function" == typeof s) {
                var n = this;
                return t[Symbol.replace].call(this, r1, function() {
                    var t = arguments;
                    return "object" != typeof t[t.length - 1] && (t = [].slice.call(t)).push(i(t, n)), s.apply(this, t);
                });
            }
            return t[Symbol.replace].call(this, r1, s);
        }, _wrapRegExp.apply(this, arguments);
    }
    function _AwaitValue(t) {
        this.wrapped = t;
    }
    function _AsyncGenerator(t) {
        var e, r1;
        function i(e, r1) {
            try {
                var a = t[e](r1), n = a.value, o = n instanceof _AwaitValue;
                Promise.resolve(o ? n.wrapped : n).then(function(t) {
                    o ? i("return" === e ? "return" : "next", t) : s(a.done ? "return" : "normal", t);
                }, function(t) {
                    i("throw", t);
                });
            } catch (t) {
                s("throw", t);
            }
        }
        function s(t, s) {
            switch(t){
                case "return":
                    e.resolve({
                        value: s,
                        done: !0
                    });
                    break;
                case "throw":
                    e.reject(s);
                    break;
                default:
                    e.resolve({
                        value: s,
                        done: !1
                    });
            }
            (e = e.next) ? i(e.key, e.arg) : r1 = null;
        }
        this._invoke = function(t, s) {
            return new Promise(function(a, n) {
                var o = {
                    key: t,
                    arg: s,
                    resolve: a,
                    reject: n,
                    next: null
                };
                r1 ? r1 = r1.next = o : (e = r1 = o, i(t, s));
            });
        }, "function" != typeof t.return && (this.return = void 0);
    }
    function _wrapAsyncGenerator(t) {
        return function() {
            return new _AsyncGenerator(t.apply(this, arguments));
        };
    }
    function _awaitAsyncGenerator(t) {
        return new _AwaitValue(t);
    }
    function _asyncGeneratorDelegate(t, e) {
        var r1 = {}, i = !1;
        function s(r1, s) {
            return i = !0, s = new Promise(function(e) {
                e(t[r1](s));
            }), {
                done: !1,
                value: e(s)
            };
        }
        return r1["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
            return this;
        }, r1.next = function(t) {
            return i ? (i = !1, t) : s("next", t);
        }, "function" == typeof t.throw && (r1.throw = function(t) {
            if (i) throw i = !1, t;
            return s("throw", t);
        }), "function" == typeof t.return && (r1.return = function(t) {
            return i ? (i = !1, t) : s("return", t);
        }), r1;
    }
    function asyncGeneratorStep(t, e, r1, i, s, a, n) {
        try {
            var o = t[a](n), h = o.value;
        } catch (t) {
            return void r1(t);
        }
        o.done ? e(h) : Promise.resolve(h).then(i, s);
    }
    function _asyncToGenerator(t) {
        return function() {
            var e = this, r1 = arguments;
            return new Promise(function(i, s) {
                var a = t.apply(e, r1);
                function n(t) {
                    asyncGeneratorStep(a, i, s, n, o, "next", t);
                }
                function o(t) {
                    asyncGeneratorStep(a, i, s, n, o, "throw", t);
                }
                n(void 0);
            });
        };
    }
    function _classCallCheck(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(t, e) {
        for(var r1 = 0; r1 < e.length; r1++){
            var i = e[r1];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function _createClass(t, e, r1) {
        return e && _defineProperties(t.prototype, e), r1 && _defineProperties(t, r1), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t;
    }
    function _defineEnumerableProperties(t, e) {
        for(var r1 in e)(a = e[r1]).configurable = a.enumerable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, r1, a);
        if (Object.getOwnPropertySymbols) for(var i = Object.getOwnPropertySymbols(e), s = 0; s < i.length; s++){
            var a, n = i[s];
            (a = e[n]).configurable = a.enumerable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, n, a);
        }
        return t;
    }
    function _defaults(t, e) {
        for(var r1 = Object.getOwnPropertyNames(e), i = 0; i < r1.length; i++){
            var s = r1[i], a = Object.getOwnPropertyDescriptor(e, s);
            a && a.configurable && void 0 === t[s] && Object.defineProperty(t, s, a);
        }
        return t;
    }
    function _defineProperty(t, e, r1) {
        return e in t ? Object.defineProperty(t, e, {
            value: r1,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r1, t;
    }
    function _extends() {
        return _extends = Object.assign || function(t) {
            for(var e = 1; e < arguments.length; e++){
                var r1 = arguments[e];
                for(var i in r1)Object.prototype.hasOwnProperty.call(r1, i) && (t[i] = r1[i]);
            }
            return t;
        }, _extends.apply(this, arguments);
    }
    function _objectSpread(t) {
        for(var e = 1; e < arguments.length; e++){
            var r1 = null != arguments[e] ? Object(arguments[e]) : {}, i = Object.keys(r1);
            "function" == typeof Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(r1).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r1, t).enumerable;
            })), i.forEach(function(e) {
                _defineProperty(t, e, r1[e]);
            });
        }
        return t;
    }
    function _inherits(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && _setPrototypeOf(t, e);
    }
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, _setPrototypeOf(t, e);
    }
    function _getPrototypeOf(t) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, _getPrototypeOf(t);
    }
    function _setPrototypeOf(t, e) {
        return _setPrototypeOf = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        }, _setPrototypeOf(t, e);
    }
    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function _construct(t, e, r1) {
        return _construct = _isNativeReflectConstruct() ? Reflect.construct : function(t, e, r1) {
            var i = [
                null
            ];
            i.push.apply(i, e);
            var s = new (Function.bind.apply(t, i));
            return r1 && _setPrototypeOf(s, r1.prototype), s;
        }, _construct.apply(null, arguments);
    }
    function _isNativeFunction(t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    }
    function _wrapNativeSuper(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return _wrapNativeSuper = function(t) {
            if (null === t || !_isNativeFunction(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r1);
            }
            function r1() {
                return _construct(t, arguments, _getPrototypeOf(this).constructor);
            }
            return r1.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r1,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), _setPrototypeOf(r1, t);
        }, _wrapNativeSuper(t);
    }
    function _instanceof(t, e) {
        return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
    }
    function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function _getRequireWildcardCache(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap, r1 = new WeakMap;
        return (_getRequireWildcardCache = function(t) {
            return t ? r1 : e;
        })(t);
    }
    function _interopRequireWildcard(t, e) {
        if (!e && t && t.__esModule) return t;
        if (null === t || "object" != typeof t && "function" != typeof t) return {
            default: t
        };
        var r1 = _getRequireWildcardCache(e);
        if (r1 && r1.has(t)) return r1.get(t);
        var i = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var a in t)if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
            var n = s ? Object.getOwnPropertyDescriptor(t, a) : null;
            n && (n.get || n.set) ? Object.defineProperty(i, a, n) : i[a] = t[a];
        }
        return i.default = t, r1 && r1.set(t, i), i;
    }
    function _newArrowCheck(t, e) {
        if (t !== e) throw new TypeError("Cannot instantiate an arrow function");
    }
    function _objectDestructuringEmpty(t) {
        if (null == t) throw new TypeError("Cannot destructure undefined");
    }
    function _objectWithoutPropertiesLoose(t, e) {
        if (null == t) return {};
        var r1, i, s = {}, a = Object.keys(t);
        for(i = 0; i < a.length; i++)r1 = a[i], e.indexOf(r1) >= 0 || (s[r1] = t[r1]);
        return s;
    }
    function _objectWithoutProperties(t, e) {
        if (null == t) return {};
        var r1, i, s = _objectWithoutPropertiesLoose(t, e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            for(i = 0; i < a.length; i++)r1 = a[i], e.indexOf(r1) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r1) && (s[r1] = t[r1]);
        }
        return s;
    }
    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function _possibleConstructorReturn(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return _assertThisInitialized(t);
    }
    function _createSuper(t) {
        var e = _isNativeReflectConstruct();
        return function() {
            var r1, i = _getPrototypeOf(t);
            if (e) {
                var s = _getPrototypeOf(this).constructor;
                r1 = Reflect.construct(i, arguments, s);
            } else r1 = i.apply(this, arguments);
            return _possibleConstructorReturn(this, r1);
        };
    }
    function _superPropBase(t, e) {
        for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)););
        return t;
    }
    function _get() {
        return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r1) {
            var i = _superPropBase(t, e);
            if (i) {
                var s = Object.getOwnPropertyDescriptor(i, e);
                return s.get ? s.get.call(arguments.length < 3 ? t : r1) : s.value;
            }
        }, _get.apply(this, arguments);
    }
    function set(t, e, r1, i) {
        return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(t, e, r1, i) {
            var s, a = _superPropBase(t, e);
            if (a) {
                if ((s = Object.getOwnPropertyDescriptor(a, e)).set) return s.set.call(i, r1), !0;
                if (!s.writable) return !1;
            }
            if (s = Object.getOwnPropertyDescriptor(i, e)) {
                if (!s.writable) return !1;
                s.value = r1, Object.defineProperty(i, e, s);
            } else _defineProperty(i, e, r1);
            return !0;
        }, set(t, e, r1, i);
    }
    function _set(t, e, r1, i, s) {
        if (!set(t, e, r1, i || t) && s) throw new Error("failed to set property");
        return r1;
    }
    function _taggedTemplateLiteral(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
            raw: {
                value: Object.freeze(e)
            }
        }));
    }
    function _taggedTemplateLiteralLoose(t, e) {
        return e || (e = t.slice(0)), t.raw = e, t;
    }
    function _readOnlyError(t) {
        throw new TypeError('"' + t + '" is read-only');
    }
    function _writeOnlyError(t) {
        throw new TypeError('"' + t + '" is write-only');
    }
    function _classNameTDZError(t) {
        throw new Error('Class "' + t + '" cannot be referenced in computed property keys.');
    }
    function _temporalUndefined() {}
    function _tdz(t) {
        throw new ReferenceError(t + " is not defined - temporal dead zone");
    }
    function _temporalRef(t, e) {
        return t === _temporalUndefined ? _tdz(e) : t;
    }
    function _slicedToArray(t, e) {
        return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
    }
    function _slicedToArrayLoose(t, e) {
        return _arrayWithHoles(t) || _iterableToArrayLimitLoose(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
    }
    function _toArray(t) {
        return _arrayWithHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableRest();
    }
    function _toConsumableArray(t) {
        return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(t) {
        if (Array.isArray(t)) return _arrayLikeToArray(t);
    }
    function _arrayWithHoles(t) {
        if (Array.isArray(t)) return t;
    }
    function _maybeArrayLike(t, e, r1) {
        if (e && !Array.isArray(e) && "number" == typeof e.length) {
            var i = e.length;
            return _arrayLikeToArray(e, void 0 !== r1 && r1 < i ? r1 : i);
        }
        return t(e, r1);
    }
    function _iterableToArray(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }
    function _iterableToArrayLimit(t, e) {
        var r1 = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r1) {
            var i, s, a = [], n = !0, o = !1;
            try {
                for(r1 = r1.call(t); !(n = (i = r1.next()).done) && (a.push(i.value), !e || a.length !== e); n = !0);
            } catch (t) {
                o = !0, s = t;
            } finally{
                try {
                    n || null == r1.return || r1.return();
                } finally{
                    if (o) throw s;
                }
            }
            return a;
        }
    }
    function _iterableToArrayLimitLoose(t, e) {
        var r1 = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
        if (null != r1) {
            var i = [];
            for(r1 = r1.call(t), _step; !(_step = r1.next()).done && (i.push(_step.value), !e || i.length !== e););
            return i;
        }
    }
    function _unsupportedIterableToArray(t, e) {
        if (t) {
            if ("string" == typeof t) return _arrayLikeToArray(t, e);
            var r1 = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r1 && t.constructor && (r1 = t.constructor.name), "Map" === r1 || "Set" === r1 ? Array.from(t) : "Arguments" === r1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r1) ? _arrayLikeToArray(t, e) : void 0;
        }
    }
    function _arrayLikeToArray(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var r1 = 0, i = new Array(e); r1 < e; r1++)i[r1] = t[r1];
        return i;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _createForOfIteratorHelper(t, e) {
        var r1 = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!r1) {
            if (Array.isArray(t) || (r1 = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
                r1 && (t = r1);
                var i = 0, s = function() {};
                return {
                    s: s,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        };
                    },
                    e: function(t) {
                        throw t;
                    },
                    f: s
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var a, n = !0, o = !1;
        return {
            s: function() {
                r1 = r1.call(t);
            },
            n: function() {
                var t = r1.next();
                return n = t.done, t;
            },
            e: function(t) {
                o = !0, a = t;
            },
            f: function() {
                try {
                    n || null == r1.return || r1.return();
                } finally{
                    if (o) throw a;
                }
            }
        };
    }
    function _createForOfIteratorHelperLoose(t, e) {
        var r1 = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (r1) return (r1 = r1.call(t)).next.bind(r1);
        if (Array.isArray(t) || (r1 = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
            r1 && (t = r1);
            var i = 0;
            return function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _skipFirstGeneratorNext(t) {
        return function() {
            var e = t.apply(this, arguments);
            return e.next(), e;
        };
    }
    function _toPrimitive(t, e) {
        if ("object" != typeof t || null === t) return t;
        var r1 = t[Symbol.toPrimitive];
        if (void 0 !== r1) {
            var i = r1.call(t, e || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
    }
    function _toPropertyKey(t) {
        var e = _toPrimitive(t, "string");
        return "symbol" == typeof e ? e : String(e);
    }
    function _initializerWarningHelper(t, e) {
        throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    function _initializerDefineProperty(t, e, r1, i) {
        r1 && Object.defineProperty(t, e, {
            enumerable: r1.enumerable,
            configurable: r1.configurable,
            writable: r1.writable,
            value: r1.initializer ? r1.initializer.call(i) : void 0
        });
    }
    function _applyDecoratedDescriptor(t, e, r1, i, s) {
        var a = {};
        return Object.keys(i).forEach(function(t) {
            a[t] = i[t];
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r1.slice().reverse().reduce(function(r1, i) {
            return i(t, e, r1) || r1;
        }, a), s && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(s) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a;
    }
    _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
        return this;
    }, _AsyncGenerator.prototype.next = function(t) {
        return this._invoke("next", t);
    }, _AsyncGenerator.prototype.throw = function(t) {
        return this._invoke("throw", t);
    }, _AsyncGenerator.prototype.return = function(t) {
        return this._invoke("return", t);
    };
    var id = 0;
    function _classPrivateFieldLooseKey(t) {
        return "__private_" + id++ + "_" + t;
    }
    function _classPrivateFieldLooseBase(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
        return t;
    }
    function _classPrivateFieldGet(t, e) {
        return _classApplyDescriptorGet(t, _classExtractFieldDescriptor(t, e, "get"));
    }
    function _classPrivateFieldSet(t, e, r1) {
        return _classApplyDescriptorSet(t, _classExtractFieldDescriptor(t, e, "set"), r1), r1;
    }
    function _classPrivateFieldDestructureSet(t, e) {
        return _classApplyDescriptorDestructureSet(t, _classExtractFieldDescriptor(t, e, "set"));
    }
    function _classExtractFieldDescriptor(t, e, r1) {
        if (!e.has(t)) throw new TypeError("attempted to " + r1 + " private field on non-instance");
        return e.get(t);
    }
    function _classStaticPrivateFieldSpecGet(t, e, r1) {
        return _classCheckPrivateStaticAccess(t, e), _classCheckPrivateStaticFieldDescriptor(r1, "get"), _classApplyDescriptorGet(t, r1);
    }
    function _classStaticPrivateFieldSpecSet(t, e, r1, i) {
        return _classCheckPrivateStaticAccess(t, e), _classCheckPrivateStaticFieldDescriptor(r1, "set"), _classApplyDescriptorSet(t, r1, i), i;
    }
    function _classStaticPrivateMethodGet(t, e, r1) {
        return _classCheckPrivateStaticAccess(t, e), r1;
    }
    function _classStaticPrivateMethodSet() {
        throw new TypeError("attempted to set read only static private field");
    }
    function _classApplyDescriptorGet(t, e) {
        return e.get ? e.get.call(t) : e.value;
    }
    function _classApplyDescriptorSet(t, e, r1) {
        if (e.set) e.set.call(t, r1);
        else {
            if (!e.writable) throw new TypeError("attempted to set read only private field");
            e.value = r1;
        }
    }
    function _classApplyDescriptorDestructureSet(t, e) {
        if (e.set) return "__destrObj" in e || (e.__destrObj = {
            set value (r){
                e.set.call(t, r);
            }
        }), e.__destrObj;
        if (!e.writable) throw new TypeError("attempted to set read only private field");
        return e;
    }
    function _classStaticPrivateFieldDestructureSet(t, e, r1) {
        return _classCheckPrivateStaticAccess(t, e), _classCheckPrivateStaticFieldDescriptor(r1, "set"), _classApplyDescriptorDestructureSet(t, r1);
    }
    function _classCheckPrivateStaticAccess(t, e) {
        if (t !== e) throw new TypeError("Private static access of wrong provenance");
    }
    function _classCheckPrivateStaticFieldDescriptor(t, e) {
        if (void 0 === t) throw new TypeError("attempted to " + e + " private static field before its declaration");
    }
    function _decorate(t, e, r1, i) {
        var s = _getDecoratorsApi();
        if (i) for(var a = 0; a < i.length; a++)s = i[a](s);
        var n = e(function(t) {
            s.initializeInstanceElements(t, o.elements);
        }, r1), o = s.decorateClass(_coalesceClassElements(n.d.map(_createElementDescriptor)), t);
        return s.initializeClassElements(n.F, o.elements), s.runClassFinishers(n.F, o.finishers);
    }
    function _getDecoratorsApi() {
        _getDecoratorsApi = function() {
            return t;
        };
        var t = {
            elementsDefinitionOrder: [
                [
                    "method"
                ],
                [
                    "field"
                ]
            ],
            initializeInstanceElements: function(t, e) {
                [
                    "method",
                    "field"
                ].forEach(function(r1) {
                    e.forEach(function(e) {
                        e.kind === r1 && "own" === e.placement && this.defineClassElement(t, e);
                    }, this);
                }, this);
            },
            initializeClassElements: function(t, e) {
                var r1 = t.prototype;
                [
                    "method",
                    "field"
                ].forEach(function(i) {
                    e.forEach(function(e) {
                        var s = e.placement;
                        if (e.kind === i && ("static" === s || "prototype" === s)) {
                            var a = "static" === s ? t : r1;
                            this.defineClassElement(a, e);
                        }
                    }, this);
                }, this);
            },
            defineClassElement: function(t, e) {
                var r1 = e.descriptor;
                if ("field" === e.kind) {
                    var i = e.initializer;
                    r1 = {
                        enumerable: r1.enumerable,
                        writable: r1.writable,
                        configurable: r1.configurable,
                        value: void 0 === i ? void 0 : i.call(t)
                    };
                }
                Object.defineProperty(t, e.key, r1);
            },
            decorateClass: function(t, e) {
                var r1 = [], i = [], s = {
                    static: [],
                    prototype: [],
                    own: []
                };
                if (t.forEach(function(t) {
                    this.addElementPlacement(t, s);
                }, this), t.forEach(function(t) {
                    if (!_hasDecorators(t)) return r1.push(t);
                    var e = this.decorateElement(t, s);
                    r1.push(e.element), r1.push.apply(r1, e.extras), i.push.apply(i, e.finishers);
                }, this), !e) return {
                    elements: r1,
                    finishers: i
                };
                var a = this.decorateConstructor(r1, e);
                return i.push.apply(i, a.finishers), a.finishers = i, a;
            },
            addElementPlacement: function(t, e, r1) {
                var i = e[t.placement];
                if (!r1 && -1 !== i.indexOf(t.key)) throw new TypeError("Duplicated element (" + t.key + ")");
                i.push(t.key);
            },
            decorateElement: function(t, e) {
                for(var r1 = [], i = [], s = t.decorators, a = s.length - 1; a >= 0; a--){
                    var n = e[t.placement];
                    n.splice(n.indexOf(t.key), 1);
                    var o = this.fromElementDescriptor(t), h = this.toElementFinisherExtras((0, s[a])(o) || o);
                    t = h.element, this.addElementPlacement(t, e), h.finisher && i.push(h.finisher);
                    var l = h.extras;
                    if (l) {
                        for(var p = 0; p < l.length; p++)this.addElementPlacement(l[p], e);
                        r1.push.apply(r1, l);
                    }
                }
                return {
                    element: t,
                    finishers: i,
                    extras: r1
                };
            },
            decorateConstructor: function(t, e) {
                for(var r1 = [], i = e.length - 1; i >= 0; i--){
                    var s = this.fromClassDescriptor(t), a = this.toClassDescriptor((0, e[i])(s) || s);
                    if (void 0 !== a.finisher && r1.push(a.finisher), void 0 !== a.elements) {
                        t = a.elements;
                        for(var n = 0; n < t.length - 1; n++)for(var o = n + 1; o < t.length; o++)if (t[n].key === t[o].key && t[n].placement === t[o].placement) throw new TypeError("Duplicated element (" + t[n].key + ")");
                    }
                }
                return {
                    elements: t,
                    finishers: r1
                };
            },
            fromElementDescriptor: function(t) {
                var e = {
                    kind: t.kind,
                    key: t.key,
                    placement: t.placement,
                    descriptor: t.descriptor
                };
                return Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                }), "field" === t.kind && (e.initializer = t.initializer), e;
            },
            toElementDescriptors: function(t) {
                if (void 0 !== t) return _toArray(t).map(function(t) {
                    var e = this.toElementDescriptor(t);
                    return this.disallowProperty(t, "finisher", "An element descriptor"), this.disallowProperty(t, "extras", "An element descriptor"), e;
                }, this);
            },
            toElementDescriptor: function(t) {
                var e = String(t.kind);
                if ("method" !== e && "field" !== e) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + e + '"');
                var r1 = _toPropertyKey(t.key), i = String(t.placement);
                if ("static" !== i && "prototype" !== i && "own" !== i) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + i + '"');
                var s = t.descriptor;
                this.disallowProperty(t, "elements", "An element descriptor");
                var a = {
                    kind: e,
                    key: r1,
                    placement: i,
                    descriptor: Object.assign({}, s)
                };
                return "field" !== e ? this.disallowProperty(t, "initializer", "A method descriptor") : (this.disallowProperty(s, "get", "The property descriptor of a field descriptor"), this.disallowProperty(s, "set", "The property descriptor of a field descriptor"), this.disallowProperty(s, "value", "The property descriptor of a field descriptor"), a.initializer = t.initializer), a;
            },
            toElementFinisherExtras: function(t) {
                return {
                    element: this.toElementDescriptor(t),
                    finisher: _optionalCallableProperty(t, "finisher"),
                    extras: this.toElementDescriptors(t.extras)
                };
            },
            fromClassDescriptor: function(t) {
                var e = {
                    kind: "class",
                    elements: t.map(this.fromElementDescriptor, this)
                };
                return Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                }), e;
            },
            toClassDescriptor: function(t) {
                var e = String(t.kind);
                if ("class" !== e) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + e + '"');
                this.disallowProperty(t, "key", "A class descriptor"), this.disallowProperty(t, "placement", "A class descriptor"), this.disallowProperty(t, "descriptor", "A class descriptor"), this.disallowProperty(t, "initializer", "A class descriptor"), this.disallowProperty(t, "extras", "A class descriptor");
                var r1 = _optionalCallableProperty(t, "finisher");
                return {
                    elements: this.toElementDescriptors(t.elements),
                    finisher: r1
                };
            },
            runClassFinishers: function(t, e) {
                for(var r1 = 0; r1 < e.length; r1++){
                    var i = (0, e[r1])(t);
                    if (void 0 !== i) {
                        if ("function" != typeof i) throw new TypeError("Finishers must return a constructor.");
                        t = i;
                    }
                }
                return t;
            },
            disallowProperty: function(t, e, r1) {
                if (void 0 !== t[e]) throw new TypeError(r1 + " can't have a ." + e + " property.");
            }
        };
        return t;
    }
    function _createElementDescriptor(t) {
        var e, r1 = _toPropertyKey(t.key);
        "method" === t.kind ? e = {
            value: t.value,
            writable: !0,
            configurable: !0,
            enumerable: !1
        } : "get" === t.kind ? e = {
            get: t.value,
            configurable: !0,
            enumerable: !1
        } : "set" === t.kind ? e = {
            set: t.value,
            configurable: !0,
            enumerable: !1
        } : "field" === t.kind && (e = {
            configurable: !0,
            writable: !0,
            enumerable: !0
        });
        var i = {
            kind: "field" === t.kind ? "field" : "method",
            key: r1,
            placement: t.static ? "static" : "field" === t.kind ? "own" : "prototype",
            descriptor: e
        };
        return t.decorators && (i.decorators = t.decorators), "field" === t.kind && (i.initializer = t.value), i;
    }
    function _coalesceGetterSetter(t, e) {
        void 0 !== t.descriptor.get ? e.descriptor.get = t.descriptor.get : e.descriptor.set = t.descriptor.set;
    }
    function _coalesceClassElements(t) {
        for(var e = [], r1 = function(t) {
            return "method" === t.kind && t.key === a.key && t.placement === a.placement;
        }, i = 0; i < t.length; i++){
            var s, a = t[i];
            if ("method" === a.kind && (s = e.find(r1))) {
                if (_isDataDescriptor(a.descriptor) || _isDataDescriptor(s.descriptor)) {
                    if (_hasDecorators(a) || _hasDecorators(s)) throw new ReferenceError("Duplicated methods (" + a.key + ") can't be decorated.");
                    s.descriptor = a.descriptor;
                } else {
                    if (_hasDecorators(a)) {
                        if (_hasDecorators(s)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + a.key + ").");
                        s.decorators = a.decorators;
                    }
                    _coalesceGetterSetter(a, s);
                }
            } else e.push(a);
        }
        return e;
    }
    function _hasDecorators(t) {
        return t.decorators && t.decorators.length;
    }
    function _isDataDescriptor(t) {
        return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
    }
    function _optionalCallableProperty(t, e) {
        var r1 = t[e];
        if (void 0 !== r1 && "function" != typeof r1) throw new TypeError("Expected '" + e + "' to be a function");
        return r1;
    }
    function _classPrivateMethodGet(t, e, r1) {
        if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
        return r1;
    }
    function _checkPrivateRedeclaration(t, e) {
        if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function _classPrivateFieldInitSpec(t, e, r1) {
        _checkPrivateRedeclaration(t, e), e.set(t, r1);
    }
    function _classPrivateMethodInitSpec(t, e) {
        _checkPrivateRedeclaration(t, e), e.add(t);
    }
    function _classPrivateMethodSet() {
        throw new TypeError("attempted to reassign private method");
    }
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ var _extendStatics = function(t, e) {
        return _extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for(var r1 in e)Object.prototype.hasOwnProperty.call(e, r1) && (t[r1] = e[r1]);
        }, _extendStatics(t, e);
    };
    function __extends(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function r1() {
            this.constructor = t;
        }
        _extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (r1.prototype = e.prototype, new r1);
    }
    var _assign = function() {
        return _assign = Object.assign || function(t) {
            for(var e, r1 = 1, i = arguments.length; r1 < i; r1++)for(var s in e = arguments[r1])Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t;
        }, _assign.apply(this, arguments);
    };
    function __rest(t, e) {
        var r1 = {};
        for(var i in t)Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r1[i] = t[i]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for(i = Object.getOwnPropertySymbols(t); s < i.length; s++)e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (r1[i[s]] = t[i[s]]);
        }
        return r1;
    }
    function __decorate(t, e, r1, i) {
        var s, a = arguments.length, n = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r1) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r1, i);
        else for(var o = t.length - 1; o >= 0; o--)(s = t[o]) && (n = (a < 3 ? s(n) : a > 3 ? s(e, r1, n) : s(e, r1)) || n);
        return a > 3 && n && Object.defineProperty(e, r1, n), n;
    }
    function __param(t, e) {
        return function(r1, i) {
            e(r1, i, t);
        };
    }
    function __metadata(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function __awaiter(t, e, r1, i) {
        return new (r1 || (r1 = Promise))(function(s, a) {
            function n(t) {
                try {
                    h(i.next(t));
                } catch (t) {
                    a(t);
                }
            }
            function o(t) {
                try {
                    h(i.throw(t));
                } catch (t) {
                    a(t);
                }
            }
            function h(t) {
                var e;
                t.done ? s(t.value) : (e = t.value, e instanceof r1 ? e : new r1(function(t) {
                    t(e);
                })).then(n, o);
            }
            h((i = i.apply(t, e || [])).next());
        });
    }
    function __generator(t, e) {
        var r1, i, s, a, n = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1];
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this;
        }), a;
        function o(a) {
            return function(o) {
                return function(a) {
                    if (r1) throw new TypeError("Generator is already executing.");
                    for(; n;)try {
                        if (r1 = 1, i && (s = 2 & a[0] ? i.return : a[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, a[1])).done) return s;
                        switch(i = 0, s && (a = [
                            2 & a[0],
                            s.value
                        ]), a[0]){
                            case 0:
                            case 1:
                                s = a;
                                break;
                            case 4:
                                return n.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                n.label++, i = a[1], a = [
                                    0
                                ];
                                continue;
                            case 7:
                                a = n.ops.pop(), n.trys.pop();
                                continue;
                            default:
                                if (!(s = n.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    n = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                    n.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && n.label < s[1]) {
                                    n.label = s[1], s = a;
                                    break;
                                }
                                if (s && n.label < s[2]) {
                                    n.label = s[2], n.ops.push(a);
                                    break;
                                }
                                s[2] && n.ops.pop(), n.trys.pop();
                                continue;
                        }
                        a = e.call(t, n);
                    } catch (t) {
                        a = [
                            6,
                            t
                        ], i = 0;
                    } finally{
                        r1 = s = 0;
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    };
                }([
                    a,
                    o
                ]);
            };
        }
    }
    var __createBinding = Object.create ? function(t, e, r1, i) {
        void 0 === i && (i = r1), Object.defineProperty(t, i, {
            enumerable: !0,
            get: function() {
                return e[r1];
            }
        });
    } : function(t, e, r1, i) {
        void 0 === i && (i = r1), t[i] = e[r1];
    };
    function __exportStar(t, e) {
        for(var r1 in t)"default" === r1 || Object.prototype.hasOwnProperty.call(e, r1) || __createBinding(e, t, r1);
    }
    function __values(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, r1 = e && t[e], i = 0;
        if (r1) return r1.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && i >= t.length && (t = void 0), {
                    value: t && t[i++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(t, e) {
        var r1 = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r1) return t;
        var i, s, a = r1.call(t), n = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(i = a.next()).done;)n.push(i.value);
        } catch (t) {
            s = {
                error: t
            };
        } finally{
            try {
                i && !i.done && (r1 = a.return) && r1.call(a);
            } finally{
                if (s) throw s.error;
            }
        }
        return n;
    }
    function __spread() {
        for(var t = [], e = 0; e < arguments.length; e++)t = t.concat(__read(arguments[e]));
        return t;
    }
    function __spreadArrays() {
        for(var t = 0, e = 0, r1 = arguments.length; e < r1; e++)t += arguments[e].length;
        var i = Array(t), s = 0;
        for(e = 0; e < r1; e++)for(var a = arguments[e], n = 0, o = a.length; n < o; n++, s++)i[s] = a[n];
        return i;
    }
    function __spreadArray(t, e, r1) {
        if (r1 || 2 === arguments.length) for(var i, s = 0, a = e.length; s < a; s++)!i && s in e || (i || (i = Array.prototype.slice.call(e, 0, s)), i[s] = e[s]);
        return t.concat(i || Array.prototype.slice.call(e));
    }
    function __await(t) {
        return this instanceof __await ? (this.v = t, this) : new __await(t);
    }
    function __asyncGenerator(t, e, r1) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i, s = r1.apply(t, e || []), a = [];
        return i = {}, n("next"), n("throw"), n("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
        function n(t) {
            s[t] && (i[t] = function(e) {
                return new Promise(function(r1, i) {
                    a.push([
                        t,
                        e,
                        r1,
                        i
                    ]) > 1 || o(t, e);
                });
            });
        }
        function o(t, e) {
            try {
                !function(t) {
                    t.value instanceof __await ? Promise.resolve(t.value.v).then(h, l) : p(a[0][2], t);
                }(s[t](e));
            } catch (t) {
                p(a[0][3], t);
            }
        }
        function h(t) {
            o("next", t);
        }
        function l(t) {
            o("throw", t);
        }
        function p(t, e) {
            t(e), a.shift(), a.length && o(a[0][0], a[0][1]);
        }
    }
    function __asyncDelegator(t) {
        var e, r1;
        return e = {}, i("next"), i("throw", function(t) {
            throw t;
        }), i("return"), e[Symbol.iterator] = function() {
            return this;
        }, e;
        function i(i, s) {
            e[i] = t[i] ? function(e) {
                return (r1 = !r1) ? {
                    value: __await(t[i](e)),
                    done: "return" === i
                } : s ? s(e) : e;
            } : s;
        }
    }
    function __asyncValues(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, r1 = t[Symbol.asyncIterator];
        return r1 ? r1.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
            return this;
        }, e);
        function i(r1) {
            e[r1] = t[r1] && function(e) {
                return new Promise(function(i, s) {
                    (function(t, e, r1, i) {
                        Promise.resolve(i).then(function(e) {
                            t({
                                value: e,
                                done: r1
                            });
                        }, e);
                    })(i, s, (e = t[r1](e)).done, e.value);
                });
            };
        }
    }
    function __makeTemplateObject(t, e) {
        return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
        }) : t.raw = e, t;
    }
    var __setModuleDefault = Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        });
    } : function(t, e) {
        t.default = e;
    };
    function __importStar(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for(var r1 in t)"default" !== r1 && Object.prototype.hasOwnProperty.call(t, r1) && __createBinding(e, t, r1);
        return __setModuleDefault(e, t), e;
    }
    function __importDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function __classPrivateFieldGet(t, e, r1, i) {
        if ("a" === r1 && !i) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r1 ? i : "a" === r1 ? i.call(t) : i ? i.value : e.get(t);
    }
    function __classPrivateFieldSet(t, e, r1, i, s) {
        if ("m" === i) throw new TypeError("Private method is not writable");
        if ("a" === i && !s) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === i ? s.call(t, r1) : s ? s.value = r1 : e.set(t, r1), r1;
    /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ }
    var t$3 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$8 = Symbol(), n$5 = new Map;
    class s$3 {
        constructor(t, e){
            if (this._$cssResult$ = !0, e !== e$8) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = t;
        }
        get styleSheet() {
            var t = n$5.get(this.cssText);
            return t$3 && void 0 === t && (n$5.set(this.cssText, t = new CSSStyleSheet), t.replaceSync(this.cssText)), t;
        }
        toString() {
            return this.cssText;
        }
    }
    var o$5 = (t)=>new s$3("string" == typeof t ? t : t + "", e$8), r$3 = function(t) {
        for(var e = arguments.length, r1 = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)r1[i - 1] = arguments[i];
        var s = 1 === t.length ? t[0] : r1.reduce((e, r1, i)=>e + ((t)=>{
                if (!0 === t._$cssResult$) return t.cssText;
                if ("number" == typeof t) return t;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
            })(r1) + t[i + 1], t[0]);
        return new s$3(s, e$8);
    }, i$3 = (t, e)=>{
        t$3 ? t.adoptedStyleSheets = e.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((e)=>{
            var r1 = document.createElement("style"), i = window.litNonce;
            void 0 !== i && r1.setAttribute("nonce", i), r1.textContent = e.cssText, t.appendChild(r1);
        });
    }, S$1 = t$3 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
            var e = "";
            for (var r1 of t.cssRules)e += r1.cssText;
            return o$5(e);
        })(t) : t, s$2, e$7 = window.trustedTypes, r$2 = e$7 ? e$7.emptyScript : "", h$2 = window.reactiveElementPolyfillSupport, o$4 = {
        toAttribute (t, e) {
            switch(e){
                case Boolean:
                    t = t ? r$2 : null;
                    break;
                case Object:
                case Array:
                    t = null == t ? t : JSON.stringify(t);
            }
            return t;
        },
        fromAttribute (t, e) {
            var r1 = t;
            switch(e){
                case Boolean:
                    r1 = null !== t;
                    break;
                case Number:
                    r1 = null === t ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        r1 = JSON.parse(t);
                    } catch (t) {
                        r1 = null;
                    }
            }
            return r1;
        }
    }, n$4 = (t, e)=>e !== t && (e == e || t == t), l$3 = {
        attribute: !0,
        type: String,
        converter: o$4,
        reflect: !1,
        hasChanged: n$4
    }, t$2;
    class a$1 extends HTMLElement {
        constructor(){
            super(), this._$Et = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
        }
        static addInitializer(t) {
            var e;
            null !== (e = this.l) && void 0 !== e || (this.l = []), this.l.push(t);
        }
        static get observedAttributes() {
            this.finalize();
            var t = [];
            return this.elementProperties.forEach((e, r1)=>{
                var i = this._$Eh(r1, e);
                void 0 !== i && (this._$Eu.set(i, r1), t.push(i));
            }), t;
        }
        static createProperty(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l$3;
            if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                var r1 = "symbol" == typeof t ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, r1, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i);
            }
        }
        static getPropertyDescriptor(t, e, r1) {
            return {
                get () {
                    return this[e];
                },
                set (i) {
                    var s = this[t];
                    this[e] = i, this.requestUpdate(t, s, r1);
                },
                configurable: !0,
                enumerable: !0
            };
        }
        static getPropertyOptions(t) {
            return this.elementProperties.get(t) || l$3;
        }
        static finalize() {
            if (this.hasOwnProperty("finalized")) return !1;
            this.finalized = !0;
            var t = Object.getPrototypeOf(this);
            if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map, this.hasOwnProperty("properties")) {
                var e = this.properties, r1 = [
                    ...Object.getOwnPropertyNames(e),
                    ...Object.getOwnPropertySymbols(e)
                ];
                for (var i of r1)this.createProperty(i, e[i]);
            }
            return this.elementStyles = this.finalizeStyles(this.styles), !0;
        }
        static finalizeStyles(t) {
            var e = [];
            if (Array.isArray(t)) {
                var r1 = new Set(t.flat(1 / 0).reverse());
                for (var i of r1)e.unshift(S$1(i));
            } else void 0 !== t && e.push(S$1(t));
            return e;
        }
        static _$Eh(t, e) {
            var r1 = e.attribute;
            return !1 === r1 ? void 0 : "string" == typeof r1 ? r1 : "string" == typeof t ? t.toLowerCase() : void 0;
        }
        o() {
            var t;
            this._$Ep = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Em(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach((t)=>t(this));
        }
        addController(t) {
            var e, r1;
            (null !== (e = this._$Eg) && void 0 !== e ? e : this._$Eg = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (r1 = t.hostConnected) || void 0 === r1 || r1.call(t));
        }
        removeController(t) {
            var e;
            null === (e = this._$Eg) || void 0 === e || e.splice(this._$Eg.indexOf(t) >>> 0, 1);
        }
        _$Em() {
            this.constructor.elementProperties.forEach((t, e)=>{
                this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e]);
            });
        }
        createRenderRoot() {
            var t, e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return i$3(e, this.constructor.elementStyles), e;
        }
        connectedCallback() {
            var t;
            void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Eg) || void 0 === t || t.forEach((t)=>{
                var e;
                return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t);
            });
        }
        enableUpdating(t) {}
        disconnectedCallback() {
            var t;
            null === (t = this._$Eg) || void 0 === t || t.forEach((t)=>{
                var e;
                return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t);
            });
        }
        attributeChangedCallback(t, e, r1) {
            this._$AK(t, r1);
        }
        _$ES(t, e) {
            var r1, i, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l$3, a = this.constructor._$Eh(t, s);
            if (void 0 !== a && !0 === s.reflect) {
                var n = (null !== (i = null === (r1 = s.converter) || void 0 === r1 ? void 0 : r1.toAttribute) && void 0 !== i ? i : o$4.toAttribute)(e, s.type);
                this._$Ei = t, null == n ? this.removeAttribute(a) : this.setAttribute(a, n), this._$Ei = null;
            }
        }
        _$AK(t, e) {
            var r1, i, s, a = this.constructor, n = a._$Eu.get(t);
            if (void 0 !== n && this._$Ei !== n) {
                var o = a.getPropertyOptions(n), h = o.converter, l = null !== (s = null !== (i = null === (r1 = h) || void 0 === r1 ? void 0 : r1.fromAttribute) && void 0 !== i ? i : "function" == typeof h ? h : null) && void 0 !== s ? s : o$4.fromAttribute;
                this._$Ei = n, this[n] = l(e, o.type), this._$Ei = null;
            }
        }
        requestUpdate(t, e, r1) {
            var i = !0;
            void 0 !== t && (((r1 = r1 || this.constructor.getPropertyOptions(t)).hasChanged || n$4)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === r1.reflect && this._$Ei !== t && (void 0 === this._$E_ && (this._$E_ = new Map), this._$E_.set(t, r1))) : i = !1), !this.isUpdatePending && i && (this._$Ep = this._$EC());
        }
        _$EC() {
            var t = this;
            return _asyncToGenerator(function*() {
                t.isUpdatePending = !0;
                try {
                    yield t._$Ep;
                } catch (e) {
                    Promise.reject(e);
                }
                var e = t.scheduleUpdate();
                return null != e && (yield e), !t.isUpdatePending;
            })();
        }
        scheduleUpdate() {
            return this.performUpdate();
        }
        performUpdate() {
            var t;
            if (this.isUpdatePending) {
                this.hasUpdated, this._$Et && (this._$Et.forEach((t, e)=>this[e] = t), this._$Et = void 0);
                var e = !1, r1 = this._$AL;
                try {
                    (e = this.shouldUpdate(r1)) ? (this.willUpdate(r1), null === (t = this._$Eg) || void 0 === t || t.forEach((t)=>{
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t);
                    }), this.update(r1)) : this._$EU();
                } catch (t) {
                    throw e = !1, this._$EU(), t;
                }
                e && this._$AE(r1);
            }
        }
        willUpdate(t) {}
        _$AE(t) {
            var e;
            null === (e = this._$Eg) || void 0 === e || e.forEach((t)=>{
                var e;
                return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t);
            }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
        }
        _$EU() {
            this._$AL = new Map, this.isUpdatePending = !1;
        }
        get updateComplete() {
            return this.getUpdateComplete();
        }
        getUpdateComplete() {
            return this._$Ep;
        }
        shouldUpdate(t) {
            return !0;
        }
        update(t) {
            void 0 !== this._$E_ && (this._$E_.forEach((t, e)=>this._$ES(e, this[e], t)), this._$E_ = void 0), this._$EU();
        }
        updated(t) {}
        firstUpdated(t) {}
    }
    a$1.finalized = !0, a$1.elementProperties = new Map, a$1.elementStyles = [], a$1.shadowRootOptions = {
        mode: "open"
    }, null == h$2 || h$2({
        ReactiveElement: a$1
    }), (null !== (s$2 = globalThis.reactiveElementVersions) && void 0 !== s$2 ? s$2 : globalThis.reactiveElementVersions = []).push("1.2.1");
    var i$2 = globalThis.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", {
        createHTML: (t)=>t
    }) : void 0, e$6 = "lit$".concat((Math.random() + "").slice(9), "$"), o$3 = "?" + e$6, n$3 = "<".concat(o$3, ">"), l$2 = document, h$1 = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return l$2.createComment(t);
    }, r$1 = (t)=>null === t || "object" != typeof t && "function" != typeof t, d = Array.isArray, u = (t)=>{
        var e;
        return d(t) || "function" == typeof (null === (e = t) || void 0 === e ? void 0 : e[Symbol.iterator]);
    }, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea)$/i, p = (t)=>function(e) {
            for(var r1 = arguments.length, i = new Array(r1 > 1 ? r1 - 1 : 0), s = 1; s < r1; s++)i[s - 1] = arguments[s];
            return {
                _$litType$: t,
                strings: e,
                values: i
            };
        }, $ = p(1), y = p(2), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), T = new WeakMap, x = (t, e, r1)=>{
        var i, s, a = null !== (i = null == r1 ? void 0 : r1.renderBefore) && void 0 !== i ? i : e, n = a._$litPart$;
        if (void 0 === n) {
            var o = null !== (s = null == r1 ? void 0 : r1.renderBefore) && void 0 !== s ? s : null;
            a._$litPart$ = n = new N(e.insertBefore(h$1(), o), o, void 0, null != r1 ? r1 : {});
        }
        return n._$AI(t), n;
    }, A = l$2.createTreeWalker(l$2, 129, null, !1), C = (t, e)=>{
        for(var r1, i = t.length - 1, s = [], n = 2 === e ? "<svg>" : "", o = c, h = 0; h < i; h++){
            for(var l = t[h], p = void 0, d = void 0, u = -1, y = 0; y < l.length && (o.lastIndex = y, null !== (d = o.exec(l)));)y = o.lastIndex, o === c ? "!--" === d[1] ? o = v : void 0 !== d[1] ? o = a : void 0 !== d[2] ? (g.test(d[2]) && (r1 = RegExp("</" + d[2], "g")), o = f) : void 0 !== d[3] && (o = f) : o === f ? ">" === d[0] ? (o = null != r1 ? r1 : c, u = -1) : void 0 === d[1] ? u = -2 : (u = o.lastIndex - d[2].length, p = d[1], o = void 0 === d[3] ? f : '"' === d[3] ? m : _) : o === m || o === _ ? o = f : o === v || o === a ? o = c : (o = f, r1 = void 0);
            var b = o === f && t[h + 1].startsWith("/>") ? " " : "";
            n += o === c ? l + n$3 : u >= 0 ? (s.push(p), l.slice(0, u) + "$lit$" + l.slice(u) + e$6 + b) : l + e$6 + (-2 === u ? (s.push(void 0), h) : b);
        }
        var P = n + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
        if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return [
            void 0 !== s$1 ? s$1.createHTML(P) : P,
            s
        ];
    };
    class E {
        constructor(t, e){
            var r1, { strings: i , _$litType$: s  } = t;
            this.parts = [];
            var a = 0, n = 0, o = i.length - 1, h = this.parts, [l, p] = C(i, s);
            if (this.el = E.createElement(l, e), A.currentNode = this.el.content, 2 === s) {
                var c = this.el.content, f = c.firstChild;
                f.remove(), c.append(...f.childNodes);
            }
            for(; null !== (r1 = A.nextNode()) && h.length < o;){
                if (1 === r1.nodeType) {
                    if (r1.hasAttributes()) {
                        var d = [];
                        for (var u of r1.getAttributeNames())if (u.endsWith("$lit$") || u.startsWith(e$6)) {
                            var m = p[n++];
                            if (d.push(u), void 0 !== m) {
                                var y = r1.getAttribute(m.toLowerCase() + "$lit$").split(e$6), v = /([.?@])?(.*)/.exec(m);
                                h.push({
                                    type: 1,
                                    index: a,
                                    name: v[2],
                                    strings: y,
                                    ctor: "." === v[1] ? M : "?" === v[1] ? H : "@" === v[1] ? I : S
                                });
                            } else h.push({
                                type: 6,
                                index: a
                            });
                        }
                        for (var b of d)r1.removeAttribute(b);
                    }
                    if (g.test(r1.tagName)) {
                        var _ = r1.textContent.split(e$6), P = _.length - 1;
                        if (P > 0) {
                            r1.textContent = i$2 ? i$2.emptyScript : "";
                            for(var x = 0; x < P; x++)r1.append(_[x], h$1()), A.nextNode(), h.push({
                                type: 2,
                                index: ++a
                            });
                            r1.append(_[P], h$1());
                        }
                    }
                } else if (8 === r1.nodeType) {
                    if (r1.data === o$3) h.push({
                        type: 2,
                        index: a
                    });
                    else for(var w = -1; -1 !== (w = r1.data.indexOf(e$6, w + 1));)h.push({
                        type: 7,
                        index: a
                    }), w += e$6.length - 1;
                }
                a++;
            }
        }
        static createElement(t, e) {
            var r1 = l$2.createElement("template");
            return r1.innerHTML = t, r1;
        }
    }
    function P(t, e) {
        var r1, i, s, a, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t, o = arguments.length > 3 ? arguments[3] : void 0;
        if (e === b) return e;
        var h = void 0 !== o ? null === (r1 = n._$Cl) || void 0 === r1 ? void 0 : r1[o] : n._$Cu, l = r$1(e) ? void 0 : e._$litDirective$;
        return (null == h ? void 0 : h.constructor) !== l && (null === (i = null == h ? void 0 : h._$AO) || void 0 === i || i.call(h, !1), void 0 === l ? h = void 0 : (h = new l(t))._$AT(t, n, o), void 0 !== o ? (null !== (s = (a = n)._$Cl) && void 0 !== s ? s : a._$Cl = [])[o] = h : n._$Cu = h), void 0 !== h && (e = P(t, h._$AS(t, e.values), h, o)), e;
    }
    class V {
        constructor(t, e){
            this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
        }
        get parentNode() {
            return this._$AM.parentNode;
        }
        get _$AU() {
            return this._$AM._$AU;
        }
        p(t) {
            var e, { el: { content: r1  } , parts: i  } = this._$AD, s = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : l$2).importNode(r1, !0);
            A.currentNode = s;
            for(var a = A.nextNode(), n = 0, o = 0, h = i[0]; void 0 !== h;){
                if (n === h.index) {
                    var l = void 0;
                    2 === h.type ? l = new N(a, a.nextSibling, this, t) : 1 === h.type ? l = new h.ctor(a, h.name, h.strings, this, t) : 6 === h.type && (l = new L(a, this, t)), this.v.push(l), h = i[++o];
                }
                n !== (null == h ? void 0 : h.index) && (a = A.nextNode(), n++);
            }
            return s;
        }
        m(t) {
            var e = 0;
            for (var r1 of this.v)void 0 !== r1 && (void 0 !== r1.strings ? (r1._$AI(t, r1, e), e += r1.strings.length - 2) : r1._$AI(t[e])), e++;
        }
    }
    class N {
        constructor(t, e, r1, i){
            var s;
            this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r1, this.options = i, this._$Cg = null === (s = null == i ? void 0 : i.isConnected) || void 0 === s || s;
        }
        get _$AU() {
            var t, e;
            return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cg;
        }
        get parentNode() {
            var t = this._$AA.parentNode, e = this._$AM;
            return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
        }
        get startNode() {
            return this._$AA;
        }
        get endNode() {
            return this._$AB;
        }
        _$AI(t) {
            t = P(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this), r$1(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.S(t) : u(t) ? this.A(t) : this.$(t);
        }
        M(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._$AB;
            return this._$AA.parentNode.insertBefore(t, e);
        }
        S(t) {
            this._$AH !== t && (this._$AR(), this._$AH = this.M(t));
        }
        $(t) {
            this._$AH !== w && r$1(this._$AH) ? this._$AA.nextSibling.data = t : this.S(l$2.createTextNode(t)), this._$AH = t;
        }
        T(t) {
            var e, { values: r1 , _$litType$: i  } = t, s = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = E.createElement(i.h, this.options)), i);
            if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === s) this._$AH.m(r1);
            else {
                var a = new V(s, this), n = a.p(this.options);
                a.m(r1), this.S(n), this._$AH = a;
            }
        }
        _$AC(t) {
            var e = T.get(t.strings);
            return void 0 === e && T.set(t.strings, e = new E(t)), e;
        }
        A(t) {
            d(this._$AH) || (this._$AH = [], this._$AR());
            var e, r1 = this._$AH, i = 0;
            for (var s of t)i === r1.length ? r1.push(e = new N(this.M(h$1()), this.M(h$1()), this, this.options)) : e = r1[i], e._$AI(s), i++;
            i < r1.length && (this._$AR(e && e._$AB.nextSibling, i), r1.length = i);
        }
        _$AR() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling, r1 = arguments.length > 1 ? arguments[1] : void 0;
            for(null === (t = this._$AP) || void 0 === t || t.call(this, !1, !0, r1); e && e !== this._$AB;){
                var i = e.nextSibling;
                e.remove(), e = i;
            }
        }
        setConnected(t) {
            var e;
            void 0 === this._$AM && (this._$Cg = t, null === (e = this._$AP) || void 0 === e || e.call(this, t));
        }
    }
    class S {
        constructor(t, e, r1, i, s){
            this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = s, r1.length > 2 || "" !== r1[0] || "" !== r1[1] ? (this._$AH = Array(r1.length - 1).fill(new String), this.strings = r1) : this._$AH = w;
        }
        get tagName() {
            return this.element.tagName;
        }
        get _$AU() {
            return this._$AM._$AU;
        }
        _$AI(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, r1 = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, s = this.strings, a = !1;
            if (void 0 === s) t = P(this, t, e, 0), (a = !r$1(t) || t !== this._$AH && t !== b) && (this._$AH = t);
            else {
                var n, o, h = t;
                for(t = s[0], n = 0; n < s.length - 1; n++)(o = P(this, h[r1 + n], e, n)) === b && (o = this._$AH[n]), a || (a = !r$1(o) || o !== this._$AH[n]), o === w ? t = w : t !== w && (t += (null != o ? o : "") + s[n + 1]), this._$AH[n] = o;
            }
            a && !i && this.k(t);
        }
        k(t) {
            t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
        }
    }
    class M extends S {
        constructor(){
            super(...arguments), this.type = 3;
        }
        k(t) {
            this.element[this.name] = t === w ? void 0 : t;
        }
    }
    var k = i$2 ? i$2.emptyScript : "";
    class H extends S {
        constructor(){
            super(...arguments), this.type = 4;
        }
        k(t) {
            t && t !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
        }
    }
    class I extends S {
        constructor(t, e, r1, i, s){
            super(t, e, r1, i, s), this.type = 5;
        }
        _$AI(t) {
            var e;
            if ((t = null !== (e = P(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== e ? e : w) !== b) {
                var r1 = this._$AH, i = t === w && r1 !== w || t.capture !== r1.capture || t.once !== r1.once || t.passive !== r1.passive, s = t !== w && (r1 === w || i);
                i && this.element.removeEventListener(this.name, this, r1), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
            }
        }
        handleEvent(t) {
            var e, r1;
            "function" == typeof this._$AH ? this._$AH.call(null !== (r1 = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== r1 ? r1 : this.element, t) : this._$AH.handleEvent(t);
        }
    }
    class L {
        constructor(t, e, r1){
            this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r1;
        }
        get _$AU() {
            return this._$AM._$AU;
        }
        _$AI(t) {
            P(this, t);
        }
    }
    var R = {
        P: "$lit$",
        V: e$6,
        L: o$3,
        I: 1,
        N: C,
        R: V,
        D: u,
        j: P,
        H: N,
        O: S,
        F: H,
        B: I,
        W: M,
        Z: L
    }, z = window.litHtmlPolyfillSupport, l$1, o$2;
    null == z || z(E, N), (null !== (t$2 = globalThis.litHtmlVersions) && void 0 !== t$2 ? t$2 : globalThis.litHtmlVersions = []).push("2.1.2");
    var r = a$1;
    class s extends a$1 {
        constructor(){
            super(...arguments), this.renderOptions = {
                host: this
            }, this._$Dt = void 0;
        }
        createRenderRoot() {
            var t, e, r1 = super.createRenderRoot();
            return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r1.firstChild), r1;
        }
        update(t) {
            var e = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Dt = x(e, this.renderRoot, this.renderOptions);
        }
        connectedCallback() {
            var t;
            super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
        }
        disconnectedCallback() {
            var t;
            super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
        }
        render() {
            return b;
        }
    }
    s.finalized = !0, s._$litElement$ = !0, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, {
        LitElement: s
    });
    var n$2 = globalThis.litElementPolyfillSupport;
    null == n$2 || n$2({
        LitElement: s
    });
    var h = {
        _$AK: (t, e, r1)=>{
            t._$AK(e, r1);
        },
        _$AL: (t)=>t._$AL
    };
    (null !== (o$2 = globalThis.litElementVersions) && void 0 !== o$2 ? o$2 : globalThis.litElementVersions = []).push("3.1.2");
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var n$1 = (t)=>(e)=>"function" == typeof e ? ((t, e)=>(window.customElements.define(t, e), e))(t, e) : ((t, e)=>{
                var { kind: r1 , elements: i  } = e;
                return {
                    kind: r1,
                    elements: i,
                    finisher (e) {
                        window.customElements.define(t, e);
                    }
                };
            })(t, e), i$1 = (t, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? _objectSpread2(_objectSpread2({}, e), {}, {
            finisher (r1) {
                r1.createProperty(e.key, t);
            }
        }) : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: e.key,
            initializer () {
                "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
            },
            finisher (r1) {
                r1.createProperty(e.key, t);
            }
        };
    function e$5(t) {
        return (e, r1)=>void 0 !== r1 ? ((t, e, r1)=>{
                e.constructor.createProperty(r1, t);
            })(t, e, r1) : i$1(t, e);
    }
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function t$1(t) {
        return e$5(_objectSpread2(_objectSpread2({}, t), {}, {
            state: !0
        }));
    }
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var e$4 = (t, e, r1)=>{
        Object.defineProperty(e, r1, t);
    }, t = (t, e)=>({
            kind: "method",
            placement: "prototype",
            key: e.key,
            descriptor: t
        }), o$1 = (t)=>{
        var { finisher: e , descriptor: r1  } = t;
        return (t, i)=>{
            var s;
            if (void 0 === i) {
                var a = null !== (s = t.originalKey) && void 0 !== s ? s : t.key, n = null != r1 ? {
                    kind: "method",
                    placement: "prototype",
                    key: a,
                    descriptor: r1(t.key)
                } : _objectSpread2(_objectSpread2({}, t), {}, {
                    key: a
                });
                return null != e && (n.finisher = function(t) {
                    e(t, a);
                }), n;
            }
            var o = t.constructor;
            void 0 !== r1 && Object.defineProperty(t, i, r1(i)), null == e || e(o, i);
        };
    }, n;
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$3(t) {
        return o$1({
            finisher: (e, r1)=>{
                Object.assign(e.prototype[r1], t);
            }
        });
    }
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function i(t, e) {
        return o$1({
            descriptor: (r1)=>{
                var i = {
                    get () {
                        var e, r1;
                        return null !== (r1 = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(t)) && void 0 !== r1 ? r1 : null;
                    },
                    enumerable: !0,
                    configurable: !0
                };
                if (e) {
                    var s = "symbol" == typeof r1 ? Symbol() : "__" + r1;
                    i.get = function() {
                        var e, r1;
                        return void 0 === this[s] && (this[s] = null !== (r1 = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(t)) && void 0 !== r1 ? r1 : null), this[s];
                    };
                }
                return i;
            }
        });
    }
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$2(t) {
        return o$1({
            descriptor: (e)=>({
                    get () {
                        var e, r1;
                        return null !== (r1 = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelectorAll(t)) && void 0 !== r1 ? r1 : [];
                    },
                    enumerable: !0,
                    configurable: !0
                })
        });
    }
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$1(t) {
        return o$1({
            descriptor: (e)=>({
                    get () {
                        var e = this;
                        return _asyncToGenerator(function*() {
                            var r1;
                            return yield e.updateComplete, null === (r1 = e.renderRoot) || void 0 === r1 ? void 0 : r1.querySelector(t);
                        })();
                    },
                    enumerable: !0,
                    configurable: !0
                })
        });
    }
    /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (t, e)=>t.assignedElements(e) : (t, e)=>t.assignedNodes(e).filter((t)=>t.nodeType === Node.ELEMENT_NODE);
    function l(t) {
        var { slot: r1 , selector: i  } = null != t ? t : {};
        return o$1({
            descriptor: (s)=>({
                    get () {
                        var s, a = "slot" + (r1 ? "[name=".concat(r1, "]") : ":not([name])"), n = null === (s = this.renderRoot) || void 0 === s ? void 0 : s.querySelector(a), o = null != n ? e(n, t) : [];
                        return i ? o.filter((t)=>t.matches(i)) : o;
                    },
                    enumerable: !0,
                    configurable: !0
                })
        });
    }
    /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function o(t, e, r1) {
        var i, s = t;
        return "object" == typeof t ? (s = t.slot, i = t) : i = {
            flatten: e
        }, r1 ? l({
            slot: s,
            flatten: e,
            selector: r1
        }) : o$1({
            descriptor: (t)=>({
                    get () {
                        var t, e, r1 = "slot" + (s ? "[name=".concat(s, "]") : ":not([name])"), a = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(r1);
                        return null !== (e = null == a ? void 0 : a.assignedNodes(i)) && void 0 !== e ? e : [];
                    },
                    enumerable: !0,
                    configurable: !0
                })
        });
    }
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function getDefaultExportFromCjs(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    function getDefaultExportFromNamespaceIfPresent(t) {
        return t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    function getDefaultExportFromNamespaceIfNotNamed(t) {
        return t && Object.prototype.hasOwnProperty.call(t, "default") && 1 === Object.keys(t).length ? t.default : t;
    }
    function getAugmentedNamespace(t) {
        if (t.__esModule) return t;
        var e = Object.defineProperty({}, "__esModule", {
            value: !0
        });
        return Object.keys(t).forEach(function(r1) {
            var i = Object.getOwnPropertyDescriptor(t, r1);
            Object.defineProperty(e, r1, i.get ? i : {
                enumerable: !0,
                get: function() {
                    return t[r1];
                }
            });
        }), e;
    }
    function commonjsRequire(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }
    var lottie$1 = {
        exports: {}
    };
    (function(module, exports) {
        var factory;
        "undefined" != typeof navigator && (factory = function() {
            var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(t) {
                _useWebWorker = !!t;
            }, getWebWorker = function() {
                return _useWebWorker;
            }, setLocationHref = function(t) {
                locationHref = t;
            }, getLocationHref = function() {
                return locationHref;
            };
            function createTag(t) {
                return document.createElement(t);
            }
            function extendPrototype(t, e) {
                var r1, i, s = t.length;
                for(r1 = 0; r1 < s; r1 += 1)for(var a in i = t[r1].prototype)Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a]);
            }
            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e);
            }
            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t, e;
            }
            var audioControllerFactory = function() {
                function t(t) {
                    this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1;
                }
                return t.prototype = {
                    addAudio: function(t) {
                        this.audios.push(t);
                    },
                    pause: function() {
                        var t, e = this.audios.length;
                        for(t = 0; t < e; t += 1)this.audios[t].pause();
                    },
                    resume: function() {
                        var t, e = this.audios.length;
                        for(t = 0; t < e; t += 1)this.audios[t].resume();
                    },
                    setRate: function(t) {
                        var e, r1 = this.audios.length;
                        for(e = 0; e < r1; e += 1)this.audios[e].setRate(t);
                    },
                    createAudio: function(t) {
                        return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                            src: [
                                t
                            ]
                        }) : {
                            isPlaying: !1,
                            play: function() {
                                this.isPlaying = !0;
                            },
                            seek: function() {
                                this.isPlaying = !1;
                            },
                            playing: function() {},
                            rate: function() {},
                            setVolume: function() {}
                        };
                    },
                    setAudioFactory: function(t) {
                        this.audioFactory = t;
                    },
                    setVolume: function(t) {
                        this._volume = t, this._updateVolume();
                    },
                    mute: function() {
                        this._isMuted = !0, this._updateVolume();
                    },
                    unmute: function() {
                        this._isMuted = !1, this._updateVolume();
                    },
                    getVolume: function() {
                        return this._volume;
                    },
                    _updateVolume: function() {
                        var t, e = this.audios.length;
                        for(t = 0; t < e; t += 1)this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
                    }
                }, function() {
                    return new t;
                };
            }(), createTypedArray = function() {
                function t(t, e) {
                    var r1, i = 0, s = [];
                    switch(t){
                        case "int16":
                        case "uint8c":
                            r1 = 1;
                            break;
                        default:
                            r1 = 1.1;
                    }
                    for(i = 0; i < e; i += 1)s.push(r1);
                    return s;
                }
                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r1) {
                    return "float32" === e ? new Float32Array(r1) : "int16" === e ? new Int16Array(r1) : "uint8c" === e ? new Uint8ClampedArray(r1) : t(e, r1);
                } : t;
            }();
            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                });
            }
            function _typeof$6(t) {
                return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof$6(t);
            }
            var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), _shouldRoundValues = !1, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
            function ProjectInterface$1() {
                return {};
            }
            !function() {
                var t, e = [
                    "abs",
                    "acos",
                    "acosh",
                    "asin",
                    "asinh",
                    "atan",
                    "atanh",
                    "atan2",
                    "ceil",
                    "cbrt",
                    "expm1",
                    "clz32",
                    "cos",
                    "cosh",
                    "exp",
                    "floor",
                    "fround",
                    "hypot",
                    "imul",
                    "log",
                    "log1p",
                    "log2",
                    "log10",
                    "max",
                    "min",
                    "pow",
                    "random",
                    "round",
                    "sign",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                    "trunc",
                    "E",
                    "LN10",
                    "LN2",
                    "LOG10E",
                    "LOG2E",
                    "PI",
                    "SQRT1_2",
                    "SQRT2"
                ], r1 = e.length;
                for(t = 0; t < r1; t += 1)BMMath[e[t]] = Math[e[t]];
            }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                if ("object" === _typeof$6(t) && t.length) {
                    var e, r1 = createSizedArray(t.length), i = t.length;
                    for(e = 0; e < i; e += 1)r1[e] = Math.abs(t[e]);
                    return r1;
                }
                return Math.abs(t);
            };
            var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
            function roundValues(t) {
                _shouldRoundValues = !!t;
            }
            function bmRnd(t) {
                return _shouldRoundValues ? Math.round(t) : t;
            }
            function styleDiv(t) {
                t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
            }
            function BMEnterFrameEvent(t, e, r1, i) {
                this.type = t, this.currentTime = e, this.totalTime = r1, this.direction = i < 0 ? -1 : 1;
            }
            function BMCompleteEvent(t, e) {
                this.type = t, this.direction = e < 0 ? -1 : 1;
            }
            function BMCompleteLoopEvent(t, e, r1, i) {
                this.type = t, this.currentLoop = r1, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
            }
            function BMSegmentStartEvent(t, e, r1) {
                this.type = t, this.firstFrame = e, this.totalFrames = r1;
            }
            function BMDestroyEvent(t, e) {
                this.type = t, this.target = e;
            }
            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
            }
            function BMConfigErrorEvent(t) {
                this.type = "configError", this.nativeError = t;
            }
            function BMAnimationConfigErrorEvent(t, e) {
                this.type = t, this.nativeError = e;
            }
            var createElementID = (_count = 0, function() {
                return idPrefix$1 + "__lottie_element_" + (_count += 1);
            }), _count;
            function HSVtoRGB(t, e, r1) {
                var i, s, a, n, o, h, l, p;
                switch(h = r1 * (1 - e), l = r1 * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r1 * (1 - (1 - o) * e), n % 6){
                    case 0:
                        i = r1, s = p, a = h;
                        break;
                    case 1:
                        i = l, s = r1, a = h;
                        break;
                    case 2:
                        i = h, s = r1, a = p;
                        break;
                    case 3:
                        i = h, s = l, a = r1;
                        break;
                    case 4:
                        i = p, s = h, a = r1;
                        break;
                    case 5:
                        i = r1, s = h, a = l;
                }
                return [
                    i,
                    s,
                    a
                ];
            }
            function RGBtoHSV(t, e, r1) {
                var i, s = Math.max(t, e, r1), a = Math.min(t, e, r1), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
                switch(s){
                    case a:
                        i = 0;
                        break;
                    case t:
                        i = e - r1 + n * (e < r1 ? 6 : 0), i /= 6 * n;
                        break;
                    case e:
                        i = r1 - t + 2 * n, i /= 6 * n;
                        break;
                    case r1:
                        i = t - e + 4 * n, i /= 6 * n;
                }
                return [
                    i,
                    o,
                    h
                ];
            }
            function addSaturationToRGB(t, e) {
                var r1 = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r1[1] += e, r1[1] > 1 ? r1[1] = 1 : r1[1] <= 0 && (r1[1] = 0), HSVtoRGB(r1[0], r1[1], r1[2]);
            }
            function addBrightnessToRGB(t, e) {
                var r1 = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r1[2] += e, r1[2] > 1 ? r1[2] = 1 : r1[2] < 0 && (r1[2] = 0), HSVtoRGB(r1[0], r1[1], r1[2]);
            }
            function addHueToRGB(t, e) {
                var r1 = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r1[0] += e / 360, r1[0] > 1 ? r1[0] -= 1 : r1[0] < 0 && (r1[0] += 1), HSVtoRGB(r1[0], r1[1], r1[2]);
            }
            var rgbToHex = function() {
                var t, e, r1 = [];
                for(t = 0; t < 256; t += 1)e = t.toString(16), r1[t] = 1 === e.length ? "0" + e : e;
                return function(t, e, i) {
                    return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r1[t] + r1[e] + r1[i];
                };
            }(), setSubframeEnabled = function(t) {
                subframeEnabled = !!t;
            }, getSubframeEnabled = function() {
                return subframeEnabled;
            }, setExpressionsPlugin = function(t) {
                expressionsPlugin = t;
            }, getExpressionsPlugin = function() {
                return expressionsPlugin;
            }, setExpressionInterfaces = function(t) {
                expressionsInterfaces = t;
            }, getExpressionInterfaces = function() {
                return expressionsInterfaces;
            }, setDefaultCurveSegments = function(t) {
                defaultCurveSegments = t;
            }, getDefaultCurveSegments = function() {
                return defaultCurveSegments;
            }, setIdPrefix = function(t) {
                idPrefix$1 = t;
            }, getIdPrefix = function() {
                return idPrefix$1;
            };
            function createNS(t) {
                return document.createElementNS(svgNS, t);
            }
            function _typeof$5(t) {
                return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof$5(t);
            }
            var dataManager = function() {
                var t, e, r1 = 1, i = [], s = {
                    onmessage: function() {},
                    postMessage: function(e) {
                        t({
                            data: e
                        });
                    }
                }, _workerSelf = {
                    postMessage: function(t) {
                        s.onmessage({
                            data: t
                        });
                    }
                };
                function a() {
                    e || (e = function(e) {
                        if (window.Worker && window.Blob && getWebWorker()) {
                            var r1 = new Blob([
                                "var _workerSelf = self; self.onmessage = ",
                                e.toString()
                            ], {
                                type: "text/javascript"
                            }), i = URL.createObjectURL(r1);
                            return new Worker(i);
                        }
                        return t = e, s;
                    }(function(t) {
                        if (_workerSelf.dataManager || (_workerSelf.dataManager = function() {
                            function t(s, a) {
                                var n, o, h, l, p, f, d = s.length;
                                for(o = 0; o < d; o += 1)if ("ks" in (n = s[o]) && !n.completed) {
                                    if (n.completed = !0, n.hasMask) {
                                        var u = n.masksProperties;
                                        for(l = u.length, h = 0; h < l; h += 1)if (u[h].pt.k.i) i(u[h].pt.k);
                                        else for(f = u[h].pt.k.length, p = 0; p < f; p += 1)u[h].pt.k[p].s && i(u[h].pt.k[p].s[0]), u[h].pt.k[p].e && i(u[h].pt.k[p].e[0]);
                                    }
                                    0 === n.ty ? (n.layers = e(n.refId, a), t(n.layers, a)) : 4 === n.ty ? r1(n.shapes) : 5 === n.ty && c(n);
                                }
                            }
                            function e(t, e) {
                                var r1 = function(t, e) {
                                    for(var r1 = 0, i = e.length; r1 < i;){
                                        if (e[r1].id === t) return e[r1];
                                        r1 += 1;
                                    }
                                    return null;
                                }(t, e);
                                return r1 ? r1.layers.__used ? JSON.parse(JSON.stringify(r1.layers)) : (r1.layers.__used = !0, r1.layers) : null;
                            }
                            function r1(t) {
                                var e, s, a;
                                for(e = t.length - 1; e >= 0; e -= 1)if ("sh" === t[e].ty) {
                                    if (t[e].ks.k.i) i(t[e].ks.k);
                                    else for(a = t[e].ks.k.length, s = 0; s < a; s += 1)t[e].ks.k[s].s && i(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && i(t[e].ks.k[s].e[0]);
                                } else "gr" === t[e].ty && r1(t[e].it);
                            }
                            function i(t) {
                                var e, r1 = t.i.length;
                                for(e = 0; e < r1; e += 1)t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1];
                            }
                            function s(t, e) {
                                var r1 = e ? e.split(".") : [
                                    100,
                                    100,
                                    100
                                ];
                                return t[0] > r1[0] || !(r1[0] > t[0]) && (t[1] > r1[1] || !(r1[1] > t[1]) && (t[2] > r1[2] || !(r1[2] > t[2]) && null));
                            }
                            var a, n = function() {
                                var t = [
                                    4,
                                    4,
                                    14
                                ];
                                function e(t) {
                                    var e, r1, i, s = t.length;
                                    for(e = 0; e < s; e += 1)5 === t[e].ty && (i = void 0, i = (r1 = t[e]).t.d, r1.t.d = {
                                        k: [
                                            {
                                                s: i,
                                                t: 0
                                            }
                                        ]
                                    });
                                }
                                return function(r1) {
                                    if (s(t, r1.v) && (e(r1.layers), r1.assets)) {
                                        var i, a = r1.assets.length;
                                        for(i = 0; i < a; i += 1)r1.assets[i].layers && e(r1.assets[i].layers);
                                    }
                                };
                            }(), o = (a = [
                                4,
                                7,
                                99
                            ], function(t) {
                                if (t.chars && !s(a, t.v)) {
                                    var e, i = t.chars.length;
                                    for(e = 0; e < i; e += 1){
                                        var n = t.chars[e];
                                        n.data && n.data.shapes && (r1(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                                            p: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            s: {
                                                k: [
                                                    100,
                                                    100
                                                ],
                                                a: 0
                                            },
                                            a: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            }
                                        }, t.chars[e].t || (n.data.shapes.push({
                                            ty: "no"
                                        }), n.data.shapes[0].it.push({
                                            p: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            s: {
                                                k: [
                                                    100,
                                                    100
                                                ],
                                                a: 0
                                            },
                                            a: {
                                                k: [
                                                    0,
                                                    0
                                                ],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            },
                                            sk: {
                                                k: 0,
                                                a: 0
                                            },
                                            sa: {
                                                k: 0,
                                                a: 0
                                            },
                                            ty: "tr"
                                        })));
                                    }
                                }
                            }), h = function() {
                                var t = [
                                    5,
                                    7,
                                    15
                                ];
                                function e(t) {
                                    var e, r1, i = t.length;
                                    for(e = 0; e < i; e += 1)5 === t[e].ty && (r1 = void 0, "number" == typeof (r1 = t[e].t.p).a && (r1.a = {
                                        a: 0,
                                        k: r1.a
                                    }), "number" == typeof r1.p && (r1.p = {
                                        a: 0,
                                        k: r1.p
                                    }), "number" == typeof r1.r && (r1.r = {
                                        a: 0,
                                        k: r1.r
                                    }));
                                }
                                return function(r1) {
                                    if (s(t, r1.v) && (e(r1.layers), r1.assets)) {
                                        var i, a = r1.assets.length;
                                        for(i = 0; i < a; i += 1)r1.assets[i].layers && e(r1.assets[i].layers);
                                    }
                                };
                            }(), l = function() {
                                var t = [
                                    4,
                                    1,
                                    9
                                ];
                                function e(t) {
                                    var r1, i, s, a = t.length;
                                    for(r1 = 0; r1 < a; r1 += 1)if ("gr" === t[r1].ty) e(t[r1].it);
                                    else if ("fl" === t[r1].ty || "st" === t[r1].ty) {
                                        if (t[r1].c.k && t[r1].c.k[0].i) for(s = t[r1].c.k.length, i = 0; i < s; i += 1)t[r1].c.k[i].s && (t[r1].c.k[i].s[0] /= 255, t[r1].c.k[i].s[1] /= 255, t[r1].c.k[i].s[2] /= 255, t[r1].c.k[i].s[3] /= 255), t[r1].c.k[i].e && (t[r1].c.k[i].e[0] /= 255, t[r1].c.k[i].e[1] /= 255, t[r1].c.k[i].e[2] /= 255, t[r1].c.k[i].e[3] /= 255);
                                        else t[r1].c.k[0] /= 255, t[r1].c.k[1] /= 255, t[r1].c.k[2] /= 255, t[r1].c.k[3] /= 255;
                                    }
                                }
                                function r1(t) {
                                    var r1, i = t.length;
                                    for(r1 = 0; r1 < i; r1 += 1)4 === t[r1].ty && e(t[r1].shapes);
                                }
                                return function(e) {
                                    if (s(t, e.v) && (r1(e.layers), e.assets)) {
                                        var i, a = e.assets.length;
                                        for(i = 0; i < a; i += 1)e.assets[i].layers && r1(e.assets[i].layers);
                                    }
                                };
                            }(), p = function() {
                                var t = [
                                    4,
                                    4,
                                    18
                                ];
                                function e(t) {
                                    var r1, i, s;
                                    for(r1 = t.length - 1; r1 >= 0; r1 -= 1)if ("sh" === t[r1].ty) {
                                        if (t[r1].ks.k.i) t[r1].ks.k.c = t[r1].closed;
                                        else for(s = t[r1].ks.k.length, i = 0; i < s; i += 1)t[r1].ks.k[i].s && (t[r1].ks.k[i].s[0].c = t[r1].closed), t[r1].ks.k[i].e && (t[r1].ks.k[i].e[0].c = t[r1].closed);
                                    } else "gr" === t[r1].ty && e(t[r1].it);
                                }
                                function r1(t) {
                                    var r1, i, s, a, n, o, h = t.length;
                                    for(i = 0; i < h; i += 1){
                                        if ((r1 = t[i]).hasMask) {
                                            var l = r1.masksProperties;
                                            for(a = l.length, s = 0; s < a; s += 1)if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                            else for(o = l[s].pt.k.length, n = 0; n < o; n += 1)l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl), l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl);
                                        }
                                        4 === r1.ty && e(r1.shapes);
                                    }
                                }
                                return function(e) {
                                    if (s(t, e.v) && (r1(e.layers), e.assets)) {
                                        var i, a = e.assets.length;
                                        for(i = 0; i < a; i += 1)e.assets[i].layers && r1(e.assets[i].layers);
                                    }
                                };
                            }();
                            function c(t) {
                                0 === t.t.a.length && t.t.p;
                            }
                            var f = {
                                completeData: function(r1) {
                                    r1.__complete || (l(r1), n(r1), o(r1), h(r1), p(r1), t(r1.layers, r1.assets), function(r1, i) {
                                        if (r1) {
                                            var s = 0, a = r1.length;
                                            for(s = 0; s < a; s += 1)1 === r1[s].t && (r1[s].data.layers = e(r1[s].data.refId, i), t(r1[s].data.layers, i));
                                        }
                                    }(r1.chars, r1.assets), r1.__complete = !0);
                                }
                            };
                            return f.checkColors = l, f.checkChars = o, f.checkPathProperties = h, f.checkShapes = p, f.completeLayers = t, f;
                        }()), _workerSelf.assetLoader || (_workerSelf.assetLoader = function() {
                            function t(t) {
                                var e = t.getResponseHeader("content-type");
                                return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null;
                            }
                            return {
                                load: function(e, r1, i, s) {
                                    var a, n = new XMLHttpRequest;
                                    try {
                                        n.responseType = "json";
                                    } catch (t) {}
                                    n.onreadystatechange = function() {
                                        if (4 === n.readyState) {
                                            if (200 === n.status) a = t(n), i(a);
                                            else try {
                                                a = t(n), i(a);
                                            } catch (t) {
                                                s && s(t);
                                            }
                                        }
                                    };
                                    try {
                                        n.open([
                                            "G",
                                            "E",
                                            "T"
                                        ].join(""), e, !0);
                                    } catch (t) {
                                        n.open([
                                            "G",
                                            "E",
                                            "T"
                                        ].join(""), r1 + "/" + e, !0);
                                    }
                                    n.send();
                                }
                            };
                        }()), "loadAnimation" === t.data.type) _workerSelf.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                            _workerSelf.dataManager.completeData(e), _workerSelf.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            });
                        }, function() {
                            _workerSelf.postMessage({
                                id: t.data.id,
                                status: "error"
                            });
                        });
                        else if ("complete" === t.data.type) {
                            var e = t.data.animation;
                            _workerSelf.dataManager.completeData(e), _workerSelf.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            });
                        } else "loadData" === t.data.type && _workerSelf.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                            _workerSelf.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            });
                        }, function() {
                            _workerSelf.postMessage({
                                id: t.data.id,
                                status: "error"
                            });
                        });
                    }), e.onmessage = function(t) {
                        var e = t.data, r1 = e.id, s = i[r1];
                        i[r1] = null, "success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError();
                    });
                }
                function n(t, e) {
                    var s = "processId_" + (r1 += 1);
                    return i[s] = {
                        onComplete: t,
                        onError: e
                    }, s;
                }
                return {
                    loadAnimation: function(t, r1, i) {
                        a();
                        var s = n(r1, i);
                        e.postMessage({
                            type: "loadAnimation",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: s
                        });
                    },
                    loadData: function(t, r1, i) {
                        a();
                        var s = n(r1, i);
                        e.postMessage({
                            type: "loadData",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: s
                        });
                    },
                    completeAnimation: function(t, r1, i) {
                        a();
                        var s = n(r1, i);
                        e.postMessage({
                            type: "complete",
                            animation: t,
                            id: s
                        });
                    }
                };
            }(), ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t;
                }();
                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                }
                function r1() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                }
                function i(t, e, r1) {
                    var i = "";
                    if (t.e) i = t.p;
                    else if (e) {
                        var s = t.p;
                        -1 !== s.indexOf("images/") && (s = s.split("/")[1]), i = e + s;
                    } else i = r1, i += t.u ? t.u : "", i += t.p;
                    return i;
                }
                function s(t) {
                    var e = 0, r1 = setInterval((function() {
                        (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r1)), e += 1;
                    }).bind(this), 50);
                }
                function a(t) {
                    var e = {
                        assetData: t
                    }, r1 = i(t, this.assetsPath, this.path);
                    return dataManager.loadData(r1, (function(t) {
                        e.img = t, this._footageLoaded();
                    }).bind(this), (function() {
                        e.img = {}, this._footageLoaded();
                    }).bind(this)), e;
                }
                function n() {
                    this._imageLoaded = e.bind(this), this._footageLoaded = r1.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
                }
                return n.prototype = {
                    loadAssets: function(t, e) {
                        var r1;
                        this.imagesLoadedCb = e;
                        var i = t.length;
                        for(r1 = 0; r1 < i; r1 += 1)t[r1].layers || (t[r1].t && "seq" !== t[r1].t ? 3 === t[r1].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r1]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r1]))));
                    },
                    setAssetsPath: function(t) {
                        this.assetsPath = t || "";
                    },
                    setPath: function(t) {
                        this.path = t || "";
                    },
                    loadedImages: function() {
                        return this.totalImages === this.loadedAssets;
                    },
                    loadedFootages: function() {
                        return this.totalFootages === this.loadedFootagesCount;
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null, this.images.length = 0;
                    },
                    getAsset: function(t) {
                        for(var e = 0, r1 = this.images.length; e < r1;){
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1;
                        }
                        return null;
                    },
                    createImgData: function(e) {
                        var r1 = i(e, this.assetsPath, this.path), s = createTag("img");
                        s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", (function() {
                            a.img = t, this._imageLoaded();
                        }).bind(this), !1), s.src = r1;
                        var a = {
                            img: s,
                            assetData: e
                        };
                        return a;
                    },
                    createImageData: function(e) {
                        var r1 = i(e, this.assetsPath, this.path), s = createNS("image");
                        isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", (function() {
                            a.img = t, this._imageLoaded();
                        }).bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r1), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                        var a = {
                            img: s,
                            assetData: e
                        };
                        return a;
                    },
                    imageLoaded: e,
                    footageLoaded: r1,
                    setCacheType: function(t, e) {
                        "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
                    }
                }, n;
            }();
            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t]) for(var r1 = this._cbs[t], i = 0; i < r1.length; i += 1)r1[i](e);
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                        this.removeEventListener(t, e);
                    }).bind(this);
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for(var r1 = 0, i = this._cbs[t].length; r1 < i;)this._cbs[t][r1] === e && (this._cbs[t].splice(r1, 1), r1 -= 1, i -= 1), r1 += 1;
                            this._cbs[t].length || (this._cbs[t] = null);
                        }
                    } else this._cbs[t] = null;
                }
            };
            var markerParser = function() {
                function t(t) {
                    for(var e, r1 = t.split("\r\n"), i = {}, s = 0, a = 0; a < r1.length; a += 1)2 === (e = r1[a].split(":")).length && (i[e[0]] = e[1].trim(), s += 1);
                    if (0 === s) throw new Error;
                    return i;
                }
                return function(e) {
                    for(var r1 = [], i = 0; i < e.length; i += 1){
                        var s = e[i], a = {
                            time: s.tm,
                            duration: s.dr
                        };
                        try {
                            a.payload = JSON.parse(e[i].cm);
                        } catch (r1) {
                            try {
                                a.payload = t(e[i].cm);
                            } catch (t) {
                                a.payload = {
                                    name: e[i].cm
                                };
                            }
                        }
                        r1.push(a);
                    }
                    return r1;
                };
            }(), ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t);
                }
                return function() {
                    function e(t) {
                        for(var e = 0, r1 = this.compositions.length; e < r1;){
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1;
                        }
                        return null;
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
                };
            }(), renderers = {}, registerRenderer = function(t, e) {
                renderers[t] = e;
            };
            function getRenderer(t) {
                return renderers[t];
            }
            function _typeof$4(t) {
                return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof$4(t);
            }
            var AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
            };
            extendPrototype([
                BaseEvent
            ], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                var r1 = getRenderer(e);
                this.renderer = new r1(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
            }, AnimationItem.prototype.onSetupError = function() {
                this.trigger("data_failed");
            }, AnimationItem.prototype.setupAnimation = function(t) {
                dataManager.completeAnimation(t, this.configAnimation);
            }, AnimationItem.prototype.setData = function(t, e) {
                e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                var r1 = {
                    wrapper: t,
                    animationData: e
                }, i = t.attributes;
                r1.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r1.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                "false" === s ? r1.loop = !1 : "true" === s ? r1.loop = !0 : "" !== s && (r1.loop = parseInt(s, 10));
                var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                r1.autoplay = "false" !== a, r1.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r1.prerender = !1), this.setParams(r1);
            }, AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, r1, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length;
                for(r1 = 0; r1 < n; r1 += 1)for(e = 0; e < s;){
                    if (i[e].id === a[r1].id) {
                        i[e] = a[r1];
                        break;
                    }
                    e += 1;
                }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(s = t.assets.length, e = 0; e < s; e += 1)this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
            }, AnimationItem.prototype.onSegmentComplete = function(t) {
                this.animationData = t;
                var e = getExpressionsPlugin();
                e && e.initExpressions(this), this.loadNextSegment();
            }, AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var r1 = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, dataManager.loadData(r1, this.includeLayers.bind(this), (function() {
                    this.trigger("data_failed");
                }).bind(this));
            }, AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
            }, AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded();
            }, AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
            }, AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer) try {
                    this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
                } catch (t) {
                    this.triggerConfigError(t);
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }, AnimationItem.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var t = getExpressionsPlugin();
                    t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                        this.trigger("DOMLoaded");
                    }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
                }
            }, AnimationItem.prototype.resize = function(t, e) {
                var r1 = "number" == typeof t ? t : void 0, i = "number" == typeof e ? e : void 0;
                this.renderer.updateContainerSize(r1, i);
            }, AnimationItem.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t;
            }, AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
            }, AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded && this.renderer) try {
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                } catch (t) {
                    this.triggerRenderFrameError(t);
                }
            }, AnimationItem.prototype.play = function(t) {
                t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
            }, AnimationItem.prototype.pause = function(t) {
                t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
            }, AnimationItem.prototype.togglePause = function(t) {
                t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause());
            }, AnimationItem.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
            }, AnimationItem.prototype.getMarkerData = function(t) {
                for(var e, r1 = 0; r1 < this.markers.length; r1 += 1)if ((e = this.markers[r1]).payload && e.payload.name === t) return e;
                return null;
            }, AnimationItem.prototype.goToAndStop = function(t, e, r1) {
                if (!r1 || this.name === r1) {
                    var i = Number(t);
                    if (isNaN(i)) {
                        var s = this.getMarkerData(t);
                        s && this.goToAndStop(s.time, !0);
                    } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause();
                }
            }, AnimationItem.prototype.goToAndPlay = function(t, e, r1) {
                if (!r1 || this.name === r1) {
                    var i = Number(t);
                    if (isNaN(i)) {
                        var s = this.getMarkerData(t);
                        s && (s.duration ? this.playSegments([
                            s.time,
                            s.time + s.duration
                        ], !0) : this.goToAndStop(s.time, !0));
                    } else this.goToAndStop(i, e, r1);
                    this.play();
                }
            }, AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier, r1 = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r1 = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r1 = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r1 && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
                }
            }, AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
            }, AnimationItem.prototype.setSegment = function(t, e) {
                var r1 = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r1 = t : this.currentRawFrame + this.firstFrame > e && (r1 = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r1 && this.goToAndStop(r1, !0);
            }, AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                    var r1, i = t.length;
                    for(r1 = 0; r1 < i; r1 += 1)this.segments.push(t[r1]);
                } else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
            }, AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0, this.segments.push([
                    this.animationData.ip,
                    this.animationData.op
                ]), t && this.checkSegments(0);
            }, AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
            }, AnimationItem.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t, this.gotoFrame();
            }, AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t, this.updaFrameModifier();
            }, AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
            }, AnimationItem.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t);
            }, AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume();
            }, AnimationItem.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute();
            }, AnimationItem.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute();
            }, AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
            }, AnimationItem.prototype.getPath = function() {
                return this.path;
            }, AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                    var r1 = t.p;
                    -1 !== r1.indexOf("images/") && (r1 = r1.split("/")[1]), e = this.assetsPath + r1;
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e;
            }, AnimationItem.prototype.getAssetData = function(t) {
                for(var e = 0, r1 = this.assets.length; e < r1;){
                    if (t === this.assets[e].id) return this.assets[e];
                    e += 1;
                }
                return null;
            }, AnimationItem.prototype.hide = function() {
                this.renderer.hide();
            }, AnimationItem.prototype.show = function() {
                this.renderer.show();
            }, AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate;
            }, AnimationItem.prototype.updateDocumentData = function(t, e, r1) {
                try {
                    this.renderer.getElementByPath(t).updateDocumentData(e, r1);
                } catch (t) {}
            }, AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t]) switch(t){
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t);
                }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
            }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
            }, AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
            };
            var animationManager = function() {
                var t = {}, e = [], r1 = 0, i = 0, s = 0, a = !0, n = !1;
                function o(t) {
                    for(var r1 = 0, s = t.target; r1 < i;)e[r1].animation === s && (e.splice(r1, 1), r1 -= 1, i -= 1, s.isPaused || p()), r1 += 1;
                }
                function h(t, r1) {
                    if (!t) return null;
                    for(var s = 0; s < i;){
                        if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
                        s += 1;
                    }
                    var a = new AnimationItem;
                    return c(a, t), a.setData(t, r1), a;
                }
                function l() {
                    s += 1, u();
                }
                function p() {
                    s -= 1;
                }
                function c(t, r1) {
                    t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                        elem: r1,
                        animation: t
                    }), i += 1;
                }
                function f(t) {
                    var o, h = t - r1;
                    for(o = 0; o < i; o += 1)e[o].animation.advanceTime(h);
                    r1 = t, s && !n ? window.requestAnimationFrame(f) : a = !0;
                }
                function d(t) {
                    r1 = t, window.requestAnimationFrame(f);
                }
                function u() {
                    !n && s && a && (window.requestAnimationFrame(d), a = !1);
                }
                return t.registerAnimation = h, t.loadAnimation = function(t) {
                    var e = new AnimationItem;
                    return c(e, null), e.setParams(t), e;
                }, t.setSpeed = function(t, r1) {
                    var s;
                    for(s = 0; s < i; s += 1)e[s].animation.setSpeed(t, r1);
                }, t.setDirection = function(t, r1) {
                    var s;
                    for(s = 0; s < i; s += 1)e[s].animation.setDirection(t, r1);
                }, t.play = function(t) {
                    var r1;
                    for(r1 = 0; r1 < i; r1 += 1)e[r1].animation.play(t);
                }, t.pause = function(t) {
                    var r1;
                    for(r1 = 0; r1 < i; r1 += 1)e[r1].animation.pause(t);
                }, t.stop = function(t) {
                    var r1;
                    for(r1 = 0; r1 < i; r1 += 1)e[r1].animation.stop(t);
                }, t.togglePause = function(t) {
                    var r1;
                    for(r1 = 0; r1 < i; r1 += 1)e[r1].animation.togglePause(t);
                }, t.searchAnimations = function(t, e, r1) {
                    var i, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = s.length;
                    for(i = 0; i < a; i += 1)r1 && s[i].setAttribute("data-bm-type", r1), h(s[i], t);
                    if (e && 0 === a) {
                        r1 || (r1 = "svg");
                        var n = document.getElementsByTagName("body")[0];
                        n.innerText = "";
                        var o = createTag("div");
                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r1), n.appendChild(o), h(o, t);
                    }
                }, t.resize = function() {
                    var t;
                    for(t = 0; t < i; t += 1)e[t].animation.resize();
                }, t.goToAndStop = function(t, r1, s) {
                    var a;
                    for(a = 0; a < i; a += 1)e[a].animation.goToAndStop(t, r1, s);
                }, t.destroy = function(t) {
                    var r1;
                    for(r1 = i - 1; r1 >= 0; r1 -= 1)e[r1].animation.destroy(t);
                }, t.freeze = function() {
                    n = !0;
                }, t.unfreeze = function() {
                    n = !1, u();
                }, t.setVolume = function(t, r1) {
                    var s;
                    for(s = 0; s < i; s += 1)e[s].animation.setVolume(t, r1);
                }, t.mute = function(t) {
                    var r1;
                    for(r1 = 0; r1 < i; r1 += 1)e[r1].animation.mute(t);
                }, t.unmute = function(t) {
                    var r1;
                    for(r1 = 0; r1 < i; r1 += 1)e[r1].animation.unmute(t);
                }, t.getRegisteredAnimations = function() {
                    var t, r1 = e.length, i = [];
                    for(t = 0; t < r1; t += 1)i.push(e[t].animation);
                    return i;
                }, t;
            }(), BezierFactory = function() {
                var t = {
                    getBezierEasing: function(t, r1, i, s, a) {
                        var n = a || ("bez_" + t + "_" + r1 + "_" + i + "_" + s).replace(/\./g, "p");
                        if (e[n]) return e[n];
                        var o = new l([
                            t,
                            r1,
                            i,
                            s
                        ]);
                        return e[n] = o, o;
                    }
                }, e = {}, r1 = .1, i = "function" == typeof Float32Array;
                function s(t, e) {
                    return 1 - 3 * e + 3 * t;
                }
                function a(t, e) {
                    return 3 * e - 6 * t;
                }
                function n(t) {
                    return 3 * t;
                }
                function o(t, e, r1) {
                    return ((s(e, r1) * t + a(e, r1)) * t + n(e)) * t;
                }
                function h(t, e, r1) {
                    return 3 * s(e, r1) * t * t + 2 * a(e, r1) * t + n(e);
                }
                function l(t) {
                    this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this);
                }
                return l.prototype = {
                    get: function(t) {
                        var e = this._p[0], r1 = this._p[1], i = this._p[2], s = this._p[3];
                        return this._precomputed || this._precompute(), e === r1 && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), r1, s);
                    },
                    _precompute: function() {
                        var t = this._p[0], e = this._p[1], r1 = this._p[2], i = this._p[3];
                        this._precomputed = !0, t === e && r1 === i || this._calcSampleValues();
                    },
                    _calcSampleValues: function() {
                        for(var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i)this._mSampleValues[i] = o(i * r1, t, e);
                    },
                    _getTForX: function(t) {
                        for(var e = this._p[0], i = this._p[2], s = this._mSampleValues, a = 0, n = 1; 10 !== n && s[n] <= t; ++n)a += r1;
                        var l = a + (t - s[--n]) / (s[n + 1] - s[n]) * r1, p = h(l, e, i);
                        return p >= .001 ? function(t, e, r1, i) {
                            for(var s = 0; s < 4; ++s){
                                var a = h(e, r1, i);
                                if (0 === a) return e;
                                e -= (o(e, r1, i) - t) / a;
                            }
                            return e;
                        }(t, l, e, i) : 0 === p ? l : function(t, e, r1, i, s) {
                            var a, n, h = 0;
                            do (a = o(n = e + (r1 - e) / 2, i, s) - t) > 0 ? r1 = n : e = n;
                            while (Math.abs(a) > 1e-7 && ++h < 10);
                            return n;
                        }(t, a, a + r1, e, i);
                    }
                }, t;
            }(), pooling = {
                double: function(t) {
                    return t.concat(createSizedArray(t.length));
                }
            }, poolFactory = function(t, e, r1) {
                var i = 0, s = t, a = createSizedArray(s);
                return {
                    newElement: function() {
                        return i ? a[i -= 1] : e();
                    },
                    release: function(t) {
                        i === s && (a = pooling.double(a), s *= 2), r1 && r1(t), a[i] = t, i += 1;
                    }
                };
            }, bezierLengthPool = poolFactory(8, function() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                };
            }), segmentsLengthPool = poolFactory(8, function() {
                return {
                    lengths: [],
                    totalLength: 0
                };
            }, function(t) {
                var e, r1 = t.lengths.length;
                for(e = 0; e < r1; e += 1)bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0;
            });
            function bezFunction() {
                var t = Math;
                function e(t, e, r1, i, s, a) {
                    var n = t * i + e * s + r1 * a - s * i - a * t - r1 * e;
                    return n > -0.001 && n < .001;
                }
                var r1 = function(t, e, r1, i) {
                    var s, a, n, o, h, l, p = getDefaultCurveSegments(), c = 0, f = [], d = [], u = bezierLengthPool.newElement();
                    for(n = r1.length, s = 0; s < p; s += 1){
                        for(h = s / (p - 1), l = 0, a = 0; a < n; a += 1)o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * r1[a] + 3 * (1 - h) * bmPow(h, 2) * i[a] + bmPow(h, 3) * e[a], f[a] = o, null !== d[a] && (l += bmPow(f[a] - d[a], 2)), d[a] = f[a];
                        l && (c += l = bmSqrt(l)), u.percents[s] = h, u.lengths[s] = c;
                    }
                    return u.addedLength = c, u;
                };
                function i(t) {
                    this.segmentLength = 0, this.points = new Array(t);
                }
                function s(t, e) {
                    this.partialLength = t, this.point = e;
                }
                var a, n = (a = {}, function(t, r1, n, o) {
                    var h = (t[0] + "_" + t[1] + "_" + r1[0] + "_" + r1[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                    if (!a[h]) {
                        var l, p, c, f, d, u, m, y = getDefaultCurveSegments(), g = 0, v = null;
                        2 === t.length && (t[0] !== r1[0] || t[1] !== r1[1]) && e(t[0], t[1], r1[0], r1[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r1[0], r1[1], r1[0] + o[0], r1[1] + o[1]) && (y = 2);
                        var b = new i(y);
                        for(c = n.length, l = 0; l < y; l += 1){
                            for(m = createSizedArray(c), d = l / (y - 1), u = 0, p = 0; p < c; p += 1)f = bmPow(1 - d, 3) * t[p] + 3 * bmPow(1 - d, 2) * d * (t[p] + n[p]) + 3 * (1 - d) * bmPow(d, 2) * (r1[p] + o[p]) + bmPow(d, 3) * r1[p], m[p] = f, null !== v && (u += bmPow(m[p] - v[p], 2));
                            g += u = bmSqrt(u), b.points[l] = new s(u, m), v = m;
                        }
                        b.segmentLength = g, a[h] = b;
                    }
                    return a[h];
                });
                function o(t, e) {
                    var r1 = e.percents, i = e.lengths, s = r1.length, a = bmFloor((s - 1) * t), n = t * e.addedLength, o = 0;
                    if (a === s - 1 || 0 === a || n === i[a]) return r1[a];
                    for(var h = i[a] > n ? -1 : 1, l = !0; l;)if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]), l = !1) : a += h, a < 0 || a >= s - 1) {
                        if (a === s - 1) return r1[a];
                        l = !1;
                    }
                    return r1[a] + (r1[a + 1] - r1[a]) * o;
                }
                var h = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) {
                        var e, i = segmentsLengthPool.newElement(), s = t.c, a = t.v, n = t.o, o = t.i, h = t._length, l = i.lengths, p = 0;
                        for(e = 0; e < h - 1; e += 1)l[e] = r1(a[e], a[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                        return s && h && (l[e] = r1(a[e], a[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i;
                    },
                    getNewSegment: function(e, r1, i, s, a, n, l) {
                        a < 0 ? a = 0 : a > 1 && (a = 1);
                        var p, c = o(a, l), f = o(n = n > 1 ? 1 : n, l), d = e.length, u = 1 - c, m = 1 - f, y = u * u * u, g = c * u * u * 3, v = c * c * u * 3, b = c * c * c, _ = u * u * m, P = c * u * m + u * c * m + u * u * f, E = c * c * m + u * c * f + c * u * f, S = c * c * f, x = u * m * m, A = c * m * m + u * f * m + u * m * f, w = c * f * m + u * f * f + c * m * f, C = c * f * f, k = m * m * m, T = f * m * m + m * f * m + m * m * f, D = f * f * m + m * f * f + f * m * f, M = f * f * f;
                        for(p = 0; p < d; p += 1)h[4 * p] = t.round(1e3 * (y * e[p] + g * i[p] + v * s[p] + b * r1[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (_ * e[p] + P * i[p] + E * s[p] + S * r1[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (x * e[p] + A * i[p] + w * s[p] + C * r1[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (k * e[p] + T * i[p] + D * s[p] + M * r1[p])) / 1e3;
                        return h;
                    },
                    getPointInSegment: function(e, r1, i, s, a, n) {
                        var h = o(a, n), l = 1 - h;
                        return [
                            t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * r1[0])) / 1e3,
                            t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * r1[1])) / 1e3
                        ];
                    },
                    buildBezierData: n,
                    pointOnLine2D: e,
                    pointOnLine3D: function(r1, i, s, a, n, o, h, l, p) {
                        if (0 === s && 0 === o && 0 === p) return e(r1, i, a, n, h, l);
                        var c, f = t.sqrt(t.pow(a - r1, 2) + t.pow(n - i, 2) + t.pow(o - s, 2)), d = t.sqrt(t.pow(h - r1, 2) + t.pow(l - i, 2) + t.pow(p - s, 2)), u = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                        return (c = f > d ? f > u ? f - d - u : u - d - f : u > d ? u - d - f : d - f - u) > -0.0001 && c < 1e-4;
                    }
                };
            }
            var bez = bezFunction(), PropertyFactory = function() {
                var t = initialDefaultFrame, e = Math.abs;
                function r1(t, e) {
                    var r1, s = this.offsetTime;
                    "multidimensional" === this.propType && (r1 = createTypedArray("float32", this.pv.length));
                    for(var a, n, o, h, l, p, c, f, d, u = e.lastIndex, m = u, y = this.keyframes.length - 1, g = !0; g;){
                        if (a = this.keyframes[m], n = this.keyframes[m + 1], m === y - 1 && t >= n.t - s) {
                            a.h && (a = n), u = 0;
                            break;
                        }
                        if (n.t - s > t) {
                            u = m;
                            break;
                        }
                        m < y - 1 ? m += 1 : (u = 0, g = !1);
                    }
                    o = this.keyframesMetadata[m] || {};
                    var v, b, _, P, E, S, x, A, w, C, k = n.t - s, T = a.t - s;
                    if (a.to) {
                        o.bezierData || (o.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
                        var D = o.bezierData;
                        if (t >= k || t < T) {
                            var M = t >= k ? D.points.length - 1 : 0;
                            for(l = D.points[M].point.length, h = 0; h < l; h += 1)r1[h] = D.points[M].point[h];
                        } else {
                            o.__fnct ? d = o.__fnct : (d = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, o.__fnct = d), p = d((t - T) / (k - T));
                            var F, I = D.segmentLength * p, R = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                            for(f = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, g = !0, c = D.points.length; g;){
                                if (R += D.points[f].partialLength, 0 === I || 0 === p || f === D.points.length - 1) {
                                    for(l = D.points[f].point.length, h = 0; h < l; h += 1)r1[h] = D.points[f].point[h];
                                    break;
                                }
                                if (I >= R && I < R + D.points[f + 1].partialLength) {
                                    for(F = (I - R) / D.points[f + 1].partialLength, l = D.points[f].point.length, h = 0; h < l; h += 1)r1[h] = D.points[f].point[h] + (D.points[f + 1].point[h] - D.points[f].point[h]) * F;
                                    break;
                                }
                                f < c - 1 ? f += 1 : g = !1;
                            }
                            e._lastPoint = f, e._lastAddedLength = R - D.points[f].partialLength, e._lastKeyframeIndex = m;
                        }
                    } else {
                        var B, V, O, L, $;
                        if (y = a.s.length, v = n.s || a.e, this.sh && 1 !== a.h) {
                            if (t >= k) r1[0] = v[0], r1[1] = v[1], r1[2] = v[2];
                            else if (t <= T) r1[0] = a.s[0], r1[1] = a.s[1], r1[2] = a.s[2];
                            else {
                                var z = i(a.s), G = i(v);
                                b = r1, _ = function(t, e, r1) {
                                    var i, s, a, n, o, h = [], l = t[0], p = t[1], c = t[2], f = t[3], d = e[0], u = e[1], m = e[2], y = e[3];
                                    return (s = l * d + p * u + c * m + f * y) < 0 && (s = -s, d = -d, u = -u, m = -m, y = -y), 1 - s > 1e-6 ? (i = Math.acos(s), a = Math.sin(i), n = Math.sin((1 - r1) * i) / a, o = Math.sin(r1 * i) / a) : (n = 1 - r1, o = r1), h[0] = n * l + o * d, h[1] = n * p + o * u, h[2] = n * c + o * m, h[3] = n * f + o * y, h;
                                }(z, G, (t - T) / (k - T)), P = _[0], E = _[1], S = _[2], x = _[3], A = Math.atan2(2 * E * x - 2 * P * S, 1 - 2 * E * E - 2 * S * S), w = Math.asin(2 * P * E + 2 * S * x), C = Math.atan2(2 * P * x - 2 * E * S, 1 - 2 * P * P - 2 * S * S), b[0] = A / degToRads, b[1] = w / degToRads, b[2] = C / degToRads;
                            }
                        } else for(m = 0; m < y; m += 1)1 !== a.h && (t >= k ? p = 1 : t < T ? p = 0 : (a.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[m] ? d = o.__fnct[m] : (B = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m], V = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m], O = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m], L = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m], d = BezierFactory.getBezierEasing(B, V, O, L).get, o.__fnct[m] = d)) : o.__fnct ? d = o.__fnct : (B = a.o.x, V = a.o.y, O = a.i.x, L = a.i.y, d = BezierFactory.getBezierEasing(B, V, O, L).get, a.keyframeMetadata = d), p = d((t - T) / (k - T)))), v = n.s || a.e, $ = 1 === a.h ? a.s[m] : a.s[m] + (v[m] - a.s[m]) * p, "multidimensional" === this.propType ? r1[m] = $ : r1 = $;
                    }
                    return e.lastIndex = u, r1;
                }
                function i(t) {
                    var e = t[0] * degToRads, r1 = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(r1 / 2), n = Math.cos(i / 2), o = Math.sin(e / 2), h = Math.sin(r1 / 2), l = Math.sin(i / 2);
                    return [
                        o * h * n + s * a * l,
                        o * a * n + s * h * l,
                        s * h * n - o * a * l,
                        s * a * n - o * h * l
                    ];
                }
                function s() {
                    var e = this.comp.renderedFrame - this.offsetTime, r1 = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r1 && e < r1))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var s = this.interpolateValue(e, this._caching);
                        this.pv = s;
                    }
                    return this._caching.lastFrame = e, this.pv;
                }
                function a(t) {
                    var r1;
                    if ("unidimensional" === this.propType) r1 = t * this.mult, e(this.v - r1) > 1e-5 && (this.v = r1, this._mdf = !0);
                    else for(var i = 0, s = this.v.length; i < s;)r1 = t[i] * this.mult, e(this.v[i] - r1) > 1e-5 && (this.v[i] = r1, this._mdf = !0), i += 1;
                }
                function n() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length, r1 = this.kf ? this.pv : this.data.k;
                            for(t = 0; t < e; t += 1)r1 = this.effectsSequence[t](r1);
                            this.setVValue(r1), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                        }
                    }
                }
                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                }
                function h(t, e, r1, i) {
                    this.propType = "unidimensional", this.mult = r1 || 1, this.data = e, this.v = r1 ? e.k * r1 : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.addEffect = o;
                }
                function l(t, e, r1, i) {
                    var s;
                    this.propType = "multidimensional", this.mult = r1 || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var h = e.k.length;
                    for(this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), s = 0; s < h; s += 1)this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = a, this.addEffect = o;
                }
                function p(e, i, h, l) {
                    this.propType = "unidimensional", this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = i, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.interpolateValue = r1, this.effectsSequence = [
                        s.bind(this)
                    ], this.addEffect = o;
                }
                function c(e, i, h, l) {
                    var p;
                    this.propType = "multidimensional";
                    var c, f, d, u, m = i.k.length;
                    for(p = 0; p < m - 1; p += 1)i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (c = i.k[p].s, f = i.k[p + 1].s, d = i.k[p].to, u = i.k[p].ti, (2 === c.length && (c[0] !== f[0] || c[1] !== f[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], c[0] + d[0], c[1] + d[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], f[0] + u[0], f[1] + u[1]) || 3 === c.length && (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], c[0] + d[0], c[1] + d[1], c[2] + d[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], f[0] + u[0], f[1] + u[1], f[2] + u[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === f[0] && c[1] === f[1] && 0 === d[0] && 0 === d[1] && 0 === u[0] && 0 === u[1] && (2 === c.length || c[2] === f[2] && 0 === d[2] && 0 === u[2]) && (i.k[p].to = null, i.k[p].ti = null));
                    this.effectsSequence = [
                        s.bind(this)
                    ], this.data = i, this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n, this.setVValue = a, this.interpolateValue = r1, this.frameId = -1;
                    var y = i.k[0].s.length;
                    for(this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1)this.v[p] = t, this.pv[p] = t;
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: createTypedArray("float32", y)
                    }, this.addEffect = o;
                }
                var f = {
                    getProp: function(t, e, r1, i, s) {
                        var a;
                        if (e.k.length) {
                            if ("number" == typeof e.k[0]) a = new l(t, e, i, s);
                            else switch(r1){
                                case 0:
                                    a = new p(t, e, i, s);
                                    break;
                                case 1:
                                    a = new c(t, e, i, s);
                            }
                        } else a = new h(t, e, i, s);
                        return a.effectsSequence.length && s.addDynamicProperty(a), a;
                    }
                };
                return f;
            }();
            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
                },
                iterateDynamicProperties: function() {
                    var t;
                    this._mdf = !1;
                    var e = this.dynamicProperties.length;
                    for(t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
                }
            };
            var pointPool = poolFactory(8, function() {
                return createTypedArray("float32", 2);
            });
            function ShapePath() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t, this.setLength(e);
                for(var r1 = 0; r1 < e;)this.v[r1] = pointPool.newElement(), this.o[r1] = pointPool.newElement(), this.i[r1] = pointPool.newElement(), r1 += 1;
            }, ShapePath.prototype.setLength = function(t) {
                for(; this._maxLength < t;)this.doubleArrayLength();
                this._length = t;
            }, ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
            }, ShapePath.prototype.setXYAt = function(t, e, r1, i, s) {
                var a;
                switch(this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r1){
                    case "v":
                        a = this.v;
                        break;
                    case "i":
                        a = this.i;
                        break;
                    case "o":
                        a = this.o;
                        break;
                    default:
                        a = [];
                }
                (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e;
            }, ShapePath.prototype.setTripleAt = function(t, e, r1, i, s, a, n, o) {
                this.setXYAt(t, e, "v", n, o), this.setXYAt(r1, i, "o", n, o), this.setXYAt(s, a, "i", n, o);
            }, ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v, r1 = this.o, i = this.i, s = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r1[0][0], r1[0][1], 0, !1), s = 1);
                var a, n = this._length - 1, o = this._length;
                for(a = s; a < o; a += 1)t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r1[n][0], r1[n][1], a, !1), n -= 1;
                return t;
            }, ShapePath.prototype.length = function() {
                return this._length;
            };
            var shapePool = (factory = poolFactory(4, function() {
                return new ShapePath;
            }, function(t) {
                var e, r1 = t._length;
                for(e = 0; e < r1; e += 1)pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1;
            }), factory.clone = function(t) {
                var e, r1 = factory.newElement(), i = void 0 === t._length ? t.v.length : t._length;
                for(r1.setLength(i), r1.c = t.c, e = 0; e < i; e += 1)r1.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                return r1;
            }, factory), factory;
            function ShapeCollection() {
                this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
            }
            ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
            }, ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for(t = 0; t < this._length; t += 1)shapePool.release(this.shapes[t]);
                this._length = 0;
            };
            var shapeCollectionPool = (ob = {
                newShapeCollection: function() {
                    return _length ? pool[_length -= 1] : new ShapeCollection;
                },
                release: function(t) {
                    var e, r1 = t._length;
                    for(e = 0; e < r1; e += 1)shapePool.release(t.shapes[e]);
                    t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1;
                }
            }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
                var t = -999999;
                function e(t, e, r1) {
                    var i, s, a, n, o, h, l, p, c, f = r1.lastIndex, d = this.keyframes;
                    if (t < d[0].t - this.offsetTime) i = d[0].s[0], a = !0, f = 0;
                    else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], a = !0;
                    else {
                        for(var u, m, y, g = f, v = d.length - 1, b = !0; b && (u = d[g], !((m = d[g + 1]).t - this.offsetTime > t));)g < v - 1 ? g += 1 : b = !1;
                        if (y = this.keyframesMetadata[g] || {}, f = g, !(a = 1 === u.h)) {
                            if (t >= m.t - this.offsetTime) p = 1;
                            else if (t < u.t - this.offsetTime) p = 0;
                            else {
                                var _;
                                y.__fnct ? _ = y.__fnct : (_ = BezierFactory.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, y.__fnct = _), p = _((t - (u.t - this.offsetTime)) / (m.t - this.offsetTime - (u.t - this.offsetTime)));
                            }
                            s = m.s ? m.s[0] : u.e[0];
                        }
                        i = u.s[0];
                    }
                    for(h = e._length, l = i.i[0].length, r1.lastIndex = f, n = 0; n < h; n += 1)for(o = 0; o < l; o += 1)c = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p, e.i[n][o] = c, c = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p, e.o[n][o] = c, c = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p, e.v[n][o] = c;
                }
                function r1() {
                    var e = this.comp.renderedFrame - this.offsetTime, r1 = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, s = this._caching.lastFrame;
                    return s !== t && (s < r1 && e < r1 || s > i && e > i) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv;
                }
                function i() {
                    this.paths = this.localShapeCollection;
                }
                function s(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var r1, i = t._length;
                        for(r1 = 0; r1 < i; r1 += 1)if (t.v[r1][0] !== e.v[r1][0] || t.v[r1][1] !== e.v[r1][1] || t.o[r1][0] !== e.o[r1][0] || t.o[r1][1] !== e.o[r1][1] || t.i[r1][0] !== e.i[r1][0] || t.i[r1][1] !== e.i[r1][1]) return !1;
                        return !0;
                    })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
                }
                function a() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this.effectsSequence.length) {
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                var t, e;
                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var r1 = this.effectsSequence.length;
                                for(e = 0; e < r1; e += 1)t = this.effectsSequence[e](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                            }
                        } else this._mdf = !1;
                    }
                }
                function n(t, e, r1) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var s = 3 === r1 ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
                }
                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                }
                function h(e, s, a) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                    var n = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    }, this.effectsSequence = [
                        r1.bind(this)
                    ];
                }
                n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = s, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
                var l = function() {
                    var t = roundCorner;
                    function e(t, e) {
                        this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                    }
                    return e.prototype = {
                        reset: i,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                        },
                        convertEllToPath: function() {
                            var e = this.p.v[0], r1 = this.p.v[1], i = this.s.v[0] / 2, s = this.s.v[1] / 2, a = 3 !== this.d, n = this.v;
                            n.v[0][0] = e, n.v[0][1] = r1 - s, n.v[1][0] = a ? e + i : e - i, n.v[1][1] = r1, n.v[2][0] = e, n.v[2][1] = r1 + s, n.v[3][0] = a ? e - i : e + i, n.v[3][1] = r1, n.i[0][0] = a ? e - i * t : e + i * t, n.i[0][1] = r1 - s, n.i[1][0] = a ? e + i : e - i, n.i[1][1] = r1 - s * t, n.i[2][0] = a ? e + i * t : e - i * t, n.i[2][1] = r1 + s, n.i[3][0] = a ? e - i : e + i, n.i[3][1] = r1 + s * t, n.o[0][0] = a ? e + i * t : e - i * t, n.o[0][1] = r1 - s, n.o[1][0] = a ? e + i : e - i, n.o[1][1] = r1 + s * t, n.o[2][0] = a ? e - i * t : e + i * t, n.o[2][1] = r1 + s, n.o[3][0] = a ? e - i : e + i, n.o[3][1] = r1 - s * t;
                        }
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], e), e;
                }(), p = function() {
                    function t(t, e) {
                        this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                    }
                    return t.prototype = {
                        reset: i,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                        },
                        convertStarToPath: function() {
                            var t, e, r1, i, s = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / s, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, c = 2 * Math.PI * o / (2 * s), f = 2 * Math.PI * h / (2 * s), d = -Math.PI / 2;
                            d += this.r.v;
                            var u = 3 === this.data.d ? -1 : 1;
                            for(this.v._length = 0, t = 0; t < s; t += 1){
                                r1 = n ? l : p, i = n ? c : f;
                                var m = (e = n ? o : h) * Math.cos(d), y = e * Math.sin(d), g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y), v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                                m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - g * i * r1 * u, y - v * i * r1 * u, m + g * i * r1 * u, y + v * i * r1 * u, t, !0), n = !n, d += a * u;
                            }
                        },
                        convertPolygonToPath: function() {
                            var t, e = Math.floor(this.pt.v), r1 = 2 * Math.PI / e, i = this.or.v, s = this.os.v, a = 2 * Math.PI * i / (4 * e), n = .5 * -Math.PI, o = 3 === this.data.d ? -1 : 1;
                            for(n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1){
                                var h = i * Math.cos(n), l = i * Math.sin(n), p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l), c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - c * a * s * o, h + p * a * s * o, l + c * a * s * o, t, !0), n += r1 * o;
                            }
                            this.paths.length = 0, this.paths[0] = this.v;
                        }
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], t), t;
                }(), c = function() {
                    function t(t, e) {
                        this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                    }
                    return t.prototype = {
                        convertRectToPath: function() {
                            var t = this.p.v[0], e = this.p.v[1], r1 = this.s.v[0] / 2, i = this.s.v[1] / 2, s = bmMin(r1, i, this.r.v), a = s * (1 - roundCorner);
                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r1, e - i + s, t + r1, e - i + s, t + r1, e - i + a, 0, !0), this.v.setTripleAt(t + r1, e + i - s, t + r1, e + i - a, t + r1, e + i - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + r1 - s, e + i, t + r1 - s, e + i, t + r1 - a, e + i, 2, !0), this.v.setTripleAt(t - r1 + s, e + i, t - r1 + a, e + i, t - r1 + s, e + i, 3, !0), this.v.setTripleAt(t - r1, e + i - s, t - r1, e + i - s, t - r1, e + i - a, 4, !0), this.v.setTripleAt(t - r1, e - i + s, t - r1, e - i + a, t - r1, e - i + s, 5, !0), this.v.setTripleAt(t - r1 + s, e - i, t - r1 + s, e - i, t - r1 + a, e - i, 6, !0), this.v.setTripleAt(t + r1 - s, e - i, t + r1 - a, e - i, t + r1 - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r1, e + i, t - r1 + a, e + i, t - r1, e + i, 2), this.v.setTripleAt(t - r1, e - i, t - r1, e - i + a, t - r1, e - i, 3))) : (this.v.setTripleAt(t + r1, e - i + s, t + r1, e - i + a, t + r1, e - i + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + r1 - s, e - i, t + r1 - s, e - i, t + r1 - a, e - i, 1, !0), this.v.setTripleAt(t - r1 + s, e - i, t - r1 + a, e - i, t - r1 + s, e - i, 2, !0), this.v.setTripleAt(t - r1, e - i + s, t - r1, e - i + s, t - r1, e - i + a, 3, !0), this.v.setTripleAt(t - r1, e + i - s, t - r1, e + i - a, t - r1, e + i - s, 4, !0), this.v.setTripleAt(t - r1 + s, e + i, t - r1 + s, e + i, t - r1 + a, e + i, 5, !0), this.v.setTripleAt(t + r1 - s, e + i, t + r1 - a, e + i, t + r1 - s, e + i, 6, !0), this.v.setTripleAt(t + r1, e + i - s, t + r1, e + i - s, t + r1, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r1, e - i, t - r1 + a, e - i, t - r1, e - i, 1, !0), this.v.setTripleAt(t - r1, e + i, t - r1, e + i - a, t - r1, e + i, 2, !0), this.v.setTripleAt(t + r1, e + i, t + r1 - a, e + i, t + r1, e + i, 3, !0)));
                        },
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                        },
                        reset: i
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], t), t;
                }(), f = {
                    getShapeProp: function(t, e, r1) {
                        var i;
                        return 3 === r1 || 4 === r1 ? i = (3 === r1 ? e.pt : e.ks).k.length ? new h(t, e, r1) : new n(t, e, r1) : 5 === r1 ? i = new c(t, e) : 6 === r1 ? i = new l(t, e) : 7 === r1 && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i;
                    },
                    getConstructorFunction: function() {
                        return n;
                    },
                    getKeyframedConstructorFunction: function() {
                        return h;
                    }
                };
                return f;
            }(), Matrix = function() {
                var t = Math.cos, e = Math.sin, r1 = Math.tan, i = Math.round;
                function s() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
                }
                function a(r1) {
                    if (0 === r1) return this;
                    var i = t(r1), s = e(r1);
                    return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function n(r1) {
                    if (0 === r1) return this;
                    var i = t(r1), s = e(r1);
                    return this._t(1, 0, 0, 0, 0, i, -s, 0, 0, s, i, 0, 0, 0, 0, 1);
                }
                function o(r1) {
                    if (0 === r1) return this;
                    var i = t(r1), s = e(r1);
                    return this._t(i, 0, s, 0, 0, 1, 0, 0, -s, 0, i, 0, 0, 0, 0, 1);
                }
                function h(r1) {
                    if (0 === r1) return this;
                    var i = t(r1), s = e(r1);
                    return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0);
                }
                function p(t, e) {
                    return this.shear(r1(t), r1(e));
                }
                function c(i, s) {
                    var a = t(s), n = e(s);
                    return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r1(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function f(t, e, r1) {
                    return r1 || 0 === r1 || (r1 = 1), 1 === t && 1 === e && 1 === r1 ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r1, 0, 0, 0, 0, 1);
                }
                function d(t, e, r1, i, s, a, n, o, h, l, p, c, f, d, u, m) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = r1, this.props[3] = i, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = d, this.props[14] = u, this.props[15] = m, this;
                }
                function u(t, e, r1) {
                    return r1 = r1 || 0, 0 !== t || 0 !== e || 0 !== r1 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r1, 1) : this;
                }
                function m(t, e, r1, i, s, a, n, o, h, l, p, c, f, d, u, m) {
                    var y = this.props;
                    if (1 === t && 0 === e && 0 === r1 && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * d, y[14] = y[14] * p + y[15] * u, y[15] *= m, this._identityCalculated = !1, this;
                    var g = y[0], v = y[1], b = y[2], _ = y[3], P = y[4], E = y[5], S = y[6], x = y[7], A = y[8], w = y[9], C = y[10], k = y[11], T = y[12], D = y[13], M = y[14], F = y[15];
                    return y[0] = g * t + v * s + b * h + _ * f, y[1] = g * e + v * a + b * l + _ * d, y[2] = g * r1 + v * n + b * p + _ * u, y[3] = g * i + v * o + b * c + _ * m, y[4] = P * t + E * s + S * h + x * f, y[5] = P * e + E * a + S * l + x * d, y[6] = P * r1 + E * n + S * p + x * u, y[7] = P * i + E * o + S * c + x * m, y[8] = A * t + w * s + C * h + k * f, y[9] = A * e + w * a + C * l + k * d, y[10] = A * r1 + w * n + C * p + k * u, y[11] = A * i + w * o + C * c + k * m, y[12] = T * t + D * s + M * h + F * f, y[13] = T * e + D * a + M * l + F * d, y[14] = T * r1 + D * n + M * p + F * u, y[15] = T * i + D * o + M * c + F * m, this._identityCalculated = !1, this;
                }
                function y() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity;
                }
                function g(t) {
                    for(var e = 0; e < 16;){
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1;
                    }
                    return !0;
                }
                function v(t) {
                    var e;
                    for(e = 0; e < 16; e += 1)t.props[e] = this.props[e];
                    return t;
                }
                function b(t) {
                    var e;
                    for(e = 0; e < 16; e += 1)this.props[e] = t[e];
                }
                function _(t, e, r1) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + r1 * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + r1 * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + r1 * this.props[10] + this.props[14]
                    };
                }
                function P(t, e, r1) {
                    return t * this.props[0] + e * this.props[4] + r1 * this.props[8] + this.props[12];
                }
                function E(t, e, r1) {
                    return t * this.props[1] + e * this.props[5] + r1 * this.props[9] + this.props[13];
                }
                function S(t, e, r1) {
                    return t * this.props[2] + e * this.props[6] + r1 * this.props[10] + this.props[14];
                }
                function x() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4], e = this.props[5] / t, r1 = -this.props[1] / t, i = -this.props[4] / t, s = this.props[0] / t, a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t, n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t, o = new Matrix;
                    return o.props[0] = e, o.props[1] = r1, o.props[4] = i, o.props[5] = s, o.props[12] = a, o.props[13] = n, o;
                }
                function A(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
                }
                function w(t) {
                    var e, r1 = t.length, i = [];
                    for(e = 0; e < r1; e += 1)i[e] = A(t[e]);
                    return i;
                }
                function C(t, e, r1) {
                    var i = createTypedArray("float32", 6);
                    if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r1[0], i[5] = r1[1];
                    else {
                        var s = this.props[0], a = this.props[1], n = this.props[4], o = this.props[5], h = this.props[12], l = this.props[13];
                        i[0] = t[0] * s + t[1] * n + h, i[1] = t[0] * a + t[1] * o + l, i[2] = e[0] * s + e[1] * n + h, i[3] = e[0] * a + e[1] * o + l, i[4] = r1[0] * s + r1[1] * n + h, i[5] = r1[0] * a + r1[1] * o + l;
                    }
                    return i;
                }
                function k(t, e, r1) {
                    return this.isIdentity() ? [
                        t,
                        e,
                        r1
                    ] : [
                        t * this.props[0] + e * this.props[4] + r1 * this.props[8] + this.props[12],
                        t * this.props[1] + e * this.props[5] + r1 * this.props[9] + this.props[13],
                        t * this.props[2] + e * this.props[6] + r1 * this.props[10] + this.props[14]
                    ];
                }
                function T(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var r1 = this.props;
                    return Math.round(100 * (t * r1[0] + e * r1[4] + r1[12])) / 100 + "," + Math.round(100 * (t * r1[1] + e * r1[5] + r1[13])) / 100;
                }
                function D() {
                    for(var t = 0, e = this.props, r1 = "matrix3d("; t < 16;)r1 += i(1e4 * e[t]) / 1e4, r1 += 15 === t ? ")" : ",", t += 1;
                    return r1;
                }
                function M(t) {
                    return t < 1e-6 && t > 0 || t > -0.000001 && t < 0 ? i(1e4 * t) / 1e4 : t;
                }
                function F() {
                    var t = this.props;
                    return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")";
                }
                return function() {
                    this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = c, this.shear = l, this.scale = f, this.setTransform = d, this.translate = u, this.transform = m, this.applyToPoint = _, this.applyToX = P, this.applyToY = E, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = C, this.applyToPointStringified = T, this.toCSS = D, this.to2dCSS = F, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = w, this.inversePoint = A, this.getInverseMatrix = x, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
                };
            }();
            function _typeof$3(t) {
                return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof$3(t);
            }
            var lottie = {}, standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";
            function setLocation(t) {
                setLocationHref(t);
            }
            function searchAnimations() {
                !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
            }
            function setSubframeRendering(t) {
                setSubframeEnabled(t);
            }
            function setPrefix(t) {
                setIdPrefix(t);
            }
            function loadAnimation(t) {
                return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
            }
            function setQuality(t) {
                if ("string" == typeof t) switch(t){
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10);
                }
                else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
            }
            function inBrowser() {
                return "undefined" != typeof navigator;
            }
            function installPlugin(t, e) {
                "expressions" === t && setExpressionsPlugin(e);
            }
            function getFactory(t) {
                switch(t){
                    case "propertyFactory":
                        return PropertyFactory;
                    case "shapePropertyFactory":
                        return ShapePropertyFactory;
                    case "matrix":
                        return Matrix;
                    default:
                        return null;
                }
            }
            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
            }
            function getQueryVariable(t) {
                for(var e = queryString.split("&"), r1 = 0; r1 < e.length; r1 += 1){
                    var i = e[r1].split("=");
                    if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
                }
                return null;
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.0";
            var queryString = "";
            if (standalone) {
                var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
                    src: ""
                };
                queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer");
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
                "object" !== _typeof$3(exports) && (window.bodymovin = lottie);
            } catch (t) {}
            var ShapeModifiers = function() {
                var t = {}, e = {};
                return t.registerModifier = function(t, r1) {
                    e[t] || (e[t] = r1);
                }, t.getModifier = function(t, r1, i) {
                    return new e[t](r1, i);
                }, t;
            }();
            function ShapeModifier() {}
            function TrimModifier() {}
            function PuckerAndBloatModifier() {}
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
                }
            }, ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
            }, ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
            }, extendPrototype([
                DynamicPropertyContainer
            ], ShapeModifier), extendPrototype([
                ShapeModifier
            ], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
            }, TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = [];
            }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r1, i, s) {
                var a = [];
                e <= 1 ? a.push({
                    s: t,
                    e: e
                }) : t >= 1 ? a.push({
                    s: t - 1,
                    e: e - 1
                }) : (a.push({
                    s: t,
                    e: 1
                }), a.push({
                    s: 0,
                    e: e - 1
                }));
                var n, o, h = [], l = a.length;
                for(n = 0; n < l; n += 1){
                    var p, c;
                    (o = a[n]).e * s < i || o.s * s > i + r1 || (p = o.s * s <= i ? 0 : (o.s * s - i) / r1, c = o.e * s >= i + r1 ? 1 : (o.e * s - i) / r1, h.push([
                        p,
                        c
                    ]));
                }
                return h.length || h.push([
                    0,
                    0
                ]), h;
            }, TrimModifier.prototype.releasePathsData = function(t) {
                var e, r1 = t.length;
                for(e = 0; e < r1; e += 1)segmentsLengthPool.release(t[e]);
                return t.length = 0, t;
            }, TrimModifier.prototype.processShapes = function(t) {
                var e, r1, i, s;
                if (this._mdf || t) {
                    var a = this.o.v % 360 / 360;
                    if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r1 = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                        var n = e;
                        e = r1, r1 = n;
                    }
                    e = 1e-4 * Math.round(1e4 * e), r1 = 1e-4 * Math.round(1e4 * r1), this.sValue = e, this.eValue = r1;
                } else e = this.sValue, r1 = this.eValue;
                var o, h, l, p, c, f = this.shapes.length, d = 0;
                if (r1 === e) for(s = 0; s < f; s += 1)this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
                else if (1 === r1 && 0 === e || 0 === r1 && 1 === e) {
                    if (this._mdf) for(s = 0; s < f; s += 1)this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0;
                } else {
                    var u, m, y = [];
                    for(s = 0; s < f; s += 1)if ((u = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (h = (i = u.shape.paths)._length, c = 0, !u.shape._mdf && u.pathsData.length) c = u.totalShapeLength;
                        else {
                            for(l = this.releasePathsData(u.pathsData), o = 0; o < h; o += 1)p = bez.getSegmentsLength(i.shapes[o]), l.push(p), c += p.totalLength;
                            u.totalShapeLength = c, u.pathsData = l;
                        }
                        d += c, u.shape._mdf = !0;
                    } else u.shape.paths = u.localShapeCollection;
                    var g, v = e, b = r1, _ = 0;
                    for(s = f - 1; s >= 0; s -= 1)if ((u = this.shapes[s]).shape._mdf) {
                        for((m = u.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, r1, u.totalShapeLength, _, d), _ += u.totalShapeLength) : g = [
                            [
                                v,
                                b
                            ]
                        ], h = g.length, o = 0; o < h; o += 1){
                            v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                                s: u.totalShapeLength * v,
                                e: u.totalShapeLength * b
                            }) : v >= 1 ? y.push({
                                s: u.totalShapeLength * (v - 1),
                                e: u.totalShapeLength * (b - 1)
                            }) : (y.push({
                                s: u.totalShapeLength * v,
                                e: u.totalShapeLength
                            }), y.push({
                                s: 0,
                                e: u.totalShapeLength * (b - 1)
                            }));
                            var P = this.addShapes(u, y[0]);
                            if (y[0].s !== y[0].e) {
                                if (y.length > 1) {
                                    if (u.shape.paths.shapes[u.shape.paths._length - 1].c) {
                                        var E = P.pop();
                                        this.addPaths(P, m), P = this.addShapes(u, y[1], E);
                                    } else this.addPaths(P, m), P = this.addShapes(u, y[1]);
                                }
                                this.addPaths(P, m);
                            }
                        }
                        u.shape.paths = m;
                    }
                }
            }, TrimModifier.prototype.addPaths = function(t, e) {
                var r1, i = t.length;
                for(r1 = 0; r1 < i; r1 += 1)e.addShape(t[r1]);
            }, TrimModifier.prototype.addSegment = function(t, e, r1, i, s, a, n) {
                s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r1[0], r1[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1);
            }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r1, i) {
                e.setXYAt(t[1], t[5], "o", r1), e.setXYAt(t[2], t[6], "i", r1 + 1), i && e.setXYAt(t[0], t[4], "v", r1), e.setXYAt(t[3], t[7], "v", r1 + 1);
            }, TrimModifier.prototype.addShapes = function(t, e, r1) {
                var i, s, a, n, o, h, l, p, c = t.pathsData, f = t.shape.paths.shapes, d = t.shape.paths._length, u = 0, m = [], y = !0;
                for(r1 ? (o = r1._length, p = r1._length) : (r1 = shapePool.newElement(), o = 0, p = 0), m.push(r1), i = 0; i < d; i += 1){
                    for(h = c[i].lengths, r1.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1)if (u + (n = h[s - 1]).addedLength < e.s) u += n.addedLength, r1.c = !1;
                    else {
                        if (u > e.e) {
                            r1.c = !1;
                            break;
                        }
                        e.s <= u && e.e >= u + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r1, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - u) / n.addedLength, (e.e - u) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, r1, o, y), y = !1, r1.c = !1), u += n.addedLength, o += 1;
                    }
                    if (f[i].c && h.length) {
                        if (n = h[s - 1], u <= e.e) {
                            var g = h[s - 1].addedLength;
                            e.s <= u && e.e >= u + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r1, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - u) / g, (e.e - u) / g, h[s - 1]), this.addSegmentFromArray(l, r1, o, y), y = !1, r1.c = !1);
                        } else r1.c = !1;
                        u += n.addedLength, o += 1;
                    }
                    if (r1._length && (r1.setXYAt(r1.v[p][0], r1.v[p][1], "i", p), r1.setXYAt(r1.v[r1._length - 1][0], r1.v[r1._length - 1][1], "o", r1._length - 1)), u > e.e) break;
                    i < d - 1 && (r1 = shapePool.newElement(), y = !0, m.push(r1), o = 0);
                }
                return m;
            }, extendPrototype([
                ShapeModifier
            ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
            }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                var r1 = e / 100, i = [
                    0,
                    0
                ], s = t._length, a = 0;
                for(a = 0; a < s; a += 1)i[0] += t.v[a][0], i[1] += t.v[a][1];
                i[0] /= s, i[1] /= s;
                var n, o, h, l, p, c, f = shapePool.newElement();
                for(f.c = t.c, a = 0; a < s; a += 1)n = t.v[a][0] + (i[0] - t.v[a][0]) * r1, o = t.v[a][1] + (i[1] - t.v[a][1]) * r1, h = t.o[a][0] + (i[0] - t.o[a][0]) * -r1, l = t.o[a][1] + (i[1] - t.o[a][1]) * -r1, p = t.i[a][0] + (i[0] - t.i[a][0]) * -r1, c = t.i[a][1] + (i[1] - t.i[a][1]) * -r1, f.setTripleAt(n, o, h, l, p, c, a);
                return f;
            }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e, r1, i, s, a, n, o = this.shapes.length, h = this.amount.v;
                if (0 !== h) for(r1 = 0; r1 < o; r1 += 1){
                    if (n = (a = this.shapes[r1]).localShapeCollection, a.shape._mdf || this._mdf || t) for(n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)n.addShape(this.processPath(e[i], h));
                    a.shape.paths = a.localShapeCollection;
                }
                this.dynamicProperties.length || (this._mdf = !1);
            };
            var TransformPropertyFactory = function() {
                var t = [
                    0,
                    0
                ];
                function e(t, e, r1) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r1 || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [
                            0,
                            0,
                            0
                        ]
                    }, 1, 0, this), e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                            var i, s = e.or.k.length;
                            for(i = 0; i < s; i += 1)e.or.k[i].to = null, e.or.k[i].ti = null;
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0;
                    } else this.r = PropertyFactory.getProp(t, e.r || {
                        k: 0
                    }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                        k: [
                            0,
                            0,
                            0
                        ]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                        k: [
                            100,
                            100,
                            100
                        ]
                    }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
                }
                return e.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    },
                    getValue: function(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var r1;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var i, s;
                                    if (r1 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r1, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / r1, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r1, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r1, 0)) : (i = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r1, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        i = [], s = [];
                                        var a = this.px, n = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r1, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / r1, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / r1, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / r1, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r1, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r1, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r1, 0), s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r1, 0)) : (i = [
                                            a.pv,
                                            n.pv
                                        ], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r1, a.offsetTime), s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r1, n.offsetTime));
                                    } else i = s = t;
                                    this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                            }
                            this.frameId = this.elem.globalData.frameId;
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([
                    DynamicPropertyContainer
                ], e), e.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0;
                }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(t, r1, i) {
                        return new e(t, r1, i);
                    }
                };
            }();
            function RepeaterModifier() {}
            function RoundCornersModifier() {}
            function floatEqual(t, e) {
                return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
            }
            function floatZero(t) {
                return Math.abs(t) <= 1e-5;
            }
            function lerp(t, e, r1) {
                return t * (1 - r1) + e * r1;
            }
            function lerpPoint(t, e, r1) {
                return [
                    lerp(t[0], e[0], r1),
                    lerp(t[1], e[1], r1)
                ];
            }
            function quadRoots(t, e, r1) {
                if (0 === t) return [];
                var i = e * e - 4 * t * r1;
                if (i < 0) return [];
                var s = -e / (2 * t);
                if (0 === i) return [
                    s
                ];
                var a = Math.sqrt(i) / (2 * t);
                return [
                    s - a,
                    s + a
                ];
            }
            function polynomialCoefficients(t, e, r1, i) {
                return [
                    3 * e - t - 3 * r1 + i,
                    3 * t - 6 * e + 3 * r1,
                    -3 * t + 3 * e,
                    t
                ];
            }
            function singlePoint(t) {
                return new PolynomialBezier(t, t, t, t, !1);
            }
            function PolynomialBezier(t, e, r1, i, s) {
                s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r1, i) && (r1 = lerpPoint(t, i, 2 / 3));
                var a = polynomialCoefficients(t[0], e[0], r1[0], i[0]), n = polynomialCoefficients(t[1], e[1], r1[1], i[1]);
                this.a = [
                    a[0],
                    n[0]
                ], this.b = [
                    a[1],
                    n[1]
                ], this.c = [
                    a[2],
                    n[2]
                ], this.d = [
                    a[3],
                    n[3]
                ], this.points = [
                    t,
                    e,
                    r1,
                    i
                ];
            }
            function extrema(t, e) {
                var r1 = t.points[0][e], i = t.points[t.points.length - 1][e];
                if (r1 > i) {
                    var s = i;
                    i = r1, r1 = s;
                }
                for(var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)if (a[n] > 0 && a[n] < 1) {
                    var o = t.point(a[n])[e];
                    o < r1 ? r1 = o : o > i && (i = o);
                }
                return {
                    min: r1,
                    max: i
                };
            }
            function intersectData(t, e, r1) {
                var i = t.boundingBox();
                return {
                    cx: i.cx,
                    cy: i.cy,
                    width: i.width,
                    height: i.height,
                    bez: t,
                    t: (e + r1) / 2,
                    t1: e,
                    t2: r1
                };
            }
            function splitData(t) {
                var e = t.bez.split(.5);
                return [
                    intersectData(e[0], t.t1, t.t),
                    intersectData(e[1], t.t, t.t2)
                ];
            }
            function boxIntersect(t, e) {
                return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height;
            }
            function intersectsImpl(t, e, r1, i, s, a) {
                if (boxIntersect(t, e)) {
                    if (r1 >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) s.push([
                        t.t,
                        e.t
                    ]);
                    else {
                        var n = splitData(t), o = splitData(e);
                        intersectsImpl(n[0], o[0], r1 + 1, i, s, a), intersectsImpl(n[0], o[1], r1 + 1, i, s, a), intersectsImpl(n[1], o[0], r1 + 1, i, s, a), intersectsImpl(n[1], o[1], r1 + 1, i, s, a);
                    }
                }
            }
            function crossProduct(t, e) {
                return [
                    t[1] * e[2] - t[2] * e[1],
                    t[2] * e[0] - t[0] * e[2],
                    t[0] * e[1] - t[1] * e[0]
                ];
            }
            function lineIntersection(t, e, r1, i) {
                var s = [
                    t[0],
                    t[1],
                    1
                ], a = [
                    e[0],
                    e[1],
                    1
                ], n = [
                    r1[0],
                    r1[1],
                    1
                ], o = [
                    i[0],
                    i[1],
                    1
                ], h = crossProduct(crossProduct(s, a), crossProduct(n, o));
                return floatZero(h[2]) ? null : [
                    h[0] / h[2],
                    h[1] / h[2]
                ];
            }
            function polarOffset(t, e, r1) {
                return [
                    t[0] + Math.cos(e) * r1,
                    t[1] - Math.sin(e) * r1
                ];
            }
            function pointDistance(t, e) {
                return Math.hypot(t[0] - e[0], t[1] - e[1]);
            }
            function pointEqual(t, e) {
                return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
            }
            function ZigZagModifier() {}
            function setPoint(t, e, r1, i, s, a, n) {
                var o = r1 - Math.PI / 2, h = r1 + Math.PI / 2, l = e[0] + Math.cos(r1) * i * s, p = e[1] - Math.sin(r1) * i * s;
                t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length());
            }
            function getPerpendicularVector(t, e) {
                var r1 = [
                    e[0] - t[0],
                    e[1] - t[1]
                ], i = .5 * -Math.PI;
                return [
                    Math.cos(i) * r1[0] - Math.sin(i) * r1[1],
                    Math.sin(i) * r1[0] + Math.cos(i) * r1[1]
                ];
            }
            function getProjectingAngle(t, e) {
                var r1 = 0 === e ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = getPerpendicularVector(t.v[r1], t.v[i]);
                return Math.atan2(0, 1) - Math.atan2(s[1], s[0]);
            }
            function zigZagCorner(t, e, r1, i, s, a, n) {
                var o = getProjectingAngle(e, r1), h = e.v[r1 % e._length], l = e.v[0 === r1 ? e._length - 1 : r1 - 1], p = e.v[(r1 + 1) % e._length], c = 2 === a ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0, f = 2 === a ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
                setPoint(t, e.v[r1 % e._length], o, n, i, f / (2 * (s + 1)), c / (2 * (s + 1)), a);
            }
            function zigZagSegment(t, e, r1, i, s, a) {
                for(var n = 0; n < i; n += 1){
                    var o = (n + 1) / (i + 1), h = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, l = e.normalAngle(o);
                    setPoint(t, e.point(o), l, a, r1, h / (2 * (i + 1)), h / (2 * (i + 1)), s), a = -a;
                }
                return a;
            }
            function linearOffset(t, e, r1) {
                var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
                return [
                    polarOffset(t, i, r1),
                    polarOffset(e, i, r1)
                ];
            }
            function offsetSegment(t, e) {
                var r1, i, s, a, n, o, h;
                r1 = (h = linearOffset(t.points[0], t.points[1], e))[0], i = h[1], s = (h = linearOffset(t.points[1], t.points[2], e))[0], a = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
                var l = lineIntersection(r1, i, s, a);
                null === l && (l = i);
                var p = lineIntersection(n, o, s, a);
                return null === p && (p = n), new PolynomialBezier(r1, l, p, o);
            }
            function joinLines(t, e, r1, i, s) {
                var a = e.points[3], n = r1.points[0];
                if (3 === i) return a;
                if (pointEqual(a, n)) return a;
                if (2 === i) {
                    var o = -e.tangentAngle(1), h = -r1.tangentAngle(0) + Math.PI, l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)), p = l ? pointDistance(l, a) : pointDistance(a, n) / 2, c = polarOffset(a, o, 2 * p * roundCorner);
                    return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], c[0], c[1], t.length()), n;
                }
                var f = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, r1.points[1]) ? r1.points[3] : r1.points[1]);
                return f && pointDistance(f, a) < s ? (t.setTripleAt(f[0], f[1], f[0], f[1], f[0], f[1], t.length()), f) : a;
            }
            function getIntersection(t, e) {
                var r1 = t.intersections(e);
                return r1.length && floatEqual(r1[0][0], 1) && r1.shift(), r1.length ? r1[0] : null;
            }
            function pruneSegmentIntersection(t, e) {
                var r1 = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
                return s && (r1[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [
                    [
                        t[0].split(s[0])[0]
                    ],
                    [
                        e[e.length - 1].split(s[1])[1]
                    ]
                ] : [
                    r1,
                    i
                ];
            }
            function pruneIntersections(t) {
                for(var e, r1 = 1; r1 < t.length; r1 += 1)e = pruneSegmentIntersection(t[r1 - 1], t[r1]), t[r1 - 1] = e[0], t[r1] = e[1];
                return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
            }
            function offsetSegmentSplit(t, e) {
                var r1, i, s, a, n = t.inflectionPoints();
                if (0 === n.length) return [
                    offsetSegment(t, e)
                ];
                if (1 === n.length || floatEqual(n[1], 1)) return r1 = (s = t.split(n[0]))[0], i = s[1], [
                    offsetSegment(r1, e),
                    offsetSegment(i, e)
                ];
                r1 = (s = t.split(n[0]))[0];
                var o = (n[1] - n[0]) / (1 - n[0]);
                return a = (s = s[1].split(o))[0], i = s[1], [
                    offsetSegment(r1, e),
                    offsetSegment(a, e),
                    offsetSegment(i, e)
                ];
            }
            function OffsetPathModifier() {}
            function getFontProperties(t) {
                for(var e = t.fStyle ? t.fStyle.split(" ") : [], r1 = "normal", i = "normal", s = e.length, a = 0; a < s; a += 1)switch(e[a].toLowerCase()){
                    case "italic":
                        i = "italic";
                        break;
                    case "bold":
                        r1 = "700";
                        break;
                    case "black":
                        r1 = "900";
                        break;
                    case "medium":
                        r1 = "500";
                        break;
                    case "regular":
                    case "normal":
                        r1 = "400";
                        break;
                    case "light":
                    case "thin":
                        r1 = "200";
                }
                return {
                    style: i,
                    weight: t.fWeight || r1
                };
            }
            extendPrototype([
                ShapeModifier
            ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
            }, RepeaterModifier.prototype.applyTransforms = function(t, e, r1, i, s, a) {
                var n = a ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
                t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r1.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r1.scale(a ? 1 / o : o, a ? 1 / h : h), r1.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
            }, RepeaterModifier.prototype.init = function(t, e, r1, i) {
                for(this.elem = t, this.arr = e, this.pos = r1, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r1]); r1 > 0;)r1 -= 1, this._elements.unshift(e[r1]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
            }, RepeaterModifier.prototype.resetElements = function(t) {
                var e, r1 = t.length;
                for(e = 0; e < r1; e += 1)t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it);
            }, RepeaterModifier.prototype.cloneElements = function(t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e;
            }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var r1, i = t.length;
                for(r1 = 0; r1 < i; r1 += 1)t[r1]._render = e, "gr" === t[r1].ty && this.changeGroupRender(t[r1].it, e);
            }, RepeaterModifier.prototype.processShapes = function(t) {
                var e, r1, i, s, a, n = !1;
                if (this._mdf || t) {
                    var o, h = Math.ceil(this.c.v);
                    if (this._groups.length < h) {
                        for(; this._groups.length < h;){
                            var l = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            l.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [
                                        0,
                                        0
                                    ]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [
                                        0,
                                        0
                                    ]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [
                                        {
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        },
                                        {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }
                                    ]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [
                                        100,
                                        100
                                    ]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
                        }
                        this.elem.reloadShapes(), n = !0;
                    }
                    for(a = 0, i = 0; i <= this._groups.length - 1; i += 1){
                        if (o = a < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                            var p = this.elemsData[i].it, c = p[p.length - 1];
                            0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1;
                        }
                        a += 1;
                    }
                    this._currentCopies = h;
                    var f = this.o.v, d = f % 1, u = f > 0 ? Math.floor(f) : Math.ceil(f), m = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var v, b, _ = 0;
                    if (f > 0) {
                        for(; _ < u;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                        d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), _ += d);
                    } else if (f < 0) {
                        for(; _ > u;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                        d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), _ -= d);
                    }
                    for(i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;){
                        if (b = (r1 = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== _) {
                            for((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < b; v += 1)r1[v] = this.matrix.props[v];
                            this.matrix.reset();
                        } else for(this.matrix.reset(), v = 0; v < b; v += 1)r1[v] = this.matrix.props[v];
                        _ += 1, a -= 1, i += s;
                    }
                } else for(a = this._currentCopies, i = 0, s = 1; a;)r1 = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
                return n;
            }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([
                ShapeModifier
            ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
            }, RoundCornersModifier.prototype.processPath = function(t, e) {
                var r1, i = shapePool.newElement();
                i.c = t.c;
                var s, a, n, o, h, l, p, c, f, d, u, m, y = t._length, g = 0;
                for(r1 = 0; r1 < y; r1 += 1)s = t.v[r1], n = t.o[r1], a = t.i[r1], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r1 && r1 !== y - 1 || t.c ? (o = 0 === r1 ? t.v[y - 1] : t.v[r1 - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = u = s[0] + (o[0] - s[0]) * l, c = m = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, d = c - (c - s[1]) * roundCorner, i.setTripleAt(p, c, f, d, u, m, g), g += 1, o = r1 === y - 1 ? t.v[0] : t.v[r1 + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, c = d = s[1] + (o[1] - s[1]) * l, u = p - (p - s[0]) * roundCorner, m = c - (c - s[1]) * roundCorner, i.setTripleAt(p, c, f, d, u, m, g), g += 1) : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g), g += 1) : (i.setTripleAt(t.v[r1][0], t.v[r1][1], t.o[r1][0], t.o[r1][1], t.i[r1][0], t.i[r1][1], g), g += 1);
                return i;
            }, RoundCornersModifier.prototype.processShapes = function(t) {
                var e, r1, i, s, a, n, o = this.shapes.length, h = this.rd.v;
                if (0 !== h) for(r1 = 0; r1 < o; r1 += 1){
                    if (n = (a = this.shapes[r1]).localShapeCollection, a.shape._mdf || this._mdf || t) for(n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)n.addShape(this.processPath(e[i], h));
                    a.shape.paths = a.localShapeCollection;
                }
                this.dynamicProperties.length || (this._mdf = !1);
            }, PolynomialBezier.prototype.point = function(t) {
                return [
                    ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                    ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
                ];
            }, PolynomialBezier.prototype.derivative = function(t) {
                return [
                    (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                    (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
                ];
            }, PolynomialBezier.prototype.tangentAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[1], e[0]);
            }, PolynomialBezier.prototype.normalAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[0], e[1]);
            }, PolynomialBezier.prototype.inflectionPoints = function() {
                var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(t)) return [];
                var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r1 = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                if (r1 < 0) return [];
                var i = Math.sqrt(r1);
                return floatZero(i) ? i > 0 && i < 1 ? [
                    e
                ] : [] : [
                    e - i,
                    e + i
                ].filter(function(t) {
                    return t > 0 && t < 1;
                });
            }, PolynomialBezier.prototype.split = function(t) {
                if (t <= 0) return [
                    singlePoint(this.points[0]),
                    this
                ];
                if (t >= 1) return [
                    this,
                    singlePoint(this.points[this.points.length - 1])
                ];
                var e = lerpPoint(this.points[0], this.points[1], t), r1 = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r1, t), a = lerpPoint(r1, i, t), n = lerpPoint(s, a, t);
                return [
                    new PolynomialBezier(this.points[0], e, s, n, !0),
                    new PolynomialBezier(n, a, i, this.points[3], !0)
                ];
            }, PolynomialBezier.prototype.bounds = function() {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                };
            }, PolynomialBezier.prototype.boundingBox = function() {
                var t = this.bounds();
                return {
                    left: t.x.min,
                    right: t.x.max,
                    top: t.y.min,
                    bottom: t.y.max,
                    width: t.x.max - t.x.min,
                    height: t.y.max - t.y.min,
                    cx: (t.x.max + t.x.min) / 2,
                    cy: (t.y.max + t.y.min) / 2
                };
            }, PolynomialBezier.prototype.intersections = function(t, e, r1) {
                void 0 === e && (e = 2), void 0 === r1 && (r1 = 7);
                var i = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r1), i;
            }, PolynomialBezier.shapeSegment = function(t, e) {
                var r1 = (e + 1) % t.length();
                return new PolynomialBezier(t.v[e], t.o[e], t.i[r1], t.v[r1], !0);
            }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
                var r1 = (e + 1) % t.length();
                return new PolynomialBezier(t.v[r1], t.i[r1], t.o[e], t.v[e], !0);
            }, extendPrototype([
                ShapeModifier
            ], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length;
            }, ZigZagModifier.prototype.processPath = function(t, e, r1, i) {
                var s = t._length, a = shapePool.newElement();
                if (a.c = t.c, t.c || (s -= 1), 0 === s) return a;
                var n = -1, o = PolynomialBezier.shapeSegment(t, 0);
                zigZagCorner(a, t, 0, e, r1, i, n);
                for(var h = 0; h < s; h += 1)n = zigZagSegment(a, o, e, r1, i, -n), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(a, t, h + 1, e, r1, i, n);
                return a;
            }, ZigZagModifier.prototype.processShapes = function(t) {
                var e, r1, i, s, a, n, o = this.shapes.length, h = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), p = this.pointsType.v;
                if (0 !== h) for(r1 = 0; r1 < o; r1 += 1){
                    if (n = (a = this.shapes[r1]).localShapeCollection, a.shape._mdf || this._mdf || t) for(n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)n.addShape(this.processPath(e[i], h, l, p));
                    a.shape.paths = a.localShapeCollection;
                }
                this.dynamicProperties.length || (this._mdf = !1);
            }, extendPrototype([
                ShapeModifier
            ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length;
            }, OffsetPathModifier.prototype.processPath = function(t, e, r1, i) {
                var s = shapePool.newElement();
                s.c = t.c;
                var a, n, o, h = t.length();
                t.c || (h -= 1);
                var l = [];
                for(a = 0; a < h; a += 1)o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e));
                if (!t.c) for(a = h - 1; a >= 0; a -= 1)o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e));
                l = pruneIntersections(l);
                var p = null, c = null;
                for(a = 0; a < l.length; a += 1){
                    var f = l[a];
                    for(c && (p = joinLines(s, c, f[0], r1, i)), c = f[f.length - 1], n = 0; n < f.length; n += 1)o = f[n], p && pointEqual(o.points[0], p) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), p = o.points[3];
                }
                return l.length && joinLines(s, c, l[0][0], r1, i), s;
            }, OffsetPathModifier.prototype.processShapes = function(t) {
                var e, r1, i, s, a, n, o = this.shapes.length, h = this.amount.v, l = this.miterLimit.v, p = this.lineJoin;
                if (0 !== h) for(r1 = 0; r1 < o; r1 += 1){
                    if (n = (a = this.shapes[r1]).localShapeCollection, a.shape._mdf || this._mdf || t) for(n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)n.addShape(this.processPath(e[i], h, p, l));
                    a.shape.paths = a.localShapeCollection;
                }
                this.dynamicProperties.length || (this._mdf = !1);
            };
            var FontManager = function() {
                var t = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: {
                        shapes: []
                    }
                }, e = [];
                e = e.concat([
                    2304,
                    2305,
                    2306,
                    2307,
                    2362,
                    2363,
                    2364,
                    2364,
                    2366,
                    2367,
                    2368,
                    2369,
                    2370,
                    2371,
                    2372,
                    2373,
                    2374,
                    2375,
                    2376,
                    2377,
                    2378,
                    2379,
                    2380,
                    2381,
                    2382,
                    2383,
                    2387,
                    2388,
                    2389,
                    2390,
                    2391,
                    2402,
                    2403
                ]);
                var r1 = [
                    "d83cdffb",
                    "d83cdffc",
                    "d83cdffd",
                    "d83cdffe",
                    "d83cdfff"
                ], i = [
                    65039,
                    8205
                ];
                function s(t, e) {
                    var r1 = createTag("span");
                    r1.setAttribute("aria-hidden", !0), r1.style.fontFamily = e;
                    var i = createTag("span");
                    i.innerText = "giItT1WQy@!-/#", r1.style.position = "absolute", r1.style.left = "-10000px", r1.style.top = "-10000px", r1.style.fontSize = "300px", r1.style.fontVariant = "normal", r1.style.fontStyle = "normal", r1.style.fontWeight = "normal", r1.style.letterSpacing = "0", r1.appendChild(i), document.body.appendChild(r1);
                    var s = i.offsetWidth;
                    return i.style.fontFamily = function(t) {
                        var e, r1 = t.split(","), i = r1.length, s = [];
                        for(e = 0; e < i; e += 1)"sans-serif" !== r1[e] && "monospace" !== r1[e] && s.push(r1[e]);
                        return s.join(",");
                    }(t) + ", " + e, {
                        node: i,
                        w: s,
                        parent: r1
                    };
                }
                function a(t, e) {
                    var r1, i = document.body && e ? "svg" : "canvas", s = getFontProperties(t);
                    if ("svg" === i) {
                        var a = createNS("text");
                        a.style.fontSize = "100px", a.setAttribute("font-family", t.fFamily), a.setAttribute("font-style", s.style), a.setAttribute("font-weight", s.weight), a.textContent = "1", t.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily, e.appendChild(a), r1 = a;
                    } else {
                        var n = new OffscreenCanvas(500, 500).getContext("2d");
                        n.font = s.style + " " + s.weight + " 100px " + t.fFamily, r1 = n;
                    }
                    return {
                        measureText: function(t) {
                            return "svg" === i ? (r1.textContent = t, r1.getComputedTextLength()) : r1.measureText(t).width;
                        }
                    };
                }
                var n = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
                };
                n.isModifier = function(t, e) {
                    var i = t.toString(16) + e.toString(16);
                    return -1 !== r1.indexOf(i);
                }, n.isZeroWidthJoiner = function(t, e) {
                    return e ? t === i[0] && e === i[1] : t === i[1];
                }, n.isCombinedCharacter = function(t) {
                    return -1 !== e.indexOf(t);
                };
                var o = {
                    addChars: function(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var r1, i, s = t.length, a = this.chars.length;
                            for(e = 0; e < s; e += 1){
                                for(r1 = 0, i = !1; r1 < a;)this.chars[r1].style === t[e].style && this.chars[r1].fFamily === t[e].fFamily && this.chars[r1].ch === t[e].ch && (i = !0), r1 += 1;
                                i || (this.chars.push(t[e]), a += 1);
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list);
                            if (!document.body) return this.isLoaded = !0, t.list.forEach(function(t) {
                                t.helper = a(t), t.cache = {};
                            }), void (this.fonts = t.list);
                            var r1, i = t.list, n = i.length, o = n;
                            for(r1 = 0; r1 < n; r1 += 1){
                                var h, l, p = !0;
                                if (i[r1].loaded = !1, i[r1].monoCase = s(i[r1].fFamily, "monospace"), i[r1].sansCase = s(i[r1].fFamily, "sans-serif"), i[r1].fPath) {
                                    if ("p" === i[r1].fOrigin || 3 === i[r1].origin) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r1].fFamily + '"], style[f-origin="3"][f-family="' + i[r1].fFamily + '"]')).length > 0 && (p = !1), p) {
                                            var c = createTag("style");
                                            c.setAttribute("f-forigin", i[r1].fOrigin), c.setAttribute("f-origin", i[r1].origin), c.setAttribute("f-family", i[r1].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + i[r1].fFamily + "; font-style: normal; src: url('" + i[r1].fPath + "');}", e.appendChild(c);
                                        }
                                    } else if ("g" === i[r1].fOrigin || 1 === i[r1].origin) {
                                        for(h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1)-1 !== h[l].href.indexOf(i[r1].fPath) && (p = !1);
                                        if (p) {
                                            var f = createTag("link");
                                            f.setAttribute("f-forigin", i[r1].fOrigin), f.setAttribute("f-origin", i[r1].origin), f.type = "text/css", f.rel = "stylesheet", f.href = i[r1].fPath, document.body.appendChild(f);
                                        }
                                    } else if ("t" === i[r1].fOrigin || 2 === i[r1].origin) {
                                        for(h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1)i[r1].fPath === h[l].src && (p = !1);
                                        if (p) {
                                            var d = createTag("link");
                                            d.setAttribute("f-forigin", i[r1].fOrigin), d.setAttribute("f-origin", i[r1].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", i[r1].fPath), e.appendChild(d);
                                        }
                                    }
                                } else i[r1].loaded = !0, o -= 1;
                                i[r1].helper = a(i[r1], e), i[r1].cache = {}, this.fonts.push(i[r1]);
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        } else this.isLoaded = !0;
                    },
                    getCharData: function(e, r1, i) {
                        for(var s = 0, a = this.chars.length; s < a;){
                            if (this.chars[s].ch === e && this.chars[s].style === r1 && this.chars[s].fFamily === i) return this.chars[s];
                            s += 1;
                        }
                        return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r1, i)), t;
                    },
                    getFontByName: function(t) {
                        for(var e = 0, r1 = this.fonts.length; e < r1;){
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1;
                        }
                        return this.fonts[0];
                    },
                    measureText: function(t, e, r1) {
                        var i = this.getFontByName(e), s = t.charCodeAt(0);
                        if (!i.cache[s + 1]) {
                            var a = i.helper;
                            if (" " === t) {
                                var n = a.measureText("|" + t + "|"), o = a.measureText("||");
                                i.cache[s + 1] = (n - o) / 100;
                            } else i.cache[s + 1] = a.measureText(t) / 100;
                        }
                        return i.cache[s + 1] * r1;
                    },
                    checkLoadedFonts: function() {
                        var t, e, r1, i = this.fonts.length, s = i;
                        for(t = 0; t < i; t += 1)this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r1 = this.fonts[t].monoCase.w, e.offsetWidth !== r1 ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r1 = this.fonts[t].sansCase.w, e.offsetWidth !== r1 && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0;
                    }
                };
                return n.prototype = o, n;
            }();
            function RenderableElement() {}
            RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t);
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for(t = 0; t < e; t += 1)this.renderableComponents[t].renderFrame(this._isFirstFrame);
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    };
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    };
                }
            };
            var getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function(t) {
                return blendModeEnums[t] || "";
            }), blendModeEnums;
            function SliderEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r1);
            }
            function AngleEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r1);
            }
            function ColorEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, r1);
            }
            function PointEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, r1);
            }
            function LayerIndexEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r1);
            }
            function MaskIndexEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r1);
            }
            function CheckboxEffect(t, e, r1) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r1);
            }
            function NoValueEffect() {
                this.p = {};
            }
            function EffectsManager(t, e) {
                var r1, i = t.ef || [];
                this.effectElements = [];
                var s, a = i.length;
                for(r1 = 0; r1 < a; r1 += 1)s = new GroupEffect(i[r1], e), this.effectElements.push(s);
            }
            function GroupEffect(t, e) {
                this.init(t, e);
            }
            function BaseElement() {}
            function FrameElement() {}
            function FootageElement(t, e, r1) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r1);
            }
            function AudioElement(t, e, r1) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r1), this._isPlaying = !1, this._canPlay = !1;
                var i = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                    k: [
                        100
                    ]
                }, 1, .01, this);
            }
            function BaseRenderer() {}
            function TransformElement() {}
            function MaskElement(t, e, r1) {
                this.data = t, this.element = e, this.globalData = r1, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var i, s, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(n), this.solidPath = "";
                var o, h, l, p, c, f, d = this.masksProperties, u = 0, m = [], y = createElementID(), g = "clipPath", v = "clip-path";
                for(i = 0; i < n; i += 1)if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (g = "mask", v = "mask"), "s" !== d[i].mode && "i" !== d[i].mode || 0 !== u ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), m.push(l)), s = createNS("path"), "n" === d[i].mode) this.viewData[i] = {
                    op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                    elem: s,
                    lastPath: ""
                }, a.appendChild(s);
                else {
                    var b;
                    if (u += 1, s.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), a.appendChild(p), s.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[i] = {
                        elem: s,
                        x: f,
                        expan: c,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                    }, "i" === d[i].mode) {
                        h = m.length;
                        var _ = createNS("g");
                        for(o = 0; o < h; o += 1)_.appendChild(m[o]);
                        var P = createNS("mask");
                        P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + u), P.appendChild(s), a.appendChild(P), _.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + u + ")"), m.length = 0, m.push(_);
                    } else m.push(s);
                    d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                        elem: s,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                        invRect: l
                    }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i]);
                }
                for(this.maskElement = createNS(g), n = m.length, i = 0; i < n; i += 1)this.maskElement.appendChild(m[i]);
                u > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
            }
            extendPrototype([
                DynamicPropertyContainer
            ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                var r1;
                this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                var i, s = this.data.ef.length, a = this.data.ef;
                for(r1 = 0; r1 < s; r1 += 1){
                    switch(i = null, a[r1].ty){
                        case 0:
                            i = new SliderEffect(a[r1], e, this);
                            break;
                        case 1:
                            i = new AngleEffect(a[r1], e, this);
                            break;
                        case 2:
                            i = new ColorEffect(a[r1], e, this);
                            break;
                        case 3:
                            i = new PointEffect(a[r1], e, this);
                            break;
                        case 4:
                        case 7:
                            i = new CheckboxEffect(a[r1], e, this);
                            break;
                        case 10:
                            i = new LayerIndexEffect(a[r1], e, this);
                            break;
                        case 11:
                            i = new MaskIndexEffect(a[r1], e, this);
                            break;
                        case 5:
                            i = new EffectsManager(a[r1], e, this);
                            break;
                        default:
                            i = new NoValueEffect(a[r1], e, this);
                    }
                    i && this.effectElements.push(i);
                }
            }, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for(var t = 0, e = this.data.masksProperties.length; t < e;){
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                        t += 1;
                    }
                    return !1;
                },
                initExpressions: function() {
                    var t = getExpressionInterfaces();
                    if (t) {
                        var e = t("layer"), r1 = t("effects"), i = t("shape"), s = t("text"), a = t("comp");
                        this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var n = r1.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface);
                    }
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
                },
                initBaseData: function(t, e, r1) {
                    this.globalData = e, this.comp = r1, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
                },
                getType: function() {
                    return this.type;
                },
                sourceRectAtTime: function() {}
            }, FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
                },
                prepareProperties: function(t, e) {
                    var r1, i = this.dynamicProperties.length;
                    for(r1 = 0; r1 < i; r1 += 1)(e || this._isParent && "transform" === this.dynamicProperties[r1].propType) && (this.dynamicProperties[r1].getValue(), this.dynamicProperties[r1]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
                }
            }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([
                RenderableElement,
                BaseElement,
                FrameElement
            ], FootageElement), FootageElement.prototype.getBaseElement = function() {
                return null;
            }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                var t = getExpressionInterfaces();
                if (t) {
                    var e = t("footage");
                    this.layerInterface = e(this);
                }
            }, FootageElement.prototype.getFootageData = function() {
                return this.footageData;
            }, AudioElement.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e;
                }
                this._volume = this.lv.v[0];
                var r1 = this._volume * this._volumeMultiplier;
                this._previousVolume !== r1 && (this._previousVolume = r1, this.audio.volume(r1));
            }, extendPrototype([
                RenderableElement,
                BaseElement,
                FrameElement
            ], AudioElement), AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
            }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                this.audio.pause(), this._isPlaying = !1;
            }, AudioElement.prototype.pause = function() {
                this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
            }, AudioElement.prototype.resume = function() {
                this._canPlay = !0;
            }, AudioElement.prototype.setRate = function(t) {
                this.audio.rate(t);
            }, AudioElement.prototype.volume = function(t) {
                this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
            }, AudioElement.prototype.getBaseElement = function() {
                return null;
            }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
                var e, r1, i = this.layers.length;
                for(this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)this.elements[e] || (r1 = this.layers[e]).ip - r1.st <= t - this.layers[e].st && r1.op - r1.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements();
            }, BaseRenderer.prototype.createItem = function(t) {
                switch(t.ty){
                    case 2:
                        return this.createImage(t);
                    case 0:
                        return this.createComp(t);
                    case 1:
                        return this.createSolid(t);
                    case 3:
                    default:
                        return this.createNull(t);
                    case 4:
                        return this.createShape(t);
                    case 5:
                        return this.createText(t);
                    case 6:
                        return this.createAudio(t);
                    case 13:
                        return this.createCamera(t);
                    case 15:
                        return this.createFootage(t);
                }
            }, BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.");
            }, BaseRenderer.prototype.createAudio = function(t) {
                return new AudioElement(t, this.globalData, this);
            }, BaseRenderer.prototype.createFootage = function(t) {
                return new FootageElement(t, this.globalData, this);
            }, BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for(t = 0; t < e; t += 1)this.buildItem(t);
                this.checkPendingElements();
            }, BaseRenderer.prototype.includeLayers = function(t) {
                var e;
                this.completeLayers = !1;
                var r1, i = t.length, s = this.layers.length;
                for(e = 0; e < i; e += 1)for(r1 = 0; r1 < s;){
                    if (this.layers[r1].id === t[e].id) {
                        this.layers[r1] = t[e];
                        break;
                    }
                    r1 += 1;
                }
            }, BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t;
            }, BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems();
            }, BaseRenderer.prototype.buildElementParenting = function(t, e, r1) {
                for(var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;)s[a].ind == e && (i[a] && !0 !== i[a] ? (r1.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r1) : t.setHierarchy(r1)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
            }, BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t);
            }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, r1 = t.length;
                for(e = 0; e < r1; e += 1)if (t[e].xt) {
                    var i = this.createComp(t[e]);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
                }
            }, BaseRenderer.prototype.getElementByPath = function(t) {
                var e, r1 = t.shift();
                if ("number" == typeof r1) e = this.elements[r1];
                else {
                    var i, s = this.elements.length;
                    for(i = 0; i < s; i += 1)if (this.elements[i].data.nm === r1) {
                        e = this.elements[i];
                        break;
                    }
                }
                return 0 === t.length ? e : e.getElementByPath(t);
            }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                };
            }, TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t, e = this.finalTransform.mat, r1 = 0, i = this.hierarchy.length;
                        if (!this.finalTransform._matMdf) for(; r1 < i;){
                            if (this.hierarchy[r1].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break;
                            }
                            r1 += 1;
                        }
                        if (this.finalTransform._matMdf) for(t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r1 = 0; r1 < i; r1 += 1)t = this.hierarchy[r1].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for(var r1, i = !0, s = this.comp; i;)s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
                    var a, n = e.length;
                    for(r1 = 0; r1 < n; r1 += 1)a = e[r1].mat.applyToPointArray(0, 0, 0), t = [
                        t[0] - a[0],
                        t[1] - a[1],
                        0
                    ];
                    return t;
                },
                mHelper: new Matrix
            }, MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop;
            }, MaskElement.prototype.renderFrame = function(t) {
                var e, r1 = this.element.finalTransform.mat, i = this.masksProperties.length;
                for(e = 0; e < i; e += 1)if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r1.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var s = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
                }
            }, MaskElement.prototype.getMaskelement = function() {
                return this.maskElement;
            }, MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
            }, MaskElement.prototype.drawPath = function(t, e, r1) {
                var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
                for(s = e._length, i = 1; i < s; i += 1)a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                if (e.c && s > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r1.lastPath !== a) {
                    var n = "";
                    r1.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r1.elem.setAttribute("d", n)), r1.lastPath = a;
                }
            }, MaskElement.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
            };
            var filtersFactory = function() {
                var t = {
                    createFilter: function(t, e) {
                        var r1 = createNS("filter");
                        return r1.setAttribute("id", t), !0 !== e && (r1.setAttribute("filterUnits", "objectBoundingBox"), r1.setAttribute("x", "0%"), r1.setAttribute("y", "0%"), r1.setAttribute("width", "100%"), r1.setAttribute("height", "100%")), r1;
                    },
                    createAlphaToLuminanceFilter: function() {
                        var t = createNS("feColorMatrix");
                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
                    }
                };
                return t;
            }(), featureSupport = function() {
                var t = {
                    maskType: !0
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t;
            }(), registeredEffects = {}, idPrefix = "filter_result_";
            function SVGEffects(t) {
                var e, r1, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, a = createElementID(), n = filtersFactory.createFilter(a, !0), o = 0;
                for(this.filters = [], e = 0; e < s; e += 1){
                    r1 = null;
                    var h = t.data.ef[e].ty;
                    registeredEffects[h] && (r1 = new registeredEffects[h].effect(n, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects[h].countsAsEffect && (o += 1)), r1 && this.filters.push(r1);
                }
                o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
            }
            function registerEffect(t, e, r1) {
                registeredEffects[t] = {
                    effect: e,
                    countsAsEffect: r1
                };
            }
            function SVGBaseElement() {}
            function HierarchyElement() {}
            function RenderableDOMElement() {}
            function IImageElement(t, e, r1) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r1), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                };
            }
            function ProcessedElement(t, e) {
                this.elem = t, this.pos = e;
            }
            function IShapeElement() {}
            SVGEffects.prototype.renderFrame = function(t) {
                var e, r1 = this.filters.length;
                for(e = 0; e < r1; e += 1)this.filters[e].renderFrame(t);
            }, SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g");
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var t = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var e = createNS("symbol");
                        e.setAttribute("id", this.layerId);
                        var r1 = createNS("g");
                        r1.appendChild(this.layerElement), e.appendChild(r1), t = r1, this.globalData.defs.appendChild(e);
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                        var i = createNS("clipPath"), s = createNS("path");
                        s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var a = createElementID();
                        if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                            var n = createNS("g");
                            n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")");
                    }
                    0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement;
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
                },
                getMatte: function(t) {
                    if (!this.matteMasks[t]) {
                        var e, r1, i, s, a = this.layerId + "_" + t;
                        if (1 === t || 3 === t) {
                            var n = createNS("mask");
                            n.setAttribute("id", a), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(i), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), r1 = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r1), r1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (s = createNS("g")).appendChild(i), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"));
                        } else if (2 === t) {
                            var o = createNS("mask");
                            o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                            var h = createNS("g");
                            o.appendChild(h), e = createElementID(), r1 = filtersFactory.createFilter(e);
                            var l = createNS("feComponentTransfer");
                            l.setAttribute("in", "SourceGraphic"), r1.appendChild(l);
                            var p = createNS("feFuncA");
                            p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(r1);
                            var c = createNS("rect");
                            c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(c), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r1.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(c), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(o);
                        }
                        this.matteMasks[t] = a;
                    }
                    return this.matteMasks[t];
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
                }
            }, HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting();
                },
                setHierarchy: function(t) {
                    this.hierarchy = t;
                },
                setAsParent: function() {
                    this._isParent = !0;
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
                }
            }, extendPrototype([
                RenderableElement,
                createProxyFunction({
                    initElement: function(t, e, r1) {
                        this.initFrame(), this.initBaseData(t, e, r1), this.initTransform(t, e, r1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement();
                    }
                })
            ], RenderableDOMElement), extendPrototype([
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
            ], IImageElement), IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
            }, IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect;
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, r1 = this.shapeModifiers.length;
                    for(e = 0; e < r1; e += 1)this.shapeModifiers[e].addShape(t);
                },
                isShapeInAnimatedModifiers: function(t) {
                    for(var e = this.shapeModifiers.length; 0 < e;)if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                    return !1;
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for(t = 0; t < e; t += 1)this.shapes[t].sh.reset();
                        for(t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                    }
                },
                searchProcessedElement: function(t) {
                    for(var e = this.processedElements, r1 = 0, i = e.length; r1 < i;){
                        if (e[r1].elem === t) return e[r1].pos;
                        r1 += 1;
                    }
                    return 0;
                },
                addProcessedElement: function(t, e) {
                    for(var r1 = this.processedElements, i = r1.length; i;)if (r1[i -= 1].elem === t) return void (r1[i].pos = e);
                    r1.push(new ProcessedElement(t, e));
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
                }
            };
            var lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            }, lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            };
            function SVGShapeData(t, e, r1) {
                this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r1, this.lvl = e, this._isAnimated = !!r1.k;
                for(var i = 0, s = t.length; i < s;){
                    if (t[i].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break;
                    }
                    i += 1;
                }
            }
            function SVGStyleData(t, e) {
                this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null;
            }
            function DashProperty(t, e, r1, i) {
                var s;
                this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r1, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                var a, n = e.length || 0;
                for(s = 0; s < n; s += 1)a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
                    n: e[s].n,
                    p: a
                };
                this.k || this.getValue(!0), this._isAnimated = this.k;
            }
            function SVGStrokeStyleData(t, e, r1) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r1, this._isAnimated = !!this._isAnimated;
            }
            function SVGFillStyleData(t, e, r1) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r1;
            }
            function SVGNoStyleData(t, e, r1) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r1;
            }
            function GradientProperty(t, e, r1) {
                this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r1), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
            }
            function SVGGradientFillStyleData(t, e, r1) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r1);
            }
            function SVGGradientStrokeStyleData(t, e, r1) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r1), this._isAnimated = !!this._isAnimated;
            }
            function ShapeGroupData() {
                this.it = [], this.prevViewData = [], this.gr = createNS("g");
            }
            function SVGTransformData(t, e, r1) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: r1
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
            }
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0;
            }, SVGStyleData.prototype.reset = function() {
                this.d = "", this._mdf = !1;
            }, DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0, r1 = this.dataProps.length;
                    for("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r1; e += 1)"o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], DashProperty), extendPrototype([
                DynamicPropertyContainer
            ], SVGStrokeStyleData), extendPrototype([
                DynamicPropertyContainer
            ], SVGFillStyleData), extendPrototype([
                DynamicPropertyContainer
            ], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
                for(var r1 = 0, i = this.o.length / 2; r1 < i;){
                    if (Math.abs(t[4 * r1] - t[4 * e + 2 * r1]) > .01) return !1;
                    r1 += 1;
                }
                return !0;
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s) for(var t = 0, e = this.data.k.k.length; t < e;){
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1;
                }
                else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0;
            }, GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    var e, r1, i, s = 4 * this.data.p;
                    for(e = 0; e < s; e += 1)r1 = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r1), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                    if (this.o.length) for(s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)r1 = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                    this._mdf = !t;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r1) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r1, this.stops = [], this.setGradientData(r1.pElem, e), this.setGradientOpacity(e, r1), this._isAnimated = !!this._isAnimated;
            }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var r1 = createElementID(), i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                i.setAttribute("id", r1), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                var s, a, n, o = [];
                for(n = 4 * e.g.p, a = 0; a < n; a += 4)s = createNS("stop"), i.appendChild(s), o.push(s);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r1 + ")"), this.gf = i, this.cst = o;
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var r1, i, s, a = createNS("mask"), n = createNS("path");
                    a.appendChild(n);
                    var o = createElementID(), h = createElementID();
                    a.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var p = this.stops;
                    for(i = 4 * t.g.p; i < s; i += 2)(r1 = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r1), p.push(r1);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], SVGGradientFillStyleData), extendPrototype([
                SVGGradientFillStyleData,
                DynamicPropertyContainer
            ], SVGGradientStrokeStyleData);
            var buildShapeString = function(t, e, r1, i) {
                if (0 === e) return "";
                var s, a = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                for(s = 1; s < e; s += 1)h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
                return r1 && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
            }, SVGElementsRenderer = function() {
                var t = new Matrix, e = new Matrix;
                function r1(t, e, r1) {
                    (r1 || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r1 || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
                }
                function i() {}
                function s(r1, i, s) {
                    var a, n, o, h, l, p, c, f, d, u, m, y = i.styles.length, g = i.lvl;
                    for(p = 0; p < y; p += 1){
                        if (h = i.sh._mdf || s, i.styles[p].lvl < g) {
                            for(f = e.reset(), u = g - i.styles[p].lvl, m = i.transformers.length - 1; !h && u > 0;)h = i.transformers[m].mProps._mdf || h, u -= 1, m -= 1;
                            if (h) for(u = g - i.styles[p].lvl, m = i.transformers.length - 1; u > 0;)d = i.transformers[m].mProps.v.props, f.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), u -= 1, m -= 1;
                        } else f = t;
                        if (n = (c = i.sh.paths)._length, h) {
                            for(o = "", a = 0; a < n; a += 1)(l = c.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                            i.caches[p] = o;
                        } else o = i.caches[p];
                        i.styles[p].d += !0 === r1.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf;
                    }
                }
                function a(t, e, r1) {
                    var i = e.style;
                    (e.c._mdf || r1) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r1) && i.pElem.setAttribute("fill-opacity", e.o.v);
                }
                function n(t, e, r1) {
                    o(t, e, r1), h(0, e, r1);
                }
                function o(t, e, r1) {
                    var i, s, a, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, c = e.e.v;
                    if (e.o._mdf || r1) {
                        var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(f, e.o.v);
                    }
                    if (e.s._mdf || r1) {
                        var d = 1 === t.t ? "x1" : "cx", u = "x1" === d ? "y1" : "cy";
                        h.setAttribute(d, p[0]), h.setAttribute(u, p[1]), l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(u, p[1]));
                    }
                    if (e.g._cmdf || r1) {
                        i = e.cst;
                        var m = e.g.c;
                        for(a = i.length, s = 0; s < a; s += 1)(n = i[s]).setAttribute("offset", m[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + m[4 * s + 1] + "," + m[4 * s + 2] + "," + m[4 * s + 3] + ")");
                    }
                    if (l && (e.g._omdf || r1)) {
                        var y = e.g.o;
                        for(a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1)n = i[s], e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"), n.setAttribute("stop-opacity", y[2 * s + 1]);
                    }
                    if (1 === t.t) (e.e._mdf || r1) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                    else if ((e.s._mdf || e.e._mdf || r1) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r1) {
                        o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                        var g = Math.atan2(c[1] - p[1], c[0] - p[0]), v = e.h.v;
                        v >= 1 ? v = .99 : v <= -1 && (v = -0.99);
                        var b = o * v, _ = Math.cos(g + e.a.v) * b + p[0], P = Math.sin(g + e.a.v) * b + p[1];
                        h.setAttribute("fx", _), h.setAttribute("fy", P), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", P));
                    }
                }
                function h(t, e, r1) {
                    var i = e.style, s = e.d;
                    s && (s._mdf || r1) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr), i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || r1) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r1) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r1) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
                }
                return {
                    createRenderFunction: function(t) {
                        switch(t.ty){
                            case "fl":
                                return a;
                            case "gf":
                                return o;
                            case "gs":
                                return n;
                            case "st":
                                return h;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return s;
                            case "tr":
                                return r1;
                            case "no":
                                return i;
                            default:
                                return null;
                        }
                    }
                };
            }();
            function SVGShapeElement(t, e, r1) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r1), this.prevViewData = [];
            }
            function LetterProps(t, e, r1, i, s, a) {
                this.o = t, this.sw = e, this.sc = r1, this.fc = i, this.m = s, this.p = a, this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!r1,
                    fc: !!i,
                    m: !0,
                    p: !0
                };
            }
            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
            }
            extendPrototype([
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
            ], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, r1, i, s = this.shapes.length, a = this.stylesList.length, n = [], o = !1;
                for(r1 = 0; r1 < a; r1 += 1){
                    for(i = this.stylesList[r1], o = !1, n.length = 0, t = 0; t < s; t += 1)-1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n);
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, r1 = t.length;
                for(e = 0; e < r1; e += 1)t[e].setAsAnimated();
            }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var r1, i = new SVGStyleData(t, e), s = i.pElem;
                return "st" === t.ty ? r1 = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r1 = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (r1 = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r1.gf), r1.maskId && (this.globalData.defs.appendChild(r1.ms), this.globalData.defs.appendChild(r1.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r1.maskId + ")"))) : "no" === t.ty && (r1 = new SVGNoStyleData(this, t, i)), "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r1), r1;
            }, SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
            }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var r1 = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r1, r1.o, e);
                return this.addToAnimatedContents(t, i), i;
            }, SVGShapeElement.prototype.createShapeElement = function(t, e, r1) {
                var i = 4;
                "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                var s = new SVGShapeData(e, r1, ShapePropertyFactory.getShapeProp(this, t, i, this));
                return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
            }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for(var r1 = 0, i = this.animatedContents.length; r1 < i;){
                    if (this.animatedContents[r1].element === e) return;
                    r1 += 1;
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                });
            }, SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, r1 = t.styles, i = this.stylesList.length;
                for(e = 0; e < i; e += 1)this.stylesList[e].closed || r1.push(this.stylesList[e]);
            }, SVGShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
                for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
                this.renderModifiers();
            }, SVGShapeElement.prototype.searchShapes = function(t, e, r1, i, s, a, n) {
                var o, h, l, p, c, f, d = [].concat(a), u = t.length - 1, m = [], y = [];
                for(o = u; o >= 0; o -= 1){
                    if ((f = this.searchProcessedElement(t[o])) ? e[o] = r1[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), m.push(e[o].style);
                    else if ("gr" === t[o].ty) {
                        if (f) for(l = e[o].it.length, h = 0; h < l; h += 1)e[o].prevViewData[h] = e[o].it[h];
                        else e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, d, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
                    } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, d.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], d, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), n = !1), y.push(c));
                    this.addProcessedElement(t[o], o + 1);
                }
                for(u = m.length, o = 0; o < u; o += 1)m[o].closed = !0;
                for(u = y.length, o = 0; o < u; o += 1)y[o].closed = !0;
            }, SVGShapeElement.prototype.renderInnerContent = function() {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for(t = 0; t < e; t += 1)this.stylesList[t].reset();
                for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
            }, SVGShapeElement.prototype.renderShape = function() {
                var t, e, r1 = this.animatedContents.length;
                for(t = 0; t < r1; t += 1)e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
            }, SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
            }, LetterProps.prototype.update = function(t, e, r1, i, s, a) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r1 && (this.sc = r1, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, n = !0), n;
            }, TextProperty.prototype.defaultBoxWidth = [
                0,
                0
            ], TextProperty.prototype.copyData = function(t, e) {
                for(var r1 in e)Object.prototype.hasOwnProperty.call(e, r1) && (t[r1] = e[r1]);
                return t;
            }, TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
            }, TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes();
            }, TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
            }, TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
            }, TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData, r1 = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        var i;
                        this.lock = !0, this._mdf = !1;
                        var s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                        for(i = 0; i < s; i += 1)a = r1 !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                        e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() {
                for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, r1 = 0, i = t.length; r1 <= i - 1 && !(r1 === i - 1 || t[r1 + 1].t > e);)r1 += 1;
                return this.keysIndex !== r1 && (this.keysIndex = r1), this.data.d.k[this.keysIndex].s;
            }, TextProperty.prototype.buildFinalText = function(t) {
                for(var e, r1, i = [], s = 0, a = t.length, n = !1; s < a;)e = t.charCodeAt(s), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 ? (r1 = t.charCodeAt(s + 1)) >= 56320 && r1 <= 57343 ? (n || FontManager.isModifier(e, r1) ? (i[i.length - 1] += t.substr(s, 2), n = !1) : i.push(t.substr(s, 2)), s += 1) : i.push(t.charAt(s)) : e > 56319 ? (r1 = t.charCodeAt(s + 1), FontManager.isZeroWidthJoiner(e, r1) ? (n = !0, i[i.length - 1] += t.substr(s, 2), s += 1) : i.push(t.charAt(s))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(s), n = !0) : i.push(t.charAt(s)), s += 1;
                return i;
            }, TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, r1, i, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], c = 0, f = l.m.g, d = 0, u = 0, m = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), _ = 0, P = getFontProperties(b);
                t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r1 = t.finalText.length, t.finalLineHeight = t.lh;
                var E, S = t.tr / 1e3 * t.finalSize;
                if (t.sz) for(var x, A, w = !0, C = t.sz[0], k = t.sz[1]; w;){
                    x = 0, g = 0, r1 = (A = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                    var T = -1;
                    for(e = 0; e < r1; e += 1)E = A[e].charCodeAt(0), i = !1, " " === A[e] ? T = e : 13 !== E && 3 !== E || (g = 0, i = !0, x += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(A[e], b.fStyle, b.fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(A[e], t.f, t.finalSize), g + _ > C && " " !== A[e] ? (-1 === T ? r1 += 1 : e = T, x += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, T === e ? 1 : 0, "\r"), T = -1, g = 0) : (g += _, g += S);
                    x += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, r1 = t.finalText.length, w = !1);
                }
                g = -S, _ = 0;
                var D, M = 0;
                for(e = 0; e < r1; e += 1)if (i = !1, 13 === (E = (D = t.finalText[e]).charCodeAt(0)) || 3 === E ? (M = 0, y.push(g), v = g > v ? g : v, g = -2 * S, s = "", i = !0, m += 1) : s = D, h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(s, t.f, t.finalSize), " " === D ? M += _ + S : (g += _ + S + M, M = 0), p.push({
                    l: _,
                    an: _,
                    add: d,
                    n: i,
                    anIndexes: [],
                    val: s,
                    line: m,
                    animatorJustifyOffset: 0
                }), 2 == f) {
                    if (d += _, "" === s || " " === s || e === r1 - 1) {
                        for("" !== s && " " !== s || (d -= _); u <= e;)p[u].an = d, p[u].ind = c, p[u].extra = _, u += 1;
                        c += 1, d = 0;
                    }
                } else if (3 == f) {
                    if (d += _, "" === s || e === r1 - 1) {
                        for("" === s && (d -= _); u <= e;)p[u].an = d, p[u].ind = c, p[u].extra = _, u += 1;
                        d = 0, c += 1;
                    }
                } else p[c].ind = c, p[c].extra = 0, c += 1;
                if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch(t.boxWidth = v, t.j){
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0;
                }
                t.lineWidths = y;
                var F, I, R, B, V = l.a;
                n = V.length;
                var O = [];
                for(a = 0; a < n; a += 1){
                    for((F = V[a]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), B = 0, R = F.s.b, e = 0; e < r1; e += 1)(I = p[e]).anIndexes[a] = B, (1 == R && "" !== I.val || 2 == R && "" !== I.val && " " !== I.val || 3 == R && (I.n || " " == I.val || e == r1 - 1) || 4 == R && (I.n || e == r1 - 1)) && (1 === F.s.rn && O.push(B), B += 1);
                    l.a[a].s.totalChars = B;
                    var L, $ = -1;
                    if (1 === F.s.rn) for(e = 0; e < r1; e += 1)$ != (I = p[e]).anIndexes[a] && ($ = I.anIndexes[a], L = O.splice(Math.floor(Math.random() * O.length), 1)[0]), I.anIndexes[a] = L;
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
            }, TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var r1 = this.copyData({}, this.data.d.k[e].s);
                r1 = this.copyData(r1, t), this.data.d.k[e].s = r1, this.recalculate(e), this.elem.addDynamicProperty(this);
            }, TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
            }, TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            }, TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            };
            var TextSelectorProp = function() {
                var t = Math.max, e = Math.min, r1 = Math.floor;
                function i(t, e) {
                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                        k: 100
                    }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
                }
                return i.prototype = {
                    getMult: function(i) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var s = 0, a = 0, n = 1, o = 1;
                        this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var h = BezierFactory.getBezierEasing(s, a, n, o).get, l = 0, p = this.finalS, c = this.finalE, f = this.data.sh;
                        if (2 === f) l = h(l = c === p ? i >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
                        else if (3 === f) l = h(l = c === p ? i >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
                        else if (4 === f) c === p ? l = 0 : (l = t(0, e(.5 / (c - p) + (i - p) / (c - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                        else if (5 === f) {
                            if (c === p) l = 0;
                            else {
                                var d = c - p, u = -d / 2 + (i = e(t(0, i + .5 - p), c - p)), m = d / 2;
                                l = Math.sqrt(1 - u * u / (m * m));
                            }
                            l = h(l);
                        } else 6 === f ? (c === p ? l = 0 : (i = e(t(0, i + .5 - p), c - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (c - p))) / 2), l = h(l)) : (i >= r1(p) && (l = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))), l = h(l));
                        if (100 !== this.sm.v) {
                            var y = .01 * this.sm.v;
                            0 === y && (y = 1e-8);
                            var g = .5 - .5 * y;
                            l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1);
                        }
                        return l * this.a.v;
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r1 = this.o.v / e, i = this.s.v / e + r1, s = this.e.v / e + r1;
                        if (i > s) {
                            var a = i;
                            i = s, s = a;
                        }
                        this.finalS = i, this.finalE = s;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], i), {
                    getTextSelectorProp: function(t, e, r1) {
                        return new i(t, e, r1);
                    }
                };
            }();
            function TextAnimatorDataProperty(t, e, r1) {
                var i = {
                    propType: !1
                }, s = PropertyFactory.getProp, a = e.a;
                this.a = {
                    r: a.r ? s(t, a.r, 0, degToRads, r1) : i,
                    rx: a.rx ? s(t, a.rx, 0, degToRads, r1) : i,
                    ry: a.ry ? s(t, a.ry, 0, degToRads, r1) : i,
                    sk: a.sk ? s(t, a.sk, 0, degToRads, r1) : i,
                    sa: a.sa ? s(t, a.sa, 0, degToRads, r1) : i,
                    s: a.s ? s(t, a.s, 1, .01, r1) : i,
                    a: a.a ? s(t, a.a, 1, 0, r1) : i,
                    o: a.o ? s(t, a.o, 0, .01, r1) : i,
                    p: a.p ? s(t, a.p, 1, 0, r1) : i,
                    sw: a.sw ? s(t, a.sw, 0, 0, r1) : i,
                    sc: a.sc ? s(t, a.sc, 1, 0, r1) : i,
                    fc: a.fc ? s(t, a.fc, 1, 0, r1) : i,
                    fh: a.fh ? s(t, a.fh, 0, 0, r1) : i,
                    fs: a.fs ? s(t, a.fs, 0, .01, r1) : i,
                    fb: a.fb ? s(t, a.fb, 0, .01, r1) : i,
                    t: a.t ? s(t, a.t, 0, 0, r1) : i
                }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r1), this.s.t = e.s.t;
            }
            function TextAnimatorProperty(t, e, r1) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r1, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r1);
            }
            function ITextElement() {}
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, r1 = this._textData.a.length, i = PropertyFactory.getProp;
                for(t = 0; t < r1; t += 1)e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    a: i(this._elem, this._textData.p.a, 0, 0, this),
                    f: i(this._elem, this._textData.p.f, 0, 0, this),
                    l: i(this._elem, this._textData.p.l, 0, 0, this),
                    r: i(this._elem, this._textData.p.r, 0, 0, this),
                    p: i(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
            }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var r1, i, s, a, n, o, h, l, p, c, f, d, u, m, y, g, v, b, _, P = this._moreOptions.alignment.v, E = this._animatorsData, S = this._textData, x = this.mHelper, A = this._renderType, w = this.renderedLetters.length, C = t.l;
                    if (this._hasMaskedPath) {
                        if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var k, T = _.v;
                            for(this._pathData.r.v && (T = T.reverse()), n = {
                                tLength: 0,
                                segments: []
                            }, a = T._length - 1, g = 0, s = 0; s < a; s += 1)k = bez.buildBezierData(T.v[s], T.v[s + 1], [
                                T.o[s][0] - T.v[s][0],
                                T.o[s][1] - T.v[s][1]
                            ], [
                                T.i[s + 1][0] - T.v[s + 1][0],
                                T.i[s + 1][1] - T.v[s + 1][1]
                            ]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength;
                            s = a, _.v.c && (k = bez.buildBezierData(T.v[s], T.v[0], [
                                T.o[s][0] - T.v[s][0],
                                T.o[s][1] - T.v[s][1]
                            ], [
                                T.i[0][0] - T.v[0][0],
                                T.i[0][1] - T.v[0][1]
                            ]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength), this._pathData.pi = n;
                        }
                        if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, l = 0, p = !0, m = n.segments, o < 0 && _.v.c) for(n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = (u = m[f = m.length - 1].points).length - 1; o < 0;)o += u[c].partialLength, (c -= 1) < 0 && (c = (u = m[f -= 1].points).length - 1);
                        d = (u = m[f].points)[c - 1], y = (h = u[c]).partialLength;
                    }
                    a = C.length, r1 = 0, i = 0;
                    var D, M, F, I, R, B = 1.2 * t.finalSize * .714, V = !0;
                    F = E.length;
                    var O, L, $, z, G, N, j, H, q, W, U, Y, X = -1, Z = o, K = f, J = c, Q = -1, tt = "", et = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var rt = 0, it = 0, st = 2 === t.j ? -0.5 : -1, at = 0, nt = !0;
                        for(s = 0; s < a; s += 1)if (C[s].n) {
                            for(rt && (rt += it); at < s;)C[at].animatorJustifyOffset = rt, at += 1;
                            rt = 0, nt = !0;
                        } else {
                            for(M = 0; M < F; M += 1)(D = E[M].a).t.propType && (nt && 2 === t.j && (it += D.t.v * st), (R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars)).length ? rt += D.t.v * R[0] * st : rt += D.t.v * R * st);
                            nt = !1;
                        }
                        for(rt && (rt += it); at < s;)C[at].animatorJustifyOffset = rt, at += 1;
                    }
                    for(s = 0; s < a; s += 1){
                        if (x.reset(), z = 1, C[s].n) r1 = 0, i += t.yOffset, i += V ? 1 : 0, o = Z, V = !1, this._hasMaskedPath && (c = J, d = (u = m[f = K].points)[c - 1], y = (h = u[c]).partialLength, l = 0), tt = "", U = "", q = "", Y = "", et = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (Q !== C[s].line) {
                                    switch(t.j){
                                        case 1:
                                            o += g - t.lineWidths[C[s].line];
                                            break;
                                        case 2:
                                            o += (g - t.lineWidths[C[s].line]) / 2;
                                    }
                                    Q = C[s].line;
                                }
                                X !== C[s].ind && (C[X] && (o += C[X].extra), o += C[s].an / 2, X = C[s].ind), o += P[0] * C[s].an * .005;
                                var ot = 0;
                                for(M = 0; M < F; M += 1)(D = E[M].a).p.propType && ((R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars)).length ? ot += D.p.v[0] * R[0] : ot += D.p.v[0] * R), D.a.propType && ((R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars)).length ? ot += D.a.v[0] * R[0] : ot += D.a.v[0] * R);
                                for(p = !0, this._pathData.a.v && (o = .5 * C[0].an + (g - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * X / (a - 1), o += this._pathData.f.v); p;)l + y >= o + ot || !u ? (v = (o + ot - l) / h.partialLength, L = d.point[0] + (h.point[0] - d.point[0]) * v, $ = d.point[1] + (h.point[1] - d.point[1]) * v, x.translate(-P[0] * C[s].an * .005, -P[1] * B * .01), p = !1) : u && (l += h.partialLength, (c += 1) >= u.length && (c = 0, m[f += 1] ? u = m[f].points : _.v.c ? (c = 0, u = m[f = 0].points) : (l -= h.partialLength, u = null)), u && (d = h, y = (h = u[c]).partialLength));
                                O = C[s].an / 2 - C[s].add, x.translate(-O, 0, 0);
                            } else O = C[s].an / 2 - C[s].add, x.translate(-O, 0, 0), x.translate(-P[0] * C[s].an * .005, -P[1] * B * .01, 0);
                            for(M = 0; M < F; M += 1)(D = E[M].a).t.propType && (R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars), 0 === r1 && 0 === t.j || (this._hasMaskedPath ? R.length ? o += D.t.v * R[0] : o += D.t.v * R : R.length ? r1 += D.t.v * R[0] : r1 += D.t.v * R));
                            for(t.strokeWidthAnim && (N = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [
                                t.sc[0],
                                t.sc[1],
                                t.sc[2]
                            ] : [
                                0,
                                0,
                                0
                            ]), t.fillColorAnim && t.fc && (j = [
                                t.fc[0],
                                t.fc[1],
                                t.fc[2]
                            ]), M = 0; M < F; M += 1)(D = E[M].a).a.propType && ((R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars)).length ? x.translate(-D.a.v[0] * R[0], -D.a.v[1] * R[1], D.a.v[2] * R[2]) : x.translate(-D.a.v[0] * R, -D.a.v[1] * R, D.a.v[2] * R));
                            for(M = 0; M < F; M += 1)(D = E[M].a).s.propType && ((R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars)).length ? x.scale(1 + (D.s.v[0] - 1) * R[0], 1 + (D.s.v[1] - 1) * R[1], 1) : x.scale(1 + (D.s.v[0] - 1) * R, 1 + (D.s.v[1] - 1) * R, 1));
                            for(M = 0; M < F; M += 1){
                                if (D = E[M].a, R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars), D.sk.propType && (R.length ? x.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1]) : x.skewFromAxis(-D.sk.v * R, D.sa.v * R)), D.r.propType && (R.length ? x.rotateZ(-D.r.v * R[2]) : x.rotateZ(-D.r.v * R)), D.ry.propType && (R.length ? x.rotateY(D.ry.v * R[1]) : x.rotateY(D.ry.v * R)), D.rx.propType && (R.length ? x.rotateX(D.rx.v * R[0]) : x.rotateX(D.rx.v * R)), D.o.propType && (R.length ? z += (D.o.v * R[0] - z) * R[0] : z += (D.o.v * R - z) * R), t.strokeWidthAnim && D.sw.propType && (R.length ? N += D.sw.v * R[0] : N += D.sw.v * R), t.strokeColorAnim && D.sc.propType) for(H = 0; H < 3; H += 1)R.length ? G[H] += (D.sc.v[H] - G[H]) * R[0] : G[H] += (D.sc.v[H] - G[H]) * R;
                                if (t.fillColorAnim && t.fc) {
                                    if (D.fc.propType) for(H = 0; H < 3; H += 1)R.length ? j[H] += (D.fc.v[H] - j[H]) * R[0] : j[H] += (D.fc.v[H] - j[H]) * R;
                                    D.fh.propType && (j = R.length ? addHueToRGB(j, D.fh.v * R[0]) : addHueToRGB(j, D.fh.v * R)), D.fs.propType && (j = R.length ? addSaturationToRGB(j, D.fs.v * R[0]) : addSaturationToRGB(j, D.fs.v * R)), D.fb.propType && (j = R.length ? addBrightnessToRGB(j, D.fb.v * R[0]) : addBrightnessToRGB(j, D.fb.v * R));
                                }
                            }
                            for(M = 0; M < F; M += 1)(D = E[M].a).p.propType && (R = E[M].s.getMult(C[s].anIndexes[M], S.a[M].s.totalChars), this._hasMaskedPath ? R.length ? x.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1]) : x.translate(0, D.p.v[1] * R, -D.p.v[2] * R) : R.length ? x.translate(D.p.v[0] * R[0], D.p.v[1] * R[1], -D.p.v[2] * R[2]) : x.translate(D.p.v[0] * R, D.p.v[1] * R, -D.p.v[2] * R));
                            if (t.strokeWidthAnim && (q = N < 0 ? 0 : N), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                                if (x.translate(0, -t.ls), x.translate(0, P[1] * B * .01 + i, 0), this._pathData.p.v) {
                                    b = (h.point[1] - d.point[1]) / (h.point[0] - d.point[0]);
                                    var ht = 180 * Math.atan(b) / Math.PI;
                                    h.point[0] < d.point[0] && (ht += 180), x.rotate(-ht * Math.PI / 180);
                                }
                                x.translate(L, $, 0), o -= P[0] * C[s].an * .005, C[s + 1] && X !== C[s + 1].ind && (o += C[s].an / 2, o += .001 * t.tr * t.finalSize);
                            } else {
                                switch(x.translate(r1, i, 0), t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                    case 1:
                                        x.translate(C[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[s].line]), 0, 0);
                                        break;
                                    case 2:
                                        x.translate(C[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[s].line]) / 2, 0, 0);
                                }
                                x.translate(0, -t.ls), x.translate(O, 0, 0), x.translate(P[0] * C[s].an * .005, P[1] * B * .01, 0), r1 += C[s].l + .001 * t.tr * t.finalSize;
                            }
                            "html" === A ? tt = x.toCSS() : "svg" === A ? tt = x.to2dCSS() : et = [
                                x.props[0],
                                x.props[1],
                                x.props[2],
                                x.props[3],
                                x.props[4],
                                x.props[5],
                                x.props[6],
                                x.props[7],
                                x.props[8],
                                x.props[9],
                                x.props[10],
                                x.props[11],
                                x.props[12],
                                x.props[13],
                                x.props[14],
                                x.props[15]
                            ], Y = z;
                        }
                        w <= s ? (I = new LetterProps(Y, q, W, U, tt, et), this.renderedLetters.push(I), w += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(Y, q, W, U, tt, et) || this.lettersChangedFlag);
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
            }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
                DynamicPropertyContainer
            ], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r1) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r1), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r1), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
            }, ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
            }, ITextElement.prototype.createPathShape = function(t, e) {
                var r1, i, s = e.length, a = "";
                for(r1 = 0; r1 < s; r1 += 1)"sh" === e[r1].ty && (i = e[r1].ks.k, a += buildShapeString(i, i.i.length, !0, t));
                return a;
            }, ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e);
            }, ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t);
            }, ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t);
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r1, i, s) {
                switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                    case 1:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r1]), 0, 0);
                        break;
                    case 2:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r1]) / 2, 0, 0);
                }
                e.translate(i, s, 0);
            }, ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
            }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
            var emptyShapeData = {
                shapes: []
            };
            function SVGTextLottieElement(t, e, r1) {
                this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r1);
            }
            function ISolidElement(t, e, r1) {
                this.initElement(t, e, r1);
            }
            function NullElement(t, e, r1) {
                this.initFrame(), this.initBaseData(t, e, r1), this.initFrame(), this.initTransform(t, e, r1), this.initHierarchy();
            }
            function SVGRendererBase() {}
            function ICompElement() {}
            function SVGCompElement(t, e, r1) {
                this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r1), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                };
            }
            function SVGRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var r1 = "";
                if (e && e.title) {
                    var i = createNS("title"), s = createElementID();
                    i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r1 += s;
                }
                if (e && e.description) {
                    var a = createNS("desc"), n = createElementID();
                    a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r1 += " " + n;
                }
                r1 && this.svgElement.setAttribute("aria-labelledby", r1);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    },
                    width: e && e.width,
                    height: e && e.height,
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
            }
            function CVContextData() {
                var t;
                for(this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1)this.saved[t] = createTypedArray("float32", 16);
                this._length = 15;
            }
            function ShapeTransformManager() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
            }
            function CVEffects() {}
            function CVMaskElement(t, e) {
                var r1;
                this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                var i = this.masksProperties.length, s = !1;
                for(r1 = 0; r1 < i; r1 += 1)"n" !== this.masksProperties[r1].mode && (s = !0), this.viewData[r1] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r1], 3);
                this.hasMasks = s, s && this.element.addRenderableComponent(this);
            }
            function CVBaseElement() {}
            function CVShapeData(t, e, r1, i) {
                this.styledShapes = [], this.tr = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                var s, a = 4;
                "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
                var n, o = r1.length;
                for(s = 0; s < o; s += 1)r1[s].closed || (n = {
                    transforms: i.addTransformSequence(r1[s].transforms),
                    trNodes: []
                }, this.styledShapes.push(n), r1[s].elements.push(n));
            }
            function CVShapeElement(t, e, r1) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r1);
            }
            function CVTextElement(t, e, r1) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                }, this.initElement(t, e, r1);
            }
            function CVImageElement(t, e, r1) {
                this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r1);
            }
            function CVSolidElement(t, e, r1) {
                this.initElement(t, e, r1);
            }
            function CanvasRendererBase(t, e) {
                this.animationItem = t, this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    className: e && e.className || "",
                    id: e && e.id || ""
                }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas";
            }
            function CVCompElement(t, e, r1) {
                this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r1), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                };
            }
            function CanvasRenderer(t, e) {
                this.animationItem = t, this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    className: e && e.className || "",
                    id: e && e.id || "",
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas";
            }
            function HBaseElement() {}
            function HSolidElement(t, e, r1) {
                this.initElement(t, e, r1);
            }
            function HShapeElement(t, e, r1) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r1), this.prevViewData = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                };
            }
            function HTextElement(t, e, r1) {
                this.textSpans = [], this.textPaths = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r1);
            }
            function HCameraElement(t, e, r1) {
                this.initFrame(), this.initBaseData(t, e, r1), this.initHierarchy();
                var i = PropertyFactory.getProp;
                if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                    var s, a = t.ks.or.k.length;
                    for(s = 0; s < a; s += 1)t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
                }
                this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                    mProp: this
                };
            }
            function HImageElement(t, e, r1) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r1);
            }
            function HybridRendererBase(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
            }
            function HCompElement(t, e, r1) {
                this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r1), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                };
            }
            function HybridRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    },
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
            }
            extendPrototype([
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement
            ], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
            }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                for(var e = 0, r1 = t.length, i = [], s = ""; e < r1;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
                return i.push(s), i;
            }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                if (t.shapes && t.shapes.length) {
                    var r1 = t.shapes[0];
                    if (r1.it) {
                        var i = r1.it[r1.it.length - 1];
                        i.s && (i.s.k[0] = e, i.s.k[1] = e);
                    }
                }
                return t;
            }, SVGTextLottieElement.prototype.buildNewText = function() {
                var t, e;
                this.addDynamicProperty(this);
                var r1 = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(r1 ? r1.l.length : 0), r1.fc ? this.layerElement.setAttribute("fill", this.buildColor(r1.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r1.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r1.sc)), this.layerElement.setAttribute("stroke-width", r1.sw)), this.layerElement.setAttribute("font-size", r1.finalSize);
                var i = this.globalData.fontManager.getFontByName(r1.f);
                if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                else {
                    this.layerElement.setAttribute("font-family", i.fFamily);
                    var s = r1.fWeight, a = r1.fStyle;
                    this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
                }
                this.layerElement.setAttribute("aria-label", r1.t);
                var n, o = r1.l || [], h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l = this.mHelper, p = this.data.singleShape, c = 0, f = 0, d = !0, u = .001 * r1.tr * r1.finalSize;
                if (!p || h || r1.sz) {
                    var m, y = this.textSpans.length;
                    for(t = 0; t < e; t += 1){
                        if (this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }), !h || !p || 0 === t) {
                            if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                                if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                                    var g = createNS("g");
                                    n.appendChild(g), this.textSpans[t].childSpan = g;
                                }
                                this.textSpans[t].span = n, this.layerElement.appendChild(n);
                            }
                            n.style.display = "inherit";
                        }
                        if (l.reset(), p && (o[t].n && (c = -u, f += r1.yOffset, f += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r1, l, o[t].line, c, f), c += o[t].l || 0, c += u), h) {
                            var v;
                            if (1 === (m = this.globalData.fontManager.getCharData(r1.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r1.f).fFamily)).t) v = new SVGCompElement(m.data, this.globalData, this);
                            else {
                                var b = emptyShapeData;
                                m.data && m.data.shapes && (b = this.buildShapeData(m.data, r1.finalSize)), v = new SVGShapeElement(b, this.globalData, this);
                            }
                            if (this.textSpans[t].glyph) {
                                var _ = this.textSpans[t].glyph;
                                this.textSpans[t].childSpan.removeChild(_.layerElement), _.destroy();
                            }
                            this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r1.finalSize / 100 + "," + r1.finalSize / 100 + ")");
                        } else p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                    }
                    p && n && n.setAttribute("d", "");
                } else {
                    var P = this.textContainer, E = "start";
                    switch(r1.j){
                        case 1:
                            E = "end";
                            break;
                        case 2:
                            E = "middle";
                            break;
                        default:
                            E = "start";
                    }
                    P.setAttribute("text-anchor", E), P.setAttribute("letter-spacing", u);
                    var S = this.buildTextContents(r1.finalText);
                    for(e = S.length, f = r1.ps ? r1.ps[1] + r1.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t].span || createNS("tspan")).textContent = S[t], n.setAttribute("x", 0), n.setAttribute("y", f), n.style.display = "inherit", P.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        glyph: null
                    }), this.textSpans[t].span = n, f += r1.finalLineHeight;
                    this.layerElement.appendChild(P);
                }
                for(; t < this.textSpans.length;)this.textSpans[t].span.style.display = "none", t += 1;
                this._sizeChanged = !0;
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    };
                }
                return this.bbox;
            }, SVGTextLottieElement.prototype.getValue = function() {
                var t, e, r1 = this.textSpans.length;
                for(this.renderedFrame = this.comp.renderedFrame, t = 0; t < r1; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0));
            }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var r1, i, s, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                    for(e = n.length, t = 0; t < e; t += 1)n[t].n || (r1 = a[t], i = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), r1._mdf.m && i.setAttribute("transform", r1.m), r1._mdf.o && i.setAttribute("opacity", r1.o), r1._mdf.sw && i.setAttribute("stroke-width", r1.sw), r1._mdf.sc && i.setAttribute("stroke", r1.sc), r1._mdf.fc && i.setAttribute("fill", r1.fc));
                }
            }, extendPrototype([
                IImageElement
            ], ISolidElement), ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
            }, NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0);
            }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                return null;
            }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([
                BaseElement,
                TransformElement,
                HierarchyElement,
                FrameElement
            ], NullElement), extendPrototype([
                BaseRenderer
            ], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
                return new NullElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createShape = function(t) {
                return new SVGShapeElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createText = function(t) {
                return new SVGTextLottieElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createImage = function(t) {
                return new IImageElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createSolid = function(t) {
                return new ISolidElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                var r1 = createNS("clipPath"), i = createNS("rect");
                i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                var s = createElementID();
                r1.setAttribute("id", s), r1.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r1), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
            }, SVGRendererBase.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
            }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
                var e = 0, r1 = this.layers.length;
                for(e = 0; e < r1; e += 1)if (this.layers[e].ind === t) return e;
                return -1;
            }, SVGRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    e[t] = !0;
                    var r1 = this.createItem(this.layers[t]);
                    if (e[t] = r1, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r1), r1.initExpressions()), this.appendElementInPos(r1, t), this.layers[t].tt) {
                        var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                        if (-1 === i) return;
                        if (this.elements[i] && !0 !== this.elements[i]) {
                            var s = e[i].getMatte(this.layers[t].tt);
                            r1.setMatte(s);
                        } else this.buildItem(i), this.addPendingElement(r1);
                    }
                }
            }, SVGRendererBase.prototype.checkPendingElements = function() {
                for(; this.pendingElements.length;){
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt) for(var e = 0, r1 = this.elements.length; e < r1;){
                        if (this.elements[e] === t) {
                            var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i].getMatte(this.layers[e].tt);
                            t.setMatte(s);
                            break;
                        }
                        e += 1;
                    }
                }
            }, SVGRendererBase.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                    var r1 = this.layers.length;
                    for(this.completeLayers || this.checkLayers(t), e = r1 - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf) for(e = 0; e < r1; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                }
            }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                var r1 = t.getBaseElement();
                if (r1) {
                    for(var i, s = 0; s < e;)this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
                    i ? this.layerElement.insertBefore(r1, i) : this.layerElement.appendChild(r1);
                }
            }, SVGRendererBase.prototype.hide = function() {
                this.layerElement.style.display = "none";
            }, SVGRendererBase.prototype.show = function() {
                this.layerElement.style.display = "block";
            }, extendPrototype([
                BaseElement,
                TransformElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
            ], ICompElement), ICompElement.prototype.initElement = function(t, e, r1) {
                this.initFrame(), this.initBaseData(t, e, r1), this.initTransform(t, e, r1), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
            }, ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                    }
                    var r1, i = this.elements.length;
                    for(this.completeLayers || this.checkLayers(this.renderedFrame), r1 = i - 1; r1 >= 0; r1 -= 1)(this.completeLayers || this.elements[r1]) && (this.elements[r1].prepareFrame(this.renderedFrame - this.layers[r1].st), this.elements[r1]._mdf && (this._mdf = !0));
                }
            }, ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for(t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
            }, ICompElement.prototype.setElements = function(t) {
                this.elements = t;
            }, ICompElement.prototype.getElements = function() {
                return this.elements;
            }, ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
            }, ICompElement.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement();
            }, extendPrototype([
                SVGRendererBase,
                ICompElement,
                SVGBaseElement
            ], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this);
            }, extendPrototype([
                SVGRendererBase
            ], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this);
            }, CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length, e = this.savedOp;
                this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                var r1 = 0;
                for(r1 = this._length; r1 < t; r1 += 1)this.saved[r1] = createTypedArray("float32", 16);
                this._length = t;
            }, CVContextData.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
            }, ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e, r1 = t.length, i = "_";
                    for(e = 0; e < r1; e += 1)i += t[e].transform.key + "_";
                    var s = this.sequences[i];
                    return s || (s = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[i] = s, this.sequenceList.push(s)), s;
                },
                processSequence: function(t, e) {
                    for(var r1, i = 0, s = t.transforms.length, a = e; i < s && !e;){
                        if (t.transforms[i].transform.mProps._mdf) {
                            a = !0;
                            break;
                        }
                        i += 1;
                    }
                    if (a) for(t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)r1 = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r1[0], r1[1], r1[2], r1[3], r1[4], r1[5], r1[6], r1[7], r1[8], r1[9], r1[10], r1[11], r1[12], r1[13], r1[14], r1[15]);
                    t._mdf = a;
                },
                processSequences: function(t) {
                    var e, r1 = this.sequenceList.length;
                    for(e = 0; e < r1; e += 1)this.processSequence(this.sequenceList[e], t);
                },
                getNewKey: function() {
                    return this.transform_key_count += 1, "_" + this.transform_key_count;
                }
            }, CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, r1, i, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
                    for(a.beginPath(), t = 0; t < n; t += 1)if ("n" !== this.masksProperties[t].mode) {
                        var o;
                        this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                        var h = i._length;
                        for(o = 1; o < h; o += 1)r1 = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r1[0], r1[1], r1[2], r1[3], r1[4], r1[5]);
                        r1 = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r1[0], r1[1], r1[2], r1[3], r1[4], r1[5]);
                    }
                    this.element.globalData.renderer.save(!0), a.clip();
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                this.element = null;
            }, CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
                },
                createContent: function() {},
                setBlendMode: function() {
                    var t = this.globalData;
                    if (t.blendMode !== this.data.bm) {
                        t.blendMode = this.data.bm;
                        var e = getBlendMode(this.data.bm);
                        t.canvasContext.globalCompositeOperation = e;
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data, this);
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
                },
                renderFrame: function() {
                    if (!this.hidden && !this.data.hd) {
                        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                        var t = 0 === this.data.ty;
                        this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
                    }
                },
                destroy: function() {
                    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
                },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([
                BaseElement,
                TransformElement,
                CVBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
            ], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
            }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                var r1 = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                }, i = {};
                if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r1.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                    if (r1.lc = lineCapEnum[t.lc || 2], r1.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r1.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r1.wi = i.w.v), t.d) {
                        var s = new DashProperty(this, t.d, "canvas", this);
                        i.d = s, i.d.k || (r1.da = i.d.dashArray, r1.do = i.d.dashoffset[0]);
                    }
                } else r1.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(r1), i.style = r1, i;
            }, CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                };
            }, CVShapeElement.prototype.createTransformElement = function(t) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                };
            }, CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                return this.shapes.push(e), this.addShapeToModifiers(e), e;
            }, CVShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
                for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
            }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e, r1 = this.stylesList.length;
                for(e = 0; e < r1; e += 1)this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for(t = 0; t < e; t += 1)this.stylesList[t].closed || this.stylesList[t].transforms.pop();
            }, CVShapeElement.prototype.closeStyles = function(t) {
                var e, r1 = t.length;
                for(e = 0; e < r1; e += 1)t[e].closed = !0;
            }, CVShapeElement.prototype.searchShapes = function(t, e, r1, i, s) {
                var a, n, o, h, l, p, c = t.length - 1, f = [], d = [], u = [].concat(s);
                for(a = c; a >= 0; a -= 1){
                    if ((h = this.searchProcessedElement(t[a])) ? e[a] = r1[h - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], u), f.push(e[a].style);
                    else if ("gr" === t[a].ty) {
                        if (h) for(o = e[a].it.length, n = 0; n < o; n += 1)e[a].prevViewData[n] = e[a].it[n];
                        else e[a] = this.createGroupElement(t[a]);
                        this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, u);
                    } else "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), u.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), d.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), i = !1), d.push(l));
                    this.addProcessedElement(t[a], a + 1);
                }
                for(this.removeTransformFromStyleList(), this.closeStyles(f), c = d.length, a = 0; a < c; a += 1)d[a].closed = !0;
            }, CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
            }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
            }, CVShapeElement.prototype.drawLayer = function() {
                var t, e, r1, i, s, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, c = this.globalData.canvasContext;
                for(t = 0; t < l; t += 1)if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for(p.save(), a = h.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? h.co : h.grd, c.lineWidth = h.wi, c.lineCap = h.lc, c.lineJoin = h.lj, c.miterLimit = h.ml || 0) : c.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r1 = a.length, e = 0; e < r1; e += 1){
                        for("st" !== o && "gs" !== o || (c.beginPath(), h.da && (c.setLineDash(h.da), c.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1)"m" === n[i].t ? c.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? c.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : c.closePath();
                        "st" !== o && "gs" !== o || (c.stroke(), h.da && c.setLineDash(this.dashResetter));
                    }
                    "st" !== o && "gs" !== o && c.fill(h.r), p.restore();
                }
            }, CVShapeElement.prototype.renderShape = function(t, e, r1, i) {
                var s, a;
                for(a = t, s = e.length - 1; s >= 0; s -= 1)"tr" === e[s].ty ? (a = r1[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], r1[s]) : "fl" === e[s].ty ? this.renderFill(e[s], r1[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], r1[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], r1[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, r1[s].it) : e[s].ty;
                i && this.drawLayer();
            }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var r1, i, s, a = t.trNodes, n = e.paths, o = n._length;
                    a.length = 0;
                    var h = t.transforms.finalTransform;
                    for(s = 0; s < o; s += 1){
                        var l = n.shapes[s];
                        if (l && l.v) {
                            for(i = l._length, r1 = 1; r1 < i; r1 += 1)1 === r1 && a.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }), a.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[r1 - 1], l.i[r1], l.v[r1])
                            });
                            1 === i && a.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }), l.c && i && (a.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[r1 - 1], l.i[0], l.v[0])
                            }), a.push({
                                t: "z"
                            }));
                        }
                    }
                    t.trNodes = a;
                }
            }, CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                    var r1, i = e.styledShapes.length;
                    for(r1 = 0; r1 < i; r1 += 1)this.renderStyledShape(e.styledShapes[r1], e.sh);
                }
            }, CVShapeElement.prototype.renderFill = function(t, e, r1) {
                var i = e.style;
                (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r1._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r1.opacity);
            }, CVShapeElement.prototype.renderGradientFill = function(t, e, r1) {
                var i, s = e.style;
                if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var a, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
                    if (1 === t.t) i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                    else {
                        var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)), p = Math.atan2(h[1] - o[1], h[0] - o[0]), c = e.h.v;
                        c >= 1 ? c = .99 : c <= -1 && (c = -0.99);
                        var f = l * c, d = Math.cos(p + e.a.v) * f + o[0], u = Math.sin(p + e.a.v) * f + o[1];
                        i = n.createRadialGradient(d, u, 0, o[0], o[1], l);
                    }
                    var m = t.g.p, y = e.g.c, g = 1;
                    for(a = 0; a < m; a += 1)e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), i.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
                    s.grd = i;
                }
                s.coOp = e.o.v * r1.opacity;
            }, CVShapeElement.prototype.renderStroke = function(t, e, r1) {
                var i = e.style, s = e.d;
                s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r1._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r1.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
            }, CVShapeElement.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
            }, extendPrototype([
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
                ITextElement
            ], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                var r1 = !1;
                t.sc && (r1 = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var i, s, a, n, o, h, l, p, c, f, d, u, m = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
                this.stroke = r1, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
                var v = this.data.singleShape, b = .001 * t.tr * t.finalSize, _ = 0, P = 0, E = !0, S = 0;
                for(i = 0; i < s; i += 1){
                    n = (a = this.globalData.fontManager.getCharData(t.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), v && y[i].n && (_ = -b, P += t.yOffset, P += E ? 1 : 0, E = !1), c = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, _, P), d = createSizedArray(c - 1);
                    var x = 0;
                    for(p = 0; p < c; p += 1)if ("sh" === l[p].ty) {
                        for(h = l[p].ks.k.i.length, f = l[p].ks.k, u = [], o = 1; o < h; o += 1)1 === o && u.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), u.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
                        u.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), d[x] = u, x += 1;
                    }
                    v && (_ += y[i].l, _ += b), this.textSpans[S] ? this.textSpans[S].elem = d : this.textSpans[S] = {
                        elem: d
                    }, S += 1;
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var t, e, r1, i, s, a, n = this.canvasContext;
                n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                e = l.length;
                var p, c, f = null, d = null, u = null;
                for(t = 0; t < e; t += 1)if (!l[t].n) {
                    if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                        for(o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r1 = 0; r1 < i; r1 += 1)for(a = (c = p[r1]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), s = 2; s < a; s += 6)this.globalData.canvasContext.bezierCurveTo(c[s], c[s + 1], c[s + 2], c[s + 3], c[s + 4], c[s + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                    }
                    if (this.stroke) {
                        for(o && o.sw ? u !== o.sw && (u = o.sw, n.lineWidth = o.sw) : u !== this.values.sWidth && (u = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? d !== o.sc && (d = o.sc, n.strokeStyle = o.sc) : d !== this.values.stroke && (d = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r1 = 0; r1 < i; r1 += 1)for(a = (c = p[r1]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), s = 2; s < a; s += 6)this.globalData.canvasContext.bezierCurveTo(c[s], c[s + 1], c[s + 2], c[s + 3], c[s + 4], c[s + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                    }
                    o && this.globalData.renderer.restore();
                }
            }, extendPrototype([
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
            ], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w, t.height = this.assetData.h;
                    var e, r1, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r1 = a) * o : r1 = (e = s) / o, i.drawImage(this.img, (s - e) / 2, (a - r1) / 2, e, r1, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
                }
            }, CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0);
            }, CVImageElement.prototype.destroy = function() {
                this.img = null;
            }, extendPrototype([
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
            ], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
            }, extendPrototype([
                BaseRenderer
            ], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
                return new CVShapeElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createText = function(t) {
                return new CVTextElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createImage = function(t) {
                return new CVImageElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createSolid = function(t) {
                return new CVSolidElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
                if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
                    if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.contextData.cTr.props;
                        this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                        var r1 = this.contextData.cTr.props;
                        this.canvasContext.setTransform(r1[0], r1[1], r1[4], r1[5], r1[12], r1[13]);
                    } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
                }
            }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
            }, CanvasRendererBase.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
            }, CanvasRendererBase.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && this.canvasContext.save();
                    var e, r1 = this.contextData.cTr.props;
                    this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                    var i = this.contextData.saved[this.contextData.cArrPos];
                    for(e = 0; e < 16; e += 1)i[e] = r1[e];
                    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
                } else this.canvasContext.save();
            }, CanvasRendererBase.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                    var e, r1 = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props;
                    for(e = 0; e < 16; e += 1)i[e] = r1[e];
                    this.canvasContext.setTransform(r1[0], r1[1], r1[4], r1[5], r1[12], r1[13]), r1 = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r1, this.globalData.currentGlobalAlpha !== r1 && (this.canvasContext.globalAlpha = r1, this.globalData.currentGlobalAlpha = r1);
                } else this.canvasContext.restore();
            }, CanvasRendererBase.prototype.configAnimation = function(t) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var e = this.animationItem.container.style;
                    e.width = "100%", e.height = "100%";
                    var r1 = "0px 0px 0px";
                    e.transformOrigin = r1, e.mozTransformOrigin = r1, e.webkitTransformOrigin = r1, e["-webkit-transform"] = r1, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
                } else this.canvasContext = this.renderConfig.context;
                this.data = t, this.layers = t.layers, this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
            }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                var r1, i, s, a;
                if (this.reset(), t ? (r1 = t, i = e, this.canvasContext.canvas.width = r1, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r1 = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r1 = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r1 * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                    var n = this.renderConfig.preserveAspectRatio.split(" "), o = n[1] || "meet", h = n[0] || "xMidYMid", l = h.substr(0, 4), p = h.substr(4);
                    s = r1 / i, (a = this.transformCanvas.w / this.transformCanvas.h) > s && "meet" === o || a < s && "slice" === o ? (this.transformCanvas.sx = r1 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r1 / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (r1 - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (r1 - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (a > s && "meet" === o || a < s && "slice" === o) ? (i - this.transformCanvas.h * (r1 / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (a > s && "meet" === o || a < s && "slice" === o) ? (i - this.transformCanvas.h * (r1 / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
                } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r1 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [
                    this.transformCanvas.sx,
                    0,
                    0,
                    0,
                    0,
                    this.transformCanvas.sy,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    this.transformCanvas.tx,
                    this.transformCanvas.ty,
                    0,
                    1
                ], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
            }, CanvasRendererBase.prototype.destroy = function() {
                var t;
                for(this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
            }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    var r1;
                    this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                    var i = this.layers.length;
                    for(this.completeLayers || this.checkLayers(t), r1 = 0; r1 < i; r1 += 1)(this.completeLayers || this.elements[r1]) && this.elements[r1].prepareFrame(t - this.layers[r1].st);
                    if (this.globalData._mdf) {
                        for(!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r1 = i - 1; r1 >= 0; r1 -= 1)(this.completeLayers || this.elements[r1]) && this.elements[r1].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore();
                    }
                }
            }, CanvasRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    var r1 = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = r1, r1.initExpressions();
                }
            }, CanvasRendererBase.prototype.checkPendingElements = function() {
                for(; this.pendingElements.length;)this.pendingElements.pop().checkParenting();
            }, CanvasRendererBase.prototype.hide = function() {
                this.animationItem.container.style.display = "none";
            }, CanvasRendererBase.prototype.show = function() {
                this.animationItem.container.style.display = "block";
            }, extendPrototype([
                CanvasRendererBase,
                ICompElement,
                CVBaseElement
            ], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var t, e = this.canvasContext;
                for(e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
            }, CVCompElement.prototype.destroy = function() {
                var t;
                for(t = this.layers.length - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy();
                this.layers = null, this.elements = null;
            }, CVCompElement.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this);
            }, extendPrototype([
                CanvasRendererBase
            ], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this);
            }, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function() {
                    var t = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var e = this.finalTransform.mat.toCSS();
                        t.transform = e, t.webkitTransform = e;
                    }
                    this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                },
                destroy: function() {
                    this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData);
                },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
            ], HSolidElement), HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
            }, extendPrototype([
                BaseElement,
                TransformElement,
                HSolidElement,
                SVGShapeElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
            ], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
            }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var r1, i = t.length;
                for(r1 = 0; r1 < i; r1 += 1)e = t[r1].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e;
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var r1, i, s, a, n, o = t.sh.v, h = t.transformers, l = o._length;
                if (!(l <= 1)) {
                    for(r1 = 0; r1 < l - 1; r1 += 1)i = this.getTransformedPoint(h, o.v[r1]), s = this.getTransformedPoint(h, o.o[r1]), a = this.getTransformedPoint(h, o.i[r1 + 1]), n = this.getTransformedPoint(h, o.v[r1 + 1]), this.checkBounds(i, s, a, n, e);
                    o.c && (i = this.getTransformedPoint(h, o.v[r1]), s = this.getTransformedPoint(h, o.o[r1]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e));
                }
            }, HShapeElement.prototype.checkBounds = function(t, e, r1, i, s) {
                this.getBoundsOfCurve(t, e, r1, i);
                var a = this.shapeBoundingBox;
                s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
            }, HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r1, i) {
                for(var s, a, n, o, h, l, p, c = [
                    [
                        t[0],
                        i[0]
                    ],
                    [
                        t[1],
                        i[1]
                    ]
                ], f = 0; f < 2; ++f)a = 6 * t[f] - 12 * e[f] + 6 * r1[f], s = -3 * t[f] + 9 * e[f] - 9 * r1[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 == (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && c[f].push(this.calculateF(o, t, e, r1, i, f)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && c[f].push(this.calculateF(l, t, e, r1, i, f)), (p = (-a - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && c[f].push(this.calculateF(p, t, e, r1, i, f))));
                this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1]);
            }, HShapeElement.prototype.calculateF = function(t, e, r1, i, s, a) {
                return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r1[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a];
            }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var r1, i = t.length;
                for(r1 = 0; r1 < i; r1 += 1)t[r1] && t[r1].sh ? this.calculateShapeBoundingBox(t[r1], e) : t[r1] && t[r1].it ? this.calculateBoundingBox(t[r1].it, e) : t[r1] && t[r1].style && t[r1].w && this.expandStrokeBoundingBox(t[r1].w, e);
            }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                var r1 = 0;
                if (t.keyframes) {
                    for(var i = 0; i < t.keyframes.length; i += 1){
                        var s = t.keyframes[i].s;
                        s > r1 && (r1 = s);
                    }
                    r1 *= t.mult;
                } else r1 = t.v * t.mult;
                e.x -= r1, e.xMax += r1, e.y -= r1, e.yMax += r1;
            }, HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
            }, HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox, e = 999999;
                    if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                    var r1 = !1;
                    if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r1 = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r1 = !0), r1 || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                        this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        i.transform = s, i.webkitTransform = s;
                    }
                }
            }, extendPrototype([
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement
            ], HTextElement), HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t), this.innerElem = t;
                } else this.renderType = "html", this.innerElem = this.layerElement;
                this.checkParenting();
            }, HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style, r1 = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                e.fill = r1, e.color = r1, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                var i, s, a = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars) {
                    if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                    else {
                        e.fontFamily = a.fFamily;
                        var n = t.fWeight, o = t.fStyle;
                        e.fontStyle = o, e.fontWeight = n;
                    }
                }
                var h, l, p, c = t.l;
                s = c.length;
                var f, d = this.mHelper, u = "", m = 0;
                for(i = 0; i < s; i += 1){
                    if (this.globalData.fontManager.chars ? (this.textPaths[m] ? h = this.textPaths[m] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? p = (l = this.textSpans[m]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (l = this.textSpans[m], h = this.textPaths[m]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                        var y, g = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (y = g ? g.data : null, d.reset(), y && y.shapes && y.shapes.length && (f = y.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), u = this.createPathShape(d, f), h.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(h);
                        else {
                            if (this.innerElem.appendChild(l), y && y.shapes) {
                                document.body.appendChild(p);
                                var v = p.getBBox();
                                p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                var b = p.style, _ = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                b.transform = _, b.webkitTransform = _, c[i].yOffset = v.y - 1;
                            } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                            l.appendChild(p);
                        }
                    } else if (h.textContent = c[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                    else {
                        this.innerElem.appendChild(l);
                        var P = h.style, E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                        P.transform = E, P.webkitTransform = E;
                    }
                    this.isMasked ? this.textSpans[m] = h : this.textSpans[m] = l, this.textSpans[m].style.display = "block", this.textPaths[m] = h, m += 1;
                }
                for(; m < this.textSpans.length;)this.textSpans[m].style.display = "none", m += 1;
            }, HTextElement.prototype.renderInnerContent = function() {
                var t;
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                        var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        t.transform = e, t.webkitTransform = e;
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var r1, i, s, a, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                    for(i = l.length, r1 = 0; r1 < i; r1 += 1)l[r1].n ? o += 1 : (a = this.textSpans[r1], n = this.textPaths[r1], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var p = this.innerElem.getBBox();
                        if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                            this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                            var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            t.transform = c, t.webkitTransform = c;
                        }
                    }
                }
            }, extendPrototype([
                BaseElement,
                FrameElement,
                HierarchyElement
            ], HCameraElement), HCameraElement.prototype.setup = function() {
                var t, e, r1, i, s = this.comp.threeDElements.length;
                for(t = 0; t < s; t += 1)if ("3d" === (e = this.comp.threeDElements[t]).type) {
                    r1 = e.perspectiveElem.style, i = e.container.style;
                    var a = this.pe.v + "px", n = "0px 0px 0px", o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    r1.perspective = a, r1.webkitPerspective = a, i.transformOrigin = n, i.mozTransformOrigin = n, i.webkitTransformOrigin = n, r1.transform = o, r1.webkitTransform = o;
                }
            }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var t, e, r1 = this._isFirstFrame;
                if (this.hierarchy) for(e = this.hierarchy.length, t = 0; t < e; t += 1)r1 = this.hierarchy[t].finalTransform.mProp._mdf || r1;
                if (r1 || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy) for(t = e = this.hierarchy.length - 1; t >= 0; t -= 1){
                        var i = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                    }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var s;
                        s = this.p ? [
                            this.p.v[0] - this.a.v[0],
                            this.p.v[1] - this.a.v[1],
                            this.p.v[2] - this.a.v[2]
                        ] : [
                            this.px.v - this.a.v[0],
                            this.py.v - this.a.v[1],
                            this.pz.v - this.a.v[2]
                        ];
                        var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [
                            s[0] / a,
                            s[1] / a,
                            s[2] / a
                        ], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]);
                        this.mat.rotateY(l).rotateX(-h);
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var p = !this._prevMat.equals(this.mat);
                    if ((p || this.pe._mdf) && this.comp.threeDElements) {
                        var c, f, d;
                        for(e = this.comp.threeDElements.length, t = 0; t < e; t += 1)if ("3d" === (c = this.comp.threeDElements[t]).type) {
                            if (p) {
                                var u = this.mat.toCSS();
                                (d = c.container.style).transform = u, d.webkitTransform = u;
                            }
                            this.pe._mdf && ((f = c.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
                        }
                        this.mat.clone(this._prevMat);
                    }
                }
                this._isFirstFrame = !1;
            }, HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0);
            }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                return null;
            }, extendPrototype([
                BaseElement,
                TransformElement,
                HBaseElement,
                HSolidElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
            ], HImageElement), HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData), e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
            }, extendPrototype([
                BaseRenderer
            ], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                for(; this.pendingElements.length;)this.pendingElements.pop().checkParenting();
            }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                var r1 = t.getBaseElement();
                if (r1) {
                    var i = this.layers[e];
                    if (i.ddd && this.supports3d) this.addTo3dContainer(r1, e);
                    else if (this.threeDElements) this.addTo3dContainer(r1, e);
                    else {
                        for(var s, a, n = 0; n < e;)this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
                        s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r1, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r1);
                    }
                }
            }, HybridRendererBase.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
            }, HybridRendererBase.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                for(var e = 0, r1 = this.threeDElements.length; e < r1;){
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                    e += 1;
                }
                return null;
            }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                var r1, i, s = createTag("div");
                styleDiv(s);
                var a = createTag("div");
                if (styleDiv(a), "3d" === e) {
                    (r1 = s.style).width = this.globalData.compSize.w + "px", r1.height = this.globalData.compSize.h + "px";
                    var n = "50% 50%";
                    r1.webkitTransformOrigin = n, r1.mozTransformOrigin = n, r1.transformOrigin = n;
                    var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (i = a.style).transform = o, i.webkitTransform = o;
                }
                s.appendChild(a);
                var h = {
                    container: a,
                    perspectiveElem: s,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(h), h;
            }, HybridRendererBase.prototype.build3dContainers = function() {
                var t, e, r1 = this.layers.length, i = "";
                for(t = 0; t < r1; t += 1)this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                for(t = (r1 = this.threeDElements.length) - 1; t >= 0; t -= 1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
            }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                for(var r1 = 0, i = this.threeDElements.length; r1 < i;){
                    if (e <= this.threeDElements[r1].endPos) {
                        for(var s, a = this.threeDElements[r1].startPos; a < e;)this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                        s ? this.threeDElements[r1].container.insertBefore(t, s) : this.threeDElements[r1].container.appendChild(t);
                        break;
                    }
                    r1 += 1;
                }
            }, HybridRendererBase.prototype.configAnimation = function(t) {
                var e = createTag("div"), r1 = this.animationItem.wrapper, i = e.style;
                i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r1.appendChild(e), i.overflow = "hidden";
                var s = createNS("svg");
                s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
                var a = createNS("defs");
                s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
            }, HybridRendererBase.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for(t = 0; t < e; t += 1)this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
            }, HybridRendererBase.prototype.updateContainerSize = function() {
                var t, e, r1, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = s / a;
                this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r1 = 0, i = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r1 = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
                var o = this.resizerElem.style;
                o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r1 + "," + i + ",0,1)", o.transform = o.webkitTransform;
            }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                this.resizerElem.style.display = "none";
            }, HybridRendererBase.prototype.show = function() {
                this.resizerElem.style.display = "block";
            }, HybridRendererBase.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else {
                    var t, e = this.globalData.compSize.w, r1 = this.globalData.compSize.h, i = this.threeDElements.length;
                    for(t = 0; t < i; t += 1){
                        var s = this.threeDElements[t].perspectiveElem.style;
                        s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r1, 2)) + "px", s.perspective = s.webkitPerspective;
                    }
                }
            }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                var e, r1 = t.length, i = createTag("div");
                for(e = 0; e < r1; e += 1)if (t[e].xt) {
                    var s = this.createComp(t[e], i, this.globalData.comp, null);
                    s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
                }
            }, extendPrototype([
                HybridRendererBase,
                ICompElement,
                HBaseElement
            ], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
            }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                for(var r1, i = 0; i < e;)this.elements[i] && this.elements[i].getBaseElement && (r1 = this.elements[i].getBaseElement()), i += 1;
                r1 ? this.layerElement.insertBefore(t, r1) : this.layerElement.appendChild(t);
            }, HCompElement.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
            }, extendPrototype([
                HybridRendererBase
            ], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
            };
            var CompExpressionInterface = function(t) {
                function e(e) {
                    for(var r1 = 0, i = t.layers.length; r1 < i;){
                        if (t.layers[r1].nm === e || t.layers[r1].ind === e) return t.elements[r1].layerInterface;
                        r1 += 1;
                    }
                    return null;
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
            }, Expressions = function() {
                var t = {
                    initExpressions: function(t) {
                        var e = 0, r1 = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                            e += 1;
                        }, t.renderer.globalData.popExpression = function() {
                            0 == (e -= 1) && function() {
                                var t, e = r1.length;
                                for(t = 0; t < e; t += 1)r1[t].release();
                                r1.length = 0;
                            }();
                        }, t.renderer.globalData.registerExpressionProperty = function(t) {
                            -1 === r1.indexOf(t) && r1.push(t);
                        };
                    }
                };
                return t;
            }(), MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t, this._data = e;
                }
                return Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                    }
                }), Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                    }
                }), function(e) {
                    var r1, i = createSizedArray(e.viewData.length), s = e.viewData.length;
                    for(r1 = 0; r1 < s; r1 += 1)i[r1] = new t(e.viewData[r1], e.masksProperties[r1]);
                    return function(t) {
                        for(r1 = 0; r1 < s;){
                            if (e.masksProperties[r1].nm === t) return i[r1];
                            r1 += 1;
                        }
                        return null;
                    };
                };
            }(), ExpressionPropertyInterface = function() {
                var t = {
                    pv: 0,
                    v: 0,
                    mult: 1
                }, e = {
                    pv: [
                        0,
                        0,
                        0
                    ],
                    v: [
                        0,
                        0,
                        0
                    ],
                    mult: 1
                };
                function r1(t, e, r1) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame);
                        }
                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                        if (!t.numKeys) return 0;
                        var s = "";
                        s = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                        var a = "unidimensional" === r1 ? new Number(s) : Object.assign({}, s);
                        return a.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r1 ? s[0] : s, a;
                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup;
                }
                function i() {
                    return t;
                }
                return function(s) {
                    return s ? "unidimensional" === s.propType ? function(e) {
                        e && "pv" in e || (e = t);
                        var i = 1 / e.mult, s = e.pv * i, a = new Number(s);
                        return a.value = s, r1(a, e, "unidimensional"), function() {
                            return e.k && e.getValue(), s = e.v * i, a.value !== s && ((a = new Number(s)).value = s, r1(a, e, "unidimensional")), a;
                        };
                    }(s) : function(t) {
                        t && "pv" in t || (t = e);
                        var i = 1 / t.mult, s = t.data && t.data.l || t.pv.length, a = createTypedArray("float32", s), n = createTypedArray("float32", s);
                        return a.value = n, r1(a, t, "multidimensional"), function() {
                            t.k && t.getValue();
                            for(var e = 0; e < s; e += 1)n[e] = t.v[e] * i, a[e] = n[e];
                            return a;
                        };
                    }(s) : i;
                };
            }(), TransformExpressionInterface = function(t) {
                function e(t) {
                    switch(t){
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null;
                    }
                }
                var r1, i, s, a;
                return Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }), Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }), Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }), Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }), Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }), t.p ? a = ExpressionPropertyInterface(t.p) : (r1 = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? a() : [
                            r1(),
                            i(),
                            s ? s() : 0
                        ];
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }), Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }), Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }), Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }), Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }), Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }), Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }), Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }), e;
            }, LayerExpressionInterface = function() {
                function t(t) {
                    var e = new Matrix;
                    return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e;
                }
                function e(t, e) {
                    var r1 = this.getMatrix(e);
                    return r1.props[12] = 0, r1.props[13] = 0, r1.props[14] = 0, this.applyPoint(r1, t);
                }
                function r1(t, e) {
                    var r1 = this.getMatrix(e);
                    return this.applyPoint(r1, t);
                }
                function i(t, e) {
                    var r1 = this.getMatrix(e);
                    return r1.props[12] = 0, r1.props[13] = 0, r1.props[14] = 0, this.invertPoint(r1, t);
                }
                function s(t, e) {
                    var r1 = this.getMatrix(e);
                    return this.invertPoint(r1, t);
                }
                function a(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r1, i = this._elem.hierarchy.length;
                        for(r1 = 0; r1 < i; r1 += 1)this._elem.hierarchy[r1].finalTransform.mProp.applyToMatrix(t);
                    }
                    return t.applyToPointArray(e[0], e[1], e[2] || 0);
                }
                function n(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r1, i = this._elem.hierarchy.length;
                        for(r1 = 0; r1 < i; r1 += 1)this._elem.hierarchy[r1].finalTransform.mProp.applyToMatrix(t);
                    }
                    return t.inversePoint(e);
                }
                function o(t) {
                    var e = new Matrix;
                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r1, i = this._elem.hierarchy.length;
                        for(r1 = 0; r1 < i; r1 += 1)this._elem.hierarchy[r1].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t);
                    }
                    return e.inversePoint(t);
                }
                function h() {
                    return [
                        1,
                        1,
                        1,
                        1
                    ];
                }
                return function(l) {
                    var p;
                    function c(t) {
                        switch(t){
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return c.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return p;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return c.effect;
                            case "ADBE Text Properties":
                                return c.textInterface;
                            default:
                                return null;
                        }
                    }
                    c.getMatrix = t, c.invertPoint = n, c.applyPoint = a, c.toWorld = r1, c.toWorldVec = e, c.fromWorld = s, c.fromWorldVec = i, c.toComp = r1, c.fromComp = o, c.sampleImage = h, c.sourceRectAtTime = l.sourceRectAtTime.bind(l), c._elem = l;
                    var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(c, {
                        hasParent: {
                            get: function() {
                                return l.hierarchy.length;
                            }
                        },
                        parent: {
                            get: function() {
                                return l.hierarchy[0].layerInterface;
                            }
                        },
                        rotation: getDescriptor(p, "rotation"),
                        scale: getDescriptor(p, "scale"),
                        position: getDescriptor(p, "position"),
                        opacity: getDescriptor(p, "opacity"),
                        anchorPoint: f,
                        anchor_point: f,
                        transform: {
                            get: function() {
                                return p;
                            }
                        },
                        active: {
                            get: function() {
                                return l.isInRange;
                            }
                        }
                    }), c.startTime = l.data.st, c.index = l.data.ind, c.source = l.data.refId, c.height = 0 === l.data.ty ? l.data.h : 100, c.width = 0 === l.data.ty ? l.data.w : 100, c.inPoint = l.data.ip / l.comp.globalData.frameRate, c.outPoint = l.data.op / l.comp.globalData.frameRate, c._name = l.data.nm, c.registerMaskInterface = function(t) {
                        c.mask = new MaskManagerInterface(t, l);
                    }, c.registerEffectsInterface = function(t) {
                        c.effect = t;
                    }, c;
                };
            }(), propertyGroupFactory = function(t, e) {
                return function(r1) {
                    return (r1 = void 0 === r1 ? 1 : r1) <= 0 ? t : e(r1 - 1);
                };
            }, PropertyInterface = function(t, e) {
                var r1 = {
                    _name: t
                };
                return function(t) {
                    return (t = void 0 === t ? 1 : t) <= 0 ? r1 : e(t - 1);
                };
            }, EffectsExpressionInterface = function() {
                var t = {
                    createEffectsInterface: function(t, r1) {
                        if (t.effectsManager) {
                            var i, s = [], a = t.data.ef, n = t.effectsManager.effectElements.length;
                            for(i = 0; i < n; i += 1)s.push(e(a[i], t.effectsManager.effectElements[i], r1, t));
                            var o = t.data.ef || [], h = function(t) {
                                for(i = 0, n = o.length; i < n;){
                                    if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return s[i];
                                    i += 1;
                                }
                                return null;
                            };
                            return Object.defineProperty(h, "numProperties", {
                                get: function() {
                                    return o.length;
                                }
                            }), h;
                        }
                        return null;
                    }
                };
                function e(t, i, s, a) {
                    function n(e) {
                        for(var r1 = t.ef, i = 0, s = r1.length; i < s;){
                            if (e === r1[i].nm || e === r1[i].mn || e === r1[i].ix) return 5 === r1[i].ty ? l[i] : l[i]();
                            i += 1;
                        }
                        throw new Error;
                    }
                    var o, h = propertyGroupFactory(n, s), l = [], p = t.ef.length;
                    for(o = 0; o < p; o += 1)5 === t.ef[o].ty ? l.push(e(t.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : l.push(r1(i.effectElements[o], t.ef[o].ty, a, h));
                    return "ADBE Color Control" === t.mn && Object.defineProperty(n, "color", {
                        get: function() {
                            return l[0]();
                        }
                    }), Object.defineProperties(n, {
                        numProperties: {
                            get: function() {
                                return t.np;
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        propertyGroup: {
                            value: h
                        }
                    }), n.enabled = 0 !== t.en, n.active = n.enabled, n;
                }
                function r1(t, e, r1, i) {
                    var s = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)), function() {
                        return 10 === e ? r1.comp.compInterface(t.p.v) : s();
                    };
                }
                return t;
            }(), ShapePathInterface = function(t, e, r1) {
                var i = e.sh;
                function s(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null;
                }
                var a = propertyGroupFactory(s, r1);
                return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
                    path: {
                        get: function() {
                            return i.k && i.getValue(), i;
                        }
                    },
                    shape: {
                        get: function() {
                            return i.k && i.getValue(), i;
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    },
                    propertyGroup: {
                        value: r1
                    }
                }), s;
            }, ShapeExpressionInterface = function() {
                function t(t, n, f) {
                    var d, u = [], m = t ? t.length : 0;
                    for(d = 0; d < m; d += 1)"gr" === t[d].ty ? u.push(e(t[d], n[d], f)) : "fl" === t[d].ty ? u.push(r1(t[d], n[d], f)) : "st" === t[d].ty ? u.push(s(t[d], n[d], f)) : "tm" === t[d].ty ? u.push(a(t[d], n[d], f)) : "tr" === t[d].ty || ("el" === t[d].ty ? u.push(o(t[d], n[d], f)) : "sr" === t[d].ty ? u.push(h(t[d], n[d], f)) : "sh" === t[d].ty ? u.push(ShapePathInterface(t[d], n[d], f)) : "rc" === t[d].ty ? u.push(l(t[d], n[d], f)) : "rd" === t[d].ty ? u.push(p(t[d], n[d], f)) : "rp" === t[d].ty ? u.push(c(t[d], n[d], f)) : "gf" === t[d].ty ? u.push(i(t[d], n[d], f)) : u.push((t[d], n[d], function() {
                        return null;
                    })));
                    return u;
                }
                function e(e, r1, i) {
                    var s = function(t) {
                        switch(t){
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return s.content;
                            default:
                                return s.transform;
                        }
                    };
                    s.propertyGroup = propertyGroupFactory(s, i);
                    var a = function(e, r1, i) {
                        var s, a = function(t) {
                            for(var e = 0, r1 = s.length; e < r1;){
                                if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                                e += 1;
                            }
                            return "number" == typeof t ? s[t - 1] : null;
                        };
                        a.propertyGroup = propertyGroupFactory(a, i), s = t(e.it, r1.it, a.propertyGroup), a.numProperties = s.length;
                        var o = n(e.it[e.it.length - 1], r1.it[r1.it.length - 1], a.propertyGroup);
                        return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a;
                    }(e, r1, s.propertyGroup), o = n(e.it[e.it.length - 1], r1.it[r1.it.length - 1], s.propertyGroup);
                    return s.content = a, s.transform = o, Object.defineProperty(s, "_name", {
                        get: function() {
                            return e.nm;
                        }
                    }), s.numProperties = e.np, s.propertyIndex = e.ix, s.nm = e.nm, s.mn = e.mn, s;
                }
                function r1(t, e, r1) {
                    function i(t) {
                        return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null;
                    }
                    return Object.defineProperties(i, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", r1)), e.o.setGroupProperty(PropertyInterface("Opacity", r1)), i;
                }
                function i(t, e, r1) {
                    function i(t) {
                        return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null;
                    }
                    return Object.defineProperties(i, {
                        startPoint: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        type: {
                            get: function() {
                                return "a";
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.s.setGroupProperty(PropertyInterface("Start Point", r1)), e.e.setGroupProperty(PropertyInterface("End Point", r1)), e.o.setGroupProperty(PropertyInterface("Opacity", r1)), i;
                }
                function s(t, e, r1) {
                    var i, s = propertyGroupFactory(l, r1), a = propertyGroupFactory(h, s);
                    function n(r1) {
                        Object.defineProperty(h, t.d[r1].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[r1].p)
                        });
                    }
                    var o = t.d ? t.d.length : 0, h = {};
                    for(i = 0; i < o; i += 1)n(i), e.d.dataProps[i].p.setGroupProperty(a);
                    function l(t) {
                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null;
                    }
                    return Object.defineProperties(l, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return h;
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l;
                }
                function a(t, e, r1) {
                    function i(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null;
                    }
                    var s = propertyGroupFactory(i, r1);
                    return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", s)), e.e.setGroupProperty(PropertyInterface("End", s)), e.o.setGroupProperty(PropertyInterface("Offset", s)), i.propertyIndex = t.ix, i.propertyGroup = r1, Object.defineProperties(i, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.mn = t.mn, i;
                }
                function n(t, e, r1) {
                    function i(e) {
                        return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null;
                    }
                    var s = propertyGroupFactory(i, r1);
                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(i, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r1, i;
                }
                function o(t, e, r1) {
                    function i(e) {
                        return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null;
                    }
                    var s = propertyGroupFactory(i, r1);
                    i.propertyIndex = t.ix;
                    var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return a.s.setGroupProperty(PropertyInterface("Size", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(i, {
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.mn = t.mn, i;
                }
                function h(t, e, r1) {
                    function i(e) {
                        return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius;
                    }
                    var s = propertyGroupFactory(i, r1), a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return i.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", s)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), a.pt.setGroupProperty(PropertyInterface("Points", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(i, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(a.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(a.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(a.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(a.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(a.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.mn = t.mn, i;
                }
                function l(t, e, r1) {
                    function i(e) {
                        return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null;
                    }
                    var s = propertyGroupFactory(i, r1), a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return i.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", s)), a.s.setGroupProperty(PropertyInterface("Size", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(i, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.mn = t.mn, i;
                }
                function p(t, e, r1) {
                    function i(e) {
                        return t.r.ix === e || "Round Corners 1" === e ? i.radius : null;
                    }
                    var s = propertyGroupFactory(i, r1), a = e;
                    return i.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(i, {
                        radius: {
                            get: ExpressionPropertyInterface(a.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.mn = t.mn, i;
                }
                function c(t, e, r1) {
                    function i(e) {
                        return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null;
                    }
                    var s = propertyGroupFactory(i, r1), a = e;
                    return i.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", s)), a.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(i, {
                        copies: {
                            get: ExpressionPropertyInterface(a.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(a.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), i.mn = t.mn, i;
                }
                return function(e, r1, i) {
                    var s;
                    function a(t) {
                        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];
                        for(var e = 0, r1 = s.length; e < r1;){
                            if (s[e]._name === t) return s[e];
                            e += 1;
                        }
                        return null;
                    }
                    return a.propertyGroup = propertyGroupFactory(a, function() {
                        return i;
                    }), s = t(e, r1, a.propertyGroup), a.numProperties = s.length, a._name = "Contents", a;
                };
            }(), TextExpressionInterface = function(t) {
                var e, r1;
                function i(t) {
                    return "ADBE Text Document" === t ? i.sourceText : null;
                }
                return Object.defineProperty(i, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var i = t.textProperty.currentData.t;
                        return i !== e && (t.textProperty.currentData.t = e, (r1 = new String(i)).value = i || new String(i)), r1;
                    }
                }), i;
            };
            function _typeof$2(t) {
                return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof$2(t);
            }
            var FootageInterface = (dataInterfaceFactory = function(t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null;
                }
                return e._name = "Outline", e.outlineInterface = function(t) {
                    var e = "", r1 = t.getFootageData();
                    function i(t) {
                        if (r1[t]) return e = t, "object" === _typeof$2(r1 = r1[t]) ? i : r1;
                        var s = t.indexOf(e);
                        if (-1 !== s) {
                            var a = parseInt(t.substr(s + e.length), 10);
                            return "object" === _typeof$2(r1 = r1[a]) ? i : r1;
                        }
                        return "";
                    }
                    return function() {
                        return e = "", r1 = t.getFootageData(), i;
                    };
                }(t), e;
            }, function(t) {
                function e(t) {
                    return "Data" === t ? e.dataInterface : null;
                }
                return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e;
            }), dataInterfaceFactory, interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface
            };
            function getInterface(t) {
                return interfaces[t] || null;
            }
            function _typeof$1(t) {
                return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof$1(t);
            }
            function seedRandom(t, e) {
                var r1 = this, i = 256, s = e.pow(i, 6), a = e.pow(2, 52), n = 2 * a, o = 255;
                function h(t) {
                    var e, r1 = t.length, s = this, a = 0, n = s.i = s.j = 0, h = s.S = [];
                    for(r1 || (t = [
                        r1++
                    ]); a < i;)h[a] = a++;
                    for(a = 0; a < i; a++)h[a] = h[n = o & n + t[a % r1] + (e = h[a])], h[n] = e;
                    s.g = function(t) {
                        for(var e, r1 = 0, a = s.i, n = s.j, h = s.S; t--;)e = h[a = o & a + 1], r1 = r1 * i + h[o & (h[a] = h[n = o & n + e]) + (h[n] = e)];
                        return s.i = a, s.j = n, r1;
                    };
                }
                function l(t, e) {
                    return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
                }
                function p(t, e) {
                    var r1, i = [], s = _typeof$1(t);
                    if (e && "object" == s) for(r1 in t)try {
                        i.push(p(t[r1], e - 1));
                    } catch (t) {}
                    return i.length ? i : "string" == s ? t : t + "\0";
                }
                function c(t, e) {
                    for(var r1, i = t + "", s = 0; s < i.length;)e[o & s] = o & (r1 ^= 19 * e[o & s]) + i.charCodeAt(s++);
                    return f(e);
                }
                function f(t) {
                    return String.fromCharCode.apply(0, t);
                }
                e.seedrandom = function(o, d, u) {
                    var m = [], y = c(p((d = !0 === d ? {
                        entropy: !0
                    } : d || {}).entropy ? [
                        o,
                        f(t)
                    ] : null === o ? function() {
                        try {
                            var e = new Uint8Array(i);
                            return (r1.crypto || r1.msCrypto).getRandomValues(e), f(e);
                        } catch (e) {
                            var s = r1.navigator, a = s && s.plugins;
                            return [
                                +new Date,
                                r1,
                                a,
                                r1.screen,
                                f(t)
                            ];
                        }
                    }() : o, 3), m), g = new h(m), v = function() {
                        for(var t = g.g(6), e = s, r1 = 0; t < a;)t = (t + r1) * i, e *= i, r1 = g.g(1);
                        for(; t >= n;)t /= 2, e /= 2, r1 >>>= 1;
                        return (t + r1) / e;
                    };
                    return v.int32 = function() {
                        return 0 | g.g(4);
                    }, v.quick = function() {
                        return g.g(4) / 4294967296;
                    }, v.double = v, c(f(g.S), t), (d.pass || u || function(t, r1, i, s) {
                        return s && (s.S && l(s, g), t.state = function() {
                            return l(g, {});
                        }), i ? (e.random = t, r1) : t;
                    })(v, y, "global" in d ? d.global : this == e, d.state);
                }, c(e.random(), t);
            }
            function initialize$2(t) {
                seedRandom([], t);
            }
            var propTypes = {
                SHAPE: "shape"
            };
            function _typeof(t) {
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, _typeof(t);
            }
            var ExpressionManager = function() {
                var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null;
                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array;
                }
                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
                }
                function $bm_neg(t) {
                    var e = _typeof(t);
                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var r1, i = t.length, s = [];
                        for(r1 = 0; r1 < i; r1 += 1)s[r1] = -t[r1];
                        return s;
                    }
                    return t.propType ? t.v : -t;
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                function sum(t, e) {
                    var r1 = _typeof(t), i = _typeof(e);
                    if ("string" === r1 || "string" === i) return t + e;
                    if (isNumerable(r1, t) && isNumerable(i, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                    if (isNumerable(r1, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for(var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                        return o;
                    }
                    return 0;
                }
                var add = sum;
                function sub(t, e) {
                    var r1 = _typeof(t), i = _typeof(e);
                    if (isNumerable(r1, t) && isNumerable(i, e)) return "string" === r1 && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                    if (isNumerable(r1, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for(var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                        return o;
                    }
                    return 0;
                }
                function mul(t, e) {
                    var r1, i, s, a = _typeof(t), n = _typeof(e);
                    if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for(s = t.length, r1 = createTypedArray("float32", s), i = 0; i < s; i += 1)r1[i] = t[i] * e;
                        return r1;
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for(s = e.length, r1 = createTypedArray("float32", s), i = 0; i < s; i += 1)r1[i] = t * e[i];
                        return r1;
                    }
                    return 0;
                }
                function div(t, e) {
                    var r1, i, s, a = _typeof(t), n = _typeof(e);
                    if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for(s = t.length, r1 = createTypedArray("float32", s), i = 0; i < s; i += 1)r1[i] = t[i] / e;
                        return r1;
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for(s = e.length, r1 = createTypedArray("float32", s), i = 0; i < s; i += 1)r1[i] = t / e[i];
                        return r1;
                    }
                    return 0;
                }
                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e;
                }
                var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
                function clamp(t, e, r1) {
                    if (e > r1) {
                        var i = r1;
                        r1 = e, e = i;
                    }
                    return Math.min(Math.max(t, e), r1);
                }
                function radiansToDegrees(t) {
                    return t / degToRads;
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(t) {
                    return t * degToRads;
                }
                var degrees_to_radians = radiansToDegrees, helperLengthArray = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    var r1;
                    e || (e = helperLengthArray);
                    var i = Math.min(t.length, e.length), s = 0;
                    for(r1 = 0; r1 < i; r1 += 1)s += Math.pow(e[r1] - t[r1], 2);
                    return Math.sqrt(s);
                }
                function normalize(t) {
                    return div(t, length(t));
                }
                function rgbToHsl(t) {
                    var e, r1, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2;
                    if (n === o) e = 0, r1 = 0;
                    else {
                        var l = n - o;
                        switch(r1 = h > .5 ? l / (2 - n - o) : l / (n + o), n){
                            case i:
                                e = (s - a) / l + (s < a ? 6 : 0);
                                break;
                            case s:
                                e = (a - i) / l + 2;
                                break;
                            case a:
                                e = (i - s) / l + 4;
                        }
                        e /= 6;
                    }
                    return [
                        e,
                        r1,
                        h,
                        t[3]
                    ];
                }
                function hue2rgb(t, e, r1) {
                    return r1 < 0 && (r1 += 1), r1 > 1 && (r1 -= 1), r1 < 1 / 6 ? t + 6 * (e - t) * r1 : r1 < .5 ? e : r1 < 2 / 3 ? t + (e - t) * (2 / 3 - r1) * 6 : t;
                }
                function hslToRgb(t) {
                    var e, r1, i, s = t[0], a = t[1], n = t[2];
                    if (0 === a) e = n, i = n, r1 = n;
                    else {
                        var o = n < .5 ? n * (1 + a) : n + a - n * a, h = 2 * n - o;
                        e = hue2rgb(h, o, s + 1 / 3), r1 = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3);
                    }
                    return [
                        e,
                        r1,
                        i,
                        t[3]
                    ];
                }
                function linear(t, e, r1, i, s) {
                    if (void 0 !== i && void 0 !== s || (i = e, s = r1, e = 0, r1 = 1), r1 < e) {
                        var a = r1;
                        r1 = e, e = a;
                    }
                    if (t <= e) return i;
                    if (t >= r1) return s;
                    var n, o = r1 === e ? 0 : (t - e) / (r1 - e);
                    if (!i.length) return i + (s - i) * o;
                    var h = i.length, l = createTypedArray("float32", h);
                    for(n = 0; n < h; n += 1)l[n] = i[n] + (s[n] - i[n]) * o;
                    return l;
                }
                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var r1, i = e.length;
                        t || (t = createTypedArray("float32", i));
                        var s = createTypedArray("float32", i), a = BMMath.random();
                        for(r1 = 0; r1 < i; r1 += 1)s[r1] = t[r1] + a * (e[r1] - t[r1]);
                        return s;
                    }
                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
                }
                function createPath(t, e, r1, i) {
                    var s, a = t.length, n = shapePool.newElement();
                    n.setPathData(!!i, a);
                    var o, h, l = [
                        0,
                        0
                    ];
                    for(s = 0; s < a; s += 1)o = e && e[s] ? e[s] : l, h = r1 && r1[s] ? r1[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                    return n;
                }
                function initiateExpression(elem, data, property) {
                    function noOp(t) {
                        return t;
                    }
                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                    var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v;
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = (function(t, e) {
                        var r1, i, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s), n = Math.floor(5 * time);
                        for(r1 = 0, i = 0; r1 < n;){
                            for(i = 0; i < s; i += 1)a[i] += -e + 2 * e * BMMath.random();
                            r1 += 1;
                        }
                        var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", s);
                        if (s > 1) {
                            for(i = 0; i < s; i += 1)l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                            return l;
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
                    }).bind(this);
                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0);
                    }
                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0);
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                    function lookAt(t, e) {
                        var r1 = [
                            e[0] - t[0],
                            e[1] - t[1],
                            e[2] - t[2]
                        ], i = Math.atan2(r1[0], Math.sqrt(r1[1] * r1[1] + r1[2] * r1[2])) / degToRads;
                        return [
                            -Math.atan2(r1[1], r1[2]) / degToRads,
                            i,
                            0
                        ];
                    }
                    function easeOut(t, e, r1, i, s) {
                        return applyEase(easeOutBez, t, e, r1, i, s);
                    }
                    function easeIn(t, e, r1, i, s) {
                        return applyEase(easeInBez, t, e, r1, i, s);
                    }
                    function ease(t, e, r1, i, s) {
                        return applyEase(easeInOutBez, t, e, r1, i, s);
                    }
                    function applyEase(t, e, r1, i, s, a) {
                        void 0 === s ? (s = r1, a = i) : e = (e - r1) / (i - r1), e > 1 ? e = 1 : e < 0 && (e = 0);
                        var n = t(e);
                        if ($bm_isInstanceOfArray(s)) {
                            var o, h = s.length, l = createTypedArray("float32", h);
                            for(o = 0; o < h; o += 1)l[o] = (a[o] - s[o]) * n + s[o];
                            return l;
                        }
                        return (a - s) * n + s;
                    }
                    function nearestKey(t) {
                        var e, r1, i, s = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0]) {
                            if (r1 = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r1 = 1, i = data.k[0].t;
                            else {
                                for(e = 0; e < s - 1; e += 1){
                                    if (t === data.k[e].t) {
                                        r1 = e + 1, i = data.k[e].t;
                                        break;
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (r1 = e + 2, i = data.k[e + 1].t) : (r1 = e + 1, i = data.k[e].t);
                                        break;
                                    }
                                }
                                -1 === r1 && (r1 = e + 1, i = data.k[e].t);
                            }
                        } else r1 = 0, i = 0;
                        var a = {};
                        return a.index = r1, a.time = i / elem.comp.globalData.frameRate, a;
                    }
                    function key(t) {
                        var e, r1, i;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for(i = s.length, r1 = 0; r1 < i; r1 += 1)e[r1] = s[r1], e.value[r1] = s[r1];
                        return e;
                    }
                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e;
                    }
                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
                    }
                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t);
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime();
                    }
                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
                    }
                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
                    }
                    function posterizeTime(t) {
                        time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
                    }
                    var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                    function executeExpression(t) {
                        return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt);
                    }
                    return executeExpression.__preventDeadCodeRemoval = [
                        $bm_transform,
                        anchorPoint,
                        time,
                        velocity,
                        inPoint,
                        outPoint,
                        width,
                        height,
                        name,
                        loop_in,
                        loop_out,
                        smooth,
                        toComp,
                        fromCompToSurface,
                        toWorld,
                        fromWorld,
                        mask,
                        position,
                        rotation,
                        scale,
                        thisComp,
                        numKeys,
                        active,
                        wiggle,
                        loopInDuration,
                        loopOutDuration,
                        comp,
                        lookAt,
                        easeOut,
                        easeIn,
                        ease,
                        nearestKey,
                        key,
                        text,
                        textIndex,
                        textTotal,
                        selectorValue,
                        framesToTime,
                        timeToFrames,
                        sourceRectAtTime,
                        substring,
                        substr,
                        posterizeTime,
                        index,
                        globalData
                    ], executeExpression;
                }
                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [
                    window,
                    document,
                    XMLHttpRequest,
                    fetch,
                    frames,
                    $bm_neg,
                    add,
                    $bm_sum,
                    $bm_sub,
                    $bm_mul,
                    $bm_div,
                    $bm_mod,
                    clamp,
                    radians_to_degrees,
                    degreesToRadians,
                    degrees_to_radians,
                    normalize,
                    rgbToHsl,
                    hslToRgb,
                    linear,
                    random,
                    createPath
                ], ob;
            }(), expressionHelpers = {
                searchExpressions: function(t, e, r1) {
                    e.x && (r1.k = !0, r1.x = !0, r1.initiateExpression = ExpressionManager.initiateExpression, r1.effectsSequence.push(r1.initiateExpression(t, e, r1).bind(r1)));
                },
                getSpeedAtTime: function(t) {
                    var e = this.getValueAtTime(t), r1 = this.getValueAtTime(t + -0.01), i = 0;
                    if (e.length) {
                        var s;
                        for(s = 0; s < e.length; s += 1)i += Math.pow(r1[s] - e[s], 2);
                        i = 100 * Math.sqrt(i);
                    } else i = 0;
                    return i;
                },
                getVelocityAtTime: function(t) {
                    if (void 0 !== this.vel) return this.vel;
                    var e, r1, i = -0.001, s = this.getValueAtTime(t), a = this.getValueAtTime(t + i);
                    if (s.length) for(e = createTypedArray("float32", s.length), r1 = 0; r1 < s.length; r1 += 1)e[r1] = (a[r1] - s[r1]) / i;
                    else e = (a - s) / i;
                    return e;
                },
                getValueAtTime: function(t) {
                    return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
                },
                getStaticValueAtTime: function() {
                    return this.pv;
                },
                setGroupProperty: function(t) {
                    this.propertyGroup = t;
                }
            };
            function addPropertyDecorator() {
                function t(t, e, r1) {
                    if (!this.k || !this.keyframes) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
                    if (h <= p) return this.pv;
                    if (r1 ? s = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
                        if (Math.floor((h - s) / i) % 2 != 0) return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0);
                    } else {
                        if ("offset" === t) {
                            var c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), d = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0), u = Math.floor((h - s) / i);
                            if (this.pv.length) {
                                for(n = (o = new Array(c.length)).length, a = 0; a < n; a += 1)o[a] = (f[a] - c[a]) * u + d[a];
                                return o;
                            }
                            return (f - c) * u + d;
                        }
                        if ("continue" === t) {
                            var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for(n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)o[a] = m[a] + (m[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                return o;
                            }
                            return m + (h - p) / .001 * (m - y);
                        }
                    }
                    return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0);
                }
                function e(t, e, r1) {
                    if (!this.k) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
                    if (h >= p) return this.pv;
                    if (r1 ? s = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (s = l[e].t) - p), "pingpong" === t) {
                        if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0);
                    } else {
                        if ("offset" === t) {
                            var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0), d = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0), u = Math.floor((p - h) / i) + 1;
                            if (this.pv.length) {
                                for(n = (o = new Array(c.length)).length, a = 0; a < n; a += 1)o[a] = d[a] - (f[a] - c[a]) * u;
                                return o;
                            }
                            return d - (f - c) * u;
                        }
                        if ("continue" === t) {
                            var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for(n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)o[a] = m[a] + (m[a] - y[a]) * (p - h) / .001;
                                return o;
                            }
                            return m + (m - y) * (p - h) / .001;
                        }
                    }
                    return this.getValueAtTime((i - ((p - h) % i + p)) / this.comp.globalData.frameRate, 0);
                }
                function r1(t, e) {
                    if (!this.k) return this.pv;
                    if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                    var r1, i, s = this.comp.renderedFrame / this.comp.globalData.frameRate, a = s - t, n = e > 1 ? (s + t - a) / (e - 1) : 1, o = 0, h = 0;
                    for(r1 = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;){
                        if (i = this.getValueAtTime(a + o * n), this.pv.length) for(h = 0; h < this.pv.length; h += 1)r1[h] += i[h];
                        else r1 += i;
                        o += 1;
                    }
                    if (this.pv.length) for(h = 0; h < this.pv.length; h += 1)r1[h] /= e;
                    else r1 /= e;
                    return r1;
                }
                function i(t) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var e = this._transformCachingAtTime.v;
                    if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var r1 = this.a.getValueAtTime(t);
                        e.translate(-r1[0] * this.a.mult, -r1[1] * this.a.mult, r1[2] * this.a.mult);
                    }
                    if (this.appliedTransformations < 2) {
                        var i = this.s.getValueAtTime(t);
                        e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult);
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var s = this.sk.getValueAtTime(t), a = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult);
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var n = this.r.getValueAtTime(t);
                        e.rotate(-n * this.r.mult);
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var o = this.rz.getValueAtTime(t), h = this.ry.getValueAtTime(t), l = this.rx.getValueAtTime(t), p = this.or.getValueAtTime(t);
                        e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult);
                    }
                    if (this.data.p && this.data.p.s) {
                        var c = this.px.getValueAtTime(t), f = this.py.getValueAtTime(t);
                        if (this.data.p.z) {
                            var d = this.pz.getValueAtTime(t);
                            e.translate(c * this.px.mult, f * this.py.mult, -d * this.pz.mult);
                        } else e.translate(c * this.px.mult, f * this.py.mult, 0);
                    } else {
                        var u = this.p.getValueAtTime(t);
                        e.translate(u[0] * this.p.mult, u[1] * this.p.mult, -u[2] * this.p.mult);
                    }
                    return e;
                }
                function s() {
                    return this.v.clone(new Matrix);
                }
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, r1) {
                    var n = a(t, e, r1);
                    return n.dynamicProperties.length ? n.getValueAtTime = i.bind(n) : n.getValueAtTime = s.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n;
                };
                var n = PropertyFactory.getProp;
                PropertyFactory.getProp = function(i, s, a, o, h) {
                    var l = n(i, s, a, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = r1, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                    var p = 0;
                    return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p
                    }, expressionHelpers.searchExpressions(i, s, l), l.k && h.addDynamicProperty(l), l;
                };
                var o = ShapePropertyFactory.getConstructorFunction(), h = ShapePropertyFactory.getKeyframedConstructorFunction();
                function l() {}
                l.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var r1, i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0));
                        var s = i._length, a = i[t], n = i.v, o = createSizedArray(s);
                        for(r1 = 0; r1 < s; r1 += 1)o[r1] = "i" === t || "o" === t ? [
                            a[r1][0] - n[r1][0],
                            a[r1][1] - n[r1][1]
                        ] : [
                            a[r1][0],
                            a[r1][1]
                        ];
                        return o;
                    },
                    points: function(t) {
                        return this.vertices("v", t);
                    },
                    inTangents: function(t) {
                        return this.vertices("i", t);
                    },
                    outTangents: function(t) {
                        return this.vertices("o", t);
                    },
                    isClosed: function() {
                        return this.v.c;
                    },
                    pointOnPath: function(t, e) {
                        var r1 = this.v;
                        void 0 !== e && (r1 = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r1));
                        for(var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;){
                            if (l + a[o].addedLength > n) {
                                var p = o, c = r1.c && o === h - 1 ? 0 : o + 1, f = (n - l) / a[o].addedLength;
                                i = bez.getPointInSegment(r1.v[p], r1.v[c], r1.o[p], r1.i[c], f, a[o]);
                                break;
                            }
                            l += a[o].addedLength, o += 1;
                        }
                        return i || (i = r1.c ? [
                            r1.v[0][0],
                            r1.v[0][1]
                        ] : [
                            r1.v[r1._length - 1][0],
                            r1.v[r1._length - 1][1]
                        ]), i;
                    },
                    vectorOnPath: function(t, e, r1) {
                        1 == t ? t = this.v.c : 0 == t && (t = .999);
                        var i = this.pointOnPath(t, e), s = this.pointOnPath(t + .001, e), a = s[0] - i[0], n = s[1] - i[1], o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                        return 0 === o ? [
                            0,
                            0
                        ] : "tangent" === r1 ? [
                            a / o,
                            n / o
                        ] : [
                            -n / o,
                            a / o
                        ];
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent");
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal");
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([
                    l
                ], o), extendPrototype([
                    l
                ], h), h.prototype.getValueAtTime = function(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
                }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var p = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, r1, i, s) {
                    var a = p(t, e, r1, i, s);
                    return a.propertyIndex = e.ix, a.lock = !1, 3 === r1 ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r1 && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a;
                };
            }
            function initialize$1() {
                addPropertyDecorator();
            }
            function addDecorator() {
                TextProperty.prototype.getExpressionValue = function(t, e) {
                    var r1 = this.calculateExpression(e);
                    if (t.t !== r1) {
                        var i = {};
                        return this.copyData(i, t), i.t = r1.toString(), i.__complete = !1, i;
                    }
                    return t;
                }, TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(), e = this.searchExpressions();
                    return this.kf = t || e, this.kf;
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
                };
            }
            function initialize() {
                addDecorator();
            }
            function SVGComposableEffect() {}
            function SVGTintFilter(t, e, r1, i, s) {
                this.filterManager = e;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
                var n = this.createMergeNode(i, [
                    s,
                    i + "_tint_1",
                    i + "_tint_2"
                ]);
                t.appendChild(n);
            }
            function SVGFillFilter(t, e, r1, i) {
                this.filterManager = e;
                var s = createNS("feColorMatrix");
                s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s;
            }
            function SVGStrokeEffect(t, e, r1) {
                this.initialized = !1, this.filterManager = e, this.elem = r1, this.paths = [];
            }
            function SVGTritoneFilter(t, e, r1, i) {
                this.filterManager = e;
                var s = createNS("feColorMatrix");
                s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
                var a = createNS("feComponentTransfer");
                a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
                var n = createNS("feFuncR");
                n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
                var o = createNS("feFuncG");
                o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
                var h = createNS("feFuncB");
                h.setAttribute("type", "table"), a.appendChild(h), this.feFuncB = h, t.appendChild(a);
            }
            function SVGProLevelsFilter(t, e, r1, i) {
                this.filterManager = e;
                var s = this.filterManager.effectElements, a = createNS("feComponentTransfer");
                (s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
            }
            function SVGDropShadowEffect(t, e, r1, i, s) {
                var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
                t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
                var o = createNS("feGaussianBlur");
                o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
                var h = createNS("feOffset");
                h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
                var l = createNS("feFlood");
                l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
                var p = createNS("feComposite");
                p.setAttribute("in", i + "_drop_shadow_3"), p.setAttribute("in2", i + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(p);
                var c = this.createMergeNode(i, [
                    i + "_drop_shadow_4",
                    s
                ]);
                t.appendChild(c);
            }
            SVGComposableEffect.prototype = {
                createMergeNode: function(t, e) {
                    var r1, i, s = createNS("feMerge");
                    for(s.setAttribute("result", t), i = 0; i < e.length; i += 1)(r1 = createNS("feMergeNode")).setAttribute("in", e[i]), s.appendChild(r1), s.appendChild(r1);
                    return s;
                }
            }, extendPrototype([
                SVGComposableEffect
            ], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
                    this.matrixFilter.setAttribute("values", r1[0] - e[0] + " 0 0 0 " + e[0] + " " + (r1[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r1[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
                }
            }, SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v, r1 = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r1 + " 0");
                }
            }, SVGStrokeEffect.prototype.initialize = function() {
                var t, e, r1, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for(1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r1 = 0) : i = 1 + (r1 = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r1 < i; r1 += 1)t = createNS("path"), e.appendChild(t), this.paths.push({
                    p: t,
                    m: r1
                });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS("mask"), n = createElementID();
                    a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                    var o = createNS("g");
                    for(o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); s[0];)o.appendChild(s[0]);
                    this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff");
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v) for(s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;)this.elem.layerElement.removeChild(s[0]);
                    this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
                }
                this.initialized = !0, this.pathMasker = e;
            }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                var e;
                this.initialized || this.initialize();
                var r1, i, s = this.paths.length;
                for(e = 0; e < s; e += 1)if (-1 !== this.paths[e].m && (r1 = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r1.prop._mdf) && i.setAttribute("d", r1.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r1.prop._mdf)) {
                    var a;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), h = i.getTotalLength();
                        a = "0 0 0 " + h * n + " ";
                        var l, p = h * (o - n), c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01, f = Math.floor(p / c);
                        for(l = 0; l < f; l += 1)a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        a += "0 " + 10 * h + " 0 0";
                    } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    i.setAttribute("stroke-dasharray", a);
                }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var d = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")");
                }
            }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r1[0] + " " + e[0], a = i[1] + " " + r1[1] + " " + e[1], n = i[2] + " " + r1[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
                }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var r1 = createNS(t);
                return r1.setAttribute("type", "table"), e.appendChild(r1), r1;
            }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r1, i, s) {
                for(var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                    length: 256
                }), c = 0, f = s - i, d = e - t; o <= 256;)n = (a = o / 256) <= h ? d < 0 ? s : i : a >= l ? d < 0 ? i : s : i + f * Math.pow((a - t) / d, 1 / r1), p[c] = n, c += 1, o += 256 / 255;
                return p.join(" ");
            }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, r1 = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || r1[3].p._mdf || r1[4].p._mdf || r1[5].p._mdf || r1[6].p._mdf || r1[7].p._mdf) && (e = this.getTableValue(r1[3].p.v, r1[4].p.v, r1[5].p.v, r1[6].p.v, r1[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r1[10].p._mdf || r1[11].p._mdf || r1[12].p._mdf || r1[13].p._mdf || r1[14].p._mdf) && (e = this.getTableValue(r1[10].p.v, r1[11].p.v, r1[12].p.v, r1[13].p.v, r1[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r1[17].p._mdf || r1[18].p._mdf || r1[19].p._mdf || r1[20].p._mdf || r1[21].p._mdf) && (e = this.getTableValue(r1[17].p.v, r1[18].p.v, r1[19].p.v, r1[20].p.v, r1[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r1[24].p._mdf || r1[25].p._mdf || r1[26].p._mdf || r1[27].p._mdf || r1[28].p._mdf) && (e = this.getTableValue(r1[24].p.v, r1[25].p.v, r1[26].p.v, r1[27].p.v, r1[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r1[31].p._mdf || r1[32].p._mdf || r1[33].p._mdf || r1[34].p._mdf || r1[35].p._mdf) && (e = this.getTableValue(r1[31].p.v, r1[32].p.v, r1[33].p.v, r1[34].p.v, r1[35].p.v), this.feFuncA.setAttribute("tableValues", e));
                }
            }, extendPrototype([
                SVGComposableEffect
            ], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var r1 = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r1 * Math.cos(i), a = r1 * Math.sin(i);
                        this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
                    }
                }
            };
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, r1) {
                this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r1, r1.matteElement = createNS("g"), r1.matteElement.appendChild(r1.layerElement), r1.matteElement.appendChild(r1.transformedElement), r1.baseElement = r1.matteElement;
            }
            function SVGGaussianBlurEffect(t, e, r1, i) {
                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                var s = createNS("feGaussianBlur");
                s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s;
            }
            return SVGMatte3Effect.prototype.findSymbol = function(t) {
                for(var e = 0, r1 = _svgMatteSymbols.length; e < r1;){
                    if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                    e += 1;
                }
                return null;
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var r1 = t.layerElement.parentNode;
                if (r1) {
                    for(var i, s = r1.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;)a += 1;
                    a <= n - 2 && (i = s[a + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e), i ? r1.insertBefore(o, i) : r1.appendChild(o);
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var r1 = createElementID(), i = createNS("mask");
                    i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                    var s = t.globalData.defs;
                    s.appendChild(i);
                    var a = createNS("symbol");
                    a.setAttribute("id", r1), this.replaceInParent(e, r1), a.appendChild(e.layerElement), s.appendChild(a);
                    var n = createNS("use");
                    n.setAttribute("href", "#" + r1), i.appendChild(n), e.data.hd = !1, e.show();
                }
                t.setMatte(e.layerId);
            }, SVGMatte3Effect.prototype.initialize = function() {
                for(var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r1 = 0, i = e.length; r1 < i;)e[r1] && e[r1].data.ind === t && this.setElementAsMask(this.elem, e[r1]), r1 += 1;
                this.initialized = !0;
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize();
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v, r1 = this.filterManager.effectElements[1].p.v, i = 3 == r1 ? 0 : e, s = 2 == r1 ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
                    var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a);
                }
            }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie;
        }, module.exports = factory());
    })(lottie$1, lottie$1.exports);
    var lottie = lottie$1.exports, _templateObject$1, styles = r$3(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral([
        "\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n"
    ]))), LOTTIE_PLAYER_VERSION = "1.7.1", LOTTIE_WEB_VERSION = "^5.10.0", _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, PlayerState, PlayMode, PlayerEvents;
    function parseSrc(t) {
        if ("object" == typeof t) return t;
        try {
            return JSON.parse(t);
        } catch (e) {
            return new URL(t, window.location.href).toString();
        }
    }
    function isLottie(t) {
        return [
            "v",
            "ip",
            "op",
            "layers",
            "fr",
            "w",
            "h"
        ].every((e)=>Object.prototype.hasOwnProperty.call(t, e));
    }
    function fromURL(t) {
        return _fromURL.apply(this, arguments);
    }
    function _fromURL() {
        return (_fromURL = _asyncToGenerator(function*(t) {
            if ("string" != typeof t) throw new Error("The url value must be a string");
            var e;
            try {
                var r1 = new URL(t), i = yield fetch(r1.toString());
                e = yield i.json();
            } catch (t) {
                throw new Error("An error occurred while trying to load the Lottie file from URL");
            }
            return e;
        })).apply(this, arguments);
    }
    exports.PlayerState = void 0, PlayerState = exports.PlayerState || (exports.PlayerState = {}), PlayerState.Destroyed = "destroyed", PlayerState.Error = "error", PlayerState.Frozen = "frozen", PlayerState.Loading = "loading", PlayerState.Paused = "paused", PlayerState.Playing = "playing", PlayerState.Stopped = "stopped", exports.PlayMode = void 0, PlayMode = exports.PlayMode || (exports.PlayMode = {}), PlayMode.Bounce = "bounce", PlayMode.Normal = "normal", exports.PlayerEvents = void 0, PlayerEvents = exports.PlayerEvents || (exports.PlayerEvents = {}), PlayerEvents.Complete = "complete", PlayerEvents.Destroyed = "destroyed", PlayerEvents.Error = "error", PlayerEvents.Frame = "frame", PlayerEvents.Freeze = "freeze", PlayerEvents.Load = "load", PlayerEvents.Loop = "loop", PlayerEvents.Pause = "pause", PlayerEvents.Play = "play", PlayerEvents.Ready = "ready", PlayerEvents.Rendered = "rendered", PlayerEvents.Stop = "stop", exports.LottiePlayer = class extends s {
        constructor(){
            super(...arguments), this.autoplay = !1, this.background = "transparent", this.controls = !1, this.currentState = exports.PlayerState.Loading, this.description = "Lottie animation", this.direction = 1, this.disableCheck = !1, this.disableShadowDOM = !1, this.hover = !1, this.intermission = 1, this.loop = !1, this.mode = exports.PlayMode.Normal, this.preserveAspectRatio = "xMidYMid meet", this.renderer = "svg", this.speed = 1, this._io = void 0, this._counter = 1;
        }
        load(t) {
            var e = this;
            return _asyncToGenerator(function*() {
                var r1 = {
                    container: e.container,
                    loop: !1,
                    autoplay: !1,
                    renderer: e.renderer,
                    rendererSettings: Object.assign({
                        preserveAspectRatio: e.preserveAspectRatio,
                        clearCanvas: !1,
                        progressiveLoad: !0,
                        hideOnTransparent: !0
                    }, e.viewBoxSize && {
                        viewBoxSize: e.viewBoxSize
                    })
                };
                try {
                    var i = parseSrc(t), s = {}, a = "string" == typeof i ? "path" : "animationData";
                    e._lottie && e._lottie.destroy(), e.webworkers && lottie$1.exports.useWebWorker(!0), e._lottie = lottie$1.exports.loadAnimation(Object.assign(Object.assign({}, r1), {
                        [a]: i
                    })), e._attachEventListeners(), e.disableCheck || ("path" === a ? (s = yield fromURL(i), a = "animationData") : s = i, isLottie(s) || (e.currentState = exports.PlayerState.Error, e.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error))));
                } catch (t) {
                    e.currentState = exports.PlayerState.Error, e.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error));
                }
            })();
        }
        getLottie() {
            return this._lottie;
        }
        getVersions() {
            return {
                lottieWebVersion: LOTTIE_WEB_VERSION,
                lottiePlayerVersion: LOTTIE_PLAYER_VERSION
            };
        }
        play() {
            this._lottie && (this._lottie.play(), this.currentState = exports.PlayerState.Playing, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Play)));
        }
        pause() {
            this._lottie && (this._lottie.pause(), this.currentState = exports.PlayerState.Paused, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Pause)));
        }
        stop() {
            this._lottie && (this._counter = 1, this._lottie.stop(), this.currentState = exports.PlayerState.Stopped, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Stop)));
        }
        destroy() {
            this._lottie && (this._lottie.destroy(), this._lottie = null, this.currentState = exports.PlayerState.Destroyed, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Destroyed)), this.remove());
        }
        seek(t) {
            if (this._lottie) {
                var e = /^(\d+)(%?)$/.exec(t.toString());
                if (e) {
                    var r1 = "%" === e[2] ? this._lottie.totalFrames * Number(e[1]) / 100 : Number(e[1]);
                    this.seeker = r1, this.currentState === exports.PlayerState.Playing ? this._lottie.goToAndPlay(r1, !0) : (this._lottie.goToAndStop(r1, !0), this._lottie.pause());
                }
            }
        }
        snapshot() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (this.shadowRoot) {
                var e = this.shadowRoot.querySelector(".animation svg"), r1 = (new XMLSerializer).serializeToString(e);
                if (t) {
                    var i = document.createElement("a");
                    i.href = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(r1)), i.download = "download_".concat(this.seeker, ".svg"), document.body.appendChild(i), i.click(), document.body.removeChild(i);
                }
                return r1;
            }
        }
        setSpeed() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            this._lottie && this._lottie.setSpeed(t);
        }
        setDirection(t) {
            this._lottie && this._lottie.setDirection(t);
        }
        setLooping(t) {
            this._lottie && (this.loop = t, this._lottie.loop = t);
        }
        togglePlay() {
            return this.currentState === exports.PlayerState.Playing ? this.pause() : this.play();
        }
        toggleLooping() {
            this.setLooping(!this.loop);
        }
        resize() {
            this._lottie && this._lottie.resize();
        }
        static get styles() {
            return styles;
        }
        disconnectedCallback() {
            this.isConnected || (this._io && (this._io.disconnect(), this._io = void 0), document.removeEventListener("visibilitychange", ()=>this._onVisibilityChange()), this.destroy());
        }
        render() {
            var t = this.controls ? "main controls" : "main", e = this.controls ? "animation controls" : "animation";
            return $(_templateObject || (_templateObject = _taggedTemplateLiteral([
                ' <div\n      id="animation-container"\n      class=',
                '\n      lang="en"\n      aria-label=',
                '\n      role="img"\n    >\n      <div\n        id="animation"\n        class=',
                '\n        style="background:',
                ';"\n      >\n        ',
                "\n      </div>\n      ",
                "\n    </div>"
            ])), t, this.description, e, this.background, this.currentState === exports.PlayerState.Error ? $(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([
                '<div class="error">⚠️</div>'
            ]))) : void 0, this.controls && !this.disableShadowDOM ? this.renderControls() : void 0);
        }
        createRenderRoot() {
            return this.disableShadowDOM && (this.style.display = "block"), this.disableShadowDOM ? this : super.createRenderRoot();
        }
        firstUpdated() {
            "IntersectionObserver" in window && (this._io = new IntersectionObserver((t)=>{
                t[0].isIntersecting ? this.currentState === exports.PlayerState.Frozen && this.play() : this.currentState === exports.PlayerState.Playing && this.freeze();
            }), this._io.observe(this.container)), void 0 !== document.hidden && document.addEventListener("visibilitychange", ()=>this._onVisibilityChange()), this.src && this.load(this.src), this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Rendered));
        }
        renderControls() {
            var t = this.currentState === exports.PlayerState.Playing, e = this.currentState === exports.PlayerState.Paused, r1 = this.currentState === exports.PlayerState.Stopped;
            return $(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([
                '\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',
                "\n          class=",
                '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ',
                '\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',
                "\n          class=",
                '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',
                "\n          @input=",
                "\n          @mousedown=",
                "\n          @mouseup=",
                '\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=',
                '\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',
                "\n          class=",
                '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    '
            ])), this.togglePlay, t || e ? "active" : "", $(t ? _templateObject4 || (_templateObject4 = _taggedTemplateLiteral([
                '<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>'
            ])) : _templateObject5 || (_templateObject5 = _taggedTemplateLiteral([
                '<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>'
            ]))), this.stop, r1 ? "active" : "", this.seeker, this._handleSeekChange, ()=>{
                this._prevState = this.currentState, this.freeze();
            }, ()=>{
                this._prevState === exports.PlayerState.Playing && this.play();
            }, this.seeker, this.toggleLooping, this.loop ? "active" : "");
        }
        _onVisibilityChange() {
            !0 === document.hidden && this.currentState === exports.PlayerState.Playing ? this.freeze() : this.currentState === exports.PlayerState.Frozen && this.play();
        }
        _handleSeekChange(t) {
            if (this._lottie && !isNaN(t.target.value)) {
                var e = t.target.value / 100 * this._lottie.totalFrames;
                this.seek(e);
            }
        }
        _attachEventListeners() {
            this._lottie.addEventListener("enterFrame", ()=>{
                this.seeker = this._lottie.currentFrame / this._lottie.totalFrames * 100, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Frame, {
                    detail: {
                        frame: this._lottie.currentFrame,
                        seeker: this.seeker
                    }
                }));
            }), this._lottie.addEventListener("complete", ()=>{
                if (this.currentState === exports.PlayerState.Playing) {
                    if (!this.loop || this.count && this._counter >= this.count) {
                        if (this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete)), this.mode !== exports.PlayMode.Bounce) return;
                        if (0 === this._lottie.currentFrame) return;
                    }
                    this.mode === exports.PlayMode.Bounce ? (this.count && (this._counter += .5), setTimeout(()=>{
                        this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Loop)), this.currentState === exports.PlayerState.Playing && (this._lottie.setDirection(-1 * this._lottie.playDirection), this._lottie.play());
                    }, this.intermission)) : (this.count && (this._counter += 1), window.setTimeout(()=>{
                        this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Loop)), this.currentState === exports.PlayerState.Playing && (-1 === this.direction ? (this.seek("99%"), this.play()) : (this._lottie.stop(), this._lottie.play()));
                    }, this.intermission));
                } else this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete));
            }), this._lottie.addEventListener("DOMLoaded", ()=>{
                this.setSpeed(this.speed), this.setDirection(this.direction), this.autoplay && (-1 === this.direction && this.seek("100%"), this.play()), this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Ready));
            }), this._lottie.addEventListener("data_ready", ()=>{
                this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Load));
            }), this._lottie.addEventListener("data_failed", ()=>{
                this.currentState = exports.PlayerState.Error, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error));
            }), this.container.addEventListener("mouseenter", ()=>{
                this.hover && this.currentState !== exports.PlayerState.Playing && this.play();
            }), this.container.addEventListener("mouseleave", ()=>{
                this.hover && this.currentState === exports.PlayerState.Playing && this.stop();
            });
        }
        freeze() {
            this._lottie && (this._lottie.pause(), this.currentState = exports.PlayerState.Frozen, this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Freeze)));
        }
    }, __decorate([
        e$5({
            type: Boolean
        })
    ], exports.LottiePlayer.prototype, "autoplay", void 0), __decorate([
        e$5({
            type: String,
            reflect: !0
        })
    ], exports.LottiePlayer.prototype, "background", void 0), __decorate([
        e$5({
            type: Boolean
        })
    ], exports.LottiePlayer.prototype, "controls", void 0), __decorate([
        e$5({
            type: Number
        })
    ], exports.LottiePlayer.prototype, "count", void 0), __decorate([
        e$5({
            type: String
        })
    ], exports.LottiePlayer.prototype, "currentState", void 0), __decorate([
        e$5({
            type: String
        })
    ], exports.LottiePlayer.prototype, "description", void 0), __decorate([
        e$5({
            type: Number
        })
    ], exports.LottiePlayer.prototype, "direction", void 0), __decorate([
        e$5({
            type: Boolean
        })
    ], exports.LottiePlayer.prototype, "disableCheck", void 0), __decorate([
        e$5({
            type: Boolean
        })
    ], exports.LottiePlayer.prototype, "disableShadowDOM", void 0), __decorate([
        e$5({
            type: Boolean
        })
    ], exports.LottiePlayer.prototype, "hover", void 0), __decorate([
        e$5()
    ], exports.LottiePlayer.prototype, "intermission", void 0), __decorate([
        e$5({
            type: Boolean,
            reflect: !0
        })
    ], exports.LottiePlayer.prototype, "loop", void 0), __decorate([
        e$5()
    ], exports.LottiePlayer.prototype, "mode", void 0), __decorate([
        e$5({
            type: String
        })
    ], exports.LottiePlayer.prototype, "preserveAspectRatio", void 0), __decorate([
        e$5({
            type: String
        })
    ], exports.LottiePlayer.prototype, "renderer", void 0), __decorate([
        e$5({
            type: String
        })
    ], exports.LottiePlayer.prototype, "viewBoxSize", void 0), __decorate([
        e$5()
    ], exports.LottiePlayer.prototype, "seeker", void 0), __decorate([
        e$5({
            type: Number
        })
    ], exports.LottiePlayer.prototype, "speed", void 0), __decorate([
        e$5({
            type: String
        })
    ], exports.LottiePlayer.prototype, "src", void 0), __decorate([
        e$5({
            type: Boolean
        })
    ], exports.LottiePlayer.prototype, "webworkers", void 0), __decorate([
        i(".animation")
    ], exports.LottiePlayer.prototype, "container", void 0), exports.LottiePlayer = __decorate([
        n$1("lottie-player")
    ], exports.LottiePlayer), exports.parseSrc = parseSrc, Object.defineProperty(exports, "__esModule", {
        value: !0
    });
});

},{}]},["56Vnr","4pp4s"], "4pp4s", "parcelRequire9e27")

//# sourceMappingURL=index.4de9b498.js.map
