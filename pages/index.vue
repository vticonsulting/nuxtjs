<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    const {data} = await this.$axios.get('projects')

    this.projects = data.map(project => {
      return {
        ...project,
        status: 'pending',
      }
    })
  },
})
</script>
<template>
  <div class="p-4">
    <div class="projects">
      {{ projects }}
    </div>

    <TCard />
    <NuxtLink to="about">
      <TButton>About</TButton>
    </NuxtLink>
  </div>
</template>

<style lang="postcss">
.test {
  color: rgb(40, 176, 218);
  @apply p-4;

  &_working {
    @apply text-green-500;
  }

  &_gray {
    color: gray(50);
  }
}
</style>
