<template>
  <v-app>
    <v-main>
      <Calendar></Calendar>
    </v-main>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'App',
  components: {
    Calendar,
  },
};
</script>
