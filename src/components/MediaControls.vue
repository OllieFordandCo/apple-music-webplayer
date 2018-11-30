
<template>
  <div>
    <div class="button-group">
      <button class="btn p-1 main" v-on:click="prev()" :disabled="[states.none].indexOf(state) !== -1">
        <i class="fa fa-backward" />
      </button>
      <button class="btn p-1 main" v-if="[states.loading, states.waiting, states.seeking].indexOf(state) !== -1" disabled>
        <i class="fa fa-circle-o-notch fa-spin" />
      </button>
      <button class="btn p-1 main" v-on:click="play()" v-else-if="[states.paused, states.stopped, states.none].indexOf(state) !== -1" :disabled="[states.none].indexOf(state) !== -1">
        <i class="fa fa-play" />
      </button>
      <button class="btn p-1 main" v-on:click="pause()" v-else>
        <i class="fa fa-pause" />
      </button>
      <button class="btn p-1 main" v-on:click="next()" :disabled="[states.none].indexOf(state) !== -1">
        <i class="fa fa-forward" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaControls',
  data: function () {
    let musicKit = window.MusicKit.getInstance();

    return {
      musicKit: musicKit,
      states: window.MusicKit.PlaybackStates,
      state: musicKit.player.playbackState
    };
  },
  methods: {
    play: function () {
      this.musicKit.player.play();
    },
    pause: function () {
      this.musicKit.player.pause();
    },
    prev: function () {
      this.musicKit.player.skipToPreviousItem();
    },
    next: function () {
      this.musicKit.player.skipToNextItem();
    }
  },
  created: function () {
    this.playbackStateDidChange = (event) => {
      this.state = event.state;
    };
    this.musicKit.addEventListener(window.MusicKit.Events.playbackStateDidChange, this.playbackStateDidChange);
  },
  destroyed: function () {
    this.musicKit.removeEventListener(window.MusicKit.Events.playbackStateDidChange, this.playbackStateDidChange);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  color: #333;
  font-size: 1.2em;
}

.dark button {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
    padding-left: 1em !important;
    padding-right: 1em !important;
    color: #fff;
}

.main {
  font-size: 1.8em;
}
.btn {
  font-size: 1rem;
  border: 0;
}
</style>
