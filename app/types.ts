import { type ChainInfo } from "@particle-network/chains";
import { AccountInfo } from "@particle-network/rn-connect";

export type RootStackParamList = {
  Home: { chainInfo?: ChainInfo; accountInfo?: AccountInfo };
  SelectChainPage: undefined;
  SelectWalletPage: undefined;
  ConnectDemo: undefined;
  ConnectedWalletPage: { accountInfo: AccountInfo };
  // AccountPage: undefined;
};
