import { StaticJsonRpcProvider } from '@ethersproject/providers';

const trevorSepliaRpcUrl = `https://dev-rpc.trevorgames.xyz`;
const trevorSepoliaProvider = new StaticJsonRpcProvider({ url: trevorSepliaRpcUrl, timeout: 25000 }, 689388);

const providers: Record<number, StaticJsonRpcProvider | undefined> = {
  689388: trevorSepoliaProvider
};

export function getProvider(networkId: number): StaticJsonRpcProvider {
  const url = `https://rpc.snapshotx.xyz/${networkId}`;

  let provider = providers[networkId];

  if (!provider) {
    provider = new StaticJsonRpcProvider({ url, timeout: 25000 }, networkId);
    providers[networkId] = provider;
  }

  return provider;
}
