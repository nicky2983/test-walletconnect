import ethereum from "./ethereum";
var RpcEngine = /** @class */ (function () {
    function RpcEngine(engines) {
        this.engines = engines;
    }
    RpcEngine.prototype.filter = function (payload) {
        var engine = this.getEngine(payload);
        return engine.filter(payload);
    };
    RpcEngine.prototype.router = function (payload, state, setState) {
        var engine = this.getEngine(payload);
        return engine.router(payload, state, setState);
    };
    RpcEngine.prototype.render = function (payload) {
        var engine = this.getEngine(payload);
        return engine.render(payload);
    };
    RpcEngine.prototype.signer = function (payload, state, setState) {
        var engine = this.getEngine(payload);
        return engine.signer(payload, state, setState);
    };
    RpcEngine.prototype.getEngine = function (payload) {
        var match = this.engines.filter(function (engine) { return engine.filter(payload); });
        if (!match || !match.length) {
            throw new Error("No RPC Engine found to handle payload with method ".concat(payload.method));
        }
        return match[0];
    };
    return RpcEngine;
}());
export function getRpcEngine() {
    return new RpcEngine([ethereum]);
}
//# sourceMappingURL=index.js.map