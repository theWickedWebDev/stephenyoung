const links = [
  {
    title: 'Résumé',
    icon: 'home',
    internal: true,
    slug: 'home',
    href: '/'
  },
  {
    title: 'About this site',
    icon: 'star',
    internal: true,
    slug: 'about-this-site',
    href: '/about-this-site/'
  },
  {
    title: 'Other Experience',
    icon: 'star',
    internal: true,
    slug: 'other-experience',
    href: '/other-experience/'
  },
  {
    title: 'Download Résumé PDF',
    icon: 'download',
    internal: false,
    slug: 'resume',
    href: `${S3_URL}/resume/stephen-young-resume.pdf`
  }
];

export default links;
