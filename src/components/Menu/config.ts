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
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xff4e56a6783b0ef9b6636dcbba38f6dd7be23bbf',
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
        href: 'https://info.quickswap.exchange/token/0xfF4E56a6783B0EF9b6636dCbbA38f6Dd7be23Bbf',
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
        href: 'https://github.com/PolyRoosterFinance',
      },
      {
        label: 'Docs',
        href: 'https://polygoat.gitbook.io/polygoat',
      },
    ],
  },
  {
    label: 'Audit (SOON)',
    icon: 'AuditIcon',
    href: 'https://www.polygoat.finance',
  },
]

export default config
