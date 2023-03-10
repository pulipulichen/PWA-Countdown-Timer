let appName = 'PWA-Countdown-Timer'

let config = {
  currentTime: -1,
  isCountdowning: false,

  timeLimitPresets: [
    {
      name: '1m',
      value: 60
    },
    {
      name: '15m',
      value: 900
    },
    {
      name: '20m',
      value: 1200
    },
    {
      name: '50m',
      value: 3000
    },
    {
      name: '90m',
      value: 5400
    },
  ]
}

// ----------------------------------------------------------------

let configEnv = {
  appName,
  debug: {
    ErrorHandler: {
      verbose: true
    },
    enableRestore: true,
  },
  
  inited: false,
  urlGithub: `https://github.com/pulipulichen/${appName}/`,
  urlIssue: `https://github.com/pulipulichen/${appName}/issues/new`,
  
}

for (let name in configEnv) {
  config[name] = configEnv[name]
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config