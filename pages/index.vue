<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      messages: [],
    }
  },
  async fetch() {
    const {data} = await this.$axios.get('messages')
    this.messages = data.map(message => {
      return {
        ...message,
        isRead: false,
      }
    })
  },
})
</script>
<template>
  <div class="p-4">
    <CelebrationButton />
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
