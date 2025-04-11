"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/valtio";
exports.ids = ["vendor-chunks/valtio"];
exports.modules = {

/***/ "(ssr)/../../node_modules/valtio/esm/vanilla.mjs":
/*!*************************************************!*\
  !*** ../../node_modules/valtio/esm/vanilla.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVersion: () => (/* binding */ getVersion),\n/* harmony export */   proxy: () => (/* binding */ proxy),\n/* harmony export */   ref: () => (/* binding */ ref),\n/* harmony export */   snapshot: () => (/* binding */ snapshot),\n/* harmony export */   subscribe: () => (/* binding */ subscribe),\n/* harmony export */   unstable_buildProxyFunction: () => (/* binding */ unstable_buildProxyFunction)\n/* harmony export */ });\n/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-compare */ \"(ssr)/../../node_modules/proxy-compare/dist/index.modern.js\");\n\n\nconst isObject = (x) => typeof x === \"object\" && x !== null;\nconst proxyStateMap = /* @__PURE__ */ new WeakMap();\nconst refSet = /* @__PURE__ */ new WeakSet();\nconst buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {\n  switch (promise.status) {\n    case \"fulfilled\":\n      return promise.value;\n    case \"rejected\":\n      throw promise.reason;\n    default:\n      throw promise;\n  }\n}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {\n  const cache = snapCache.get(target);\n  if ((cache == null ? void 0 : cache[0]) === version) {\n    return cache[1];\n  }\n  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));\n  (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(snap, true);\n  snapCache.set(target, [version, snap]);\n  Reflect.ownKeys(target).forEach((key) => {\n    if (Object.getOwnPropertyDescriptor(snap, key)) {\n      return;\n    }\n    const value = Reflect.get(target, key);\n    const desc = {\n      value,\n      enumerable: true,\n      // This is intentional to avoid copying with proxy-compare.\n      // It's still non-writable, so it avoids assigning a value.\n      configurable: true\n    };\n    if (refSet.has(value)) {\n      (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(value, false);\n    } else if (value instanceof Promise) {\n      delete desc.value;\n      desc.get = () => handlePromise(value);\n    } else if (proxyStateMap.has(value)) {\n      const [target2, ensureVersion] = proxyStateMap.get(\n        value\n      );\n      desc.value = createSnapshot(\n        target2,\n        ensureVersion(),\n        handlePromise\n      );\n    }\n    Object.defineProperty(snap, key, desc);\n  });\n  return Object.preventExtensions(snap);\n}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {\n  if (!isObject(initialObject)) {\n    throw new Error(\"object required\");\n  }\n  const found = proxyCache.get(initialObject);\n  if (found) {\n    return found;\n  }\n  let version = versionHolder[0];\n  const listeners = /* @__PURE__ */ new Set();\n  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {\n    if (version !== nextVersion) {\n      version = nextVersion;\n      listeners.forEach((listener) => listener(op, nextVersion));\n    }\n  };\n  let checkVersion = versionHolder[1];\n  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {\n    if (checkVersion !== nextCheckVersion && !listeners.size) {\n      checkVersion = nextCheckVersion;\n      propProxyStates.forEach(([propProxyState]) => {\n        const propVersion = propProxyState[1](nextCheckVersion);\n        if (propVersion > version) {\n          version = propVersion;\n        }\n      });\n    }\n    return version;\n  };\n  const createPropListener = (prop) => (op, nextVersion) => {\n    const newOp = [...op];\n    newOp[1] = [prop, ...newOp[1]];\n    notifyUpdate(newOp, nextVersion);\n  };\n  const propProxyStates = /* @__PURE__ */ new Map();\n  const addPropListener = (prop, propProxyState) => {\n    if (( false ? 0 : void 0) !== \"production\" && propProxyStates.has(prop)) {\n      throw new Error(\"prop listener already exists\");\n    }\n    if (listeners.size) {\n      const remove = propProxyState[3](createPropListener(prop));\n      propProxyStates.set(prop, [propProxyState, remove]);\n    } else {\n      propProxyStates.set(prop, [propProxyState]);\n    }\n  };\n  const removePropListener = (prop) => {\n    var _a;\n    const entry = propProxyStates.get(prop);\n    if (entry) {\n      propProxyStates.delete(prop);\n      (_a = entry[1]) == null ? void 0 : _a.call(entry);\n    }\n  };\n  const addListener = (listener) => {\n    listeners.add(listener);\n    if (listeners.size === 1) {\n      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {\n        if (( false ? 0 : void 0) !== \"production\" && prevRemove) {\n          throw new Error(\"remove already exists\");\n        }\n        const remove = propProxyState[3](createPropListener(prop));\n        propProxyStates.set(prop, [propProxyState, remove]);\n      });\n    }\n    const removeListener = () => {\n      listeners.delete(listener);\n      if (listeners.size === 0) {\n        propProxyStates.forEach(([propProxyState, remove], prop) => {\n          if (remove) {\n            remove();\n            propProxyStates.set(prop, [propProxyState]);\n          }\n        });\n      }\n    };\n    return removeListener;\n  };\n  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));\n  const handler = {\n    deleteProperty(target, prop) {\n      const prevValue = Reflect.get(target, prop);\n      removePropListener(prop);\n      const deleted = Reflect.deleteProperty(target, prop);\n      if (deleted) {\n        notifyUpdate([\"delete\", [prop], prevValue]);\n      }\n      return deleted;\n    },\n    set(target, prop, value, receiver) {\n      const hasPrevValue = Reflect.has(target, prop);\n      const prevValue = Reflect.get(target, prop, receiver);\n      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {\n        return true;\n      }\n      removePropListener(prop);\n      if (isObject(value)) {\n        value = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.getUntracked)(value) || value;\n      }\n      let nextValue = value;\n      if (value instanceof Promise) {\n        value.then((v) => {\n          value.status = \"fulfilled\";\n          value.value = v;\n          notifyUpdate([\"resolve\", [prop], v]);\n        }).catch((e) => {\n          value.status = \"rejected\";\n          value.reason = e;\n          notifyUpdate([\"reject\", [prop], e]);\n        });\n      } else {\n        if (!proxyStateMap.has(value) && canProxy(value)) {\n          nextValue = proxyFunction(value);\n        }\n        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);\n        if (childProxyState) {\n          addPropListener(prop, childProxyState);\n        }\n      }\n      Reflect.set(target, prop, nextValue, receiver);\n      notifyUpdate([\"set\", [prop], value, prevValue]);\n      return true;\n    }\n  };\n  const proxyObject = newProxy(baseObject, handler);\n  proxyCache.set(initialObject, proxyObject);\n  const proxyState = [\n    baseObject,\n    ensureVersion,\n    createSnapshot,\n    addListener\n  ];\n  proxyStateMap.set(proxyObject, proxyState);\n  Reflect.ownKeys(initialObject).forEach((key) => {\n    const desc = Object.getOwnPropertyDescriptor(\n      initialObject,\n      key\n    );\n    if (\"value\" in desc) {\n      proxyObject[key] = initialObject[key];\n      delete desc.value;\n      delete desc.writable;\n    }\n    Object.defineProperty(baseObject, key, desc);\n  });\n  return proxyObject;\n}) => [\n  // public functions\n  proxyFunction,\n  // shared state\n  proxyStateMap,\n  refSet,\n  // internal things\n  objectIs,\n  newProxy,\n  canProxy,\n  defaultHandlePromise,\n  snapCache,\n  createSnapshot,\n  proxyCache,\n  versionHolder\n];\nconst [defaultProxyFunction] = buildProxyFunction();\nfunction proxy(initialObject = {}) {\n  return defaultProxyFunction(initialObject);\n}\nfunction getVersion(proxyObject) {\n  const proxyState = proxyStateMap.get(proxyObject);\n  return proxyState == null ? void 0 : proxyState[1]();\n}\nfunction subscribe(proxyObject, callback, notifyInSync) {\n  const proxyState = proxyStateMap.get(proxyObject);\n  if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n    console.warn(\"Please use proxy object\");\n  }\n  let promise;\n  const ops = [];\n  const addListener = proxyState[3];\n  let isListenerActive = false;\n  const listener = (op) => {\n    ops.push(op);\n    if (notifyInSync) {\n      callback(ops.splice(0));\n      return;\n    }\n    if (!promise) {\n      promise = Promise.resolve().then(() => {\n        promise = void 0;\n        if (isListenerActive) {\n          callback(ops.splice(0));\n        }\n      });\n    }\n  };\n  const removeListener = addListener(listener);\n  isListenerActive = true;\n  return () => {\n    isListenerActive = false;\n    removeListener();\n  };\n}\nfunction snapshot(proxyObject, handlePromise) {\n  const proxyState = proxyStateMap.get(proxyObject);\n  if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n    console.warn(\"Please use proxy object\");\n  }\n  const [target, ensureVersion, createSnapshot] = proxyState;\n  return createSnapshot(target, ensureVersion(), handlePromise);\n}\nfunction ref(obj) {\n  refSet.add(obj);\n  return obj;\n}\nconst unstable_buildProxyFunction = buildProxyFunction;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbHRpby9lc20vdmFuaWxsYS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQVc7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFlLEdBQUcsQ0FBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQWUsR0FBRyxDQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQWUsR0FBRyxDQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBZSxHQUFHLENBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvRiIsInNvdXJjZXMiOlsiL1VzZXJzL2tldmluam9uZXMvem9yYS1jb2luLXN0YXJ0ZXJraXQvbm9kZV9tb2R1bGVzL3ZhbHRpby9lc20vdmFuaWxsYS5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFya1RvVHJhY2ssIGdldFVudHJhY2tlZCB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuXG5jb25zdCBpc09iamVjdCA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsO1xuY29uc3QgcHJveHlTdGF0ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVmU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jb25zdCBidWlsZFByb3h5RnVuY3Rpb24gPSAob2JqZWN0SXMgPSBPYmplY3QuaXMsIG5ld1Byb3h5ID0gKHRhcmdldCwgaGFuZGxlcikgPT4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlciksIGNhblByb3h5ID0gKHgpID0+IGlzT2JqZWN0KHgpICYmICFyZWZTZXQuaGFzKHgpICYmIChBcnJheS5pc0FycmF5KHgpIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIHgpKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrTWFwKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrU2V0KSAmJiAhKHggaW5zdGFuY2VvZiBFcnJvcikgJiYgISh4IGluc3RhbmNlb2YgTnVtYmVyKSAmJiAhKHggaW5zdGFuY2VvZiBEYXRlKSAmJiAhKHggaW5zdGFuY2VvZiBTdHJpbmcpICYmICEoeCBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgISh4IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpLCBkZWZhdWx0SGFuZGxlUHJvbWlzZSA9IChwcm9taXNlKSA9PiB7XG4gIHN3aXRjaCAocHJvbWlzZS5zdGF0dXMpIHtcbiAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICByZXR1cm4gcHJvbWlzZS52YWx1ZTtcbiAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgIHRocm93IHByb21pc2UucmVhc29uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBwcm9taXNlO1xuICB9XG59LCBzbmFwQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgY3JlYXRlU25hcHNob3QgPSAodGFyZ2V0LCB2ZXJzaW9uLCBoYW5kbGVQcm9taXNlID0gZGVmYXVsdEhhbmRsZVByb21pc2UpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBzbmFwQ2FjaGUuZ2V0KHRhcmdldCk7XG4gIGlmICgoY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlWzBdKSA9PT0gdmVyc2lvbikge1xuICAgIHJldHVybiBjYWNoZVsxXTtcbiAgfVxuICBjb25zdCBzbmFwID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcbiAgbWFya1RvVHJhY2soc25hcCwgdHJ1ZSk7XG4gIHNuYXBDYWNoZS5zZXQodGFyZ2V0LCBbdmVyc2lvbiwgc25hcF0pO1xuICBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzbmFwLCBrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IGRlc2MgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsIHRvIGF2b2lkIGNvcHlpbmcgd2l0aCBwcm94eS1jb21wYXJlLlxuICAgICAgLy8gSXQncyBzdGlsbCBub24td3JpdGFibGUsIHNvIGl0IGF2b2lkcyBhc3NpZ25pbmcgYSB2YWx1ZS5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHJlZlNldC5oYXModmFsdWUpKSB7XG4gICAgICBtYXJrVG9UcmFjayh2YWx1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgICAgIGRlc2MuZ2V0ID0gKCkgPT4gaGFuZGxlUHJvbWlzZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChwcm94eVN0YXRlTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IFt0YXJnZXQyLCBlbnN1cmVWZXJzaW9uXSA9IHByb3h5U3RhdGVNYXAuZ2V0KFxuICAgICAgICB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGRlc2MudmFsdWUgPSBjcmVhdGVTbmFwc2hvdChcbiAgICAgICAgdGFyZ2V0MixcbiAgICAgICAgZW5zdXJlVmVyc2lvbigpLFxuICAgICAgICBoYW5kbGVQcm9taXNlXG4gICAgICApO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc25hcCwga2V5LCBkZXNjKTtcbiAgfSk7XG4gIHJldHVybiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoc25hcCk7XG59LCBwcm94eUNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIHZlcnNpb25Ib2xkZXIgPSBbMSwgMV0sIHByb3h5RnVuY3Rpb24gPSAoaW5pdGlhbE9iamVjdCkgPT4ge1xuICBpZiAoIWlzT2JqZWN0KGluaXRpYWxPYmplY3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwib2JqZWN0IHJlcXVpcmVkXCIpO1xuICB9XG4gIGNvbnN0IGZvdW5kID0gcHJveHlDYWNoZS5nZXQoaW5pdGlhbE9iamVjdCk7XG4gIGlmIChmb3VuZCkge1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBsZXQgdmVyc2lvbiA9IHZlcnNpb25Ib2xkZXJbMF07XG4gIGNvbnN0IGxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IG5vdGlmeVVwZGF0ZSA9IChvcCwgbmV4dFZlcnNpb24gPSArK3ZlcnNpb25Ib2xkZXJbMF0pID0+IHtcbiAgICBpZiAodmVyc2lvbiAhPT0gbmV4dFZlcnNpb24pIHtcbiAgICAgIHZlcnNpb24gPSBuZXh0VmVyc2lvbjtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIob3AsIG5leHRWZXJzaW9uKSk7XG4gICAgfVxuICB9O1xuICBsZXQgY2hlY2tWZXJzaW9uID0gdmVyc2lvbkhvbGRlclsxXTtcbiAgY29uc3QgZW5zdXJlVmVyc2lvbiA9IChuZXh0Q2hlY2tWZXJzaW9uID0gKyt2ZXJzaW9uSG9sZGVyWzFdKSA9PiB7XG4gICAgaWYgKGNoZWNrVmVyc2lvbiAhPT0gbmV4dENoZWNrVmVyc2lvbiAmJiAhbGlzdGVuZXJzLnNpemUpIHtcbiAgICAgIGNoZWNrVmVyc2lvbiA9IG5leHRDaGVja1ZlcnNpb247XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuZm9yRWFjaCgoW3Byb3BQcm94eVN0YXRlXSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wVmVyc2lvbiA9IHByb3BQcm94eVN0YXRlWzFdKG5leHRDaGVja1ZlcnNpb24pO1xuICAgICAgICBpZiAocHJvcFZlcnNpb24gPiB2ZXJzaW9uKSB7XG4gICAgICAgICAgdmVyc2lvbiA9IHByb3BWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVByb3BMaXN0ZW5lciA9IChwcm9wKSA9PiAob3AsIG5leHRWZXJzaW9uKSA9PiB7XG4gICAgY29uc3QgbmV3T3AgPSBbLi4ub3BdO1xuICAgIG5ld09wWzFdID0gW3Byb3AsIC4uLm5ld09wWzFdXTtcbiAgICBub3RpZnlVcGRhdGUobmV3T3AsIG5leHRWZXJzaW9uKTtcbiAgfTtcbiAgY29uc3QgcHJvcFByb3h5U3RhdGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3QgYWRkUHJvcExpc3RlbmVyID0gKHByb3AsIHByb3BQcm94eVN0YXRlKSA9PiB7XG4gICAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIHByb3BQcm94eVN0YXRlcy5oYXMocHJvcCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInByb3AgbGlzdGVuZXIgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgY29uc3QgcmVtb3ZlID0gcHJvcFByb3h5U3RhdGVbM10oY3JlYXRlUHJvcExpc3RlbmVyKHByb3ApKTtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGVdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb3BMaXN0ZW5lciA9IChwcm9wKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGVudHJ5ID0gcHJvcFByb3h5U3RhdGVzLmdldChwcm9wKTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5kZWxldGUocHJvcCk7XG4gICAgICAoX2EgPSBlbnRyeVsxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwoZW50cnkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICBpZiAobGlzdGVuZXJzLnNpemUgPT09IDEpIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHByZXZSZW1vdmVdLCBwcm9wKSA9PiB7XG4gICAgICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcmV2UmVtb3ZlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVtb3ZlIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IHByb3BQcm94eVN0YXRlWzNdKGNyZWF0ZVByb3BMaXN0ZW5lcihwcm9wKSk7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgaWYgKGxpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0sIHByb3ApID0+IHtcbiAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcjtcbiAgfTtcbiAgY29uc3QgYmFzZU9iamVjdCA9IEFycmF5LmlzQXJyYXkoaW5pdGlhbE9iamVjdCkgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluaXRpYWxPYmplY3QpKTtcbiAgY29uc3QgaGFuZGxlciA9IHtcbiAgICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcbiAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCk7XG4gICAgICByZW1vdmVQcm9wTGlzdGVuZXIocHJvcCk7XG4gICAgICBjb25zdCBkZWxldGVkID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm90aWZ5VXBkYXRlKFtcImRlbGV0ZVwiLCBbcHJvcF0sIHByZXZWYWx1ZV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGV0ZWQ7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIGNvbnN0IGhhc1ByZXZWYWx1ZSA9IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgICBjb25zdCBwcmV2VmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgIGlmIChoYXNQcmV2VmFsdWUgJiYgKG9iamVjdElzKHByZXZWYWx1ZSwgdmFsdWUpIHx8IHByb3h5Q2FjaGUuaGFzKHZhbHVlKSAmJiBvYmplY3RJcyhwcmV2VmFsdWUsIHByb3h5Q2FjaGUuZ2V0KHZhbHVlKSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmVtb3ZlUHJvcExpc3RlbmVyKHByb3ApO1xuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IGdldFVudHJhY2tlZCh2YWx1ZSkgfHwgdmFsdWU7XG4gICAgICB9XG4gICAgICBsZXQgbmV4dFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhbHVlLnRoZW4oKHYpID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGF0dXMgPSBcImZ1bGZpbGxlZFwiO1xuICAgICAgICAgIHZhbHVlLnZhbHVlID0gdjtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoW1wicmVzb2x2ZVwiLCBbcHJvcF0sIHZdKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGF0dXMgPSBcInJlamVjdGVkXCI7XG4gICAgICAgICAgdmFsdWUucmVhc29uID0gZTtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoW1wicmVqZWN0XCIsIFtwcm9wXSwgZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcHJveHlTdGF0ZU1hcC5oYXModmFsdWUpICYmIGNhblByb3h5KHZhbHVlKSkge1xuICAgICAgICAgIG5leHRWYWx1ZSA9IHByb3h5RnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkUHJveHlTdGF0ZSA9ICFyZWZTZXQuaGFzKG5leHRWYWx1ZSkgJiYgcHJveHlTdGF0ZU1hcC5nZXQobmV4dFZhbHVlKTtcbiAgICAgICAgaWYgKGNoaWxkUHJveHlTdGF0ZSkge1xuICAgICAgICAgIGFkZFByb3BMaXN0ZW5lcihwcm9wLCBjaGlsZFByb3h5U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3AsIG5leHRWYWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgbm90aWZ5VXBkYXRlKFtcInNldFwiLCBbcHJvcF0sIHZhbHVlLCBwcmV2VmFsdWVdKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJveHlPYmplY3QgPSBuZXdQcm94eShiYXNlT2JqZWN0LCBoYW5kbGVyKTtcbiAgcHJveHlDYWNoZS5zZXQoaW5pdGlhbE9iamVjdCwgcHJveHlPYmplY3QpO1xuICBjb25zdCBwcm94eVN0YXRlID0gW1xuICAgIGJhc2VPYmplY3QsXG4gICAgZW5zdXJlVmVyc2lvbixcbiAgICBjcmVhdGVTbmFwc2hvdCxcbiAgICBhZGRMaXN0ZW5lclxuICBdO1xuICBwcm94eVN0YXRlTWFwLnNldChwcm94eU9iamVjdCwgcHJveHlTdGF0ZSk7XG4gIFJlZmxlY3Qub3duS2V5cyhpbml0aWFsT2JqZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIGluaXRpYWxPYmplY3QsXG4gICAgICBrZXlcbiAgICApO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcHJveHlPYmplY3Rba2V5XSA9IGluaXRpYWxPYmplY3Rba2V5XTtcbiAgICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiYXNlT2JqZWN0LCBrZXksIGRlc2MpO1xuICB9KTtcbiAgcmV0dXJuIHByb3h5T2JqZWN0O1xufSkgPT4gW1xuICAvLyBwdWJsaWMgZnVuY3Rpb25zXG4gIHByb3h5RnVuY3Rpb24sXG4gIC8vIHNoYXJlZCBzdGF0ZVxuICBwcm94eVN0YXRlTWFwLFxuICByZWZTZXQsXG4gIC8vIGludGVybmFsIHRoaW5nc1xuICBvYmplY3RJcyxcbiAgbmV3UHJveHksXG4gIGNhblByb3h5LFxuICBkZWZhdWx0SGFuZGxlUHJvbWlzZSxcbiAgc25hcENhY2hlLFxuICBjcmVhdGVTbmFwc2hvdCxcbiAgcHJveHlDYWNoZSxcbiAgdmVyc2lvbkhvbGRlclxuXTtcbmNvbnN0IFtkZWZhdWx0UHJveHlGdW5jdGlvbl0gPSBidWlsZFByb3h5RnVuY3Rpb24oKTtcbmZ1bmN0aW9uIHByb3h5KGluaXRpYWxPYmplY3QgPSB7fSkge1xuICByZXR1cm4gZGVmYXVsdFByb3h5RnVuY3Rpb24oaW5pdGlhbE9iamVjdCk7XG59XG5mdW5jdGlvbiBnZXRWZXJzaW9uKHByb3h5T2JqZWN0KSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIHJldHVybiBwcm94eVN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBwcm94eVN0YXRlWzFdKCk7XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUocHJveHlPYmplY3QsIGNhbGxiYWNrLCBub3RpZnlJblN5bmMpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmICFwcm94eVN0YXRlKSB7XG4gICAgY29uc29sZS53YXJuKFwiUGxlYXNlIHVzZSBwcm94eSBvYmplY3RcIik7XG4gIH1cbiAgbGV0IHByb21pc2U7XG4gIGNvbnN0IG9wcyA9IFtdO1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IHByb3h5U3RhdGVbM107XG4gIGxldCBpc0xpc3RlbmVyQWN0aXZlID0gZmFsc2U7XG4gIGNvbnN0IGxpc3RlbmVyID0gKG9wKSA9PiB7XG4gICAgb3BzLnB1c2gob3ApO1xuICAgIGlmIChub3RpZnlJblN5bmMpIHtcbiAgICAgIGNhbGxiYWNrKG9wcy5zcGxpY2UoMCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGlzTGlzdGVuZXJBY3RpdmUpIHtcbiAgICAgICAgICBjYWxsYmFjayhvcHMuc3BsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVMaXN0ZW5lciA9IGFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgaXNMaXN0ZW5lckFjdGl2ZSA9IHRydWU7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaXNMaXN0ZW5lckFjdGl2ZSA9IGZhbHNlO1xuICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gIH07XG59XG5mdW5jdGlvbiBzbmFwc2hvdChwcm94eU9iamVjdCwgaGFuZGxlUHJvbWlzZSkge1xuICBjb25zdCBwcm94eVN0YXRlID0gcHJveHlTdGF0ZU1hcC5nZXQocHJveHlPYmplY3QpO1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIXByb3h5U3RhdGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJQbGVhc2UgdXNlIHByb3h5IG9iamVjdFwiKTtcbiAgfVxuICBjb25zdCBbdGFyZ2V0LCBlbnN1cmVWZXJzaW9uLCBjcmVhdGVTbmFwc2hvdF0gPSBwcm94eVN0YXRlO1xuICByZXR1cm4gY3JlYXRlU25hcHNob3QodGFyZ2V0LCBlbnN1cmVWZXJzaW9uKCksIGhhbmRsZVByb21pc2UpO1xufVxuZnVuY3Rpb24gcmVmKG9iaikge1xuICByZWZTZXQuYWRkKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5jb25zdCB1bnN0YWJsZV9idWlsZFByb3h5RnVuY3Rpb24gPSBidWlsZFByb3h5RnVuY3Rpb247XG5cbmV4cG9ydCB7IGdldFZlcnNpb24sIHByb3h5LCByZWYsIHNuYXBzaG90LCBzdWJzY3JpYmUsIHVuc3RhYmxlX2J1aWxkUHJveHlGdW5jdGlvbiB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/valtio/esm/vanilla.mjs\n");

/***/ })

};
;