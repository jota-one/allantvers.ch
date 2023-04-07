<template>
  <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
    <img
      alt="rivière"
      src="https://images.unsplash.com/photo-1557242836-b5ab8bb0ebb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-56 w-full object-cover sm:h-full sm:order-last"
    />
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center sm:text-left">
        <slot />

        <div class="mt-4 md:mt-8">
          <NuxtLink
            href="/projects/totem"
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            {{ cta }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  cta: string
}
defineProps<Props>()
</script>
