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
import { getAppConfig } from "./config";
export var baseColors = {
    white: "255, 255, 255",
    black: "0, 0, 0",
    dark: "12, 12, 13",
    grey: "169, 169, 188",
    darkGrey: "113, 119, 138",
    lightGrey: "212, 212, 212",
    blue: "101, 127, 230",
    lightBlue: "64, 153, 255",
    yellow: "250, 188, 45",
    orange: "246, 133, 27",
    green: "84, 209, 146",
    pink: "255, 51, 102",
    red: "214, 75, 71",
    purple: "110, 107, 233",
};
export var colors = __assign(__assign({}, baseColors), getAppConfig().colors);
export var fonts = {
    size: {
        tiny: "10px",
        small: "14px",
        medium: "16px",
        large: "18px",
        h1: "60px",
        h2: "50px",
        h3: "40px",
        h4: "32px",
        h5: "24px",
        h6: "20px",
    },
    weight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
    family: {
        OpenSans: "\"Open Sans\", sans-serif",
    },
};
export var transitions = {
    short: "all 0.1s ease-in-out",
    base: "all 0.2s ease-in-out",
    long: "all 0.3s ease-in-out",
    button: "all 0.15s ease-in-out",
};
export var shadows = {
    soft: "0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",
    medium: "0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(50, 50, 93, 0.02), 0 5px 10px 0 rgba(59, 59, 92, 0.08)",
    hard: "0px 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(50,50,93,0.02), -1px 2px 10px 0 rgba(59, 59, 92, 0.15)",
    big: "0 15px 35px 0 rgba(50, 50, 93, 0.06), 0 5px 15px 0 rgba(50, 50, 93, 0.15)",
    hover: "0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",
};
export var responsive = {
    xs: {
        min: "min-width: 467px",
        max: "max-width: 468px",
    },
    sm: {
        min: "min-width: 639px",
        max: "max-width: 640px",
    },
    md: {
        min: "min-width: 959px",
        max: "max-width: 960px",
    },
    lg: {
        min: "min-width: 1023px",
        max: "max-width: 1024px",
    },
    xl: {
        min: "min-width: 1399px",
        max: "max-width: 1400px",
    },
};
export var globalStyle = "\n  html, body, #root {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: ".concat(fonts.family.OpenSans, ";\n    font-style: normal;\n    font-stretch: normal;\n    font-weight: ").concat(fonts.weight.normal, ";\n    font-size: ").concat(fonts.size.medium, ";\n    background-color: rgb(").concat(colors.backgroundColor, ");\n    color: rgb(").concat(colors.white, ");\n    overflow-y:auto;\n    text-rendering: optimizeLegibility;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  \t-webkit-text-size-adjust: 100%;\n    -webkit-overflow-scrolling: touch;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;  \n  }\n\n  button {\n    border-style: none;\n    line-height: 1em;\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n\n  [tabindex] {\n    outline: none;\n    width: 100%;\n    height: 100%;\n  }\n\n  a, p, h1, h2, h3, h4, h5, h6 {\n  \ttext-decoration: none;\n  \tmargin: 0;\n    padding: 0;\n    margin: 0.7em 0;\n  }\n\n  h1 {\n    font-size: ").concat(fonts.size.h1, "\n  }\n  h2 {\n    font-size: ").concat(fonts.size.h2, "\n  }\n  h3 {\n    font-size: ").concat(fonts.size.h3, "\n  }\n  h4 {\n    font-size: ").concat(fonts.size.h4, "\n  }\n  h5 {\n    font-size: ").concat(fonts.size.h5, "\n  }\n  h6 {\n    font-size: ").concat(fonts.size.h6, "\n  }\n\n  a {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;  \n    text-decoration: none;\n    color: inherit;\n    outline: none;\n  }\n\n  b,\n  strong {\n    font-weight: inherit;\n    font-weight: bolder;\n  }\n\n  ul, li {\n  \tlist-style: none;\n  \tmargin: 0;\n  \tpadding: 0;\n  }\n\n  * {\n    box-sizing: border-box !important;\n  }\n\n\n  input {\n    -webkit-appearance: none;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n  audio,\n  canvas,\n  progress,\n  video {\n    display: inline-block;\n  }\n\n  input[type=\"color\"],\n  input[type=\"date\"],\n  input[type=\"datetime\"],\n  input[type=\"datetime-local\"],\n  input[type=\"email\"],\n  input[type=\"month\"],\n  input[type=\"number\"],\n  input[type=\"password\"],\n  input[type=\"search\"],\n  input[type=\"tel\"],\n  input[type=\"text\"],\n  input[type=\"time\"],\n  input[type=\"url\"],\n  input[type=\"week\"],\n  select:focus,\n  textarea {\n    font-size: 16px;\n  }\n");
//# sourceMappingURL=styles.js.map