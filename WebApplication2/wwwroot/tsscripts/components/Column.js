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
var SColumn = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var Column = function (props) { return React.createElement(SColumn, __assign({}, props), props.children); };
export default Column;
var templateObject_1;
//# sourceMappingURL=Column.js.map