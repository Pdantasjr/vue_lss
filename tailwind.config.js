module.exports = {
  purge: [
    './src/assets/css/*.css',
    './src/components/*.vue',
    './src/store/*.js',
    './src/template/*.vue',
    './src/views/*.vue',
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#057541',
        neutral: '#F8FDFA',
        neutralDark: '#cacaca',
      },
      fontFamily: {
        'sans': ['Comfortaa']
      },
      backgroundImage: {
        'backgroundSarah': "url('~@/assets/images/home/banners/background_banner_1.jpg')",
      },
      spacing: {
        lineBurger: '6px',
        underline: '2px',
        'bannerContent-xm': '350px',
        'bannerContent-sm': '450px',
        'bannerContent-md': '600px',
      },
      screens: {
        'xm': '320px'
      },
    },
  },
  plugins: [],
}