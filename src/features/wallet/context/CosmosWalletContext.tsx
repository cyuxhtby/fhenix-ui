import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as leapWallets } from '@cosmos-kit/leap';
import { ChainProvider } from '@cosmos-kit/react';
import '@interchain-ui/react/styles';
import { PropsWithChildren } from 'react';

import { APP_DESCRIPTION, APP_NAME, APP_URL } from '../../../consts/app';
import { config } from '../../../consts/config';
import { getCosmosKitConfig } from '../../chains/metadata';

const theme = extendTheme({
  fonts: {
    heading: `'Neue Haas Grotesk', 'Helvetica', 'sans-serif'`,
    body: `'Neue Haas Grotesk', 'Helvetica', 'sans-serif'`,
  },
});

export function CosmosWalletContext({ children }: PropsWithChildren<unknown>) {
  const { chains, assets } = getCosmosKitConfig();
  // TODO replace Chakra here with a custom modal for ChainProvider
  // Using Chakra + @cosmos-kit/react instead of @cosmos-kit/react-lite adds about 600Kb to the bundle
  return (
    <ChakraProvider theme={theme}>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
        walletConnectOptions={{
          signClient: {
            projectId: config.walletConnectProjectId,
            metadata: {
              name: APP_NAME,
              description: APP_DESCRIPTION,
              url: APP_URL,
              icons: [],
            },
          },
        }}
        signerOptions={{
          // TODO if you plan on using cosmos wallet
          signingCosmwasm: () => ({}), 
          signingStargate: () => ({}), 
        }}
        modalTheme={{ defaultTheme: 'light' }}
      >
        {children}
      </ChainProvider>
    </ChakraProvider>
  );
}
