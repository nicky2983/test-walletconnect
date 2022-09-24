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
import * as ethers from "ethers";
import { signTypedData_v4 } from "eth-sig-util";
import { getChainData } from "../helpers/utilities";
import { setLocal, getLocal } from "../helpers/local";
import { ENTROPY_KEY, MNEMONIC_KEY, DEFAULT_ACTIVE_INDEX, DEFAULT_CHAIN_ID, } from "../constants/default";
import { getAppConfig } from "../config";
var WalletController = /** @class */ (function () {
    function WalletController() {
        this.activeIndex = DEFAULT_ACTIVE_INDEX;
        this.activeChainId = DEFAULT_CHAIN_ID;
        this.path = this.getPath();
        this.entropy = this.getEntropy();
        this.mnemonic = this.getMnemonic();
        this.wallet = this.init();
    }
    Object.defineProperty(WalletController.prototype, "provider", {
        get: function () {
            return this.wallet.provider;
        },
        enumerable: false,
        configurable: true
    });
    WalletController.prototype.isActive = function () {
        if (!this.wallet) {
            return this.wallet;
        }
        return null;
    };
    WalletController.prototype.getIndex = function () {
        return this.activeIndex;
    };
    WalletController.prototype.getWallet = function (index, chainId) {
        if (!this.wallet || this.activeIndex === index || this.activeChainId === chainId) {
            return this.init(index, chainId);
        }
        return this.wallet;
    };
    WalletController.prototype.getAccounts = function (count) {
        if (count === void 0) { count = getAppConfig().numberOfAccounts; }
        var accounts = [];
        var wallet = null;
        for (var i = 0; i < count; i++) {
            wallet = this.generateWallet(i);
            accounts.push(wallet.address);
        }
        return accounts;
    };
    WalletController.prototype.getData = function (key) {
        var value = getLocal(key);
        if (!value) {
            switch (key) {
                case ENTROPY_KEY:
                    value = this.generateEntropy();
                    break;
                case MNEMONIC_KEY:
                    value = this.generateMnemonic();
                    break;
                default:
                    throw new Error("Unknown data key: ".concat(key));
            }
            setLocal(key, value);
        }
        return value;
    };
    WalletController.prototype.getPath = function (index) {
        if (index === void 0) { index = this.activeIndex; }
        this.path = "".concat(getAppConfig().derivationPath, "/").concat(index);
        return this.path;
    };
    WalletController.prototype.generateEntropy = function () {
        this.entropy = ethers.utils.hexlify(ethers.utils.randomBytes(16));
        return this.entropy;
    };
    WalletController.prototype.generateMnemonic = function () {
        this.mnemonic = ethers.utils.entropyToMnemonic(this.getEntropy());
        return this.mnemonic;
    };
    WalletController.prototype.generateWallet = function (index) {
        this.wallet = ethers.Wallet.fromMnemonic(this.getMnemonic(), this.getPath(index));
        return this.wallet;
    };
    WalletController.prototype.getEntropy = function () {
        return this.getData(ENTROPY_KEY);
    };
    WalletController.prototype.getMnemonic = function () {
        return this.getData(MNEMONIC_KEY);
    };
    WalletController.prototype.init = function (index, chainId) {
        if (index === void 0) { index = DEFAULT_ACTIVE_INDEX; }
        if (chainId === void 0) { chainId = DEFAULT_CHAIN_ID; }
        return this.update(index, chainId);
    };
    WalletController.prototype.update = function (index, chainId) {
        var firstUpdate = typeof this.wallet === "undefined";
        this.activeIndex = index;
        this.activeChainId = chainId;
        var rpcUrl = getChainData(chainId).rpc_url;
        var wallet = this.generateWallet(index);
        var provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        this.wallet = wallet.connect(provider);
        if (!firstUpdate) {
            // update another controller if necessary here
        }
        return this.wallet;
    };
    WalletController.prototype.populateTransaction = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var tx, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tx = Object.assign({}, transaction);
                        if (!this.wallet) return [3 /*break*/, 4];
                        if (tx.gas) {
                            tx.gasLimit = tx.gas;
                            delete tx.gas;
                        }
                        if (tx.from) {
                            tx.from = ethers.utils.getAddress(tx.from);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.wallet.populateTransaction(tx)];
                    case 2:
                        tx = _a.sent();
                        tx.gasLimit = ethers.BigNumber.from(tx.gasLimit).toHexString();
                        tx.gasPrice = ethers.BigNumber.from(tx.gasPrice).toHexString();
                        tx.nonce = ethers.BigNumber.from(tx.nonce).toHexString();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error("Error populating transaction", tx, err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, tx];
                }
            });
        });
    };
    WalletController.prototype.sendTransaction = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.wallet) return [3 /*break*/, 2];
                        if (transaction.from &&
                            transaction.from.toLowerCase() !== this.wallet.address.toLowerCase()) {
                            console.error("Transaction request From doesn't match active account");
                        }
                        if (transaction.from) {
                            delete transaction.from;
                        }
                        // ethers.js expects gasLimit instead
                        if ("gas" in transaction) {
                            transaction.gasLimit = transaction.gas;
                            delete transaction.gas;
                        }
                        return [4 /*yield*/, this.wallet.sendTransaction(transaction)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.hash];
                    case 2:
                        console.error("No Active Account");
                        _a.label = 3;
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    WalletController.prototype.signTransaction = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.wallet) return [3 /*break*/, 2];
                        if (data && data.from) {
                            delete data.from;
                        }
                        data.gasLimit = data.gas;
                        delete data.gas;
                        return [4 /*yield*/, this.wallet.signTransaction(data)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        console.error("No Active Account");
                        _a.label = 3;
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    WalletController.prototype.signMessage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var signingKey, sigParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.wallet) return [3 /*break*/, 3];
                        signingKey = new ethers.utils.SigningKey(this.wallet.privateKey);
                        return [4 /*yield*/, signingKey.signDigest(ethers.utils.arrayify(data))];
                    case 1:
                        sigParams = _a.sent();
                        return [4 /*yield*/, ethers.utils.joinSignature(sigParams)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        console.error("No Active Account");
                        _a.label = 4;
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    WalletController.prototype.signPersonalMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.wallet) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.wallet.signMessage(ethers.utils.isHexString(message) ? ethers.utils.arrayify(message) : message)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        console.error("No Active Account");
                        _a.label = 3;
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    WalletController.prototype.signTypedData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                if (this.wallet) {
                    result = signTypedData_v4(Buffer.from(this.wallet.privateKey.slice(2), "hex"), {
                        data: JSON.parse(data),
                    });
                    return [2 /*return*/, result];
                }
                else {
                    console.error("No Active Account");
                }
                return [2 /*return*/, null];
            });
        });
    };
    return WalletController;
}());
export { WalletController };
export function getWalletController() {
    return new WalletController();
}
//# sourceMappingURL=wallet.js.map