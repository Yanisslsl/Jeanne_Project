module.exports = {

  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule( 'file-loader')
      .test(/\.(png|jpe?g|gif)$/i)
      .use( 'file-loader')
        .loader('file-loader')
        .end( 'file-loader')
      // Add another loader
    
     
  }
   
  
    
  };
