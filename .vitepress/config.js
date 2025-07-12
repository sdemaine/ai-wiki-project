export default {
  title: 'AI Applications Wiki',
  description: 'A comprehensive guide to AI tools for everyday life, creative projects, and novel writing',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Creative Tools', link: '/creative/' },
      { text: 'Writing & Research', link: '/writing/' },
      { text: 'Daily Life', link: '/daily-life/' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'AI Fundamentals',
          items: [
            { text: 'What is AI?', link: '/getting-started/what-is-ai' },
            { text: 'Your First AI Experience', link: '/getting-started/first-experience' },
            { text: 'Mobile Apps Setup', link: '/getting-started/mobile-apps' },
            { text: 'Free vs Paid Tools', link: '/getting-started/free-vs-paid' }
          ]
        },
        {
          text: 'Core AI Categories',
          items: [
            { text: 'Text AI (LLMs)', link: '/getting-started/llms' },
            { text: 'Image Generation', link: '/getting-started/image-ai' },
            { text: 'Music & Audio', link: '/getting-started/audio-ai' },
            { text: 'Voice Assistants', link: '/getting-started/voice-ai' }
          ]
        }
      ],
      '/creative/': [
        {
          text: 'Creative AI Tools',
          items: [
            { text: 'Image Generation', link: '/creative/image-generation' },
            { text: 'Music Creation', link: '/creative/music-creation' },
            { text: 'Video Generation', link: '/creative/video-generation' },
            { text: 'Art & Design', link: '/creative/art-design' }
          ]
        }
      ],
      '/writing/': [
        {
          text: 'Novel Writing Tools',
          items: [
            { text: 'AI Writing Assistants', link: '/writing/ai-assistants' },
            { text: 'Novel Creation Platforms', link: '/writing/novel-platforms' },
            { text: 'Plot & Story Development', link: '/writing/plot-development' },
            { text: 'Character Creation', link: '/writing/character-creation' },
            { text: 'Research & World Building', link: '/writing/research-worldbuilding' },
            { text: 'Editing & Revision', link: '/writing/editing-revision' },
            { text: 'Publishing & Marketing', link: '/writing/publishing-marketing' }
          ]
        }
      ],
      '/daily-life/': [
        {
          text: 'Everyday AI Applications',
          items: [
            { text: 'Communication & Email', link: '/daily-life/communication' },
            { text: 'Productivity & Organization', link: '/daily-life/productivity' },
            { text: 'Learning & Education', link: '/daily-life/learning' },
            { text: 'Entertainment & Media', link: '/daily-life/entertainment' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/ai-wiki-project' }
    ],

    footer: {
      message: 'AI Applications Wiki - Empowering everyday life with artificial intelligence',
      copyright: 'Copyright © 2025'
    }
  }
}