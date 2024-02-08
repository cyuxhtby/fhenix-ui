import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenList: WarpTokenConfig = [
  // Example collateral token for an EVM chain
  // {
  //   type: 'collateral',
  //   chainId: 5,
  //   address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
  //   hypCollateralAddress: '0x145de8760021c4ac6676376691b78038d3DE9097',
  //   name: 'Weth',
  //   symbol: 'WETH',
  //   decimals: 18,
  //   logoURI: '/logos/weth.png', // See public/logos/
  // },

  // // Example NFT (ERC721) token for an EVM chain
  // {
  //   chainId: 5,
  //   name: 'Test721',
  //   symbol: 'TEST721',
  //   decimals: 0,
  //   type: 'collateral',
  //   address: '0x77566D540d1E207dFf8DA205ed78750F9a1e7c55',
  //   hypCollateralAddress: '0xDcbc0faAA269Cf649AC8950838664BB7B355BD6B',
  //   isNft: true,
  // },
  {
    chainId: 11155111,
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
    type: 'collateral',
    address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    hypCollateralAddress: '0x8415013Aa7460A0a7fd7865b29346772924d6833',
    isNft: false,
    logoURI: '/logos/usdc.svg',
  },
  {
    chainId: 11155111,
    name: 'DAI',
    symbol: 'DAI',
    decimals: 18,
    type: 'collateral',
    address: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
    hypCollateralAddress: '0x39C5c085095032a36D608e2A6FFf2fB65714Db5C',
    isNft: false,
    logoURI: '/logos/dai.svg',
  },
  {
    chainId: 11155111,
    name: 'USDT',
    symbol: 'USDT',
    decimals: 6,
    type: 'collateral',
    address: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
    hypCollateralAddress: '0xD0140EF95489a86dCda1159Eec90882a21e1b47e',
    isNft: false,
    logoURI: '/logos/tether.svg',
  },
];
