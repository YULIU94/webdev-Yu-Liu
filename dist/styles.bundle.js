webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\nEdit existed style\n*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\nul li{\n  list-style-type: none;\n  padding: 0px;\n  -webkit-padding-start: 0px;\n}\n\nbutton{\n  background: none;\n  border-width: 0px;\n}\n\n.container-fluid{\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.row{\n  margin-right: 0px;\n  margin-left: 0px;\n  width: auto;\n  height: 100%;\n}\n\na{\n  width: 100%;\n  height: 100%;\n\n}\na:hover{\n  text-decoration: none;\n  text-underline: none;\n}\n\n.erase-padding{\n  padding-left: 0;\n  padding-right: 0;\n}\n/*\nCreate new style\n*/\n.nav-bar{\n  background-color: #468CC8;\n  position: fixed;\n  height: 60px;\n  width: 100%;\n  top: 0px;\n}\n\n.nav-btn{\n  color: white;\n  height: inherit;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.nav-p{\n  color: white;\n  height: inherit;\n  line-height: 60px;\n}\n\n.content{\n  height: auto;\n  position: relative;\n  margin-bottom: 60px;\n  margin-top: 60px;\n}\n\n.bottom{\n  background-color: #468CC8;\n  height: 60px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n}\n\n.menu{\n  height: 40px;\n  /*margin-top: 10px;*/\n  /*margin-bottom: 10px;*/\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #468CC8;\n}\n\n.menu-p{\n  /*line-height: 40px;*/\n  margin: 0px;\n  left: 0px;\n}\n\n.menu-btn{\n  color: #468CC8;\n  margin-right: 10px;\n}\n\n.btn-white{\n  color: white;\n}\n\n.btn-black{\n  color: black;\n}\n\n.btn-center{\n  padding-left: 40%;\n  padding-right: 40%;\n}\n\n/*\nWebsite\n*/\n.website-content{\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n\n\n/*\nwebsite-new\n*/\n.new{\n  width: 100%;\n  height: 100%;\n}\n\n.new-left{\n  border-right: 1px solid black;\n  position: fixed;\n  left: 0px;\n  height: 100%;\n}\n\n.new-content{\n  height: 100%;\n  width: inherit;\n}\n\n.nav-container{\n  height:inherit;\n}\n\n.nav-row{\n  height: inherit;\n}\n\n.nav-left{\n  height: inherit;\n}\n\n.nav-right{\n  height: inherit;\n}\n\n.nav-full{\n  height: inherit;\n}\n\n.nav-default{\n  height: inherit;\n}\n\n.nav-left-left{\n  color: white;\n  line-height: 60px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.nav-left-center{\n  height:60px;\n  line-height:60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n\n.nav-left-right{\n  line-height:60px;\n  padding-left: 0px;\n  padding-right: 10px;\n}\n\n.nav-back{\n  color: white;\n  left:25%;\n  font-size: 22px;\n}\n\n.nav-p{\n  color: white;\n  font-size: 22px;\n}\n\n.nav-plus{\n  color: white;\n  font-size: 22px;\n}\n\n.nav-right-left{\n  color: white;\n  line-height: 60px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.nav-right-right{\n  color: white;\n  line-height: 60px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.nav-ok{\n  color: white;\n  font-size: 22px;\n  text-align: center;\n}\n\n.nav-plus{\n  color: white;\n}\n\n.content-title{\n  font-family:\"Helvetica\";\n  font-size: 22px;\n  line-height: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.form-control{\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\n.input-description{\n  height: 6em;\n}\n\n.btn-delete{\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: red;\n  color: white;\n}\n\n.website-nav-btn{\n  margin-top: 15px;\n}\n\n/*\nPage pages\n*/\n.page-nav{\n  background-color: #f6f6f6;\n  height: 60px;\n  line-height: 60px;\n  font-size: 22px;\n  text-align: center;\n  top: 0px;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n}\n\n.page-nav-btn{\n  color: black;\n  margin-top: 15px;\n}\n\n.page-nav-p{\n  color: #6c757d;\n  line-height: 60px;\n}\n\n.page-content{\n  height: auto;\n  position: relative;\n  margin-bottom: 60px;\n  margin-top: 60px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.page-bottom{\n  background-color: #f6f6f6;\n  height: 60px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n\n}\n\n.page-bottom-btn{\n  color: #468CC8;\n  height: inherit;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.page-content-input{\n  /*margin-left: 10px;*/\n  width: 100%;\n  margin-right: 10px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\n.page-content-title{\n  height: 40px;\n  width: auto;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.page-ul{\n  padding-top: 10px;\n}\n\n.page-li{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n\n/*\nWidget\n*/\n.widget-bottom-left-btn{\n  height: inherit;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.widget-ul{\n  width: 100%;\n  height: 100%;\n}\n\n.widget-li{\n  width: 100%;\n  height: auto;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.widget-header{\n  margin-top: 20px;\n  font-size: 50px;\n  font-weight: bold;\n}\n\n.widget-image{\n  height: auto;\n  width: 100%;\n}\n.widget-image>img{\n  width: 100%;\n}\n\n.widget-toolbar{\n  position: absolute;\n  right: 10px;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px;\n}\n\n.widget-youtube{\n  height: auto;\n  width: 100%;\n}\n.widget-youtube>iframe{\n  width: 100%;\n  height: 350px;\n}\n\n.widget-content{\n  height: auto;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.widget-input{\n  width: 100%;\n  margin-right: 10px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\n.widget-input-title{\n  width: 100%;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map