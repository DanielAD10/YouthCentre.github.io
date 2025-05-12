<template>
  <div class="dropdown-container">
    <!-- Header (Clickable to Toggle Answer) -->
    <div class="dropdown-header" @click="toggleAnswer">
      <font-awesome-icon :icon="['fas', 'question']" class="question-icon" />
      <span class="dropdown-text">
        {{info.question}}
      </span>
      <font-awesome-icon 
          :icon="isOpen ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']"
          class="arrow-icon"
        />
    </div>
    <!-- Answer (Visible When isOpen is True) -->
    <div v-if="isOpen" class="dropdown-answer">
      {{info.answer}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['info'],
  setup() {
    let isOpen = ref(false);
    let toggleAnswer = () => {
      isOpen.value = !isOpen.value
    }

    return {isOpen, toggleAnswer}
  }
}
</script>

<style>
  /* Main container */
.dropdown-container {
  width: 500px;
  background-color: #9ACBD0;
  border: none;
  border-radius: 10px;
  color: #4C585B;
  font-size: 16px;
  margin: 0 auto;
}

.dropdown-container:hover {
  background-color: #D9EAFD;
}

/* Header with icon and text */
.dropdown-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
}

/* Question icon */
.question-icon {
  color: #4C585B;
  font-size: 18px;
  margin-right: 12px;
}

.arrow-icon {
  font-size: 18px;
  color: #4C585B;
  transition: transform 0.3s ease-in-out;
}

/* Answer section (hidden by default) */
.dropdown-answer {
  padding: 12px 16px;
  /* border-top: 1px solid #4C585B; */
  font-size: 14px;
  background-color: #D9EAFD;
  border-radius: 10px;
}
</style>