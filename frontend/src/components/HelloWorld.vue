<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
    <p>
      Hello World! Hello World! Hello World! Hello World! Hello World! Hello
      World!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['message'],
  data: () => ({
    message: '',
  }),
};
</script>
