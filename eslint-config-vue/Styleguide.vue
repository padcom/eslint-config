<template>
  <div key="123" class="example" :class="{ enabled }">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const message = ref('Hello, world!')
const enabled = computed(() => message.value?.length > 5)
</script>

<style lang="postcss">
.example {
  @apply red;
}
</style>
