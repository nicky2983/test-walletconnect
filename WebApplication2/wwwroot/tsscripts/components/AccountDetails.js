var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import { ellipseAddress, getViewportDimensions } from "../helpers/utilities";
import { responsive } from "../styles";
import Blockie from "./Blockie";
var SSection = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var SBlockie = styled(Blockie)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 5px;\n  @media screen and (", ") {\n    margin-right: 1vw;\n  }\n"], ["\n  margin-right: 5px;\n  @media screen and (", ") {\n    margin-right: 1vw;\n  }\n"])), responsive.xs.max);
var SAddressDropdownWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var AccountDetails = function (props) {
    var chains = props.chains, chainId = props.chainId, address = props.address, activeIndex = props.activeIndex, accounts = props.accounts, updateAddress = props.updateAddress, updateChain = props.updateChain;
    var windowWidth = getViewportDimensions().x;
    var maxWidth = 468;
    var maxChar = 12;
    var ellipseLength = windowWidth > maxWidth ? maxChar : Math.floor(windowWidth * (maxChar / maxWidth));
    var accountsMap = accounts.map(function (addr, index) { return ({
        index: index,
        display_address: ellipseAddress(addr, ellipseLength),
    }); });
    return (React.createElement(React.Fragment, null,
        React.createElement(SSection, null,
            React.createElement("h6", null, "Account"),
            React.createElement(SAddressDropdownWrapper, null,
                React.createElement(SBlockie, { size: 40, address: address }),
                React.createElement(Dropdown, { monospace: true, selected: activeIndex, options: accountsMap, displayKey: "display_address", targetKey: "index", onChange: updateAddress }))),
        React.createElement(SSection, null,
            React.createElement("h6", null, "Network"),
            React.createElement(Dropdown, { selected: chainId, options: chains, displayKey: "name", targetKey: "chain_id", onChange: updateChain }))));
};
export default AccountDetails;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=AccountDetails.js.map