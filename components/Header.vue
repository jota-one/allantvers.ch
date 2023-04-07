<template>
  <div class="shadow-amber-700">
      <NuxtLink href="/"><img src="/img/logo.png" class="w-40" /></NuxtLink>
  </div>
  <ContentNavigation class="navigation" />
</template>

<script setup lang="ts">
</script>
<style>
.navigation {
    @apply flex;
    li {
        @apply p-4;
    }
}
</style>
