import { SUPPORTED_CHAINS, MAINNET_CHAIN_ID, ETH_STANDARD_PATH } from "../constants";
import { IAppConfig } from "../helpers/types";
import { getRpcEngine } from "../engines";

const appConfig: IAppConfig = {
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
    init: (state, setState) => Promise.resolve(),
    update: (state, setState) => Promise.resolve(),
  },
};

export function getAppConfig(): IAppConfig {
  return appConfig;
}
