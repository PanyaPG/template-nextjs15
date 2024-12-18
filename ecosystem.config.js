module.exports = {
  apps: [
    {
      name: "template_symphony",
      script: "npm",
      args: "start",
      instances: 2,
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
