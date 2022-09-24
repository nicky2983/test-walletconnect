var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import styled from "styled-components";
import { colors, shadows, transitions } from "../styles";
import ClickOutside from "./ClickOutside";
var SDropdown = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transition: ", ";\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  box-shadow: ", ";\n  font-family: ", ";\n  cursor: ", ";\n"], ["\n  transition: ", ";\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  box-shadow: ", ";\n  font-family: ", ";\n  cursor: ", ";\n"])), transitions.base, shadows.hard, function (_a) {
    var monospace = _a.monospace;
    return (monospace ? "monospace" : "inherit");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "default" : "pointer");
});
var SRow = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transition: ", ";\n  width: 100%;\n  padding: 10px 20px;\n  background: rgb(", ");\n  border-radius: ", ";\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: ", ";\n  &:last-child {\n    border-bottom-color: rgba(", ", 0);\n  }\n"], ["\n  transition: ", ";\n  width: 100%;\n  padding: 10px 20px;\n  background: rgb(", ");\n  border-radius: ", ";\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: ", ";\n  &:last-child {\n    border-bottom-color: rgba(", ", 0);\n  }\n"])), transitions.base, colors.white, function (_a) {
    var selected = _a.selected, show = _a.show;
    return (selected ? (show ? "6px 6px 0 0 " : "6px") : "none");
}, function (_a) {
    var show = _a.show;
    return show ? "rgba(".concat(colors.defaultColor, ", 0.3)") : "rgba(".concat(colors.defaultColor, ", 0)");
}, colors.defaultColor);
var SAbsolute = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transition: ", ";\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  max-height: 150px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  z-index: 1;\n  border-radius: 0 0 6px 6px;\n  box-shadow: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  visibility: ", ";\n"], ["\n  transition: ", ";\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  max-height: 150px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  z-index: 1;\n  border-radius: 0 0 6px 6px;\n  box-shadow: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  visibility: ", ";\n"])), transitions.base, shadows.hard, function (_a) {
    var show = _a.show;
    return (show ? "1" : "0");
}, function (_a) {
    var show = _a.show;
    return (show ? "auto" : "non");
}, function (_a) {
    var show = _a.show;
    return (show ? "visible" : "hidden");
});
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: false,
            optionsDict: {},
            otherKeys: [],
        };
        _this.parseKeys = function (props) {
            var targetKey = props.targetKey, options = props.options, selected = props.selected;
            var optionsDict = {};
            var otherKeys = [];
            if (Array.isArray(options)) {
                if (!targetKey) {
                    throw new Error("Error: \"option\" prop is type Array requires \"targetKey\" prop");
                }
                options.forEach(function (option) {
                    var optionKey = option[targetKey];
                    if (option[targetKey] !== selected) {
                        otherKeys.push(optionKey);
                    }
                    optionsDict[optionKey] = option;
                });
            }
            else {
                otherKeys = Object.keys(options);
                optionsDict = options;
            }
            return { otherKeys: otherKeys, optionsDict: optionsDict };
        };
        _this.toggleDropdown = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.setState({ show: !_this.state.show });
        };
        _this.onClickOutside = function () {
            if (_this.state.show) {
                _this.toggleDropdown();
            }
        };
        _this.onChange = function (selected) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.toggleDropdown();
                if (this.props.onChange) {
                    this.props.onChange(selected);
                }
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Dropdown.prototype.componentDidMount = function () {
        var _a = this.parseKeys(this.props), otherKeys = _a.otherKeys, optionsDict = _a.optionsDict;
        this.setState({ otherKeys: otherKeys, optionsDict: optionsDict });
    };
    Dropdown.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.selected !== this.props.selected) {
            var _a = this.parseKeys(this.props), otherKeys = _a.otherKeys, optionsDict = _a.optionsDict;
            this.setState({ otherKeys: otherKeys, optionsDict: optionsDict });
        }
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, displayKey = _a.displayKey, selected = _a.selected, disabled = _a.disabled, monospace = _a.monospace;
        var _b = this.state, show = _b.show, otherKeys = _b.otherKeys, optionsDict = _b.optionsDict;
        return Object.keys(optionsDict).length ? (React.createElement(ClickOutside, { onClickOutside: this.onClickOutside },
            React.createElement(SDropdown, { monospace: !!monospace, disabled: disabled || !otherKeys.length },
                React.createElement(SRow, { selected: true, show: show, onClick: this.toggleDropdown }, optionsDict[selected][displayKey]),
                !!otherKeys.length && (React.createElement(SAbsolute, { show: show }, otherKeys.map(function (otherKey, idx) { return (React.createElement(SRow, { show: show, onClick: function () { return _this.onChange(otherKey); }, key: "".concat(otherKey, "-").concat(idx) }, optionsDict[otherKey][displayKey])); })))))) : null;
    };
    return Dropdown;
}(React.Component));
export default Dropdown;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Dropdown.js.map