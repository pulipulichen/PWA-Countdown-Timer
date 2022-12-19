let app = {
  props: ['db'],
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      countdownTimer: null
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.config.isCountdowning' (isCountdowning) {
      if (isCountdowning === true && this.db.config.currentTime > 0) {
        this.countdownTimer = setInterval(() => {
          this.db.config.currentTime-- 

          if (this.db.config.currentTime < 1) {
            clearInterval(this.countdownTimer)
            this.playSound()

            setTimeout(() => {
              this.db.config.currentTime = -1
              this.db.config.isCountdowning = false
              clearInterval(this.countdownTimer)
            }, 3000)
          }
        }, 1000)
      }
      if (isCountdowning === false && this.db.config.currentTime > 0) {
        clearInterval(this.countdownTimer)
      }
    }
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    onClick () {
      if (this.db.config.currentTime < 0) {
        this.startCountdown()
      }
      else if (this.db.config.isCountdowning === true) {
        this.pauseCountdown()
      }
      else {
        this.resumeCountdown()
      }
    },
    startCountdown () {
      this.stopSound()
      this.db.config.currentTime = this.db.localConfig.timeLimit
      
      let preset = this.db.config.timeLimitPresets.filter(p => p.value === this.db.localConfig.timeLimit)
      if (preset.length === 0) {
        this.db.localConfig.lastTimeLimit = this.db.localConfig.timeLimit
      }
      // else {
      //   // this.db.localConfig.lastTimeLimit = -1
      // }


      this.db.config.isCountdowning = true
    },
    playSound () {
      this.$parent.$parent.playSound()
    },
    stopSound () {
      this.$parent.$parent.stopSound()
    },
    pauseCountdown () {
      this.db.config.isCountdowning = false
      clearInterval(this.countdownTimer)
    },
    resumeCountdown () {
      this.db.config.isCountdowning = true
    },
    stopCountdown () {
      this.db.config.currentTime = -1
      this.db.config.isCountdowning = false
      clearInterval(this.countdownTimer)
    },
    endCountdown () {
      this.stopCountdown()
      this.playSound()
      clearInterval(this.countdownTimer)
    }
  }
}

export default app