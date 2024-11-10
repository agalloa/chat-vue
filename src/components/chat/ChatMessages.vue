<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!--- 
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { nextTick, ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

// Watch es un metodo que nos ayuda a monitorear los cambios en una propiedad
// watch(
//   () => messages,
//   () => {
//     setTimeout(() => {
//       chatRef.value?.scrollTo({
//         top: chatRef.value?.scrollHeight,
//         behavior: 'smooth',
//       });
//     }, 100);
//   },
// );

watch(
  () => messages,
  async () => {
    await nextTick();

    chatRef.value?.scrollTo({
      top: chatRef.value?.scrollHeight,
      behavior: 'smooth',
    });
  },
);
</script>
