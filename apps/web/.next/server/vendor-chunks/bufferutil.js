"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bufferutil";
exports.ids = ["vendor-chunks/bufferutil"];
exports.modules = {

/***/ "(ssr)/../../node_modules/bufferutil/fallback.js":
/*!*************************************************!*\
  !*** ../../node_modules/bufferutil/fallback.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Masks a buffer using the given mask.\n *\n * @param {Buffer} source The buffer to mask\n * @param {Buffer} mask The mask to use\n * @param {Buffer} output The buffer where to store the result\n * @param {Number} offset The offset at which to start writing\n * @param {Number} length The number of bytes to mask.\n * @public\n */\nconst mask = (source, mask, output, offset, length) => {\n  for (var i = 0; i < length; i++) {\n    output[offset + i] = source[i] ^ mask[i & 3];\n  }\n};\n\n/**\n * Unmasks a buffer using the given mask.\n *\n * @param {Buffer} buffer The buffer to unmask\n * @param {Buffer} mask The mask to use\n * @public\n */\nconst unmask = (buffer, mask) => {\n  // Required until https://github.com/nodejs/node/issues/9006 is resolved.\n  const length = buffer.length;\n  for (var i = 0; i < length; i++) {\n    buffer[i] ^= mask[i & 3];\n  }\n};\n\nmodule.exports = { mask, unmask };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvZmFsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiIsInNvdXJjZXMiOlsiL1VzZXJzL2tldmluam9uZXMvem9yYS1jb2luLXN0YXJ0ZXJraXQvbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvZmFsbGJhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBzb3VyY2UgVGhlIGJ1ZmZlciB0byBtYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwYXJhbSB7QnVmZmVyfSBvdXRwdXQgVGhlIGJ1ZmZlciB3aGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgYXQgd2hpY2ggdG8gc3RhcnQgd3JpdGluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIG1hc2suXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IG1hc2sgPSAoc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRbb2Zmc2V0ICsgaV0gPSBzb3VyY2VbaV0gXiBtYXNrW2kgJiAzXTtcbiAgfVxufTtcblxuLyoqXG4gKiBVbm1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bm1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHB1YmxpY1xuICovXG5jb25zdCB1bm1hc2sgPSAoYnVmZmVyLCBtYXNrKSA9PiB7XG4gIC8vIFJlcXVpcmVkIHVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvOTAwNiBpcyByZXNvbHZlZC5cbiAgY29uc3QgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGJ1ZmZlcltpXSBePSBtYXNrW2kgJiAzXTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IG1hc2ssIHVubWFzayB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/bufferutil/fallback.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/bufferutil/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/bufferutil/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\ntry {\n  module.exports = __webpack_require__(/*! node-gyp-build */ \"(ssr)/../../node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n  module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/../../node_modules/bufferutil/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlcnV0aWwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyx3RUFBZ0I7QUFDM0MsRUFBRTtBQUNGLEVBQUUseUdBQXNDO0FBQ3hDIiwic291cmNlcyI6WyIvVXNlcnMva2V2aW5qb25lcy96b3JhLWNvaW4tc3RhcnRlcmtpdC9ub2RlX21vZHVsZXMvYnVmZmVydXRpbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnbm9kZS1neXAtYnVpbGQnKShfX2Rpcm5hbWUpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFsbGJhY2snKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/bufferutil/index.js\n");

/***/ })

};
;