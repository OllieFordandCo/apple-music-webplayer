<template>
  <div class="mini-player">
    <!--
    <div align-self="center" class="logo float-left">
      <router-link :to="{ name: 'index' }">MS</router-link>
    </div>-->
    <div class="now-playing">
      <NowPlaying />
    </div>
  </div>
</template>

<script>
// Import custom controls
import NowPlaying from '../components/NowPlaying.vue';

export default {
  name: 'Header',
  components: {
    NowPlaying
  }
};
</script>

<style scoped lang="scss">
  @import "../assets/variables";

.mini-player {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  height: 80px;
  font-size: 0.9em;
  padding: $spacer 0;
  background: #f8f8f8;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .2);

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.dark {
  .mini-player {
    background: rgba(30, 30, 30,0.8);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
  }

  .logo {
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 10px;
  }

}

.now-playing {
  flex-grow: 2;
}
</style>
