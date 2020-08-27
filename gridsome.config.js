// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Alan Long',
  siteDescription: 'I’m a UX and branding designer with front-end development skills. I refine ideas to their essence and provide clarity for all involved.',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Projects', // Required
        baseDir: './projects', // Where .md files are located
        template: './src/templates/Projects.vue', // Optional
        route: '/project/:title'
      }
    },
  ],
};