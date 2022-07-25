const isCI = !!process.env.CI || process.env.HOME === '/home/runner'

const config = {
  launch: {
    headless: isCI
  }
}

if (isCI) {
  config.server = {
    command: `npm run dev`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  }
}

module.exports = config