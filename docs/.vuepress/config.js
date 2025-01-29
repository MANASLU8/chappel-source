import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  alias: {
    '@source': 'docs/.vuepress'
  },
  title: 'Архитектура высоконагруженных приложений',
  base: "/chappel/",

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://cdn-icons-png.flaticon.com/512/2083/2083213.png' }]
  ],

  theme: defaultTheme({
      variables: {
        nTasks: '5 + 1',
        tasks: [
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 10,
                maxScore: 20
            },
            {
                minScore: 5,
                maxScore: 20
            },
            {
                minScore: 5,
                maxScore: 10
            },
            {
                minScore: 5,
                maxScore: 10
            }
        ]
    },
    // logo: '/logo.png',
    repo: 'https://github.com/MANASLU8/chappel-source',
    lastUpdated: false,
    contributors: false,
    editLink: false,
    docsDir: 'docs',

    navbar: [
      {
        text: 'Задания',
        link: '/task/',
      }
    ],

    sidebar: {
      '/task': [
        {
          text: 'Описание курса',
          collapsable: false,
          children: [
            '',
            // 'materials'
          ]
        },
        {
          text: 'Лабораторные работы',
          collapsable: false,
          children: [
            'task/1',
            'task/2',
            'task/3',
            'task/4',
            'task/5',
            'task/6'
          ]
        }
      ]
    },

    plugins: [
      '@vuepress/plugin-search',
    ]    
  }),
  bundler: viteBundler(),
})
