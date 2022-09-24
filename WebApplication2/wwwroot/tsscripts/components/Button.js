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
import styled from "styled-components";
import Loader from "./Loader";
import { colors, fonts, shadows, transitions } from "../styles";
var SIcon = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  margin: 0 8px;\n  top: calc((100% - 15px) / 2);\n"], ["\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  margin: 0 8px;\n  top: calc((100% - 15px) / 2);\n"])));
var SHoverLayer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transition: ", ";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(", ", 0.1);\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n"], ["\n  transition: ", ";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(", ", 0.1);\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n"])), transitions.button, colors.white);
var SButton = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transition: ", ";\n  position: relative;\n  border: none;\n  border-style: none;\n  box-sizing: border-box;\n  background-color: ", ";\n  border: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  border-radius: 8px;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  cursor: ", ";\n  will-change: transform;\n\n  &:disabled {\n    opacity: 0.6;\n    box-shadow: ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      transform: ", ";\n      box-shadow: ", ";\n    }\n\n    &:hover ", " {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n\n  &:active {\n    transform: ", ";\n    box-shadow: ", ";\n    color: ", ";\n\n    & ", " {\n      opacity: 0.8;\n    }\n  }\n\n  & ", " {\n    right: ", ";\n    left: ", ";\n    display: ", ";\n    mask: ", ";\n    background-color: ", ";\n    transition: 0.15s ease;\n  }\n"], ["\n  transition: ", ";\n  position: relative;\n  border: none;\n  border-style: none;\n  box-sizing: border-box;\n  background-color: ", ";\n  border: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  border-radius: 8px;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  cursor: ", ";\n  will-change: transform;\n\n  &:disabled {\n    opacity: 0.6;\n    box-shadow: ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      transform: ", ";\n      box-shadow: ", ";\n    }\n\n    &:hover ", " {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n\n  &:active {\n    transform: ", ";\n    box-shadow: ", ";\n    color: ", ";\n\n    & ", " {\n      opacity: 0.8;\n    }\n  }\n\n  & ", " {\n    right: ", ";\n    left: ", ";\n    display: ", ";\n    mask: ", ";\n    background-color: ", ";\n    transition: 0.15s ease;\n  }\n"])), transitions.button, function (_a) {
    var outline = _a.outline, color = _a.color;
    return (outline ? "transparent" : "rgb(".concat(colors[color], ")"));
}, function (_a) {
    var outline = _a.outline, color = _a.color;
    return (outline ? "1px solid rgb(".concat(colors[color], ")") : "none");
}, function (_a) {
    var outline = _a.outline, color = _a.color;
    return (outline ? "rgb(".concat(colors[color], ")") : "rgb(".concat(colors.white, ")"));
}, function (_a) {
    var outline = _a.outline;
    return (outline ? "none" : "".concat(shadows.soft));
}, fonts.size.medium, fonts.weight.semibold, function (_a) {
    var icon = _a.icon, left = _a.left;
    return icon ? (left ? "7px 12px 8px 28px" : "7px 28px 8px 12px") : "8px 12px";
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "auto" : "pointer");
}, function (_a) {
    var outline = _a.outline;
    return (outline ? "none" : "".concat(shadows.soft));
}, function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? "translateY(-1px)" : "none");
}, function (_a) {
    var disabled = _a.disabled, outline = _a.outline;
    return !disabled ? (outline ? "none" : "".concat(shadows.hover)) : "".concat(shadows.soft);
}, SHoverLayer, function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? "translateY(1px)" : "none");
}, function (_a) {
    var outline = _a.outline;
    return (outline ? "none" : "".concat(shadows.soft));
}, function (_a) {
    var outline = _a.outline, color = _a.color;
    return outline ? "rgb(".concat(colors[color], ")") : "rgba(".concat(colors.white, ", 0.24)");
}, SIcon, SIcon, function (_a) {
    var left = _a.left;
    return (left ? "auto" : "0");
}, function (_a) {
    var left = _a.left;
    return (left ? "0" : "auto");
}, function (_a) {
    var icon = _a.icon;
    return (icon ? "block" : "none");
}, function (_a) {
    var icon = _a.icon;
    return (icon ? "url(".concat(icon, ") center no-repeat") : "none");
}, function (_a) {
    var outline = _a.outline, color = _a.color;
    return outline ? "rgb(".concat(colors[color], ")") : "rgb(".concat(colors.white, ")");
});
var Button = function (props) { return (React.createElement(SButton, __assign({}, props, { type: props.type, outline: props.outline, color: props.color, disabled: props.disabled, icon: props.icon, left: props.left }),
    React.createElement(SHoverLayer, null),
    React.createElement(SIcon, null),
    props.fetching ? React.createElement(Loader, { size: 20, color: "white", background: props.color }) : props.children)); };
Button.defaultProps = {
    fetching: false,
    outline: false,
    type: "button",
    color: "defaultColor",
    disabled: false,
    icon: null,
    left: false,
};
export default Button;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Button.js.map