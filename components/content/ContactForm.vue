<template>
  <!--
    This component uses @tailwindcss/forms

    yarn add @tailwindcss/forms
    npm install @tailwindcss/forms

    plugins: [require('@tailwindcss/forms')]
  -->

  <section class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <slot />
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Votre nom</label>
              <input
                id="name"
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Votre nom"
                type="text"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Votre e-mail</label>
                <input
                  id="email"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Votre e-mail"
                  type="email"
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Votre téléphone</label>
                <input
                  id="phone"
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Votre téléphone"
                  type="tel"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  id="option1"
                  class="peer sr-only"
                  type="radio"
                  tabindex="-1"
                  name="option"
                  checked
                />

                <label
                  for="option1"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Renseignement </span>
                </label>
              </div>

              <div>
                <input
                  id="option2"
                  class="peer sr-only"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option2"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Financement </span>
                </label>
              </div>

              <div>
                <input
                  id="option3"
                  class="peer sr-only"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option3"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Autre </span>
                </label>
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Votre message</label>

              <textarea
                id="message"
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Votre message"
                rows="8"
              ></textarea>
            </div>

            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

<style scoped></style>
