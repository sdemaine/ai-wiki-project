export default {
  title: 'AI Applications Wiki',
  description: 'A comprehensive guide to AI tools for everyday life, barbering, and creative writing',
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Creative Tools', link: '/creative/' },
      { text: 'Writing & Research', link: '/writing/' },
      { text: 'Daily Life', link: '/daily-life/' },
      { text: 'Business', link: '/barbering/' }
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
      '/barbering/': [
        {
          text: 'Business AI Tools',
          items: [
            { text: 'Customer Management', link: '/barbering/customer-management' },
            { text: 'Social Media Marketing', link: '/barbering/social-media' },
            { text: 'Business Analytics', link: '/barbering/analytics' },
            { text: 'Inventory Management', link: '/barbering/inventory' },
            { text: 'Customer Service', link: '/barbering/customer-service' }
          ]
        }
      ],
      '/writing/': [
        {
          text: 'Creative Writing AI',
          items: [
            { text: 'Writing Assistants', link: '/writing/assistants' },
            { text: 'Plot Development', link: '/writing/plot-development' },
            { text: 'Character Creation', link: '/writing/character-creation' },
            { text: 'Research Tools', link: '/writing/research' },
            { text: 'Publishing & Marketing', link: '/writing/publishing' }
          ]
        }
      ],
      '/daily-life/': [
        {
          text: 'Everyday AI Applications',
          items: [
            { text: 'Communication', link: '/daily-life/communication' },
            { text: 'Finance & Budgeting', link: '/daily-life/finance' },
            { text: 'Health & Fitness', link: '/daily-life/health' },
            { text: 'Learning & Education', link: '/daily-life/learning' },
            { text: 'Entertainment', link: '/daily-life/entertainment' }
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