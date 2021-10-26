module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Mark Health Api Documentation',
    description: 'Mark Health Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
       
        docsRepo: '',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '',

        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' }
        ],
        sidebar: {
            '/1.x/': require('./version-configs/1.x')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
