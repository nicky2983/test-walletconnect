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
import QrReader from "react-qr-reader";
var SQRCodeScannerContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  margin: 0 auto !important;\n  background: rgb(0, 0, 0);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  margin: 0 auto !important;\n  background: rgb(0, 0, 0);\n"])));
var SQRCodeScannerWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var SCloseButton = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transition: all 0.2s ease-in-out;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  z-index: 10;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  transition: all 0.2s ease-in-out;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  z-index: 10;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n  &:hover {\n    opacity: 0.5;\n  }\n"])));
var SFirstLine = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  width: 90%;\n  border: 1px solid rgb(255, 255, 255);\n"], ["\n  position: absolute;\n  width: 90%;\n  border: 1px solid rgb(255, 255, 255);\n"])));
var SSecondLine = styled(SFirstLine)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  transform: rotate(90deg);\n"], ["\n  transform: rotate(90deg);\n"])));
var QRCodeScanner = /** @class */ (function (_super) {
    __extends(QRCodeScanner, _super);
    function QRCodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            delay: 300,
        };
        _this.stopRecording = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setState({ delay: false })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleScan = function (data) {
            if (data) {
                var _a = _this.props.onValidate(data), result = _a.result, error = _a.error;
                if (result) {
                    _this.stopRecording();
                    _this.props.onScan(result);
                }
                else {
                    _this.handleError(error);
                }
            }
        };
        _this.handleError = function (error) {
            if (error) {
                _this.props.onError(error);
            }
        };
        _this.onClose = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.stopRecording()];
                    case 1:
                        _a.sent();
                        this.props.onClose();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    QRCodeScanner.prototype.componentWillUnmount = function () {
        this.stopRecording();
    };
    QRCodeScanner.prototype.render = function () {
        return (React.createElement(SQRCodeScannerContainer, null,
            React.createElement(SCloseButton, { onClick: this.onClose },
                React.createElement(SFirstLine, null),
                React.createElement(SSecondLine, null)),
            React.createElement(SQRCodeScannerWrapper, null,
                React.createElement(QrReader, { delay: this.state.delay, onError: this.handleError, onScan: this.handleScan, style: { width: "100%" } }))));
    };
    return QRCodeScanner;
}(React.Component));
export default QRCodeScanner;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=QRCodeScanner.js.map