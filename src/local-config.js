let localConfig = {
  timeLimit: 60,
  lastTimeLimit: -1,
  sound: 'Bell'
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig