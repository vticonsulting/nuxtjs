<template>
  <div class="p-4">
    <TCard />
    <NuxtLink to="about">
      <TButton>About</TButton>
    </NuxtLink>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
