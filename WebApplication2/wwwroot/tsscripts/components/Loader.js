var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import * as React from "react";
import styled, { keyframes } from "styled-components";
import { fonts, colors } from "../styles";
var load = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var SLoader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  font-size: ", ";\n  margin: 0 auto;\n  text-indent: -9999em;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  background: ", ";\n  background: ", ";\n  animation: ", " 1s infinite linear;\n  transform: translateZ(0);\n\n  &:before {\n    width: 50%;\n    height: 50%;\n    background: ", ";\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: \"\";\n  }\n\n  &:after {\n    background: ", ";\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: \"\";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n"], ["\n  position: relative;\n  font-size: ", ";\n  margin: 0 auto;\n  text-indent: -9999em;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  background: ", ";\n  background: ", ";\n  animation: ", " 1s infinite linear;\n  transform: translateZ(0);\n\n  &:before {\n    width: 50%;\n    height: 50%;\n    background: ", ";\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: \"\";\n  }\n\n  &:after {\n    background: ", ";\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: \"\";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n"])), fonts.size.tiny, function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, function (_a) {
    var color = _a.color;
    return "rgb(".concat(colors[color], ")");
}, function (_a) {
    var background = _a.background, color = _a.color;
    return "linear-gradient(to right, rgb(".concat(colors[color], ") 10%, rgba(").concat(colors[background], ", 0) 42%)");
}, load, function (_a) {
    var color = _a.color;
    return "rgb(".concat(colors[color], ")");
}, function (_a) {
    var background = _a.background;
    return "rgb(".concat(colors[background], ")");
});
var Loader = function (props) { return (React.createElement(SLoader, __assign({}, props, { size: props.size, color: props.color, background: props.background }))); };
Loader.defaultProps = {
    size: 50,
    color: "defaultColor",
    background: "white",
};
export default Loader;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Loader.js.map