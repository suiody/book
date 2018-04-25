const base = '/book/'

module.exports = {
  title: 'SGSE 18',
  description: 'Kursmaterial für das Fach "Spezielle Gebiete der Softwareentwicklung"',
  dest: 'dist',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: true,
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
      '/digitalisierung/',
      '/cloud/',
	    '/microservices/',
	    {
        title: 'Fullstack Development',
        children: [
		      '/fullstack/frontend/',
		      '/fullstack/backend/',
        ]
      },
      '/vr-ar/',
      '/ethik/',
      '/ai-ml/',
      '/reactive-programming/',
      '/streaming-architectures/',
      '/embedded/'
    ],
  }
}
