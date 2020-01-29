module.exports = {
    debugMode: true,
    server: {
      port: 443,
      host: "https://api.localhost"
    },
    tweets: {
      maxTweetSize: 140
    },
    mongodb: {
      development: {
        connectionString: "mongodb://localhost:27017"
      },
      production: {
        connectionString: "mongodb://localhost:27017"
      }
    }
  }