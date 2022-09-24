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
import Blockie from "./Blockie";
import { ellipseAddress, getChainData } from "../helpers/utilities";
import { fonts, responsive, transitions } from "../styles";
var SHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: -1px;\n  margin-bottom: 1px;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  @media screen and (", ") {\n    font-size: ", ";\n  }\n"], ["\n  margin-top: -1px;\n  margin-bottom: 1px;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  @media screen and (", ") {\n    font-size: ", ";\n  }\n"])), responsive.sm.max, fonts.size.small);
var SActiveAccount = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-weight: 500;\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-weight: 500;\n"])));
var SActiveChain = styled(SActiveAccount)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: column;\n  text-align: left;\n  align-items: flex-start;\n  & p {\n    font-size: 0.8em;\n    margin: 0;\n    padding: 0;\n  }\n  & p:nth-child(2) {\n    font-weight: bold;\n  }\n"], ["\n  flex-direction: column;\n  text-align: left;\n  align-items: flex-start;\n  & p {\n    font-size: 0.8em;\n    margin: 0;\n    padding: 0;\n  }\n  & p:nth-child(2) {\n    font-weight: bold;\n  }\n"])));
var SAddress = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  transition: ", ";\n  font-weight: bold;\n  margin: ", ";\n"], ["\n  transition: ", ";\n  font-weight: bold;\n  margin: ", ";\n"])), transitions.base, function (_a) {
    var connected = _a.connected;
    return (connected ? "-2px auto 0.7em" : "0");
});
var SBlockie = styled(Blockie)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 10px;\n"], ["\n  margin-right: 10px;\n"])));
var SDisconnect = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  transition: ", ";\n  font-size: 12px;\n  font-family: monospace;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  opacity: 0.7;\n  cursor: pointer;\n\n  opacity: ", ";\n  visibility: ", ";\n  pointer-events: ", ";\n\n  &:hover {\n    transform: translateY(-1px);\n    opacity: 0.5;\n  }\n"], ["\n  transition: ", ";\n  font-size: 12px;\n  font-family: monospace;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  opacity: 0.7;\n  cursor: pointer;\n\n  opacity: ", ";\n  visibility: ", ";\n  pointer-events: ", ";\n\n  &:hover {\n    transform: translateY(-1px);\n    opacity: 0.5;\n  }\n"])), transitions.button, function (_a) {
    var connected = _a.connected;
    return (connected ? 1 : 0);
}, function (_a) {
    var connected = _a.connected;
    return (connected ? "visible" : "hidden");
}, function (_a) {
    var connected = _a.connected;
    return (connected ? "auto" : "none");
});
var Header = function (props) {
    var connected = props.connected, address = props.address, chainId = props.chainId, killSession = props.killSession;
    var activeChain = chainId ? getChainData(chainId).name : null;
    return (React.createElement(SHeader, __assign({}, props),
        activeChain && (React.createElement(SActiveChain, null,
            React.createElement("p", null, "Connected to"),
            React.createElement("p", null, activeChain))),
        address && (React.createElement(SActiveAccount, null,
            React.createElement(SBlockie, { address: address }),
            React.createElement(SAddress, { connected: connected }, ellipseAddress(address)),
            React.createElement(SDisconnect, { connected: connected, onClick: killSession }, "Disconnect")))));
};
export default Header;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Header.js.map