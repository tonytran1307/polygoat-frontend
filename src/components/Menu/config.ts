import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xD40D22C658c97AC67360A1d46A0fD4922957417E',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xD40D22C658c97AC67360A1d46A0fD4922957417E',
      },
      {
        label: 'Vfat Tools',
        href: 'https://vfat.tools/polygon/polygoat',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/polygoat-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PolyGoatFinance',
      },
      {
        label: 'Docs',
        href: 'https://polygoat.gitbook.io/polygoat',
      },
    ],
  },
  {
    label: 'Audit by Solidity Finance',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/audits/PolyGoat/',
  },
]

export default config
