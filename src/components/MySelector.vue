<template>
    <select :content="modelValue" @update:content="$emit('update:modelValue', $event)" @change="changeOption">
        <option selected value="default">По умолчанию</option>
        <option v-for="option in options" :key="option.value" :value="option.value"> {{option.name}}</option>
    </select>
</template>

<script>
export default {

  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style>

</style>