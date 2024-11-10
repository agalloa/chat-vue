<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Contacto</span>
    </div>

    <ChatMessages :messages="messages" />
    <ChatMessageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessageBox from '@/components/chat/ChatMessageBox.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import { useChat } from '@/composables/useChat';

//propiedad reactiva y composable
const { messages, onMessage } = useChat();
</script>
