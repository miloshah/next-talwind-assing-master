import HomeIcon from './icons/home';
import MediasIcon from './icons/medias';
import ContactIcon from './icons/contact';
import ServersIcon from './icons/servers';
import TerminalIcon from './icons/terminal';
import SettingsIcon from './icons/settings';
import RecycleBinIcon from './icons/recycle-bin';

const data = [
  {
    title: 'Dashboard',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Asset',
    icon: <MediasIcon />,
    link: '/assets',
  },
  {
    title: 'Transaction hall',
    icon: <ContactIcon />,
    link: '/transaction',
  },
  {
    title: 'Personal Info',
    icon: <ServersIcon />,
    link: '/personal',
  },
  {
    title: 'KYC',
    icon: <SettingsIcon />,
    link: '/kyc',
  },
  {
    title: 'My team',
    icon: <TerminalIcon />,
    link: '/my-team',
  },
  {
    title: 'Setting',
    icon: <RecycleBinIcon />,
    link: '/settings',
  },
];

export default data;
