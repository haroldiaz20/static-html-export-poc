(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js ***!
  \*********************************************************************/
/*! exports provided: DOMRectReadOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRectReadOnly", function() { return DOMRectReadOnly; });
class DOMRectReadOnly {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return Object.freeze(this);
    }
    static fromRect(rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
}



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js ***!
  \***********************************************************************/
/*! exports provided: ResizeObservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObservation", function() { return ResizeObservation; });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");


class ResizeObservation {
    constructor(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    isActive() {
        const size = Object(_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__["calculateBoxSize"])(this.target, this.observedBox);
        return this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize;
    }
}



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js ***!
  \********************************************************************/
/*! exports provided: default, ResizeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserver", function() { return ResizeObserver; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");


const DPPB = _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_1__["ResizeObserverBoxOptions"].DEVICE_PIXEL_BORDER_BOX;
class ResizeObserver {
    constructor(callback) {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].connect(this, callback);
    }
    observe(target, options) {
        if (options && options.box === DPPB && target.tagName !== 'CANVAS') {
            throw new Error(`Can only watch ${options.box} on canvas elements.`);
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].observe(this, target, options);
    }
    unobserve(target) {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].unobserve(this, target);
    }
    disconnect() {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverController"].disconnect(this);
    }
    static toString() {
        return 'function ResizeObserver () { [polyfill code] }';
    }
}



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js ***!
  \******************************************************************************/
/*! exports provided: ResizeObserverBoxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverBoxOptions", function() { return ResizeObserverBoxOptions; });
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["SCROLL_BOX"] = "scroll-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_BORDER_BOX"] = "device-pixel-border-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js ***!
  \******************************************************************************/
/*! exports provided: default, ResizeObserverController, resizeObservers, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeObserverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverController", function() { return ResizeObserverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeObservers", function() { return resizeObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scheduler */ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js");
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObservation */ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js");
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeObserverDetail */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js");
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/hasActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js");
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/hasSkippedObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js");
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/deliverResizeLoopError */ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js");
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithms/broadcastActiveObservations */ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js");
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./algorithms/gatherActiveObservationsAtDepth */ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js");








const resizeObservers = [];
const observerMap = new Map();
const getObservationIndex = (observationTargets, target) => {
    for (let i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
const process = () => {
    let depth = 0;
    Object(_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_7__["gatherActiveObservationsAtDepth"])(depth);
    while (Object(_algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_3__["hasActiveObservations"])()) {
        depth = Object(_algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_6__["broadcastActiveObservations"])();
        Object(_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_7__["gatherActiveObservationsAtDepth"])(depth);
    }
    if (Object(_algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_4__["hasSkippedObservations"])()) {
        Object(_algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_5__["deliverResizeLoopError"])();
    }
    return depth > 0;
};
class ResizeObserverController {
    static connect(resizeObserver, callback) {
        const detail = new _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__["ResizeObserverDetail"](resizeObserver, callback);
        resizeObservers.push(detail);
        observerMap.set(resizeObserver, detail);
    }
    static observe(resizeObserver, target, options) {
        if (observerMap.has(resizeObserver)) {
            const detail = observerMap.get(resizeObserver);
            if (getObservationIndex(detail.observationTargets, target) < 0) {
                detail.observationTargets.push(new _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__["ResizeObservation"](target, options && options.box));
                Object(_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__["schedule"])();
            }
        }
    }
    static unobserve(resizeObserver, target) {
        if (observerMap.has(resizeObserver)) {
            const detail = observerMap.get(resizeObserver);
            const index = getObservationIndex(detail.observationTargets, target);
            if (index >= 0) {
                detail.observationTargets.splice(index, 1);
            }
        }
    }
    static disconnect(resizeObserver) {
        if (observerMap.has(resizeObserver)) {
            const detail = observerMap.get(resizeObserver);
            resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            observerMap.delete(resizeObserver);
        }
    }
}



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js ***!
  \**************************************************************************/
/*! exports provided: ResizeObserverDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverDetail", function() { return ResizeObserverDetail; });
class ResizeObserverDetail {
    constructor(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
}



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js ***!
  \*************************************************************************/
/*! exports provided: ResizeObserverEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserverEntry", function() { return ResizeObserverEntry; });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");

class ResizeObserverEntry {
    constructor(target) {
        const boxes = Object(_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__["calculateBoxSizes"])(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = boxes.borderBoxSize;
        this.contentSize = boxes.contentBoxSize;
        this.scrollSize = boxes.scrollBoxSize;
        this.devicePixelBorderBoxSize = boxes.devicePixelBorderBoxSize;
    }
}



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js ***!
  \********************************************************************************************/
/*! exports provided: broadcastActiveObservations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broadcastActiveObservations", function() { return broadcastActiveObservations; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResizeObserverEntry */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");




const broadcastActiveObservations = () => {
    let shallowestDepth = Infinity;
    const callbacks = [];
    _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].forEach((ro) => {
        if (ro.activeTargets.length === 0) {
            return;
        }
        const entries = [];
        ro.activeTargets.forEach((ot) => {
            const entry = new _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__["ResizeObserverEntry"](ot.target);
            const targetDepth = Object(_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_2__["calculateDepthForNode"])(ot.target);
            entries.push(entry);
            ot.lastReportedSize = Object(_calculateBoxSize__WEBPACK_IMPORTED_MODULE_3__["calculateBoxSize"])(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(() => ro.callback(entries, ro.observer));
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    callbacks.forEach(callback => callback());
    return shallowestDepth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js ***!
  \*********************************************************************************/
/*! exports provided: calculateBoxSize, calculateBoxSizes, cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBoxSize", function() { return calculateBoxSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBoxSizes", function() { return calculateBoxSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverBoxOptions */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js");
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMRectReadOnly */ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js");


const cache = new Map();
const IE = (/msie|trident/i).test(navigator.userAgent);
const parseDimension = (pixel) => parseFloat(pixel || '0');
const isSVG = (target) => 'SVGGraphicsElement' in window
    && target instanceof SVGGraphicsElement && 'getBBox' in target;
const calculateBoxSizes = (target) => {
    if (cache.has(target)) {
        return cache.get(target);
    }
    const svg = isSVG(target) && target.getBBox();
    const cs = getComputedStyle(target);
    const removePadding = !IE && cs.boxSizing === 'border-box';
    const width = parseDimension(cs.width);
    const height = parseDimension(cs.height);
    const hidden = isNaN(width) || isNaN(height) || cs.display === 'none';
    const paddingTop = svg || hidden ? 0 : parseDimension(cs.paddingTop);
    const paddingRight = svg || hidden ? 0 : parseDimension(cs.paddingRight);
    const paddingBottom = svg || hidden ? 0 : parseDimension(cs.paddingBottom);
    const paddingLeft = svg || hidden ? 0 : parseDimension(cs.paddingLeft);
    const borderTop = svg || hidden ? 0 : parseDimension(cs.borderTopWidth);
    const borderRight = svg || hidden ? 0 : parseDimension(cs.borderRightWidth);
    const borderBottom = svg || hidden ? 0 : parseDimension(cs.borderBottomWidth);
    const borderLeft = svg || hidden ? 0 : parseDimension(cs.borderLeftWidth);
    const horizontalPadding = paddingLeft + paddingRight;
    const verticalPadding = paddingTop + paddingBottom;
    const horizontalBorderArea = borderLeft + borderRight;
    const verticalBorderArea = borderTop + borderBottom;
    const widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    const heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    const contentWidth = hidden ? 0 : svg ? svg.width : parseDimension(cs.width) - widthReduction;
    const contentHeight = hidden ? 0 : svg ? svg.height : parseDimension(cs.height) - heightReduction;
    const borderBoxSize = {
        inlineSize: contentWidth + horizontalPadding + horizontalBorderArea,
        blockSize: contentHeight + verticalPadding + verticalBorderArea
    };
    const contentBoxSize = {
        inlineSize: contentWidth,
        blockSize: contentHeight
    };
    const scrollBoxSize = {
        inlineSize: contentWidth + horizontalPadding,
        blockSize: contentHeight + verticalPadding
    };
    const devicePixelBorderBoxSize = {
        inlineSize: borderBoxSize.inlineSize * window.devicePixelRatio,
        blockSize: borderBoxSize.blockSize * window.devicePixelRatio
    };
    const contentRect = new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_1__["DOMRectReadOnly"](paddingLeft, paddingTop, contentWidth, contentHeight);
    const boxes = {
        borderBoxSize,
        contentBoxSize,
        scrollBoxSize,
        devicePixelBorderBoxSize,
        contentRect
    };
    cache.set(target, boxes);
    return boxes;
};
const calculateBoxSize = (target, observedBox) => {
    const boxes = calculateBoxSizes(target);
    switch (observedBox) {
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].BORDER_BOX:
            return boxes.borderBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].SCROLL_BOX:
            return boxes.scrollBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].DEVICE_PIXEL_BORDER_BOX:
            return boxes.devicePixelBorderBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__["ResizeObserverBoxOptions"].CONTENT_BOX:
        default:
            return boxes.contentBoxSize;
    }
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js ***!
  \**************************************************************************************/
/*! exports provided: calculateDepthForNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDepthForNode", function() { return calculateDepthForNode; });
const calculateDepthForNode = (node) => {
    let depth = 0;
    let parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js ***!
  \***************************************************************************************/
/*! exports provided: deliverResizeLoopError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deliverResizeLoopError", function() { return deliverResizeLoopError; });
const msg = 'ResizeObserver loop completed with undelivered notifications.';
const deliverResizeLoopError = () => {
    let event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js ***!
  \************************************************************************************************/
/*! exports provided: gatherActiveObservationsAtDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatherActiveObservationsAtDepth", function() { return gatherActiveObservationsAtDepth; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateDepthForNode */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js");
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateBoxSize */ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js");



const gatherActiveObservationsAtDepth = (depth) => {
    _calculateBoxSize__WEBPACK_IMPORTED_MODULE_2__["cache"].clear();
    _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].forEach((ro) => {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach((ot) => {
            if (ot.isActive()) {
                if (Object(_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__["calculateDepthForNode"])(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js ***!
  \**************************************************************************************/
/*! exports provided: hasActiveObservations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasActiveObservations", function() { return hasActiveObservations; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");

const hasActiveObservations = () => {
    return _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].some((ro) => ro.activeTargets.length > 0);
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js ***!
  \***************************************************************************************/
/*! exports provided: hasSkippedObservations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSkippedObservations", function() { return hasSkippedObservations; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");

const hasSkippedObservations = () => {
    return _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["resizeObservers"].some((ro) => ro.skippedTargets.length > 0);
};



/***/ }),

/***/ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js ***!
  \*********************************************************************/
/*! exports provided: schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResizeObserverController */ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js");

const events = [
    'resize',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
let frameId;
const run = (frames) => {
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(() => {
        if (Object(_ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__["process"])()) {
            run(60);
        }
        else if (frames) {
            run(frames - 1);
        }
    });
};
const schedule = () => run(1);
events.forEach(name => window.addEventListener(name, schedule, true));
const createObserver = () => {
    if ('MutationObserver' in window) {
        const observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
        new MutationObserver(schedule).observe(document.body, observerConfig);
    }
};
document.body ? createObserver() : document.addEventListener('DOMContentLoaded', createObserver);



/***/ })

}]);
//# sourceMappingURL=1.js.map