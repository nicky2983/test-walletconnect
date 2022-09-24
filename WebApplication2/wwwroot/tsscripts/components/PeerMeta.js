var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
var SIcon = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100px;\n  margin: 0 auto;\n"], ["\n  width: 100px;\n  margin: 0 auto;\n"])));
var SCenter = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
var SName = styled(SCenter)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"])));
var PeerMeta = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement(SIcon, { src: props.peerMeta.icons[0], alt: props.peerMeta.name }),
    React.createElement(SName, null, props.peerMeta.name),
    React.createElement(SCenter, null, props.peerMeta.description),
    React.createElement(SCenter, null, props.peerMeta.url))); };
export default PeerMeta;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=PeerMeta.js.map