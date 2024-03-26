import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  BuyMeACoffeeIcon
} from '@/components/icons';

export const ARTICLES_LIMIT = 6;

export const SHARE_ICONS = [
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/intent/tweet?text=',
    title: 'Twitter',
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/share/url?url=',
    title: 'Telegram',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/sharer/sharer.php?u=',
    title: 'Facebook',
  },
];

export const BUY_ME_A_COFFEE = {
  icon: BuyMeACoffeeIcon,
  link: 'https://www.buymeacoffee.com/thatswhatshebaked',
  title: 'BuyMeACoffee',
};
