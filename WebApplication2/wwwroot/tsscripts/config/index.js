import { SUPPORTED_CHAINS, MAINNET_CHAIN_ID, ETH_STANDARD_PATH } from "../constants";
import { getRpcEngine } from "../engines";
var appConfig = {
    name: "WalletConnect",
    logo: "https://test.walletconnect.org/static/media/walletconnect-logo.e1cb8d21.png",
    chainId: MAINNET_CHAIN_ID,
    derivationPath: ETH_STANDARD_PATH,
    numberOfAccounts: 3,
    colors: {
        defaultColor: "12, 12, 13",
        backgroundColor: "40, 44, 52",
    },
    chains: SUPPORTED_CHAINS,
    styleOpts: {
        showPasteUri: true,
        showVersion: true,
    },
    rpcEngine: getRpcEngine(),
    events: {
        init: function (state, setState) { return Promise.resolve(); },
        update: function (state, setState) { return Promise.resolve(); },
    },
};
export function getAppConfig() {
    return appConfig;
}
//# sourceMappingURL=index.js.map