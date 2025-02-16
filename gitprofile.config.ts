// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ADSFAaron', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: process.env.VITE_BASE_PATH || '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ADSFAaron/multi-lib-code-server', 'ADSFAaron/wikiCFP_APP'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Side Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Code-Server',
          description: 'Customized Dockerfile for a web-based VSCode lab',
          imageUrl:
            'https://code.visualstudio.com/assets/blogs/2022/07/07/help-and-start.png',
          link: 'https://github.com/ADSFAaron/multi-lib-code-server',
        },
        {
          title: 'Library Bar',
          description: 'Create a space for reading and sharing.',
          imageUrl:
            'https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: 'https://github.com/ADSFAaron/Library_Bar',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of ADSFAaron',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'aaron-chuang',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'aaron-chuang@haoder.dev',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Java',
    'Python',
    'Docker',
    'Flutter',
    'PHP',
    'Laravel',
    'Vue.js',
    'JavaScript',
    'MySQL',
    'Redis',
    'Firebase',
    'Solr',
    'Git',
    'CSS',
    'Tailwind',
    'Figma',
  ],
  experiences: [
    {
      company: 'Academia Sinica Center for Digital Cultures',
      position: 'Backend Developer',
      from: 'February 2021',
      to: 'April 2022',
      companyLink: 'https://ascdc.sinica.edu.tw/en',
    },
  ],
  certifications: [
    {
      name: 'TOEIC',
      body: '735',
      year: 'March 2018',
      link: 'https://www.toeic.com.tw/',
    },
  ],
  educations: [
    {
      institution: 'National Kaohsiung University of Science and Technology',
      degree: 'Master of Computer Science and Information Engineering',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Yuan Ze University',
      degree: 'Bachelor of Computer Science and Engineering',
      from: '2018',
      to: '2022',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Lemonade',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made from <a 
      class='text-primary' href='https://github.com/arifszn/gitprofile'
      target='_blank'
      rel='noreferrer'
    >GitProfile</a> and modify by <a 
      class='text-primary' href='https://github.com/ADSFAaron'
      target='_blank'
      rel='noreferrer'
    >ADSFAaron</a>`,

  enablePWA: true,
};

export default CONFIG;
