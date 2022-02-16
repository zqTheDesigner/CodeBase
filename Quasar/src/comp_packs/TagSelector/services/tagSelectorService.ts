import { ref, computed } from 'vue';

/**
 * This serves as a global store to save the options,
 * since it is a global element,  keep it as saperate
 * service file and  imported by TagOptions component
 */
const optionsRef = ref(['Monday']);

function addOption(optionToAdd: string) {
  const idxToAdd = optionsRef.value.findIndex(
    (option) => option === optionToAdd
  );
  if (idxToAdd === -1) {
    optionsRef.value.push(optionToAdd);
  }
}

export default () => {
  return {
    options: computed(() => optionsRef.value),
    addOption,
  };
};
