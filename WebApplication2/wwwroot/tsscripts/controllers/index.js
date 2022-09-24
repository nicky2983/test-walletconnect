import { getWalletController } from "./wallet";
import { getStoreController } from "./store";
var controllers;
export function setupAppControllers() {
    var wallet = getWalletController();
    var store = getStoreController();
    controllers = { store: store, wallet: wallet };
    return controllers;
}
export function getAppControllers() {
    var _controllers = controllers;
    if (!_controllers) {
        _controllers = setupAppControllers();
    }
    return _controllers;
}
//# sourceMappingURL=index.js.map