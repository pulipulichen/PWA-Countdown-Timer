import SoundBell from './sounds/bell.ogg'
import SoundApplause from './sounds/applause.ogg'

let app = {
  props: ['db'],
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      sounds: [
        {
          // https://freesound.org/people/HerbertBoland/sounds/30160/
          name: 'Bell',
          file: SoundBell
        },
        {
          // https://freesound.org/people/YleArkisto/sounds/343477/
          name: 'Applause',
          file: SoundApplause
        }
      ],
      soundObject: null,
      isPlaying: false
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    soundFile () {
      let sound = this.sounds.filter(s => s.name === this.db.localConfig.sound)

      if (sound.length === 0) {
        sound = this.sounds[0]
      }
      else {
        sound = sound[0]
      }

      return sound.file
    },
  },
  mounted() {
  },
  methods: {
    play () {
      this.pause()
      
      this.soundObject = new Audio(this.soundFile)
      this.soundObject.play()
      this.isPlaying = true
    },
    pause () {
      this.detectIsPlaying()
      if (this.soundObject && this.isPlaying) {
        this.soundObject.pause();
        this.soundObject.currentTime = 0
        this.isPlaying = false
      }
    },
    detectIsPlaying () {
      let isPlaying = this.soundObject && 
        this.soundObject.currentTime > 0 && 
        !this.soundObject.paused && 
        !this.soundObject.ended && 
        this.soundObject.readyState > 2;


      if (isPlaying === null) {
        this.isPlaying = false
        return false
      }
      this.isPlaying = isPlaying
      
    }
  }
}

export default app