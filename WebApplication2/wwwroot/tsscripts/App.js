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
import * as React from "react";
import styled from "styled-components";
import WalletConnect from "@walletconnect/client";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Header from "./components/Header";
import Column from "./components/Column";
import PeerMeta from "./components/PeerMeta";
import RequestDisplay from "./components/RequestDisplay";
import RequestButton from "./components/RequestButton";
import AccountDetails from "./components/AccountDetails";
import QRCodeScanner from "./components/QRCodeScanner";
import { DEFAULT_CHAIN_ID, DEFAULT_ACTIVE_INDEX } from "./constants/default";
import { getCachedSession } from "./helpers/utilities";
import { getAppControllers } from "./controllers";
import { getAppConfig } from "./config";
var SContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  min-height: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  min-height: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0;\n"])));
var SVersionNumber = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  font-size: 12px;\n  bottom: 6%;\n  right: 0;\n  opacity: 0.3;\n  transform: rotate(-90deg);\n"], ["\n  position: absolute;\n  font-size: 12px;\n  bottom: 6%;\n  right: 0;\n  opacity: 0.3;\n  transform: rotate(-90deg);\n"])));
var SContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  flex: 1;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 100%;\n  flex: 1;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var SLogo = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 0;\n  display: flex;\n  max-height: 100px;\n  & img {\n    width: 100%;\n  }\n"], ["\n  padding: 10px 0;\n  display: flex;\n  max-height: 100px;\n  & img {\n    width: 100%;\n  }\n"])));
var SActions = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0;\n  margin-top: 20px;\n\n  display: flex;\n  justify-content: space-around;\n  & > * {\n    margin: 0 5px;\n  }\n"], ["\n  margin: 0;\n  margin-top: 20px;\n\n  display: flex;\n  justify-content: space-around;\n  & > * {\n    margin: 0 5px;\n  }\n"])));
var SActionsColumn = styled(SActions)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-direction: row;\n  align-items: center;\n\n  margin: 24px 0 6px;\n\n  & > p {\n    font-weight: 600;\n  }\n"], ["\n  flex-direction: row;\n  align-items: center;\n\n  margin: 24px 0 6px;\n\n  & > p {\n    font-weight: 600;\n  }\n"])));
var SButton = styled(Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 50%;\n  height: 40px;\n"], ["\n  width: 50%;\n  height: 40px;\n"])));
var SInput = styled(Input)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 50%;\n  margin: 10px;\n  font-size: 14px;\n  height: 40px;\n"], ["\n  width: 50%;\n  margin: 10px;\n  font-size: 14px;\n  height: 40px;\n"])));
var SConnectedPeer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n  & > div {\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n  & > div {\n    margin-left: 10px;\n  }\n"])));
var SRequestButton = styled(RequestButton)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom: 10px;\n"], ["\n  margin-bottom: 10px;\n"])));
export var DEFAULT_ACCOUNTS = getAppControllers().wallet.getAccounts();
export var DEFAULT_ADDRESS = DEFAULT_ACCOUNTS[DEFAULT_ACTIVE_INDEX];
export var INITIAL_STATE = {
    loading: false,
    scanner: false,
    connector: null,
    uri: "",
    peerMeta: {
        description: "",
        url: "",
        icons: [],
        name: "",
        ssl: false,
    },
    connected: false,
    chainId: getAppConfig().chainId || DEFAULT_CHAIN_ID,
    accounts: DEFAULT_ACCOUNTS,
    address: DEFAULT_ADDRESS,
    activeIndex: DEFAULT_ACTIVE_INDEX,
    requests: [],
    results: [],
    payload: null,
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, activeIndex, chainId, session, connector, connected, accounts, peerMeta, address;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, activeIndex = _a.activeIndex, chainId = _a.chainId;
                        console.log('activeIndex = ' + activeIndex + ', chainId = ' + chainId);
                        console.log('init');
                        session = getCachedSession();
                        console.log('session = ' + session);
                        if (!!session) return [3 /*break*/, 2];
                        return [4 /*yield*/, getAppControllers().wallet.init(activeIndex, chainId)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        connector = new WalletConnect({ session: session });
                        connected = connector.connected, accounts = connector.accounts, peerMeta = connector.peerMeta;
                        address = accounts[0];
                        activeIndex = accounts.indexOf(address);
                        chainId = connector.chainId;
                        return [4 /*yield*/, getAppControllers().wallet.init(activeIndex, chainId)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.setState({
                                connected: connected,
                                connector: connector,
                                address: address,
                                activeIndex: activeIndex,
                                accounts: accounts,
                                chainId: chainId,
                                peerMeta: peerMeta,
                            })];
                    case 4:
                        _b.sent();
                        this.subscribeToEvents();
                        _b.label = 5;
                    case 5: return [4 /*yield*/, getAppConfig().events.init(this.state, this.bindedSetState)];
                    case 6:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.bindedSetState = function (newState) { return _this.setState(newState); };
        _this.initWalletConnect = function () { return __awaiter(_this, void 0, void 0, function () {
            var uri, connector, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.state.uri;
                        console.log('initWalletConnect' + uri);
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        connector = new WalletConnect({ uri: uri });
                        if (!!connector.connected) return [3 /*break*/, 3];
                        return [4 /*yield*/, connector.createSession()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.setState({
                            loading: false,
                            connector: connector,
                            uri: connector.uri,
                        })];
                    case 4:
                        _a.sent();
                        this.subscribeToEvents();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        this.setState({ loading: false });
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.approveSession = function () {
            console.log("ACTION", "approveSession");
            var _a = _this.state, connector = _a.connector, chainId = _a.chainId, address = _a.address;
            if (connector) {
                connector.approveSession({ chainId: chainId, accounts: [address] });
            }
            _this.setState({ connector: connector });
        };
        _this.rejectSession = function () {
            console.log("ACTION", "rejectSession");
            var connector = _this.state.connector;
            if (connector) {
                connector.rejectSession();
            }
            _this.setState({ connector: connector });
        };
        _this.killSession = function () {
            console.log("ACTION", "killSession");
            var connector = _this.state.connector;
            if (connector) {
                connector.killSession();
            }
            _this.resetApp();
        };
        _this.resetApp = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setState(__assign({}, INITIAL_STATE))];
                    case 1:
                        _a.sent();
                        this.init();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.subscribeToEvents = function () {
            console.log("ACTION", "subscribeToEvents");
            var connector = _this.state.connector;
            if (connector) {
                connector.on("session_request", function (error, payload) {
                    console.log("EVENT", "session_request");
                    if (error) {
                        throw error;
                    }
                    console.log("SESSION_REQUEST", payload.params);
                    var peerMeta = payload.params[0].peerMeta;
                    _this.setState({ peerMeta: peerMeta });
                });
                connector.on("session_update", function (error) {
                    console.log("EVENT", "session_update");
                    if (error) {
                        throw error;
                    }
                });
                connector.on("call_request", function (error, payload) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // tslint:disable-next-line
                                console.log("EVENT", "call_request", "method", payload.method);
                                console.log("EVENT", "call_request", "params", payload.params);
                                if (error) {
                                    throw error;
                                }
                                return [4 /*yield*/, getAppConfig().rpcEngine.router(payload, this.state, this.bindedSetState)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                connector.on("connect", function (error, payload) {
                    console.log("EVENT", "connect");
                    if (error) {
                        throw error;
                    }
                    _this.setState({ connected: true });
                });
                connector.on("disconnect", function (error, payload) {
                    console.log("EVENT", "disconnect");
                    if (error) {
                        throw error;
                    }
                    _this.resetApp();
                });
                if (connector.connected) {
                    var chainId = connector.chainId, accounts = connector.accounts;
                    var index = 0;
                    var address = accounts[index];
                    getAppControllers().wallet.update(index, chainId);
                    _this.setState({
                        connected: true,
                        address: address,
                        chainId: chainId,
                    });
                }
                _this.setState({ connector: connector });
            }
        };
        _this.updateSession = function (sessionParams) { return __awaiter(_this, void 0, void 0, function () {
            var _a, connector, chainId, accounts, activeIndex, newChainId, newActiveIndex, address;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, connector = _a.connector, chainId = _a.chainId, accounts = _a.accounts, activeIndex = _a.activeIndex;
                        newChainId = sessionParams.chainId || chainId;
                        newActiveIndex = sessionParams.activeIndex || activeIndex;
                        address = accounts[newActiveIndex];
                        if (connector) {
                            connector.updateSession({
                                chainId: newChainId,
                                accounts: [address],
                            });
                        }
                        return [4 /*yield*/, this.setState({
                                connector: connector,
                                address: address,
                                accounts: accounts,
                                activeIndex: newActiveIndex,
                                chainId: newChainId,
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, getAppControllers().wallet.update(newActiveIndex, newChainId)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, getAppConfig().events.update(this.state, this.bindedSetState)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.updateChain = function (chainId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateSession({ chainId: Number(chainId) })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.updateAddress = function (activeIndex) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateSession({ activeIndex: activeIndex })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.toggleScanner = function () {
            console.log("ACTION", "toggleScanner");
            _this.setState({ scanner: !_this.state.scanner });
        };
        _this.onQRCodeValidate = function (data) {
            var res = {
                error: null,
                result: null,
            };
            try {
                res.result = data;
            }
            catch (error) {
                res.error = error;
            }
            return res;
        };
        _this.onQRCodeScan = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = typeof data === "string" ? data : "";
                        if (!uri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setState({ uri: uri })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.initWalletConnect()];
                    case 2:
                        _a.sent();
                        this.toggleScanner();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.onURIPaste = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var data, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = e.target.value;
                        uri = typeof data === "string" ? data : "";
                        if (!uri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setState({ uri: uri })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.initWalletConnect()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.onQRCodeError = function (error) {
            throw error;
        };
        _this.onQRCodeClose = function () { return _this.toggleScanner(); };
        _this.openRequest = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var payload, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        payload = Object.assign({}, request);
                        params = payload.params[0];
                        if (!(request.method === "eth_sendTransaction")) return [3 /*break*/, 2];
                        _a = payload.params;
                        _b = 0;
                        return [4 /*yield*/, getAppControllers().wallet.populateTransaction(params)];
                    case 1:
                        _a[_b] = _c.sent();
                        _c.label = 2;
                    case 2:
                        this.setState({
                            payload: payload,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.closeRequest = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, requests, payload, filteredRequests;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, requests = _a.requests, payload = _a.payload;
                        filteredRequests = requests.filter(function (request) { return request.id !== payload.id; });
                        return [4 /*yield*/, this.setState({
                                requests: filteredRequests,
                                payload: null,
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.approveRequest = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, connector, payload, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, connector = _a.connector, payload = _a.payload;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getAppConfig().rpcEngine.signer(payload, this.state, this.bindedSetState)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.error(error_2);
                        if (connector) {
                            connector.rejectRequest({
                                id: payload.id,
                                error: { message: "Failed or Rejected Request" },
                            });
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        this.closeRequest();
                        return [4 /*yield*/, this.setState({ connector: connector })];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.rejectRequest = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, connector, payload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, connector = _a.connector, payload = _a.payload;
                        if (connector) {
                            connector.rejectRequest({
                                id: payload.id,
                                error: { message: "Failed or Rejected Request" },
                            });
                        }
                        return [4 /*yield*/, this.closeRequest()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.setState({ connector: connector })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = __assign({}, INITIAL_STATE);
        return _this;
    }
    App.prototype.componentDidMount = function () {
        console.log('componentDidMount');
        this.init();
    };
    App.prototype.render = function () {
        var _this = this;
        var _a = this.state, peerMeta = _a.peerMeta, scanner = _a.scanner, connected = _a.connected, activeIndex = _a.activeIndex, accounts = _a.accounts, address = _a.address, chainId = _a.chainId, requests = _a.requests, payload = _a.payload;
        return (React.createElement(React.Fragment, null,
            React.createElement(SContainer, null,
                React.createElement(Header, { connected: connected, address: address, chainId: chainId, killSession: this.killSession }),
                React.createElement(SContent, null,
                    React.createElement(Card, { maxWidth: 400 },
                        React.createElement(SLogo, null,
                            React.createElement("img", { src: getAppConfig().logo, alt: getAppConfig().name })),
                        !connected ? (peerMeta && peerMeta.name ? (React.createElement(Column, null,
                            React.createElement(PeerMeta, { peerMeta: peerMeta }),
                            React.createElement(SActions, null,
                                React.createElement(Button, { onClick: this.approveSession }, "Approve"),
                                React.createElement(Button, { onClick: this.rejectSession }, "Reject")))) : (React.createElement(Column, null,
                            React.createElement(AccountDetails, { chains: getAppConfig().chains, address: address, activeIndex: activeIndex, chainId: chainId, accounts: accounts, updateAddress: this.updateAddress, updateChain: this.updateChain }),
                            React.createElement(SActionsColumn, null,
                                React.createElement(SButton, { onClick: this.toggleScanner }, "Scan"),
                                getAppConfig().styleOpts.showPasteUri && (React.createElement(React.Fragment, null,
                                    React.createElement("p", null, "OR"),
                                    React.createElement(SInput, { onChange: this.onURIPaste, placeholder: "Paste wc: uri" }))))))) : !payload ? (React.createElement(Column, null,
                            React.createElement(AccountDetails, { chains: getAppConfig().chains, address: address, activeIndex: activeIndex, chainId: chainId, accounts: accounts, updateAddress: this.updateAddress, updateChain: this.updateChain }),
                            peerMeta && peerMeta.name && (React.createElement(React.Fragment, null,
                                React.createElement("h6", null, "Connected to"),
                                React.createElement(SConnectedPeer, null,
                                    React.createElement("img", { src: peerMeta.icons[0], alt: peerMeta.name }),
                                    React.createElement("div", null, peerMeta.name)))),
                            React.createElement("h6", null, "Pending Call Requests"),
                            requests.length ? (requests.map(function (request) { return (React.createElement(SRequestButton, { key: request.id, onClick: function () { return _this.openRequest(request); } },
                                React.createElement("div", null, request.method))); })) : (React.createElement("div", null,
                                React.createElement("div", null, "No pending requests"))))) : (React.createElement(RequestDisplay, { payload: payload, peerMeta: peerMeta, renderPayload: function (payload) { return getAppConfig().rpcEngine.render(payload); }, approveRequest: this.approveRequest, rejectRequest: this.rejectRequest })))),
                scanner && (React.createElement(QRCodeScanner, { onValidate: this.onQRCodeValidate, onScan: this.onQRCodeScan, onError: this.onQRCodeError, onClose: this.onQRCodeClose }))),
            getAppConfig().styleOpts.showVersion && (React.createElement(SVersionNumber, null, "v".concat(process.env.REACT_APP_VERSION),
                " "))));
    };
    return App;
}(React.Component));
export default App;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=App.js.map