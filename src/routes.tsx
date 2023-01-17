import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdTableView, MdPerson, MdHome, MdLock, MdOutlineShoppingCart, MdManageAccounts  } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import { Partners } from 'views/admin/partnerDataTables/';
import AdminOne from 'views/admin/adminOne';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import TestAdmin from 'views/auth/myAdmin';


const routes = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard
	},
	{
		name: 'NFT Marketplace',
		layout: '/admin',
		path: '/nft-marketplace',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: NFTMarketplace,
		secondary: true
	},
	{
		name: 'Data Tables',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/data-tables',
		component: DataTables
	},
	{
		name: 'Partner Tables',
		layout: '/admin',
		icon: <Icon as={MdTableView} width='20px' height='20px' color='inherit' />,
		path: '/partner-data-tables',
		component: Partners
	},
	{
		name: 'Profile',
		layout: '/admin',
		path: '/profile',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Profile
	},
	{
		name: 'Sign In',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
	{
		name: 'RTL Admin',
		layout: '/rtl',
		path: '/rtl-default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: RTL
	},
	{
		name: 'Test Admin',
		layout: '/auth',
		path: '/test-admin',
		icon: <Icon as={MdManageAccounts} width='20px' height='20px' color='inherit' />,
		component: TestAdmin
	},
	{
		name: 'Partner',
		layout: '/admin',
		path: '/admin-one',
		icon: <Icon as={MdManageAccounts} width='20px' height='20px' color='inherit' />,
		component: AdminOne
	},
];

export default routes;
