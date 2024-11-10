import { ref, computed } from "vue";


//estados globales
// const counter = ref(15);

export const useCounter = (initialValue: number = 5) => {

    const counter = ref(initialValue);
    const squareCounter = computed(() => counter.value * counter.value);

    return {
        counter,
        squareCounter
    };
}