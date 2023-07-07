module.exports = {
  endpoint: 'https://api.github.com',
  token: process.env.RENOVATE_GITHUB_TOKEN,
  platform: 'github',
  logFileLevel: 'debug',
  logLevel: 'debug',
  logFile: '/usr/src/app/renovate.log',
  onboarding: true,
  onboardingConfig: {
    extends: [
      'local>joshystuart/renovate-self-hosted:preset-base',
    ],
  },
  repositories: process.env.REPO ?
    process.env.REPO.replace(/ /g, '').split(',').map(repo => `joshystuart/${repo}`) : [
      'joshystuart/renovate-node10',
      'joshystuart/renovate-node16',
    ],
};