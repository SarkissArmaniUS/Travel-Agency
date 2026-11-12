// NAVIGATION (якорі на секції сторінки)
export const NAV_LINKS = [
  { href: '#home', key: 'home', label: 'Home' },
  { href: '#guide', key: 'how_hilink_work', label: 'How Hilink Work?' },
  { href: '#features', key: 'services', label: 'Services' },
  { href: '#pricing', key: 'pricing', label: 'Pricing' },
  { href: '#contact', key: 'contact_us', label: 'Contact Us' },
];

// Відео для модалки "How we work?" (заміни на своє: https://www.youtube.com/embed/<ID>)
export const HOW_IT_WORKS_VIDEO = 'https://www.youtube.com/embed/aqz-KE-bpKQ';

// Магазини застосунків (заміни на свої посилання)
export const APP_LINKS = {
  appStore: 'https://apps.apple.com',
  playStore: 'https://play.google.com/store',
};

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890', href: 'tel:1234567890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com', href: 'mailto:hilink@akinthil.com' },
  ],
};

// Заміни href на свої профілі
export const SOCIALS = {
  title: 'Social',
  links: [
    { icon: '/facebook.svg', href: 'https://facebook.com', label: 'Facebook' },
    { icon: '/instagram.svg', href: 'https://instagram.com', label: 'Instagram' },
    { icon: '/twitter.svg', href: 'https://x.com', label: 'X' },
    { icon: '/youtube.svg', href: 'https://youtube.com', label: 'YouTube' },
    { icon: '/wordpress.svg', href: 'https://wordpress.com', label: 'WordPress' },
  ],
};


// // NAVIGATION
// export const NAV_LINKS = [
//     { href: '/', key: 'home', label: 'Home' },
//     { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
//     { href: '/', key: 'services', label: 'Services' },
//     { href: '/', key: 'pricing ', label: 'Pricing ' },
//     { href: '/', key: 'contact_us', label: 'Contact Us' },
//   ];
//
//   // CAMP SECTION
//   export const PEOPLE_URL = [
//     '/person-1.png',
//     '/person-2.png',
//     '/person-3.png',
//     '/person-4.png',
//   ];
//
//   // FEATURES SECTION
//   export const FEATURES = [
//     {
//       title: 'Real maps can be offline',
//       icon: '/map.svg',
//       variant: 'green',
//       description:
//         'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
//     },
//     {
//       title: 'Set an adventure schedule',
//       icon: '/calendar.svg',
//       variant: 'green',
//       description:
//         "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
//     },
//     {
//       title: 'Technology using augment reality',
//       icon: '/tech.svg',
//       variant: 'green',
//       description:
//         'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
//     },
//     {
//       title: 'Many new locations every month',
//       icon: '/location.svg',
//       variant: 'orange',
//       description:
//         'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
//     },
//   ];
//
//   // FOOTER SECTION
//   export const FOOTER_LINKS = [
//     {
//       title: 'Learn More',
//       links: [
//         'About Hilink',
//         'Press Releases',
//         'Environment',
//         'Jobs',
//         'Privacy Policy',
//         'Contact Us',
//       ],
//     },
//     {
//       title: 'Our Community',
//       links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
//     },
//   ];
//
//   export const FOOTER_CONTACT_INFO = {
//     title: 'Contact Us',
//     links: [
//       { label: 'Admin Officer', value: '123-456-7890' },
//       { label: 'Email Officer', value: 'hilink@akinthil.com' },
//     ],
//   };
//
//   export const SOCIALS = {
//     title: 'Social',
//     links: [
//       '/facebook.svg',
//       '/instagram.svg',
//       '/twitter.svg',
//       '/youtube.svg',
//       '/wordpress.svg',
//     ],
//   };