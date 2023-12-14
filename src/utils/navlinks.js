import {
  Code,
  GithubIcon,
  InstagramIcon,
  MessageSquare,
  ScrollText,
  Settings,
  TwitterIcon,
} from 'lucide-react';

export const socialLinks = [
  {
    title: 'Github',
    icon: <GithubIcon className="h-6 w-6" />,
    href: '/',
  },
  {
    title: 'Twitter',
    icon: <TwitterIcon className="h-6 w-6" />,
    href: '/',
  },
  {
    title: 'Instagram',
    icon: <InstagramIcon className="h-6 w-6" />,
    href: '/',
  },
];

export const navLinks = [
  {
    title: 'Home',
    id: 'home',
  },
  {
    title: 'Features',
    id: 'features',
  },
  {
    title: 'Services',
    id: 'services',
  },
  {
    title: 'Pricing',
    id: 'pricing',
  },
  {
    title: 'Contact',
    id: 'contact',
  },
];

export const sideBarLinks = [
  {
    title: 'Conversations',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-600/10',
    border: 'border-x-4 border-cyan-600',
    href: '/feed/conversation',
    icon: <MessageSquare />,
  },
  {
    title: 'Article Generation',
    color: 'text-fuchsia-500',
    bgColor: 'bg-fuchsia-500/10',
    border: 'border-x-4 border-fuchsia-500',
    href: '/feed/article',
    icon: <ScrollText />,
  },
  {
    title: 'Code Generation',
    color: 'text-green-600',
    bgColor: 'bg-green-600/10',
    border: 'border-x-4 border-green-600',
    href: '/feed/code',
    icon: <Code />,
  },
  {
    title: 'Settings',
    color: 'text-gray-300',
    bgColor: 'bg-gray-300/10',
    border: 'border-x-4 border-gray-400',
    href: '/feed/settings',
    icon: <Settings />,
  },
];
