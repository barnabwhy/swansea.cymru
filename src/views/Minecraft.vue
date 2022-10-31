<script setup lang="ts">
import Panel from '@/components/Panel.vue'
</script>

<template>
  <main>
    <Panel central>
      <h1>Swansea Computer Science Minecraft Server</h1>
      <p>Members of the <b>Swansea CS Community</b> Discord server get access to our Minecraft server.</p>
      <br>
      <p>We run a Vanilla 1.19.2 server that has chat connected to the <code>#minecraft</code> channel on the Discord server as well as a modded server (currently running the Vault Hunters modpack).</p>
    </Panel>
    <Panel flexCenter background="rgba(0,0,0,0.1)">
      <img draggable="false" class="mikeImg" src="@/assets/mikecraft1.png">
      <div style="text-align: center;">
        <h3>Even a lecturer has been on the Minecraft server</h3>
        <p>(Lecturer approved server)</p>
      </div>
      <img draggable="false" class="mikeImg" src="@/assets/mikecraft2.png">
    </Panel>
  </main>
</template>

<style scoped>
.mikeImg {
  border-radius: 8px;
  width: 480px;
  max-width: calc(100% - 32px);
  aspect-ratio: 16/10;
  object-fit: cover;
  background: rgba(0,0,0,0.2);
}
</style>