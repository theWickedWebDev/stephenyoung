module.exports = {
  apps : [
    {
      name: "resume-app",
      script: "./dist/index.js",
      instances: 1,
      env: {
        "NODE_ENV": "production"
      },
      env_staging: {
        "NODE_ENV": "staging"
      }
    }
  ]
}
