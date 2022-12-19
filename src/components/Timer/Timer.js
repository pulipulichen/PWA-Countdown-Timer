import TimerController from './TimerController/TimerController.vue'
import AdjustButtons from './AdjustButtons/AdjustButtons.vue'

let app = {
  props: ['db'],
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      
    }
  },
  components: {
    TimerController,
    AdjustButtons
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    displayTime () {
      let time = this.db.localConfig.timeLimit
      if (this.db.config.currentTime > -1) {
        time = this.db.config.currentTime
      }

      if (time < 1) {
        time = 0
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

      if (hour < 10) {
        hour = '0' + hour
      }
      if (minute < 10) {
        minute = '0' + minute
      }
      if (second < 10) {
        second = '0' + second
      }

      let displayTime = `${hour}:${minute}:${second}`
      if (this.db.config.currentTime > -1) {
        this.setDocumentTitle(displayTime)
      }
      else {
        this.setDocumentTitle()
      }
      return displayTime
    },
    
  },
  mounted() {
    
  },
  methods: {
    
    setDocumentTitle (displayTime) {
      if (!displayTime) {
        document.title = this.$t('Countdown Timer')
      }
      else {
        while (displayTime.startsWith('00:')) {
          displayTime = displayTime.slice(3)
        }
        while (displayTime.startsWith('0')) {
          displayTime = displayTime.slice(1)
        }
        if (displayTime.length === '') {
          displayTime = this.$t('Countdown Timer')
        }
        document.title = displayTime
      }
    }
  }
}

export default app