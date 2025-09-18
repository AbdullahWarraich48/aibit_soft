import { MobileExperienceData } from '@/types';

export const mobileExperienceData: MobileExperienceData = {
  banner: {
    text: 'Critical Business Impact',
    icon: '🔴'
  },
  title: {
    part1: 'The Cost Of Poor',
    part2: 'Mobile Experience'
  },
  subtitle: 'Without responsive design, businesses lose revenue, leads, and sales every day.',
  cards: [
    {
      id: 'poor-mobile',
      theme: 'red',
      icon: '/images/mob.svg',
      title: 'Poor Mobile Experience',
      subtitle: 'Slow loading, bad layout, difficult navigation',
      statistic: '59.7%',
      statisticLabel: 'Global mobile traffic',
      description: "If your site doesn't work well on mobile, over half of your potential visitors may leave or not convert because they can't use the site properly."
    },
    {
      id: 'cart-abandonment',
      theme: 'orange',
      icon: '/images/cart.svg',
      title: 'Cart Abandonment',
      subtitle: 'High checkout abandonment rates',
      statistic: '85.65%',
      statisticLabel: 'Mobile cart abandonment',
      description: 'Visitors trying to buy may abandon before completing purchase; huge lost sales and revenue.'
    },
    {
      id: 'user-expectations',
      theme: 'purple',
      icon: '/images/user.svg',
      title: 'User Expectations',
      subtitle: 'Consistency across devices disappoints users',
      statistic: '85%',
      statisticLabel: 'Expect mobile = desktop',
      description: 'If mobile site is worse, people lose trust or decide not to buy; leads drop; brand reputation suffers.'
    },
    {
      id: 'revenue-impact',
      theme: 'green',
      icon: '/images/revenue.svg',
      title: 'Revenue Impact',
      subtitle: 'Recoverable sales lost due to design friction',
      statistic: '$260B',
      statisticLabel: 'Lost recoverable sales',
      description: 'Without a responsive, smooth site + checkout, businesses are leaving huge amounts of money on the table.'
    }
  ]
};
