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
import { colors } from "../styles";
var SCard = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgb(", ");\n  color: rgb(", ");\n  border-radius: 6px;\n  padding: 20px;\n"], ["\n  width: 100%;\n  max-width: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgb(", ");\n  color: rgb(", ");\n  border-radius: 6px;\n  padding: 20px;\n"])), function (_a) {
    var maxWidth = _a.maxWidth;
    return "".concat(maxWidth, "px");
}, colors.white, colors.defaultColor);
var Card = function (props) {
    return (React.createElement(SCard, __assign({}, props, { maxWidth: props.maxWidth }), props.children));
};
Card.defaultProps = {
    maxWidth: 600,
};
export default Card;
var templateObject_1;
//# sourceMappingURL=Card.js.map