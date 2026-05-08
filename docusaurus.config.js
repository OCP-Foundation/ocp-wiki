// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenCognition Protocol',
  tagline: 'The 5-Layer Stack for Decentralized AI',
  favicon: 'img/OCP_PIC.png',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'ocp-org', 
  projectName: 'ocp-docs', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Docs act as the homepage
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark', // OCP looks great in dark mode
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'OCP Protocol',
        logo: {
          alt: 'OCP Logo',
          src: 'img/OCP_PIC.png', // Ensure this exists in static/img/
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Documentation',
          },
          {to: '/blog', label: '📰 Blog', position: 'left'},
          {
            href: 'https://github.com/your-org/ocp',
            label: 'GitHub 🐙',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Protocol Docs',
            items: [
              { label: '🚀 Introduction', to: '/' },
              { label: '🏗️ Architecture', to: '/architecture/overview' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord 💬', href: 'https://discord.gg/ocp' },
              { label: 'X / Twitter 🐦', href: 'https://x.com/ocp_protocol' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub 🐙', href: 'https://github.com/ocp' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenCognition Foundation. Built with 🦖`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
