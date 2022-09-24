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
import * as blockies from "blockies-ts";
import styled from "styled-components";
var SBlockieWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  overflow: hidden;\n  & img {\n    width: 100%;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  overflow: hidden;\n  & img {\n    width: 100%;\n  }\n"])), function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
}, function (_a) {
    var size = _a.size;
    return "".concat(size, "px");
});
var Blockie = function (props) {
    var seed = props.address.toLowerCase() || "";
    var imgUrl = blockies
        .create({
        seed: seed,
    })
        .toDataURL();
    return (React.createElement(SBlockieWrapper, __assign({}, props, { size: props.size }),
        React.createElement("img", { src: imgUrl, alt: props.address })));
};
Blockie.defaultProps = {
    address: "0x0000000000000000000000000000000000000000",
    size: 30,
};
export default Blockie;
var templateObject_1;
//# sourceMappingURL=Blockie.js.map