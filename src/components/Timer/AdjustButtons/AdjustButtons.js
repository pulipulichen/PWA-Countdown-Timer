let app = {
  props: ['db', 'time', 'isPlus'],
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      intervalPreset: [
        {
          name: '1s',
          value: 1
        },
        {
          name: '10s',
          value: 10
        },
        {
          name: '30s',
          value: 30
        },
        {
          name: '1m',
          value: 60
        },
        {
          name: '5m',
          value: 300
        },
        {
          name: '10m',
          value: 600
        }
      ]
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    intervalPresetColumns () {
      let columns = []
      let columnNumber = 2

      for (let i = 0; i < columnNumber; i++) {
        columns.push([])
      }

      this.intervalPreset.forEach((preset, i) => {
        columns[(i % columnNumber)].push(preset)
      })

      if (this.isPlus === false) {
        columns.reverse()
      }

      return columns
    },
  },
  mounted() {
    
  },
  methods: {
    changeTimeLimit (value) {
      if (this.isPlus === false) {
        value = -1 * value
      } 

      if (this.db.config.isCountdowning === false && this.db.config.currentTime < 0) {
        this.db.localConfig.timeLimit = this.db.localConfig.timeLimit + value
      }
      else {
        this.db.config.currentTime = this.db.config.currentTime + value
      }
    },
    displayPresetName (name) {
      if (this.isPlus) {
        name = '+' + name
      }
      else {
        name = '-' + name
      }
      return this.$t(name)
    },
    computedClasses (value) {
      if (this.isPlus) {
        return false
      } 

      let classes = []
      if (value >= this.time) {
        classes.push('disabled')
      }
      return classes
    }
  }
}

export default app