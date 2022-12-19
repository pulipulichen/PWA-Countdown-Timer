/* global Node */
//import $ from 'jquery'

import Author from './Author/Author.vue'

let Index = {
  props: ['db'],
  data() {
    this.$i18n.locale = this.db.config.localConfig
    return {
    }
  },
  components: {
    Author
  },
  computed: {
  },
  watch: {
    'db.config.inited'(inited) {
      if (inited === false) {
        return false
      }
    },
  },
  // mounted() {
  // },
  methods: {
    
  }
}
// import IndexMethodsPostMessage from './IndexMethodsPostMessage.js'
// IndexMethodsPostMessage(Index)

//import IndexMethodsTest from './IndexMethodsTest.js'
//IndexMethodsTest(Index)

export default Index