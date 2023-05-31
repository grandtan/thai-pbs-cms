import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineContactPage,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'pages/admin/default';
import Generate from 'pages/admin/generate-url';
import NFTMarketplace from 'pages/admin/nft-marketplace';
import Profile from 'pages/admin/profile';
import DataTables from 'pages/admin/data-tables';
import RTL from 'pages/rtl/rtl-default';

// Auth Imports
import SignInCentered from 'pages/auth/sign-in';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Meta Data',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: 'Generate URL',
    layout: '/admin',
    path: '/generate-url',
    icon: (
      <Icon
        as={MdOutlineContactPage}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Generate,
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: '/data-tables',
  //   component: DataTables,
  // },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL
  // }
];

export default routes;
