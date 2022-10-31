<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Panel from '@/components/Panel.vue'
</script>

<template>
  <main>
    <Hero />
    <Panel flexCenter><h1>Useful Links</h1></Panel>
    <Panel flexCenter background="rgba(0,0,0,0.1)">
      <RouterLink class="usefulLink" to="uni" target="_blank"><span>University Website</span></RouterLink>
      <RouterLink class="usefulLink" to="slc" target="_blank"><span>Student Finance England</span></RouterLink>
      <RouterLink class="usefulLink" to="canvas" target="_blank"><span>Canvas</span></RouterLink>
      <RouterLink class="usefulLink" to="outlook" target="_blank"><span>Outlook</span></RouterLink>
      <a class="usefulLink" href="https://timetable.swansea.cymru" target="_blank"><span>Timetable</span></a>
    </Panel>
    <br><br><br>
    <Panel flexCenter>
      <h1>Our Minecraft server</h1>
    </Panel>
    <Panel flexCenter background="rgba(0,0,0,0.1)">
      <RouterLink class="usefulLink" to="minecraft"><span>About</span></RouterLink>
      <a class="usefulLink" href="https://mcmap.swansea.cymru" target="_blank"><span>Map</span></a>
    </Panel>
  </main>
</template>

<style scoped>
.usefulLink {
  background-color: var(--c-primary);
  height: 120px;
  width: 240px;
  padding: 8px;
  margin: 0px 16px 16px 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  /* border: 4px solid rgba(127,127,127,0.15); */
  text-decoration: none;
}
.usefulLink > span {
  margin: auto;
  color: var(--c-text-dark-2);
  font-weight: bold;
  text-align: center;
}
.usefulLink:hover {
  border: 4px solid rgba(255,255,255,0.15);
}
.usefulLink:hover > span {
  color: var(--c-text-dark-1);
}
</style>