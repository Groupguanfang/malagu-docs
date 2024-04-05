module.exports = {
  apps: [
    {
      name: "Malagu-Docs",
      script: "./.output/server/index.mjs",
      env: {
        PORT: "3001",
      },
    },
  ],
};
