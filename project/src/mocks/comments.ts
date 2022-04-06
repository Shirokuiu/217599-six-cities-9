import { Comment } from 'src/types/comment';

export const comments: Comment[] = [
  {
    id: 1,
    user: {
      id: 19,
      isPro: false,
      name: 'Christina',
      avatarUrl: 'https://9.react.pages.academy/static/avatar/10.jpg',
    },
    rating: 3,
    comment:
      'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2022-02-24T21:48:13.667Z',
  },
  {
    id: 2,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://9.react.pages.academy/static/avatar/7.jpg',
    },
    rating: 2,
    comment:
      'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2022-02-24T21:48:13.667Z',
  },
];
