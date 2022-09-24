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
import * as React from "react";
import styled from "styled-components";
import Column from "./Column";
import Button from "./Button";
var SRequestValues = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: monospace;\n  width: 100%;\n  font-size: 12px;\n  background-color: #eee;\n  padding: 8px;\n  word-break: break-word;\n  border-radius: 8px;\n  margin-bottom: 10px;\n"], ["\n  font-family: monospace;\n  width: 100%;\n  font-size: 12px;\n  background-color: #eee;\n  padding: 8px;\n  word-break: break-word;\n  border-radius: 8px;\n  margin-bottom: 10px;\n"])));
var SConnectedPeer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n  & > div {\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n  & > div {\n    margin-left: 10px;\n  }\n"])));
var SActions = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  margin-top: 20px;\n\n  display: flex;\n  justify-content: space-around;\n  & > * {\n    margin: 0 5px;\n  }\n"], ["\n  margin: 0;\n  margin-top: 20px;\n\n  display: flex;\n  justify-content: space-around;\n  & > * {\n    margin: 0 5px;\n  }\n"])));
var RequestDisplay = /** @class */ (function (_super) {
    __extends(RequestDisplay, _super);
    function RequestDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestDisplay.prototype.render = function () {
        var _a = this.props, payload = _a.payload, peerMeta = _a.peerMeta, approveRequest = _a.approveRequest, rejectRequest = _a.rejectRequest, renderPayload = _a.renderPayload;
        var params = renderPayload(payload);
        console.log("RENDER", "method", payload.method);
        console.log("RENDER", "params", payload.params);
        console.log("RENDER", "formatted", params);
        return (React.createElement(Column, null,
            React.createElement("h6", null, "Request From"),
            React.createElement(SConnectedPeer, null,
                React.createElement("img", { src: peerMeta.icons[0], alt: peerMeta.name }),
                React.createElement("div", null, peerMeta.name)),
            params.map(function (param) { return (React.createElement(React.Fragment, { key: param.label },
                React.createElement("h6", null, param.label),
                React.createElement(SRequestValues, null, param.value))); }),
            React.createElement(SActions, null,
                React.createElement(Button, { onClick: approveRequest }, "Approve"),
                React.createElement(Button, { onClick: rejectRequest }, "Reject"))));
    };
    return RequestDisplay;
}(React.Component));
export default RequestDisplay;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=RequestDisplay.js.map