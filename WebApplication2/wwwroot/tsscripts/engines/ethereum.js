var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { signingMethods, convertHexToNumber } from "@walletconnect/utils";
import { apiGetCustomRequest } from "../helpers/api";
import { convertHexToUtf8IfPossible } from "../helpers/utilities";
import { getAppControllers } from "../controllers";
export function filterEthereumRequests(payload) {
    return (payload.method.startsWith("eth_") ||
        payload.method.startsWith("net_") ||
        payload.method.startsWith("shh_") ||
        payload.method.startsWith("personal_") ||
        payload.method.startsWith("wallet_"));
}
export function routeEthereumRequests(payload, state, setState) {
    return __awaiter(this, void 0, void 0, function () {
        var chainId, connector, result, error_1, requests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!state.connector) {
                        return [2 /*return*/];
                    }
                    chainId = state.chainId, connector = state.connector;
                    if (!!signingMethods.includes(payload.method)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, apiGetCustomRequest(chainId, payload)];
                case 2:
                    result = _a.sent();
                    connector.approveRequest({
                        id: payload.id,
                        result: result,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, connector.rejectRequest({
                            id: payload.id,
                            error: { message: "JSON RPC method not supported" },
                        })];
                case 4: return [3 /*break*/, 7];
                case 5:
                    requests = state.requests;
                    requests.push(payload);
                    return [4 /*yield*/, setState({ requests: requests })];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
export function renderEthereumRequests(payload) {
    var params = [{ label: "Method", value: payload.method }];
    switch (payload.method) {
        case "eth_sendTransaction":
        case "eth_signTransaction":
            params = __spreadArray(__spreadArray([], params, true), [
                { label: "From", value: payload.params[0].from },
                { label: "To", value: payload.params[0].to },
                {
                    label: "Gas Limit",
                    value: payload.params[0].gas
                        ? convertHexToNumber(payload.params[0].gas)
                        : payload.params[0].gasLimit
                            ? convertHexToNumber(payload.params[0].gasLimit)
                            : "",
                },
                {
                    label: "Gas Price",
                    value: convertHexToNumber(payload.params[0].gasPrice),
                },
                {
                    label: "Nonce",
                    value: convertHexToNumber(payload.params[0].nonce),
                },
                {
                    label: "Value",
                    value: payload.params[0].value ? convertHexToNumber(payload.params[0].value) : "",
                },
                { label: "Data", value: payload.params[0].data },
            ], false);
            break;
        case "eth_sign":
            params = __spreadArray(__spreadArray([], params, true), [
                { label: "Address", value: payload.params[0] },
                { label: "Message", value: payload.params[1] },
            ], false);
            break;
        case "personal_sign":
            params = __spreadArray(__spreadArray([], params, true), [
                { label: "Address", value: payload.params[1] },
                {
                    label: "Message",
                    value: convertHexToUtf8IfPossible(payload.params[0]),
                },
            ], false);
            break;
        default:
            params = __spreadArray(__spreadArray([], params, true), [
                {
                    label: "params",
                    value: JSON.stringify(payload.params, null, "\t"),
                },
            ], false);
            break;
    }
    return params;
}
export function signEthereumRequests(payload, state, setState) {
    return __awaiter(this, void 0, void 0, function () {
        var connector, address, activeIndex, chainId, errorMsg, result, transaction, dataToSign, addressRequested, _a, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    connector = state.connector, address = state.address, activeIndex = state.activeIndex, chainId = state.chainId;
                    errorMsg = "";
                    result = null;
                    if (!connector) return [3 /*break*/, 25];
                    if (!!getAppControllers().wallet.isActive()) return [3 /*break*/, 2];
                    return [4 /*yield*/, getAppControllers().wallet.init(activeIndex, chainId)];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    transaction = null;
                    dataToSign = null;
                    addressRequested = null;
                    _a = payload.method;
                    switch (_a) {
                        case "eth_sendTransaction": return [3 /*break*/, 3];
                        case "eth_signTransaction": return [3 /*break*/, 7];
                        case "eth_sign": return [3 /*break*/, 11];
                        case "personal_sign": return [3 /*break*/, 15];
                        case "eth_signTypedData": return [3 /*break*/, 19];
                    }
                    return [3 /*break*/, 23];
                case 3:
                    transaction = payload.params[0];
                    addressRequested = transaction.from;
                    if (!(address.toLowerCase() === addressRequested.toLowerCase())) return [3 /*break*/, 5];
                    return [4 /*yield*/, getAppControllers().wallet.sendTransaction(transaction)];
                case 4:
                    result = _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    errorMsg = "Address requested does not match active account";
                    _b.label = 6;
                case 6: return [3 /*break*/, 24];
                case 7:
                    transaction = payload.params[0];
                    addressRequested = transaction.from;
                    if (!(address.toLowerCase() === addressRequested.toLowerCase())) return [3 /*break*/, 9];
                    return [4 /*yield*/, getAppControllers().wallet.signTransaction(transaction)];
                case 8:
                    result = _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    errorMsg = "Address requested does not match active account";
                    _b.label = 10;
                case 10: return [3 /*break*/, 24];
                case 11:
                    dataToSign = payload.params[1];
                    addressRequested = payload.params[0];
                    if (!(address.toLowerCase() === addressRequested.toLowerCase())) return [3 /*break*/, 13];
                    return [4 /*yield*/, getAppControllers().wallet.signMessage(dataToSign)];
                case 12:
                    result = _b.sent();
                    return [3 /*break*/, 14];
                case 13:
                    errorMsg = "Address requested does not match active account";
                    _b.label = 14;
                case 14: return [3 /*break*/, 24];
                case 15:
                    dataToSign = payload.params[0];
                    addressRequested = payload.params[1];
                    if (!(address.toLowerCase() === addressRequested.toLowerCase())) return [3 /*break*/, 17];
                    return [4 /*yield*/, getAppControllers().wallet.signPersonalMessage(dataToSign)];
                case 16:
                    result = _b.sent();
                    return [3 /*break*/, 18];
                case 17:
                    errorMsg = "Address requested does not match active account";
                    _b.label = 18;
                case 18: return [3 /*break*/, 24];
                case 19:
                    dataToSign = payload.params[1];
                    addressRequested = payload.params[0];
                    if (!(address.toLowerCase() === addressRequested.toLowerCase())) return [3 /*break*/, 21];
                    return [4 /*yield*/, getAppControllers().wallet.signTypedData(dataToSign)];
                case 20:
                    result = _b.sent();
                    return [3 /*break*/, 22];
                case 21:
                    errorMsg = "Address requested does not match active account";
                    _b.label = 22;
                case 22: return [3 /*break*/, 24];
                case 23: return [3 /*break*/, 24];
                case 24:
                    if (result) {
                        connector.approveRequest({
                            id: payload.id,
                            result: result,
                        });
                    }
                    else {
                        message = "JSON RPC method not supported";
                        if (errorMsg) {
                            message = errorMsg;
                        }
                        if (!getAppControllers().wallet.isActive()) {
                            message = "No Active Account";
                        }
                        connector.rejectRequest({
                            id: payload.id,
                            error: { message: message },
                        });
                    }
                    _b.label = 25;
                case 25: return [2 /*return*/];
            }
        });
    });
}
var ethereum = {
    filter: filterEthereumRequests,
    router: routeEthereumRequests,
    render: renderEthereumRequests,
    signer: signEthereumRequests,
};
export default ethereum;
//# sourceMappingURL=ethereum.js.map