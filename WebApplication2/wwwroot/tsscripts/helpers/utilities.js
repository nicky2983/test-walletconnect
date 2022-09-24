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
import { convertHexToUtf8 } from "@walletconnect/utils";
import { SUPPORTED_CHAINS } from "../constants";
export function capitalize(string) {
    return string
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(" ");
}
export function ellipseText(text, maxLength) {
    if (text === void 0) { text = ""; }
    if (maxLength === void 0) { maxLength = 9999; }
    if (text.length <= maxLength) {
        return text;
    }
    var _maxLength = maxLength - 3;
    var ellipse = false;
    var currentLength = 0;
    var result = text
        .split(" ")
        .filter(function (word) {
        currentLength += word.length;
        if (ellipse || currentLength >= _maxLength) {
            ellipse = true;
            return false;
        }
        else {
            return true;
        }
    })
        .join(" ") + "...";
    return result;
}
export function ellipseAddress(address, width) {
    if (address === void 0) { address = ""; }
    if (width === void 0) { width = 10; }
    return "".concat(address.slice(0, width), "...").concat(address.slice(-width));
}
export function padLeft(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
export function sanitizeHex(hex) {
    hex = hex.substring(0, 2) === "0x" ? hex.substring(2) : hex;
    if (hex === "") {
        return "";
    }
    hex = hex.length % 2 !== 0 ? "0" + hex : hex;
    return "0x" + hex;
}
export function removeHexPrefix(hex) {
    return hex.toLowerCase().replace("0x", "");
}
export function getDataString(func, arrVals) {
    var val = "";
    for (var i = 0; i < arrVals.length; i++) {
        val += padLeft(arrVals[i], 64);
    }
    var data = func + val;
    return data;
}
export function isMobile() {
    var mobile = false;
    function hasTouchEvent() {
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch (e) {
            return false;
        }
    }
    function hasMobileUserAgent() {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.substr(0, 4))) {
            return true;
        }
        else if (hasTouchEvent()) {
            return true;
        }
        return false;
    }
    mobile = hasMobileUserAgent();
    return mobile;
}
export function payloadId() {
    var datePart = new Date().getTime() * Math.pow(10, 3);
    var extraPart = Math.floor(Math.random() * Math.pow(10, 3));
    var id = datePart + extraPart;
    return id;
}
export function getChainData(chainId) {
    var chainData = SUPPORTED_CHAINS.filter(function (chain) { return chain.chain_id === chainId; })[0];
    if (!chainData) {
        throw new Error("ChainId missing or not supported");
    }
    var API_KEY = process.env.REACT_APP_INFURA_PROJECT_ID;
    if (!API_KEY) {
        throw new Error("Environment variable REACT_APP_INFURA_PROJECT_ID is not set");
    }
    if (chainData.rpc_url.includes("infura.io") &&
        chainData.rpc_url.includes("%API_KEY%") &&
        API_KEY) {
        var rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);
        return __assign(__assign({}, chainData), { rpc_url: rpcUrl });
    }
    return chainData;
}
export function getViewportDimensions() {
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName("body")[0];
    var x = w.innerWidth || e.clientWidth || g.clientWidth;
    var y = w.innerHeight || e.clientHeight || g.clientHeight;
    return { x: x, y: y };
}
export function convertHexToUtf8IfPossible(hex) {
    try {
        return convertHexToUtf8(hex);
    }
    catch (e) {
        return hex;
    }
}
export function prettyPrint(obj) {
    return JSON.stringify(obj, null, 2);
}
export function verifyPayload(payload) {
    var params = payload.params, id = payload.id, method = payload.method;
    if (!params || typeof params !== "object") {
        throw new Error("WalletConnect Error - invalid payload params. Payload: ".concat(prettyPrint(payload)));
    }
    if (!id || typeof id !== "number") {
        throw new Error("WalletConnect Error - invalid payload id. Payload: ".concat(prettyPrint(payload)));
    }
    if (!method || typeof method !== "string") {
        throw new Error("WalletConnect Error - invalid payload method. Payload: ".concat(prettyPrint(payload)));
    }
    return;
}
export function verifyFields(params, keys) {
    if (keys.length <= 0 || keys.filter(function (k) { return typeof k !== "string"; }).length !== 0) {
        throw new Error("[verifyFields] Must provide an array of fields to check");
    }
    if (typeof params !== "object") {
        throw new Error("[verifyFields] Must provide a params object");
    }
    var naStr = keys.filter(function (k) { return !params[k]; });
    if (naStr.length !== 0) {
        throw new Error("[verifyFields] Params missing needed keys. Params: ".concat(prettyPrint(params), ", keys: ").concat(prettyPrint(keys)));
    }
    return;
}
export function getCachedSession() {
    var local = localStorage ? localStorage.getItem("walletconnect") : null;
    var session = null;
    if (local) {
        try {
            session = JSON.parse(local);
        }
        catch (error) {
            throw error;
        }
    }
    return session;
}
//# sourceMappingURL=utilities.js.map