module.exports = {
    debugMode: true,
    server: {
      port: 27017,
      host: "https://api.localhost"
    },
    tweets: {
      maxTweetSize: 140
    },
    mongodb: {
      development: {
        connectionString: "mongodb://localhost:27017/twitter"
      },      
      production: {
        connectionString: "mongodb://localhost:27017"
      }
    }
  }
