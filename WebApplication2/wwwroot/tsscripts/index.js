var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { globalStyle } from "./styles";
var GlobalStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), globalStyle);
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(GlobalStyle, null),
    React.createElement(App, null)), document.getElementById("root"));
var templateObject_1;
//# sourceMappingURL=index.js.map