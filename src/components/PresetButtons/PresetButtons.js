let app = {
  props: ['db'],
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    displayLastTimeLimit () {
      let time = this.db.localConfig.lastTimeLimit
      if (time <= 0) {
        return false
      }

      let hour = 0
      let minute = 0
      let second = 0

      if (time >= 3600) {
        hour = Math.floor(time / 3600)
      }
      if (time >= 60) {
        minute = Math.floor(time / 60)
      }
      second = time % 60
  
      
      if (hour > 0 || minute > 0) {
        if (second < 10) {
          second = '0' + second
        }
        second = ':' + second
      }

      if (hour > 0) {
        if (minute < 10) {
          minute = '0' + minute
        }

        minute = ':' + minute
      }

      if (hour === 0) {
        hour = ''
      }
      if (minute === 0) {
        minute = ''
      }

      return `${hour}${minute}${second}`
    }
  },
  mounted() {
    
  },
  methods: {
    setTimeLimit (value) {
      this.db.config.currentTime = -1
      this.db.config.isCountdowning = false
      this.db.localConfig.timeLimit = value
    }
  }
}

export default app