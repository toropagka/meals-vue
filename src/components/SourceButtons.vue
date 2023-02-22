<template>
  <div class="p-3 flex self-center gap-3">
    <a :href="href" target="_blank" class="p-3 rounded-md bg-red-600 text-white"
      >YouTube</a
    >
    <a
      :href="source"
      target="_blank"
      class="p-3 px-6 rounded-md bg-blue-600 text-white"
      >View</a
    >
  </div>
</template>

<script setup>
const props = defineProps({
  href: String,
  source: String,
});
</script>
