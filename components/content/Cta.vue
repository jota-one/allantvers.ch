<template>
  <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
    <img
      alt="rivière"
      src="https://images.unsplash.com/photo-1557242836-b5ab8bb0ebb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-56 w-full object-cover sm:h-full sm:order-last"
    />
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center sm:text-left">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          On fait des tas de trucs!
        </h2>

        <p class="text-gray-500 md:mt-4">
          Là normalement on explique un peu ce qu'on fait, mais genre vite fait,
          quoi! Bon faut quand-même donner envie de cliquer sur le bouton. Par
          exemple, si je vous dis: on a un nouveau camp qui démarre cet été.
          Paf! Ca pète!
        </p>

        <div class="mt-4 md:mt-8">
          <NuxtLink
            href="/projects/totem"
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Et donc tu cliques...
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
