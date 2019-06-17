module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
      },
    }
  }
}

//npm run build
//firebase deploy 