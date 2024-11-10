<!-- Single file component -->
<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter();

/*Formas para definir props: 

const props = defineProps({
  value: { type: Number, required: true },
});

const props = defineProps<{
  value: number;
}>();


*/

// interface Props {
//   value: number;
// }

// const props = defineProps<Props>();

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply p-1 bg-gray-600 mr-3 ml-3 rounded text-white;
}
</style>
