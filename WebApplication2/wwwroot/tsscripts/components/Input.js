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
import { colors, shadows } from "../styles";
var SInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  background: rgb(", ");\n  border-style: none;\n  padding: 12px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  box-shadow: ", ";\n"], ["\n  border: none;\n  background: rgb(", ");\n  border-style: none;\n  padding: 12px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  box-shadow: ", ";\n"])), colors.white, shadows.hard);
var Input = function (props) { return React.createElement(SInput, __assign({}, props)); };
export default Input;
var templateObject_1;
//# sourceMappingURL=Input.js.map