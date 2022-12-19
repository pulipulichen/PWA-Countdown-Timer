/* global Node */
//import $ from 'jquery'

import Author from './Author/Author.vue'
import PresetButtons from './PresetButtons/PresetButtons.vue'
import SoundSelector from './SoundSelector/SoundSelector.vue'
import Timer from './Timer/Timer.vue'


let Index = {
  props: ['db'],
  data() {
    this.$i18n.locale = this.db.config.localConfig
    return {
    }
  },
  components: {
    Author,
    PresetButtons,
    SoundSelector,
    Timer
  },
  computed: {
  },
  watch: {
    'db.config.inited'(inited) {
      if (inited === false) {
        return false
      }

      this.resizeWindow()
    },
  },
  // mounted() {
  // },
  methods: {
    playSound () {
      this.$refs.SoundSelector.play()
    },
    stopSound () {
      this.$refs.SoundSelector.pause()
    },
    resizeWindow: async function () {
      await this.db.utils.AsyncUtils.sleep(1000)

      let el = this.$el
      // console.log(el.offsetWidth, el.offsetHeight)

      let padding = 50
      window.resizeTo(el.offsetWidth + padding, el.offsetHeight + (padding * 2))
    }
  }
}
// import IndexMethodsPostMessage from './IndexMethodsPostMessage.js'
// IndexMethodsPostMessage(Index)

//import IndexMethodsTest from './IndexMethodsTest.js'
//IndexMethodsTest(Index)

export default Index