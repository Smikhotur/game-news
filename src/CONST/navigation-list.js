import {
  ROUTE_HOME_PAGE,
  ROUTE_ALL_GAMES,
  ROUTE_SHOP_PAGE,
  ROUTE_BLOG,
  ROUTE_MESSENGER,
} from './list-local-routs/list-routes-public';
import homeImg from '../assets/images/icon/home.png';
import homeHoverImg from '../assets/images/icon/homeHover.png';
import gameImg from '../assets/images/icon/game.png';
import gameHoverImg from '../assets/images/icon/gameHover.png';
import shopImg from '../assets/images/icon/shop.png';
import shopHoverImg from '../assets/images/icon/shopHover.png';
import blogImg from '../assets/images/icon/blog.png';
import blogHoverImg from '../assets/images/icon/blogHover.png';

export const NAVIGATION_LEFT = [
  {
    name: 'home',
    link: ROUTE_HOME_PAGE.path,
    icon: homeImg,
    iconHover: homeHoverImg,
  },
  {
    name: 'games',
    link: ROUTE_ALL_GAMES.path,
    icon: gameImg,
    iconHover: gameHoverImg,
  },
];

export const NAVIGATION_RIGHT = [
  {
    name: 'shop',
    link: ROUTE_SHOP_PAGE.path,
    icon: shopImg,
    iconHover: shopHoverImg,
  },
  {
    name: 'blog',
    link: ROUTE_BLOG.path,
    icon: blogImg,
    iconHover: blogHoverImg,
  },
];

export const smallMenu = [
  { item: 'personal_office', link: '/' },
  { item: 'settings', link: '/' },
  { item: 'notification', link: '/' },
  { item: 'messenger', link: ROUTE_MESSENGER.path },
];
