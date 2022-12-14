var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import * as PropTypes from "prop-types";
var ClickOutside = /** @class */ (function (_super) {
    __extends(ClickOutside, _super);
    function ClickOutside() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouch = false;
        _this.handle = function (event) {
            if (event.type === "touchend") {
                _this.isTouch = true;
            }
            if (event.type === "click" && _this.isTouch) {
                return;
            }
            var onClickOutside = _this.props.onClickOutside;
            var element = _this.element;
            if (element) {
                if (!element.contains(event.target)) {
                    onClickOutside(event);
                }
            }
        };
        return _this;
    }
    ClickOutside.prototype.componentDidMount = function () {
        document.addEventListener("touchend", this.handle, true);
        document.addEventListener("click", this.handle, true);
    };
    ClickOutside.prototype.componentWillUnmount = function () {
        document.removeEventListener("touchend", this.handle, true);
        document.removeEventListener("click", this.handle, true);
    };
    ClickOutside.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, onClickOutside = _a.onClickOutside, props = __rest(_a, ["children", "onClickOutside"]);
        return (React.createElement("div", __assign({}, props, { ref: function (c) { return (_this.element = c); } }), children));
    };
    ClickOutside.propTypes = {
        onClickOutside: PropTypes.func.isRequired,
    };
    return ClickOutside;
}(React.Component));
export default ClickOutside;
//# sourceMappingURL=ClickOutside.js.map