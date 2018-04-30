const base = '/book/'

module.exports = {
  title: 'SGSE 18',
  description: 'Kursmaterial für das Fach "Spezielle Gebiete zum Software Engineering"',
  dest: 'dist',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'SGSE18/book',
    editLinks: false,
    docsDir: 'docs',
	  sidebarDepth: 2,
    nav: [
      {
        text: 'Kursmaterial',
        link: '/kurs/',
      }
    ],
    sidebar: [
      {
        title: 'Grundlagen',
        children: [
		  '/digitalisierung/',
          '/cloud/',
          '/dezentralisierung/'
        ]
      },
      {
        title: 'Continuous Software Engineering',
        children: [
	      '/continuous-software-engineering/'
        ]
      },
      {
        title: 'Architekturen',
        children: [
          '/microservices/',
          '/streaming-architectures/'
        ]
      },
	    {
        title: 'Fullstack Development',
        children: [
          '/fullstack/frontend/',
          '/reactive-programming/',
		  '/fullstack/backend/',
        ]
      },
      {
        title: 'AI - machine learning',
        children: [
          '/ai-ml/overview/',
          '/ai-ml/ai/',
          '/ai-ml/ml/',
          '/ai-ml/nn/',
          '/ai-ml/gan/',
          '/ethik/'
        ]
      },
      {
        title: 'Embedded',
        children: [
          '/embedded/'
        ]
      },
      {
        title: 'VR / AR',
        children: [
          '/vr-ar/'
        ]
      },
      {
        title: 'Blockchain',
        children: [
          '/blockchain/grundlagen/',
		  '/blockchain/technologie/',
		  '/blockchain/usecases/',
		  '/blockchain/plattformen/'
        ]
      }
    ],
  }
}
